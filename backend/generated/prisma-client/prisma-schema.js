module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEdits {
  count: Int!
}

type AggregatePart {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Edits {
  field: String
  user: User!
}

type EditsConnection {
  pageInfo: PageInfo!
  edges: [EditsEdge]!
  aggregate: AggregateEdits!
}

input EditsCreateInput {
  field: String
  user: UserCreateOneInput!
}

input EditsCreateManyInput {
  create: [EditsCreateInput!]
}

type EditsEdge {
  node: Edits!
  cursor: String!
}

enum EditsOrderByInput {
  field_ASC
  field_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type EditsPreviousValues {
  field: String
}

input EditsScalarWhereInput {
  field: String
  field_not: String
  field_in: [String!]
  field_not_in: [String!]
  field_lt: String
  field_lte: String
  field_gt: String
  field_gte: String
  field_contains: String
  field_not_contains: String
  field_starts_with: String
  field_not_starts_with: String
  field_ends_with: String
  field_not_ends_with: String
  AND: [EditsScalarWhereInput!]
  OR: [EditsScalarWhereInput!]
  NOT: [EditsScalarWhereInput!]
}

type EditsSubscriptionPayload {
  mutation: MutationType!
  node: Edits
  updatedFields: [String!]
  previousValues: EditsPreviousValues
}

input EditsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EditsWhereInput
  AND: [EditsSubscriptionWhereInput!]
  OR: [EditsSubscriptionWhereInput!]
  NOT: [EditsSubscriptionWhereInput!]
}

input EditsUpdateManyDataInput {
  field: String
}

input EditsUpdateManyInput {
  create: [EditsCreateInput!]
  deleteMany: [EditsScalarWhereInput!]
  updateMany: [EditsUpdateManyWithWhereNestedInput!]
}

input EditsUpdateManyMutationInput {
  field: String
}

input EditsUpdateManyWithWhereNestedInput {
  where: EditsScalarWhereInput!
  data: EditsUpdateManyDataInput!
}

input EditsWhereInput {
  field: String
  field_not: String
  field_in: [String!]
  field_not_in: [String!]
  field_lt: String
  field_lte: String
  field_gt: String
  field_gte: String
  field_contains: String
  field_not_contains: String
  field_starts_with: String
  field_not_starts_with: String
  field_ends_with: String
  field_not_ends_with: String
  user: UserWhereInput
  AND: [EditsWhereInput!]
  OR: [EditsWhereInput!]
  NOT: [EditsWhereInput!]
}

scalar Long

type Mutation {
  createEdits(data: EditsCreateInput!): Edits!
  updateManyEditses(data: EditsUpdateManyMutationInput!, where: EditsWhereInput): BatchPayload!
  deleteManyEditses(where: EditsWhereInput): BatchPayload!
  createPart(data: PartCreateInput!): Part!
  updatePart(data: PartUpdateInput!, where: PartWhereUniqueInput!): Part
  updateManyParts(data: PartUpdateManyMutationInput!, where: PartWhereInput): BatchPayload!
  upsertPart(where: PartWhereUniqueInput!, create: PartCreateInput!, update: PartUpdateInput!): Part!
  deletePart(where: PartWhereUniqueInput!): Part
  deleteManyParts(where: PartWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Part {
  id: ID!
  partNumber: String!
  chineseLong_zh_cn: String
  chineseShort_zh_cn: String
  chineseTLong_zh_tw: String
  chineseTShort_zh_tw: String
  danishLong_da: String
  danishShort_da: String
  dutchLong_nl: String
  dutchShort_nl: String
  englishLong_en: String
  englishShort_en: String
  frenchLong_fr: String
  frenchShort_fr: String
  germanLong_de: String
  germanShort_de: String
  italianLong_it: String
  italianShort_it: String
  japaneseLong_ja: String
  japaneseShort_ja: String
  koreanLong_ko: String
  koreanShort_ko: String
  portugeseLong_pt: String
  portugeseShort_pt: String
  spanishLong_es: String
  spanishShort_es: String
  edits(where: EditsWhereInput, orderBy: EditsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Edits!]
}

type PartConnection {
  pageInfo: PageInfo!
  edges: [PartEdge]!
  aggregate: AggregatePart!
}

input PartCreateInput {
  partNumber: String!
  chineseLong_zh_cn: String
  chineseShort_zh_cn: String
  chineseTLong_zh_tw: String
  chineseTShort_zh_tw: String
  danishLong_da: String
  danishShort_da: String
  dutchLong_nl: String
  dutchShort_nl: String
  englishLong_en: String
  englishShort_en: String
  frenchLong_fr: String
  frenchShort_fr: String
  germanLong_de: String
  germanShort_de: String
  italianLong_it: String
  italianShort_it: String
  japaneseLong_ja: String
  japaneseShort_ja: String
  koreanLong_ko: String
  koreanShort_ko: String
  portugeseLong_pt: String
  portugeseShort_pt: String
  spanishLong_es: String
  spanishShort_es: String
  edits: EditsCreateManyInput
}

type PartEdge {
  node: Part!
  cursor: String!
}

enum PartOrderByInput {
  id_ASC
  id_DESC
  partNumber_ASC
  partNumber_DESC
  chineseLong_zh_cn_ASC
  chineseLong_zh_cn_DESC
  chineseShort_zh_cn_ASC
  chineseShort_zh_cn_DESC
  chineseTLong_zh_tw_ASC
  chineseTLong_zh_tw_DESC
  chineseTShort_zh_tw_ASC
  chineseTShort_zh_tw_DESC
  danishLong_da_ASC
  danishLong_da_DESC
  danishShort_da_ASC
  danishShort_da_DESC
  dutchLong_nl_ASC
  dutchLong_nl_DESC
  dutchShort_nl_ASC
  dutchShort_nl_DESC
  englishLong_en_ASC
  englishLong_en_DESC
  englishShort_en_ASC
  englishShort_en_DESC
  frenchLong_fr_ASC
  frenchLong_fr_DESC
  frenchShort_fr_ASC
  frenchShort_fr_DESC
  germanLong_de_ASC
  germanLong_de_DESC
  germanShort_de_ASC
  germanShort_de_DESC
  italianLong_it_ASC
  italianLong_it_DESC
  italianShort_it_ASC
  italianShort_it_DESC
  japaneseLong_ja_ASC
  japaneseLong_ja_DESC
  japaneseShort_ja_ASC
  japaneseShort_ja_DESC
  koreanLong_ko_ASC
  koreanLong_ko_DESC
  koreanShort_ko_ASC
  koreanShort_ko_DESC
  portugeseLong_pt_ASC
  portugeseLong_pt_DESC
  portugeseShort_pt_ASC
  portugeseShort_pt_DESC
  spanishLong_es_ASC
  spanishLong_es_DESC
  spanishShort_es_ASC
  spanishShort_es_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PartPreviousValues {
  id: ID!
  partNumber: String!
  chineseLong_zh_cn: String
  chineseShort_zh_cn: String
  chineseTLong_zh_tw: String
  chineseTShort_zh_tw: String
  danishLong_da: String
  danishShort_da: String
  dutchLong_nl: String
  dutchShort_nl: String
  englishLong_en: String
  englishShort_en: String
  frenchLong_fr: String
  frenchShort_fr: String
  germanLong_de: String
  germanShort_de: String
  italianLong_it: String
  italianShort_it: String
  japaneseLong_ja: String
  japaneseShort_ja: String
  koreanLong_ko: String
  koreanShort_ko: String
  portugeseLong_pt: String
  portugeseShort_pt: String
  spanishLong_es: String
  spanishShort_es: String
}

type PartSubscriptionPayload {
  mutation: MutationType!
  node: Part
  updatedFields: [String!]
  previousValues: PartPreviousValues
}

input PartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PartWhereInput
  AND: [PartSubscriptionWhereInput!]
  OR: [PartSubscriptionWhereInput!]
  NOT: [PartSubscriptionWhereInput!]
}

input PartUpdateInput {
  partNumber: String
  chineseLong_zh_cn: String
  chineseShort_zh_cn: String
  chineseTLong_zh_tw: String
  chineseTShort_zh_tw: String
  danishLong_da: String
  danishShort_da: String
  dutchLong_nl: String
  dutchShort_nl: String
  englishLong_en: String
  englishShort_en: String
  frenchLong_fr: String
  frenchShort_fr: String
  germanLong_de: String
  germanShort_de: String
  italianLong_it: String
  italianShort_it: String
  japaneseLong_ja: String
  japaneseShort_ja: String
  koreanLong_ko: String
  koreanShort_ko: String
  portugeseLong_pt: String
  portugeseShort_pt: String
  spanishLong_es: String
  spanishShort_es: String
  edits: EditsUpdateManyInput
}

input PartUpdateManyMutationInput {
  partNumber: String
  chineseLong_zh_cn: String
  chineseShort_zh_cn: String
  chineseTLong_zh_tw: String
  chineseTShort_zh_tw: String
  danishLong_da: String
  danishShort_da: String
  dutchLong_nl: String
  dutchShort_nl: String
  englishLong_en: String
  englishShort_en: String
  frenchLong_fr: String
  frenchShort_fr: String
  germanLong_de: String
  germanShort_de: String
  italianLong_it: String
  italianShort_it: String
  japaneseLong_ja: String
  japaneseShort_ja: String
  koreanLong_ko: String
  koreanShort_ko: String
  portugeseLong_pt: String
  portugeseShort_pt: String
  spanishLong_es: String
  spanishShort_es: String
}

input PartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  partNumber: String
  partNumber_not: String
  partNumber_in: [String!]
  partNumber_not_in: [String!]
  partNumber_lt: String
  partNumber_lte: String
  partNumber_gt: String
  partNumber_gte: String
  partNumber_contains: String
  partNumber_not_contains: String
  partNumber_starts_with: String
  partNumber_not_starts_with: String
  partNumber_ends_with: String
  partNumber_not_ends_with: String
  chineseLong_zh_cn: String
  chineseLong_zh_cn_not: String
  chineseLong_zh_cn_in: [String!]
  chineseLong_zh_cn_not_in: [String!]
  chineseLong_zh_cn_lt: String
  chineseLong_zh_cn_lte: String
  chineseLong_zh_cn_gt: String
  chineseLong_zh_cn_gte: String
  chineseLong_zh_cn_contains: String
  chineseLong_zh_cn_not_contains: String
  chineseLong_zh_cn_starts_with: String
  chineseLong_zh_cn_not_starts_with: String
  chineseLong_zh_cn_ends_with: String
  chineseLong_zh_cn_not_ends_with: String
  chineseShort_zh_cn: String
  chineseShort_zh_cn_not: String
  chineseShort_zh_cn_in: [String!]
  chineseShort_zh_cn_not_in: [String!]
  chineseShort_zh_cn_lt: String
  chineseShort_zh_cn_lte: String
  chineseShort_zh_cn_gt: String
  chineseShort_zh_cn_gte: String
  chineseShort_zh_cn_contains: String
  chineseShort_zh_cn_not_contains: String
  chineseShort_zh_cn_starts_with: String
  chineseShort_zh_cn_not_starts_with: String
  chineseShort_zh_cn_ends_with: String
  chineseShort_zh_cn_not_ends_with: String
  chineseTLong_zh_tw: String
  chineseTLong_zh_tw_not: String
  chineseTLong_zh_tw_in: [String!]
  chineseTLong_zh_tw_not_in: [String!]
  chineseTLong_zh_tw_lt: String
  chineseTLong_zh_tw_lte: String
  chineseTLong_zh_tw_gt: String
  chineseTLong_zh_tw_gte: String
  chineseTLong_zh_tw_contains: String
  chineseTLong_zh_tw_not_contains: String
  chineseTLong_zh_tw_starts_with: String
  chineseTLong_zh_tw_not_starts_with: String
  chineseTLong_zh_tw_ends_with: String
  chineseTLong_zh_tw_not_ends_with: String
  chineseTShort_zh_tw: String
  chineseTShort_zh_tw_not: String
  chineseTShort_zh_tw_in: [String!]
  chineseTShort_zh_tw_not_in: [String!]
  chineseTShort_zh_tw_lt: String
  chineseTShort_zh_tw_lte: String
  chineseTShort_zh_tw_gt: String
  chineseTShort_zh_tw_gte: String
  chineseTShort_zh_tw_contains: String
  chineseTShort_zh_tw_not_contains: String
  chineseTShort_zh_tw_starts_with: String
  chineseTShort_zh_tw_not_starts_with: String
  chineseTShort_zh_tw_ends_with: String
  chineseTShort_zh_tw_not_ends_with: String
  danishLong_da: String
  danishLong_da_not: String
  danishLong_da_in: [String!]
  danishLong_da_not_in: [String!]
  danishLong_da_lt: String
  danishLong_da_lte: String
  danishLong_da_gt: String
  danishLong_da_gte: String
  danishLong_da_contains: String
  danishLong_da_not_contains: String
  danishLong_da_starts_with: String
  danishLong_da_not_starts_with: String
  danishLong_da_ends_with: String
  danishLong_da_not_ends_with: String
  danishShort_da: String
  danishShort_da_not: String
  danishShort_da_in: [String!]
  danishShort_da_not_in: [String!]
  danishShort_da_lt: String
  danishShort_da_lte: String
  danishShort_da_gt: String
  danishShort_da_gte: String
  danishShort_da_contains: String
  danishShort_da_not_contains: String
  danishShort_da_starts_with: String
  danishShort_da_not_starts_with: String
  danishShort_da_ends_with: String
  danishShort_da_not_ends_with: String
  dutchLong_nl: String
  dutchLong_nl_not: String
  dutchLong_nl_in: [String!]
  dutchLong_nl_not_in: [String!]
  dutchLong_nl_lt: String
  dutchLong_nl_lte: String
  dutchLong_nl_gt: String
  dutchLong_nl_gte: String
  dutchLong_nl_contains: String
  dutchLong_nl_not_contains: String
  dutchLong_nl_starts_with: String
  dutchLong_nl_not_starts_with: String
  dutchLong_nl_ends_with: String
  dutchLong_nl_not_ends_with: String
  dutchShort_nl: String
  dutchShort_nl_not: String
  dutchShort_nl_in: [String!]
  dutchShort_nl_not_in: [String!]
  dutchShort_nl_lt: String
  dutchShort_nl_lte: String
  dutchShort_nl_gt: String
  dutchShort_nl_gte: String
  dutchShort_nl_contains: String
  dutchShort_nl_not_contains: String
  dutchShort_nl_starts_with: String
  dutchShort_nl_not_starts_with: String
  dutchShort_nl_ends_with: String
  dutchShort_nl_not_ends_with: String
  englishLong_en: String
  englishLong_en_not: String
  englishLong_en_in: [String!]
  englishLong_en_not_in: [String!]
  englishLong_en_lt: String
  englishLong_en_lte: String
  englishLong_en_gt: String
  englishLong_en_gte: String
  englishLong_en_contains: String
  englishLong_en_not_contains: String
  englishLong_en_starts_with: String
  englishLong_en_not_starts_with: String
  englishLong_en_ends_with: String
  englishLong_en_not_ends_with: String
  englishShort_en: String
  englishShort_en_not: String
  englishShort_en_in: [String!]
  englishShort_en_not_in: [String!]
  englishShort_en_lt: String
  englishShort_en_lte: String
  englishShort_en_gt: String
  englishShort_en_gte: String
  englishShort_en_contains: String
  englishShort_en_not_contains: String
  englishShort_en_starts_with: String
  englishShort_en_not_starts_with: String
  englishShort_en_ends_with: String
  englishShort_en_not_ends_with: String
  frenchLong_fr: String
  frenchLong_fr_not: String
  frenchLong_fr_in: [String!]
  frenchLong_fr_not_in: [String!]
  frenchLong_fr_lt: String
  frenchLong_fr_lte: String
  frenchLong_fr_gt: String
  frenchLong_fr_gte: String
  frenchLong_fr_contains: String
  frenchLong_fr_not_contains: String
  frenchLong_fr_starts_with: String
  frenchLong_fr_not_starts_with: String
  frenchLong_fr_ends_with: String
  frenchLong_fr_not_ends_with: String
  frenchShort_fr: String
  frenchShort_fr_not: String
  frenchShort_fr_in: [String!]
  frenchShort_fr_not_in: [String!]
  frenchShort_fr_lt: String
  frenchShort_fr_lte: String
  frenchShort_fr_gt: String
  frenchShort_fr_gte: String
  frenchShort_fr_contains: String
  frenchShort_fr_not_contains: String
  frenchShort_fr_starts_with: String
  frenchShort_fr_not_starts_with: String
  frenchShort_fr_ends_with: String
  frenchShort_fr_not_ends_with: String
  germanLong_de: String
  germanLong_de_not: String
  germanLong_de_in: [String!]
  germanLong_de_not_in: [String!]
  germanLong_de_lt: String
  germanLong_de_lte: String
  germanLong_de_gt: String
  germanLong_de_gte: String
  germanLong_de_contains: String
  germanLong_de_not_contains: String
  germanLong_de_starts_with: String
  germanLong_de_not_starts_with: String
  germanLong_de_ends_with: String
  germanLong_de_not_ends_with: String
  germanShort_de: String
  germanShort_de_not: String
  germanShort_de_in: [String!]
  germanShort_de_not_in: [String!]
  germanShort_de_lt: String
  germanShort_de_lte: String
  germanShort_de_gt: String
  germanShort_de_gte: String
  germanShort_de_contains: String
  germanShort_de_not_contains: String
  germanShort_de_starts_with: String
  germanShort_de_not_starts_with: String
  germanShort_de_ends_with: String
  germanShort_de_not_ends_with: String
  italianLong_it: String
  italianLong_it_not: String
  italianLong_it_in: [String!]
  italianLong_it_not_in: [String!]
  italianLong_it_lt: String
  italianLong_it_lte: String
  italianLong_it_gt: String
  italianLong_it_gte: String
  italianLong_it_contains: String
  italianLong_it_not_contains: String
  italianLong_it_starts_with: String
  italianLong_it_not_starts_with: String
  italianLong_it_ends_with: String
  italianLong_it_not_ends_with: String
  italianShort_it: String
  italianShort_it_not: String
  italianShort_it_in: [String!]
  italianShort_it_not_in: [String!]
  italianShort_it_lt: String
  italianShort_it_lte: String
  italianShort_it_gt: String
  italianShort_it_gte: String
  italianShort_it_contains: String
  italianShort_it_not_contains: String
  italianShort_it_starts_with: String
  italianShort_it_not_starts_with: String
  italianShort_it_ends_with: String
  italianShort_it_not_ends_with: String
  japaneseLong_ja: String
  japaneseLong_ja_not: String
  japaneseLong_ja_in: [String!]
  japaneseLong_ja_not_in: [String!]
  japaneseLong_ja_lt: String
  japaneseLong_ja_lte: String
  japaneseLong_ja_gt: String
  japaneseLong_ja_gte: String
  japaneseLong_ja_contains: String
  japaneseLong_ja_not_contains: String
  japaneseLong_ja_starts_with: String
  japaneseLong_ja_not_starts_with: String
  japaneseLong_ja_ends_with: String
  japaneseLong_ja_not_ends_with: String
  japaneseShort_ja: String
  japaneseShort_ja_not: String
  japaneseShort_ja_in: [String!]
  japaneseShort_ja_not_in: [String!]
  japaneseShort_ja_lt: String
  japaneseShort_ja_lte: String
  japaneseShort_ja_gt: String
  japaneseShort_ja_gte: String
  japaneseShort_ja_contains: String
  japaneseShort_ja_not_contains: String
  japaneseShort_ja_starts_with: String
  japaneseShort_ja_not_starts_with: String
  japaneseShort_ja_ends_with: String
  japaneseShort_ja_not_ends_with: String
  koreanLong_ko: String
  koreanLong_ko_not: String
  koreanLong_ko_in: [String!]
  koreanLong_ko_not_in: [String!]
  koreanLong_ko_lt: String
  koreanLong_ko_lte: String
  koreanLong_ko_gt: String
  koreanLong_ko_gte: String
  koreanLong_ko_contains: String
  koreanLong_ko_not_contains: String
  koreanLong_ko_starts_with: String
  koreanLong_ko_not_starts_with: String
  koreanLong_ko_ends_with: String
  koreanLong_ko_not_ends_with: String
  koreanShort_ko: String
  koreanShort_ko_not: String
  koreanShort_ko_in: [String!]
  koreanShort_ko_not_in: [String!]
  koreanShort_ko_lt: String
  koreanShort_ko_lte: String
  koreanShort_ko_gt: String
  koreanShort_ko_gte: String
  koreanShort_ko_contains: String
  koreanShort_ko_not_contains: String
  koreanShort_ko_starts_with: String
  koreanShort_ko_not_starts_with: String
  koreanShort_ko_ends_with: String
  koreanShort_ko_not_ends_with: String
  portugeseLong_pt: String
  portugeseLong_pt_not: String
  portugeseLong_pt_in: [String!]
  portugeseLong_pt_not_in: [String!]
  portugeseLong_pt_lt: String
  portugeseLong_pt_lte: String
  portugeseLong_pt_gt: String
  portugeseLong_pt_gte: String
  portugeseLong_pt_contains: String
  portugeseLong_pt_not_contains: String
  portugeseLong_pt_starts_with: String
  portugeseLong_pt_not_starts_with: String
  portugeseLong_pt_ends_with: String
  portugeseLong_pt_not_ends_with: String
  portugeseShort_pt: String
  portugeseShort_pt_not: String
  portugeseShort_pt_in: [String!]
  portugeseShort_pt_not_in: [String!]
  portugeseShort_pt_lt: String
  portugeseShort_pt_lte: String
  portugeseShort_pt_gt: String
  portugeseShort_pt_gte: String
  portugeseShort_pt_contains: String
  portugeseShort_pt_not_contains: String
  portugeseShort_pt_starts_with: String
  portugeseShort_pt_not_starts_with: String
  portugeseShort_pt_ends_with: String
  portugeseShort_pt_not_ends_with: String
  spanishLong_es: String
  spanishLong_es_not: String
  spanishLong_es_in: [String!]
  spanishLong_es_not_in: [String!]
  spanishLong_es_lt: String
  spanishLong_es_lte: String
  spanishLong_es_gt: String
  spanishLong_es_gte: String
  spanishLong_es_contains: String
  spanishLong_es_not_contains: String
  spanishLong_es_starts_with: String
  spanishLong_es_not_starts_with: String
  spanishLong_es_ends_with: String
  spanishLong_es_not_ends_with: String
  spanishShort_es: String
  spanishShort_es_not: String
  spanishShort_es_in: [String!]
  spanishShort_es_not_in: [String!]
  spanishShort_es_lt: String
  spanishShort_es_lte: String
  spanishShort_es_gt: String
  spanishShort_es_gte: String
  spanishShort_es_contains: String
  spanishShort_es_not_contains: String
  spanishShort_es_starts_with: String
  spanishShort_es_not_starts_with: String
  spanishShort_es_ends_with: String
  spanishShort_es_not_ends_with: String
  edits_every: EditsWhereInput
  edits_some: EditsWhereInput
  edits_none: EditsWhereInput
  AND: [PartWhereInput!]
  OR: [PartWhereInput!]
  NOT: [PartWhereInput!]
}

input PartWhereUniqueInput {
  id: ID
}

enum Permission {
  ADMIN
  USER
  CREATE
  UPDATE
  DELETE
  EXPORT
  PERMISSIONUPDATE
  CHINESE_CN
  CHINESE_TW
  DANISH
  DUTCH
  ENGLISH
  FRENCH
  GERMAN
  ITALIAN
  JAPANESE
  KOREAN
  PORTUGESE
  SPANISH
}

type Query {
  editses(where: EditsWhereInput, orderBy: EditsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Edits]!
  editsesConnection(where: EditsWhereInput, orderBy: EditsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EditsConnection!
  part(where: PartWhereUniqueInput!): Part
  parts(where: PartWhereInput, orderBy: PartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Part]!
  partsConnection(where: PartWhereInput, orderBy: PartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PartConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  edits(where: EditsSubscriptionWhereInput): EditsSubscriptionPayload
  part(where: PartSubscriptionWhereInput): PartSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserCreatepermissionsInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  resetToken: String
  resetTokenExpiry: Float
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  resetToken: String
  resetTokenExpiry: Float
  permissions: UserUpdatepermissionsInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: Float
  resetTokenExpiry_not: Float
  resetTokenExpiry_in: [Float!]
  resetTokenExpiry_not_in: [Float!]
  resetTokenExpiry_lt: Float
  resetTokenExpiry_lte: Float
  resetTokenExpiry_gt: Float
  resetTokenExpiry_gte: Float
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    