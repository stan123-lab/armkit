// generated by armkit
import { ArmResource } from '@armkit/core';
import { Construct } from 'constructs';

/**
 * Microsoft.KeyVault/vaults
 *
 * @schema Microsoft.KeyVault.vaults
 */
export class Vaults extends ArmResource {
  /**
   * Defines a "Microsoft.KeyVault.vaults" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: VaultsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'vaults',
    });
  }
}

/**
 * Microsoft.KeyVault/vaults/accessPolicies
 *
 * @schema Microsoft.KeyVault.vaults_accessPolicies
 */
export class VaultsAccessPolicies extends ArmResource {
  /**
   * Defines a "Microsoft.KeyVault.vaults_accessPolicies" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: VaultsAccessPoliciesOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'vaults_accessPolicies',
    });
  }
}

/**
 * Microsoft.KeyVault/vaults/keys
 *
 * @schema Microsoft.KeyVault.vaults_keys
 */
export class VaultsKeys extends ArmResource {
  /**
   * Defines a "Microsoft.KeyVault.vaults_keys" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: VaultsKeysOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'vaults_keys',
    });
  }
}

/**
 * Microsoft.KeyVault/vaults/privateEndpointConnections
 *
 * @schema Microsoft.KeyVault.vaults_privateEndpointConnections
 */
export class VaultsPrivateEndpointConnections extends ArmResource {
  /**
   * Defines a "Microsoft.KeyVault.vaults_privateEndpointConnections" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: VaultsPrivateEndpointConnectionsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'vaults_privateEndpointConnections',
    });
  }
}

/**
 * Microsoft.KeyVault/vaults/secrets
 *
 * @schema Microsoft.KeyVault.vaults_secrets
 */
export class VaultsSecrets extends ArmResource {
  /**
   * Defines a "Microsoft.KeyVault.vaults_secrets" Arm Template object
   * @param scope the scope in which to define this object
   * @param name a scope-local name for the object
   * @param options configuration options
   */
  public constructor(scope: Construct, name: string, options: VaultsSecretsOptions) {
    super(scope, name, {
      ...options,
      armResourceType: 'vaults_secrets',
    });
  }
}

/**
 * Microsoft.KeyVault/vaults
 *
 * @schema Microsoft.KeyVault.vaults
 */
export interface VaultsOptions {
  /**
   * @schema Microsoft.KeyVault.vaults#apiVersion
   */
  readonly apiVersion?: MicrosoftKeyVaultVaultsApiVersion;

  /**
   * The supported Azure location where the key vault should be created.
   *
   * @schema Microsoft.KeyVault.vaults#location
   */
  readonly location: string;

  /**
   * Name of the vault
   *
   * @schema Microsoft.KeyVault.vaults#name
   */
  readonly name: MicrosoftKeyVaultVaultsNamePattern;

  /**
   * Properties of the vault
   *
   * @schema Microsoft.KeyVault.vaults#properties
   */
  readonly properties: VaultProperties;

  /**
   * @schema Microsoft.KeyVault.vaults#resources
   */
  readonly resources?: MicrosoftKeyVaultVaultsResources[];

  /**
   * The tags that will be assigned to the key vault.
   *
   * @schema Microsoft.KeyVault.vaults#tags
   */
  readonly tags?: MicrosoftKeyVaultVaultsTags;

  /**
   * @schema Microsoft.KeyVault.vaults#type
   */
  readonly type: MicrosoftKeyVaultVaultsType;

}

/**
 * Microsoft.KeyVault/vaults/accessPolicies
 *
 * @schema Microsoft.KeyVault.vaults_accessPolicies
 */
export interface VaultsAccessPoliciesOptions {
  /**
   * @schema Microsoft.KeyVault.vaults_accessPolicies#apiVersion
   */
  readonly apiVersion?: MicrosoftKeyVaultVaultsAccessPoliciesApiVersion;

  /**
   * Name of the operation.
   *
   * @schema Microsoft.KeyVault.vaults_accessPolicies#name
   */
  readonly name: MicrosoftKeyVaultVaultsAccessPoliciesName;

  /**
   * Properties of the vault access policy
   *
   * @schema Microsoft.KeyVault.vaults_accessPolicies#properties
   */
  readonly properties: VaultAccessPolicyProperties;

