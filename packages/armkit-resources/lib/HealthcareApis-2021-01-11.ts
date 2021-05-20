// generated by armkit
import { ArmResource } from '@yetics/armkit-core';
import { Construct } from 'constructs';

/**
 * Microsoft.HealthcareApis/services
 *
 * @schema Microsoft.HealthcareApis.services
 */
export class Services extends ArmResource {
  /**
   * Defines a "Microsoft.HealthcareApis.services" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ServicesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'services',
    });
  }
}

/**
 * Microsoft.HealthcareApis/services/privateEndpointConnections
 *
 * @schema Microsoft.HealthcareApis.services_privateEndpointConnections
 */
export class ServicesPrivateEndpointConnections extends ArmResource {
  /**
   * Defines a "Microsoft.HealthcareApis.services_privateEndpointConnections" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ServicesPrivateEndpointConnectionsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'services_privateEndpointConnections',
    });
  }
}

/**
 * Microsoft.HealthcareApis/services
 *
 * @schema Microsoft.HealthcareApis.services
 */
export interface ServicesOptions {
  /**
   * @schema Microsoft.HealthcareApis.services#apiVersion
   */
  readonly apiVersion?: MicrosoftHealthcareApisServicesApiVersion;

  /**
   * An etag associated with the resource, used for optimistic concurrency when editing it.
   *
   * @schema Microsoft.HealthcareApis.services#etag
   */
  readonly etag?: string;

  /**
   * Setting indicating whether the service has a managed identity associated with it.
   *
   * @schema Microsoft.HealthcareApis.services#identity
   */
  readonly identity?: ServicesResourceIdentity;

  /**
   * The kind of the service.
   *
   * @schema Microsoft.HealthcareApis.services#kind
   */
  readonly kind?: MicrosoftHealthcareApisServicesKind;

  /**
   * The resource location.
   *
   * @schema Microsoft.HealthcareApis.services#location
   */
  readonly location: string;

  /**
   * The name of the service instance.
   *
   * @schema Microsoft.HealthcareApis.services#name
   */
  readonly name: string;

  /**
   * The properties of a service instance.
   *
   * @schema Microsoft.HealthcareApis.services#properties
   */
  readonly properties: ServicesProperties;

  /**
   * @schema Microsoft.HealthcareApis.services#resources
   */
  readonly resources?: ServicesPrivateEndpointConnectionsChildResource[];

  /**
   * Metadata pertaining to creation and last modification of the resource.
   *
   * @schema Microsoft.HealthcareApis.services#systemData
   */
  readonly systemData?: SystemData;

  /**
   * The resource tags.
   *
   * @schema Microsoft.HealthcareApis.services#tags
   */
  readonly tags?: MicrosoftHealthcareApisServicesTags;

  /**
   * @schema Microsoft.HealthcareApis.services#type
   */
  readonly type: MicrosoftHealthcareApisServicesType;

}

/**
 * Microsoft.HealthcareApis/services/privateEndpointConnections
 *
 * @schema Microsoft.HealthcareApis.services_privateEndpointConnections
 */
export interface ServicesPrivateEndpointConnectionsOptions {
  /**
   * @schema Microsoft.HealthcareApis.services_privateEndpointConnections#apiVersion
   */
  readonly apiVersion?: MicrosoftHealthcareApisServicesPrivateEndpointConnectionsApiVersion;

  /**
   * The name of the private endpoint connection associated with the Azure resource
   *
   * @schema Microsoft.HealthcareApis.services_privateEndpointConnections#name
   */
  readonly name: string;

  /**
   * Properties of the PrivateEndpointConnectProperties.
   *
   * @schema Microsoft.HealthcareApis.services_privateEndpointConnections#properties
   */
  readonly properties: PrivateEndpointConnectionProperties;

