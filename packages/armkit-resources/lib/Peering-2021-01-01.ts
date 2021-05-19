// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.Peering/peerings
 *
 * @schema Microsoft.Peering.peerings
 */
export class Peerings extends ArmResource {
  /**
   * Defines a "Microsoft.Peering.peerings" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: PeeringsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'peerings',
    });
  }
}

/**
 * Microsoft.Peering/peeringServices
 *
 * @schema Microsoft.Peering.peeringServices
 */
export class PeeringServices extends ArmResource {
  /**
   * Defines a "Microsoft.Peering.peeringServices" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: PeeringServicesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'peeringServices',
    });
  }
}

/**
 * Microsoft.Peering/peeringServices/prefixes
 *
 * @schema Microsoft.Peering.peeringServices_prefixes
 */
export class PeeringServicesPrefixes extends ArmResource {
  /**
   * Defines a "Microsoft.Peering.peeringServices_prefixes" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: PeeringServicesPrefixesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'peeringServices_prefixes',
    });
  }
}

/**
 * Microsoft.Peering/peerings/registeredAsns
 *
 * @schema Microsoft.Peering.peerings_registeredAsns
 */
export class PeeringsRegisteredAsns extends ArmResource {
  /**
   * Defines a "Microsoft.Peering.peerings_registeredAsns" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: PeeringsRegisteredAsnsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'peerings_registeredAsns',
    });
  }
}

/**
 * Microsoft.Peering/peerings/registeredPrefixes
 *
 * @schema Microsoft.Peering.peerings_registeredPrefixes
 */
export class PeeringsRegisteredPrefixes extends ArmResource {
  /**
   * Defines a "Microsoft.Peering.peerings_registeredPrefixes" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: PeeringsRegisteredPrefixesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'peerings_registeredPrefixes',
    });
  }
}

/**
 * Microsoft.Peering/peerings
 *
 * @schema Microsoft.Peering.peerings
 */
export interface PeeringsOptions {
  /**
   * @schema Microsoft.Peering.peerings#apiVersion
   */
  readonly apiVersion?: MicrosoftPeeringPeeringsApiVersion;

  /**
   * The kind of the peering.
   *
   * @schema Microsoft.Peering.peerings#kind
   */
  readonly kind?: MicrosoftPeeringPeeringsKind;

  /**
   * The location of the resource.
   *
   * @schema Microsoft.Peering.peerings#location
   */
  readonly location: string;

  /**
   * The name of the peering.
   *
   * @schema Microsoft.Peering.peerings#name
   */
  readonly name: string;

  /**
   * The properties that define connectivity to the Microsoft Cloud Edge.
   *
   * @schema Microsoft.Peering.peerings#properties
   */
  readonly properties: PeeringProperties;

  /**
   * @schema Microsoft.Peering.peerings#resources
   */
  readonly resources?: MicrosoftPeeringPeeringsResources[];

  /**
   * The SKU that defines the tier and kind of the peering.
   *
   * @schema Microsoft.Peering.peerings#sku
   */
  readonly sku: PeeringSku;

  /**
   * The resource tags.
   *
   * @schema Microsoft.Peering.peerings#tags
   */
  readonly tags?: MicrosoftPeeringPeeringsTags;

  /**
   * @schema Microsoft.Peering.peerings#type
   */
  readonly type: MicrosoftPeeringPeeringsType;

}

/**
 * Microsoft.Peering/peeringServices
 *
 * @schema Microsoft.Peering.peeringServices
 */
export interface PeeringServicesOptions {
  /**
   * @schema Microsoft.Peering.peeringServices#apiVersion
   */
  readonly apiVersion?: MicrosoftPeeringPeeringServicesApiVersion;

  /**
   * The location of the resource.
   *
   * @schema Microsoft.Peering.peeringServices#location
   */
  readonly location: string;

  /**
   * The name of the peering service.
   *
   * @schema Microsoft.Peering.peeringServices#name
   */
  readonly name: string;

  /**
   * The properties that define connectivity to the Peering Service.
   *
   * @schema Microsoft.Peering.peeringServices#properties
   */
  readonly properties: PeeringServiceProperties;

