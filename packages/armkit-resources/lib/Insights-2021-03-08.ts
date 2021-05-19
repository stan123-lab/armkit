// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.Insights/myWorkbooks
 *
 * @schema Microsoft.Insights.myWorkbooks
 */
export class MyWorkbooks extends ArmResource {
  /**
   * Defines a "Microsoft.Insights.myWorkbooks" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MyWorkbooksOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'myWorkbooks',
    });
  }
}

/**
 * Microsoft.Insights/workbooks
 *
 * @schema Microsoft.Insights.workbooks
 */
export class Workbooks extends ArmResource {
  /**
   * Defines a "Microsoft.Insights.workbooks" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: WorkbooksOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'workbooks',
    });
  }
}

/**
 * Microsoft.Insights/myWorkbooks
 *
 * @schema Microsoft.Insights.myWorkbooks
 */
export interface MyWorkbooksOptions {
  /**
   * @schema Microsoft.Insights.myWorkbooks#apiVersion
   */
  readonly apiVersion?: MicrosoftInsightsMyWorkbooksApiVersion;

  /**
   * Resource etag
   *
   * @schema Microsoft.Insights.myWorkbooks#etag
   */
  readonly etag?: MicrosoftInsightsMyWorkbooksEtag;

  /**
   * Azure resource Id
   *
   * @schema Microsoft.Insights.myWorkbooks#id
   */
  readonly id?: string;

  /**
   * Customer Managed Identity
   *
   * @schema Microsoft.Insights.myWorkbooks#identity
   */
  readonly identity?: MyWorkbookManagedIdentity;

  /**
   * The kind of workbook. Choices are user and shared.
   *
   * @schema Microsoft.Insights.myWorkbooks#kind
   */
  readonly kind?: MicrosoftInsightsMyWorkbooksKind;

  /**
   * Resource location
   *
   * @schema Microsoft.Insights.myWorkbooks#location
   */
  readonly location?: string;

  /**
   * The name of the Application Insights component resource.
   *
   * @schema Microsoft.Insights.myWorkbooks#name
   */
  readonly name: string;

  /**
   * Properties that contain a private workbook.
   *
   * @schema Microsoft.Insights.myWorkbooks#properties
   */
  readonly properties: MyWorkbookProperties;

  /**
   * Resource tags
   *
   * @schema Microsoft.Insights.myWorkbooks#tags
   */
  readonly tags?: MicrosoftInsightsMyWorkbooksTags;

  /**
   * @schema Microsoft.Insights.myWorkbooks#type
   */
  readonly type: MicrosoftInsightsMyWorkbooksType;

}

/**
 * Microsoft.Insights/workbooks
 *
 * @schema Microsoft.Insights.workbooks
 */
export interface WorkbooksOptions {
  /**
   * @schema Microsoft.Insights.workbooks#apiVersion
   */
  readonly apiVersion?: MicrosoftInsightsWorkbooksApiVersion;

  /**
   * Resource etag
   *
   * @schema Microsoft.Insights.workbooks#etag
   */
  readonly etag?: MicrosoftInsightsWorkbooksEtag;

  /**
   * Azure resource Id
   *
   * @schema Microsoft.Insights.workbooks#id
   */
  readonly id?: string;

  /**
   * Customer Managed Identity
   *
   * @schema Microsoft.Insights.workbooks#identity
   */
  readonly identity?: WorkbookManagedIdentity;

  /**
   * The kind of workbook. Choices are user and shared.
   *
   * @schema Microsoft.Insights.workbooks#kind
   */
  readonly kind?: MicrosoftInsightsWorkbooksKind;

  /**
   * Resource location
   *
   * @schema Microsoft.Insights.workbooks#location
   */
  readonly location?: string;

  /**
   * The name of the Application Insights component resource.
   *
   * @schema Microsoft.Insights.workbooks#name
   */
  readonly name: string;

  /**
   * Properties that contain a workbook.
   *
   * @schema Microsoft.Insights.workbooks#properties
   */
  readonly properties: WorkbookProperties;

  /**
   * Resource tags
   *
   * @schema Microsoft.Insights.workbooks#tags
   */
  readonly tags?: MicrosoftInsightsWorkbooksTags;

  /**
   * @schema Microsoft.Insights.workbooks#type
   */
  readonly type: MicrosoftInsightsWorkbooksType;

}

export enum MicrosoftInsightsMyWorkbooksApiVersion {
  "MicrosoftInsightsMyWorkbooksApiVersion_2021_03_08" = '2021-03-08',
}

/**
 * @schema MicrosoftInsightsMyWorkbooksEtag
 */
export interface MicrosoftInsightsMyWorkbooksEtag {
}

/**
 * Customer Managed Identity
 *
 * @schema #/definitions/MyWorkbookManagedIdentity
 */
export interface MyWorkbookManagedIdentity {
  /**
   * The identity type.
   *
   * @schema #/definitions/MyWorkbookManagedIdentity#type
   */
  readonly type?: MyWorkbookManagedIdentityType;

