/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft
   * OperationsManagement.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed
   * etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Type of operation: get, read, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Supported operation of OperationalInsights resource provider.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Display metadata associated with the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing LinkedService.
 * The top level Linked service resource container.
 *
 * @extends BaseResource
 */
export interface LinkedService extends BaseResource {
  /**
   * @member {string} resourceId The resource id of the resource that will be
   * linked to the workspace.
   */
  resourceId: string;
}

/**
 * @interface
 * An interface representing DataSource.
 * Datasources under OMS Workspace.
 *
 * @extends BaseResource
 */
export interface DataSource extends BaseResource {
  /**
   * @member {any} properties The data source properties in raw json format,
   * each kind of data source have it's own schema.
   */
  properties: any;
  /**
   * @member {string} [eTag] The ETag of the data source.
   */
  eTag?: string;
  /**
   * @member {DataSourceKind} kind Possible values include: 'AzureActivityLog',
   * 'ChangeTrackingPath', 'ChangeTrackingDefaultPath',
   * 'ChangeTrackingDefaultRegistry', 'ChangeTrackingCustomRegistry',
   * 'CustomLog', 'CustomLogCollection', 'GenericDataSource', 'IISLogs',
   * 'LinuxPerformanceObject', 'LinuxPerformanceCollection', 'LinuxSyslog',
   * 'LinuxSyslogCollection', 'WindowsEvent', 'WindowsPerformanceCounter'
   */
  kind: DataSourceKind;
}

/**
 * @interface
 * An interface representing DataSourceFilter.
 * DataSource filter. Right now, only filter by kind is supported.
 *
 */
export interface DataSourceFilter {
  /**
   * @member {DataSourceKind} [kind] Possible values include:
   * 'AzureActivityLog', 'ChangeTrackingPath', 'ChangeTrackingDefaultPath',
   * 'ChangeTrackingDefaultRegistry', 'ChangeTrackingCustomRegistry',
   * 'CustomLog', 'CustomLogCollection', 'GenericDataSource', 'IISLogs',
   * 'LinuxPerformanceObject', 'LinuxPerformanceCollection', 'LinuxSyslog',
   * 'LinuxSyslogCollection', 'WindowsEvent', 'WindowsPerformanceCounter'
   */
  kind?: DataSourceKind;
}

/**
 * @interface
 * An interface representing IntelligencePack.
 * Intelligence Pack containing a string name and boolean indicating if it's
 * enabled.
 *
 */
export interface IntelligencePack {
  /**
   * @member {string} [name] The name of the intelligence pack.
   */
  name?: string;
  /**
   * @member {boolean} [enabled] The enabled boolean for the intelligence pack.
   */
  enabled?: boolean;
  /**
   * @member {string} [displayName] The display name of the intelligence pack.
   */
  displayName?: string;
}

/**
 * @interface
 * An interface representing SharedKeys.
 * The shared keys for a workspace.
 *
 */
export interface SharedKeys {
  /**
   * @member {string} [primarySharedKey] The primary shared key of a workspace.
   */
  primarySharedKey?: string;
  /**
   * @member {string} [secondarySharedKey] The secondary shared key of a
   * workspace.
   */
  secondarySharedKey?: string;
}

/**
 * @interface
 * An interface representing MetricName.
 * The name of a metric.
 *
 */
export interface MetricName {
  /**
   * @member {string} [value] The system name of the metric.
   */
  value?: string;
  /**
   * @member {string} [localizedValue] The localized name of the metric.
   */
  localizedValue?: string;
}

/**
 * @interface
 * An interface representing UsageMetric.
 * A metric describing the usage of a resource.
 *
 */
export interface UsageMetric {
  /**
   * @member {MetricName} [name] The name of the metric.
   */
  name?: MetricName;
  /**
   * @member {string} [unit] The units used for the metric.
   */
  unit?: string;
  /**
   * @member {number} [currentValue] The current value of the metric.
   */
  currentValue?: number;
  /**
   * @member {number} [limit] The quota limit for the metric.
   */
  limit?: number;
  /**
   * @member {Date} [nextResetTime] The time that the metric's value will
   * reset.
   */
  nextResetTime?: Date;
  /**
   * @member {string} [quotaPeriod] The quota period that determines the length
   * of time between value resets.
   */
  quotaPeriod?: string;
}