  /**
   * @schema Microsoft.Peering.peeringServices#resources
   */
  readonly resources?: PeeringServicesPrefixesChildResource[];

  /**
   * The SKU that defines the type of the peering service.
   *
   * @schema Microsoft.Peering.peeringServices#sku
   */
  readonly sku?: PeeringServiceSku;

  /**
   * The resource tags.
   *
   * @schema Microsoft.Peering.peeringServices#tags
   */
  readonly tags?: MicrosoftPeeringPeeringServicesTags;

  /**
   * @schema Microsoft.Peering.peeringServices#type
   */
  readonly type: MicrosoftPeeringPeeringServicesType;

}

/**
 * Microsoft.Peering/peeringServices/prefixes
 *
 * @schema Microsoft.Peering.peeringServices_prefixes
 */
export interface PeeringServicesPrefixesOptions {
  /**
   * @schema Microsoft.Peering.peeringServices_prefixes#apiVersion
   */
  readonly apiVersion?: MicrosoftPeeringPeeringServicesPrefixesApiVersion;

  /**
   * The name of the prefix.
   *
   * @schema Microsoft.Peering.peeringServices_prefixes#name
   */
  readonly name: string;

  /**
   * The peering service prefix properties class.
   *
   * @schema Microsoft.Peering.peeringServices_prefixes#properties
   */
  readonly properties: PeeringServicePrefixProperties;

  /**
   * @schema Microsoft.Peering.peeringServices_prefixes#type
   */
  readonly type: MicrosoftPeeringPeeringServicesPrefixesType;

}

/**
 * Microsoft.Peering/peerings/registeredAsns
 *
 * @schema Microsoft.Peering.peerings_registeredAsns
 */
export interface PeeringsRegisteredAsnsOptions {
  /**
   * @schema Microsoft.Peering.peerings_registeredAsns#apiVersion
   */
  readonly apiVersion?: MicrosoftPeeringPeeringsRegisteredAsnsApiVersion;

  /**
   * The name of the ASN.
   *
   * @schema Microsoft.Peering.peerings_registeredAsns#name
   */
  readonly name: string;

  /**
   * The properties that define a registered ASN.
   *
   * @schema Microsoft.Peering.peerings_registeredAsns#properties
   */
  readonly properties: PeeringRegisteredAsnProperties;

  /**
   * @schema Microsoft.Peering.peerings_registeredAsns#type
   */
  readonly type: MicrosoftPeeringPeeringsRegisteredAsnsType;

}

/**
 * Microsoft.Peering/peerings/registeredPrefixes
 *
 * @schema Microsoft.Peering.peerings_registeredPrefixes
 */
export interface PeeringsRegisteredPrefixesOptions {
  /**
   * @schema Microsoft.Peering.peerings_registeredPrefixes#apiVersion
   */
  readonly apiVersion?: MicrosoftPeeringPeeringsRegisteredPrefixesApiVersion;

  /**
   * The name of the registered prefix.
   *
   * @schema Microsoft.Peering.peerings_registeredPrefixes#name
   */
  readonly name: string;

  /**
   * The properties that define a registered prefix.
   *
   * @schema Microsoft.Peering.peerings_registeredPrefixes#properties
   */
  readonly properties: PeeringRegisteredPrefixProperties;

  /**
   * @schema Microsoft.Peering.peerings_registeredPrefixes#type
   */
  readonly type: MicrosoftPeeringPeeringsRegisteredPrefixesType;

}

export enum MicrosoftPeeringPeeringsApiVersion {
  "MicrosoftPeeringPeeringsApiVersion_2021_01_01" = '2021-01-01',
}

export enum MicrosoftPeeringPeeringsKind {
  DIRECT = 'Direct',
  EXCHANGE = 'Exchange',
}

/**
 * The properties that define connectivity to the Microsoft Cloud Edge.
 *
 * @schema #/definitions/PeeringProperties
 */
export interface PeeringProperties {
  /**
   * The properties that define a direct peering.
   *
   * @schema #/definitions/PeeringProperties#direct
   */
  readonly direct?: PeeringPropertiesDirect;