  /**
   * @schema Microsoft.KeyVault.vaults_accessPolicies#type
   */
  readonly type: MicrosoftKeyVaultVaultsAccessPoliciesType;

}

/**
 * Microsoft.KeyVault/vaults/keys
 *
 * @schema Microsoft.KeyVault.vaults_keys
 */
export interface VaultsKeysOptions {
  /**
   * @schema Microsoft.KeyVault.vaults_keys#apiVersion
   */
  readonly apiVersion?: MicrosoftKeyVaultVaultsKeysApiVersion;

  /**
   * The name of the key to be created.
   *
   * @schema Microsoft.KeyVault.vaults_keys#name
   */
  readonly name: MicrosoftKeyVaultVaultsKeysNamePattern;

  /**
   * The properties of the key.
   *
   * @schema Microsoft.KeyVault.vaults_keys#properties
   */
  readonly properties: KeyProperties;

  /**
   * The tags that will be assigned to the key.
   *
   * @schema Microsoft.KeyVault.vaults_keys#tags
   */
  readonly tags?: MicrosoftKeyVaultVaultsKeysTags;

  /**
   * @schema Microsoft.KeyVault.vaults_keys#type
   */
  readonly type: MicrosoftKeyVaultVaultsKeysType;

}

/**
 * Microsoft.KeyVault/vaults/privateEndpointConnections
 *
 * @schema Microsoft.KeyVault.vaults_privateEndpointConnections
 */
export interface VaultsPrivateEndpointConnectionsOptions {
  /**
   * @schema Microsoft.KeyVault.vaults_privateEndpointConnections#apiVersion
   */
  readonly apiVersion?: MicrosoftKeyVaultVaultsPrivateEndpointConnectionsApiVersion;

  /**
   * Modified whenever there is a change in the state of private endpoint connection.
   *
   * @schema Microsoft.KeyVault.vaults_privateEndpointConnections#etag
   */
  readonly etag?: string;

  /**
   * Name of the private endpoint connection associated with the key vault.
   *
   * @schema Microsoft.KeyVault.vaults_privateEndpointConnections#name
   */
  readonly name: string;

  /**
   * Properties of the private endpoint connection resource.
   *
   * @schema Microsoft.KeyVault.vaults_privateEndpointConnections#properties
   */
  readonly properties: PrivateEndpointConnectionProperties;

  /**
   * @schema Microsoft.KeyVault.vaults_privateEndpointConnections#type
   */
  readonly type: MicrosoftKeyVaultVaultsPrivateEndpointConnectionsType;

}

/**
 * Microsoft.KeyVault/vaults/secrets
 *
 * @schema Microsoft.KeyVault.vaults_secrets
 */
export interface VaultsSecretsOptions {
  /**
   * @schema Microsoft.KeyVault.vaults_secrets#apiVersion
   */
  readonly apiVersion?: MicrosoftKeyVaultVaultsSecretsApiVersion;

  /**
   * Name of the secret
   *
   * @schema Microsoft.KeyVault.vaults_secrets#name
   */
  readonly name: MicrosoftKeyVaultVaultsSecretsNamePattern;

  /**
   * Properties of the secret
   *
   * @schema Microsoft.KeyVault.vaults_secrets#properties
   */
  readonly properties: SecretProperties;

  /**
   * The tags that will be assigned to the secret. 
   *
   * @schema Microsoft.KeyVault.vaults_secrets#tags
   */
  readonly tags?: MicrosoftKeyVaultVaultsSecretsTags;

  /**
   * @schema Microsoft.KeyVault.vaults_secrets#type
   */
  readonly type: MicrosoftKeyVaultVaultsSecretsType;

}

export enum MicrosoftKeyVaultVaultsApiVersion {
  "MicrosoftKeyVaultVaultsApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * @schema MicrosoftKeyVaultVaultsName
 */
export class MicrosoftKeyVaultVaultsNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Properties of the vault
 *
 * @schema #/definitions/VaultProperties
 */
export interface VaultProperties {
  /**
   * An array of 0 to 1024 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to `recover`, access policies are not required. Otherwise, access policies are required.
   *
   * @schema #/definitions/VaultProperties#accessPolicies
   */
  readonly accessPolicies?: AccessPolicyEntry[];

