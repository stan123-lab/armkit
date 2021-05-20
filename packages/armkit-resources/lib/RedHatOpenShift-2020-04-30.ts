// generated by armkit
import { ArmResource } from '@yetics/armkit-core';
import { Construct } from 'constructs';

/**
 * Microsoft.RedHatOpenShift/openShiftClusters
 *
 * @schema Microsoft.RedHatOpenShift.openShiftClusters
 */
export class OpenShiftClusters extends ArmResource {
  /**
   * Defines a "Microsoft.RedHatOpenShift.openShiftClusters" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: OpenShiftClustersOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'openShiftClusters',
    });
  }
}

/**
 * Microsoft.RedHatOpenShift/openShiftClusters
 *
 * @schema Microsoft.RedHatOpenShift.openShiftClusters
 */
export interface OpenShiftClustersOptions {
  /**
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#apiVersion
   */
  readonly apiVersion?: MicrosoftRedHatOpenShiftOpenShiftClustersApiVersion;

  /**
   * The geo-location where the resource lives
   *
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#location
   */
  readonly location: string;

  /**
   * The name of the OpenShift cluster resource.
   *
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#name
   */
  readonly name: string;

  /**
   * OpenShiftClusterProperties represents an OpenShift cluster's properties.
   *
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#properties
   */
  readonly properties: OpenShiftClusterProperties;

  /**
   * Resource tags.
   *
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#tags
   */
  readonly tags?: MicrosoftRedHatOpenShiftOpenShiftClustersTags;

  /**
   * @schema Microsoft.RedHatOpenShift.openShiftClusters#type
   */
  readonly type: MicrosoftRedHatOpenShiftOpenShiftClustersType;

}

export enum MicrosoftRedHatOpenShiftOpenShiftClustersApiVersion {
  "MicrosoftRedHatOpenShiftOpenShiftClustersApiVersion_2020_04_30" = '2020-04-30',
}

/**
 * OpenShiftClusterProperties represents an OpenShift cluster's properties.
 *
 * @schema #/definitions/OpenShiftClusterProperties
 */
export interface OpenShiftClusterProperties {
  /**
   * APIServerProfile represents an API server profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#apiserverProfile
   */
  readonly apiserverProfile?: ApiServerProfile;

  /**
   * ClusterProfile represents a cluster profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#clusterProfile
   */
  readonly clusterProfile?: ClusterProfile;

  /**
   * ConsoleProfile represents a console profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#consoleProfile
   */
  readonly consoleProfile?: ConsoleProfile;

  /**
   * The cluster ingress profiles.
   *
   * @schema #/definitions/OpenShiftClusterProperties#ingressProfiles
   */
  readonly ingressProfiles?: IngressProfile[];

  /**
   * MasterProfile represents a master profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#masterProfile
   */
  readonly masterProfile?: MasterProfile;

  /**
   * NetworkProfile represents a network profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#networkProfile
   */
  readonly networkProfile?: NetworkProfile;

  /**
   * The cluster provisioning state (immutable).
   *
   * @schema #/definitions/OpenShiftClusterProperties#provisioningState
   */
  readonly provisioningState?: OpenShiftClusterPropertiesProvisioningState;

  /**
   * ServicePrincipalProfile represents a service principal profile.
   *
   * @schema #/definitions/OpenShiftClusterProperties#servicePrincipalProfile
   */
  readonly servicePrincipalProfile?: ServicePrincipalProfile;

  /**
   * The cluster worker profiles.
   *
   * @schema #/definitions/OpenShiftClusterProperties#workerProfiles
   */
  readonly workerProfiles?: WorkerProfile[];

}

/**
 * @schema MicrosoftRedHatOpenShiftOpenShiftClustersTags
 */
export interface MicrosoftRedHatOpenShiftOpenShiftClustersTags {
}

export enum MicrosoftRedHatOpenShiftOpenShiftClustersType {
  "MicrosoftRedHatOpenShiftOpenShiftClustersType_MICROSOFT_RED_HAT_OPEN_SHIFT_OPEN_SHIFT_CLUSTERS" = 'Microsoft.RedHatOpenShift/openShiftClusters',
}

/**
 * APIServerProfile represents an API server profile.
 *
 * @schema #/definitions/APIServerProfile
 */
export interface ApiServerProfile {
  /**
   * The IP of the cluster API server (immutable).
   *
   * @schema #/definitions/APIServerProfile#ip
   */
  readonly ip?: string;

  /**
   * The URL to access the cluster API server (immutable).
   *
   * @schema #/definitions/APIServerProfile#url
   */
  readonly url?: string;

  /**
   * API server visibility (immutable).
   *
   * @schema #/definitions/APIServerProfile#visibility
   */
  readonly visibility?: ApiServerProfileVisibility;

}

/**
 * ClusterProfile represents a cluster profile.
 *
 * @schema #/definitions/ClusterProfile
 */
export interface ClusterProfile {
  /**
   * The domain for the cluster (immutable).
   *
   * @schema #/definitions/ClusterProfile#domain
   */
  readonly domain?: string;

  /**
   * The pull secret for the cluster (immutable).
   *
   * @schema #/definitions/ClusterProfile#pullSecret
   */
  readonly pullSecret?: string;