/**
 * @interface
 * An interface representing ManagementGroup.
 * A management group that is connected to a workspace
 *
 */
export interface ManagementGroup {
  /**
   * @member {number} [serverCount] The number of servers connected to the
   * management group.
   */
  serverCount?: number;
  /**
   * @member {boolean} [isGateway] Gets or sets a value indicating whether the
   * management group is a gateway.
   */
  isGateway?: boolean;
  /**
   * @member {string} [name] The name of the management group.
   */
  name?: string;
  /**
   * @member {string} [id] The unique ID of the management group.
   */
  id?: string;
  /**
   * @member {Date} [created] The datetime that the management group was
   * created.
   */
  created?: Date;
  /**
   * @member {Date} [dataReceived] The last datetime that the management group
   * received data.
   */
  dataReceived?: Date;
  /**
   * @member {string} [version] The version of System Center that is managing
   * the management group.
   */
  version?: string;
  /**
   * @member {string} [sku] The SKU of System Center that is managing the
   * management group.
   */
  sku?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * The SKU (tier) of a workspace.
 *
 */
export interface Sku {
  /**
   * @member {SkuNameEnum} name The name of the SKU. Possible values include:
   * 'Free', 'Standard', 'Premium', 'Unlimited', 'PerNode', 'PerGB2018',
   * 'Standalone'
   */
  name: SkuNameEnum;
}

/**
 * @interface
 * An interface representing Workspace.
 * The top level Workspace resource container.
 *
 * @extends BaseResource
 */
export interface Workspace extends BaseResource {
  /**
   * @member {EntityStatus} [provisioningState] The provisioning state of the
   * workspace. Possible values include: 'Creating', 'Succeeded', 'Failed',
   * 'Canceled', 'Deleting', 'ProvisioningAccount'
   */
  provisioningState?: EntityStatus;
  /**
   * @member {string} [source] The source of the workspace.  Source defines
   * where the workspace was created. 'Azure' implies it was created in Azure.
   * 'External' implies it was created via the Operational Insights Portal.
   * This value is set on the service side and read-only on the client side.
   */
  source?: string;
  /**
   * @member {string} [customerId] The ID associated with the workspace.
   * Setting this value at creation time allows the workspace being created to
   * be linked to an existing workspace.
   */
  customerId?: string;
  /**
   * @member {string} [portalUrl] The URL of the Operational Insights portal
   * for this workspace.  This value is set on the service side and read-only
   * on the client side.
   */
  portalUrl?: string;
  /**
   * @member {Sku} [sku] The SKU of the workspace.
   */
  sku?: Sku;
  /**
   * @member {number} [retentionInDays] The workspace data retention in days.
   * -1 means Unlimited retention for the Unlimited Sku. 730 days is the
   * maximum allowed for all other Skus.
   */
  retentionInDays?: number;
  /**
   * @member {string} [eTag] The ETag of the workspace.
   */
  eTag?: string;
}

/**
 * @interface
 * An interface representing Resource.
 * The resource definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ProxyResource.
 * Common properties of proxy resource.
 *
 */
export interface ProxyResource {
  /**
   * @member {string} [id] Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing DataSourcesListByWorkspaceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DataSourcesListByWorkspaceOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Starting point of the collection of data
   * source instances.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing OperationalInsightsManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface OperationalInsightsManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the LinkedServiceListResult.
 * The list linked service operation response.
 *
 * @extends Array<LinkedService>
 */
export interface LinkedServiceListResult extends Array<LinkedService> {
}

/**
 * @interface
 * An interface representing the DataSourceListResult.
 * The list data source by workspace operation response.
 *
 * @extends Array<DataSource>
 */
export interface DataSourceListResult extends Array<DataSource> {
  /**
   * @member {string} [nextLink] The link (url) to the next page of
   * datasources.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the WorkspaceListUsagesResult.
 * The list workspace usages operation response.
 *
 * @extends Array<UsageMetric>
 */
export interface WorkspaceListUsagesResult extends Array<UsageMetric> {
}

/**
 * @interface
 * An interface representing the WorkspaceListManagementGroupsResult.
 * The list workspace managmement groups operation response.
 *
 * @extends Array<ManagementGroup>
 */
export interface WorkspaceListManagementGroupsResult extends Array<ManagementGroup> {
}

/**
 * @interface
 * An interface representing the WorkspaceListResult.
 * The list workspaces operation response.
 *
 * @extends Array<Workspace>
 */
export interface WorkspaceListResult extends Array<Workspace> {
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list solution operations.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for DataSourceKind.
 * Possible values include: 'AzureActivityLog', 'ChangeTrackingPath', 'ChangeTrackingDefaultPath',
 * 'ChangeTrackingDefaultRegistry', 'ChangeTrackingCustomRegistry', 'CustomLog',
 * 'CustomLogCollection', 'GenericDataSource', 'IISLogs', 'LinuxPerformanceObject',
 * 'LinuxPerformanceCollection', 'LinuxSyslog', 'LinuxSyslogCollection', 'WindowsEvent',
 * 'WindowsPerformanceCounter'
 * @readonly
 * @enum {string}
 */
export type DataSourceKind = 'AzureActivityLog' | 'ChangeTrackingPath' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingCustomRegistry' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceObject' | 'LinuxPerformanceCollection' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter';

/**
 * Defines values for SkuNameEnum.
 * Possible values include: 'Free', 'Standard', 'Premium', 'Unlimited', 'PerNode', 'PerGB2018',
 * 'Standalone'
 * @readonly
 * @enum {string}
 */
export type SkuNameEnum = 'Free' | 'Standard' | 'Premium' | 'Unlimited' | 'PerNode' | 'PerGB2018' | 'Standalone';

/**
 * Defines values for EntityStatus.
 * Possible values include: 'Creating', 'Succeeded', 'Failed', 'Canceled', 'Deleting',
 * 'ProvisioningAccount'
 * @readonly
 * @enum {string}
 */
export type EntityStatus = 'Creating' | 'Succeeded' | 'Failed' | 'Canceled' | 'Deleting' | 'ProvisioningAccount';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type LinkedServicesCreateOrUpdateResponse = LinkedService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LinkedService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type LinkedServicesGetResponse = LinkedService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LinkedService;
    };
};

/**
 * Contains response data for the listByWorkspace operation.
 */
export type LinkedServicesListByWorkspaceResponse = LinkedServiceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LinkedServiceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DataSourcesCreateOrUpdateResponse = DataSource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DataSource;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DataSourcesGetResponse = DataSource & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DataSource;
    };
};

