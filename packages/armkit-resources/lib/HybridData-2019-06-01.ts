// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.HybridData/dataManagers
 *
 * @schema Microsoft.HybridData.dataManagers
 */
export class DataManagers extends ArmResource {
  /**
   * Defines a "Microsoft.HybridData.dataManagers" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: DataManagersOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'dataManagers',
    });
  }
}

/**
 * Microsoft.HybridData/dataManagers/dataServices/jobDefinitions
 *
 * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions
 */
export class DataManagersDataServicesJobDefinitions extends ArmResource {
  /**
   * Defines a "Microsoft.HybridData.dataManagers_dataServices_jobDefinitions" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: DataManagersDataServicesJobDefinitionsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'dataManagers_dataServices_jobDefinitions',
    });
  }
}

/**
 * Microsoft.HybridData/dataManagers/dataStores
 *
 * @schema Microsoft.HybridData.dataManagers_dataStores
 */
export class DataManagersDataStores extends ArmResource {
  /**
   * Defines a "Microsoft.HybridData.dataManagers_dataStores" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: DataManagersDataStoresOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'dataManagers_dataStores',
    });
  }
}

/**
 * Microsoft.HybridData/dataManagers
 *
 * @schema Microsoft.HybridData.dataManagers
 */
export interface DataManagersOptions {
  /**
   * @schema Microsoft.HybridData.dataManagers#apiVersion
   */
  readonly apiVersion?: MicrosoftHybridDataDataManagersApiVersion;

  /**
   * Etag of the Resource.
   *
   * @schema Microsoft.HybridData.dataManagers#etag
   */
  readonly etag?: string;

  /**
   * The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
region is specified on update the request will succeed.
   *
   * @schema Microsoft.HybridData.dataManagers#location
   */
  readonly location: string;

  /**
   * The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
   *
   * @schema Microsoft.HybridData.dataManagers#name
   */
  readonly name: MicrosoftHybridDataDataManagersNamePattern;

  /**
   * @schema Microsoft.HybridData.dataManagers#resources
   */
  readonly resources?: DataManagersDataStoresChildResource[];

  /**
   * The sku type.
   *
   * @schema Microsoft.HybridData.dataManagers#sku
   */
  readonly sku?: Sku;

  /**
   * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
(across resource groups).
   *
   * @schema Microsoft.HybridData.dataManagers#tags
   */
  readonly tags?: MicrosoftHybridDataDataManagersTags;

  /**
   * @schema Microsoft.HybridData.dataManagers#type
   */
  readonly type: MicrosoftHybridDataDataManagersType;

}

/**
 * Microsoft.HybridData/dataManagers/dataServices/jobDefinitions
 *
 * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions
 */
export interface DataManagersDataServicesJobDefinitionsOptions {
  /**
   * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions#apiVersion
   */
  readonly apiVersion?: MicrosoftHybridDataDataManagersDataServicesJobDefinitionsApiVersion;

  /**
   * The job definition name to be created or updated.
   *
   * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions#name
   */
  readonly name: string;

  /**
   * Job Definition
   *
   * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions#properties
   */
  readonly properties: JobDefinitionProperties;

  /**
   * @schema Microsoft.HybridData.dataManagers_dataServices_jobDefinitions#type
   */
  readonly type: MicrosoftHybridDataDataManagersDataServicesJobDefinitionsType;

}

/**
 * Microsoft.HybridData/dataManagers/dataStores
 *
 * @schema Microsoft.HybridData.dataManagers_dataStores
 */
export interface DataManagersDataStoresOptions {
  /**
   * @schema Microsoft.HybridData.dataManagers_dataStores#apiVersion
   */
  readonly apiVersion?: MicrosoftHybridDataDataManagersDataStoresApiVersion;

  /**
   * The data store/repository name to be created or updated.
   *
   * @schema Microsoft.HybridData.dataManagers_dataStores#name
   */
  readonly name: string;

  /**
   * Data Store for sources and sinks
   *
   * @schema Microsoft.HybridData.dataManagers_dataStores#properties
   */
  readonly properties: DataStoreProperties;

  /**
   * @schema Microsoft.HybridData.dataManagers_dataStores#type
   */
  readonly type: MicrosoftHybridDataDataManagersDataStoresType;

}

export enum MicrosoftHybridDataDataManagersApiVersion {
  "MicrosoftHybridDataDataManagersApiVersion_2019_06_01" = '2019-06-01',
}

/**
 * @schema MicrosoftHybridDataDataManagersName
 */
export class MicrosoftHybridDataDataManagersNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Microsoft.HybridData/dataManagers/dataStores
 *
 * @schema #/definitions/dataManagers_dataStores_childResource
 */
export interface DataManagersDataStoresChildResource {
  /**
   * @schema #/definitions/dataManagers_dataStores_childResource#apiVersion
   */
  readonly apiVersion: DataManagersDataStoresChildResourceApiVersion;