  /**
   * The vault's create mode to indicate whether the vault need to be recovered or not.
   *
   * @schema #/definitions/VaultProperties#createMode
   */
  readonly createMode?: VaultPropertiesCreateMode;

  /**
   * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault.
   *
   * @schema #/definitions/VaultProperties#enabledForDeployment
   */
  readonly enabledForDeployment?: boolean;

  /**
   * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys.
   *
   * @schema #/definitions/VaultProperties#enabledForDiskEncryption
   */
  readonly enabledForDiskEncryption?: boolean;

  /**
   * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault.
   *
   * @schema #/definitions/VaultProperties#enabledForTemplateDeployment
   */
  readonly enabledForTemplateDeployment?: boolean;

  /**
   * Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value.
   *
   * @schema #/definitions/VaultProperties#enablePurgeProtection
   */
  readonly enablePurgeProtection?: boolean;

  /**
   * Property that controls how data actions are authorized. When true, the key vault will use Role Based Access Control (RBAC) for authorization of data actions, and the access policies specified in vault properties will be  ignored (warning: this is a preview feature). When false, the key vault will use the access policies specified in vault properties, and any policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault is created with the default value of false. Note that management actions are always authorized with RBAC.
   *
   * @schema #/definitions/VaultProperties#enableRbacAuthorization
   */
  readonly enableRbacAuthorization?: boolean;

  /**
   * Property to specify whether the 'soft delete' functionality is enabled for this key vault. If it's not set to any value(true or false) when creating new key vault, it will be set to true by default. Once set to true, it cannot be reverted to false.
   *
   * @schema #/definitions/VaultProperties#enableSoftDelete
   */
  readonly enableSoftDelete?: boolean;

  /**
   * A set of rules governing the network accessibility of a vault.
   *
   * @schema #/definitions/VaultProperties#networkAcls
   */
  readonly networkAcls?: NetworkRuleSet;

  /**
   * Provisioning state of the vault.
   *
   * @schema #/definitions/VaultProperties#provisioningState
   */
  readonly provisioningState?: VaultPropertiesProvisioningState;

  /**
   * SKU details
   *
   * @schema #/definitions/VaultProperties#sku
   */
  readonly sku: Sku;

  /**
   * softDelete data retention days. It accepts >=7 and <=90.
   *
   * @schema #/definitions/VaultProperties#softDeleteRetentionInDays
   */
  readonly softDeleteRetentionInDays?: number;

  /**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
   *
   * @schema #/definitions/VaultProperties#tenantId
   */
  readonly tenantId: VaultPropertiesTenantIdPattern;

  /**
   * The URI of the vault for performing operations on keys and secrets. This property is readonly
   *
   * @schema #/definitions/VaultProperties#vaultUri
   */
  readonly vaultUri?: string;

}

/**
 * @schema MicrosoftKeyVaultVaultsResources
 */
export class MicrosoftKeyVaultVaultsResources {
  public static fromVaultsAccessPoliciesChildResource(value: VaultsAccessPoliciesChildResource): MicrosoftKeyVaultVaultsResources {
    return new MicrosoftKeyVaultVaultsResources(value);
  }
  public static fromVaultsPrivateEndpointConnectionsChildResource(value: VaultsPrivateEndpointConnectionsChildResource): MicrosoftKeyVaultVaultsResources {
    return new MicrosoftKeyVaultVaultsResources(value);
  }
  public static fromVaultsKeysChildResource(value: VaultsKeysChildResource): MicrosoftKeyVaultVaultsResources {
    return new MicrosoftKeyVaultVaultsResources(value);
  }
  public static fromVaultsSecretsChildResource(value: VaultsSecretsChildResource): MicrosoftKeyVaultVaultsResources {
    return new MicrosoftKeyVaultVaultsResources(value);
  }
  private constructor(value: any) {
    Object.defineProperty(this, 'resolve', { value: () => value });
  }
}

/**
 * @schema MicrosoftKeyVaultVaultsTags
 */
export interface MicrosoftKeyVaultVaultsTags {
}

export enum MicrosoftKeyVaultVaultsType {
  "MicrosoftKeyVaultVaultsType_MICROSOFT_KEY_VAULT_VAULTS" = 'Microsoft.KeyVault/vaults',
}

export enum MicrosoftKeyVaultVaultsAccessPoliciesApiVersion {
  "MicrosoftKeyVaultVaultsAccessPoliciesApiVersion_2019_09_01" = '2019-09-01',
}

export enum MicrosoftKeyVaultVaultsAccessPoliciesName {
  ADD = 'add',
  REPLACE = 'replace',
  REMOVE = 'remove',
}

/**
 * Properties of the vault access policy
 *
 * @schema #/definitions/VaultAccessPolicyProperties
 */
export interface VaultAccessPolicyProperties {
  /**
   * An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
   *
   * @schema #/definitions/VaultAccessPolicyProperties#accessPolicies
   */
  readonly accessPolicies: AccessPolicyEntry[];

}

export enum MicrosoftKeyVaultVaultsAccessPoliciesType {
  "MicrosoftKeyVaultVaultsAccessPoliciesType_MICROSOFT_KEY_VAULT_VAULTS_ACCESS_POLICIES" = 'Microsoft.KeyVault/vaults/accessPolicies',
}

export enum MicrosoftKeyVaultVaultsKeysApiVersion {
  "MicrosoftKeyVaultVaultsKeysApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * @schema MicrosoftKeyVaultVaultsKeysName
 */
export class MicrosoftKeyVaultVaultsKeysNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * The properties of the key.
 *
 * @schema #/definitions/KeyProperties
 */
export interface KeyProperties {
  /**
   * The attributes of the key.
   *
   * @schema #/definitions/KeyProperties#attributes
   */
  readonly attributes?: KeyAttributes;