/**
 * Contains response data for the listByWorkspace operation.
 */
export type DataSourcesListByWorkspaceResponse = DataSourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DataSourceListResult;
    };
};

/**
 * Contains response data for the listByWorkspaceNext operation.
 */
export type DataSourcesListByWorkspaceNextResponse = DataSourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DataSourceListResult;
    };
};

/**
 * Contains response data for the listIntelligencePacks operation.
 */
export type WorkspacesListIntelligencePacksResponse = Array<IntelligencePack> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IntelligencePack[];
    };
};

/**
 * Contains response data for the getSharedKeys operation.
 */
export type WorkspacesGetSharedKeysResponse = SharedKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SharedKeys;
    };
};

/**
 * Contains response data for the listUsages operation.
 */
export type WorkspacesListUsagesResponse = WorkspaceListUsagesResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WorkspaceListUsagesResult;
    };
};

/**
 * Contains response data for the listManagementGroups operation.
 */
export type WorkspacesListManagementGroupsResponse = WorkspaceListManagementGroupsResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WorkspaceListManagementGroupsResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type WorkspacesListByResourceGroupResponse = WorkspaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type WorkspacesListResponse = WorkspaceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WorkspaceListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type WorkspacesCreateOrUpdateResponse = Workspace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the get operation.
 */
export type WorkspacesGetResponse = Workspace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the update operation.
 */
export type WorkspacesUpdateResponse = Workspace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type WorkspacesBeginCreateOrUpdateResponse = Workspace & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Workspace;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};