  /**
   * Customer Managed Identity
   *
   * @schema #/definitions/MyWorkbookManagedIdentity#userAssignedIdentities
   */
  readonly userAssignedIdentities?: MyWorkbookUserAssignedIdentities;

}

export enum MicrosoftInsightsMyWorkbooksKind {
  USER = 'user',
  SHARED = 'shared',
}

/**
 * Properties that contain a private workbook.
 *
 * @schema #/definitions/MyWorkbookProperties
 */
export interface MyWorkbookProperties {
  /**
   * Workbook category, as defined by the user at creation time.
   *
   * @schema #/definitions/MyWorkbookProperties#category
   */
  readonly category: string;

  /**
   * The user-defined name of the private workbook.
   *
   * @schema #/definitions/MyWorkbookProperties#displayName
   */
  readonly displayName: string;

  /**
   * Configuration of this particular private workbook. Configuration data is a string containing valid JSON
   *
   * @schema #/definitions/MyWorkbookProperties#serializedData
   */
  readonly serializedData: string;

  /**
   * Optional resourceId for a source resource.
   *
   * @schema #/definitions/MyWorkbookProperties#sourceId
   */
  readonly sourceId?: string;

  /**
   * BYOS Storage Account URI
   *
   * @schema #/definitions/MyWorkbookProperties#storageUri
   */
  readonly storageUri?: string;

  /**
   * A list of 0 or more tags that are associated with this private workbook definition
   *
   * @schema #/definitions/MyWorkbookProperties#tags
   */
  readonly tags?: string[];

  /**
   * This instance's version of the data model. This can change as new features are added that can be marked private workbook.
   *
   * @schema #/definitions/MyWorkbookProperties#version
   */
  readonly version?: string;

}

/**
 * @schema MicrosoftInsightsMyWorkbooksTags
 */
export interface MicrosoftInsightsMyWorkbooksTags {
}

export enum MicrosoftInsightsMyWorkbooksType {
  "MicrosoftInsightsMyWorkbooksType_MICROSOFT_INSIGHTS_MY_WORKBOOKS" = 'Microsoft.Insights/myWorkbooks',
}

export enum MicrosoftInsightsWorkbooksApiVersion {
  "MicrosoftInsightsWorkbooksApiVersion_2021_03_08" = '2021-03-08',
}

/**
 * @schema MicrosoftInsightsWorkbooksEtag
 */
export interface MicrosoftInsightsWorkbooksEtag {
}

/**
 * Customer Managed Identity
 *
 * @schema #/definitions/WorkbookManagedIdentity
 */
export interface WorkbookManagedIdentity {
  /**
   * The identity type.
   *
   * @schema #/definitions/WorkbookManagedIdentity#type
   */
  readonly type?: WorkbookManagedIdentityType;

  /**
   * Customer Managed Identity
   *
   * @schema #/definitions/WorkbookManagedIdentity#userAssignedIdentities
   */
  readonly userAssignedIdentities?: WorkbookUserAssignedIdentities;

}

export enum MicrosoftInsightsWorkbooksKind {
  USER = 'user',
  SHARED = 'shared',
}

/**
 * Properties that contain a workbook.
 *
 * @schema #/definitions/WorkbookProperties
 */
export interface WorkbookProperties {
  /**
   * Workbook category, as defined by the user at creation time.
   *
   * @schema #/definitions/WorkbookProperties#category
   */
  readonly category: string;

  /**
   * The description of the workbook.
   *
   * @schema #/definitions/WorkbookProperties#description
   */
  readonly description?: string;

  /**
   * The user-defined name (display name) of the workbook.
   *
   * @schema #/definitions/WorkbookProperties#displayName
   */
  readonly displayName: string;

  /**
   * The unique revision id for this workbook definition
   *
   * @schema #/definitions/WorkbookProperties#revision
   */
  readonly revision?: string;

  /**
   * Configuration of this particular workbook. Configuration data is a string containing valid JSON
   *
   * @schema #/definitions/WorkbookProperties#serializedData
   */
  readonly serializedData: string;

  /**
   * ResourceId for a source resource.
   *
   * @schema #/definitions/WorkbookProperties#sourceId
   */
  readonly sourceId?: string;

  /**
   * BYOS Storage Account URI
   *
   * @schema #/definitions/WorkbookProperties#storageUri
   */
  readonly storageUri?: string;

  /**
   * A list of 0 or more tags that are associated with this workbook definition
   *
   * @schema #/definitions/WorkbookProperties#tags
   */
  readonly tags?: string[];

  /**
   * Workbook version
   *
   * @schema #/definitions/WorkbookProperties#version
   */
  readonly version?: string;

}

/**
 * @schema MicrosoftInsightsWorkbooksTags
 */
export interface MicrosoftInsightsWorkbooksTags {
}

export enum MicrosoftInsightsWorkbooksType {
  "MicrosoftInsightsWorkbooksType_MICROSOFT_INSIGHTS_WORKBOOKS" = 'Microsoft.Insights/workbooks',
}

export enum MyWorkbookManagedIdentityType {
  USER_ASSIGNED = 'UserAssigned',
  NONE = 'None',
}

/**
 * Customer Managed Identity
 *
 * @schema #/definitions/MyWorkbookUserAssignedIdentities
 */
export interface MyWorkbookUserAssignedIdentities {
}

export enum WorkbookManagedIdentityType {
  USER_ASSIGNED = 'UserAssigned',
  NONE = 'None',
}

/**
 * Customer Managed Identity
 *
 * @schema #/definitions/WorkbookUserAssignedIdentities
 */
export interface WorkbookUserAssignedIdentities {
}