  /**
   * The elliptic curve name. For valid values, see JsonWebKeyCurveName.
   *
   * @schema #/definitions/KeyProperties#curveName
   */
  readonly curveName?: KeyPropertiesCurveName;

  /**
   * @schema #/definitions/KeyProperties#keyOps
   */
  readonly keyOps?: KeyPropertiesKeyOps[];

  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   *
   * @schema #/definitions/KeyProperties#keySize
   */
  readonly keySize?: number;

  /**
   * The type of the key. For valid values, see JsonWebKeyType.
   *
   * @schema #/definitions/KeyProperties#kty
   */
  readonly kty?: KeyPropertiesKty;

}

/**
 * @schema MicrosoftKeyVaultVaultsKeysTags
 */
export interface MicrosoftKeyVaultVaultsKeysTags {
}

export enum MicrosoftKeyVaultVaultsKeysType {
  "MicrosoftKeyVaultVaultsKeysType_MICROSOFT_KEY_VAULT_VAULTS_KEYS" = 'Microsoft.KeyVault/vaults/keys',
}

export enum MicrosoftKeyVaultVaultsPrivateEndpointConnectionsApiVersion {
  "MicrosoftKeyVaultVaultsPrivateEndpointConnectionsApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * Properties of the private endpoint connection resource.
 *
 * @schema #/definitions/PrivateEndpointConnectionProperties
 */
export interface PrivateEndpointConnectionProperties {
  /**
   * Private endpoint object properties.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#privateEndpoint
   */
  readonly privateEndpoint?: PrivateEndpoint;

  /**
   * An object that represents the approval state of the private link connection.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#privateLinkServiceConnectionState
   */
  readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;

  /**
   * Provisioning state of the private endpoint connection.
   *
   * @schema #/definitions/PrivateEndpointConnectionProperties#provisioningState
   */
  readonly provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState;

}

export enum MicrosoftKeyVaultVaultsPrivateEndpointConnectionsType {
  "MicrosoftKeyVaultVaultsPrivateEndpointConnectionsType_MICROSOFT_KEY_VAULT_VAULTS_PRIVATE_ENDPOINT_CONNECTIONS" = 'Microsoft.KeyVault/vaults/privateEndpointConnections',
}

export enum MicrosoftKeyVaultVaultsSecretsApiVersion {
  "MicrosoftKeyVaultVaultsSecretsApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * @schema MicrosoftKeyVaultVaultsSecretsName
 */
export class MicrosoftKeyVaultVaultsSecretsNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Properties of the secret
 *
 * @schema #/definitions/SecretProperties
 */
export interface SecretProperties {
  /**
   * The secret management attributes.
   *
   * @schema #/definitions/SecretProperties#attributes
   */
  readonly attributes?: SecretAttributes;

