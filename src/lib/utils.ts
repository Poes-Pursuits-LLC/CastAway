import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const handleAsync = async <T>(
    fn: Promise<T>,
): Promise<[T | null, null | Error]> => {
    try {
        const result = await fn
        return [result, null]
    } catch (error) {
        return [null, error as Error]
    }
}

export async function resolvePromises<
    const T extends readonly PromiseObject<unknown>[],
>(promises: T) {
    const settledPromises = await Promise.allSettled(
        promises.map((p) => p.promise),
    )

    let errorMessage = ''
    const results = settledPromises.map((settledPromise, index) => {
        if (settledPromise.status === 'fulfilled') {
            return settledPromise.value as PromiseResult<T[number]['promise']>
        } else {
            const promiseObject = promises[index]!
            if (promiseObject.required) {
                console.error(
                    '❌ resolvePromises error:',
                    settledPromise.reason,
                )
                errorMessage = settledPromise.reason
            } else {
                console.error(
                    '❌ resolvePromises error:',
                    settledPromise.reason,
                )
                return null
            }
        }
    }) as PromiseResults<T>

    return {
        results,
        errorMessage,
    }
}

type PromiseObject<T> = {
    promise: Promise<T>
    required?: boolean
}

type PromiseResult<T> = T extends Promise<infer U> ? U : never

// add pLimit use for max concurrency control
type PromiseResults<T extends readonly PromiseObject<unknown>[]> = {
    [K in keyof T]: T[K]['required'] extends true
        ? PromiseResult<T[K]['promise']>
        : PromiseResult<T[K]['promise']> | null
}
