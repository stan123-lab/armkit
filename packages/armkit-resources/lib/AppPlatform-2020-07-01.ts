// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.AppPlatform/Spring
 *
 * @schema Microsoft.AppPlatform.Spring
 */
export class Spring extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/apps
 *
 * @schema Microsoft.AppPlatform.Spring_apps
 */
export class SpringApps extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_apps" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringAppsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_apps',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/apps/bindings
 *
 * @schema Microsoft.AppPlatform.Spring_apps_bindings
 */
export class SpringAppsBindings extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_apps_bindings" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringAppsBindingsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_apps_bindings',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/apps/deployments
 *
 * @schema Microsoft.AppPlatform.Spring_apps_deployments
 */
export class SpringAppsDeployments extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_apps_deployments" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringAppsDeploymentsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_apps_deployments',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/apps/domains
 *
 * @schema Microsoft.AppPlatform.Spring_apps_domains
 */
export class SpringAppsDomains extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_apps_domains" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringAppsDomainsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_apps_domains',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/certificates
 *
 * @schema Microsoft.AppPlatform.Spring_certificates
 */
export class SpringCertificates extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_certificates" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringCertificatesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_certificates',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/configServers
 *
 * @schema Microsoft.AppPlatform.Spring_configServers
 */
export class SpringConfigServers extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_configServers" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringConfigServersOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_configServers',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring/monitoringSettings
 *
 * @schema Microsoft.AppPlatform.Spring_monitoringSettings
 */
export class SpringMonitoringSettings extends ArmResource {
  /**
   * Defines a "Microsoft.AppPlatform.Spring_monitoringSettings" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: SpringMonitoringSettingsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'Spring_monitoringSettings',
    });
  }
}

/**
 * Microsoft.AppPlatform/Spring
 *
 * @schema Microsoft.AppPlatform.Spring
 */
export interface SpringOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringApiVersion;

  /**
   * The GEO location of the resource.
   *
   * @schema Microsoft.AppPlatform.Spring#location
   */
  readonly location?: string;

  /**
   * The name of the Service resource.
   *
   * @schema Microsoft.AppPlatform.Spring#name
   */
  readonly name: string;

  /**
   * Service properties payload
   *
   * @schema Microsoft.AppPlatform.Spring#properties
   */
  readonly properties: ClusterResourceProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring#resources
   */
  readonly resources?: MicrosoftAppPlatformSpringResources[];

  /**
   * Sku of Azure Spring Cloud
   *
   * @schema Microsoft.AppPlatform.Spring#sku
   */
  readonly sku?: Sku;

  /**
   * Tags of the service which is a list of key value pairs that describe the resource.
   *
   * @schema Microsoft.AppPlatform.Spring#tags
   */
  readonly tags?: MicrosoftAppPlatformSpringTags;

  /**
   * @schema Microsoft.AppPlatform.Spring#type
   */
  readonly type: MicrosoftAppPlatformSpringType;

}

/**
 * Microsoft.AppPlatform/Spring/apps
 *
 * @schema Microsoft.AppPlatform.Spring_apps
 */
export interface SpringAppsOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_apps#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringAppsApiVersion;

  /**
   * Managed identity properties retrieved from ARM request headers.
   *
   * @schema Microsoft.AppPlatform.Spring_apps#identity
   */
  readonly identity?: ManagedIdentityProperties;

  /**
   * The GEO location of the application, always the same with its parent resource
   *
   * @schema Microsoft.AppPlatform.Spring_apps#location
   */
  readonly location?: string;

  /**
   * The name of the App resource.
   *
   * @schema Microsoft.AppPlatform.Spring_apps#name
   */
  readonly name: string;

  /**
   * App resource properties payload
   *
   * @schema Microsoft.AppPlatform.Spring_apps#properties
   */
  readonly properties: AppResourceProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_apps#resources
   */
  readonly resources?: MicrosoftAppPlatformSpringAppsResources[];

  /**
   * @schema Microsoft.AppPlatform.Spring_apps#type
   */
  readonly type: MicrosoftAppPlatformSpringAppsType;

}

/**
 * Microsoft.AppPlatform/Spring/apps/bindings
 *
 * @schema Microsoft.AppPlatform.Spring_apps_bindings
 */
export interface SpringAppsBindingsOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_apps_bindings#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringAppsBindingsApiVersion;

  /**
   * The name of the Binding resource.
   *
   * @schema Microsoft.AppPlatform.Spring_apps_bindings#name
   */
  readonly name: string;

  /**
   * Binding resource properties payload
   *
   * @schema Microsoft.AppPlatform.Spring_apps_bindings#properties
   */
  readonly properties: BindingResourceProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_apps_bindings#type
   */
  readonly type: MicrosoftAppPlatformSpringAppsBindingsType;

}