  /**
   * The content type of the secret.
   *
   * @schema #/definitions/SecretProperties#contentType
   */
  readonly contentType?: string;

  /**
   * The value of the secret. NOTE: 'value' will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
   *
   * @schema #/definitions/SecretProperties#value
   */
  readonly value?: string;

}

/**
 * @schema MicrosoftKeyVaultVaultsSecretsTags
 */
export interface MicrosoftKeyVaultVaultsSecretsTags {
}

export enum MicrosoftKeyVaultVaultsSecretsType {
  "MicrosoftKeyVaultVaultsSecretsType_MICROSOFT_KEY_VAULT_VAULTS_SECRETS" = 'Microsoft.KeyVault/vaults/secrets',
}

/**
 * An identity that have access to the key vault. All identities in the array must use the same tenant ID as the key vault's tenant ID.
 *
 * @schema #/definitions/AccessPolicyEntry
 */
export interface AccessPolicyEntry {
  /**
   *  Application ID of the client making request on behalf of a principal
   *
   * @schema #/definitions/AccessPolicyEntry#applicationId
   */
  readonly applicationId?: AccessPolicyEntryApplicationIdPattern;

  /**
   * The object ID of a user, service principal or security group in the Azure Active Directory tenant for the vault. The object ID must be unique for the list of access policies.
   *
   * @schema #/definitions/AccessPolicyEntry#objectId
   */
  readonly objectId: string;

  /**
   * Permissions the identity has for keys, secrets, certificates and storage.
   *
   * @schema #/definitions/AccessPolicyEntry#permissions
   */
  readonly permissions: Permissions;

  /**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault.
   *
   * @schema #/definitions/AccessPolicyEntry#tenantId
   */
  readonly tenantId: AccessPolicyEntryTenantIdPattern;

}

export enum VaultPropertiesCreateMode {
  RECOVER = 'recover',
  DEFAULT = 'default',
}

/**
 * A set of rules governing the network accessibility of a vault.
 *
 * @schema #/definitions/NetworkRuleSet
 */
export interface NetworkRuleSet {
  /**
   * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not specified the default is 'AzureServices'.
   *
   * @schema #/definitions/NetworkRuleSet#bypass
   */
  readonly bypass?: NetworkRuleSetBypass;

  /**
   * The default action when no rule from ipRules and from virtualNetworkRules match. This is only used after the bypass property has been evaluated.
   *
   * @schema #/definitions/NetworkRuleSet#defaultAction
   */
  readonly defaultAction?: NetworkRuleSetDefaultAction;

  /**
   * The list of IP address rules.
   *
   * @schema #/definitions/NetworkRuleSet#ipRules
   */
  readonly ipRules?: IpRule[];

  /**
   * The list of virtual network rules.
   *
   * @schema #/definitions/NetworkRuleSet#virtualNetworkRules
   */
  readonly virtualNetworkRules?: VirtualNetworkRule[];

}

export enum VaultPropertiesProvisioningState {
  SUCCEEDED = 'Succeeded',
  REGISTERING_DNS = 'RegisteringDns',
}

/**
 * SKU details
 *
 * @schema #/definitions/Sku
 */
export interface Sku {
  /**
   * SKU family name
   *
   * @schema #/definitions/Sku#family
   */
  readonly family: SkuFamily;

  /**
   * SKU name to specify whether the key vault is a standard vault or a premium vault.
   *
   * @schema #/definitions/Sku#name
   */
  readonly name: SkuName;

}

/**
 * @schema #/definitions/vaultPropertiesTenantId
 */
export class VaultPropertiesTenantIdPattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Microsoft.KeyVault/vaults/accessPolicies
 *
 * @schema #/definitions/vaults_accessPolicies_childResource
 */
export interface VaultsAccessPoliciesChildResource {
  /**
   * @schema #/definitions/vaults_accessPolicies_childResource#apiVersion
   */
  readonly apiVersion: VaultsAccessPoliciesChildResourceApiVersion;

  /**
   * Name of the operation.
   *
   * @schema #/definitions/vaults_accessPolicies_childResource#name
   */
  readonly name: VaultsAccessPoliciesChildResourceName;

  /**
   * Properties of the vault access policy
   *
   * @schema #/definitions/vaults_accessPolicies_childResource#properties
   */
  readonly properties: VaultAccessPolicyProperties;