  /**
   * The data store/repository name to be created or updated.
   *
   * @schema #/definitions/dataManagers_dataStores_childResource#name
   */
  readonly name: string;

  /**
   * Data Store for sources and sinks
   *
   * @schema #/definitions/dataManagers_dataStores_childResource#properties
   */
  readonly properties: DataStoreProperties;

  /**
   * @schema #/definitions/dataManagers_dataStores_childResource#type
   */
  readonly type: DataManagersDataStoresChildResourceType;

}

/**
 * The sku type.
 *
 * @schema #/definitions/Sku
 */
export interface Sku {
  /**
   * The sku name. Required for data manager creation, optional for update.
   *
   * @schema #/definitions/Sku#name
   */
  readonly name?: string;

  /**
   * The sku tier. This is based on the SKU name.
   *
   * @schema #/definitions/Sku#tier
   */
  readonly tier?: string;

}

/**
 * @schema MicrosoftHybridDataDataManagersTags
 */
export interface MicrosoftHybridDataDataManagersTags {
}

export enum MicrosoftHybridDataDataManagersType {
  "MicrosoftHybridDataDataManagersType_MICROSOFT_HYBRID_DATA_DATA_MANAGERS" = 'Microsoft.HybridData/dataManagers',
}

export enum MicrosoftHybridDataDataManagersDataServicesJobDefinitionsApiVersion {
  "MicrosoftHybridDataDataManagersDataServicesJobDefinitionsApiVersion_2019_06_01" = '2019-06-01',
}

/**
 * Job Definition
 *
 * @schema #/definitions/JobDefinitionProperties
 */
export interface JobDefinitionProperties {
  /**
   * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
   *
   * @schema #/definitions/JobDefinitionProperties#customerSecrets
   */
  readonly customerSecrets?: CustomerSecret[];

  /**
   * A generic json used differently by each data service type.
   *
   * @schema #/definitions/JobDefinitionProperties#dataServiceInput
   */
  readonly dataServiceInput?: JobDefinitionPropertiesDataServiceInput;

  /**
   * Data Sink Id associated to the job definition.
   *
   * @schema #/definitions/JobDefinitionProperties#dataSinkId
   */
  readonly dataSinkId: string;

  /**
   * Data Source Id associated to the job definition.
   *
   * @schema #/definitions/JobDefinitionProperties#dataSourceId
   */
  readonly dataSourceId: string;

  /**
   * Last modified time of the job definition.
   *
   * @schema #/definitions/JobDefinitionProperties#lastModifiedTime
   */
  readonly lastModifiedTime?: Date;

  /**
   * This is the preferred geo location for the job to run.
   *
   * @schema #/definitions/JobDefinitionProperties#runLocation
   */
  readonly runLocation?: JobDefinitionPropertiesRunLocation;

  /**
   * Schedule for running the job definition
   *
   * @schema #/definitions/JobDefinitionProperties#schedules
   */
  readonly schedules?: Schedule[];

  /**
   * State of the job definition.
   *
   * @schema #/definitions/JobDefinitionProperties#state
   */
  readonly state: JobDefinitionPropertiesState;

  /**
   * Enum to detect if user confirmation is required. If not passed will default to NotRequired.
   *
   * @schema #/definitions/JobDefinitionProperties#userConfirmation
   */
  readonly userConfirmation?: JobDefinitionPropertiesUserConfirmation;

}

export enum MicrosoftHybridDataDataManagersDataServicesJobDefinitionsType {
  "MicrosoftHybridDataDataManagersDataServicesJobDefinitionsType_MICROSOFT_HYBRID_DATA_DATA_MANAGERS_DATA_SERVICES_JOB_DEFINITIONS" = 'Microsoft.HybridData/dataManagers/dataServices/jobDefinitions',
}

export enum MicrosoftHybridDataDataManagersDataStoresApiVersion {
  "MicrosoftHybridDataDataManagersDataStoresApiVersion_2019_06_01" = '2019-06-01',
}

/**
 * Data Store for sources and sinks
 *
 * @schema #/definitions/DataStoreProperties
 */
export interface DataStoreProperties {
  /**
   * List of customer secrets containing a key identifier and key value. The key identifier is a way for the specific data source to understand the key. Value contains customer secret encrypted by the encryptionKeys.
   *
   * @schema #/definitions/DataStoreProperties#customerSecrets
   */
  readonly customerSecrets?: CustomerSecret[];

  /**
   * The arm id of the data store type.
   *
   * @schema #/definitions/DataStoreProperties#dataStoreTypeId
   */
  readonly dataStoreTypeId: string;

