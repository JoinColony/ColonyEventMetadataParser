export enum MetadataType {
  Colony = 'colony',
  Domain = 'domain',
  Annotation = 'annotation',
  decision = 'decision',
  Misc = 'misc',
}

export interface ColonyMetadata {
  colonyName?: string;
  colonyDisplayName?: string;
  colonyAvatarHash?: string | null;
  colonyTokens?: Array<string>;
  verifiedAddresses?: Array<string>;
  isWhitelistActivated?: boolean;
}

export interface DomainMetadata {
  domainName?: string;
  domainColor?: number;
  domainPurpose?: string;
}

export interface AnnotationMetadata {
  annotationMsg: string;
}

export interface DecisionMetadata {
  title: string;
  description: string;
  motionDomainId: number;
}

export interface MiscMetadata {
  // @TODO - This is not metadata, but check if this should be included somewhere
  // this was created to handle colonyAvatarImage
  [key: string]: string;
}

export interface Metadata {
  version: number;
  name: MetadataType;
  data: ColonyMetadata | DomainMetadata | AnnotationMetadata | DecisionMetadata | MiscMetadata;
}