  /**
   * @schema #/definitions/vaults_accessPolicies_childResource#type
   */
  readonly type: VaultsAccessPoliciesChildResourceType;

}

/**
 * Microsoft.KeyVault/vaults/privateEndpointConnections
 *
 * @schema #/definitions/vaults_privateEndpointConnections_childResource
 */
export interface VaultsPrivateEndpointConnectionsChildResource {
  /**
   * @schema #/definitions/vaults_privateEndpointConnections_childResource#apiVersion
   */
  readonly apiVersion: VaultsPrivateEndpointConnectionsChildResourceApiVersion;

  /**
   * Modified whenever there is a change in the state of private endpoint connection.
   *
   * @schema #/definitions/vaults_privateEndpointConnections_childResource#etag
   */
  readonly etag?: string;

  /**
   * Name of the private endpoint connection associated with the key vault.
   *
   * @schema #/definitions/vaults_privateEndpointConnections_childResource#name
   */
  readonly name: string;

  /**
   * Properties of the private endpoint connection resource.
   *
   * @schema #/definitions/vaults_privateEndpointConnections_childResource#properties
   */
  readonly properties: PrivateEndpointConnectionProperties;

  /**
   * @schema #/definitions/vaults_privateEndpointConnections_childResource#type
   */
  readonly type: VaultsPrivateEndpointConnectionsChildResourceType;

}

/**
 * Microsoft.KeyVault/vaults/keys
 *
 * @schema #/definitions/vaults_keys_childResource
 */
export interface VaultsKeysChildResource {
  /**
   * @schema #/definitions/vaults_keys_childResource#apiVersion
   */
  readonly apiVersion: VaultsKeysChildResourceApiVersion;

  /**
   * The name of the key to be created.
   *
   * @schema #/definitions/vaults_keys_childResource#name
   */
  readonly name: VaultsKeysChildResourceNamePattern;

  /**
   * The properties of the key.
   *
   * @schema #/definitions/vaults_keys_childResource#properties
   */
  readonly properties: KeyProperties;

  /**
   * The tags that will be assigned to the key.
   *
   * @schema #/definitions/vaults_keys_childResource#tags
   */
  readonly tags?: VaultsKeysChildResourceTags;

  /**
   * @schema #/definitions/vaults_keys_childResource#type
   */
  readonly type: VaultsKeysChildResourceType;

}

/**
 * Microsoft.KeyVault/vaults/secrets
 *
 * @schema #/definitions/vaults_secrets_childResource
 */
export interface VaultsSecretsChildResource {
  /**
   * @schema #/definitions/vaults_secrets_childResource#apiVersion
   */
  readonly apiVersion: VaultsSecretsChildResourceApiVersion;

  /**
   * Name of the secret
   *
   * @schema #/definitions/vaults_secrets_childResource#name
   */
  readonly name: VaultsSecretsChildResourceNamePattern;

  /**
   * Properties of the secret
   *
   * @schema #/definitions/vaults_secrets_childResource#properties
   */
  readonly properties: SecretProperties;

  /**
   * The tags that will be assigned to the secret. 
   *
   * @schema #/definitions/vaults_secrets_childResource#tags
   */
  readonly tags?: VaultsSecretsChildResourceTags;

  /**
   * @schema #/definitions/vaults_secrets_childResource#type
   */
  readonly type: VaultsSecretsChildResourceType;

}

/**
 * The attributes of the key.
 *
 * @schema #/definitions/KeyAttributes
 */
export interface KeyAttributes {
  /**
   * Determines whether or not the object is enabled.
   *
   * @schema #/definitions/KeyAttributes#enabled
   */
  readonly enabled?: boolean;

  /**
   * Expiry date in seconds since 1970-01-01T00:00:00Z.
   *
   * @schema #/definitions/KeyAttributes#exp
   */
  readonly exp?: number;

