// generated by armkit
import { ArmResource } from '@yetics/armkit-core';
import { Construct } from 'constructs';

/**
 * Microsoft.HybridCompute/machines
 *
 * @schema Microsoft.HybridCompute.machines
 */
export class Machines extends ArmResource {
  /**
   * Defines a "Microsoft.HybridCompute.machines" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MachinesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'machines',
    });
  }
}

/**
 * Microsoft.HybridCompute/machines/extensions
 *
 * @schema Microsoft.HybridCompute.machines_extensions
 */
export class MachinesExtensions extends ArmResource {
  /**
   * Defines a "Microsoft.HybridCompute.machines_extensions" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: MachinesExtensionsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'machines_extensions',
    });
  }
}

/**
 * Microsoft.HybridCompute/machines
 *
 * @schema Microsoft.HybridCompute.machines
 */
export interface MachinesOptions {
  /**
   * @schema Microsoft.HybridCompute.machines#apiVersion
   */
  readonly apiVersion?: MicrosoftHybridComputeMachinesApiVersion;

  /**
   * @schema Microsoft.HybridCompute.machines#identity
   */
  readonly identity?: MachineIdentity;

  /**
   * The geo-location where the resource lives
   *
   * @schema Microsoft.HybridCompute.machines#location
   */
  readonly location: string;

  /**
   * The name of the hybrid machine.
   *
   * @schema Microsoft.HybridCompute.machines#name
   */
  readonly name: string;

  /**
   * Hybrid Compute Machine properties
   *
   * @schema Microsoft.HybridCompute.machines#properties
   */
  readonly properties: MachinePropertiesModel;

  /**
   * @schema Microsoft.HybridCompute.machines#resources
   */
  readonly resources?: MachinesExtensionsChildResource[];

  /**
   * Resource tags.
   *
   * @schema Microsoft.HybridCompute.machines#tags
   */
  readonly tags?: MicrosoftHybridComputeMachinesTags;

  /**
   * @schema Microsoft.HybridCompute.machines#type
   */
  readonly type: MicrosoftHybridComputeMachinesType;

}

/**
 * Microsoft.HybridCompute/machines/extensions
 *
 * @schema Microsoft.HybridCompute.machines_extensions
 */
export interface MachinesExtensionsOptions {
  /**
   * @schema Microsoft.HybridCompute.machines_extensions#apiVersion
   */
  readonly apiVersion?: MicrosoftHybridComputeMachinesExtensionsApiVersion;

  /**
   * The geo-location where the resource lives
   *
   * @schema Microsoft.HybridCompute.machines_extensions#location
   */
  readonly location: string;

  /**
   * The name of the machine extension.
   *
   * @schema Microsoft.HybridCompute.machines_extensions#name
   */
  readonly name: string;

  /**
   * Describes Machine Extension Properties.
   *
   * @schema Microsoft.HybridCompute.machines_extensions#properties
   */
  readonly properties: MachineExtensionProperties;

  /**
   * Resource tags.
   *
   * @schema Microsoft.HybridCompute.machines_extensions#tags
   */
  readonly tags?: MicrosoftHybridComputeMachinesExtensionsTags;

  /**
   * @schema Microsoft.HybridCompute.machines_extensions#type
   */
  readonly type: MicrosoftHybridComputeMachinesExtensionsType;

}

export enum MicrosoftHybridComputeMachinesApiVersion {
  "MicrosoftHybridComputeMachinesApiVersion_2020_08_02" = '2020-08-02',
}

/**
 * @schema #/definitions/MachineIdentity
 */
export interface MachineIdentity {
  /**
   * The identity type.
   *
   * @schema #/definitions/MachineIdentity#type
   */
  readonly type?: string;

}

/**
 * Hybrid Compute Machine properties
 *
 * @schema #/definitions/MachinePropertiesModel
 */
export interface MachinePropertiesModel {
  /**
   * Public Key that the client provides to be used during initial resource onboarding
   *
   * @schema #/definitions/MachinePropertiesModel#clientPublicKey
   */
  readonly clientPublicKey?: string;

  /**
   * Metadata pertaining to the geographic location of the resource.
   *
   * @schema #/definitions/MachinePropertiesModel#locationData
   */
  readonly locationData?: LocationData;

  /**
   * Specifies the operating system settings for the hybrid machine.
   *
   * @schema #/definitions/MachinePropertiesModel#osProfile
   */
  readonly osProfile?: MachinePropertiesOsProfile;

  /**
   * Specifies the hybrid machine unique ID.
   *
   * @schema #/definitions/MachinePropertiesModel#vmId
   */
  readonly vmId?: string;

}

/**
 * Microsoft.HybridCompute/machines/extensions
 *
 * @schema #/definitions/machines_extensions_childResource
 */
export interface MachinesExtensionsChildResource {
  /**
   * @schema #/definitions/machines_extensions_childResource#apiVersion
   */
  readonly apiVersion: MachinesExtensionsChildResourceApiVersion;

  /**
   * The geo-location where the resource lives
   *
   * @schema #/definitions/machines_extensions_childResource#location
   */
  readonly location: string;

  /**
   * The name of the machine extension.
   *
   * @schema #/definitions/machines_extensions_childResource#name
   */
  readonly name: string;