  /**
   * @schema Microsoft.HealthcareApis.services_privateEndpointConnections#type
   */
  readonly type: MicrosoftHealthcareApisServicesPrivateEndpointConnectionsType;

}

export enum MicrosoftHealthcareApisServicesApiVersion {
  "MicrosoftHealthcareApisServicesApiVersion_2021_01_11" = '2021-01-11',
}

/**
 * Setting indicating whether the service has a managed identity associated with it.
 *
 * @schema #/definitions/ServicesResourceIdentity
 */
export interface ServicesResourceIdentity {
  /**
   * Type of identity being specified, currently SystemAssigned and None are allowed.
   *
   * @schema #/definitions/ServicesResourceIdentity#type
   */
  readonly type?: ServicesResourceIdentityType;

}

export enum MicrosoftHealthcareApisServicesKind {
  FHIR = 'fhir',
  "MicrosoftHealthcareApisServicesKind_FHIR_STU3" = 'fhir-Stu3',
  "MicrosoftHealthcareApisServicesKind_FHIR_R4" = 'fhir-R4',
}

/**
 * The properties of a service instance.
 *
 * @schema #/definitions/ServicesProperties
 */
export interface ServicesProperties {
  /**
   * The access policies of the service instance.
   *
   * @schema #/definitions/ServicesProperties#accessPolicies
   */
  readonly accessPolicies?: ServiceAccessPolicyEntry[];

  /**
   * Azure container registry configuration information
   *
   * @schema #/definitions/ServicesProperties#acrConfiguration
   */
  readonly acrConfiguration?: ServiceAcrConfigurationInfo;

  /**
   * Authentication configuration information
   *
   * @schema #/definitions/ServicesProperties#authenticationConfiguration
   */
  readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;

  /**
   * The settings for the CORS configuration of the service instance.
   *
   * @schema #/definitions/ServicesProperties#corsConfiguration
   */
  readonly corsConfiguration?: ServiceCorsConfigurationInfo;

  /**
   * The settings for the Cosmos DB database backing the service.
   *
   * @schema #/definitions/ServicesProperties#cosmosDbConfiguration
   */
  readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;

  /**
   * Export operation configuration information
   *
   * @schema #/definitions/ServicesProperties#exportConfiguration
   */
  readonly exportConfiguration?: ServiceExportConfigurationInfo;

  /**
   * The list of private endpoint connections that are set up for this resource.
   *
   * @schema #/definitions/ServicesProperties#privateEndpointConnections
   */
  readonly privateEndpointConnections?: PrivateEndpointConnection[];

  /**
   * Control permission for data plane traffic coming from public networks while private endpoint is enabled.
   *
   * @schema #/definitions/ServicesProperties#publicNetworkAccess
   */
  readonly publicNetworkAccess?: ServicesPropertiesPublicNetworkAccess;

}

/**
 * Microsoft.HealthcareApis/services/privateEndpointConnections
 *
 * @schema #/definitions/services_privateEndpointConnections_childResource
 */
export interface ServicesPrivateEndpointConnectionsChildResource {
  /**
   * @schema #/definitions/services_privateEndpointConnections_childResource#apiVersion
   */
  readonly apiVersion: ServicesPrivateEndpointConnectionsChildResourceApiVersion;

  /**
   * The name of the private endpoint connection associated with the Azure resource
   *
   * @schema #/definitions/services_privateEndpointConnections_childResource#name
   */
  readonly name: string;

  /**
   * Properties of the PrivateEndpointConnectProperties.
   *
   * @schema #/definitions/services_privateEndpointConnections_childResource#properties
   */
  readonly properties: PrivateEndpointConnectionProperties;

  /**
   * @schema #/definitions/services_privateEndpointConnections_childResource#type
   */
  readonly type: ServicesPrivateEndpointConnectionsChildResourceType;

}

/**
 * Metadata pertaining to creation and last modification of the resource.
 *
 * @schema #/definitions/SystemData
 */
export interface SystemData {
  /**
   * The timestamp of resource creation (UTC).
   *
   * @schema #/definitions/SystemData#createdAt
   */
  readonly createdAt?: Date;

  /**
   * The identity that created the resource.
   *
   * @schema #/definitions/SystemData#createdBy
   */
  readonly createdBy?: string;

  /**
   * The type of identity that created the resource.
   *
   * @schema #/definitions/SystemData#createdByType
   */
  readonly createdByType?: SystemDataCreatedByType;

