// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.VirtualMachineImages/imageTemplates
 *
 * @schema Microsoft.VirtualMachineImages.imageTemplates
 */
export class ImageTemplates extends ArmResource {
  /**
   * Defines a "Microsoft.VirtualMachineImages.imageTemplates" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: ImageTemplatesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'imageTemplates',
    });
  }
}

/**
 * Microsoft.VirtualMachineImages/imageTemplates
 *
 * @schema Microsoft.VirtualMachineImages.imageTemplates
 */
export interface ImageTemplatesOptions {
  /**
   * @schema Microsoft.VirtualMachineImages.imageTemplates#apiVersion
   */
  readonly apiVersion?: MicrosoftVirtualMachineImagesImageTemplatesApiVersion;

  /**
   * Identity for the image template.
   *
   * @schema Microsoft.VirtualMachineImages.imageTemplates#identity
   */
  readonly identity: ImageTemplateIdentity;

  /**
   * Resource location
   *
   * @schema Microsoft.VirtualMachineImages.imageTemplates#location
   */
  readonly location: string;

  /**
   * The name of the image Template
   *
   * @schema Microsoft.VirtualMachineImages.imageTemplates#name
   */
  readonly name: MicrosoftVirtualMachineImagesImageTemplatesNamePattern;

  /**
   * Describes the properties of an image template
   *
   * @schema Microsoft.VirtualMachineImages.imageTemplates#properties
   */
  readonly properties: ImageTemplateProperties;

  /**
   * Resource tags
   *
   * @schema Microsoft.VirtualMachineImages.imageTemplates#tags
   */
  readonly tags?: MicrosoftVirtualMachineImagesImageTemplatesTags;

  /**
   * @schema Microsoft.VirtualMachineImages.imageTemplates#type
   */
  readonly type: MicrosoftVirtualMachineImagesImageTemplatesType;

}

export enum MicrosoftVirtualMachineImagesImageTemplatesApiVersion {
  "MicrosoftVirtualMachineImagesImageTemplatesApiVersion_2020_02_14" = '2020-02-14',
}

/**
 * Identity for the image template.
 *
 * @schema #/definitions/ImageTemplateIdentity
 */
export interface ImageTemplateIdentity {
  /**
   * The type of identity used for the image template. The type 'None' will remove any identities from the image template.
   *
   * @schema #/definitions/ImageTemplateIdentity#type
   */
  readonly type?: ImageTemplateIdentityType;

  /**
   * The list of user identities associated with the image template. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
   *
   * @schema #/definitions/ImageTemplateIdentity#userAssignedIdentities
   */
  readonly userAssignedIdentities?: ImageTemplateIdentityUserAssignedIdentities;

}

/**
 * @schema MicrosoftVirtualMachineImagesImageTemplatesName
 */
export class MicrosoftVirtualMachineImagesImageTemplatesNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Describes the properties of an image template
 *
 * @schema #/definitions/ImageTemplateProperties
 */
export interface ImageTemplateProperties {
  /**
   * Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
   *
   * @schema #/definitions/ImageTemplateProperties#buildTimeoutInMinutes
   */
  readonly buildTimeoutInMinutes?: number;

  /**
   * Specifies the properties used to describe the customization steps of the image, like Image source etc
   *
   * @schema #/definitions/ImageTemplateProperties#customize
   */
  readonly customize?: ImageTemplateCustomizer[];

  /**
   * The distribution targets where the image output needs to go to.
   *
   * @schema #/definitions/ImageTemplateProperties#distribute
   */
  readonly distribute: ImageTemplateDistributor[];

  /**
   * Describes a virtual machine image source for building, customizing and distributing
   *
   * @schema #/definitions/ImageTemplateProperties#source
   */
  readonly source: ImageTemplateSource;