/**
 * Microsoft.AppPlatform/Spring/apps/deployments
 *
 * @schema Microsoft.AppPlatform.Spring_apps_deployments
 */
export interface SpringAppsDeploymentsOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_apps_deployments#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringAppsDeploymentsApiVersion;

  /**
   * The name of the Deployment resource.
   *
   * @schema Microsoft.AppPlatform.Spring_apps_deployments#name
   */
  readonly name: string;

  /**
   * Deployment resource properties payload
   *
   * @schema Microsoft.AppPlatform.Spring_apps_deployments#properties
   */
  readonly properties: DeploymentResourceProperties;

  /**
   * Sku of Azure Spring Cloud
   *
   * @schema Microsoft.AppPlatform.Spring_apps_deployments#sku
   */
  readonly sku?: Sku;

  /**
   * @schema Microsoft.AppPlatform.Spring_apps_deployments#type
   */
  readonly type: MicrosoftAppPlatformSpringAppsDeploymentsType;

}

/**
 * Microsoft.AppPlatform/Spring/apps/domains
 *
 * @schema Microsoft.AppPlatform.Spring_apps_domains
 */
export interface SpringAppsDomainsOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_apps_domains#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringAppsDomainsApiVersion;

  /**
   * The name of the custom domain resource.
   *
   * @schema Microsoft.AppPlatform.Spring_apps_domains#name
   */
  readonly name: string;

  /**
   * Custom domain of app resource payload.
   *
   * @schema Microsoft.AppPlatform.Spring_apps_domains#properties
   */
  readonly properties: CustomDomainProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_apps_domains#type
   */
  readonly type: MicrosoftAppPlatformSpringAppsDomainsType;

}

/**
 * Microsoft.AppPlatform/Spring/certificates
 *
 * @schema Microsoft.AppPlatform.Spring_certificates
 */
export interface SpringCertificatesOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_certificates#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringCertificatesApiVersion;

  /**
   * The name of the certificate resource.
   *
   * @schema Microsoft.AppPlatform.Spring_certificates#name
   */
  readonly name: string;

  /**
   * Certificate resource payload.
   *
   * @schema Microsoft.AppPlatform.Spring_certificates#properties
   */
  readonly properties: CertificateProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_certificates#type
   */
  readonly type: MicrosoftAppPlatformSpringCertificatesType;

}

/**
 * Microsoft.AppPlatform/Spring/configServers
 *
 * @schema Microsoft.AppPlatform.Spring_configServers
 */
export interface SpringConfigServersOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_configServers#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringConfigServersApiVersion;

  /**
   * @schema Microsoft.AppPlatform.Spring_configServers#name
   */
  readonly name: MicrosoftAppPlatformSpringConfigServersNamePattern;

  /**
   * Config server git properties payload
   *
   * @schema Microsoft.AppPlatform.Spring_configServers#properties
   */
  readonly properties: ConfigServerProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_configServers#type
   */
  readonly type: MicrosoftAppPlatformSpringConfigServersType;

}

/**
 * Microsoft.AppPlatform/Spring/monitoringSettings
 *
 * @schema Microsoft.AppPlatform.Spring_monitoringSettings
 */
export interface SpringMonitoringSettingsOptions {
  /**
   * @schema Microsoft.AppPlatform.Spring_monitoringSettings#apiVersion
   */
  readonly apiVersion?: MicrosoftAppPlatformSpringMonitoringSettingsApiVersion;

  /**
   * @schema Microsoft.AppPlatform.Spring_monitoringSettings#name
   */
  readonly name: MicrosoftAppPlatformSpringMonitoringSettingsNamePattern;

  /**
   * Monitoring Setting properties payload
   *
   * @schema Microsoft.AppPlatform.Spring_monitoringSettings#properties
   */
  readonly properties: MonitoringSettingProperties;

  /**
   * @schema Microsoft.AppPlatform.Spring_monitoringSettings#type
   */
  readonly type: MicrosoftAppPlatformSpringMonitoringSettingsType;

}