  /**
   * The timestamp of resource last modification (UTC)
   *
   * @schema #/definitions/SystemData#lastModifiedAt
   */
  readonly lastModifiedAt?: Date;

  /**
   * The identity that last modified the resource.
   *
   * @schema #/definitions/SystemData#lastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * The type of identity that last modified the resource.
   *
   * @schema #/definitions/SystemData#lastModifiedByType
   */
  readonly lastModifiedByType?: SystemDataLastModifiedByType;

}

/**
 * @schema MicrosoftHealthcareApisServicesTags
 */
export interface MicrosoftHealthcareApisServicesTags {
}

export enum MicrosoftHealthcareApisServicesType {
  "MicrosoftHealthcareApisServicesType_MICROSOFT_HEALTHCARE_APIS_SERVICES" = 'Microsoft.HealthcareApis/services',
}

export enum MicrosoftHealthcareApisServicesPrivateEndpointConnectionsApiVersion {
  "MicrosoftHealthcareApisServicesPrivateEndpointConnectionsApiVersion_2021_01_11" = '2021-01-11',
}

/**
 * Properties of the PrivateEndpointConnectProperties.
 *
 * @schema #/definitions/PrivateEndpointConnectionProperties
 */
export interface PrivateEndpointConnectionProperties {
  /**
   * The Private Endpoint resource.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#privateEndpoint
   */
  readonly privateEndpoint?: PrivateEndpoint;

  /**
   * A collection of information about the state of the connection between service consumer and provider.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#privateLinkServiceConnectionState
   */
  readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;

  /**
   * The provisioning state of the private endpoint connection resource.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#provisioningState
   */
  readonly provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState;

}

export enum MicrosoftHealthcareApisServicesPrivateEndpointConnectionsType {
  "MicrosoftHealthcareApisServicesPrivateEndpointConnectionsType_MICROSOFT_HEALTHCARE_APIS_SERVICES_PRIVATE_ENDPOINT_CONNECTIONS" = 'Microsoft.HealthcareApis/services/privateEndpointConnections',
}

export enum ServicesResourceIdentityType {
  SYSTEM_ASSIGNED = 'SystemAssigned',
  NONE = 'None',
}

/**
 * An access policy entry.
 *
 * @schema #/definitions/ServiceAccessPolicyEntry
 */
export interface ServiceAccessPolicyEntry {
  /**
   * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
   *
   * @schema #/definitions/ServiceAccessPolicyEntry#objectId
   */
  readonly objectId: ServiceAccessPolicyEntryObjectIdPattern;

}

/**
 * Azure container registry configuration information
 *
 * @schema #/definitions/ServiceAcrConfigurationInfo
 */
export interface ServiceAcrConfigurationInfo {
  /**
   * The list of the ACR login servers.
   *
   * @schema #/definitions/ServiceAcrConfigurationInfo#loginServers
   */
  readonly loginServers?: string[];

}

/**
 * Authentication configuration information
 *
 * @schema #/definitions/ServiceAuthenticationConfigurationInfo
 */
export interface ServiceAuthenticationConfigurationInfo {
  /**
   * The audience url for the service
   *
   * @schema #/definitions/ServiceAuthenticationConfigurationInfo#audience
   */
  readonly audience?: string;

  /**
   * The authority url for the service
   *
   * @schema #/definitions/ServiceAuthenticationConfigurationInfo#authority
   */
  readonly authority?: string;

  /**
   * If the SMART on FHIR proxy is enabled
   *
   * @schema #/definitions/ServiceAuthenticationConfigurationInfo#smartProxyEnabled
   */
  readonly smartProxyEnabled?: boolean;

}

/**
 * The settings for the CORS configuration of the service instance.
 *
 * @schema #/definitions/ServiceCorsConfigurationInfo
 */
export interface ServiceCorsConfigurationInfo {
  /**
   * If credentials are allowed via CORS.
   *
   * @schema #/definitions/ServiceCorsConfigurationInfo#allowCredentials
   */
  readonly allowCredentials?: boolean;