  /**
   * Describes the virtual machine used to build, customize and capture images
   *
   * @schema #/definitions/ImageTemplateProperties#vmProfile
   */
  readonly vmProfile?: ImageTemplateVmProfile;

}

/**
 * @schema MicrosoftVirtualMachineImagesImageTemplatesTags
 */
export interface MicrosoftVirtualMachineImagesImageTemplatesTags {
}

export enum MicrosoftVirtualMachineImagesImageTemplatesType {
  "MicrosoftVirtualMachineImagesImageTemplatesType_MICROSOFT_VIRTUAL_MACHINE_IMAGES_IMAGE_TEMPLATES" = 'Microsoft.VirtualMachineImages/imageTemplates',
}

export enum ImageTemplateIdentityType {
  USER_ASSIGNED = 'UserAssigned',
  NONE = 'None',
}

/**
 * @schema #/definitions/imageTemplateIdentityUserAssignedIdentities
 */
export interface ImageTemplateIdentityUserAssignedIdentities {
}

/**
 * Describes a unit of image customization
 *
 * @schema #/definitions/ImageTemplateCustomizer
 */
export class ImageTemplateCustomizer {
  public static fromImageTemplateShellCustomizer(value: ImageTemplateShellCustomizer): ImageTemplateCustomizer {
    return new ImageTemplateCustomizer(value);
  }
  public static fromImageTemplateRestartCustomizer(value: ImageTemplateRestartCustomizer): ImageTemplateCustomizer {
    return new ImageTemplateCustomizer(value);
  }
  public static fromImageTemplateWindowsUpdateCustomizer(value: ImageTemplateWindowsUpdateCustomizer): ImageTemplateCustomizer {
    return new ImageTemplateCustomizer(value);
  }
  public static fromImageTemplatePowerShellCustomizer(value: ImageTemplatePowerShellCustomizer): ImageTemplateCustomizer {
    return new ImageTemplateCustomizer(value);
  }
  public static fromImageTemplateFileCustomizer(value: ImageTemplateFileCustomizer): ImageTemplateCustomizer {
    return new ImageTemplateCustomizer(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * Generic distribution object
 *
 * @schema #/definitions/ImageTemplateDistributor
 */
export class ImageTemplateDistributor {
  public static fromImageTemplateManagedImageDistributor(value: ImageTemplateManagedImageDistributor): ImageTemplateDistributor {
    return new ImageTemplateDistributor(value);
  }
  public static fromImageTemplateSharedImageDistributor(value: ImageTemplateSharedImageDistributor): ImageTemplateDistributor {
    return new ImageTemplateDistributor(value);
  }
  public static fromImageTemplateVhdDistributor(value: ImageTemplateVhdDistributor): ImageTemplateDistributor {
    return new ImageTemplateDistributor(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * Describes a virtual machine image source for building, customizing and distributing
 *
 * @schema #/definitions/ImageTemplateSource
 */
export class ImageTemplateSource {
  public static fromImageTemplatePlatformImageSource(value: ImageTemplatePlatformImageSource): ImageTemplateSource {
    return new ImageTemplateSource(value);
  }
  public static fromImageTemplateManagedImageSource(value: ImageTemplateManagedImageSource): ImageTemplateSource {
    return new ImageTemplateSource(value);
  }
  public static fromImageTemplateSharedImageVersionSource(value: ImageTemplateSharedImageVersionSource): ImageTemplateSource {
    return new ImageTemplateSource(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * Describes the virtual machine used to build, customize and capture images
 *
 * @schema #/definitions/ImageTemplateVmProfile
 */
export interface ImageTemplateVmProfile {
  /**
   * Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size.
   *
   * @schema #/definitions/ImageTemplateVmProfile#osDiskSizeGB
   */
  readonly osDiskSizeGB?: number;

  /**
   * Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2).
   *
   * @schema #/definitions/ImageTemplateVmProfile#vmSize
   */
  readonly vmSize?: string;

  /**
   * Virtual Network configuration.
   *
   * @schema #/definitions/ImageTemplateVmProfile#vnetConfig
   */
  readonly vnetConfig?: VirtualNetworkConfig;

}

/**
 * Runs a shell script during the customization phase (Linux). Corresponds to Packer shell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 *
 * @schema #/definitions/ImageTemplateShellCustomizer
 */
export interface ImageTemplateShellCustomizer {
  /**
   * Array of shell commands to execute
   *
   * @schema #/definitions/ImageTemplateShellCustomizer#inline
   */
  readonly inline?: string[];

  /**
   * URI of the shell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
   *
   * @schema #/definitions/ImageTemplateShellCustomizer#scriptUri
   */
  readonly scriptUri?: string;

  /**
   * SHA256 checksum of the shell script provided in the scriptUri field
   *
   * @schema #/definitions/ImageTemplateShellCustomizer#sha256Checksum
   */
  readonly sha256Checksum?: string;

  /**
   * @schema #/definitions/ImageTemplateShellCustomizer#type
   */
  readonly type: ImageTemplateShellCustomizerType;

}

/**
 * Reboots a VM and waits for it to come back online (Windows). Corresponds to Packer windows-restart provisioner
 *
 * @schema #/definitions/ImageTemplateRestartCustomizer
 */
export interface ImageTemplateRestartCustomizer {
  /**
   * Command to check if restart succeeded [Default: '']
   *
   * @schema #/definitions/ImageTemplateRestartCustomizer#restartCheckCommand
   */
  readonly restartCheckCommand?: string;

  /**
   * Command to execute the restart [Default: 'shutdown /r /f /t 0 /c "packer restart"']
   *
   * @schema #/definitions/ImageTemplateRestartCustomizer#restartCommand
   */
  readonly restartCommand?: string;

  /**
   * Restart timeout specified as a string of magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours) [Default: '5m']
   *
   * @schema #/definitions/ImageTemplateRestartCustomizer#restartTimeout
   */
  readonly restartTimeout?: string;

  /**
   * @schema #/definitions/ImageTemplateRestartCustomizer#type
   */
  readonly type: ImageTemplateRestartCustomizerType;

}

/**
 * Installs Windows Updates. Corresponds to Packer Windows Update Provisioner (https://github.com/rgl/packer-provisioner-windows-update)
 *
 * @schema #/definitions/ImageTemplateWindowsUpdateCustomizer
 */
export interface ImageTemplateWindowsUpdateCustomizer {
  /**
   * Array of filters to select updates to apply. Omit or specify empty array to use the default (no filter). Refer to above link for examples and detailed description of this field.
   *
   * @schema #/definitions/ImageTemplateWindowsUpdateCustomizer#filters
   */
  readonly filters?: string[];

  /**
   * Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field.
   *
   * @schema #/definitions/ImageTemplateWindowsUpdateCustomizer#searchCriteria
   */
  readonly searchCriteria?: string;

  /**
   * @schema #/definitions/ImageTemplateWindowsUpdateCustomizer#type
   */
  readonly type: ImageTemplateWindowsUpdateCustomizerType;

  /**
   * Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000)
   *
   * @schema #/definitions/ImageTemplateWindowsUpdateCustomizer#updateLimit
   */
  readonly updateLimit?: number;

}

/**
 * Runs the specified PowerShell on the VM (Windows). Corresponds to Packer powershell provisioner. Exactly one of 'scriptUri' or 'inline' can be specified.
 *
 * @schema #/definitions/ImageTemplatePowerShellCustomizer
 */
export interface ImageTemplatePowerShellCustomizer {
  /**
   * Array of PowerShell commands to execute
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#inline
   */
  readonly inline?: string[];

  /**
   * If specified, the PowerShell script will be run with elevated privileges using the Local System user. Can only be true when the runElevated field above is set to true.
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#runAsSystem
   */
  readonly runAsSystem?: boolean;

  /**
   * If specified, the PowerShell script will be run with elevated privileges
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#runElevated
   */
  readonly runElevated?: boolean;

  /**
   * URI of the PowerShell script to be run for customizing. It can be a github link, SAS URI for Azure Storage, etc
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#scriptUri
   */
  readonly scriptUri?: string;

  /**
   * SHA256 checksum of the power shell script provided in the scriptUri field above
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#sha256Checksum
   */
  readonly sha256Checksum?: string;

  /**
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#type
   */
  readonly type: ImageTemplatePowerShellCustomizerType;

  /**
   * Valid exit codes for the PowerShell script. [Default: 0]
   *
   * @schema #/definitions/ImageTemplatePowerShellCustomizer#validExitCodes
   */
  readonly validExitCodes?: number[];

}

/**
 * Uploads files to VMs (Linux, Windows). Corresponds to Packer file provisioner
 *
 * @schema #/definitions/ImageTemplateFileCustomizer
 */
export interface ImageTemplateFileCustomizer {
  /**
   * The absolute path to a file (with nested directory structures already created) where the file (from sourceUri) will be uploaded to in the VM
   *
   * @schema #/definitions/ImageTemplateFileCustomizer#destination
   */
  readonly destination?: string;

  /**
   * SHA256 checksum of the file provided in the sourceUri field above
   *
   * @schema #/definitions/ImageTemplateFileCustomizer#sha256Checksum
   */
  readonly sha256Checksum?: string;

  /**
   * The URI of the file to be uploaded for customizing the VM. It can be a github link, SAS URI for Azure Storage, etc
   *
   * @schema #/definitions/ImageTemplateFileCustomizer#sourceUri
   */
  readonly sourceUri?: string;

  /**
   * @schema #/definitions/ImageTemplateFileCustomizer#type
   */
  readonly type: ImageTemplateFileCustomizerType;

}

/**
 * Distribute as a Managed Disk Image.
 *
 * @schema #/definitions/ImageTemplateManagedImageDistributor
 */
export interface ImageTemplateManagedImageDistributor {
  /**
   * Resource Id of the Managed Disk Image
   *
   * @schema #/definitions/ImageTemplateManagedImageDistributor#imageId
   */
  readonly imageId: string;

  /**
   * Azure location for the image, should match if image already exists
   *
   * @schema #/definitions/ImageTemplateManagedImageDistributor#location
   */
  readonly location: string;

  /**
   * @schema #/definitions/ImageTemplateManagedImageDistributor#type
   */
  readonly type: ImageTemplateManagedImageDistributorType;

}

/**
 * Distribute via Shared Image Gallery.
 *
 * @schema #/definitions/ImageTemplateSharedImageDistributor
 */
export interface ImageTemplateSharedImageDistributor {
  /**
   * Flag that indicates whether created image version should be excluded from latest. Omit to use the default (false).
   *
   * @schema #/definitions/ImageTemplateSharedImageDistributor#excludeFromLatest
   */
  readonly excludeFromLatest?: boolean;

  /**
   * Resource Id of the Shared Image Gallery image
   *
   * @schema #/definitions/ImageTemplateSharedImageDistributor#galleryImageId
   */
  readonly galleryImageId: string;

  /**
   * A list of regions that the image will be replicated to
   *
   * @schema #/definitions/ImageTemplateSharedImageDistributor#replicationRegions
   */
  readonly replicationRegions: string[];

  /**
   * Storage account type to be used to store the shared image. Omit to use the default (Standard_LRS).
   *
   * @schema #/definitions/ImageTemplateSharedImageDistributor#storageAccountType
   */
  readonly storageAccountType?: ImageTemplateSharedImageDistributorStorageAccountType;

  /**
   * @schema #/definitions/ImageTemplateSharedImageDistributor#type
   */
  readonly type: ImageTemplateSharedImageDistributorType;

}

/**
 * Distribute via VHD in a storage account.
 *
 * @schema #/definitions/ImageTemplateVhdDistributor
 */
export interface ImageTemplateVhdDistributor {
  /**
   * @schema #/definitions/ImageTemplateVhdDistributor#type
   */
  readonly type: ImageTemplateVhdDistributorType;

}

/**
 * Describes an image source from [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
 *
 * @schema #/definitions/ImageTemplatePlatformImageSource
 */
export interface ImageTemplatePlatformImageSource {
  /**
   * Image offer from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   *
   * @schema #/definitions/ImageTemplatePlatformImageSource#offer
   */
  readonly offer?: string;

  /**
   * Purchase plan configuration for platform image.
   *
   * @schema #/definitions/ImageTemplatePlatformImageSource#planInfo
   */
  readonly planInfo?: PlatformImagePurchasePlan;

  /**
   * Image Publisher in [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   *
   * @schema #/definitions/ImageTemplatePlatformImageSource#publisher
   */
  readonly publisher?: string;

  /**
   * Image sku from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages).
   *
   * @schema #/definitions/ImageTemplatePlatformImageSource#sku
   */
  readonly sku?: string;

  /**
   * @schema #/definitions/ImageTemplatePlatformImageSource#type
   */
  readonly type: ImageTemplatePlatformImageSourceType;

  /**
   * Image version from the [Azure Gallery Images](https://docs.microsoft.com/en-us/rest/api/compute/virtualmachineimages). If 'latest' is specified here, the version is evaluated when the image build takes place, not when the template is submitted. Specifying 'latest' could cause ROUNDTRIP_INCONSISTENT_PROPERTY issue which will be fixed.
   *
   * @schema #/definitions/ImageTemplatePlatformImageSource#version
   */
  readonly version?: string;

}

/**
 * Describes an image source that is a managed image in customer subscription.
 *
 * @schema #/definitions/ImageTemplateManagedImageSource
 */
export interface ImageTemplateManagedImageSource {
  /**
   * ARM resource id of the managed image in customer subscription
   *
   * @schema #/definitions/ImageTemplateManagedImageSource#imageId
   */
  readonly imageId: string;

  /**
   * @schema #/definitions/ImageTemplateManagedImageSource#type
   */
  readonly type: ImageTemplateManagedImageSourceType;

}

/**
 * Describes an image source that is an image version in a shared image gallery.
 *
 * @schema #/definitions/ImageTemplateSharedImageVersionSource
 */
export interface ImageTemplateSharedImageVersionSource {
  /**
   * ARM resource id of the image version in the shared image gallery
   *
   * @schema #/definitions/ImageTemplateSharedImageVersionSource#imageVersionId
   */
  readonly imageVersionId: string;

  /**
   * @schema #/definitions/ImageTemplateSharedImageVersionSource#type
   */
  readonly type: ImageTemplateSharedImageVersionSourceType;

}

/**
 * Virtual Network configuration.
 *
 * @schema #/definitions/VirtualNetworkConfig
 */
export interface VirtualNetworkConfig {
  /**
   * Resource id of a pre-existing subnet.
   *
   * @schema #/definitions/VirtualNetworkConfig#subnetId
   */
  readonly subnetId?: string;

}

export enum ImageTemplateShellCustomizerType {
  SHELL = 'Shell',
}

export enum ImageTemplateRestartCustomizerType {
  WINDOWS_RESTART = 'WindowsRestart',
}

export enum ImageTemplateWindowsUpdateCustomizerType {
  WINDOWS_UPDATE = 'WindowsUpdate',
}

export enum ImageTemplatePowerShellCustomizerType {
  POWER_SHELL = 'PowerShell',
}

export enum ImageTemplateFileCustomizerType {
  FILE = 'File',
}

export enum ImageTemplateManagedImageDistributorType {
  MANAGED_IMAGE = 'ManagedImage',
}

export enum ImageTemplateSharedImageDistributorStorageAccountType {
  STANDARD_LRS = 'Standard_LRS',
  STANDARD_ZRS = 'Standard_ZRS',
}

export enum ImageTemplateSharedImageDistributorType {
  SHARED_IMAGE = 'SharedImage',
}

export enum ImageTemplateVhdDistributorType {
  VHD = 'VHD',
}

/**
 * Purchase plan configuration for platform image.
 *
 * @schema #/definitions/PlatformImagePurchasePlan
 */
export interface PlatformImagePurchasePlan {
  /**
   * Name of the purchase plan.
   *
   * @schema #/definitions/PlatformImagePurchasePlan#planName
   */
  readonly planName: string;

  /**
   * Product of the purchase plan.
   *
   * @schema #/definitions/PlatformImagePurchasePlan#planProduct
   */
  readonly planProduct: string;

  /**
   * Publisher of the purchase plan.
   *
   * @schema #/definitions/PlatformImagePurchasePlan#planPublisher
   */
  readonly planPublisher: string;

}

export enum ImageTemplatePlatformImageSourceType {
  PLATFORM_IMAGE = 'PlatformImage',
}

export enum ImageTemplateManagedImageSourceType {
  MANAGED_IMAGE = 'ManagedImage',
}

export enum ImageTemplateSharedImageVersionSourceType {
  SHARED_IMAGE_VERSION = 'SharedImageVersion',
}