  /**
   * Not before date in seconds since 1970-01-01T00:00:00Z.
   *
   * @schema #/definitions/KeyAttributes#nbf
   */
  readonly nbf?: number;

}

export enum KeyPropertiesCurveName {
  "KeyPropertiesCurveName_P_256" = 'P-256',
  "KeyPropertiesCurveName_P_384" = 'P-384',
  "KeyPropertiesCurveName_P_521" = 'P-521',
  "KeyPropertiesCurveName_P_256_K" = 'P-256K',
}

export enum KeyPropertiesKeyOps {
  ENCRYPT = 'encrypt',
  DECRYPT = 'decrypt',
  SIGN = 'sign',
  VERIFY = 'verify',
  WRAP_KEY = 'wrapKey',
  UNWRAP_KEY = 'unwrapKey',
  IMPORT = 'import',
}

export enum KeyPropertiesKty {
  EC = 'EC',
  "KeyPropertiesKty_EC_HSM" = 'EC-HSM',
  RSA = 'RSA',
  "KeyPropertiesKty_RSA_HSM" = 'RSA-HSM',
}

/**
 * Private endpoint object properties.
 *
 * @schema #/definitions/PrivateEndpoint
 */
export interface PrivateEndpoint {
}

/**
 * An object that represents the approval state of the private link connection.
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
   * The reason for approval or rejection.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState#description
   */
  readonly description?: string;

  /**
   * Indicates whether the connection has been approved, rejected or removed by the key vault owner.
   *
   * @schema #/definitions/PrivateLinkServiceConnectionState#status
   */
  readonly status?: PrivateLinkServiceConnectionStateStatus;

}

export enum PrivateEndpointConnectionPropertiesProvisioningState {
  SUCCEEDED = 'Succeeded',
  CREATING = 'Creating',
  UPDATING = 'Updating',
  DELETING = 'Deleting',
  FAILED = 'Failed',
  DISCONNECTED = 'Disconnected',
}

/**
 * The secret management attributes.
 *
 * @schema #/definitions/SecretAttributes
 */
export interface SecretAttributes {
  /**
   * Determines whether the object is enabled.
   *
   * @schema #/definitions/SecretAttributes#enabled
   */
  readonly enabled?: boolean;

  /**
   * Expiry date in seconds since 1970-01-01T00:00:00Z.
   *
   * @schema #/definitions/SecretAttributes#exp
   */
  readonly exp?: number;

  /**
   * Not before date in seconds since 1970-01-01T00:00:00Z.
   *
   * @schema #/definitions/SecretAttributes#nbf
   */
  readonly nbf?: number;

}

/**
 * @schema #/definitions/accessPolicyEntryApplicationId
 */
export class AccessPolicyEntryApplicationIdPattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * Permissions the identity has for keys, secrets, certificates and storage.
 *
 * @schema #/definitions/Permissions
 */
export interface Permissions {
  /**
   * Permissions to certificates
   *
   * @schema #/definitions/Permissions#certificates
   */
  readonly certificates?: PermissionsCertificates[];

  /**
   * Permissions to keys
   *
   * @schema #/definitions/Permissions#keys
   */
  readonly keys?: PermissionsKeys[];

  /**
   * Permissions to secrets
   *
   * @schema #/definitions/Permissions#secrets
   */
  readonly secrets?: PermissionsSecrets[];

  /**
   * Permissions to storage accounts
   *
   * @schema #/definitions/Permissions#storage
   */
  readonly storage?: PermissionsStorage[];

}

/**
 * @schema #/definitions/accessPolicyEntryTenantId
 */
export class AccessPolicyEntryTenantIdPattern {
  public static pattern(value: string): string {
    return value;
  }
}

export enum NetworkRuleSetBypass {
  AZURE_SERVICES = 'AzureServices',
  NONE = 'None',
}

export enum NetworkRuleSetDefaultAction {
  ALLOW = 'Allow',
  DENY = 'Deny',
}

/**
 * A rule governing the accessibility of a vault from a specific ip address or ip range.
 *
 * @schema #/definitions/IPRule
 */
export interface IpRule {
  /**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or '124.56.78.0/24' (all addresses that start with 124.56.78).
   *
   * @schema #/definitions/IPRule#value
   */
  readonly value: string;

}

/**
 * A rule governing the accessibility of a vault from a specific virtual network.
 *
 * @schema #/definitions/VirtualNetworkRule
 */
export interface VirtualNetworkRule {
  /**
   * Full resource id of a vnet subnet, such as '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   *
   * @schema #/definitions/VirtualNetworkRule#id
   */
  readonly id: string;