  /**
   * A generic json used differently by each data source type.
   *
   * @schema #/definitions/DataStoreProperties#extendedProperties
   */
  readonly extendedProperties?: DataStorePropertiesExtendedProperties;

  /**
   * Arm Id for the manager resource to which the data source is associated. This is optional.
   *
   * @schema #/definitions/DataStoreProperties#repositoryId
   */
  readonly repositoryId?: string;

  /**
   * State of the data source.
   *
   * @schema #/definitions/DataStoreProperties#state
   */
  readonly state: DataStorePropertiesState;

}

export enum MicrosoftHybridDataDataManagersDataStoresType {
  "MicrosoftHybridDataDataManagersDataStoresType_MICROSOFT_HYBRID_DATA_DATA_MANAGERS_DATA_STORES" = 'Microsoft.HybridData/dataManagers/dataStores',
}

export enum DataManagersDataStoresChildResourceApiVersion {
  "DataManagersDataStoresChildResourceApiVersion_2019_06_01" = '2019-06-01',
}

export enum DataManagersDataStoresChildResourceType {
  DATA_STORES = 'dataStores',
}

/**
 * The pair of customer secret.
 *
 * @schema #/definitions/CustomerSecret
 */
export interface CustomerSecret {
  /**
   * The encryption algorithm used to encrypt data.
   *
   * @schema #/definitions/CustomerSecret#algorithm
   */
  readonly algorithm: CustomerSecretAlgorithm;

  /**
   * The identifier to the data service input object which this secret corresponds to.
   *
   * @schema #/definitions/CustomerSecret#keyIdentifier
   */
  readonly keyIdentifier: string;

  /**
   * It contains the encrypted customer secret.
   *
   * @schema #/definitions/CustomerSecret#keyValue
   */
  readonly keyValue: string;

}

/**
 * A generic json used differently by each data service type.
 *
 * @schema #/definitions/jobDefinitionPropertiesDataServiceInput
 */
export interface JobDefinitionPropertiesDataServiceInput {
}

export enum JobDefinitionPropertiesRunLocation {
  NONE = 'none',
  AUSTRALIAEAST = 'australiaeast',
  AUSTRALIASOUTHEAST = 'australiasoutheast',
  BRAZILSOUTH = 'brazilsouth',
  CANADACENTRAL = 'canadacentral',
  CANADAEAST = 'canadaeast',
  CENTRALINDIA = 'centralindia',
  CENTRALUS = 'centralus',
  EASTASIA = 'eastasia',
  EASTUS = 'eastus',
  "JobDefinitionPropertiesRunLocation_EASTUS2" = 'eastus2',
  JAPANEAST = 'japaneast',
  JAPANWEST = 'japanwest',
  KOREACENTRAL = 'koreacentral',
  KOREASOUTH = 'koreasouth',
  SOUTHEASTASIA = 'southeastasia',
  SOUTHCENTRALUS = 'southcentralus',
  SOUTHINDIA = 'southindia',
  NORTHCENTRALUS = 'northcentralus',
  NORTHEUROPE = 'northeurope',
  UKSOUTH = 'uksouth',
  UKWEST = 'ukwest',
  WESTCENTRALUS = 'westcentralus',
  WESTEUROPE = 'westeurope',
  WESTINDIA = 'westindia',
  WESTUS = 'westus',
  "JobDefinitionPropertiesRunLocation_WESTUS2" = 'westus2',
}

/**
 * Schedule for the job run.
 *
 * @schema #/definitions/Schedule
 */
export interface Schedule {
  /**
   * Name of the schedule.
   *
   * @schema #/definitions/Schedule#name
   */
  readonly name?: string;

  /**
   * A list of repetition intervals in ISO 8601 format.
   *
   * @schema #/definitions/Schedule#policyList
   */
  readonly policyList?: string[];

}

export enum JobDefinitionPropertiesState {
  DISABLED = 'Disabled',
  ENABLED = 'Enabled',
  SUPPORTED = 'Supported',
}

export enum JobDefinitionPropertiesUserConfirmation {
  NOT_REQUIRED = 'NotRequired',
  REQUIRED = 'Required',
}

/**
 * A generic json used differently by each data source type.
 *
 * @schema #/definitions/dataStorePropertiesExtendedProperties
 */
export interface DataStorePropertiesExtendedProperties {
}

export enum DataStorePropertiesState {
  DISABLED = 'Disabled',
  ENABLED = 'Enabled',
  SUPPORTED = 'Supported',
}

export enum CustomerSecretAlgorithm {
  NONE = 'None',
  "CustomerSecretAlgorithm_RSA1_5" = 'RSA1_5',
  RSA_OAEP = 'RSA_OAEP',
  PLAIN_TEXT = 'PlainText',
}