  /**
   * The ID of the cluster resource group (immutable).
   *
   * @schema #/definitions/ClusterProfile#resourceGroupId
   */
  readonly resourceGroupId?: string;

  /**
   * The version of the cluster (immutable).
   *
   * @schema #/definitions/ClusterProfile#version
   */
  readonly version?: string;

}

/**
 * ConsoleProfile represents a console profile.
 *
 * @schema #/definitions/ConsoleProfile
 */
export interface ConsoleProfile {
  /**
   * The URL to access the cluster console (immutable).
   *
   * @schema #/definitions/ConsoleProfile#url
   */
  readonly url?: string;

}

/**
 * IngressProfile represents an ingress profile.
 *
 * @schema #/definitions/IngressProfile
 */
export interface IngressProfile {
  /**
   * The IP of the ingress (immutable).
   *
   * @schema #/definitions/IngressProfile#ip
   */
  readonly ip?: string;

  /**
   * The ingress profile name.  Must be "default" (immutable).
   *
   * @schema #/definitions/IngressProfile#name
   */
  readonly name?: string;

  /**
   * Ingress visibility (immutable).
   *
   * @schema #/definitions/IngressProfile#visibility
   */
  readonly visibility?: IngressProfileVisibility;

}

/**
 * MasterProfile represents a master profile.
 *
 * @schema #/definitions/MasterProfile
 */
export interface MasterProfile {
  /**
   * The Azure resource ID of the master subnet (immutable).
   *
   * @schema #/definitions/MasterProfile#subnetId
   */
  readonly subnetId?: string;

  /**
   * The size of the master VMs (immutable).
   *
   * @schema #/definitions/MasterProfile#vmSize
   */
  readonly vmSize?: MasterProfileVmSize;

}

/**
 * NetworkProfile represents a network profile.
 *
 * @schema #/definitions/NetworkProfile
 */
export interface NetworkProfile {
  /**
   * The CIDR used for OpenShift/Kubernetes Pods (immutable).
   *
   * @schema #/definitions/NetworkProfile#podCidr
   */
  readonly podCidr?: string;

  /**
   * The CIDR used for OpenShift/Kubernetes Services (immutable).
   *
   * @schema #/definitions/NetworkProfile#serviceCidr
   */
  readonly serviceCidr?: string;

}

export enum OpenShiftClusterPropertiesProvisioningState {
  ADMIN_UPDATING = 'AdminUpdating',
  CREATING = 'Creating',
  DELETING = 'Deleting',
  FAILED = 'Failed',
  SUCCEEDED = 'Succeeded',
  UPDATING = 'Updating',
}

/**
 * ServicePrincipalProfile represents a service principal profile.
 *
 * @schema #/definitions/ServicePrincipalProfile
 */
export interface ServicePrincipalProfile {
  /**
   * The client ID used for the cluster (immutable).
   *
   * @schema #/definitions/ServicePrincipalProfile#clientId
   */
  readonly clientId?: string;

  /**
   * The client secret used for the cluster (immutable).
   *
   * @schema #/definitions/ServicePrincipalProfile#clientSecret
   */
  readonly clientSecret?: string;

}

/**
 * WorkerProfile represents a worker profile.
 *
 * @schema #/definitions/WorkerProfile
 */
export interface WorkerProfile {
  /**
   * The number of worker VMs.  Must be between 3 and 20 (immutable).
   *
   * @schema #/definitions/WorkerProfile#count
   */
  readonly count?: number;

  /**
   * The disk size of the worker VMs.  Must be 128 or greater (immutable).
   *
   * @schema #/definitions/WorkerProfile#diskSizeGB
   */
  readonly diskSizeGB?: number;

  /**
   * The worker profile name.  Must be "worker" (immutable).
   *
   * @schema #/definitions/WorkerProfile#name
   */
  readonly name?: string;

  /**
   * The Azure resource ID of the worker subnet (immutable).
   *
   * @schema #/definitions/WorkerProfile#subnetId
   */
  readonly subnetId?: string;

  /**
   * The size of the worker VMs (immutable).
   *
   * @schema #/definitions/WorkerProfile#vmSize
   */
  readonly vmSize?: WorkerProfileVmSize;

}

export enum ApiServerProfileVisibility {
  PRIVATE = 'Private',
  PUBLIC = 'Public',
}

export enum IngressProfileVisibility {
  PRIVATE = 'Private',
  PUBLIC = 'Public',
}

export enum MasterProfileVmSize {
  "MasterProfileVmSize_STANDARD_D2S_V3" = 'Standard_D2s_v3',
  "MasterProfileVmSize_STANDARD_D4S_V3" = 'Standard_D4s_v3',
  "MasterProfileVmSize_STANDARD_D8S_V3" = 'Standard_D8s_v3',
}

export enum WorkerProfileVmSize {
  "WorkerProfileVmSize_STANDARD_D2S_V3" = 'Standard_D2s_v3',
  "WorkerProfileVmSize_STANDARD_D4S_V3" = 'Standard_D4s_v3',
  "WorkerProfileVmSize_STANDARD_D8S_V3" = 'Standard_D8s_v3',
}

