class X3D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set encoding(arg1) { this.encoding = arg1; return this; }
	get encoding() { return encoding;}
	set profile(arg1) { this.profile = arg1; return this; }
	get profile() { return profile;}
	set version(arg1) { this.version = arg1; return this; }
	get version() { return version;}
	set xsd_colon_noNamespaceSchemaLocation(arg1) { this.xsd_colon_noNamespaceSchemaLocation = arg1; return this; }
	get xsd_colon_noNamespaceSchemaLocation() { return xsd_colon_noNamespaceSchemaLocation;}
	set JSON_schema(arg1) { this.JSON_schema = arg1; return this; }
	get JSON_schema() { return JSON_schema;}
	addComponent(arg1) { this.component.push(...arg1); return this; }
	removeComponent(arg1) { component.splice(component.findIndex(e => arg1.includes(e)), 1); }
	addMeta(arg1) { this.meta.push(...arg1); return this; }
	removeMeta(arg1) { meta.splice(meta.findIndex(e => arg1.includes(e)), 1); }
	set head(arg1) { this.head = arg1; return this; }
	get head() { return head; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set Scene(arg1) { this.Scene = arg1; return this; }
	get Scene() { return Scene; }
	addUnit(arg1) { this.unit.push(...arg1); return this; }
	removeUnit(arg1) { unit.splice(unit.findIndex(e => arg1.includes(e)), 1); }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
}
class component {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set level(arg1) { this.level = arg1; return this; }
	get level() { return level;}
}
class meta {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set content(arg1) { this.content = arg1; return this; }
	get content() { return content;}
}
class child {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set WorldInfo(arg1) { this.WorldInfo = arg1; return this; }
	get WorldInfo() { return WorldInfo; }
	set Background(arg1) { this.Background = arg1; return this; }
	get Background() { return Background; }
	set Viewpoint(arg1) { this.Viewpoint = arg1; return this; }
	get Viewpoint() { return Viewpoint; }
	set comment(arg1) { this.comment = arg1; return this; }
	get comment() { return comment;}
	set CADFace(arg1) { this.CADFace = arg1; return this; }
	get CADFace() { return CADFace; }
	set CADPart(arg1) { this.CADPart = arg1; return this; }
	get CADPart() { return CADPart; }
	set CADAssembly(arg1) { this.CADAssembly = arg1; return this; }
	get CADAssembly() { return CADAssembly; }
	set ExternProtoDeclare(arg1) { this.ExternProtoDeclare = arg1; return this; }
	get ExternProtoDeclare() { return ExternProtoDeclare; }
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set Anchor(arg1) { this.Anchor = arg1; return this; }
	get Anchor() { return Anchor; }
	set Transform(arg1) { this.Transform = arg1; return this; }
	get Transform() { return Transform; }
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set ProtoInstance(arg1) { this.ProtoInstance = arg1; return this; }
	get ProtoInstance() { return ProtoInstance; }
	set IndexedFaceSet(arg1) { this.IndexedFaceSet = arg1; return this; }
	get IndexedFaceSet() { return IndexedFaceSet; }
	set Script(arg1) { this.Script = arg1; return this; }
	get Script() { return Script; }
	set Group(arg1) { this.Group = arg1; return this; }
	get Group() { return Group; }
	set ProtoDeclare(arg1) { this.ProtoDeclare = arg1; return this; }
	get ProtoDeclare() { return ProtoDeclare; }
	set CADLayer(arg1) { this.CADLayer = arg1; return this; }
	get CADLayer() { return CADLayer; }
	set Inline(arg1) { this.Inline = arg1; return this; }
	get Inline() { return Inline; }
	set NavigationInfo(arg1) { this.NavigationInfo = arg1; return this; }
	get NavigationInfo() { return NavigationInfo; }
	set ClipPlane(arg1) { this.ClipPlane = arg1; return this; }
	get ClipPlane() { return ClipPlane; }
	set PointLight(arg1) { this.PointLight = arg1; return this; }
	get PointLight() { return PointLight; }
	set PositionInterpolator(arg1) { this.PositionInterpolator = arg1; return this; }
	get PositionInterpolator() { return PositionInterpolator; }
	set DirectionalLight(arg1) { this.DirectionalLight = arg1; return this; }
	get DirectionalLight() { return DirectionalLight; }
	set TouchSensor(arg1) { this.TouchSensor = arg1; return this; }
	get TouchSensor() { return TouchSensor; }
	set Billboard(arg1) { this.Billboard = arg1; return this; }
	get Billboard() { return Billboard; }
	set ROUTE(arg1) { this.ROUTE = arg1; return this; }
	get ROUTE() { return ROUTE; }
	set TimeSensor(arg1) { this.TimeSensor = arg1; return this; }
	get TimeSensor() { return TimeSensor; }
	set CoordinateInterpolator(arg1) { this.CoordinateInterpolator = arg1; return this; }
	get CoordinateInterpolator() { return CoordinateInterpolator; }
	set OrientationInterpolator(arg1) { this.OrientationInterpolator = arg1; return this; }
	get OrientationInterpolator() { return OrientationInterpolator; }
	set Fog(arg1) { this.Fog = arg1; return this; }
	get Fog() { return Fog; }
	set Collision(arg1) { this.Collision = arg1; return this; }
	get Collision() { return Collision; }
	set LOD(arg1) { this.LOD = arg1; return this; }
	get LOD() { return LOD; }
	set Switch(arg1) { this.Switch = arg1; return this; }
	get Switch() { return Switch; }
	set Sound(arg1) { this.Sound = arg1; return this; }
	get Sound() { return Sound; }
	set SpotLight(arg1) { this.SpotLight = arg1; return this; }
	get SpotLight() { return SpotLight; }
	set ColorInterpolator(arg1) { this.ColorInterpolator = arg1; return this; }
	get ColorInterpolator() { return ColorInterpolator; }
	set NormalInterpolator(arg1) { this.NormalInterpolator = arg1; return this; }
	get NormalInterpolator() { return NormalInterpolator; }
	set ScalarInterpolator(arg1) { this.ScalarInterpolator = arg1; return this; }
	get ScalarInterpolator() { return ScalarInterpolator; }
	set CylinderSensor(arg1) { this.CylinderSensor = arg1; return this; }
	get CylinderSensor() { return CylinderSensor; }
	set PlaneSensor(arg1) { this.PlaneSensor = arg1; return this; }
	get PlaneSensor() { return PlaneSensor; }
	set ProximitySensor(arg1) { this.ProximitySensor = arg1; return this; }
	get ProximitySensor() { return ProximitySensor; }
	set SphereSensor(arg1) { this.SphereSensor = arg1; return this; }
	get SphereSensor() { return SphereSensor; }
	set VisibilitySensor(arg1) { this.VisibilitySensor = arg1; return this; }
	get VisibilitySensor() { return VisibilitySensor; }
	set IndexedLineSet(arg1) { this.IndexedLineSet = arg1; return this; }
	get IndexedLineSet() { return IndexedLineSet; }
	set BooleanSequencer(arg1) { this.BooleanSequencer = arg1; return this; }
	get BooleanSequencer() { return BooleanSequencer; }
	set Material(arg1) { this.Material = arg1; return this; }
	get Material() { return Material; }
	set BooleanFilter(arg1) { this.BooleanFilter = arg1; return this; }
	get BooleanFilter() { return BooleanFilter; }
	set BooleanToggle(arg1) { this.BooleanToggle = arg1; return this; }
	get BooleanToggle() { return BooleanToggle; }
	set CoordinateInterpolator2D(arg1) { this.CoordinateInterpolator2D = arg1; return this; }
	get CoordinateInterpolator2D() { return CoordinateInterpolator2D; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set TimeTrigger(arg1) { this.TimeTrigger = arg1; return this; }
	get TimeTrigger() { return TimeTrigger; }
	set PointSet(arg1) { this.PointSet = arg1; return this; }
	get PointSet() { return PointSet; }
	set EXPORT(arg1) { this.EXPORT = arg1; return this; }
	get EXPORT() { return EXPORT; }
	set IMPORT(arg1) { this.IMPORT = arg1; return this; }
	get IMPORT() { return IMPORT; }
	set IntegerSequencer(arg1) { this.IntegerSequencer = arg1; return this; }
	get IntegerSequencer() { return IntegerSequencer; }
	set KeySensor(arg1) { this.KeySensor = arg1; return this; }
	get KeySensor() { return KeySensor; }
	set LoadSensor(arg1) { this.LoadSensor = arg1; return this; }
	get LoadSensor() { return LoadSensor; }
	set PixelTexture(arg1) { this.PixelTexture = arg1; return this; }
	get PixelTexture() { return PixelTexture; }
	set PositionInterpolator2D(arg1) { this.PositionInterpolator2D = arg1; return this; }
	get PositionInterpolator2D() { return PositionInterpolator2D; }
	set Appearance(arg1) { this.Appearance = arg1; return this; }
	get Appearance() { return Appearance; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set MetadataBoolean(arg1) { this.MetadataBoolean = arg1; return this; }
	get MetadataBoolean() { return MetadataBoolean; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set MetadataDouble(arg1) { this.MetadataDouble = arg1; return this; }
	get MetadataDouble() { return MetadataDouble; }
	set MetadataFloat(arg1) { this.MetadataFloat = arg1; return this; }
	get MetadataFloat() { return MetadataFloat; }
	set MetadataInteger(arg1) { this.MetadataInteger = arg1; return this; }
	get MetadataInteger() { return MetadataInteger; }
	set Sphere(arg1) { this.Sphere = arg1; return this; }
	get Sphere() { return Sphere; }
	set ViewpointGroup(arg1) { this.ViewpointGroup = arg1; return this; }
	get ViewpointGroup() { return ViewpointGroup; }
	set EspduTransform(arg1) { this.EspduTransform = arg1; return this; }
	get EspduTransform() { return EspduTransform; }
	set DISEntityTypeMapping(arg1) { this.DISEntityTypeMapping = arg1; return this; }
	get DISEntityTypeMapping() { return DISEntityTypeMapping; }
	set DISEntityManager(arg1) { this.DISEntityManager = arg1; return this; }
	get DISEntityManager() { return DISEntityManager; }
	set TransmitterPdu(arg1) { this.TransmitterPdu = arg1; return this; }
	get TransmitterPdu() { return TransmitterPdu; }
	set ReceiverPdu(arg1) { this.ReceiverPdu = arg1; return this; }
	get ReceiverPdu() { return ReceiverPdu; }
	set SignalPdu(arg1) { this.SignalPdu = arg1; return this; }
	get SignalPdu() { return SignalPdu; }
	set TextureTransform(arg1) { this.TextureTransform = arg1; return this; }
	get TextureTransform() { return TextureTransform; }
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	set PositionDamper(arg1) { this.PositionDamper = arg1; return this; }
	get PositionDamper() { return PositionDamper; }
	set OrientationDamper(arg1) { this.OrientationDamper = arg1; return this; }
	get OrientationDamper() { return OrientationDamper; }
	set OrientationChaser(arg1) { this.OrientationChaser = arg1; return this; }
	get OrientationChaser() { return OrientationChaser; }
	set ElevationGrid(arg1) { this.ElevationGrid = arg1; return this; }
	get ElevationGrid() { return ElevationGrid; }
	set PositionDamper2D(arg1) { this.PositionDamper2D = arg1; return this; }
	get PositionDamper2D() { return PositionDamper2D; }
	set PositionChaser(arg1) { this.PositionChaser = arg1; return this; }
	get PositionChaser() { return PositionChaser; }
	set ColorDamper(arg1) { this.ColorDamper = arg1; return this; }
	get ColorDamper() { return ColorDamper; }
	set PositionChaser2D(arg1) { this.PositionChaser2D = arg1; return this; }
	get PositionChaser2D() { return PositionChaser2D; }
	set ScalarDamper(arg1) { this.ScalarDamper = arg1; return this; }
	get ScalarDamper() { return ScalarDamper; }
	set GeoViewpoint(arg1) { this.GeoViewpoint = arg1; return this; }
	get GeoViewpoint() { return GeoViewpoint; }
	set GeoPositionInterpolator(arg1) { this.GeoPositionInterpolator = arg1; return this; }
	get GeoPositionInterpolator() { return GeoPositionInterpolator; }
	set GeoLocation(arg1) { this.GeoLocation = arg1; return this; }
	get GeoLocation() { return GeoLocation; }
	set GeoTouchSensor(arg1) { this.GeoTouchSensor = arg1; return this; }
	get GeoTouchSensor() { return GeoTouchSensor; }
	set GeoLOD(arg1) { this.GeoLOD = arg1; return this; }
	get GeoLOD() { return GeoLOD; }
	set GeoMetadata(arg1) { this.GeoMetadata = arg1; return this; }
	get GeoMetadata() { return GeoMetadata; }
	set StringSensor(arg1) { this.StringSensor = arg1; return this; }
	get StringSensor() { return StringSensor; }
	set NurbsCurve2D(arg1) { this.NurbsCurve2D = arg1; return this; }
	get NurbsCurve2D() { return NurbsCurve2D; }
	set NurbsPositionInterpolator(arg1) { this.NurbsPositionInterpolator = arg1; return this; }
	get NurbsPositionInterpolator() { return NurbsPositionInterpolator; }
	set Extrusion(arg1) { this.Extrusion = arg1; return this; }
	get Extrusion() { return Extrusion; }
	set Contour2D(arg1) { this.Contour2D = arg1; return this; }
	get Contour2D() { return Contour2D; }
	set ContourPolyline2D(arg1) { this.ContourPolyline2D = arg1; return this; }
	get ContourPolyline2D() { return ContourPolyline2D; }
	set CollidableShape(arg1) { this.CollidableShape = arg1; return this; }
	get CollidableShape() { return CollidableShape; }
	set RigidBodyCollection(arg1) { this.RigidBodyCollection = arg1; return this; }
	get RigidBodyCollection() { return RigidBodyCollection; }
	set CollisionSensor(arg1) { this.CollisionSensor = arg1; return this; }
	get CollisionSensor() { return CollisionSensor; }
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set DoubleAxisHingeJoint(arg1) { this.DoubleAxisHingeJoint = arg1; return this; }
	get DoubleAxisHingeJoint() { return DoubleAxisHingeJoint; }
	set Text(arg1) { this.Text = arg1; return this; }
	get Text() { return Text; }
	set VolumeData(arg1) { this.VolumeData = arg1; return this; }
	get VolumeData() { return VolumeData; }
	set IsoSurfaceVolumeData(arg1) { this.IsoSurfaceVolumeData = arg1; return this; }
	get IsoSurfaceVolumeData() { return IsoSurfaceVolumeData; }
	set SegmentedVolumeData(arg1) { this.SegmentedVolumeData = arg1; return this; }
	get SegmentedVolumeData() { return SegmentedVolumeData; }
	set BooleanTrigger(arg1) { this.BooleanTrigger = arg1; return this; }
	get BooleanTrigger() { return BooleanTrigger; }
	set IntegerTrigger(arg1) { this.IntegerTrigger = arg1; return this; }
	get IntegerTrigger() { return IntegerTrigger; }
	set TextureProjector(arg1) { this.TextureProjector = arg1; return this; }
	get TextureProjector() { return TextureProjector; }
	set FontStyle(arg1) { this.FontStyle = arg1; return this; }
	get FontStyle() { return FontStyle; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set LocalFog(arg1) { this.LocalFog = arg1; return this; }
	get LocalFog() { return LocalFog; }
	set AudioClip(arg1) { this.AudioClip = arg1; return this; }
	get AudioClip() { return AudioClip; }
	set HAnimSegment(arg1) { this.HAnimSegment = arg1; return this; }
	get HAnimSegment() { return HAnimSegment; }
	set HAnimJoint(arg1) { this.HAnimJoint = arg1; return this; }
	get HAnimJoint() { return HAnimJoint; }
	set HAnimHumanoid(arg1) { this.HAnimHumanoid = arg1; return this; }
	get HAnimHumanoid() { return HAnimHumanoid; }
	set HAnimSite(arg1) { this.HAnimSite = arg1; return this; }
	get HAnimSite() { return HAnimSite; }
	set Cylinder(arg1) { this.Cylinder = arg1; return this; }
	get Cylinder() { return Cylinder; }
	set GeoTransform(arg1) { this.GeoTransform = arg1; return this; }
	get GeoTransform() { return GeoTransform; }
	set Box(arg1) { this.Box = arg1; return this; }
	get Box() { return Box; }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set BufferAudioSource(arg1) { this.BufferAudioSource = arg1; return this; }
	get BufferAudioSource() { return BufferAudioSource; }
	set ListenerPointSource(arg1) { this.ListenerPointSource = arg1; return this; }
	get ListenerPointSource() { return ListenerPointSource; }
	set MicrophoneSource(arg1) { this.MicrophoneSource = arg1; return this; }
	get MicrophoneSource() { return MicrophoneSource; }
	set OscillatorSource(arg1) { this.OscillatorSource = arg1; return this; }
	get OscillatorSource() { return OscillatorSource; }
	set StreamAudioSource(arg1) { this.StreamAudioSource = arg1; return this; }
	get StreamAudioSource() { return StreamAudioSource; }
	set WaveShaper(arg1) { this.WaveShaper = arg1; return this; }
	get WaveShaper() { return WaveShaper; }
	set StreamAudioDestination(arg1) { this.StreamAudioDestination = arg1; return this; }
	get StreamAudioDestination() { return StreamAudioDestination; }
	set Gain(arg1) { this.Gain = arg1; return this; }
	get Gain() { return Gain; }
	set DynamicsCompressor(arg1) { this.DynamicsCompressor = arg1; return this; }
	get DynamicsCompressor() { return DynamicsCompressor; }
	set Delay(arg1) { this.Delay = arg1; return this; }
	get Delay() { return Delay; }
	set Convolver(arg1) { this.Convolver = arg1; return this; }
	get Convolver() { return Convolver; }
	set ChannelSplitter(arg1) { this.ChannelSplitter = arg1; return this; }
	get ChannelSplitter() { return ChannelSplitter; }
	set ChannelSelector(arg1) { this.ChannelSelector = arg1; return this; }
	get ChannelSelector() { return ChannelSelector; }
	set ChannelMerger(arg1) { this.ChannelMerger = arg1; return this; }
	get ChannelMerger() { return ChannelMerger; }
	set BiquadFilter(arg1) { this.BiquadFilter = arg1; return this; }
	get BiquadFilter() { return BiquadFilter; }
	set Analyser(arg1) { this.Analyser = arg1; return this; }
	get Analyser() { return Analyser; }
	set SpatialSound(arg1) { this.SpatialSound = arg1; return this; }
	get SpatialSound() { return SpatialSound; }
	set TextureBackground(arg1) { this.TextureBackground = arg1; return this; }
	get TextureBackground() { return TextureBackground; }
	set StaticGroup(arg1) { this.StaticGroup = arg1; return this; }
	get StaticGroup() { return StaticGroup; }
}
class WorldInfo {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set title(arg1) { this.title = arg1; return this; }
	get title() { return title;}
	addInfo(arg1) { this.info.push(...arg1); return this; }
	removeInfo(arg1) { info.splice(info.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set cssClass(arg1) { this.cssClass = arg1; return this; }
	get cssClass() { return cssClass;}
	set style(arg1) { this.style = arg1; return this; }
	get style() { return style;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class Background {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addSkyColor(arg1) { this.skyColor.push(...arg1); return this; }
	removeSkyColor(arg1) { skyColor.splice(skyColor.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addGroundColor(arg1) { this.groundColor.push(...arg1); return this; }
	removeGroundColor(arg1) { groundColor.splice(groundColor.findIndex(e => arg1.includes(e)), 1); }
	addGroundAngle(arg1) { this.groundAngle.push(...arg1); return this; }
	removeGroundAngle(arg1) { groundAngle.splice(groundAngle.findIndex(e => arg1.includes(e)), 1); }
	addSkyAngle(arg1) { this.skyAngle.push(...arg1); return this; }
	removeSkyAngle(arg1) { skyAngle.splice(skyAngle.findIndex(e => arg1.includes(e)), 1); }
	addBackUrl(arg1) { this.backUrl.push(...arg1); return this; }
	removeBackUrl(arg1) { backUrl.splice(backUrl.findIndex(e => arg1.includes(e)), 1); }
	addBottomUrl(arg1) { this.bottomUrl.push(...arg1); return this; }
	removeBottomUrl(arg1) { bottomUrl.splice(bottomUrl.findIndex(e => arg1.includes(e)), 1); }
	addFrontUrl(arg1) { this.frontUrl.push(...arg1); return this; }
	removeFrontUrl(arg1) { frontUrl.splice(frontUrl.findIndex(e => arg1.includes(e)), 1); }
	addLeftUrl(arg1) { this.leftUrl.push(...arg1); return this; }
	removeLeftUrl(arg1) { leftUrl.splice(leftUrl.findIndex(e => arg1.includes(e)), 1); }
	addRightUrl(arg1) { this.rightUrl.push(...arg1); return this; }
	removeRightUrl(arg1) { rightUrl.splice(rightUrl.findIndex(e => arg1.includes(e)), 1); }
	addTopUrl(arg1) { this.topUrl.push(...arg1); return this; }
	removeTopUrl(arg1) { topUrl.splice(topUrl.findIndex(e => arg1.includes(e)), 1); }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set transparency(arg1) { this.transparency = arg1; return this; }
	get transparency() { return transparency;}
}
class Viewpoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addOrientation(arg1) { this.orientation.push(...arg1); return this; }
	removeOrientation(arg1) { orientation.splice(orientation.findIndex(e => arg1.includes(e)), 1); }
	addPosition(arg1) { this.position.push(...arg1); return this; }
	removePosition(arg1) { position.splice(position.findIndex(e => arg1.includes(e)), 1); }
	set fieldOfView(arg1) { this.fieldOfView = arg1; return this; }
	get fieldOfView() { return fieldOfView;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set jump(arg1) { this.jump = arg1; return this; }
	get jump() { return jump;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addCenterOfRotation(arg1) { this.centerOfRotation.push(...arg1); return this; }
	removeCenterOfRotation(arg1) { centerOfRotation.splice(centerOfRotation.findIndex(e => arg1.includes(e)), 1); }
	set retainUserOffsets(arg1) { this.retainUserOffsets = arg1; return this; }
	get retainUserOffsets() { return retainUserOffsets;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set farDistance(arg1) { this.farDistance = arg1; return this; }
	get farDistance() { return farDistance;}
	set nearDistance(arg1) { this.nearDistance = arg1; return this; }
	get nearDistance() { return nearDistance;}
}
class CADAssembly {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
}
class CADPart {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
}
class CADFace {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set shape(arg1) { this.shape = arg1; return this; }
	get shape() { return shape; }
	set Transform(arg1) { this.Transform = arg1; return this; }
	get Transform() { return Transform; }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
}
class shape {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set geometry(arg1) { this.geometry = arg1; return this; }
	get geometry() { return geometry; }
	set appearance(arg1) { this.appearance = arg1; return this; }
	get appearance() { return appearance; }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
}
class Shape {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Cylinder(arg1) { this.Cylinder = arg1; return this; }
	get Cylinder() { return Cylinder; }
	set Appearance(arg1) { this.Appearance = arg1; return this; }
	get Appearance() { return Appearance; }
	set Disk2D(arg1) { this.Disk2D = arg1; return this; }
	get Disk2D() { return Disk2D; }
	set Text(arg1) { this.Text = arg1; return this; }
	get Text() { return Text; }
	set geometry(arg1) { this.geometry = arg1; return this; }
	get geometry() { return geometry; }
	set appearance(arg1) { this.appearance = arg1; return this; }
	get appearance() { return appearance; }
	set ProtoInstance(arg1) { this.ProtoInstance = arg1; return this; }
	get ProtoInstance() { return ProtoInstance; }
	set IndexedTriangleSet(arg1) { this.IndexedTriangleSet = arg1; return this; }
	get IndexedTriangleSet() { return IndexedTriangleSet; }
	set IndexedFaceSet(arg1) { this.IndexedFaceSet = arg1; return this; }
	get IndexedFaceSet() { return IndexedFaceSet; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set Box(arg1) { this.Box = arg1; return this; }
	get Box() { return Box; }
	set Cone(arg1) { this.Cone = arg1; return this; }
	get Cone() { return Cone; }
	set Sphere(arg1) { this.Sphere = arg1; return this; }
	get Sphere() { return Sphere; }
	set IndexedLineSet(arg1) { this.IndexedLineSet = arg1; return this; }
	get IndexedLineSet() { return IndexedLineSet; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set IndexedQuadSet(arg1) { this.IndexedQuadSet = arg1; return this; }
	get IndexedQuadSet() { return IndexedQuadSet; }
	set QuadSet(arg1) { this.QuadSet = arg1; return this; }
	get QuadSet() { return QuadSet; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set Extrusion(arg1) { this.Extrusion = arg1; return this; }
	get Extrusion() { return Extrusion; }
	set ElevationGrid(arg1) { this.ElevationGrid = arg1; return this; }
	get ElevationGrid() { return ElevationGrid; }
	set PointSet(arg1) { this.PointSet = arg1; return this; }
	get PointSet() { return PointSet; }
	set ArcClose2D(arg1) { this.ArcClose2D = arg1; return this; }
	get ArcClose2D() { return ArcClose2D; }
	set Arc2D(arg1) { this.Arc2D = arg1; return this; }
	get Arc2D() { return Arc2D; }
	set Rectangle2D(arg1) { this.Rectangle2D = arg1; return this; }
	get Rectangle2D() { return Rectangle2D; }
	set Circle2D(arg1) { this.Circle2D = arg1; return this; }
	get Circle2D() { return Circle2D; }
	set Polyline2D(arg1) { this.Polyline2D = arg1; return this; }
	get Polyline2D() { return Polyline2D; }
	set Polypoint2D(arg1) { this.Polypoint2D = arg1; return this; }
	get Polypoint2D() { return Polypoint2D; }
	set TriangleSet2D(arg1) { this.TriangleSet2D = arg1; return this; }
	get TriangleSet2D() { return TriangleSet2D; }
	set IndexedTriangleFanSet(arg1) { this.IndexedTriangleFanSet = arg1; return this; }
	get IndexedTriangleFanSet() { return IndexedTriangleFanSet; }
	set IndexedTriangleStripSet(arg1) { this.IndexedTriangleStripSet = arg1; return this; }
	get IndexedTriangleStripSet() { return IndexedTriangleStripSet; }
	set LineSet(arg1) { this.LineSet = arg1; return this; }
	get LineSet() { return LineSet; }
	set TriangleFanSet(arg1) { this.TriangleFanSet = arg1; return this; }
	get TriangleFanSet() { return TriangleFanSet; }
	set TriangleSet(arg1) { this.TriangleSet = arg1; return this; }
	get TriangleSet() { return TriangleSet; }
	set TriangleStripSet(arg1) { this.TriangleStripSet = arg1; return this; }
	get TriangleStripSet() { return TriangleStripSet; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set GeoElevationGrid(arg1) { this.GeoElevationGrid = arg1; return this; }
	get GeoElevationGrid() { return GeoElevationGrid; }
	set XvlShell(arg1) { this.XvlShell = arg1; return this; }
	get XvlShell() { return XvlShell; }
	set NurbsPatchSurface(arg1) { this.NurbsPatchSurface = arg1; return this; }
	get NurbsPatchSurface() { return NurbsPatchSurface; }
	set NurbsTrimmedSurface(arg1) { this.NurbsTrimmedSurface = arg1; return this; }
	get NurbsTrimmedSurface() { return NurbsTrimmedSurface; }
	set NurbsCurve(arg1) { this.NurbsCurve = arg1; return this; }
	get NurbsCurve() { return NurbsCurve; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	set NurbsSweptSurface(arg1) { this.NurbsSweptSurface = arg1; return this; }
	get NurbsSweptSurface() { return NurbsSweptSurface; }
	set NurbsSwungSurface(arg1) { this.NurbsSwungSurface = arg1; return this; }
	get NurbsSwungSurface() { return NurbsSwungSurface; }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
}
class geometry {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set bottom(arg1) { this.bottom = arg1; return this; }
	get bottom() { return bottom;}
	addHeight(arg1) { this.height.push(...arg1); return this; }
	removeHeight(arg1) { height.splice(height.findIndex(e => arg1.includes(e)), 1); }
	set radius(arg1) { this.radius = arg1; return this; }
	get radius() { return radius;}
	set top(arg1) { this.top = arg1; return this; }
	get top() { return top;}
	set solid(arg1) { this.solid = arg1; return this; }
	get solid() { return solid;}
	set innerRadius(arg1) { this.innerRadius = arg1; return this; }
	get innerRadius() { return innerRadius;}
	set outerRadius(arg1) { this.outerRadius = arg1; return this; }
	get outerRadius() { return outerRadius;}
	addString(arg1) { this.string.push(...arg1); return this; }
	removeString(arg1) { string.splice(string.findIndex(e => arg1.includes(e)), 1); }
	set fontStyle(arg1) { this.fontStyle = arg1; return this; }
	get fontStyle() { return fontStyle; }
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addFieldValue(arg1) { this.fieldValue.push(...arg1); return this; }
	removeFieldValue(arg1) { fieldValue.splice(fieldValue.findIndex(e => arg1.includes(e)), 1); }
	set side(arg1) { this.side = arg1; return this; }
	get side() { return side;}
	addIndex(arg1) { this.index.push(...arg1); return this; }
	removeIndex(arg1) { index.splice(index.findIndex(e => arg1.includes(e)), 1); }
	set coord(arg1) { this.coord = arg1; return this; }
	get coord() { return coord; }
	addCoordIndex(arg1) { this.coordIndex.push(...arg1); return this; }
	removeCoordIndex(arg1) { coordIndex.splice(coordIndex.findIndex(e => arg1.includes(e)), 1); }
	set creaseAngle(arg1) { this.creaseAngle = arg1; return this; }
	get creaseAngle() { return creaseAngle;}
	set normal(arg1) { this.normal = arg1; return this; }
	get normal() { return normal; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set texCoord(arg1) { this.texCoord = arg1; return this; }
	get texCoord() { return texCoord; }
	set color(arg1) { this.color = arg1; return this; }
	get color() { return color; }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addSize(arg1) { this.size.push(...arg1); return this; }
	removeSize(arg1) { size.splice(size.findIndex(e => arg1.includes(e)), 1); }
	set colorPerVertex(arg1) { this.colorPerVertex = arg1; return this; }
	get colorPerVertex() { return colorPerVertex;}
	set convex(arg1) { this.convex = arg1; return this; }
	get convex() { return convex;}
	addCrossSection(arg1) { this.crossSection.push(...arg1); return this; }
	removeCrossSection(arg1) { crossSection.splice(crossSection.findIndex(e => arg1.includes(e)), 1); }
	addOrientation(arg1) { this.orientation.push(...arg1); return this; }
	removeOrientation(arg1) { orientation.splice(orientation.findIndex(e => arg1.includes(e)), 1); }
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	addSpine(arg1) { this.spine.push(...arg1); return this; }
	removeSpine(arg1) { spine.splice(spine.findIndex(e => arg1.includes(e)), 1); }
	set bottomRadius(arg1) { this.bottomRadius = arg1; return this; }
	get bottomRadius() { return bottomRadius;}
	set xDimension(arg1) { this.xDimension = arg1; return this; }
	get xDimension() { return xDimension;}
	set xSpacing(arg1) { this.xSpacing = arg1; return this; }
	get xSpacing() { return xSpacing;}
	set zDimension(arg1) { this.zDimension = arg1; return this; }
	get zDimension() { return zDimension;}
	set zSpacing(arg1) { this.zSpacing = arg1; return this; }
	get zSpacing() { return zSpacing;}
	addColorIndex(arg1) { this.colorIndex.push(...arg1); return this; }
	removeColorIndex(arg1) { colorIndex.splice(colorIndex.findIndex(e => arg1.includes(e)), 1); }
	addNormalIndex(arg1) { this.normalIndex.push(...arg1); return this; }
	removeNormalIndex(arg1) { normalIndex.splice(normalIndex.findIndex(e => arg1.includes(e)), 1); }
	addTexCoordIndex(arg1) { this.texCoordIndex.push(...arg1); return this; }
	removeTexCoordIndex(arg1) { texCoordIndex.splice(texCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	set normalPerVertex(arg1) { this.normalPerVertex = arg1; return this; }
	get normalPerVertex() { return normalPerVertex;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set endAngle(arg1) { this.endAngle = arg1; return this; }
	get endAngle() { return endAngle;}
	set startAngle(arg1) { this.startAngle = arg1; return this; }
	get startAngle() { return startAngle;}
	addLineSegments(arg1) { this.lineSegments.push(...arg1); return this; }
	removeLineSegments(arg1) { lineSegments.splice(lineSegments.findIndex(e => arg1.includes(e)), 1); }
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	addVertices(arg1) { this.vertices.push(...arg1); return this; }
	removeVertices(arg1) { vertices.splice(vertices.findIndex(e => arg1.includes(e)), 1); }
	addLength(arg1) { this.length.push(...arg1); return this; }
	removeLength(arg1) { length.splice(length.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addFanCount(arg1) { this.fanCount.push(...arg1); return this; }
	removeFanCount(arg1) { fanCount.splice(fanCount.findIndex(e => arg1.includes(e)), 1); }
	set beginCap(arg1) { this.beginCap = arg1; return this; }
	get beginCap() { return beginCap;}
	set endCap(arg1) { this.endCap = arg1; return this; }
	get endCap() { return endCap;}
	set ccw(arg1) { this.ccw = arg1; return this; }
	get ccw() { return ccw;}
	addGeoGridOrigin(arg1) { this.geoGridOrigin.push(...arg1); return this; }
	removeGeoGridOrigin(arg1) { geoGridOrigin.splice(geoGridOrigin.findIndex(e => arg1.includes(e)), 1); }
	set yScale(arg1) { this.yScale = arg1; return this; }
	get yScale() { return yScale;}
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
	addGeoSystem(arg1) { this.geoSystem.push(...arg1); return this; }
	removeGeoSystem(arg1) { geoSystem.splice(geoSystem.findIndex(e => arg1.includes(e)), 1); }
	set maxExtent(arg1) { this.maxExtent = arg1; return this; }
	get maxExtent() { return maxExtent;}
	addFaceCoordIndex(arg1) { this.faceCoordIndex.push(...arg1); return this; }
	removeFaceCoordIndex(arg1) { faceCoordIndex.splice(faceCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	set shellType(arg1) { this.shellType = arg1; return this; }
	get shellType() { return shellType;}
	set numberOfDivisions(arg1) { this.numberOfDivisions = arg1; return this; }
	get numberOfDivisions() { return numberOfDivisions;}
	addVertexRound(arg1) { this.vertexRound.push(...arg1); return this; }
	removeVertexRound(arg1) { vertexRound.splice(vertexRound.findIndex(e => arg1.includes(e)), 1); }
	addEdgeBeginCoordIndex(arg1) { this.edgeBeginCoordIndex.push(...arg1); return this; }
	removeEdgeBeginCoordIndex(arg1) { edgeBeginCoordIndex.splice(edgeBeginCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	addEdgeEndCoordIndex(arg1) { this.edgeEndCoordIndex.push(...arg1); return this; }
	removeEdgeEndCoordIndex(arg1) { edgeEndCoordIndex.splice(edgeEndCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	addEdgeRound(arg1) { this.edgeRound.push(...arg1); return this; }
	removeEdgeRound(arg1) { edgeRound.splice(edgeRound.findIndex(e => arg1.includes(e)), 1); }
	addEdgeBeginVector(arg1) { this.edgeBeginVector.push(...arg1); return this; }
	removeEdgeBeginVector(arg1) { edgeBeginVector.splice(edgeBeginVector.findIndex(e => arg1.includes(e)), 1); }
	addEdgeEndVector(arg1) { this.edgeEndVector.push(...arg1); return this; }
	removeEdgeEndVector(arg1) { edgeEndVector.splice(edgeEndVector.findIndex(e => arg1.includes(e)), 1); }
	addFaceEmpty(arg1) { this.faceEmpty.push(...arg1); return this; }
	removeFaceEmpty(arg1) { faceEmpty.splice(faceEmpty.findIndex(e => arg1.includes(e)), 1); }
	addFaceHidden(arg1) { this.faceHidden.push(...arg1); return this; }
	removeFaceHidden(arg1) { faceHidden.splice(faceHidden.findIndex(e => arg1.includes(e)), 1); }
	addFaceTexCoordIndex(arg1) { this.faceTexCoordIndex.push(...arg1); return this; }
	removeFaceTexCoordIndex(arg1) { faceTexCoordIndex.splice(faceTexCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	set uClosed(arg1) { this.uClosed = arg1; return this; }
	get uClosed() { return uClosed;}
	set uDimension(arg1) { this.uDimension = arg1; return this; }
	get uDimension() { return uDimension;}
	addUKnot(arg1) { this.uKnot.push(...arg1); return this; }
	removeUKnot(arg1) { uKnot.splice(uKnot.findIndex(e => arg1.includes(e)), 1); }
	set uOrder(arg1) { this.uOrder = arg1; return this; }
	get uOrder() { return uOrder;}
	set vClosed(arg1) { this.vClosed = arg1; return this; }
	get vClosed() { return vClosed;}
	set vDimension(arg1) { this.vDimension = arg1; return this; }
	get vDimension() { return vDimension;}
	addVKnot(arg1) { this.vKnot.push(...arg1); return this; }
	removeVKnot(arg1) { vKnot.splice(vKnot.findIndex(e => arg1.includes(e)), 1); }
	set vOrder(arg1) { this.vOrder = arg1; return this; }
	get vOrder() { return vOrder;}
	set controlPoint(arg1) { this.controlPoint = arg1; return this; }
	get controlPoint() { return controlPoint; }
	set uTessellation(arg1) { this.uTessellation = arg1; return this; }
	get uTessellation() { return uTessellation;}
	set vTessellation(arg1) { this.vTessellation = arg1; return this; }
	get vTessellation() { return vTessellation;}
	addWeight(arg1) { this.weight.push(...arg1); return this; }
	removeWeight(arg1) { weight.splice(weight.findIndex(e => arg1.includes(e)), 1); }
	addVertexCount(arg1) { this.vertexCount.push(...arg1); return this; }
	removeVertexCount(arg1) { vertexCount.splice(vertexCount.findIndex(e => arg1.includes(e)), 1); }
	addTrimmingContour(arg1) { this.trimmingContour.push(...arg1); return this; }
	removeTrimmingContour(arg1) { trimmingContour.splice(trimmingContour.findIndex(e => arg1.includes(e)), 1); }
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tessellation(arg1) { this.tessellation = arg1; return this; }
	get tessellation() { return tessellation;}
	set shape(arg1) { this.shape = arg1; return this; }
	get shape() { return shape; }
	set method(arg1) { this.method = arg1; return this; }
	get method() { return method;}
	set crossSectionCurve(arg1) { this.crossSectionCurve = arg1; return this; }
	get crossSectionCurve() { return crossSectionCurve; }
	set trajectoryCurve(arg1) { this.trajectoryCurve = arg1; return this; }
	get trajectoryCurve() { return trajectoryCurve; }
	set profileCurve(arg1) { this.profileCurve = arg1; return this; }
	get profileCurve() { return profileCurve; }
	addStripCount(arg1) { this.stripCount.push(...arg1); return this; }
	removeStripCount(arg1) { stripCount.splice(stripCount.findIndex(e => arg1.includes(e)), 1); }
	set Sphere(arg1) { this.Sphere = arg1; return this; }
	get Sphere() { return Sphere; }
	set Text(arg1) { this.Text = arg1; return this; }
	get Text() { return Text; }
	set closureType(arg1) { this.closureType = arg1; return this; }
	get closureType() { return closureType;}
}
class appearance {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set material(arg1) { this.material = arg1; return this; }
	get material() { return material; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set texture(arg1) { this.texture = arg1; return this; }
	get texture() { return texture; }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set textureTransform(arg1) { this.textureTransform = arg1; return this; }
	get textureTransform() { return textureTransform; }
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set fillProperties(arg1) { this.fillProperties = arg1; return this; }
	get fillProperties() { return fillProperties; }
	set lineProperties(arg1) { this.lineProperties = arg1; return this; }
	get lineProperties() { return lineProperties; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addPointProperties(arg1) { this.pointProperties.push(...arg1); return this; }
	removePointProperties(arg1) { pointProperties.splice(pointProperties.findIndex(e => arg1.includes(e)), 1); }
	addShaders(arg1) { this.shaders.push(...arg1); return this; }
	removeShaders(arg1) { shaders.splice(shaders.findIndex(e => arg1.includes(e)), 1); }
	addFieldValue(arg1) { this.fieldValue.push(...arg1); return this; }
	removeFieldValue(arg1) { fieldValue.splice(fieldValue.findIndex(e => arg1.includes(e)), 1); }
	addAcousticProperties(arg1) { this.acousticProperties.push(...arg1); return this; }
	removeAcousticProperties(arg1) { acousticProperties.splice(acousticProperties.findIndex(e => arg1.includes(e)), 1); }
	set alphaMode(arg1) { this.alphaMode = arg1; return this; }
	get alphaMode() { return alphaMode;}
	set alphaCutoff(arg1) { this.alphaCutoff = arg1; return this; }
	get alphaCutoff() { return alphaCutoff;}
	set Appearance(arg1) { this.Appearance = arg1; return this; }
	get Appearance() { return Appearance; }
}
class Appearance {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Material(arg1) { this.Material = arg1; return this; }
	get Material() { return Material; }
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set TextureTransform(arg1) { this.TextureTransform = arg1; return this; }
	get TextureTransform() { return TextureTransform; }
	set FillProperties(arg1) { this.FillProperties = arg1; return this; }
	get FillProperties() { return FillProperties; }
	set LineProperties(arg1) { this.LineProperties = arg1; return this; }
	get LineProperties() { return LineProperties; }
	set ProtoInstance(arg1) { this.ProtoInstance = arg1; return this; }
	get ProtoInstance() { return ProtoInstance; }
	set PixelTexture(arg1) { this.PixelTexture = arg1; return this; }
	get PixelTexture() { return PixelTexture; }
	set MultiTexture(arg1) { this.MultiTexture = arg1; return this; }
	get MultiTexture() { return MultiTexture; }
	set MultiTextureTransform(arg1) { this.MultiTextureTransform = arg1; return this; }
	get MultiTextureTransform() { return MultiTextureTransform; }
	set material(arg1) { this.material = arg1; return this; }
	get material() { return material; }
	set MovieTexture(arg1) { this.MovieTexture = arg1; return this; }
	get MovieTexture() { return MovieTexture; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set texture(arg1) { this.texture = arg1; return this; }
	get texture() { return texture; }
	set TwoSidedMaterial(arg1) { this.TwoSidedMaterial = arg1; return this; }
	get TwoSidedMaterial() { return TwoSidedMaterial; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set PhysicalMaterial(arg1) { this.PhysicalMaterial = arg1; return this; }
	get PhysicalMaterial() { return PhysicalMaterial; }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
}
class material {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addDiffuseColor(arg1) { this.diffuseColor.push(...arg1); return this; }
	removeDiffuseColor(arg1) { diffuseColor.splice(diffuseColor.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
	set shininess(arg1) { this.shininess = arg1; return this; }
	get shininess() { return shininess;}
	addSpecularColor(arg1) { this.specularColor.push(...arg1); return this; }
	removeSpecularColor(arg1) { specularColor.splice(specularColor.findIndex(e => arg1.includes(e)), 1); }
	addEmissiveColor(arg1) { this.emissiveColor.push(...arg1); return this; }
	removeEmissiveColor(arg1) { emissiveColor.splice(emissiveColor.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set transparency(arg1) { this.transparency = arg1; return this; }
	get transparency() { return transparency;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addFieldValue(arg1) { this.fieldValue.push(...arg1); return this; }
	removeFieldValue(arg1) { fieldValue.splice(fieldValue.findIndex(e => arg1.includes(e)), 1); }
	addBackDiffuseColor(arg1) { this.backDiffuseColor.push(...arg1); return this; }
	removeBackDiffuseColor(arg1) { backDiffuseColor.splice(backDiffuseColor.findIndex(e => arg1.includes(e)), 1); }
	set separateBackColor(arg1) { this.separateBackColor = arg1; return this; }
	get separateBackColor() { return separateBackColor;}
	set baseTextureMapping(arg1) { this.baseTextureMapping = arg1; return this; }
	get baseTextureMapping() { return baseTextureMapping;}
	set metallic(arg1) { this.metallic = arg1; return this; }
	get metallic() { return metallic;}
	set roughness(arg1) { this.roughness = arg1; return this; }
	get roughness() { return roughness;}
	addBaseTexture(arg1) { this.baseTexture.push(...arg1); return this; }
	removeBaseTexture(arg1) { baseTexture.splice(baseTexture.findIndex(e => arg1.includes(e)), 1); }
	set metallicRoughnessTextureMapping(arg1) { this.metallicRoughnessTextureMapping = arg1; return this; }
	get metallicRoughnessTextureMapping() { return metallicRoughnessTextureMapping;}
	set normalTextureMapping(arg1) { this.normalTextureMapping = arg1; return this; }
	get normalTextureMapping() { return normalTextureMapping;}
	set occlusionTextureMapping(arg1) { this.occlusionTextureMapping = arg1; return this; }
	get occlusionTextureMapping() { return occlusionTextureMapping;}
	addNormalTexture(arg1) { this.normalTexture.push(...arg1); return this; }
	removeNormalTexture(arg1) { normalTexture.splice(normalTexture.findIndex(e => arg1.includes(e)), 1); }
	addMetallicRoughnessTexture(arg1) { this.metallicRoughnessTexture.push(...arg1); return this; }
	removeMetallicRoughnessTexture(arg1) { metallicRoughnessTexture.splice(metallicRoughnessTexture.findIndex(e => arg1.includes(e)), 1); }
	addOcclusionTexture(arg1) { this.occlusionTexture.push(...arg1); return this; }
	removeOcclusionTexture(arg1) { occlusionTexture.splice(occlusionTexture.findIndex(e => arg1.includes(e)), 1); }
	addBaseColor(arg1) { this.baseColor.push(...arg1); return this; }
	removeBaseColor(arg1) { baseColor.splice(baseColor.findIndex(e => arg1.includes(e)), 1); }
	set emissiveTextureMapping(arg1) { this.emissiveTextureMapping = arg1; return this; }
	get emissiveTextureMapping() { return emissiveTextureMapping;}
	addEmissiveTexture(arg1) { this.emissiveTexture.push(...arg1); return this; }
	removeEmissiveTexture(arg1) { emissiveTexture.splice(emissiveTexture.findIndex(e => arg1.includes(e)), 1); }
	set Material(arg1) { this.Material = arg1; return this; }
	get Material() { return Material; }
	set backTransparency(arg1) { this.backTransparency = arg1; return this; }
	get backTransparency() { return backTransparency;}
}
class ExternProtoDeclare {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set appinfo(arg1) { this.appinfo = arg1; return this; }
	get appinfo() { return appinfo;}
	set documentation(arg1) { this.documentation = arg1; return this; }
	get documentation() { return documentation;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	addField(arg1) { this.field.push(...arg1); return this; }
	removeField(arg1) { field.splice(field.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class field {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set accessType(arg1) { this.accessType = arg1; return this; }
	get accessType() { return accessType;}
	set type(arg1) { this.type = arg1; return this; }
	get type() { return type;}
	set appinfo(arg1) { this.appinfo = arg1; return this; }
	get appinfo() { return appinfo;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set documentation(arg1) { this.documentation = arg1; return this; }
	get documentation() { return documentation;}
}
class Transform {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataDouble(arg1) { this.MetadataDouble = arg1; return this; }
	get MetadataDouble() { return MetadataDouble; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set MetadataFloat(arg1) { this.MetadataFloat = arg1; return this; }
	get MetadataFloat() { return MetadataFloat; }
	set MetadataInteger(arg1) { this.MetadataInteger = arg1; return this; }
	get MetadataInteger() { return MetadataInteger; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	addScaleOrientation(arg1) { this.scaleOrientation.push(...arg1); return this; }
	removeScaleOrientation(arg1) { scaleOrientation.splice(scaleOrientation.findIndex(e => arg1.includes(e)), 1); }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	addSkin(arg1) { this.skin.push(...arg1); return this; }
	removeSkin(arg1) { skin.splice(skin.findIndex(e => arg1.includes(e)), 1); }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
}
class Anchor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addParameter(arg1) { this.parameter.push(...arg1); return this; }
	removeParameter(arg1) { parameter.splice(parameter.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
}
class Text {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set FontStyle(arg1) { this.FontStyle = arg1; return this; }
	get FontStyle() { return FontStyle; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addString(arg1) { this.string.push(...arg1); return this; }
	removeString(arg1) { string.splice(string.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addFontStyle(arg1) { this.fontStyle.push(...arg1); return this; }
	removeFontStyle(arg1) { fontStyle.splice(fontStyle.findIndex(e => arg1.includes(e)), 1); }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
}
class fontStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addJustify(arg1) { this.justify.push(...arg1); return this; }
	removeJustify(arg1) { justify.splice(justify.findIndex(e => arg1.includes(e)), 1); }
	set size(arg1) { this.size = arg1; return this; }
	get size() { return size;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set style(arg1) { this.style = arg1; return this; }
	get style() { return style;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addFamily(arg1) { this.family.push(...arg1); return this; }
	removeFamily(arg1) { family.splice(family.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set spacing(arg1) { this.spacing = arg1; return this; }
	get spacing() { return spacing;}
	set horizontal(arg1) { this.horizontal = arg1; return this; }
	get horizontal() { return horizontal;}
	set leftToRight(arg1) { this.leftToRight = arg1; return this; }
	get leftToRight() { return leftToRight;}
	set topToBottom(arg1) { this.topToBottom = arg1; return this; }
	get topToBottom() { return topToBottom;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set FontStyle(arg1) { this.FontStyle = arg1; return this; }
	get FontStyle() { return FontStyle; }
}
class fieldValue {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set value(arg1) { this.value = arg1; return this; }
	get value() { return value;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class Coordinate {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class ProtoInstance {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addFieldValue(arg1) { this.fieldValue.push(...arg1); return this; }
	removeFieldValue(arg1) { fieldValue.splice(fieldValue.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class ProtoDeclare {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set appinfo(arg1) { this.appinfo = arg1; return this; }
	get appinfo() { return appinfo;}
	set documentation(arg1) { this.documentation = arg1; return this; }
	get documentation() { return documentation;}
	addField(arg1) { this.field.push(...arg1); return this; }
	removeField(arg1) { field.splice(field.findIndex(e => arg1.includes(e)), 1); }
	set ProtoInterface(arg1) { this.ProtoInterface = arg1; return this; }
	get ProtoInterface() { return ProtoInterface; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set ProtoBody(arg1) { this.ProtoBody = arg1; return this; }
	get ProtoBody() { return ProtoBody; }
}
class IndexedFaceSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set coord(arg1) { this.coord = arg1; return this; }
	get coord() { return coord; }
	addCoordIndex(arg1) { this.coordIndex.push(...arg1); return this; }
	removeCoordIndex(arg1) { coordIndex.splice(coordIndex.findIndex(e => arg1.includes(e)), 1); }
	set solid(arg1) { this.solid = arg1; return this; }
	get solid() { return solid;}
	set MultiTextureCoordinate(arg1) { this.MultiTextureCoordinate = arg1; return this; }
	get MultiTextureCoordinate() { return MultiTextureCoordinate; }
	set GeoCoordinate(arg1) { this.GeoCoordinate = arg1; return this; }
	get GeoCoordinate() { return GeoCoordinate; }
	set normal(arg1) { this.normal = arg1; return this; }
	get normal() { return normal; }
	set texCoord(arg1) { this.texCoord = arg1; return this; }
	get texCoord() { return texCoord; }
	set creaseAngle(arg1) { this.creaseAngle = arg1; return this; }
	get creaseAngle() { return creaseAngle;}
	set ColorRGBA(arg1) { this.ColorRGBA = arg1; return this; }
	get ColorRGBA() { return ColorRGBA; }
	set convex(arg1) { this.convex = arg1; return this; }
	get convex() { return convex;}
}
class connect {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set nodeField(arg1) { this.nodeField = arg1; return this; }
	get nodeField() { return nodeField;}
	set protoField(arg1) { this.protoField = arg1; return this; }
	get protoField() { return protoField;}
}
class Group {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataBoolean(arg1) { this.MetadataBoolean = arg1; return this; }
	get MetadataBoolean() { return MetadataBoolean; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	addComment(arg1) { this.comment.push(...arg1); return this; }
	removeComment(arg1) { comment.splice(comment.findIndex(e => arg1.includes(e)), 1); }
}
class Script {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set directOutput(arg1) { this.directOutput = arg1; return this; }
	get directOutput() { return directOutput;}
	addField(arg1) { this.field.push(...arg1); return this; }
	removeField(arg1) { field.splice(field.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addSourceCode(arg1) { this.sourceCode.push(...arg1); return this; }
	removeSourceCode(arg1) { sourceCode.splice(sourceCode.findIndex(e => arg1.includes(e)), 1); }
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set mustEvaluate(arg1) { this.mustEvaluate = arg1; return this; }
	get mustEvaluate() { return mustEvaluate;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class metadata {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
}
class MetadataString {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class IndexedTriangleSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set TextureCoordinateGenerator(arg1) { this.TextureCoordinateGenerator = arg1; return this; }
	get TextureCoordinateGenerator() { return TextureCoordinateGenerator; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set MultiTextureCoordinate(arg1) { this.MultiTextureCoordinate = arg1; return this; }
	get MultiTextureCoordinate() { return MultiTextureCoordinate; }
}
class coord {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
}
class CADLayer {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class normal {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addVector(arg1) { this.vector.push(...arg1); return this; }
	removeVector(arg1) { vector.splice(vector.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class Inline {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set load(arg1) { this.load = arg1; return this; }
	get load() { return load;}
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class NavigationInfo {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set type(arg1) { this.type = arg1; return this; }
	get type() { return type;}
	addAvatarSize(arg1) { this.avatarSize.push(...arg1); return this; }
	removeAvatarSize(arg1) { avatarSize.splice(avatarSize.findIndex(e => arg1.includes(e)), 1); }
	set headlight(arg1) { this.headlight = arg1; return this; }
	get headlight() { return headlight;}
	set speed(arg1) { this.speed = arg1; return this; }
	get speed() { return speed;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addTransitionType(arg1) { this.transitionType.push(...arg1); return this; }
	removeTransitionType(arg1) { transitionType.splice(transitionType.findIndex(e => arg1.includes(e)), 1); }
	set visibilityLimit(arg1) { this.visibilityLimit = arg1; return this; }
	get visibilityLimit() { return visibilityLimit;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
}
class ClipPlane {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addPlane(arg1) { this.plane.push(...arg1); return this; }
	removePlane(arg1) { plane.splice(plane.findIndex(e => arg1.includes(e)), 1); }
}
class PointLight {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
	addLocation(arg1) { this.location.push(...arg1); return this; }
	removeLocation(arg1) { location.splice(location.findIndex(e => arg1.includes(e)), 1); }
	set radius(arg1) { this.radius = arg1; return this; }
	get radius() { return radius;}
	addAttenuation(arg1) { this.attenuation.push(...arg1); return this; }
	removeAttenuation(arg1) { attenuation.splice(attenuation.findIndex(e => arg1.includes(e)), 1); }
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set on(arg1) { this.on = arg1; return this; }
	get on() { return on;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set intensity(arg1) { this.intensity = arg1; return this; }
	get intensity() { return intensity;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set global(arg1) { this.global = arg1; return this; }
	get global() { return global;}
	set shadows(arg1) { this.shadows = arg1; return this; }
	get shadows() { return shadows;}
}
class IndexedLineSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set coord(arg1) { this.coord = arg1; return this; }
	get coord() { return coord; }
	addCoordIndex(arg1) { this.coordIndex.push(...arg1); return this; }
	removeCoordIndex(arg1) { coordIndex.splice(coordIndex.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set ColorRGBA(arg1) { this.ColorRGBA = arg1; return this; }
	get ColorRGBA() { return ColorRGBA; }
	set CoordinateDouble(arg1) { this.CoordinateDouble = arg1; return this; }
	get CoordinateDouble() { return CoordinateDouble; }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set GeoCoordinate(arg1) { this.GeoCoordinate = arg1; return this; }
	get GeoCoordinate() { return GeoCoordinate; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
}
class PositionInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
}
class IndexedQuadSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class texCoord {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addTexCoord(arg1) { this.texCoord.push(...arg1); return this; }
	removeTexCoord(arg1) { texCoord.splice(texCoord.findIndex(e => arg1.includes(e)), 1); }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set TextureCoordinateGenerator(arg1) { this.TextureCoordinateGenerator = arg1; return this; }
	get TextureCoordinateGenerator() { return TextureCoordinateGenerator; }
}
class texture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addImage(arg1) { this.image.push(...arg1); return this; }
	removeImage(arg1) { image.splice(image.findIndex(e => arg1.includes(e)), 1); }
	set repeatS(arg1) { this.repeatS = arg1; return this; }
	get repeatS() { return repeatS;}
	set repeatT(arg1) { this.repeatT = arg1; return this; }
	get repeatT() { return repeatT;}
	set loop(arg1) { this.loop = arg1; return this; }
	get loop() { return loop;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set speed(arg1) { this.speed = arg1; return this; }
	get speed() { return speed;}
	set stopTime(arg1) { this.stopTime = arg1; return this; }
	get stopTime() { return stopTime;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set startTime(arg1) { this.startTime = arg1; return this; }
	get startTime() { return startTime;}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	set alpha(arg1) { this.alpha = arg1; return this; }
	get alpha() { return alpha;}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	addFunction(arg1) { this.functions.push(...arg1); return this; }
	removeFunction(arg1) { functions.splice(functions.findIndex(e => arg1.includes(e)), 1); }
	addMode(arg1) { this.mode.push(...arg1); return this; }
	removeMode(arg1) { mode.splice(mode.findIndex(e => arg1.includes(e)), 1); }
	addSource(arg1) { this.source.push(...arg1); return this; }
	removeSource(arg1) { source.splice(source.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addTexture(arg1) { this.texture.push(...arg1); return this; }
	removeTexture(arg1) { texture.splice(texture.findIndex(e => arg1.includes(e)), 1); }
	set MovieTexture(arg1) { this.MovieTexture = arg1; return this; }
	get MovieTexture() { return MovieTexture; }
	set PixelTexture(arg1) { this.PixelTexture = arg1; return this; }
	get PixelTexture() { return PixelTexture; }
	set GeneratedCubeMapTexture(arg1) { this.GeneratedCubeMapTexture = arg1; return this; }
	get GeneratedCubeMapTexture() { return GeneratedCubeMapTexture; }
}
class QuadSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class color {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class Material {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	addDiffuseColor(arg1) { this.diffuseColor.push(...arg1); return this; }
	removeDiffuseColor(arg1) { diffuseColor.splice(diffuseColor.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
	set shininess(arg1) { this.shininess = arg1; return this; }
	get shininess() { return shininess;}
	addSpecularColor(arg1) { this.specularColor.push(...arg1); return this; }
	removeSpecularColor(arg1) { specularColor.splice(specularColor.findIndex(e => arg1.includes(e)), 1); }
	addEmissiveColor(arg1) { this.emissiveColor.push(...arg1); return this; }
	removeEmissiveColor(arg1) { emissiveColor.splice(emissiveColor.findIndex(e => arg1.includes(e)), 1); }
	set transparency(arg1) { this.transparency = arg1; return this; }
	get transparency() { return transparency;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class DirectionalLight {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addDirection(arg1) { this.direction.push(...arg1); return this; }
	removeDirection(arg1) { direction.splice(direction.findIndex(e => arg1.includes(e)), 1); }
	set intensity(arg1) { this.intensity = arg1; return this; }
	get intensity() { return intensity;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set global(arg1) { this.global = arg1; return this; }
	get global() { return global;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set on(arg1) { this.on = arg1; return this; }
	get on() { return on;}
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
}
class Billboard {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addAxisOfRotation(arg1) { this.axisOfRotation.push(...arg1); return this; }
	removeAxisOfRotation(arg1) { axisOfRotation.splice(axisOfRotation.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class TouchSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class ROUTE {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set fromField(arg1) { this.fromField = arg1; return this; }
	get fromField() { return fromField;}
	set fromNode(arg1) { this.fromNode = arg1; return this; }
	get fromNode() { return fromNode;}
	set toField(arg1) { this.toField = arg1; return this; }
	get toField() { return toField;}
	set toNode(arg1) { this.toNode = arg1; return this; }
	get toNode() { return toNode;}
}
class TimeSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set cycleInterval(arg1) { this.cycleInterval = arg1; return this; }
	get cycleInterval() { return cycleInterval;}
	set startTime(arg1) { this.startTime = arg1; return this; }
	get startTime() { return startTime;}
	set loop(arg1) { this.loop = arg1; return this; }
	get loop() { return loop;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set stopTime(arg1) { this.stopTime = arg1; return this; }
	get stopTime() { return stopTime;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class CoordinateInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class Extrusion {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set beginCap(arg1) { this.beginCap = arg1; return this; }
	get beginCap() { return beginCap;}
	set creaseAngle(arg1) { this.creaseAngle = arg1; return this; }
	get creaseAngle() { return creaseAngle;}
	set endCap(arg1) { this.endCap = arg1; return this; }
	get endCap() { return endCap;}
}
class OrientationInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class Fog {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set visibilityRange(arg1) { this.visibilityRange = arg1; return this; }
	get visibilityRange() { return visibilityRange;}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set fogType(arg1) { this.fogType = arg1; return this; }
	get fogType() { return fogType;}
}
class Collision {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set proxy(arg1) { this.proxy = arg1; return this; }
	get proxy() { return proxy; }
	set Transform(arg1) { this.Transform = arg1; return this; }
	get Transform() { return Transform; }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
}
class LOD {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addRange(arg1) { this.range.push(...arg1); return this; }
	removeRange(arg1) { range.splice(range.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	set forceTransitions(arg1) { this.forceTransitions = arg1; return this; }
	get forceTransitions() { return forceTransitions;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class Switch {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set whichChoice(arg1) { this.whichChoice = arg1; return this; }
	get whichChoice() { return whichChoice;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addBboxCenter(arg1) { this.bboxCenter.push(...arg1); return this; }
	removeBboxCenter(arg1) { bboxCenter.splice(bboxCenter.findIndex(e => arg1.includes(e)), 1); }
	addBboxSize(arg1) { this.bboxSize.push(...arg1); return this; }
	removeBboxSize(arg1) { bboxSize.splice(bboxSize.findIndex(e => arg1.includes(e)), 1); }
}
class textureTransform {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	set rotation(arg1) { this.rotation = arg1; return this; }
	get rotation() { return rotation;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addTextureTransform(arg1) { this.textureTransform.push(...arg1); return this; }
	removeTextureTransform(arg1) { textureTransform.splice(textureTransform.findIndex(e => arg1.includes(e)), 1); }
	set TextureTransform(arg1) { this.TextureTransform = arg1; return this; }
	get TextureTransform() { return TextureTransform; }
}
class PointSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set coord(arg1) { this.coord = arg1; return this; }
	get coord() { return coord; }
	set GeoCoordinate(arg1) { this.GeoCoordinate = arg1; return this; }
	get GeoCoordinate() { return GeoCoordinate; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
}
class Sound {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set AudioClip(arg1) { this.AudioClip = arg1; return this; }
	get AudioClip() { return AudioClip; }
	set source(arg1) { this.source = arg1; return this; }
	get source() { return source; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set minBack(arg1) { this.minBack = arg1; return this; }
	get minBack() { return minBack;}
	set minFront(arg1) { this.minFront = arg1; return this; }
	get minFront() { return minFront;}
	set maxBack(arg1) { this.maxBack = arg1; return this; }
	get maxBack() { return maxBack;}
	set maxFront(arg1) { this.maxFront = arg1; return this; }
	get maxFront() { return maxFront;}
	addDirection(arg1) { this.direction.push(...arg1); return this; }
	removeDirection(arg1) { direction.splice(direction.findIndex(e => arg1.includes(e)), 1); }
	addLocation(arg1) { this.location.push(...arg1); return this; }
	removeLocation(arg1) { location.splice(location.findIndex(e => arg1.includes(e)), 1); }
	set priority(arg1) { this.priority = arg1; return this; }
	get priority() { return priority;}
	set MovieTexture(arg1) { this.MovieTexture = arg1; return this; }
	get MovieTexture() { return MovieTexture; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set intensity(arg1) { this.intensity = arg1; return this; }
	get intensity() { return intensity;}
	set spatialize(arg1) { this.spatialize = arg1; return this; }
	get spatialize() { return spatialize;}
}
class source {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set loop(arg1) { this.loop = arg1; return this; }
	get loop() { return loop;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set pitch(arg1) { this.pitch = arg1; return this; }
	get pitch() { return pitch;}
	set stopTime(arg1) { this.stopTime = arg1; return this; }
	get stopTime() { return stopTime;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set startTime(arg1) { this.startTime = arg1; return this; }
	get startTime() { return startTime;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class SpotLight {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set beamWidth(arg1) { this.beamWidth = arg1; return this; }
	get beamWidth() { return beamWidth;}
	set cutOffAngle(arg1) { this.cutOffAngle = arg1; return this; }
	get cutOffAngle() { return cutOffAngle;}
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	addDirection(arg1) { this.direction.push(...arg1); return this; }
	removeDirection(arg1) { direction.splice(direction.findIndex(e => arg1.includes(e)), 1); }
	set on(arg1) { this.on = arg1; return this; }
	get on() { return on;}
	set radius(arg1) { this.radius = arg1; return this; }
	get radius() { return radius;}
	set intensity(arg1) { this.intensity = arg1; return this; }
	get intensity() { return intensity;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addLocation(arg1) { this.location.push(...arg1); return this; }
	removeLocation(arg1) { location.splice(location.findIndex(e => arg1.includes(e)), 1); }
	addAttenuation(arg1) { this.attenuation.push(...arg1); return this; }
	removeAttenuation(arg1) { attenuation.splice(attenuation.findIndex(e => arg1.includes(e)), 1); }
}
class ColorInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class NormalInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class ScalarInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class CylinderSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set diskAngle(arg1) { this.diskAngle = arg1; return this; }
	get diskAngle() { return diskAngle;}
	set maxAngle(arg1) { this.maxAngle = arg1; return this; }
	get maxAngle() { return maxAngle;}
	set minAngle(arg1) { this.minAngle = arg1; return this; }
	get minAngle() { return minAngle;}
	set autoOffset(arg1) { this.autoOffset = arg1; return this; }
	get autoOffset() { return autoOffset;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	set offset(arg1) { this.offset = arg1; return this; }
	get offset() { return offset;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class PlaneSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set autoOffset(arg1) { this.autoOffset = arg1; return this; }
	get autoOffset() { return autoOffset;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addMaxPosition(arg1) { this.maxPosition.push(...arg1); return this; }
	removeMaxPosition(arg1) { maxPosition.splice(maxPosition.findIndex(e => arg1.includes(e)), 1); }
	addMinPosition(arg1) { this.minPosition.push(...arg1); return this; }
	removeMinPosition(arg1) { minPosition.splice(minPosition.findIndex(e => arg1.includes(e)), 1); }
	addOffset(arg1) { this.offset.push(...arg1); return this; }
	removeOffset(arg1) { offset.splice(offset.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class ProximitySensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addSize(arg1) { this.size.push(...arg1); return this; }
	removeSize(arg1) { size.splice(size.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
}
class SphereSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addOffset(arg1) { this.offset.push(...arg1); return this; }
	removeOffset(arg1) { offset.splice(offset.findIndex(e => arg1.includes(e)), 1); }
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	set autoOffset(arg1) { this.autoOffset = arg1; return this; }
	get autoOffset() { return autoOffset;}
}
class VisibilitySensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addSize(arg1) { this.size.push(...arg1); return this; }
	removeSize(arg1) { size.splice(size.findIndex(e => arg1.includes(e)), 1); }
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class BooleanSequencer {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
}
class BooleanFilter {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class BooleanToggle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class CoordinateInterpolator2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
}
class TextureCoordinate {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	set mapping(arg1) { this.mapping = arg1; return this; }
	get mapping() { return mapping;}
}
class TimeTrigger {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class fillProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set hatchStyle(arg1) { this.hatchStyle = arg1; return this; }
	get hatchStyle() { return hatchStyle;}
}
class lineProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set linewidthScaleFactor(arg1) { this.linewidthScaleFactor = arg1; return this; }
	get linewidthScaleFactor() { return linewidthScaleFactor;}
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set linetype(arg1) { this.linetype = arg1; return this; }
	get linetype() { return linetype;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class LineProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
}
class EXPORT {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set AS(arg1) { this.AS = arg1; return this; }
	get AS() { return AS;}
	set localDEF(arg1) { this.localDEF = arg1; return this; }
	get localDEF() { return localDEF;}
}
class IMPORT {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set AS(arg1) { this.AS = arg1; return this; }
	get AS() { return AS;}
	set importedDEF(arg1) { this.importedDEF = arg1; return this; }
	get importedDEF() { return importedDEF;}
	set inlineDEF(arg1) { this.inlineDEF = arg1; return this; }
	get inlineDEF() { return inlineDEF;}
}
class IntegerSequencer {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
}
class KeySensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
}
class LoadSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set timeOut(arg1) { this.timeOut = arg1; return this; }
	get timeOut() { return timeOut;}
	addWatchList(arg1) { this.watchList.push(...arg1); return this; }
	removeWatchList(arg1) { watchList.splice(watchList.findIndex(e => arg1.includes(e)), 1); }
}
class watchList {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	set Inline(arg1) { this.Inline = arg1; return this; }
	get Inline() { return Inline; }
	set AudioClip(arg1) { this.AudioClip = arg1; return this; }
	get AudioClip() { return AudioClip; }
}
class ImageTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set repeatS(arg1) { this.repeatS = arg1; return this; }
	get repeatS() { return repeatS;}
	set repeatT(arg1) { this.repeatT = arg1; return this; }
	get repeatT() { return repeatT;}
	set TextureProperties(arg1) { this.TextureProperties = arg1; return this; }
	get TextureProperties() { return TextureProperties; }
	set textureProperties(arg1) { this.textureProperties = arg1; return this; }
	get textureProperties() { return textureProperties; }
}
class MetadataFloat {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataDouble(arg1) { this.MetadataDouble = arg1; return this; }
	get MetadataDouble() { return MetadataDouble; }
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
}
class MetadataSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set MetadataInteger(arg1) { this.MetadataInteger = arg1; return this; }
	get MetadataInteger() { return MetadataInteger; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
}
class value {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataBoolean(arg1) { this.MetadataBoolean = arg1; return this; }
	get MetadataBoolean() { return MetadataBoolean; }
	set MetadataDouble(arg1) { this.MetadataDouble = arg1; return this; }
	get MetadataDouble() { return MetadataDouble; }
	set MetadataFloat(arg1) { this.MetadataFloat = arg1; return this; }
	get MetadataFloat() { return MetadataFloat; }
	set MetadataInteger(arg1) { this.MetadataInteger = arg1; return this; }
	get MetadataInteger() { return MetadataInteger; }
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set ProtoInstance(arg1) { this.ProtoInstance = arg1; return this; }
	get ProtoInstance() { return ProtoInstance; }
}
class MetadataBoolean {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
}
class MetadataDouble {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
}
class MetadataInteger {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	set reference(arg1) { this.reference = arg1; return this; }
	get reference() { return reference;}
}
class PixelTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addImage(arg1) { this.image.push(...arg1); return this; }
	removeImage(arg1) { image.splice(image.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
}
class PositionInterpolator2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
}
class IndexedTriangleFanSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class IndexedTriangleStripSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class Cylinder {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set bottom(arg1) { this.bottom = arg1; return this; }
	get bottom() { return bottom;}
	set height(arg1) { this.height = arg1; return this; }
	get height() { return height;}
	set radius(arg1) { this.radius = arg1; return this; }
	get radius() { return radius;}
}
class proxy {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set geometry(arg1) { this.geometry = arg1; return this; }
	get geometry() { return geometry; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set appearance(arg1) { this.appearance = arg1; return this; }
	get appearance() { return appearance; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
}
class ColorRGBA {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
}
class CoordinateDouble {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
}
class TriangleFanSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class Color {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
}
class ElevationGrid {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class unit {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set category(arg1) { this.category = arg1; return this; }
	get category() { return category;}
	set conversionFactor(arg1) { this.conversionFactor = arg1; return this; }
	get conversionFactor() { return conversionFactor;}
}
class Sphere {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
}
class ViewpointGroup {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addSize(arg1) { this.size.push(...arg1); return this; }
	removeSize(arg1) { size.splice(size.findIndex(e => arg1.includes(e)), 1); }
}
class EspduTransform {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set address(arg1) { this.address = arg1; return this; }
	get address() { return address;}
	set marking(arg1) { this.marking = arg1; return this; }
	get marking() { return marking;}
	set networkMode(arg1) { this.networkMode = arg1; return this; }
	get networkMode() { return networkMode;}
	set port(arg1) { this.port = arg1; return this; }
	get port() { return port;}
	set siteID(arg1) { this.siteID = arg1; return this; }
	get siteID() { return siteID;}
	set writeInterval(arg1) { this.writeInterval = arg1; return this; }
	get writeInterval() { return writeInterval;}
	set entityID(arg1) { this.entityID = arg1; return this; }
	get entityID() { return entityID;}
	set readInterval(arg1) { this.readInterval = arg1; return this; }
	get readInterval() { return readInterval;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set applicationID(arg1) { this.applicationID = arg1; return this; }
	get applicationID() { return applicationID;}
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
}
class DISEntityManager {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set address(arg1) { this.address = arg1; return this; }
	get address() { return address;}
	set port(arg1) { this.port = arg1; return this; }
	get port() { return port;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class DISEntityTypeMapping {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set category(arg1) { this.category = arg1; return this; }
	get category() { return category;}
	set country(arg1) { this.country = arg1; return this; }
	get country() { return country;}
	set domain(arg1) { this.domain = arg1; return this; }
	get domain() { return domain;}
	set kind(arg1) { this.kind = arg1; return this; }
	get kind() { return kind;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class TransmitterPdu {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set whichGeometry(arg1) { this.whichGeometry = arg1; return this; }
	get whichGeometry() { return whichGeometry;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set address(arg1) { this.address = arg1; return this; }
	get address() { return address;}
	set entityID(arg1) { this.entityID = arg1; return this; }
	get entityID() { return entityID;}
	set port(arg1) { this.port = arg1; return this; }
	get port() { return port;}
	set readInterval(arg1) { this.readInterval = arg1; return this; }
	get readInterval() { return readInterval;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	addAntennaLocation(arg1) { this.antennaLocation.push(...arg1); return this; }
	removeAntennaLocation(arg1) { antennaLocation.splice(antennaLocation.findIndex(e => arg1.includes(e)), 1); }
}
class FontStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addJustify(arg1) { this.justify.push(...arg1); return this; }
	removeJustify(arg1) { justify.splice(justify.findIndex(e => arg1.includes(e)), 1); }
}
class ReceiverPdu {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set whichGeometry(arg1) { this.whichGeometry = arg1; return this; }
	get whichGeometry() { return whichGeometry;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set address(arg1) { this.address = arg1; return this; }
	get address() { return address;}
	set entityID(arg1) { this.entityID = arg1; return this; }
	get entityID() { return entityID;}
	set port(arg1) { this.port = arg1; return this; }
	get port() { return port;}
	set readInterval(arg1) { this.readInterval = arg1; return this; }
	get readInterval() { return readInterval;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class SignalPdu {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set whichGeometry(arg1) { this.whichGeometry = arg1; return this; }
	get whichGeometry() { return whichGeometry;}
}
class TextureTransform {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	set rotation(arg1) { this.rotation = arg1; return this; }
	get rotation() { return rotation;}
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
}
class PositionDamper {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tau(arg1) { this.tau = arg1; return this; }
	get tau() { return tau;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class OrientationDamper {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tau(arg1) { this.tau = arg1; return this; }
	get tau() { return tau;}
}
class OrientationChaser {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set duration(arg1) { this.duration = arg1; return this; }
	get duration() { return duration;}
}
class PositionDamper2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tau(arg1) { this.tau = arg1; return this; }
	get tau() { return tau;}
}
class PositionChaser {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set duration(arg1) { this.duration = arg1; return this; }
	get duration() { return duration;}
}
class ColorDamper {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tau(arg1) { this.tau = arg1; return this; }
	get tau() { return tau;}
}
class PositionChaser2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set duration(arg1) { this.duration = arg1; return this; }
	get duration() { return duration;}
}
class ScalarDamper {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set tau(arg1) { this.tau = arg1; return this; }
	get tau() { return tau;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class GeoViewpoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addOrientation(arg1) { this.orientation.push(...arg1); return this; }
	removeOrientation(arg1) { orientation.splice(orientation.findIndex(e => arg1.includes(e)), 1); }
	addPosition(arg1) { this.position.push(...arg1); return this; }
	removePosition(arg1) { position.splice(position.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addGeoSystem(arg1) { this.geoSystem.push(...arg1); return this; }
	removeGeoSystem(arg1) { geoSystem.splice(geoSystem.findIndex(e => arg1.includes(e)), 1); }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set fieldOfView(arg1) { this.fieldOfView = arg1; return this; }
	get fieldOfView() { return fieldOfView;}
}
class GeoPositionInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKey(arg1) { this.key.push(...arg1); return this; }
	removeKey(arg1) { key.splice(key.findIndex(e => arg1.includes(e)), 1); }
	addKeyValue(arg1) { this.keyValue.push(...arg1); return this; }
	removeKeyValue(arg1) { keyValue.splice(keyValue.findIndex(e => arg1.includes(e)), 1); }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
}
class GeoLocation {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addGeoCoords(arg1) { this.geoCoords.push(...arg1); return this; }
	removeGeoCoords(arg1) { geoCoords.splice(geoCoords.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addGeoSystem(arg1) { this.geoSystem.push(...arg1); return this; }
	removeGeoSystem(arg1) { geoSystem.splice(geoSystem.findIndex(e => arg1.includes(e)), 1); }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class geoOrigin {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addGeoCoords(arg1) { this.geoCoords.push(...arg1); return this; }
	removeGeoCoords(arg1) { geoCoords.splice(geoCoords.findIndex(e => arg1.includes(e)), 1); }
	addGeoSystem(arg1) { this.geoSystem.push(...arg1); return this; }
	removeGeoSystem(arg1) { geoSystem.splice(geoSystem.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
	set rotateYUp(arg1) { this.rotateYUp = arg1; return this; }
	get rotateYUp() { return rotateYUp;}
}
class GeoElevationGrid {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set Normal(arg1) { this.Normal = arg1; return this; }
	get Normal() { return Normal; }
}
class GeoTouchSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
}
class GeoOrigin {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class GeoLOD {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	addChild1Url(arg1) { this.child1Url.push(...arg1); return this; }
	removeChild1Url(arg1) { child1Url.splice(child1Url.findIndex(e => arg1.includes(e)), 1); }
	set range(arg1) { this.range = arg1; return this; }
	get range() { return range;}
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
	addRootNode(arg1) { this.rootNode.push(...arg1); return this; }
	removeRootNode(arg1) { rootNode.splice(rootNode.findIndex(e => arg1.includes(e)), 1); }
	addChild2Url(arg1) { this.child2Url.push(...arg1); return this; }
	removeChild2Url(arg1) { child2Url.splice(child2Url.findIndex(e => arg1.includes(e)), 1); }
	addChild3Url(arg1) { this.child3Url.push(...arg1); return this; }
	removeChild3Url(arg1) { child3Url.splice(child3Url.findIndex(e => arg1.includes(e)), 1); }
	addChild4Url(arg1) { this.child4Url.push(...arg1); return this; }
	removeChild4Url(arg1) { child4Url.splice(child4Url.findIndex(e => arg1.includes(e)), 1); }
	addRootUrl(arg1) { this.rootUrl.push(...arg1); return this; }
	removeRootUrl(arg1) { rootUrl.splice(rootUrl.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addGeoSystem(arg1) { this.geoSystem.push(...arg1); return this; }
	removeGeoSystem(arg1) { geoSystem.splice(geoSystem.findIndex(e => arg1.includes(e)), 1); }
}
class rootNode {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set WorldInfo(arg1) { this.WorldInfo = arg1; return this; }
	get WorldInfo() { return WorldInfo; }
}
class GeoCoordinate {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
}
class GeoMetadata {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addSummary(arg1) { this.summary.push(...arg1); return this; }
	removeSummary(arg1) { summary.splice(summary.findIndex(e => arg1.includes(e)), 1); }
}
class XvlShell {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set TextureCoordinate(arg1) { this.TextureCoordinate = arg1; return this; }
	get TextureCoordinate() { return TextureCoordinate; }
}
class StringSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class NurbsPatchSurface {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
}
class controlPoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class LineSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
	set ColorRGBA(arg1) { this.ColorRGBA = arg1; return this; }
	get ColorRGBA() { return ColorRGBA; }
}
class NurbsTrimmedSurface {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
}
class trimmingContour {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Contour2D(arg1) { this.Contour2D = arg1; return this; }
	get Contour2D() { return Contour2D; }
}
class Contour2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class NurbsCurve2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addControlPoint(arg1) { this.controlPoint.push(...arg1); return this; }
	removeControlPoint(arg1) { controlPoint.splice(controlPoint.findIndex(e => arg1.includes(e)), 1); }
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	addWeight(arg1) { this.weight.push(...arg1); return this; }
	removeWeight(arg1) { weight.splice(weight.findIndex(e => arg1.includes(e)), 1); }
}
class NurbsCurve {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set CoordinateDouble(arg1) { this.CoordinateDouble = arg1; return this; }
	get CoordinateDouble() { return CoordinateDouble; }
}
class NurbsPositionInterpolator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	set order(arg1) { this.order = arg1; return this; }
	get order() { return order;}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set controlPoint(arg1) { this.controlPoint = arg1; return this; }
	get controlPoint() { return controlPoint; }
}
class TriangleSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class ContourPolyline2D {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addControlPoint(arg1) { this.controlPoint.push(...arg1); return this; }
	removeControlPoint(arg1) { controlPoint.splice(controlPoint.findIndex(e => arg1.includes(e)), 1); }
}
class pointProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set PointProperties(arg1) { this.PointProperties = arg1; return this; }
	get PointProperties() { return PointProperties; }
}
class PointProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set pointSizeMaxValue(arg1) { this.pointSizeMaxValue = arg1; return this; }
	get pointSizeMaxValue() { return pointSizeMaxValue;}
	set pointSizeScaleFactor(arg1) { this.pointSizeScaleFactor = arg1; return this; }
	get pointSizeScaleFactor() { return pointSizeScaleFactor;}
	addAttenuation(arg1) { this.attenuation.push(...arg1); return this; }
	removeAttenuation(arg1) { attenuation.splice(attenuation.findIndex(e => arg1.includes(e)), 1); }
	set pointSizeMinValue(arg1) { this.pointSizeMinValue = arg1; return this; }
	get pointSizeMinValue() { return pointSizeMinValue;}
}
class CollidableShape {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set shape(arg1) { this.shape = arg1; return this; }
	get shape() { return shape; }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
}
class RigidBodyCollection {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addBodies(arg1) { this.bodies.push(...arg1); return this; }
	removeBodies(arg1) { bodies.splice(bodies.findIndex(e => arg1.includes(e)), 1); }
	addJoints(arg1) { this.joints.push(...arg1); return this; }
	removeJoints(arg1) { joints.splice(joints.findIndex(e => arg1.includes(e)), 1); }
	set constantForceMix(arg1) { this.constantForceMix = arg1; return this; }
	get constantForceMix() { return constantForceMix;}
	set contactSurfaceThickness(arg1) { this.contactSurfaceThickness = arg1; return this; }
	get contactSurfaceThickness() { return contactSurfaceThickness;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	set iterations(arg1) { this.iterations = arg1; return this; }
	get iterations() { return iterations;}
}
class bodies {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
}
class RigidBody {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addPosition(arg1) { this.position.push(...arg1); return this; }
	removePosition(arg1) { position.splice(position.findIndex(e => arg1.includes(e)), 1); }
	set CollidableShape(arg1) { this.CollidableShape = arg1; return this; }
	get CollidableShape() { return CollidableShape; }
	set geometry(arg1) { this.geometry = arg1; return this; }
	get geometry() { return geometry; }
	set mass(arg1) { this.mass = arg1; return this; }
	get mass() { return mass;}
	set useGlobalGravity(arg1) { this.useGlobalGravity = arg1; return this; }
	get useGlobalGravity() { return useGlobalGravity;}
	set angularDampingFactor(arg1) { this.angularDampingFactor = arg1; return this; }
	get angularDampingFactor() { return angularDampingFactor;}
	addOrientation(arg1) { this.orientation.push(...arg1); return this; }
	removeOrientation(arg1) { orientation.splice(orientation.findIndex(e => arg1.includes(e)), 1); }
	set autoDamp(arg1) { this.autoDamp = arg1; return this; }
	get autoDamp() { return autoDamp;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	set Box(arg1) { this.Box = arg1; return this; }
	get Box() { return Box; }
	set massDensityModel(arg1) { this.massDensityModel = arg1; return this; }
	get massDensityModel() { return massDensityModel; }
	set useFiniteRotation(arg1) { this.useFiniteRotation = arg1; return this; }
	get useFiniteRotation() { return useFiniteRotation;}
	set Sphere(arg1) { this.Sphere = arg1; return this; }
	get Sphere() { return Sphere; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addLinearVelocity(arg1) { this.linearVelocity.push(...arg1); return this; }
	removeLinearVelocity(arg1) { linearVelocity.splice(linearVelocity.findIndex(e => arg1.includes(e)), 1); }
	addAngularVelocity(arg1) { this.angularVelocity.push(...arg1); return this; }
	removeAngularVelocity(arg1) { angularVelocity.splice(angularVelocity.findIndex(e => arg1.includes(e)), 1); }
}
class CollisionSensor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set CollisionCollection(arg1) { this.CollisionCollection = arg1; return this; }
	get CollisionCollection() { return CollisionCollection; }
	set collider(arg1) { this.collider = arg1; return this; }
	get collider() { return collider; }
}
class collider {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set bounce(arg1) { this.bounce = arg1; return this; }
	get bounce() { return bounce;}
	set minBounceSpeed(arg1) { this.minBounceSpeed = arg1; return this; }
	get minBounceSpeed() { return minBounceSpeed;}
	addCollidables(arg1) { this.collidables.push(...arg1); return this; }
	removeCollidables(arg1) { collidables.splice(collidables.findIndex(e => arg1.includes(e)), 1); }
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	addFrictionCoefficients(arg1) { this.frictionCoefficients.push(...arg1); return this; }
	removeFrictionCoefficients(arg1) { frictionCoefficients.splice(frictionCoefficients.findIndex(e => arg1.includes(e)), 1); }
	set softnessConstantForceMix(arg1) { this.softnessConstantForceMix = arg1; return this; }
	get softnessConstantForceMix() { return softnessConstantForceMix;}
}
class collidables {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set CollidableShape(arg1) { this.CollidableShape = arg1; return this; }
	get CollidableShape() { return CollidableShape; }
}
class joints {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set BallJoint(arg1) { this.BallJoint = arg1; return this; }
	get BallJoint() { return BallJoint; }
	set SliderJoint(arg1) { this.SliderJoint = arg1; return this; }
	get SliderJoint() { return SliderJoint; }
	set SingleAxisHingeJoint(arg1) { this.SingleAxisHingeJoint = arg1; return this; }
	get SingleAxisHingeJoint() { return SingleAxisHingeJoint; }
	set UniversalJoint(arg1) { this.UniversalJoint = arg1; return this; }
	get UniversalJoint() { return UniversalJoint; }
	set HAnimJoint(arg1) { this.HAnimJoint = arg1; return this; }
	get HAnimJoint() { return HAnimJoint; }
}
class BallJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addAnchorPoint(arg1) { this.anchorPoint.push(...arg1); return this; }
	removeAnchorPoint(arg1) { anchorPoint.splice(anchorPoint.findIndex(e => arg1.includes(e)), 1); }
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set body1(arg1) { this.body1 = arg1; return this; }
	get body1() { return body1; }
	set body2(arg1) { this.body2 = arg1; return this; }
	get body2() { return body2; }
}
class body1 {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class body2 {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class massDensityModel {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class DoubleAxisHingeJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addAnchorPoint(arg1) { this.anchorPoint.push(...arg1); return this; }
	removeAnchorPoint(arg1) { anchorPoint.splice(anchorPoint.findIndex(e => arg1.includes(e)), 1); }
	addAxis1(arg1) { this.axis1.push(...arg1); return this; }
	removeAxis1(arg1) { axis1.splice(axis1.findIndex(e => arg1.includes(e)), 1); }
	addAxis2(arg1) { this.axis2.push(...arg1); return this; }
	removeAxis2(arg1) { axis2.splice(axis2.findIndex(e => arg1.includes(e)), 1); }
	addForceOutput(arg1) { this.forceOutput.push(...arg1); return this; }
	removeForceOutput(arg1) { forceOutput.splice(forceOutput.findIndex(e => arg1.includes(e)), 1); }
	set maxAngle1(arg1) { this.maxAngle1 = arg1; return this; }
	get maxAngle1() { return maxAngle1;}
	set maxTorque2(arg1) { this.maxTorque2 = arg1; return this; }
	get maxTorque2() { return maxTorque2;}
	set minAngle1(arg1) { this.minAngle1 = arg1; return this; }
	get minAngle1() { return minAngle1;}
	set stop1ErrorCorrection(arg1) { this.stop1ErrorCorrection = arg1; return this; }
	get stop1ErrorCorrection() { return stop1ErrorCorrection;}
	set suspensionErrorCorrection(arg1) { this.suspensionErrorCorrection = arg1; return this; }
	get suspensionErrorCorrection() { return suspensionErrorCorrection;}
	set suspensionForce(arg1) { this.suspensionForce = arg1; return this; }
	get suspensionForce() { return suspensionForce;}
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set body1(arg1) { this.body1 = arg1; return this; }
	get body1() { return body1; }
	set body2(arg1) { this.body2 = arg1; return this; }
	get body2() { return body2; }
}
class SliderJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addAxis(arg1) { this.axis.push(...arg1); return this; }
	removeAxis(arg1) { axis.splice(axis.findIndex(e => arg1.includes(e)), 1); }
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set body1(arg1) { this.body1 = arg1; return this; }
	get body1() { return body1; }
	set body2(arg1) { this.body2 = arg1; return this; }
	get body2() { return body2; }
}
class SingleAxisHingeJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addAnchorPoint(arg1) { this.anchorPoint.push(...arg1); return this; }
	removeAnchorPoint(arg1) { anchorPoint.splice(anchorPoint.findIndex(e => arg1.includes(e)), 1); }
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set body1(arg1) { this.body1 = arg1; return this; }
	get body1() { return body1; }
	set body2(arg1) { this.body2 = arg1; return this; }
	get body2() { return body2; }
}
class UniversalJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addAxis1(arg1) { this.axis1.push(...arg1); return this; }
	removeAxis1(arg1) { axis1.splice(axis1.findIndex(e => arg1.includes(e)), 1); }
	addAxis2(arg1) { this.axis2.push(...arg1); return this; }
	removeAxis2(arg1) { axis2.splice(axis2.findIndex(e => arg1.includes(e)), 1); }
	set RigidBody(arg1) { this.RigidBody = arg1; return this; }
	get RigidBody() { return RigidBody; }
	set body1(arg1) { this.body1 = arg1; return this; }
	get body1() { return body1; }
	set body2(arg1) { this.body2 = arg1; return this; }
	get body2() { return body2; }
}
class shaders {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ComposedShader(arg1) { this.ComposedShader = arg1; return this; }
	get ComposedShader() { return ComposedShader; }
}
class ComposedShader {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set language(arg1) { this.language = arg1; return this; }
	get language() { return language;}
	addField(arg1) { this.field.push(...arg1); return this; }
	removeField(arg1) { field.splice(field.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addParts(arg1) { this.parts.push(...arg1); return this; }
	removeParts(arg1) { parts.splice(parts.findIndex(e => arg1.includes(e)), 1); }
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class parts {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ShaderPart(arg1) { this.ShaderPart = arg1; return this; }
	get ShaderPart() { return ShaderPart; }
}
class ShaderPart {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set type(arg1) { this.type = arg1; return this; }
	get type() { return type;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class AudioClip {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set MetadataString(arg1) { this.MetadataString = arg1; return this; }
	get MetadataString() { return MetadataString; }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set loop(arg1) { this.loop = arg1; return this; }
	get loop() { return loop;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class VolumeData {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture3D(arg1) { this.ImageTexture3D = arg1; return this; }
	get ImageTexture3D() { return ImageTexture3D; }
	set voxels(arg1) { this.voxels = arg1; return this; }
	get voxels() { return voxels; }
	addDimensions(arg1) { this.dimensions.push(...arg1); return this; }
	removeDimensions(arg1) { dimensions.splice(dimensions.findIndex(e => arg1.includes(e)), 1); }
	set ToneMappedVolumeStyle(arg1) { this.ToneMappedVolumeStyle = arg1; return this; }
	get ToneMappedVolumeStyle() { return ToneMappedVolumeStyle; }
	set renderStyle(arg1) { this.renderStyle = arg1; return this; }
	get renderStyle() { return renderStyle; }
	set BlendedVolumeStyle(arg1) { this.BlendedVolumeStyle = arg1; return this; }
	get BlendedVolumeStyle() { return BlendedVolumeStyle; }
	set ComposedVolumeStyle(arg1) { this.ComposedVolumeStyle = arg1; return this; }
	get ComposedVolumeStyle() { return ComposedVolumeStyle; }
	set CartoonVolumeStyle(arg1) { this.CartoonVolumeStyle = arg1; return this; }
	get CartoonVolumeStyle() { return CartoonVolumeStyle; }
	set EdgeEnhancementVolumeStyle(arg1) { this.EdgeEnhancementVolumeStyle = arg1; return this; }
	get EdgeEnhancementVolumeStyle() { return EdgeEnhancementVolumeStyle; }
	set ProjectionVolumeStyle(arg1) { this.ProjectionVolumeStyle = arg1; return this; }
	get ProjectionVolumeStyle() { return ProjectionVolumeStyle; }
	set ShadedVolumeStyle(arg1) { this.ShadedVolumeStyle = arg1; return this; }
	get ShadedVolumeStyle() { return ShadedVolumeStyle; }
	set SilhouetteEnhancementVolumeStyle(arg1) { this.SilhouetteEnhancementVolumeStyle = arg1; return this; }
	get SilhouetteEnhancementVolumeStyle() { return SilhouetteEnhancementVolumeStyle; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class voxels {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class renderStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set weightConstant1(arg1) { this.weightConstant1 = arg1; return this; }
	get weightConstant1() { return weightConstant1;}
	addRenderStyle(arg1) { this.renderStyle.push(...arg1); return this; }
	removeRenderStyle(arg1) { renderStyle.splice(renderStyle.findIndex(e => arg1.includes(e)), 1); }
	set voxels(arg1) { this.voxels = arg1; return this; }
	get voxels() { return voxels; }
	set OpacityMapVolumeStyle(arg1) { this.OpacityMapVolumeStyle = arg1; return this; }
	get OpacityMapVolumeStyle() { return OpacityMapVolumeStyle; }
	set SilhouetteEnhancementVolumeStyle(arg1) { this.SilhouetteEnhancementVolumeStyle = arg1; return this; }
	get SilhouetteEnhancementVolumeStyle() { return SilhouetteEnhancementVolumeStyle; }
	set CartoonVolumeStyle(arg1) { this.CartoonVolumeStyle = arg1; return this; }
	get CartoonVolumeStyle() { return CartoonVolumeStyle; }
	set BoundaryEnhancementVolumeStyle(arg1) { this.BoundaryEnhancementVolumeStyle = arg1; return this; }
	get BoundaryEnhancementVolumeStyle() { return BoundaryEnhancementVolumeStyle; }
	set ToneMappedVolumeStyle(arg1) { this.ToneMappedVolumeStyle = arg1; return this; }
	get ToneMappedVolumeStyle() { return ToneMappedVolumeStyle; }
	set EdgeEnhancementVolumeStyle(arg1) { this.EdgeEnhancementVolumeStyle = arg1; return this; }
	get EdgeEnhancementVolumeStyle() { return EdgeEnhancementVolumeStyle; }
	set BlendedVolumeStyle(arg1) { this.BlendedVolumeStyle = arg1; return this; }
	get BlendedVolumeStyle() { return BlendedVolumeStyle; }
	set lighting(arg1) { this.lighting = arg1; return this; }
	get lighting() { return lighting;}
	set shadows(arg1) { this.shadows = arg1; return this; }
	get shadows() { return shadows;}
	set material(arg1) { this.material = arg1; return this; }
	get material() { return material; }
	set silhouetteBoundaryOpacity(arg1) { this.silhouetteBoundaryOpacity = arg1; return this; }
	get silhouetteBoundaryOpacity() { return silhouetteBoundaryOpacity;}
	set silhouetteRetainedOpacity(arg1) { this.silhouetteRetainedOpacity = arg1; return this; }
	get silhouetteRetainedOpacity() { return silhouetteRetainedOpacity;}
	set silhouetteSharpness(arg1) { this.silhouetteSharpness = arg1; return this; }
	get silhouetteSharpness() { return silhouetteSharpness;}
}
class BlendedVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ToneMappedVolumeStyle(arg1) { this.ToneMappedVolumeStyle = arg1; return this; }
	get ToneMappedVolumeStyle() { return ToneMappedVolumeStyle; }
	set ImageTexture3D(arg1) { this.ImageTexture3D = arg1; return this; }
	get ImageTexture3D() { return ImageTexture3D; }
	set weightConstant1(arg1) { this.weightConstant1 = arg1; return this; }
	get weightConstant1() { return weightConstant1;}
	set weightConstant2(arg1) { this.weightConstant2 = arg1; return this; }
	get weightConstant2() { return weightConstant2;}
	set ComposedVolumeStyle(arg1) { this.ComposedVolumeStyle = arg1; return this; }
	get ComposedVolumeStyle() { return ComposedVolumeStyle; }
	set renderStyle(arg1) { this.renderStyle = arg1; return this; }
	get renderStyle() { return renderStyle; }
	set voxels(arg1) { this.voxels = arg1; return this; }
	get voxels() { return voxels; }
}
class OpacityMapVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
}
class SilhouetteEnhancementVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set silhouetteBoundaryOpacity(arg1) { this.silhouetteBoundaryOpacity = arg1; return this; }
	get silhouetteBoundaryOpacity() { return silhouetteBoundaryOpacity;}
	set silhouetteRetainedOpacity(arg1) { this.silhouetteRetainedOpacity = arg1; return this; }
	get silhouetteRetainedOpacity() { return silhouetteRetainedOpacity;}
	set silhouetteSharpness(arg1) { this.silhouetteSharpness = arg1; return this; }
	get silhouetteSharpness() { return silhouetteSharpness;}
}
class CartoonVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set colorSteps(arg1) { this.colorSteps = arg1; return this; }
	get colorSteps() { return colorSteps;}
}
class BoundaryEnhancementVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set retainedOpacity(arg1) { this.retainedOpacity = arg1; return this; }
	get retainedOpacity() { return retainedOpacity;}
}
class ToneMappedVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
}
class EdgeEnhancementVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addEdgeColor(arg1) { this.edgeColor.push(...arg1); return this; }
	removeEdgeColor(arg1) { edgeColor.splice(edgeColor.findIndex(e => arg1.includes(e)), 1); }
	set gradientThreshold(arg1) { this.gradientThreshold = arg1; return this; }
	get gradientThreshold() { return gradientThreshold;}
}
class IsoSurfaceVolumeData {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addDimensions(arg1) { this.dimensions.push(...arg1); return this; }
	removeDimensions(arg1) { dimensions.splice(dimensions.findIndex(e => arg1.includes(e)), 1); }
	addSurfaceValues(arg1) { this.surfaceValues.push(...arg1); return this; }
	removeSurfaceValues(arg1) { surfaceValues.splice(surfaceValues.findIndex(e => arg1.includes(e)), 1); }
	addRenderStyle(arg1) { this.renderStyle.push(...arg1); return this; }
	removeRenderStyle(arg1) { renderStyle.splice(renderStyle.findIndex(e => arg1.includes(e)), 1); }
	set ImageTexture3D(arg1) { this.ImageTexture3D = arg1; return this; }
	get ImageTexture3D() { return ImageTexture3D; }
	set voxels(arg1) { this.voxels = arg1; return this; }
	get voxels() { return voxels; }
}
class SegmentedVolumeData {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addDimensions(arg1) { this.dimensions.push(...arg1); return this; }
	removeDimensions(arg1) { dimensions.splice(dimensions.findIndex(e => arg1.includes(e)), 1); }
	set ImageTexture3D(arg1) { this.ImageTexture3D = arg1; return this; }
	get ImageTexture3D() { return ImageTexture3D; }
	set segmentIdentifiers(arg1) { this.segmentIdentifiers = arg1; return this; }
	get segmentIdentifiers() { return segmentIdentifiers; }
	set voxels(arg1) { this.voxels = arg1; return this; }
	get voxels() { return voxels; }
	addRenderStyle(arg1) { this.renderStyle.push(...arg1); return this; }
	removeRenderStyle(arg1) { renderStyle.splice(renderStyle.findIndex(e => arg1.includes(e)), 1); }
}
class segmentIdentifiers {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class ShadedVolumeStyle {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Material(arg1) { this.Material = arg1; return this; }
	get Material() { return Material; }
}
class BooleanTrigger {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class IntegerTrigger {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set integerKey(arg1) { this.integerKey = arg1; return this; }
	get integerKey() { return integerKey;}
	addConnect(arg1) { this.connect.push(...arg1); return this; }
	removeConnect(arg1) { connect.splice(connect.findIndex(e => arg1.includes(e)), 1); }
	set IS(arg1) { this.IS = arg1; return this; }
	get IS() { return IS; }
}
class NurbsSweptSurface {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set NurbsCurve2D(arg1) { this.NurbsCurve2D = arg1; return this; }
	get NurbsCurve2D() { return NurbsCurve2D; }
	set NurbsCurve(arg1) { this.NurbsCurve = arg1; return this; }
	get NurbsCurve() { return NurbsCurve; }
}
class crossSectionCurve {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addControlPoint(arg1) { this.controlPoint.push(...arg1); return this; }
	removeControlPoint(arg1) { controlPoint.splice(controlPoint.findIndex(e => arg1.includes(e)), 1); }
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	set tessellation(arg1) { this.tessellation = arg1; return this; }
	get tessellation() { return tessellation;}
	addWeight(arg1) { this.weight.push(...arg1); return this; }
	removeWeight(arg1) { weight.splice(weight.findIndex(e => arg1.includes(e)), 1); }
}
class trajectoryCurve {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	addWeight(arg1) { this.weight.push(...arg1); return this; }
	removeWeight(arg1) { weight.splice(weight.findIndex(e => arg1.includes(e)), 1); }
	set controlPoint(arg1) { this.controlPoint = arg1; return this; }
	get controlPoint() { return controlPoint; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addControlPoint(arg1) { this.controlPoint.push(...arg1); return this; }
	removeControlPoint(arg1) { controlPoint.splice(controlPoint.findIndex(e => arg1.includes(e)), 1); }
	set tessellation(arg1) { this.tessellation = arg1; return this; }
	get tessellation() { return tessellation;}
}
class NurbsSwungSurface {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set NurbsCurve2D(arg1) { this.NurbsCurve2D = arg1; return this; }
	get NurbsCurve2D() { return NurbsCurve2D; }
}
class profileCurve {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addControlPoint(arg1) { this.controlPoint.push(...arg1); return this; }
	removeControlPoint(arg1) { controlPoint.splice(controlPoint.findIndex(e => arg1.includes(e)), 1); }
	addKnot(arg1) { this.knot.push(...arg1); return this; }
	removeKnot(arg1) { knot.splice(knot.findIndex(e => arg1.includes(e)), 1); }
	set tessellation(arg1) { this.tessellation = arg1; return this; }
	get tessellation() { return tessellation;}
	addWeight(arg1) { this.weight.push(...arg1); return this; }
	removeWeight(arg1) { weight.splice(weight.findIndex(e => arg1.includes(e)), 1); }
}
class TextureProjector {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addDirection(arg1) { this.direction.push(...arg1); return this; }
	removeDirection(arg1) { direction.splice(direction.findIndex(e => arg1.includes(e)), 1); }
	set fieldOfView(arg1) { this.fieldOfView = arg1; return this; }
	get fieldOfView() { return fieldOfView;}
	addLocation(arg1) { this.location.push(...arg1); return this; }
	removeLocation(arg1) { location.splice(location.findIndex(e => arg1.includes(e)), 1); }
	addUpVector(arg1) { this.upVector.push(...arg1); return this; }
	removeUpVector(arg1) { upVector.splice(upVector.findIndex(e => arg1.includes(e)), 1); }
	set ambientIntensity(arg1) { this.ambientIntensity = arg1; return this; }
	get ambientIntensity() { return ambientIntensity;}
	addColor(arg1) { this.color.push(...arg1); return this; }
	removeColor(arg1) { color.splice(color.findIndex(e => arg1.includes(e)), 1); }
	set intensity(arg1) { this.intensity = arg1; return this; }
	get intensity() { return intensity;}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	set texture(arg1) { this.texture = arg1; return this; }
	get texture() { return texture; }
}
class TriangleStripSet {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set Color(arg1) { this.Color = arg1; return this; }
	get Color() { return Color; }
}
class Normal {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class LocalFog {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set visibilityRange(arg1) { this.visibilityRange = arg1; return this; }
	get visibilityRange() { return visibilityRange;}
}
class HAnimHumanoid {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set loa(arg1) { this.loa = arg1; return this; }
	get loa() { return loa;}
	set version(arg1) { this.version = arg1; return this; }
	get version() { return version;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addSkeleton(arg1) { this.skeleton.push(...arg1); return this; }
	removeSkeleton(arg1) { skeleton.splice(skeleton.findIndex(e => arg1.includes(e)), 1); }
	addJoints(arg1) { this.joints.push(...arg1); return this; }
	removeJoints(arg1) { joints.splice(joints.findIndex(e => arg1.includes(e)), 1); }
	addSegments(arg1) { this.segments.push(...arg1); return this; }
	removeSegments(arg1) { segments.splice(segments.findIndex(e => arg1.includes(e)), 1); }
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	addViewpoints(arg1) { this.viewpoints.push(...arg1); return this; }
	removeViewpoints(arg1) { viewpoints.splice(viewpoints.findIndex(e => arg1.includes(e)), 1); }
	addInfo(arg1) { this.info.push(...arg1); return this; }
	removeInfo(arg1) { info.splice(info.findIndex(e => arg1.includes(e)), 1); }
	set Coordinate(arg1) { this.Coordinate = arg1; return this; }
	get Coordinate() { return Coordinate; }
	set skinCoord(arg1) { this.skinCoord = arg1; return this; }
	get skinCoord() { return skinCoord; }
	addSkin(arg1) { this.skin.push(...arg1); return this; }
	removeSkin(arg1) { skin.splice(skin.findIndex(e => arg1.includes(e)), 1); }
	addSites(arg1) { this.sites.push(...arg1); return this; }
	removeSites(arg1) { sites.splice(sites.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addValue(arg1) { this.value.push(...arg1); return this; }
	removeValue(arg1) { value.splice(value.findIndex(e => arg1.includes(e)), 1); }
	addMotions(arg1) { this.motions.push(...arg1); return this; }
	removeMotions(arg1) { motions.splice(motions.findIndex(e => arg1.includes(e)), 1); }
}
class skeleton {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimJoint(arg1) { this.HAnimJoint = arg1; return this; }
	get HAnimJoint() { return HAnimJoint; }
}
class HAnimJoint {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUlimit(arg1) { this.ulimit.push(...arg1); return this; }
	removeUlimit(arg1) { ulimit.splice(ulimit.findIndex(e => arg1.includes(e)), 1); }
	addLlimit(arg1) { this.llimit.push(...arg1); return this; }
	removeLlimit(arg1) { llimit.splice(llimit.findIndex(e => arg1.includes(e)), 1); }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	addCenter(arg1) { this.center.push(...arg1); return this; }
	removeCenter(arg1) { center.splice(center.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addSkinCoordIndex(arg1) { this.skinCoordIndex.push(...arg1); return this; }
	removeSkinCoordIndex(arg1) { skinCoordIndex.splice(skinCoordIndex.findIndex(e => arg1.includes(e)), 1); }
	addSkinCoordWeight(arg1) { this.skinCoordWeight.push(...arg1); return this; }
	removeSkinCoordWeight(arg1) { skinCoordWeight.splice(skinCoordWeight.findIndex(e => arg1.includes(e)), 1); }
	set MetadataSet(arg1) { this.MetadataSet = arg1; return this; }
	get MetadataSet() { return MetadataSet; }
	set metadata(arg1) { this.metadata = arg1; return this; }
	get metadata() { return metadata; }
	addDisplacers(arg1) { this.displacers.push(...arg1); return this; }
	removeDisplacers(arg1) { displacers.splice(displacers.findIndex(e => arg1.includes(e)), 1); }
	addScale(arg1) { this.scale.push(...arg1); return this; }
	removeScale(arg1) { scale.splice(scale.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
}
class HAnimSegment {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class segments {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimSegment(arg1) { this.HAnimSegment = arg1; return this; }
	get HAnimSegment() { return HAnimSegment; }
}
class viewpoints {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimSite(arg1) { this.HAnimSite = arg1; return this; }
	get HAnimSite() { return HAnimSite; }
}
class HAnimSite {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	addRotation(arg1) { this.rotation.push(...arg1); return this; }
	removeRotation(arg1) { rotation.splice(rotation.findIndex(e => arg1.includes(e)), 1); }
}
class skinCoord {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addPoint(arg1) { this.points.push(...arg1); return this; }
	removePoint(arg1) { points.splice(points.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class skin {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set Group(arg1) { this.Group = arg1; return this; }
	get Group() { return Group; }
	set Shape(arg1) { this.Shape = arg1; return this; }
	get Shape() { return Shape; }
	set IndexedFaceSet(arg1) { this.IndexedFaceSet = arg1; return this; }
	get IndexedFaceSet() { return IndexedFaceSet; }
}
class sites {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimSite(arg1) { this.HAnimSite = arg1; return this; }
	get HAnimSite() { return HAnimSite; }
}
class displacers {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimDisplacer(arg1) { this.HAnimDisplacer = arg1; return this; }
	get HAnimDisplacer() { return HAnimDisplacer; }
}
class HAnimDisplacer {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addCoordIndex(arg1) { this.coordIndex.push(...arg1); return this; }
	removeCoordIndex(arg1) { coordIndex.splice(coordIndex.findIndex(e => arg1.includes(e)), 1); }
	addDisplacements(arg1) { this.displacements.push(...arg1); return this; }
	removeDisplacements(arg1) { displacements.splice(displacements.findIndex(e => arg1.includes(e)), 1); }
}
class motions {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set HAnimMotion(arg1) { this.HAnimMotion = arg1; return this; }
	get HAnimMotion() { return HAnimMotion; }
}
class HAnimMotion {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set name(arg1) { this.name = arg1; return this; }
	get name() { return name;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set channels(arg1) { this.channels = arg1; return this; }
	get channels() { return channels;}
	set enabled(arg1) { this.enabled = arg1; return this; }
	get enabled() { return enabled;}
	set joints(arg1) { this.joints = arg1; return this; }
	get joints() { return joints;}
	addValues(arg1) { this.values.push(...arg1); return this; }
	removeValues(arg1) { values.splice(values.findIndex(e => arg1.includes(e)), 1); }
}
class GeoTransform {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addGeoCenter(arg1) { this.geoCenter.push(...arg1); return this; }
	removeGeoCenter(arg1) { geoCenter.splice(geoCenter.findIndex(e => arg1.includes(e)), 1); }
	addTranslation(arg1) { this.translation.push(...arg1); return this; }
	removeTranslation(arg1) { translation.splice(translation.findIndex(e => arg1.includes(e)), 1); }
	set GeoOrigin(arg1) { this.GeoOrigin = arg1; return this; }
	get GeoOrigin() { return GeoOrigin; }
	set geoOrigin(arg1) { this.geoOrigin = arg1; return this; }
	get geoOrigin() { return geoOrigin; }
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class Box {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addSize(arg1) { this.size.push(...arg1); return this; }
	removeSize(arg1) { size.splice(size.findIndex(e => arg1.includes(e)), 1); }
}
class acousticProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set AcousticProperties(arg1) { this.AcousticProperties = arg1; return this; }
	get AcousticProperties() { return AcousticProperties; }
}
class AcousticProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set description(arg1) { this.description = arg1; return this; }
	get description() { return description;}
	set diffuse(arg1) { this.diffuse = arg1; return this; }
	get diffuse() { return diffuse;}
	set refraction(arg1) { this.refraction = arg1; return this; }
	get refraction() { return refraction;}
	set specular(arg1) { this.specular = arg1; return this; }
	get specular() { return specular;}
}
class SpatialSound {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set distanceModel(arg1) { this.distanceModel = arg1; return this; }
	get distanceModel() { return distanceModel;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set coneInnerAngle(arg1) { this.coneInnerAngle = arg1; return this; }
	get coneInnerAngle() { return coneInnerAngle;}
	set coneOuterAngle(arg1) { this.coneOuterAngle = arg1; return this; }
	get coneOuterAngle() { return coneOuterAngle;}
	set enableHRTF(arg1) { this.enableHRTF = arg1; return this; }
	get enableHRTF() { return enableHRTF;}
}
class Analyser {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class StreamAudioDestination {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class BiquadFilter {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	set type(arg1) { this.type = arg1; return this; }
	get type() { return type;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set detune(arg1) { this.detune = arg1; return this; }
	get detune() { return detune;}
	set frequency(arg1) { this.frequency = arg1; return this; }
	get frequency() { return frequency;}
	set qualityFactor(arg1) { this.qualityFactor = arg1; return this; }
	get qualityFactor() { return qualityFactor;}
}
class ChannelMerger {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class ChannelSelector {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set channelSelection(arg1) { this.channelSelection = arg1; return this; }
	get channelSelection() { return channelSelection;}
}
class ChannelSplitter {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
}
class Convolver {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class Delay {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class DynamicsCompressor {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class Gain {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class WaveShaper {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
class BufferAudioSource {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
	set loop(arg1) { this.loop = arg1; return this; }
	get loop() { return loop;}
	set pauseTime(arg1) { this.pauseTime = arg1; return this; }
	get pauseTime() { return pauseTime;}
	set resumeTime(arg1) { this.resumeTime = arg1; return this; }
	get resumeTime() { return resumeTime;}
	set stopTime(arg1) { this.stopTime = arg1; return this; }
	get stopTime() { return stopTime;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class ListenerPointSource {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set trackCurrentView(arg1) { this.trackCurrentView = arg1; return this; }
	get trackCurrentView() { return trackCurrentView;}
}
class MicrophoneSource {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
}
class OscillatorSource {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set frequency(arg1) { this.frequency = arg1; return this; }
	get frequency() { return frequency;}
}
class StreamAudioSource {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set channelCountMode(arg1) { this.channelCountMode = arg1; return this; }
	get channelCountMode() { return channelCountMode;}
	set channelInterpretation(arg1) { this.channelInterpretation = arg1; return this; }
	get channelInterpretation() { return channelInterpretation;}
}
class baseTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
}
class normalTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
}
class metallicRoughnessTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
}
class occlusionTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
}
class textureProperties {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set magnificationFilter(arg1) { this.magnificationFilter = arg1; return this; }
	get magnificationFilter() { return magnificationFilter;}
	set minificationFilter(arg1) { this.minificationFilter = arg1; return this; }
	get minificationFilter() { return minificationFilter;}
}
class emissiveTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
}
class MovieTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
}
class GeneratedCubeMapTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set size(arg1) { this.size = arg1; return this; }
	get size() { return size;}
	set update(arg1) { this.update = arg1; return this; }
	get update() { return update;}
}
class TextureCoordinateGenerator {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set mode(arg1) { this.mode = arg1; return this; }
	get mode() { return mode;}
	set USE(arg1) { this.USE = arg1; return this; }
	get USE() { return USE;}
}
class TextureBackground {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	set ImageTexture(arg1) { this.ImageTexture = arg1; return this; }
	get ImageTexture() { return ImageTexture; }
	set backTexture(arg1) { this.backTexture = arg1; return this; }
	get backTexture() { return backTexture; }
	set bottomTexture(arg1) { this.bottomTexture = arg1; return this; }
	get bottomTexture() { return bottomTexture; }
	set frontTexture(arg1) { this.frontTexture = arg1; return this; }
	get frontTexture() { return frontTexture; }
	set leftTexture(arg1) { this.leftTexture = arg1; return this; }
	get leftTexture() { return leftTexture; }
	set rightTexture(arg1) { this.rightTexture = arg1; return this; }
	get rightTexture() { return rightTexture; }
	set topTexture(arg1) { this.topTexture = arg1; return this; }
	get topTexture() { return topTexture; }
	addGroundAngle(arg1) { this.groundAngle.push(...arg1); return this; }
	removeGroundAngle(arg1) { groundAngle.splice(groundAngle.findIndex(e => arg1.includes(e)), 1); }
	addGroundColor(arg1) { this.groundColor.push(...arg1); return this; }
	removeGroundColor(arg1) { groundColor.splice(groundColor.findIndex(e => arg1.includes(e)), 1); }
	addSkyAngle(arg1) { this.skyAngle.push(...arg1); return this; }
	removeSkyAngle(arg1) { skyAngle.splice(skyAngle.findIndex(e => arg1.includes(e)), 1); }
	addSkyColor(arg1) { this.skyColor.push(...arg1); return this; }
	removeSkyColor(arg1) { skyColor.splice(skyColor.findIndex(e => arg1.includes(e)), 1); }
}
class backTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class bottomTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class frontTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class leftTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class rightTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class topTexture {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	set DEF(arg1) { this.DEF = arg1; return this; }
	get DEF() { return DEF;}
	addUrl(arg1) { this.url.push(...arg1); return this; }
	removeUrl(arg1) { url.splice(url.findIndex(e => arg1.includes(e)), 1); }
}
class StaticGroup {
	constructor() {}
	get JSON() {}
	set JSON(arg1) {}
	addChildren(arg1) { this.children.push(...arg1); return this; }
	removeChildren(arg1) { children.splice(children.findIndex(e => arg1.includes(e)), 1); }
}
