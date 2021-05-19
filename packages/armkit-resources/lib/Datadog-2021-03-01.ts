// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.Datadog/monitors
 *
 * @schema Microsoft.Datadog.monitors
 */
export class Monitors extends ArmResource {
  /**
   * Defines a "Microsoft.Datadog.monitors" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MonitorsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'monitors',
    });
  }
}

/**
 * Microsoft.Datadog/monitors/singleSignOnConfigurations
 *
 * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations
 */
export class MonitorsSingleSignOnConfigurations extends ArmResource {
  /**
   * Defines a "Microsoft.Datadog.monitors_singleSignOnConfigurations" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MonitorsSingleSignOnConfigurationsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'monitors_singleSignOnConfigurations',
    });
  }
}

/**
 * Microsoft.Datadog/monitors/tagRules
 *
 * @schema Microsoft.Datadog.monitors_tagRules
 */
export class MonitorsTagRules extends ArmResource {
  /**
   * Defines a "Microsoft.Datadog.monitors_tagRules" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MonitorsTagRulesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'monitors_tagRules',
    });
  }
}

/**
 * Microsoft.Datadog/monitors
 *
 * @schema Microsoft.Datadog.monitors
 */
export interface MonitorsOptions {
  /**
   * @schema Microsoft.Datadog.monitors#apiVersion
   */
  readonly apiVersion?: MicrosoftDatadogMonitorsApiVersion;

  /**
   * @schema Microsoft.Datadog.monitors#identity
   */
  readonly identity?: IdentityProperties;

  /**
   * @schema Microsoft.Datadog.monitors#location
   */
  readonly location: string;

  /**
   * Monitor resource name
   *
   * @schema Microsoft.Datadog.monitors#name
   */
  readonly name: string;

  /**
   * Properties specific to the monitor resource.
   *
   * @schema Microsoft.Datadog.monitors#properties
   */
  readonly properties: MonitorProperties;

  /**
   * @schema Microsoft.Datadog.monitors#resources
   */
  readonly resources?: MicrosoftDatadogMonitorsResources[];

  /**
   * @schema Microsoft.Datadog.monitors#sku
   */
  readonly sku?: ResourceSku;

  /**
   * @schema Microsoft.Datadog.monitors#tags
   */
  readonly tags?: MicrosoftDatadogMonitorsTags;

  /**
   * @schema Microsoft.Datadog.monitors#type
   */
  readonly type: MicrosoftDatadogMonitorsType;

}

/**
 * Microsoft.Datadog/monitors/singleSignOnConfigurations
 *
 * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations
 */
export interface MonitorsSingleSignOnConfigurationsOptions {
  /**
   * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations#apiVersion
   */
  readonly apiVersion?: MicrosoftDatadogMonitorsSingleSignOnConfigurationsApiVersion;

  /**
   * Configuration name
   *
   * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations#name
   */
  readonly name: string;

  /**
   * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations#properties
   */
  readonly properties: DatadogSingleSignOnProperties;

  /**
   * @schema Microsoft.Datadog.monitors_singleSignOnConfigurations#type
   */
  readonly type: MicrosoftDatadogMonitorsSingleSignOnConfigurationsType;

}

/**
 * Microsoft.Datadog/monitors/tagRules
 *
 * @schema Microsoft.Datadog.monitors_tagRules
 */
export interface MonitorsTagRulesOptions {
  /**
   * @schema Microsoft.Datadog.monitors_tagRules#apiVersion
   */
  readonly apiVersion?: MicrosoftDatadogMonitorsTagRulesApiVersion;

  /**
   * Rule set name
   *
   * @schema Microsoft.Datadog.monitors_tagRules#name
   */
  readonly name: string;

  /**
   * Definition of the properties for a TagRules resource.
   *
   * @schema Microsoft.Datadog.monitors_tagRules#properties
   */
  readonly properties: MonitoringTagRulesProperties;

  /**
   * @schema Microsoft.Datadog.monitors_tagRules#type
   */
  readonly type: MicrosoftDatadogMonitorsTagRulesType;

}

export enum MicrosoftDatadogMonitorsApiVersion {
  "MicrosoftDatadogMonitorsApiVersion_2021_03_01" = '2021-03-01',
}

/**
 * @schema #/definitions/IdentityProperties
 */
export interface IdentityProperties {
  /**
   * @schema #/definitions/IdentityProperties#type
   */
  readonly type?: IdentityPropertiesType;

}

/**
 * Properties specific to the monitor resource.
 *
 * @schema #/definitions/MonitorProperties
 */
export interface MonitorProperties {
  /**
   * Datadog organization properties
   *
   * @schema #/definitions/MonitorProperties#datadogOrganizationProperties
   */
  readonly datadogOrganizationProperties?: DatadogOrganizationProperties;

