import {
  AnnotationMetadata,
  ColonyMetadata,
  DecisionMetadata,
  DomainMetadata,
  MiscMetadata,
  Metadata,
  MetadataType,
} from './types';
import { METADATA_VERSION } from './constants';
/*
 * Stringify functions:
 * Convert Metadata Object to String (to be stored in IPFS)
 */
// get Metadata for Colony type
export const getStringForMetadataColony = (
  metaDataArgs: ColonyMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Colony,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Domain type
export const getStringForMetadataDomain = (
  metaDataArgs: DomainMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Domain,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Annotation type
export const getStringForMetadataAnnotation = (
  metaDataArgs: AnnotationMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Annotation,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Decision type
export const getStringForMetadataDecision = (
  metaDataArgs: DecisionMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Decision,
    data: metaDataArgs,
  };
  return JSON.stringify(metadata);
};

// get Metadata for Misc type
export const getStringForMetadataMisc = (
  miscMetadata: MiscMetadata,
): string => {
  const metadata: Metadata = {
    version: METADATA_VERSION,
    name: MetadataType.Misc,
    data: miscMetadata,
  };
  return JSON.stringify(metadata);
};

/*
 * Helper functions:
 */
// convenience func to set colonyAvatarImage to IPFS
export const getStringForColonyAvatarImage = (avatarImage: string): string => {
  return getStringForMetadataMisc({
    name: 'colonyAvatarImage',
    value: avatarImage,
  });
};
