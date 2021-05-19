// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.Communication/communicationServices
 *
 * @schema Microsoft.Communication.communicationServices
 */
export class CommunicationServices extends ArmResource {
  /**
   * Defines a "Microsoft.Communication.communicationServices" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: CommunicationServicesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'communicationServices',
    });
  }
}

/**
 * Microsoft.Communication/communicationServices
 *
 * @schema Microsoft.Communication.communicationServices
 */
export interface CommunicationServicesOptions {
  /**
   * @schema Microsoft.Communication.communicationServices#apiVersion
   */
  readonly apiVersion?: MicrosoftCommunicationCommunicationServicesApiVersion;

  /**
   * The Azure location where the CommunicationService is running.
   *
   * @schema Microsoft.Communication.communicationServices#location
   */
  readonly location?: string;

  /**
   * The name of the CommunicationService resource.
   *
   * @schema Microsoft.Communication.communicationServices#name
   */
  readonly name: MicrosoftCommunicationCommunicationServicesNamePattern;

  /**
   * A class that describes the properties of the CommunicationService.
   *
   * @schema Microsoft.Communication.communicationServices#properties
   */
  readonly properties: CommunicationServiceProperties;

  /**
   * Metadata pertaining to creation and last modification of the resource.
   *
   * @schema Microsoft.Communication.communicationServices#systemData
   */
  readonly systemData?: SystemData;

  /**
   * Tags of the service which is a list of key value pairs that describe the resource.
   *
   * @schema Microsoft.Communication.communicationServices#tags
   */
  readonly tags?: MicrosoftCommunicationCommunicationServicesTags;

  /**
   * @schema Microsoft.Communication.communicationServices#type
   */
  readonly type: MicrosoftCommunicationCommunicationServicesType;

}

export enum MicrosoftCommunicationCommunicationServicesApiVersion {
  "MicrosoftCommunicationCommunicationServicesApiVersion_2020_08_20" = '2020-08-20',
}

/**
 * @schema MicrosoftCommunicationCommunicationServicesName
 */
export class MicrosoftCommunicationCommunicationServicesNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * A class that describes the properties of the CommunicationService.
 *
 * @schema #/definitions/CommunicationServiceProperties
 */
export interface CommunicationServiceProperties {
  /**
   * The location where the communication service stores its data at rest.
   *
   * @schema #/definitions/CommunicationServiceProperties#dataLocation
   */
  readonly dataLocation: string;

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
 * @schema MicrosoftCommunicationCommunicationServicesTags
 */
export interface MicrosoftCommunicationCommunicationServicesTags {
}

export enum MicrosoftCommunicationCommunicationServicesType {
  "MicrosoftCommunicationCommunicationServicesType_MICROSOFT_COMMUNICATION_COMMUNICATION_SERVICES" = 'Microsoft.Communication/communicationServices',
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