  /**
   * @schema #/definitions/MonitorProperties#liftrResourceCategory
   */
  readonly liftrResourceCategory?: MonitorPropertiesLiftrResourceCategory;

  /**
   * @schema #/definitions/MonitorProperties#marketplaceSubscriptionStatus
   */
  readonly marketplaceSubscriptionStatus?: MonitorPropertiesMarketplaceSubscriptionStatus;

  /**
   * @schema #/definitions/MonitorProperties#monitoringStatus
   */
  readonly monitoringStatus?: MonitorPropertiesMonitoringStatus;

  /**
   * @schema #/definitions/MonitorProperties#provisioningState
   */
  readonly provisioningState?: MonitorPropertiesProvisioningState;

  /**
   * User info
   *
   * @schema #/definitions/MonitorProperties#userInfo
   */
  readonly userInfo?: UserInfo;

}

/**
 * @schema MicrosoftDatadogMonitorsResources
 */
export class MicrosoftDatadogMonitorsResources {
  public static fromMonitorsTagRulesChildResource(value: MonitorsTagRulesChildResource): MicrosoftDatadogMonitorsResources {
    return new MicrosoftDatadogMonitorsResources(value);
  }
  public static fromMonitorsSingleSignOnConfigurationsChildResource(value: MonitorsSingleSignOnConfigurationsChildResource): MicrosoftDatadogMonitorsResources {
    return new MicrosoftDatadogMonitorsResources(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * @schema #/definitions/ResourceSku
 */
export interface ResourceSku {
  /**
   * Name of the SKU.
   *
   * @schema #/definitions/ResourceSku#name
   */
  readonly name: string;

}

/**
 * @schema MicrosoftDatadogMonitorsTags
 */
export interface MicrosoftDatadogMonitorsTags {
}

export enum MicrosoftDatadogMonitorsType {
  "MicrosoftDatadogMonitorsType_MICROSOFT_DATADOG_MONITORS" = 'Microsoft.Datadog/monitors',
}

export enum MicrosoftDatadogMonitorsSingleSignOnConfigurationsApiVersion {
  "MicrosoftDatadogMonitorsSingleSignOnConfigurationsApiVersion_2021_03_01" = '2021-03-01',
}

/**
 * @schema #/definitions/DatadogSingleSignOnProperties
 */
export interface DatadogSingleSignOnProperties {
  /**
   * The Id of the Enterprise App used for Single sign-on.
   *
   * @schema #/definitions/DatadogSingleSignOnProperties#enterpriseAppId
   */
  readonly enterpriseAppId?: string;

  /**
   * @schema #/definitions/DatadogSingleSignOnProperties#provisioningState
   */
  readonly provisioningState?: DatadogSingleSignOnPropertiesProvisioningState;

  /**
   * @schema #/definitions/DatadogSingleSignOnProperties#singleSignOnState
   */
  readonly singleSignOnState?: DatadogSingleSignOnPropertiesSingleSignOnState;

}

export enum MicrosoftDatadogMonitorsSingleSignOnConfigurationsType {
  "MicrosoftDatadogMonitorsSingleSignOnConfigurationsType_MICROSOFT_DATADOG_MONITORS_SINGLE_SIGN_ON_CONFIGURATIONS" = 'Microsoft.Datadog/monitors/singleSignOnConfigurations',
}

export enum MicrosoftDatadogMonitorsTagRulesApiVersion {
  "MicrosoftDatadogMonitorsTagRulesApiVersion_2021_03_01" = '2021-03-01',
}

/**
 * Definition of the properties for a TagRules resource.
 *
 * @schema #/definitions/MonitoringTagRulesProperties
 */
export interface MonitoringTagRulesProperties {
  /**
   * Set of rules for sending logs for the Monitor resource.
   *
   * @schema #/definitions/MonitoringTagRulesProperties#logRules
   */
  readonly logRules?: LogRules;

  /**
   * Set of rules for sending metrics for the Monitor resource.
   *
   * @schema #/definitions/MonitoringTagRulesProperties#metricRules
   */
  readonly metricRules?: MetricRules;

  /**
   * @schema #/definitions/MonitoringTagRulesProperties#provisioningState
   */
  readonly provisioningState?: MonitoringTagRulesPropertiesProvisioningState;

}

export enum MicrosoftDatadogMonitorsTagRulesType {
  "MicrosoftDatadogMonitorsTagRulesType_MICROSOFT_DATADOG_MONITORS_TAG_RULES" = 'Microsoft.Datadog/monitors/tagRules',
}

export enum IdentityPropertiesType {
  SYSTEM_ASSIGNED = 'SystemAssigned',
  USER_ASSIGNED = 'UserAssigned',
}

/**
 * Datadog organization properties
 *
 * @schema #/definitions/DatadogOrganizationProperties
 */
export interface DatadogOrganizationProperties {
  /**
   * Api key associated to the Datadog organization.
   *
   * @schema #/definitions/DatadogOrganizationProperties#apiKey
   */
  readonly apiKey?: string;

  /**
   * Application key associated to the Datadog organization.
   *
   * @schema #/definitions/DatadogOrganizationProperties#applicationKey
   */
  readonly applicationKey?: string;

  /**
   * The Id of the Enterprise App used for Single sign on.
   *
   * @schema #/definitions/DatadogOrganizationProperties#enterpriseAppId
   */
  readonly enterpriseAppId?: string;

  /**
   * The auth code used to linking to an existing datadog organization.
   *
   * @schema #/definitions/DatadogOrganizationProperties#linkingAuthCode
   */
  readonly linkingAuthCode?: string;

  /**
   * The client_id from an existing in exchange for an auth token to link organization.
   *
   * @schema #/definitions/DatadogOrganizationProperties#linkingClientId
   */
  readonly linkingClientId?: string;

  /**
   * The redirect uri for linking.
   *
   * @schema #/definitions/DatadogOrganizationProperties#redirectUri
   */
  readonly redirectUri?: string;

}

export enum MonitorPropertiesLiftrResourceCategory {
  UNKNOWN = 'Unknown',
  MONITOR_LOGS = 'MonitorLogs',
}

export enum MonitorPropertiesMarketplaceSubscriptionStatus {
  PROVISIONING = 'Provisioning',
  ACTIVE = 'Active',
  SUSPENDED = 'Suspended',
  UNSUBSCRIBED = 'Unsubscribed',
}

export enum MonitorPropertiesMonitoringStatus {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}

export enum MonitorPropertiesProvisioningState {
  ACCEPTED = 'Accepted',
  CREATING = 'Creating',
  UPDATING = 'Updating',
  DELETING = 'Deleting',
  SUCCEEDED = 'Succeeded',
  FAILED = 'Failed',
  CANCELED = 'Canceled',
  DELETED = 'Deleted',
  NOT_SPECIFIED = 'NotSpecified',
}

/**
 * User info
 *
 * @schema #/definitions/UserInfo
 */
export interface UserInfo {
  /**
   * Email of the user used by Datadog for contacting them if needed
   *
   * @schema #/definitions/UserInfo#emailAddress
   */
  readonly emailAddress?: UserInfoEmailAddressPattern;

  /**
   * Name of the user
   *
   * @schema #/definitions/UserInfo#name
   */
  readonly name?: string;

  /**
   * Phone number of the user used by Datadog for contacting them if needed
   *
   * @schema #/definitions/UserInfo#phoneNumber
   */
  readonly phoneNumber?: string;

}

/**
 * Microsoft.Datadog/monitors/tagRules
 *
 * @schema #/definitions/monitors_tagRules_childResource
 */
export interface MonitorsTagRulesChildResource {
  /**
   * @schema #/definitions/monitors_tagRules_childResource#apiVersion
   */
  readonly apiVersion: MonitorsTagRulesChildResourceApiVersion;

  /**
   * Rule set name
   *
   * @schema #/definitions/monitors_tagRules_childResource#name
   */
  readonly name: string;

  /**
   * Definition of the properties for a TagRules resource.
   *
   * @schema #/definitions/monitors_tagRules_childResource#properties
   */
  readonly properties: MonitoringTagRulesProperties;

  /**
   * @schema #/definitions/monitors_tagRules_childResource#type
   */
  readonly type: MonitorsTagRulesChildResourceType;

}

/**
 * Microsoft.Datadog/monitors/singleSignOnConfigurations
 *
 * @schema #/definitions/monitors_singleSignOnConfigurations_childResource
 */
export interface MonitorsSingleSignOnConfigurationsChildResource {
  /**
   * @schema #/definitions/monitors_singleSignOnConfigurations_childResource#apiVersion
   */
  readonly apiVersion: MonitorsSingleSignOnConfigurationsChildResourceApiVersion;

  /**
   * Configuration name
   *
   * @schema #/definitions/monitors_singleSignOnConfigurations_childResource#name
   */
  readonly name: string;

  /**
   * @schema #/definitions/monitors_singleSignOnConfigurations_childResource#properties
   */
  readonly properties: DatadogSingleSignOnProperties;

  /**
   * @schema #/definitions/monitors_singleSignOnConfigurations_childResource#type
   */
  readonly type: MonitorsSingleSignOnConfigurationsChildResourceType;

}

export enum DatadogSingleSignOnPropertiesProvisioningState {
  ACCEPTED = 'Accepted',
  CREATING = 'Creating',
  UPDATING = 'Updating',
  DELETING = 'Deleting',
  SUCCEEDED = 'Succeeded',
  FAILED = 'Failed',
  CANCELED = 'Canceled',
  DELETED = 'Deleted',
  NOT_SPECIFIED = 'NotSpecified',
}

export enum DatadogSingleSignOnPropertiesSingleSignOnState {
  INITIAL = 'Initial',
  ENABLE = 'Enable',
  DISABLE = 'Disable',
  EXISTING = 'Existing',
}

/**
 * Set of rules for sending logs for the Monitor resource.
 *
 * @schema #/definitions/LogRules
 */
export interface LogRules {
  /**
   * List of filtering tags to be used for capturing logs. This only takes effect if SendResourceLogs flag is enabled. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
   *
   * @schema #/definitions/LogRules#filteringTags
   */
  readonly filteringTags?: FilteringTag[];

  /**
   * Flag specifying if AAD logs should be sent for the Monitor resource.
   *
   * @schema #/definitions/LogRules#sendAadLogs
   */
  readonly sendAadLogs?: boolean;

  /**
   * Flag specifying if Azure resource logs should be sent for the Monitor resource.
   *
   * @schema #/definitions/LogRules#sendResourceLogs
   */
  readonly sendResourceLogs?: boolean;

  /**
   * Flag specifying if Azure subscription logs should be sent for the Monitor resource.
   *
   * @schema #/definitions/LogRules#sendSubscriptionLogs
   */
  readonly sendSubscriptionLogs?: boolean;

}

/**
 * Set of rules for sending metrics for the Monitor resource.
 *
 * @schema #/definitions/MetricRules
 */
export interface MetricRules {
  /**
   * List of filtering tags to be used for capturing metrics. If empty, all resources will be captured. If only Exclude action is specified, the rules will apply to the list of all available resources. If Include actions are specified, the rules will only include resources with the associated tags.
   *
   * @schema #/definitions/MetricRules#filteringTags
   */
  readonly filteringTags?: FilteringTag[];

}

export enum MonitoringTagRulesPropertiesProvisioningState {
  ACCEPTED = 'Accepted',
  CREATING = 'Creating',
  UPDATING = 'Updating',
  DELETING = 'Deleting',
  SUCCEEDED = 'Succeeded',
  FAILED = 'Failed',
  CANCELED = 'Canceled',
  DELETED = 'Deleted',
  NOT_SPECIFIED = 'NotSpecified',
}

/**
 * @schema #/definitions/userInfoEmailAddress
 */
export class UserInfoEmailAddressPattern {
  public static pattern(value: string): string {
    return value;
  }
}

export enum MonitorsTagRulesChildResourceApiVersion {
  "MonitorsTagRulesChildResourceApiVersion_2021_03_01" = '2021-03-01',
}

export enum MonitorsTagRulesChildResourceType {
  TAG_RULES = 'tagRules',
}

export enum MonitorsSingleSignOnConfigurationsChildResourceApiVersion {
  "MonitorsSingleSignOnConfigurationsChildResourceApiVersion_2021_03_01" = '2021-03-01',
}

export enum MonitorsSingleSignOnConfigurationsChildResourceType {
  SINGLE_SIGN_ON_CONFIGURATIONS = 'singleSignOnConfigurations',
}

/**
 * The definition of a filtering tag. Filtering tags are used for capturing resources and include/exclude them from being monitored.
 *
 * @schema #/definitions/FilteringTag
 */
export interface FilteringTag {
  /**
   * @schema #/definitions/FilteringTag#action
   */
  readonly action?: FilteringTagAction;

  /**
   * The name (also known as the key) of the tag.
   *
   * @schema #/definitions/FilteringTag#name
   */
  readonly name?: string;

  /**
   * The value of the tag.
   *
   * @schema #/definitions/FilteringTag#value
   */
  readonly value?: string;

}

export enum FilteringTagAction {
  INCLUDE = 'Include',
  EXCLUDE = 'Exclude',
}