  /**
   * Property to specify whether NRP will ignore the check if parent subnet has serviceEndpoints configured.
   *
   * @schema #/definitions/VirtualNetworkRule#ignoreMissingVnetServiceEndpoint
   */
  readonly ignoreMissingVnetServiceEndpoint?: boolean;

}

export enum SkuFamily {
  A = 'A',
}

export enum SkuName {
  STANDARD = 'standard',
  PREMIUM = 'premium',
}

export enum VaultsAccessPoliciesChildResourceApiVersion {
  "VaultsAccessPoliciesChildResourceApiVersion_2019_09_01" = '2019-09-01',
}

export enum VaultsAccessPoliciesChildResourceName {
  ADD = 'add',
  REPLACE = 'replace',
  REMOVE = 'remove',
}

export enum VaultsAccessPoliciesChildResourceType {
  ACCESS_POLICIES = 'accessPolicies',
}

export enum VaultsPrivateEndpointConnectionsChildResourceApiVersion {
  "VaultsPrivateEndpointConnectionsChildResourceApiVersion_2019_09_01" = '2019-09-01',
}

export enum VaultsPrivateEndpointConnectionsChildResourceType {
  PRIVATE_ENDPOINT_CONNECTIONS = 'privateEndpointConnections',
}

export enum VaultsKeysChildResourceApiVersion {
  "VaultsKeysChildResourceApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * @schema #/definitions/vaultsKeysChildResourceName
 */
export class VaultsKeysChildResourceNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * @schema #/definitions/vaultsKeysChildResourceTags
 */
export interface VaultsKeysChildResourceTags {
}

export enum VaultsKeysChildResourceType {
  KEYS = 'keys',
}

export enum VaultsSecretsChildResourceApiVersion {
  "VaultsSecretsChildResourceApiVersion_2019_09_01" = '2019-09-01',
}

/**
 * @schema #/definitions/vaultsSecretsChildResourceName
 */
export class VaultsSecretsChildResourceNamePattern {
  public static pattern(value: string): string {
    return value;
  }
}

/**
 * @schema #/definitions/vaultsSecretsChildResourceTags
 */
export interface VaultsSecretsChildResourceTags {
}

export enum VaultsSecretsChildResourceType {
  SECRETS = 'secrets',
}

export enum PrivateLinkServiceConnectionStateStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  DISCONNECTED = 'Disconnected',
}

export enum PermissionsCertificates {
  ALL = 'all',
  GET = 'get',
  LIST = 'list',
  DELETE = 'delete',
  CREATE = 'create',
  IMPORT = 'import',
  UPDATE = 'update',
  MANAGECONTACTS = 'managecontacts',
  GETISSUERS = 'getissuers',
  LISTISSUERS = 'listissuers',
  SETISSUERS = 'setissuers',
  DELETEISSUERS = 'deleteissuers',
  MANAGEISSUERS = 'manageissuers',
  RECOVER = 'recover',
  PURGE = 'purge',
  BACKUP = 'backup',
  RESTORE = 'restore',
}

export enum PermissionsKeys {
  ALL = 'all',
  ENCRYPT = 'encrypt',
  DECRYPT = 'decrypt',
  WRAP_KEY = 'wrapKey',
  UNWRAP_KEY = 'unwrapKey',
  SIGN = 'sign',
  VERIFY = 'verify',
  GET = 'get',
  LIST = 'list',
  CREATE = 'create',
  UPDATE = 'update',
  IMPORT = 'import',
  DELETE = 'delete',
  BACKUP = 'backup',
  RESTORE = 'restore',
  RECOVER = 'recover',
  PURGE = 'purge',
}

export enum PermissionsSecrets {
  ALL = 'all',
  GET = 'get',
  LIST = 'list',
  SET = 'set',
  DELETE = 'delete',
  BACKUP = 'backup',
  RESTORE = 'restore',
  RECOVER = 'recover',
  PURGE = 'purge',
}

export enum PermissionsStorage {
  ALL = 'all',
  GET = 'get',
  LIST = 'list',
  DELETE = 'delete',
  SET = 'set',
  UPDATE = 'update',
  REGENERATEKEY = 'regeneratekey',
  RECOVER = 'recover',
  PURGE = 'purge',
  BACKUP = 'backup',
  RESTORE = 'restore',
  SETSAS = 'setsas',
  LISTSAS = 'listsas',
  GETSAS = 'getsas',
  DELETESAS = 'deletesas',
}

