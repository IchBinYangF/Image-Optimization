"use strict";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCustomResource = void 0;
const cdk = require("aws-cdk-lib");
const logs = require("aws-cdk-lib/aws-logs");
const cr = require("aws-cdk-lib/custom-resources");
const lambda = require("aws-cdk-lib/aws-lambda");
const constructs_1 = require("constructs");
class MyCustomResource extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const onEvent = new lambda.SingletonFunction(this, 'Singleton', {
            uuid: 'f7d4f730-4ee1-11e8-9c2d-fa7ae01bbebc',
            code: lambda.Code.fromAsset('functions/custom-resource'),
            handler: 'index.on_event',
            timeout: cdk.Duration.seconds(300),
            runtime: lambda.Runtime.PYTHON_3_9,
            logRetention: logs.RetentionDays.ONE_DAY,
        });
        const myProvider = new cr.Provider(this, 'MyProvider', {
            onEventHandler: onEvent,
            logRetention: logs.RetentionDays.ONE_DAY
        });
        const resource = new cdk.CustomResource(this, 'Resource1', { serviceToken: myProvider.serviceToken, properties: props });
        this.hostname = resource.getAtt('HostName').toString();
    }
}
exports.MyCustomResource = MyCustomResource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktY3VzdG9tLXJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXktY3VzdG9tLXJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxRUFBcUU7QUFDckUsaUNBQWlDOzs7QUFFakMsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QyxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELDJDQUF1QztBQU12QyxNQUFhLGdCQUFpQixTQUFRLHNCQUFTO0lBRzdDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBNEI7UUFDcEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUdqQixNQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzlELElBQUksRUFBRSxzQ0FBc0M7WUFDNUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDO1lBQ3hELE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNsQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ2xDLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87U0FDekMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDckQsY0FBYyxFQUFFLE9BQU87WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN6QyxDQUFDLENBQUM7UUFFSCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRXpILElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV6RCxDQUFDO0NBQ0Y7QUExQkQsNENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlULTBcblxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGxvZ3MgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxvZ3MnO1xuaW1wb3J0ICogYXMgY3IgZnJvbSAnYXdzLWNkay1saWIvY3VzdG9tLXJlc291cmNlcyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBNeUN1c3RvbVJlc291cmNlUHJvcHMge1xuICBVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE15Q3VzdG9tUmVzb3VyY2UgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICBwdWJsaWMgcmVhZG9ubHkgaG9zdG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTXlDdXN0b21SZXNvdXJjZVByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuXG4gICAgY29uc3Qgb25FdmVudCA9IG5ldyBsYW1iZGEuU2luZ2xldG9uRnVuY3Rpb24odGhpcywgJ1NpbmdsZXRvbicsIHtcbiAgICAgIHV1aWQ6ICdmN2Q0ZjczMC00ZWUxLTExZTgtOWMyZC1mYTdhZTAxYmJlYmMnLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdmdW5jdGlvbnMvY3VzdG9tLXJlc291cmNlJyksXG4gICAgICBoYW5kbGVyOiAnaW5kZXgub25fZXZlbnQnLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKSxcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLlBZVEhPTl8zXzksXG4gICAgICBsb2dSZXRlbnRpb246IGxvZ3MuUmV0ZW50aW9uRGF5cy5PTkVfREFZLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbXlQcm92aWRlciA9IG5ldyBjci5Qcm92aWRlcih0aGlzLCAnTXlQcm92aWRlcicsIHtcbiAgICAgIG9uRXZlbnRIYW5kbGVyOiBvbkV2ZW50LFxuICAgICAgbG9nUmV0ZW50aW9uOiBsb2dzLlJldGVudGlvbkRheXMuT05FX0RBWSAgXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXNvdXJjZSA9IG5ldyBjZGsuQ3VzdG9tUmVzb3VyY2UodGhpcywgJ1Jlc291cmNlMScsIHsgc2VydmljZVRva2VuOiBteVByb3ZpZGVyLnNlcnZpY2VUb2tlbiwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICB0aGlzLmhvc3RuYW1lID0gcmVzb3VyY2UuZ2V0QXR0KCdIb3N0TmFtZScpLnRvU3RyaW5nKCk7XG5cbiAgfVxufSJdfQ==