  /**
   * Describes Machine Extension Properties.
   *
   * @schema #/definitions/machines_extensions_childResource#properties
   */
  readonly properties: MachineExtensionProperties;

  /**
   * Resource tags.
   *
   * @schema #/definitions/machines_extensions_childResource#tags
   */
  readonly tags?: MachinesExtensionsChildResourceTags;

  /**
   * @schema #/definitions/machines_extensions_childResource#type
   */
  readonly type: MachinesExtensionsChildResourceType;

}

/**
 * @schema MicrosoftHybridComputeMachinesTags
 */
export interface MicrosoftHybridComputeMachinesTags {
}

export enum MicrosoftHybridComputeMachinesType {
  "MicrosoftHybridComputeMachinesType_MICROSOFT_HYBRID_COMPUTE_MACHINES" = 'Microsoft.HybridCompute/machines',
}

export enum MicrosoftHybridComputeMachinesExtensionsApiVersion {
  "MicrosoftHybridComputeMachinesExtensionsApiVersion_2020_08_02" = '2020-08-02',
}

/**
 * Describes Machine Extension Properties.
 *
 * @schema #/definitions/MachineExtensionProperties
 */
export interface MachineExtensionProperties {
  /**
   * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
   *
   * @schema #/definitions/MachineExtensionProperties#autoUpgradeMinorVersion
   */
  readonly autoUpgradeMinorVersion?: boolean;

  /**
   * How the extension handler should be forced to update even if the extension configuration has not changed.
   *
   * @schema #/definitions/MachineExtensionProperties#forceUpdateTag
   */
  readonly forceUpdateTag?: string;

  /**
   * The machine extension instance view.
   *
   * @schema #/definitions/MachineExtensionProperties#instanceView
   */
  readonly instanceView?: MachineExtensionPropertiesInstanceView;

  /**
   * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
   *
   * @schema #/definitions/MachineExtensionProperties#protectedSettings
   */
  readonly protectedSettings?: MachineExtensionPropertiesProtectedSettings;

  /**
   * The name of the extension handler publisher.
   *
   * @schema #/definitions/MachineExtensionProperties#publisher
   */
  readonly publisher?: string;

  /**
   * Json formatted public settings for the extension.
   *
   * @schema #/definitions/MachineExtensionProperties#settings
   */
  readonly settings?: MachineExtensionPropertiesSettings;

  /**
   * Specifies the type of the extension; an example is "CustomScriptExtension".
   *
   * @schema #/definitions/MachineExtensionProperties#type
   */
  readonly type?: string;

  /**
   * Specifies the version of the script handler.
   *
   * @schema #/definitions/MachineExtensionProperties#typeHandlerVersion
   */
  readonly typeHandlerVersion?: string;

}

/**
 * @schema MicrosoftHybridComputeMachinesExtensionsTags
 */
export interface MicrosoftHybridComputeMachinesExtensionsTags {
}

export enum MicrosoftHybridComputeMachinesExtensionsType {
  "MicrosoftHybridComputeMachinesExtensionsType_MICROSOFT_HYBRID_COMPUTE_MACHINES_EXTENSIONS" = 'Microsoft.HybridCompute/machines/extensions',
}

/**
 * Metadata pertaining to the geographic location of the resource.
 *
 * @schema #/definitions/LocationData
 */
export interface LocationData {
  /**
   * The city or locality where the resource is located.
   *
   * @schema #/definitions/LocationData#city
   */
  readonly city?: string;

  /**
   * The country or region where the resource is located
   *
   * @schema #/definitions/LocationData#countryOrRegion
   */
  readonly countryOrRegion?: string;

  /**
   * The district, state, or province where the resource is located.
   *
   * @schema #/definitions/LocationData#district
   */
  readonly district?: string;

  /**
   * A canonical name for the geographic or physical location.
   *
   * @schema #/definitions/LocationData#name
   */
  readonly name: string;

}

/**
 * Specifies the operating system settings for the hybrid machine.
 *
 * @schema #/definitions/MachinePropertiesOsProfile
 */
export interface MachinePropertiesOsProfile {
}

export enum MachinesExtensionsChildResourceApiVersion {
  "MachinesExtensionsChildResourceApiVersion_2020_08_02" = '2020-08-02',
}

/**
 * @schema #/definitions/machinesExtensionsChildResourceTags
 */
export interface MachinesExtensionsChildResourceTags {
}

export enum MachinesExtensionsChildResourceType {
  EXTENSIONS = 'extensions',
}

/**
 * The machine extension instance view.
 *
 * @schema #/definitions/MachineExtensionPropertiesInstanceView
 */
export interface MachineExtensionPropertiesInstanceView {
  /**
   * Instance view status.
   *
   * @schema #/definitions/MachineExtensionPropertiesInstanceView#status
   */
  readonly status?: MachineExtensionInstanceViewStatus;

}

/**
 * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
 *
 * @schema #/definitions/machineExtensionPropertiesProtectedSettings
 */
export interface MachineExtensionPropertiesProtectedSettings {
}

/**
 * Json formatted public settings for the extension.
 *
 * @schema #/definitions/machineExtensionPropertiesSettings
 */
export interface MachineExtensionPropertiesSettings {
}

/**
 * Instance view status.
 *
 * @schema #/definitions/MachineExtensionInstanceViewStatus
 */
export interface MachineExtensionInstanceViewStatus {
}

