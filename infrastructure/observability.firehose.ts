/** import type {} from '../.sst/platform/config'
import { logBucket } from './observability.bucket'

const policy = aws.iam.getPolicyDocument({
    statements: [
        {
            effect: 'Allow',
            principals: [
                {
                    type: 'Service',
                    identifiers: ['firehose.amazonaws.com'],
                },
            ],
            actions: ['sts:AssumeRole'],
        },
        {
            effect: 'Allow',
            principals: [
                {
                    type: 'Service',
                    identifiers: ['firehose.amazonaws.com'],
                },
            ],
            actions: ['s3:PutObject'],
        },
    ],
})

export const firehoseRole = new aws.iam.Role('firehose_role', {
    name: 'firehose_test_role',
    assumeRolePolicy: policy.then(
        (logFirehoseStreamAssumeRolePolicy) =>
            logFirehoseStreamAssumeRolePolicy.json,
    ),
}) 

// const lambdaAssumeRole = aws.iam.getPolicyDocument({
//     statements: [
//         {
//             effect: 'Allow',
//             principals: [
//                 {
//                     type: 'Service',
//                     identifiers: ['lambda.amazonaws.com'],
//                 },
//             ],
//             actions: ['sts:AssumeRole'],
//         },
//     ],
// })
// const lambdaIam = new aws.iam.Role('lambda_iam', {
//     name: 'lambda_iam',
//     assumeRolePolicy: lambdaAssumeRole.then(
//         (lambdaAssumeRole) => lambdaAssumeRole.json,
//     ),
// })
// const lambdaProcessor = new aws.lambda.Function('lambda_processor', {
//     code: new pulumi.asset.FileArchive('lambda.zip'),
//     name: 'firehose_lambda_processor',
//     role: lambdaIam.arn,
//     handler: 'exports.handler',
//     runtime: aws.lambda.Runtime.NodeJS20dX,
// })

// (2) process logs by converting them to parquet and specifying a bucket for them to be stored in.
const logFirehoseStream = new aws.kinesis.FirehoseDeliveryStream(
    'firehose_log_stream',
    {
        name: 'kinesis-firehose-log-stream',
        destination: 'extended_s3',
        extendedS3Configuration: {
            roleArn: firehoseRole.arn,
            bucketArn: logBucket.arn,
            // processingConfiguration: {
            //     enabled: true,
            //     processors: [
            //         {
            //             type: 'Lambda',
            //             parameters: [
            //                 {
            //                     parameterName: 'LambdaArn',
            //                     parameterValue: pulumi.interpolate`${lambdaProcessor.arn}:$LATEST`,
            //                 },
            //             ],
            //         },
            //     ],
            // },
        },
    },
)

export const outputs = {
    logFirehoseStreamArn: logFirehoseStream.arn,
}

*/