  /**
   * The headers to be allowed via CORS.
   *
   * @schema #/definitions/ServiceCorsConfigurationInfo#headers
   */
  readonly headers?: string[];

  /**
   * The max age to be allowed via CORS.
   *
   * @schema #/definitions/ServiceCorsConfigurationInfo#maxAge
   */
  readonly maxAge?: number;

  /**
   * The methods to be allowed via CORS.
   *
   * @schema #/definitions/ServiceCorsConfigurationInfo#methods
   */
  readonly methods?: string[];

  /**
   * The origins to be allowed via CORS.
   *
   * @schema #/definitions/ServiceCorsConfigurationInfo#origins
   */
  readonly origins?: string[];

}

/**
 * The settings for the Cosmos DB database backing the service.
 *
 * @schema #/definitions/ServiceCosmosDbConfigurationInfo
 */
export interface ServiceCosmosDbConfigurationInfo {
  /**
   * The URI of the customer-managed key for the backing database.
   *
   * @schema #/definitions/ServiceCosmosDbConfigurationInfo#keyVaultKeyUri
   */
  readonly keyVaultKeyUri?: string;

  /**
   * The provisioned throughput for the backing database.
   *
   * @schema #/definitions/ServiceCosmosDbConfigurationInfo#offerThroughput
   */
  readonly offerThroughput?: number;

}

/**
 * Export operation configuration information
 *
 * @schema #/definitions/ServiceExportConfigurationInfo
 */
export interface ServiceExportConfigurationInfo {
  /**
   * The name of the default export storage account.
   *
   * @schema #/definitions/ServiceExportConfigurationInfo#storageAccountName
   */
  readonly storageAccountName?: string;

}

/**
 * The Private Endpoint Connection resource.
 *
 * @schema #/definitions/PrivateEndpointConnection
 */
export interface PrivateEndpointConnection {
  /**
   * Properties of the PrivateEndpointConnectProperties.
   *
   * @schema #/definitions/PrivateEndpointConnection#properties
   */
  readonly properties?: PrivateEndpointConnectionProperties;

}

export enum ServicesPropertiesPublicNetworkAccess {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
}

export enum ServicesPrivateEndpointConnectionsChildResourceApiVersion {
  "ServicesPrivateEndpointConnectionsChildResourceApiVersion_2021_01_11" = '2021-01-11',
}

export enum ServicesPrivateEndpointConnectionsChildResourceType {
  PRIVATE_ENDPOINT_CONNECTIONS = 'privateEndpointConnections',
}

export enum SystemDataCreatedByType {
  USER = 'User',
  APPLICATION = 'Application',
  MANAGED_IDENTITY = 'ManagedIdentity',
  KEY = 'Key',
}

export enum SystemDataLastModifiedByType {
  USER = 'User',
  APPLICATION = 'Application',
  MANAGED_IDENTITY = 'ManagedIdentity',
  KEY = 'Key',
}

/**
 * The Private Endpoint resource.
 *
 * @schema #/definitions/PrivateEndpoint
 */
export interface PrivateEndpoint {
}

/**
 * A collection of information about the state of the connection between service consumer and provider.
 *
 * @schema #/definitions/PrivateLinkServiceConnectionState
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * A message indicating if changes on the service provider require any updates on the consumer.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState#actionsRequired
   */
  readonly actionsRequired?: string;

  /**
   * The reason for approval/rejection of the connection.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState#description
   */
  readonly description?: string;

  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState#status
   */
  readonly status?: PrivateLinkServiceConnectionStateStatus;

}

export enum PrivateEndpointConnectionPropertiesProvisioningState {
  SUCCEEDED = 'Succeeded',
  CREATING = 'Creating',
  DELETING = 'Deleting',
  FAILED = 'Failed',
}

/**
 * @schema #/definitions/serviceAccessPolicyEntryObjectId
 */
export class ServiceAccessPolicyEntryObjectIdPattern {
  public static pattern(value: string): string {
    return value;
  }
}

export enum PrivateLinkServiceConnectionStateStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

