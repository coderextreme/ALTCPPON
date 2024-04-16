class glTF {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set generator(arg1) {}
	get generator() {}
	set version(arg1) {}
	get version() {}
	set asset(arg1) {}
	get asset() {}
	set scene(arg1) {}
	get scene() {}
	addScenes(arg1) {}
	removeScenes(arg1) {}
	addNodes(arg1) {}
	removeNodes(arg1) {}
	addCameras(arg1) {}
	removeCameras(arg1) {}
	addMeshes(arg1) {}
	removeMeshes(arg1) {}
	addAccessors(arg1) {}
	removeAccessors(arg1) {}
	addMaterials(arg1) {}
	removeMaterials(arg1) {}
	addBufferViews(arg1) {}
	removeBufferViews(arg1) {}
	addBuffers(arg1) {}
	removeBuffers(arg1) {}
	set copyright(arg1) {}
	get copyright() {}
	addExtensionsUsed(arg1) {}
	removeExtensionsUsed(arg1) {}
	addTextures(arg1) {}
	removeTextures(arg1) {}
	addImages(arg1) {}
	removeImages(arg1) {}
	addSamplers(arg1) {}
	removeSamplers(arg1) {}
	addAnimations(arg1) {}
	removeAnimations(arg1) {}
	set extensions(arg1) {}
	get extensions() {}
	addSkins(arg1) {}
	removeSkins(arg1) {}
	addExtensionsRequired(arg1) {}
	removeExtensionsRequired(arg1) {}
	set extras(arg1) {}
	get extras() {}
	set KHR_lights_punctual(arg1) {}
	get KHR_lights_punctual() {}
	set KHR_materials_variants(arg1) {}
	get KHR_materials_variants() {}
	set EXT_lights_image_based(arg1) {}
	get EXT_lights_image_based() {}
	set KHR_xmp(arg1) {}
	get KHR_xmp() {}
	set KHR_xmp_json_ld(arg1) {}
	get KHR_xmp_json_ld() {}
	set minVersion(arg1) {}
	get minVersion() {}
}
class scene {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addNodes(arg1) {}
	removeNodes(arg1) {}
	set name(arg1) {}
	get name() {}
	set extensions(arg1) {}
	get extensions() {}
}
class node {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChildren(arg1) {}
	removeChildren(arg1) {}
	addMatrix(arg1) {}
	removeMatrix(arg1) {}
	set mesh(arg1) {}
	get mesh() {}
	set camera(arg1) {}
	get camera() {}
	set name(arg1) {}
	get name() {}
	addTranslation(arg1) {}
	removeTranslation(arg1) {}
	addRotation(arg1) {}
	removeRotation(arg1) {}
	addScale(arg1) {}
	removeScale(arg1) {}
	set skin(arg1) {}
	get skin() {}
	set extensions(arg1) {}
	get extensions() {}
	set extras(arg1) {}
	get extras() {}
}
class camera {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set perspective(arg1) {}
	get perspective() {}
	set type(arg1) {}
	get type() {}
	set orthographic(arg1) {}
	get orthographic() {}
	set name(arg1) {}
	get name() {}
}
class perspective {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set aspectRatio(arg1) {}
	get aspectRatio() {}
	set yfov(arg1) {}
	get yfov() {}
	set zfar(arg1) {}
	get zfar() {}
	set znear(arg1) {}
	get znear() {}
}
class mesh {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addPrimitives(arg1) {}
	removePrimitives(arg1) {}
	set name(arg1) {}
	get name() {}
	addWeights(arg1) {}
	removeWeights(arg1) {}
	set extras(arg1) {}
	get extras() {}
	set extensions(arg1) {}
	get extensions() {}
}
class primitive {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set attributes(arg1) {}
	get attributes() {}
	set indices(arg1) {}
	get indices() {}
	set mode(arg1) {}
	get mode() {}
	set material(arg1) {}
	get material() {}
	addTargets(arg1) {}
	removeTargets(arg1) {}
	set extensions(arg1) {}
	get extensions() {}
	set extras(arg1) {}
	get extras() {}
}
class attributes {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set NORMAL(arg1) {}
	get NORMAL() {}
	set POSITION(arg1) {}
	get POSITION() {}
	set TEXCOORD_0(arg1) {}
	get TEXCOORD_0() {}
	set TANGENT(arg1) {}
	get TANGENT() {}
	set COLOR_0(arg1) {}
	get COLOR_0() {}
	set JOINTS_0(arg1) {}
	get JOINTS_0() {}
	set WEIGHTS_0(arg1) {}
	get WEIGHTS_0() {}
	set TEXCOORD_1(arg1) {}
	get TEXCOORD_1() {}
	set TEXCOORD_2(arg1) {}
	get TEXCOORD_2() {}
}
class accessor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set bufferView(arg1) {}
	get bufferView() {}
	set byteOffset(arg1) {}
	get byteOffset() {}
	set componentType(arg1) {}
	get componentType() {}
	set count(arg1) {}
	get count() {}
	addMax(arg1) {}
	removeMax(arg1) {}
	addMin(arg1) {}
	removeMin(arg1) {}
	set type(arg1) {}
	get type() {}
	set name(arg1) {}
	get name() {}
	set normalized(arg1) {}
	get normalized() {}
	set sparse(arg1) {}
	get sparse() {}
}
class material {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set pbrMetallicRoughness(arg1) {}
	get pbrMetallicRoughness() {}
	addEmissiveFactor(arg1) {}
	removeEmissiveFactor(arg1) {}
	set name(arg1) {}
	get name() {}
	set normalTexture(arg1) {}
	get normalTexture() {}
	set occlusionTexture(arg1) {}
	get occlusionTexture() {}
	set extensions(arg1) {}
	get extensions() {}
	set alphaMode(arg1) {}
	get alphaMode() {}
	set doubleSided(arg1) {}
	get doubleSided() {}
	set alphaCutoff(arg1) {}
	get alphaCutoff() {}
	set emissiveTexture(arg1) {}
	get emissiveTexture() {}
}
class pbrMetallicRoughness {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addBaseColorFactor(arg1) {}
	removeBaseColorFactor(arg1) {}
	set metallicFactor(arg1) {}
	get metallicFactor() {}
	set index(arg1) {}
	get index() {}
	set baseColorTexture(arg1) {}
	get baseColorTexture() {}
	set metallicRoughnessTexture(arg1) {}
	get metallicRoughnessTexture() {}
	set roughnessFactor(arg1) {}
	get roughnessFactor() {}
	set texCoord(arg1) {}
	get texCoord() {}
	set extensions(arg1) {}
	get extensions() {}
}
class bufferView {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set buffer(arg1) {}
	get buffer() {}
	set byteOffset(arg1) {}
	get byteOffset() {}
	set byteLength(arg1) {}
	get byteLength() {}
	set target(arg1) {}
	get target() {}
	set byteStride(arg1) {}
	get byteStride() {}
	set name(arg1) {}
	get name() {}
	set extensions(arg1) {}
	get extensions() {}
}
class buffer {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set byteLength(arg1) {}
	get byteLength() {}
	set uri(arg1) {}
	get uri() {}
	set name(arg1) {}
	get name() {}
	set extensions(arg1) {}
	get extensions() {}
}
class normalTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set scale(arg1) {}
	get scale() {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
	set extensions(arg1) {}
	get extensions() {}
	set texCoord(arg1) {}
	get texCoord() {}
}
class occlusionTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set strength(arg1) {}
	get strength() {}
	set texCoord(arg1) {}
	get texCoord() {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
	set extensions(arg1) {}
	get extensions() {}
}
class extensions {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set transmissionFactor(arg1) {}
	get transmissionFactor() {}
	set KHR_materials_transmission(arg1) {}
	get KHR_materials_transmission() {}
	addAttenuationColor(arg1) {}
	removeAttenuationColor(arg1) {}
	set thicknessFactor(arg1) {}
	get thicknessFactor() {}
	set KHR_materials_volume(arg1) {}
	get KHR_materials_volume() {}
	set attenuationDistance(arg1) {}
	get attenuationDistance() {}
	set thicknessTexture(arg1) {}
	get thicknessTexture() {}
	set anisotropyStrength(arg1) {}
	get anisotropyStrength() {}
	set anisotropyRotation(arg1) {}
	get anisotropyRotation() {}
	set anisotropyTexture(arg1) {}
	get anisotropyTexture() {}
	set KHR_materials_anisotropy(arg1) {}
	get KHR_materials_anisotropy() {}
	addScale(arg1) {}
	removeScale(arg1) {}
	set clearcoatFactor(arg1) {}
	get clearcoatFactor() {}
	set clearcoatRoughnessFactor(arg1) {}
	get clearcoatRoughnessFactor() {}
	set KHR_materials_clearcoat(arg1) {}
	get KHR_materials_clearcoat() {}
	addLights(arg1) {}
	removeLights(arg1) {}
	set light(arg1) {}
	get light() {}
	set KHR_lights_punctual(arg1) {}
	get KHR_lights_punctual() {}
	set clearcoatTexture(arg1) {}
	get clearcoatTexture() {}
	set clearcoatRoughnessTexture(arg1) {}
	get clearcoatRoughnessTexture() {}
	set clearcoatNormalTexture(arg1) {}
	get clearcoatNormalTexture() {}
	addVariants(arg1) {}
	removeVariants(arg1) {}
	addMappings(arg1) {}
	removeMappings(arg1) {}
	set KHR_materials_variants(arg1) {}
	get KHR_materials_variants() {}
	set emissiveStrength(arg1) {}
	get emissiveStrength() {}
	set KHR_materials_emissive_strength(arg1) {}
	get KHR_materials_emissive_strength() {}
	set rotation(arg1) {}
	get rotation() {}
	set texCoord(arg1) {}
	get texCoord() {}
	addSpecularColorFactor(arg1) {}
	removeSpecularColorFactor(arg1) {}
	set KHR_materials_specular(arg1) {}
	get KHR_materials_specular() {}
	addSheenColorFactor(arg1) {}
	removeSheenColorFactor(arg1) {}
	set sheenRoughnessFactor(arg1) {}
	get sheenRoughnessFactor() {}
	set KHR_materials_sheen(arg1) {}
	get KHR_materials_sheen() {}
	set bufferView(arg1) {}
	get bufferView() {}
	set attributes(arg1) {}
	get attributes() {}
	set KHR_draco_mesh_compression(arg1) {}
	get KHR_draco_mesh_compression() {}
	addOffset(arg1) {}
	removeOffset(arg1) {}
	set fallback(arg1) {}
	get fallback() {}
	set EXT_meshopt_compression(arg1) {}
	get EXT_meshopt_compression() {}
	set buffer(arg1) {}
	get buffer() {}
	set byteOffset(arg1) {}
	get byteOffset() {}
	set byteLength(arg1) {}
	get byteLength() {}
	set byteStride(arg1) {}
	get byteStride() {}
	set mode(arg1) {}
	get mode() {}
	set count(arg1) {}
	get count() {}
	set filter(arg1) {}
	get filter() {}
	set EXT_lights_image_based(arg1) {}
	get EXT_lights_image_based() {}
	set source(arg1) {}
	get source() {}
	set KHR_texture_basisu(arg1) {}
	get KHR_texture_basisu() {}
	set ior(arg1) {}
	get ior() {}
	set KHR_materials_ior(arg1) {}
	get KHR_materials_ior() {}
	set iridescenceFactor(arg1) {}
	get iridescenceFactor() {}
	set iridescenceIor(arg1) {}
	get iridescenceIor() {}
	set iridescenceThicknessMaximum(arg1) {}
	get iridescenceThicknessMaximum() {}
	set KHR_materials_iridescence(arg1) {}
	get KHR_materials_iridescence() {}
	set iridescenceThicknessMinimum(arg1) {}
	get iridescenceThicknessMinimum() {}
	set iridescenceThicknessTexture(arg1) {}
	get iridescenceThicknessTexture() {}
	set iridescenceTexture(arg1) {}
	get iridescenceTexture() {}
	set transmissionTexture(arg1) {}
	get transmissionTexture() {}
	set sheenColorTexture(arg1) {}
	get sheenColorTexture() {}
	set sheenRoughnessTexture(arg1) {}
	get sheenRoughnessTexture() {}
	set EXT_mesh_gpu_instancing(arg1) {}
	get EXT_mesh_gpu_instancing() {}
	set diffuseTexture(arg1) {}
	get diffuseTexture() {}
	set specularGlossinessTexture(arg1) {}
	get specularGlossinessTexture() {}
	set KHR_materials_pbrSpecularGlossiness(arg1) {}
	get KHR_materials_pbrSpecularGlossiness() {}
	set specularFactor(arg1) {}
	get specularFactor() {}
	set glossinessFactor(arg1) {}
	get glossinessFactor() {}
	set specularTexture(arg1) {}
	get specularTexture() {}
	set specularColorTexture(arg1) {}
	get specularColorTexture() {}
	set KHR_materials_unlit(arg1) {}
	get KHR_materials_unlit() {}
	set packet(arg1) {}
	get packet() {}
	set context(arg1) {}
	get context() {}
	addPackets(arg1) {}
	removePackets(arg1) {}
	set KHR_xmp_json_ld(arg1) {}
	get KHR_xmp_json_ld() {}
}
class texture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set sampler(arg1) {}
	get sampler() {}
	set source(arg1) {}
	get source() {}
	set name(arg1) {}
	get name() {}
	set extensions(arg1) {}
	get extensions() {}
}
class image {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set mimeType(arg1) {}
	get mimeType() {}
	set name(arg1) {}
	get name() {}
	set uri(arg1) {}
	get uri() {}
	set bufferView(arg1) {}
	get bufferView() {}
}
class sampler {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set magFilter(arg1) {}
	get magFilter() {}
	set minFilter(arg1) {}
	get minFilter() {}
	set input(arg1) {}
	get input() {}
	set interpolation(arg1) {}
	get interpolation() {}
	set output(arg1) {}
	get output() {}
	set wrapS(arg1) {}
	get wrapS() {}
	set wrapT(arg1) {}
	get wrapT() {}
	set name(arg1) {}
	get name() {}
}
class animation {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChannels(arg1) {}
	removeChannels(arg1) {}
	set name(arg1) {}
	get name() {}
	addSamplers(arg1) {}
	removeSamplers(arg1) {}
}
class channel {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set sampler(arg1) {}
	get sampler() {}
	set target(arg1) {}
	get target() {}
}
class target {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set node(arg1) {}
	get node() {}
	set path(arg1) {}
	get path() {}
	set NORMAL(arg1) {}
	get NORMAL() {}
	set POSITION(arg1) {}
	get POSITION() {}
	set TANGENT(arg1) {}
	get TANGENT() {}
}
class KHR_materials_volume {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set texCoord(arg1) {}
	get texCoord() {}
	set extensions(arg1) {}
	get extensions() {}
}
class emissiveTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set texCoord(arg1) {}
	get texCoord() {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
	set extensions(arg1) {}
	get extensions() {}
}
class skin {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set inverseBindMatrices(arg1) {}
	get inverseBindMatrices() {}
	set skeleton(arg1) {}
	get skeleton() {}
	addJoints(arg1) {}
	removeJoints(arg1) {}
	set name(arg1) {}
	get name() {}
}
class orthographic {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set xmag(arg1) {}
	get xmag() {}
	set ymag(arg1) {}
	get ymag() {}
	set zfar(arg1) {}
	get zfar() {}
	set znear(arg1) {}
	get znear() {}
}
class KHR_materials_anisotropy {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
}
class asset {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set created(arg1) {}
	get created() {}
	set title(arg1) {}
	get title() {}
	set author(arg1) {}
	get author() {}
	set license(arg1) {}
	get license() {}
	set source(arg1) {}
	get source() {}
	set KHR_xmp(arg1) {}
	get KHR_xmp() {}
	set KHR_xmp_json_ld(arg1) {}
	get KHR_xmp_json_ld() {}
}
class light {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addColor(arg1) {}
	removeColor(arg1) {}
	set intensity(arg1) {}
	get intensity() {}
	set name(arg1) {}
	get name() {}
	set range(arg1) {}
	get range() {}
	set type(arg1) {}
	get type() {}
	addIrradianceCoefficients(arg1) {}
	removeIrradianceCoefficients(arg1) {}
	addRotation(arg1) {}
	removeRotation(arg1) {}
	set specularImageSize(arg1) {}
	get specularImageSize() {}
	addSpecularImages(arg1) {}
	removeSpecularImages(arg1) {}
}
class KHR_materials_clearcoat {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set texCoord(arg1) {}
	get texCoord() {}
	set scale(arg1) {}
	get scale() {}
	set extensions(arg1) {}
	get extensions() {}
}
class variant {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) {}
	get name() {}
}
class mapping {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set material(arg1) {}
	get material() {}
	addVariants(arg1) {}
	removeVariants(arg1) {}
}
class KHR_draco_mesh_compression {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set NORMAL(arg1) {}
	get NORMAL() {}
	set POSITION(arg1) {}
	get POSITION() {}
	set TEXCOORD_0(arg1) {}
	get TEXCOORD_0() {}
	set TANGENT(arg1) {}
	get TANGENT() {}
	set JOINTS_0(arg1) {}
	get JOINTS_0() {}
	set WEIGHTS_0(arg1) {}
	get WEIGHTS_0() {}
}
class baseColorTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class metallicRoughnessTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class thicknessTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class KHR_materials_iridescence {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
}
class KHR_materials_transmission {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
}
class extras {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) {}
	get name() {}
	addTargetNames(arg1) {}
	removeTargetNames(arg1) {}
}
class KHR_materials_sheen {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
	set extensions(arg1) {}
	get extensions() {}
}
class sheenColorTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class sheenRoughnessTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class EXT_mesh_gpu_instancing {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set TRANSLATION(arg1) {}
	get TRANSLATION() {}
	set ROTATION(arg1) {}
	get ROTATION() {}
	set SCALE(arg1) {}
	get SCALE() {}
}
class sparse {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set count(arg1) {}
	get count() {}
	set bufferView(arg1) {}
	get bufferView() {}
	set byteOffset(arg1) {}
	get byteOffset() {}
	set componentType(arg1) {}
	get componentType() {}
	set indices(arg1) {}
	get indices() {}
	set values(arg1) {}
	get values() {}
}
class KHR_materials_pbrSpecularGlossiness {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
}
class KHR_materials_specular {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set index(arg1) {}
	get index() {}
}
class clearcoatTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class clearcoatRoughnessTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class clearcoatNormalTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set KHR_texture_transform(arg1) {}
	get KHR_texture_transform() {}
}
class KHR_xmp {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set dc(arg1) {}
	get dc() {}
}
class packet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set dc_colon_date(arg1) {}
	get dc_colon_date() {}
	set dc_colon_title(arg1) {}
	get dc_colon_title() {}
	set xmp_colon_CreatorTool(arg1) {}
	get xmp_colon_CreatorTool() {}
	set context(arg1) {}
	get context() {}
	set id(arg1) {}
	get id() {}
	set dc_colon_contributor(arg1) {}
	get dc_colon_contributor() {}
	set dc_colon_coverage(arg1) {}
	get dc_colon_coverage() {}
	set dc_colon_creator(arg1) {}
	get dc_colon_creator() {}
	set dc_colon_description(arg1) {}
	get dc_colon_description() {}
	set dc_colon_format(arg1) {}
	get dc_colon_format() {}
	set dc_colon_language(arg1) {}
	get dc_colon_language() {}
	set dc_colon_publisher(arg1) {}
	get dc_colon_publisher() {}
}
class context {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set dc(arg1) {}
	get dc() {}
	set rdf(arg1) {}
	get rdf() {}
}
class dc_colon_contributor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addSet(arg1) {}
	removeSet(arg1) {}
}
class dc_colon_creator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addList(arg1) {}
	removeList(arg1) {}
}
class dc_colon_date {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addList(arg1) {}
	removeList(arg1) {}
}
class dc_colon_description {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set type(arg1) {}
	get type() {}
	set language(arg1) {}
	get language() {}
	set value(arg1) {}
	get value() {}
	set rdf_colon__1(arg1) {}
	get rdf_colon__1() {}
}
class dc_colon_language {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addSet(arg1) {}
	removeSet(arg1) {}
}
class dc_colon_publisher {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addSet(arg1) {}
	removeSet(arg1) {}
}
class dc_colon_title {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set type(arg1) {}
	get type() {}
	set language(arg1) {}
	get language() {}
	set value(arg1) {}
	get value() {}
	set rdf_colon__1(arg1) {}
	get rdf_colon__1() {}
}
