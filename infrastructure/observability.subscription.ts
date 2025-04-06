/** import { server } from './server'
import { outputs as logFirehoseOutputs } from './observability.firehose'

const policy = aws.iam.getPolicyDocument({
    statements: [
        {
            effect: 'Allow',
            actions: ['sts:AssumeRole'],
        },
        {
            effect: 'Allow',
            actions: ['firehose:PutRecord', 'firehose:PutRecordBatch'],
        },
    ],
})

const cloudWatchLogsRole = new aws.iam.Role('cloudwatch_logs_role', {
    name: 'cloudwatch-to-firehose-role',
    assumeRolePolicy: policy.then(
        (cloudWatchLogsAssumeRolePolicy) => cloudWatchLogsAssumeRolePolicy.json,
    ),
})

// (1): send logs from our server lambda log group to the firehose for processing.
const serverLogSubscription = new aws.cloudwatch.LogSubscriptionFilter(
    'LogSubscriptionFilter',
    {
        logGroup: server.nodes.logGroup.apply((group) => group ?? ''),
        destinationArn: logFirehoseOutputs.logFirehoseStreamArn,
        roleArn: cloudWatchLogsRole.arn,
        filterPattern: '',
    },
)

export const outputs = {
    serverLogSubscription,
}
*/