export enum MicrosoftAppPlatformSpringApiVersion {
  "MicrosoftAppPlatformSpringApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Service properties payload
 *
 * @schema #/definitions/ClusterResourceProperties
 */
export interface ClusterResourceProperties {
  /**
   * Service network profile payload
   *
   * @schema #/definitions/ClusterResourceProperties#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

}

/**
 * @schema MicrosoftAppPlatformSpringResources
 */
export class MicrosoftAppPlatformSpringResources {
  public static fromSpringConfigServersChildResource(value: SpringConfigServersChildResource): MicrosoftAppPlatformSpringResources {
    return new MicrosoftAppPlatformSpringResources(value);
  }
  public static fromSpringMonitoringSettingsChildResource(value: SpringMonitoringSettingsChildResource): MicrosoftAppPlatformSpringResources {
    return new MicrosoftAppPlatformSpringResources(value);
  }
  public static fromSpringAppsChildResource(value: SpringAppsChildResource): MicrosoftAppPlatformSpringResources {
    return new MicrosoftAppPlatformSpringResources(value);
  }
  public static fromSpringCertificatesChildResource(value: SpringCertificatesChildResource): MicrosoftAppPlatformSpringResources {
    return new MicrosoftAppPlatformSpringResources(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * Sku of Azure Spring Cloud
 *
 * @schema #/definitions/Sku
 */
export interface Sku {
  /**
   * Current capacity of the target resource
   *
   * @schema #/definitions/Sku#capacity
   */
  readonly capacity?: number;

  /**
   * Name of the Sku
   *
   * @schema #/definitions/Sku#name
   */
  readonly name?: string;

  /**
   * Tier of the Sku
   *
   * @schema #/definitions/Sku#tier
   */
  readonly tier?: string;

}

/**
 * @schema MicrosoftAppPlatformSpringTags
 */
export interface MicrosoftAppPlatformSpringTags {
}

export enum MicrosoftAppPlatformSpringType {
  "MicrosoftAppPlatformSpringType_MICROSOFT_APP_PLATFORM_SPRING" = 'Microsoft.AppPlatform/Spring',
}

export enum MicrosoftAppPlatformSpringAppsApiVersion {
  "MicrosoftAppPlatformSpringAppsApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Managed identity properties retrieved from ARM request headers.
 *
 * @schema #/definitions/ManagedIdentityProperties
 */
export interface ManagedIdentityProperties {
  /**
   * Principal Id
   *
   * @schema #/definitions/ManagedIdentityProperties#principalId
   */
  readonly principalId?: string;

  /**
   * Tenant Id
   *
   * @schema #/definitions/ManagedIdentityProperties#tenantId
   */
  readonly tenantId?: string;

  /**
   * Type of the managed identity.
   *
   * @schema #/definitions/ManagedIdentityProperties#type
   */
  readonly type?: ManagedIdentityPropertiesType;

}

/**
 * App resource properties payload
 *
 * @schema #/definitions/AppResourceProperties
 */
export interface AppResourceProperties {
  /**
   * Name of the active deployment of the App
   *
   * @schema #/definitions/AppResourceProperties#activeDeploymentName
   */
  readonly activeDeploymentName?: string;

  /**
   * Fully qualified dns Name.
   *
   * @schema #/definitions/AppResourceProperties#fqdn
   */
  readonly fqdn?: string;

  /**
   * Indicate if only https is allowed.
   *
   * @schema #/definitions/AppResourceProperties#httpsOnly
   */
  readonly httpsOnly?: boolean;

  /**
   * Persistent disk payload
   *
   * @schema #/definitions/AppResourceProperties#persistentDisk
   */
  readonly persistentDisk?: PersistentDisk;

  /**
   * Indicates whether the App exposes public endpoint
   *
   * @schema #/definitions/AppResourceProperties#public
   */
  readonly public?: boolean;

  /**
   * Temporary disk payload
   *
   * @schema #/definitions/AppResourceProperties#temporaryDisk
   */
  readonly temporaryDisk?: TemporaryDisk;

}

/**
 * @schema MicrosoftAppPlatformSpringAppsResources
 */
export class MicrosoftAppPlatformSpringAppsResources {
  public static fromSpringAppsBindingsChildResource(value: SpringAppsBindingsChildResource): MicrosoftAppPlatformSpringAppsResources {
    return new MicrosoftAppPlatformSpringAppsResources(value);
  }
  public static fromSpringAppsDomainsChildResource(value: SpringAppsDomainsChildResource): MicrosoftAppPlatformSpringAppsResources {
    return new MicrosoftAppPlatformSpringAppsResources(value);
  }
  public static fromSpringAppsDeploymentsChildResource(value: SpringAppsDeploymentsChildResource): MicrosoftAppPlatformSpringAppsResources {
    return new MicrosoftAppPlatformSpringAppsResources(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

export enum MicrosoftAppPlatformSpringAppsType {
  "MicrosoftAppPlatformSpringAppsType_MICROSOFT_APP_PLATFORM_SPRING_APPS" = 'Microsoft.AppPlatform/Spring/apps',
}

export enum MicrosoftAppPlatformSpringAppsBindingsApiVersion {
  "MicrosoftAppPlatformSpringAppsBindingsApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Binding resource properties payload
 *
 * @schema #/definitions/BindingResourceProperties
 */
export interface BindingResourceProperties {
  /**
   * Binding parameters of the Binding resource
   *
   * @schema #/definitions/BindingResourceProperties#bindingParameters
   */
  readonly bindingParameters?: BindingResourcePropertiesBindingParameters;

  /**
   * The key of the bound resource
   *
   * @schema #/definitions/BindingResourceProperties#key
   */
  readonly key?: string;

  /**
   * The Azure resource id of the bound resource
   *
   * @schema #/definitions/BindingResourceProperties#resourceId
   */
  readonly resourceId?: string;

}

export enum MicrosoftAppPlatformSpringAppsBindingsType {
  "MicrosoftAppPlatformSpringAppsBindingsType_MICROSOFT_APP_PLATFORM_SPRING_APPS_BINDINGS" = 'Microsoft.AppPlatform/Spring/apps/bindings',
}

export enum MicrosoftAppPlatformSpringAppsDeploymentsApiVersion {
  "MicrosoftAppPlatformSpringAppsDeploymentsApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Deployment resource properties payload
 *
 * @schema #/definitions/DeploymentResourceProperties
 */
export interface DeploymentResourceProperties {
  /**
   * Deployment settings payload
   *
   * @schema #/definitions/DeploymentResourceProperties#deploymentSettings
   */
  readonly deploymentSettings?: DeploymentSettings;

  /**
   * Source information for a deployment
   *
   * @schema #/definitions/DeploymentResourceProperties#source
   */
  readonly source?: UserSourceInfo;

}

export enum MicrosoftAppPlatformSpringAppsDeploymentsType {
  "MicrosoftAppPlatformSpringAppsDeploymentsType_MICROSOFT_APP_PLATFORM_SPRING_APPS_DEPLOYMENTS" = 'Microsoft.AppPlatform/Spring/apps/deployments',
}

export enum MicrosoftAppPlatformSpringAppsDomainsApiVersion {
  "MicrosoftAppPlatformSpringAppsDomainsApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Custom domain of app resource payload.
 *
 * @schema #/definitions/CustomDomainProperties
 */
export interface CustomDomainProperties {
  /**
   * The bound certificate name of domain.
   *
   * @schema #/definitions/CustomDomainProperties#certName
   */
  readonly certName?: string;

  /**
   * The thumbprint of bound certificate.
   *
   * @schema #/definitions/CustomDomainProperties#thumbprint
   */
  readonly thumbprint?: string;

}

export enum MicrosoftAppPlatformSpringAppsDomainsType {
  "MicrosoftAppPlatformSpringAppsDomainsType_MICROSOFT_APP_PLATFORM_SPRING_APPS_DOMAINS" = 'Microsoft.AppPlatform/Spring/apps/domains',
}

export enum MicrosoftAppPlatformSpringCertificatesApiVersion {
  "MicrosoftAppPlatformSpringCertificatesApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * Certificate resource payload.
 *
 * @schema #/definitions/CertificateProperties
 */
export interface CertificateProperties {
  /**
   * The certificate version of key vault.
   *
   * @schema #/definitions/CertificateProperties#certVersion
   */
  readonly certVersion?: string;

  /**
   * The certificate name of key vault.
   *
   * @schema #/definitions/CertificateProperties#keyVaultCertName
   */
  readonly keyVaultCertName: string;

  /**
   * The vault uri of user key vault.
   *
   * @schema #/definitions/CertificateProperties#vaultUri
   */
  readonly vaultUri: string;

}

export enum MicrosoftAppPlatformSpringCertificatesType {
  "MicrosoftAppPlatformSpringCertificatesType_MICROSOFT_APP_PLATFORM_SPRING_CERTIFICATES" = 'Microsoft.AppPlatform/Spring/certificates',
}

export enum MicrosoftAppPlatformSpringConfigServersApiVersion {
  "MicrosoftAppPlatformSpringConfigServersApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * @schema MicrosoftAppPlatformSpringConfigServersName
 */
export class MicrosoftAppPlatformSpringConfigServersNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Config server git properties payload
 *
 * @schema #/definitions/ConfigServerProperties
 */
export interface ConfigServerProperties {
  /**
   * The settings of config server.
   *
   * @schema #/definitions/ConfigServerProperties#configServer
   */
  readonly configServer?: ConfigServerSettings;

  /**
   * The error code compose of code and message.
   *
   * @schema #/definitions/ConfigServerProperties#error
   */
  readonly error?: Error;

}

export enum MicrosoftAppPlatformSpringConfigServersType {
  "MicrosoftAppPlatformSpringConfigServersType_MICROSOFT_APP_PLATFORM_SPRING_CONFIG_SERVERS" = 'Microsoft.AppPlatform/Spring/configServers',
}

export enum MicrosoftAppPlatformSpringMonitoringSettingsApiVersion {
  "MicrosoftAppPlatformSpringMonitoringSettingsApiVersion_2020_07_01" = '2020-07-01',
}

/**
 * @schema MicrosoftAppPlatformSpringMonitoringSettingsName
 */
export class MicrosoftAppPlatformSpringMonitoringSettingsNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Monitoring Setting properties payload
 *
 * @schema #/definitions/MonitoringSettingProperties
 */
export interface MonitoringSettingProperties {
  /**
   * Target application insight instrumentation key
   *
   * @schema #/definitions/MonitoringSettingProperties#appInsightsInstrumentationKey
   */
  readonly appInsightsInstrumentationKey?: string;

  /**
   * The error code compose of code and message.
   *
   * @schema #/definitions/MonitoringSettingProperties#error
   */
  readonly error?: Error;

  /**
   * Indicates whether enable the trace functionality
   *
   * @schema #/definitions/MonitoringSettingProperties#traceEnabled
   */
  readonly traceEnabled?: boolean;

}

export enum MicrosoftAppPlatformSpringMonitoringSettingsType {
  "MicrosoftAppPlatformSpringMonitoringSettingsType_MICROSOFT_APP_PLATFORM_SPRING_MONITORING_SETTINGS" = 'Microsoft.AppPlatform/Spring/monitoringSettings',
}

/**
 * Service network profile payload
 *
 * @schema #/definitions/NetworkProfile
 */
export interface NetworkProfile {
  /**
   * Name of the resource group containing network resources of Azure Spring Cloud Apps
   *
   * @schema #/definitions/NetworkProfile#appNetworkResourceGroup
   */
  readonly appNetworkResourceGroup?: string;

  /**
   * Fully qualified resource Id of the subnet to host Azure Spring Cloud Apps
   *
   * @schema #/definitions/NetworkProfile#appSubnetId
   */
  readonly appSubnetId?: string;

  /**
   * Azure Spring Cloud service reserved CIDR
   *
   * @schema #/definitions/NetworkProfile#serviceCidr
   */
  readonly serviceCidr?: string;

  /**
   * Name of the resource group containing network resources of Azure Spring Cloud Service Runtime
   *
   * @schema #/definitions/NetworkProfile#serviceRuntimeNetworkResourceGroup
   */
  readonly serviceRuntimeNetworkResourceGroup?: string;

  /**
   * Fully qualified resource Id of the subnet to host Azure Spring Cloud Service Runtime
   *
   * @schema #/definitions/NetworkProfile#serviceRuntimeSubnetId
   */
  readonly serviceRuntimeSubnetId?: string;

}

/**
 * Microsoft.AppPlatform/Spring/configServers
 *
 * @schema #/definitions/Spring_configServers_childResource
 */
export interface SpringConfigServersChildResource {
  /**
   * @schema #/definitions/Spring_configServers_childResource#apiVersion
   */
  readonly apiVersion: SpringConfigServersChildResourceApiVersion;

  /**
   * @schema #/definitions/Spring_configServers_childResource#name
   */
  readonly name: SpringConfigServersChildResourceName;

  /**
   * Config server git properties payload
   *
   * @schema #/definitions/Spring_configServers_childResource#properties
   */
  readonly properties: ConfigServerProperties;

  /**
   * @schema #/definitions/Spring_configServers_childResource#type
   */
  readonly type: SpringConfigServersChildResourceType;

}

/**
 * Microsoft.AppPlatform/Spring/monitoringSettings
 *
 * @schema #/definitions/Spring_monitoringSettings_childResource
 */
export interface SpringMonitoringSettingsChildResource {
  /**
   * @schema #/definitions/Spring_monitoringSettings_childResource#apiVersion
   */
  readonly apiVersion: SpringMonitoringSettingsChildResourceApiVersion;

  /**
   * @schema #/definitions/Spring_monitoringSettings_childResource#name
   */
  readonly name: SpringMonitoringSettingsChildResourceName;

  /**
   * Monitoring Setting properties payload
   *
   * @schema #/definitions/Spring_monitoringSettings_childResource#properties
   */
  readonly properties: MonitoringSettingProperties;

  /**
   * @schema #/definitions/Spring_monitoringSettings_childResource#type
   */
  readonly type: SpringMonitoringSettingsChildResourceType;

}

/**
 * Microsoft.AppPlatform/Spring/apps
 *
 * @schema #/definitions/Spring_apps_childResource
 */
export interface SpringAppsChildResource {
  /**
   * @schema #/definitions/Spring_apps_childResource#apiVersion
   */
  readonly apiVersion: SpringAppsChildResourceApiVersion;

  /**
   * Managed identity properties retrieved from ARM request headers.
   *
   * @schema #/definitions/Spring_apps_childResource#identity
   */
  readonly identity?: ManagedIdentityProperties;

  /**
   * The GEO location of the application, always the same with its parent resource
   *
   * @schema #/definitions/Spring_apps_childResource#location
   */
  readonly location?: string;

  /**
   * The name of the App resource.
   *
   * @schema #/definitions/Spring_apps_childResource#name
   */
  readonly name: string;

  /**
   * App resource properties payload
   *
   * @schema #/definitions/Spring_apps_childResource#properties
   */
  readonly properties: AppResourceProperties;

  /**
   * @schema #/definitions/Spring_apps_childResource#type
   */
  readonly type: SpringAppsChildResourceType;

}

/**
 * Microsoft.AppPlatform/Spring/certificates
 *
 * @schema #/definitions/Spring_certificates_childResource
 */
export interface SpringCertificatesChildResource {
  /**
   * @schema #/definitions/Spring_certificates_childResource#apiVersion
   */
  readonly apiVersion: SpringCertificatesChildResourceApiVersion;

  /**
   * The name of the certificate resource.
   *
   * @schema #/definitions/Spring_certificates_childResource#name
   */
  readonly name: string;

  /**
   * Certificate resource payload.
   *
   * @schema #/definitions/Spring_certificates_childResource#properties
   */
  readonly properties: CertificateProperties;

  /**
   * @schema #/definitions/Spring_certificates_childResource#type
   */
  readonly type: SpringCertificatesChildResourceType;

}

export enum ManagedIdentityPropertiesType {
  NONE = 'None',
  SYSTEM_ASSIGNED = 'SystemAssigned',
  USER_ASSIGNED = 'UserAssigned',
  "ManagedIdentityPropertiesType_SYSTEM_ASSIGNED_USER_ASSIGNED" = 'SystemAssigned,UserAssigned',
}

/**
 * Persistent disk payload
 *
 * @schema #/definitions/PersistentDisk
 */
export interface PersistentDisk {
  /**
   * Mount path of the persistent disk
   *
   * @schema #/definitions/PersistentDisk#mountPath
   */
  readonly mountPath?: string;

  /**
   * Size of the persistent disk in GB
   *
   * @schema #/definitions/PersistentDisk#sizeInGB
   */
  readonly sizeInGB?: number;

}

/**
 * Temporary disk payload
 *
 * @schema #/definitions/TemporaryDisk
 */
export interface TemporaryDisk {
  /**
   * Mount path of the temporary disk
   *
   * @schema #/definitions/TemporaryDisk#mountPath
   */
  readonly mountPath?: string;

  /**
   * Size of the temporary disk in GB
   *
   * @schema #/definitions/TemporaryDisk#sizeInGB
   */
  readonly sizeInGB?: number;

}

/**
 * Microsoft.AppPlatform/Spring/apps/bindings
 *
 * @schema #/definitions/Spring_apps_bindings_childResource
 */
export interface SpringAppsBindingsChildResource {
  /**
   * @schema #/definitions/Spring_apps_bindings_childResource#apiVersion
   */
  readonly apiVersion: SpringAppsBindingsChildResourceApiVersion;

  /**
   * The name of the Binding resource.
   *
   * @schema #/definitions/Spring_apps_bindings_childResource#name
   */
  readonly name: string;

  /**
   * Binding resource properties payload
   *
   * @schema #/definitions/Spring_apps_bindings_childResource#properties
   */
  readonly properties: BindingResourceProperties;

  /**
   * @schema #/definitions/Spring_apps_bindings_childResource#type
   */
  readonly type: SpringAppsBindingsChildResourceType;

}

/**
 * Microsoft.AppPlatform/Spring/apps/domains
 *
 * @schema #/definitions/Spring_apps_domains_childResource
 */
export interface SpringAppsDomainsChildResource {
  /**
   * @schema #/definitions/Spring_apps_domains_childResource#apiVersion
   */
  readonly apiVersion: SpringAppsDomainsChildResourceApiVersion;

  /**
   * The name of the custom domain resource.
   *
   * @schema #/definitions/Spring_apps_domains_childResource#name
   */
  readonly name: string;

  /**
   * Custom domain of app resource payload.
   *
   * @schema #/definitions/Spring_apps_domains_childResource#properties
   */
  readonly properties: CustomDomainProperties;

  /**
   * @schema #/definitions/Spring_apps_domains_childResource#type
   */
  readonly type: SpringAppsDomainsChildResourceType;

}

/**
 * Microsoft.AppPlatform/Spring/apps/deployments
 *
 * @schema #/definitions/Spring_apps_deployments_childResource
 */
export interface SpringAppsDeploymentsChildResource {
  /**
   * @schema #/definitions/Spring_apps_deployments_childResource#apiVersion
   */
  readonly apiVersion: SpringAppsDeploymentsChildResourceApiVersion;

  /**
   * The name of the Deployment resource.
   *
   * @schema #/definitions/Spring_apps_deployments_childResource#name
   */
  readonly name: string;

  /**
   * Deployment resource properties payload
   *
   * @schema #/definitions/Spring_apps_deployments_childResource#properties
   */
  readonly properties: DeploymentResourceProperties;

  /**
   * Sku of Azure Spring Cloud
   *
   * @schema #/definitions/Spring_apps_deployments_childResource#sku
   */
  readonly sku?: Sku;

  /**
   * @schema #/definitions/Spring_apps_deployments_childResource#type
   */
  readonly type: SpringAppsDeploymentsChildResourceType;

}

/**
 * @schema #/definitions/bindingResourcePropertiesBindingParameters
 */
export interface BindingResourcePropertiesBindingParameters {
}

/**
 * Deployment settings payload
 *
 * @schema #/definitions/DeploymentSettings
 */
export interface DeploymentSettings {
  /**
   * Required CPU, basic tier should be 1, standard tier should be in range (1, 4)
   *
   * @schema #/definitions/DeploymentSettings#cpu
   */
  readonly cpu?: number;

  /**
   * Collection of environment variables
   *
   * @schema #/definitions/DeploymentSettings#environmentVariables
   */
  readonly environmentVariables?: DeploymentSettingsEnvironmentVariables;

  /**
   * JVM parameter
   *
   * @schema #/definitions/DeploymentSettings#jvmOptions
   */
  readonly jvmOptions?: string;

  /**
   * Required Memory size in GB, basic tier should be in range (1, 2), standard tier should be in range (1, 8)
   *
   * @schema #/definitions/DeploymentSettings#memoryInGB
   */
  readonly memoryInGB?: number;

  /**
   * The path to the .NET executable relative to zip root
   *
   * @schema #/definitions/DeploymentSettings#netCoreMainEntryPath
   */
  readonly netCoreMainEntryPath?: string;

  /**
   * Runtime version.
   *
   * @schema #/definitions/DeploymentSettings#runtimeVersion
   */
  readonly runtimeVersion?: DeploymentSettingsRuntimeVersion;

}

/**
 * Source information for a deployment
 *
 * @schema #/definitions/UserSourceInfo
 */
export interface UserSourceInfo {
  /**
   * Selector for the artifact to be used for the deployment for multi-module projects. This should be
the relative path to the target module/project.
   *
   * @schema #/definitions/UserSourceInfo#artifactSelector
   */
  readonly artifactSelector?: string;

  /**
   * Relative path of the storage which stores the source
   *
   * @schema #/definitions/UserSourceInfo#relativePath
   */
  readonly relativePath?: string;

  /**
   * Type of the source uploaded.
   *
   * @schema #/definitions/UserSourceInfo#type
   */
  readonly type?: UserSourceInfoType;

  /**
   * Version of the source
   *
   * @schema #/definitions/UserSourceInfo#version
   */
  readonly version?: string;

}

/**
 * The settings of config server.
 *
 * @schema #/definitions/ConfigServerSettings
 */
export interface ConfigServerSettings {
  /**
   * Property of git.
   *
   * @schema #/definitions/ConfigServerSettings#gitProperty
   */
  readonly gitProperty?: ConfigServerGitProperty;

}

/**
 * The error code compose of code and message.
 *
 * @schema #/definitions/Error
 */
export interface Error {
  /**
   * The code of error.
   *
   * @schema #/definitions/Error#code
   */
  readonly code?: string;

  /**
   * The message of error.
   *
   * @schema #/definitions/Error#message
   */
  readonly message?: string;

}

export enum SpringConfigServersChildResourceApiVersion {
  "SpringConfigServersChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringConfigServersChildResourceName {
  DEFAULT = 'default',
}

export enum SpringConfigServersChildResourceType {
  CONFIG_SERVERS = 'configServers',
}

export enum SpringMonitoringSettingsChildResourceApiVersion {
  "SpringMonitoringSettingsChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringMonitoringSettingsChildResourceName {
  DEFAULT = 'default',
}

export enum SpringMonitoringSettingsChildResourceType {
  MONITORING_SETTINGS = 'monitoringSettings',
}

export enum SpringAppsChildResourceApiVersion {
  "SpringAppsChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringAppsChildResourceType {
  APPS = 'apps',
}

export enum SpringCertificatesChildResourceApiVersion {
  "SpringCertificatesChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringCertificatesChildResourceType {
  CERTIFICATES = 'certificates',
}

export enum SpringAppsBindingsChildResourceApiVersion {
  "SpringAppsBindingsChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringAppsBindingsChildResourceType {
  BINDINGS = 'bindings',
}

export enum SpringAppsDomainsChildResourceApiVersion {
  "SpringAppsDomainsChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringAppsDomainsChildResourceType {
  DOMAINS = 'domains',
}

export enum SpringAppsDeploymentsChildResourceApiVersion {
  "SpringAppsDeploymentsChildResourceApiVersion_2020_07_01" = '2020-07-01',
}

export enum SpringAppsDeploymentsChildResourceType {
  DEPLOYMENTS = 'deployments',
}

/**
 * @schema #/definitions/deploymentSettingsEnvironmentVariables
 */
export interface DeploymentSettingsEnvironmentVariables {
}

export enum DeploymentSettingsRuntimeVersion {
  "DeploymentSettingsRuntimeVersion_JAVA_8" = 'Java_8',
  "DeploymentSettingsRuntimeVersion_JAVA_11" = 'Java_11',
  "DeploymentSettingsRuntimeVersion_NET_CORE_31" = 'NetCore_31',
}

export enum UserSourceInfoType {
  JAR = 'Jar',
  NET_CORE_ZIP = 'NetCoreZip',
  SOURCE = 'Source',
}

/**
 * Property of git.
 *
 * @schema #/definitions/ConfigServerGitProperty
 */
export interface ConfigServerGitProperty {
  /**
   * Public sshKey of git repository.
   *
   * @schema #/definitions/ConfigServerGitProperty#hostKey
   */
  readonly hostKey?: string;

  /**
   * SshKey algorithm of git repository.
   *
   * @schema #/definitions/ConfigServerGitProperty#hostKeyAlgorithm
   */
  readonly hostKeyAlgorithm?: string;

  /**
   * Label of the repository
   *
   * @schema #/definitions/ConfigServerGitProperty#label
   */
  readonly label?: string;

  /**
   * Password of git repository basic auth.
   *
   * @schema #/definitions/ConfigServerGitProperty#password
   */
  readonly password?: string;

  /**
   * Private sshKey algorithm of git repository.
   *
   * @schema #/definitions/ConfigServerGitProperty#privateKey
   */
  readonly privateKey?: string;

  /**
   * Repositories of git.
   *
   * @schema #/definitions/ConfigServerGitProperty#repositories
   */
  readonly repositories?: GitPatternRepository[];

  /**
   * Searching path of the repository
   *
   * @schema #/definitions/ConfigServerGitProperty#searchPaths
   */
  readonly searchPaths?: string[];

  /**
   * Strict host key checking or not.
   *
   * @schema #/definitions/ConfigServerGitProperty#strictHostKeyChecking
   */
  readonly strictHostKeyChecking?: boolean;

  /**
   * URI of the repository
   *
   * @schema #/definitions/ConfigServerGitProperty#uri
   */
  readonly uri: string;

  /**
   * Username of git repository basic auth.
   *
   * @schema #/definitions/ConfigServerGitProperty#username
   */
  readonly username?: string;

}

/**
 * Git repository property payload
 *
 * @schema #/definitions/GitPatternRepository
 */
export interface GitPatternRepository {
  /**
   * Public sshKey of git repository.
   *
   * @schema #/definitions/GitPatternRepository#hostKey
   */
  readonly hostKey?: string;

  /**
   * SshKey algorithm of git repository.
   *
   * @schema #/definitions/GitPatternRepository#hostKeyAlgorithm
   */
  readonly hostKeyAlgorithm?: string;

  /**
   * Label of the repository
   *
   * @schema #/definitions/GitPatternRepository#label
   */
  readonly label?: string;

  /**
   * Name of the repository
   *
   * @schema #/definitions/GitPatternRepository#name
   */
  readonly name: string;

  /**
   * Password of git repository basic auth.
   *
   * @schema #/definitions/GitPatternRepository#password
   */
  readonly password?: string;

  /**
   * Collection of pattern of the repository
   *
   * @schema #/definitions/GitPatternRepository#pattern
   */
  readonly pattern?: string[];

  /**
   * Private sshKey algorithm of git repository.
   *
   * @schema #/definitions/GitPatternRepository#privateKey
   */
  readonly privateKey?: string;

  /**
   * Searching path of the repository
   *
   * @schema #/definitions/GitPatternRepository#searchPaths
   */
  readonly searchPaths?: string[];

  /**
   * Strict host key checking or not.
   *
   * @schema #/definitions/GitPatternRepository#strictHostKeyChecking
   */
  readonly strictHostKeyChecking?: boolean;

  /**
   * URI of the repository
   *
   * @schema #/definitions/GitPatternRepository#uri
   */
  readonly uri: string;

  /**
   * Username of git repository basic auth.
   *
   * @schema #/definitions/GitPatternRepository#username
   */
  readonly username?: string;

}