  /**
   * The properties that define an exchange peering.
   *
   * @schema #/definitions/PeeringProperties#exchange
   */
  readonly exchange?: PeeringPropertiesExchange;

  /**
   * The location of the peering.
   *
   * @schema #/definitions/PeeringProperties#peeringLocation
   */
  readonly peeringLocation?: string;

}

/**
 * @schema MicrosoftPeeringPeeringsResources
 */
export class MicrosoftPeeringPeeringsResources {
  public static fromPeeringsRegisteredAsnsChildResource(value: PeeringsRegisteredAsnsChildResource): MicrosoftPeeringPeeringsResources {
    return new MicrosoftPeeringPeeringsResources(value);
  }
  public static fromPeeringsRegisteredPrefixesChildResource(value: PeeringsRegisteredPrefixesChildResource): MicrosoftPeeringPeeringsResources {
    return new MicrosoftPeeringPeeringsResources(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * The SKU that defines the tier and kind of the peering.
 *
 * @schema #/definitions/PeeringSku
 */
export interface PeeringSku {
  /**
   * The family of the peering SKU.
   *
   * @schema #/definitions/PeeringSku#family
   */
  readonly family?: PeeringSkuFamily;

  /**
   * The name of the peering SKU.
   *
   * @schema #/definitions/PeeringSku#name
   */
  readonly name?: string;

  /**
   * The size of the peering SKU.
   *
   * @schema #/definitions/PeeringSku#size
   */
  readonly size?: PeeringSkuSize;

  /**
   * The tier of the peering SKU.
   *
   * @schema #/definitions/PeeringSku#tier
   */
  readonly tier?: PeeringSkuTier;

}

/**
 * @schema MicrosoftPeeringPeeringsTags
 */
export interface MicrosoftPeeringPeeringsTags {
}

export enum MicrosoftPeeringPeeringsType {
  "MicrosoftPeeringPeeringsType_MICROSOFT_PEERING_PEERINGS" = 'Microsoft.Peering/peerings',
}

export enum MicrosoftPeeringPeeringServicesApiVersion {
  "MicrosoftPeeringPeeringServicesApiVersion_2021_01_01" = '2021-01-01',
}

/**
 * The properties that define connectivity to the Peering Service.
 *
 * @schema #/definitions/PeeringServiceProperties
 */
export interface PeeringServiceProperties {
  /**
   * The location (state/province) of the customer.
   *
   * @schema #/definitions/PeeringServiceProperties#peeringServiceLocation
   */
  readonly peeringServiceLocation?: string;

  /**
   * The name of the service provider.
   *
   * @schema #/definitions/PeeringServiceProperties#peeringServiceProvider
   */
  readonly peeringServiceProvider?: string;

  /**
   * The backup peering (Microsoft/service provider) location to be used for customer traffic.
   *
   * @schema #/definitions/PeeringServiceProperties#providerBackupPeeringLocation
   */
  readonly providerBackupPeeringLocation?: string;

  /**
   * The primary peering (Microsoft/service provider) location to be used for customer traffic.
   *
   * @schema #/definitions/PeeringServiceProperties#providerPrimaryPeeringLocation
   */
  readonly providerPrimaryPeeringLocation?: string;

}

/**
 * Microsoft.Peering/peeringServices/prefixes
 *
 * @schema #/definitions/peeringServices_prefixes_childResource
 */
export interface PeeringServicesPrefixesChildResource {
  /**
   * @schema #/definitions/peeringServices_prefixes_childResource#apiVersion
   */
  readonly apiVersion: PeeringServicesPrefixesChildResourceApiVersion;

  /**
   * The name of the prefix.
   *
   * @schema #/definitions/peeringServices_prefixes_childResource#name
   */
  readonly name: string;

  /**
   * The peering service prefix properties class.
   *
   * @schema #/definitions/peeringServices_prefixes_childResource#properties
   */
  readonly properties: PeeringServicePrefixProperties;

  /**
   * @schema #/definitions/peeringServices_prefixes_childResource#type
   */
  readonly type: PeeringServicesPrefixesChildResourceType;

}

/**
 * The SKU that defines the type of the peering service.
 *
 * @schema #/definitions/PeeringServiceSku
 */
export interface PeeringServiceSku {
  /**
   * The name of the peering service SKU.
   *
   * @schema #/definitions/PeeringServiceSku#name
   */
  readonly name?: string;

}

/**
 * @schema MicrosoftPeeringPeeringServicesTags
 */
export interface MicrosoftPeeringPeeringServicesTags {
}

export enum MicrosoftPeeringPeeringServicesType {
  "MicrosoftPeeringPeeringServicesType_MICROSOFT_PEERING_PEERING_SERVICES" = 'Microsoft.Peering/peeringServices',
}

export enum MicrosoftPeeringPeeringServicesPrefixesApiVersion {
  "MicrosoftPeeringPeeringServicesPrefixesApiVersion_2021_01_01" = '2021-01-01',
}

/**
 * The peering service prefix properties class.
 *
 * @schema #/definitions/PeeringServicePrefixProperties
 */
export interface PeeringServicePrefixProperties {
  /**
   * The peering service prefix key
   *
   * @schema #/definitions/PeeringServicePrefixProperties#peeringServicePrefixKey
   */
  readonly peeringServicePrefixKey?: string;

  /**
   * The prefix from which your traffic originates.
   *
   * @schema #/definitions/PeeringServicePrefixProperties#prefix
   */
  readonly prefix?: string;

}

export enum MicrosoftPeeringPeeringServicesPrefixesType {
  "MicrosoftPeeringPeeringServicesPrefixesType_MICROSOFT_PEERING_PEERING_SERVICES_PREFIXES" = 'Microsoft.Peering/peeringServices/prefixes',
}

export enum MicrosoftPeeringPeeringsRegisteredAsnsApiVersion {
  "MicrosoftPeeringPeeringsRegisteredAsnsApiVersion_2021_01_01" = '2021-01-01',
}

/**
 * The properties that define a registered ASN.
 *
 * @schema #/definitions/PeeringRegisteredAsnProperties
 */
export interface PeeringRegisteredAsnProperties {
  /**
   * The customer's ASN from which traffic originates.
   *
   * @schema #/definitions/PeeringRegisteredAsnProperties#asn
   */
  readonly asn?: number;

}

export enum MicrosoftPeeringPeeringsRegisteredAsnsType {
  "MicrosoftPeeringPeeringsRegisteredAsnsType_MICROSOFT_PEERING_PEERINGS_REGISTERED_ASNS" = 'Microsoft.Peering/peerings/registeredAsns',
}

export enum MicrosoftPeeringPeeringsRegisteredPrefixesApiVersion {
  "MicrosoftPeeringPeeringsRegisteredPrefixesApiVersion_2021_01_01" = '2021-01-01',
}

/**
 * The properties that define a registered prefix.
 *
 * @schema #/definitions/PeeringRegisteredPrefixProperties
 */
export interface PeeringRegisteredPrefixProperties {
  /**
   * The customer's prefix from which traffic originates.
   *
   * @schema #/definitions/PeeringRegisteredPrefixProperties#prefix
   */
  readonly prefix?: string;

}

export enum MicrosoftPeeringPeeringsRegisteredPrefixesType {
  "MicrosoftPeeringPeeringsRegisteredPrefixesType_MICROSOFT_PEERING_PEERINGS_REGISTERED_PREFIXES" = 'Microsoft.Peering/peerings/registeredPrefixes',
}

/**
 * The properties that define a direct peering.
 *
 * @schema #/definitions/PeeringPropertiesDirect
 */
export interface PeeringPropertiesDirect {
  /**
   * The set of connections that constitute a direct peering.
   *
   * @schema #/definitions/PeeringPropertiesDirect#connections
   */
  readonly connections?: DirectConnection[];

  /**
   * The type of direct peering.
   *
   * @schema #/definitions/PeeringPropertiesDirect#directPeeringType
   */
  readonly directPeeringType?: PeeringPropertiesDirectDirectPeeringType;

  /**
   * The sub resource.
   *
   * @schema #/definitions/PeeringPropertiesDirect#peerAsn
   */
  readonly peerAsn?: SubResource;

}

/**
 * The properties that define an exchange peering.
 *
 * @schema #/definitions/PeeringPropertiesExchange
 */
export interface PeeringPropertiesExchange {
  /**
   * The set of connections that constitute an exchange peering.
   *
   * @schema #/definitions/PeeringPropertiesExchange#connections
   */
  readonly connections?: ExchangeConnection[];

  /**
   * The sub resource.
   *
   * @schema #/definitions/PeeringPropertiesExchange#peerAsn
   */
  readonly peerAsn?: SubResource;

}

/**
 * Microsoft.Peering/peerings/registeredAsns
 *
 * @schema #/definitions/peerings_registeredAsns_childResource
 */
export interface PeeringsRegisteredAsnsChildResource {
  /**
   * @schema #/definitions/peerings_registeredAsns_childResource#apiVersion
   */
  readonly apiVersion: PeeringsRegisteredAsnsChildResourceApiVersion;

  /**
   * The name of the ASN.
   *
   * @schema #/definitions/peerings_registeredAsns_childResource#name
   */
  readonly name: string;

  /**
   * The properties that define a registered ASN.
   *
   * @schema #/definitions/peerings_registeredAsns_childResource#properties
   */
  readonly properties: PeeringRegisteredAsnProperties;

  /**
   * @schema #/definitions/peerings_registeredAsns_childResource#type
   */
  readonly type: PeeringsRegisteredAsnsChildResourceType;

}

/**
 * Microsoft.Peering/peerings/registeredPrefixes
 *
 * @schema #/definitions/peerings_registeredPrefixes_childResource
 */
export interface PeeringsRegisteredPrefixesChildResource {
  /**
   * @schema #/definitions/peerings_registeredPrefixes_childResource#apiVersion
   */
  readonly apiVersion: PeeringsRegisteredPrefixesChildResourceApiVersion;

  /**
   * The name of the registered prefix.
   *
   * @schema #/definitions/peerings_registeredPrefixes_childResource#name
   */
  readonly name: string;

  /**
   * The properties that define a registered prefix.
   *
   * @schema #/definitions/peerings_registeredPrefixes_childResource#properties
   */
  readonly properties: PeeringRegisteredPrefixProperties;

  /**
   * @schema #/definitions/peerings_registeredPrefixes_childResource#type
   */
  readonly type: PeeringsRegisteredPrefixesChildResourceType;

}

export enum PeeringSkuFamily {
  DIRECT = 'Direct',
  EXCHANGE = 'Exchange',
}

export enum PeeringSkuSize {
  FREE = 'Free',
  METERED = 'Metered',
  UNLIMITED = 'Unlimited',
}

export enum PeeringSkuTier {
  BASIC = 'Basic',
  PREMIUM = 'Premium',
}

export enum PeeringServicesPrefixesChildResourceApiVersion {
  "PeeringServicesPrefixesChildResourceApiVersion_2021_01_01" = '2021-01-01',
}

export enum PeeringServicesPrefixesChildResourceType {
  PREFIXES = 'prefixes',
}

/**
 * The properties that define a direct connection.
 *
 * @schema #/definitions/DirectConnection
 */
export interface DirectConnection {
  /**
   * The bandwidth of the connection.
   *
   * @schema #/definitions/DirectConnection#bandwidthInMbps
   */
  readonly bandwidthInMbps?: number;

  /**
   * The properties that define a BGP session.
   *
   * @schema #/definitions/DirectConnection#bgpSession
   */
  readonly bgpSession?: BgpSession;

  /**
   * The unique identifier (GUID) for the connection.
   *
   * @schema #/definitions/DirectConnection#connectionIdentifier
   */
  readonly connectionIdentifier?: string;

  /**
   * The PeeringDB.com ID of the facility at which the connection has to be set up.
   *
   * @schema #/definitions/DirectConnection#peeringDBFacilityId
   */
  readonly peeringDBFacilityId?: number;

  /**
   * The field indicating if Microsoft provides session ip addresses.
   *
   * @schema #/definitions/DirectConnection#sessionAddressProvider
   */
  readonly sessionAddressProvider?: DirectConnectionSessionAddressProvider;

  /**
   * The flag that indicates whether or not the connection is used for peering service.
   *
   * @schema #/definitions/DirectConnection#useForPeeringService
   */
  readonly useForPeeringService?: boolean;

}

export enum PeeringPropertiesDirectDirectPeeringType {
  EDGE = 'Edge',
  TRANSIT = 'Transit',
  CDN = 'Cdn',
  INTERNAL = 'Internal',
  IX = 'Ix',
  IX_RS = 'IxRs',
}

/**
 * The sub resource.
 *
 * @schema #/definitions/SubResource
 */
export interface SubResource {
  /**
   * The identifier of the referenced resource.
   *
   * @schema #/definitions/SubResource#id
   */
  readonly id?: string;

}

/**
 * The properties that define an exchange connection.
 *
 * @schema #/definitions/ExchangeConnection
 */
export interface ExchangeConnection {
  /**
   * The properties that define a BGP session.
   *
   * @schema #/definitions/ExchangeConnection#bgpSession
   */
  readonly bgpSession?: BgpSession;

  /**
   * The unique identifier (GUID) for the connection.
   *
   * @schema #/definitions/ExchangeConnection#connectionIdentifier
   */
  readonly connectionIdentifier?: string;

  /**
   * The PeeringDB.com ID of the facility at which the connection has to be set up.
   *
   * @schema #/definitions/ExchangeConnection#peeringDBFacilityId
   */
  readonly peeringDBFacilityId?: number;

}

export enum PeeringsRegisteredAsnsChildResourceApiVersion {
  "PeeringsRegisteredAsnsChildResourceApiVersion_2021_01_01" = '2021-01-01',
}

export enum PeeringsRegisteredAsnsChildResourceType {
  REGISTERED_ASNS = 'registeredAsns',
}

export enum PeeringsRegisteredPrefixesChildResourceApiVersion {
  "PeeringsRegisteredPrefixesChildResourceApiVersion_2021_01_01" = '2021-01-01',
}

export enum PeeringsRegisteredPrefixesChildResourceType {
  REGISTERED_PREFIXES = 'registeredPrefixes',
}

/**
 * The properties that define a BGP session.
 *
 * @schema #/definitions/BgpSession
 */
export interface BgpSession {
  /**
   * The maximum number of prefixes advertised over the IPv4 session.
   *
   * @schema #/definitions/BgpSession#maxPrefixesAdvertisedV4
   */
  readonly maxPrefixesAdvertisedV4?: number;

  /**
   * The maximum number of prefixes advertised over the IPv6 session.
   *
   * @schema #/definitions/BgpSession#maxPrefixesAdvertisedV6
   */
  readonly maxPrefixesAdvertisedV6?: number;

  /**
   * The MD5 authentication key of the session.
   *
   * @schema #/definitions/BgpSession#md5AuthenticationKey
   */
  readonly md5AuthenticationKey?: string;

  /**
   * The IPv4 session address on Microsoft's end.
   *
   * @schema #/definitions/BgpSession#microsoftSessionIPv4Address
   */
  readonly microsoftSessionIPv4Address?: string;

  /**
   * The IPv6 session address on Microsoft's end.
   *
   * @schema #/definitions/BgpSession#microsoftSessionIPv6Address
   */
  readonly microsoftSessionIPv6Address?: string;

  /**
   * The IPv4 session address on peer's end.
   *
   * @schema #/definitions/BgpSession#peerSessionIPv4Address
   */
  readonly peerSessionIPv4Address?: string;

  /**
   * The IPv6 session address on peer's end.
   *
   * @schema #/definitions/BgpSession#peerSessionIPv6Address
   */
  readonly peerSessionIPv6Address?: string;

  /**
   * The IPv4 prefix that contains both ends' IPv4 addresses.
   *
   * @schema #/definitions/BgpSession#sessionPrefixV4
   */
  readonly sessionPrefixV4?: string;

  /**
   * The IPv4 prefix that contains both ends' IPv4 addresses.
   *
   * @schema #/definitions/BgpSession#sessionPrefixV6
   */
  readonly sessionPrefixV6?: string;

}

export enum DirectConnectionSessionAddressProvider {
  MICROSOFT = 'Microsoft',
  PEER = 'Peer',
}

