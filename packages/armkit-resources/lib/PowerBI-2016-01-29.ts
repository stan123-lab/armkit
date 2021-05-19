// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.PowerBI/workspaceCollections
 *
 * @schema Microsoft.PowerBI.workspaceCollections
 */
export class WorkspaceCollections extends ArmResource {
  /**
   * Defines a "Microsoft.PowerBI.workspaceCollections" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: WorkspaceCollectionsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'workspaceCollections',
    });
  }
}

/**
 * Microsoft.PowerBI/workspaceCollections
 *
 * @schema Microsoft.PowerBI.workspaceCollections
 */
export interface WorkspaceCollectionsOptions {
  /**
   * @schema Microsoft.PowerBI.workspaceCollections#apiVersion
   */
  readonly apiVersion?: MicrosoftPowerBiWorkspaceCollectionsApiVersion;

  /**
   * Azure location
   *
   * @schema Microsoft.PowerBI.workspaceCollections#location
   */
  readonly location?: string;

  /**
   * Power BI Embedded Workspace Collection name
   *
   * @schema Microsoft.PowerBI.workspaceCollections#name
   */
  readonly name: string;

  /**
   * @schema Microsoft.PowerBI.workspaceCollections#sku
   */
  readonly sku?: AzureSku;

  /**
   * @schema Microsoft.PowerBI.workspaceCollections#tags
   */
  readonly tags?: MicrosoftPowerBiWorkspaceCollectionsTags;

  /**
   * @schema Microsoft.PowerBI.workspaceCollections#type
   */
  readonly type: MicrosoftPowerBiWorkspaceCollectionsType;

}

export enum MicrosoftPowerBiWorkspaceCollectionsApiVersion {
  "MicrosoftPowerBiWorkspaceCollectionsApiVersion_2016_01_29" = '2016-01-29',
}

/**
 * @schema #/definitions/AzureSku
 */
export interface AzureSku {
  /**
   * SKU name
   *
   * @schema #/definitions/AzureSku#name
   */
  readonly name: AzureSkuName;

  /**
   * SKU tier
   *
   * @schema #/definitions/AzureSku#tier
   */
  readonly tier: AzureSkuTier;

}

/**
 * @schema MicrosoftPowerBiWorkspaceCollectionsTags
 */
export interface MicrosoftPowerBiWorkspaceCollectionsTags {
}

export enum MicrosoftPowerBiWorkspaceCollectionsType {
  "MicrosoftPowerBiWorkspaceCollectionsType_MICROSOFT_POWER_BI_WORKSPACE_COLLECTIONS" = 'Microsoft.PowerBI/workspaceCollections',
}

export enum AzureSkuName {
  "AzureSkuName_S1" = 'S1',
}

export enum AzureSkuTier {
  STANDARD = 'Standard',
}

