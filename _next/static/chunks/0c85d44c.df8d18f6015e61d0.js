try {
  !(function () {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "ea3f075b-aa7f-4587-92d5-9e07f7819f96"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-ea3f075b-aa7f-4587-92d5-9e07f7819f96"));
  })();
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4198],
  {
    1362: (e, t, r) => {
      let i, s, n, a, o, l;
      r.d(t, { Z$U: () => hv, uV1: () => yt, uuE: () => gi });
      var u = r(15301);
      let d = [
          "alphaMap",
          "alphaTest",
          "anisotropy",
          "anisotropyMap",
          "anisotropyRotation",
          "aoMap",
          "aoMapIntensity",
          "attenuationColor",
          "attenuationDistance",
          "bumpMap",
          "clearcoat",
          "clearcoatMap",
          "clearcoatNormalMap",
          "clearcoatNormalScale",
          "clearcoatRoughness",
          "color",
          "dispersion",
          "displacementMap",
          "emissive",
          "emissiveIntensity",
          "emissiveMap",
          "envMap",
          "envMapIntensity",
          "gradientMap",
          "ior",
          "iridescence",
          "iridescenceIOR",
          "iridescenceMap",
          "iridescenceThicknessMap",
          "lightMap",
          "lightMapIntensity",
          "map",
          "matcap",
          "metalness",
          "metalnessMap",
          "normalMap",
          "normalScale",
          "opacity",
          "roughness",
          "roughnessMap",
          "sheen",
          "sheenColor",
          "sheenColorMap",
          "sheenRoughnessMap",
          "shininess",
          "specular",
          "specularColor",
          "specularColorMap",
          "specularIntensity",
          "specularIntensityMap",
          "specularMap",
          "thickness",
          "transmission",
          "transmissionMap",
        ],
        h = new WeakMap();
      class c {
        constructor(e) {
          (this.renderObjects = new WeakMap()),
            (this.hasNode = this.containsNode(e)),
            (this.hasAnimation = !0 === e.object.isSkinnedMesh),
            (this.refreshUniforms = d),
            (this.renderId = 0);
        }
        firstInitialization(e) {
          return (
            !1 === this.renderObjects.has(e) &&
            (this.getRenderObjectData(e), !0)
          );
        }
        needsVelocity(e) {
          let t = e.getMRT();
          return null !== t && t.has("velocity");
        }
        getRenderObjectData(e) {
          let t = this.renderObjects.get(e);
          if (void 0 === t) {
            let { geometry: r, material: i, object: s } = e;
            if (
              ((t = {
                material: this.getMaterialData(i),
                geometry: {
                  id: r.id,
                  attributes: this.getAttributesData(r.attributes),
                  indexVersion: r.index ? r.index.version : null,
                  drawRange: {
                    start: r.drawRange.start,
                    count: r.drawRange.count,
                  },
                },
                worldMatrix: s.matrixWorld.clone(),
              }),
              s.center && (t.center = s.center.clone()),
              s.morphTargetInfluences &&
                (t.morphTargetInfluences = s.morphTargetInfluences.slice()),
              null !== e.bundle && (t.version = e.bundle.version),
              t.material.transmission > 0)
            ) {
              let { width: r, height: i } = e.context;
              (t.bufferWidth = r), (t.bufferHeight = i);
            }
            (t.lights = this.getLightsData(e.lightsNode.getLights())),
              this.renderObjects.set(e, t);
          }
          return t;
        }
        getAttributesData(e) {
          let t = {};
          for (let r in e) {
            let i = e[r];
            t[r] = { version: i.version };
          }
          return t;
        }
        containsNode(e) {
          let t = e.material;
          for (let e in t) if (t[e] && t[e].isNode) return !0;
          return (
            null !== e.renderer.overrideNodes.modelViewMatrix ||
            null !== e.renderer.overrideNodes.modelNormalViewMatrix
          );
        }
        getMaterialData(e) {
          let t = {};
          for (let r of this.refreshUniforms) {
            let i = e[r];
            null != i &&
              ("object" == typeof i && void 0 !== i.clone
                ? !0 === i.isTexture
                  ? (t[r] = { id: i.id, version: i.version })
                  : (t[r] = i.clone())
                : (t[r] = i));
          }
          return t;
        }
        equals(e, t) {
          let { object: r, material: i, geometry: s } = e,
            n = this.getRenderObjectData(e);
          if (!0 !== n.worldMatrix.equals(r.matrixWorld))
            return n.worldMatrix.copy(r.matrixWorld), !1;
          let a = n.material;
          for (let e in a) {
            let t = a[e],
              r = i[e];
            if (void 0 !== t.equals) {
              if (!1 === t.equals(r)) return t.copy(r), !1;
            } else if (!0 === r.isTexture) {
              if (t.id !== r.id || t.version !== r.version)
                return (t.id = r.id), (t.version = r.version), !1;
            } else if (t !== r) return (a[e] = r), !1;
          }
          if (a.transmission > 0) {
            let { width: t, height: r } = e.context;
            if (n.bufferWidth !== t || n.bufferHeight !== r)
              return (n.bufferWidth = t), (n.bufferHeight = r), !1;
          }
          let o = n.geometry,
            l = s.attributes,
            u = o.attributes,
            d = Object.keys(u),
            h = Object.keys(l);
          if (o.id !== s.id) return (o.id = s.id), !1;
          if (d.length !== h.length)
            return (n.geometry.attributes = this.getAttributesData(l)), !1;
          for (let e of d) {
            let t = u[e],
              r = l[e];
            if (void 0 === r) return delete u[e], !1;
            if (t.version !== r.version) return (t.version = r.version), !1;
          }
          let c = s.index,
            p = o.indexVersion,
            g = c ? c.version : null;
          if (p !== g) return (o.indexVersion = g), !1;
          if (
            o.drawRange.start !== s.drawRange.start ||
            o.drawRange.count !== s.drawRange.count
          )
            return (
              (o.drawRange.start = s.drawRange.start),
              (o.drawRange.count = s.drawRange.count),
              !1
            );
          if (n.morphTargetInfluences) {
            let e = !1;
            for (let t = 0; t < n.morphTargetInfluences.length; t++)
              n.morphTargetInfluences[t] !== r.morphTargetInfluences[t] &&
                (e = !0);
            if (e) return !0;
          }
          if (n.lights) {
            for (let e = 0; e < t.length; e++)
              if (n.lights[e].map !== t[e].map) return !1;
          }
          return (
            n.center && !1 === n.center.equals(r.center)
              ? n.center.copy(r.center)
              : null !== e.bundle && (n.version = e.bundle.version),
            !0
          );
        }
        getLightsData(e) {
          let t = [];
          for (let r of e)
            !0 === r.isSpotLight &&
              null !== r.map &&
              t.push({ map: r.map.version });
          return t;
        }
        getLights(e, t) {
          if (h.has(e)) {
            let r = h.get(e);
            if (r.renderId === t) return r.lightsData;
          }
          let r = this.getLightsData(e.getLights());
          return h.set(e, { renderId: t, lightsData: r }), r;
        }
        needsRefresh(e, t) {
          if (
            this.hasNode ||
            this.hasAnimation ||
            this.firstInitialization(e) ||
            this.needsVelocity(t.renderer)
          )
            return !0;
          let { renderId: r } = t;
          if (this.renderId !== r) return (this.renderId = r), !0;
          let i = !0 === e.object.static,
            s =
              null !== e.bundle &&
              !0 === e.bundle.static &&
              this.getRenderObjectData(e).version === e.bundle.version;
          if (i || s) return !1;
          let n = this.getLights(e.lightsNode, r);
          return !0 !== this.equals(e, n);
        }
      }
      function p(e, t = 0) {
        let r = 0xdeadbeef ^ t,
          i = 0x41c6ce57 ^ t;
        if (e instanceof Array)
          for (let t = 0, s; t < e.length; t++)
            (r = Math.imul(r ^ (s = e[t]), 0x9e3779b1)),
              (i = Math.imul(i ^ s, 0x5f356495));
        else
          for (let t = 0, s; t < e.length; t++)
            (r = Math.imul(r ^ (s = e.charCodeAt(t)), 0x9e3779b1)),
              (i = Math.imul(i ^ s, 0x5f356495));
        return (
          (r =
            Math.imul(r ^ (r >>> 16), 0x85ebca6b) ^
            Math.imul(i ^ (i >>> 13), 0xc2b2ae35)),
          0x100000000 *
            (2097151 &
              (i =
                Math.imul(i ^ (i >>> 16), 0x85ebca6b) ^
                Math.imul(r ^ (r >>> 13), 0xc2b2ae35))) +
            (r >>> 0)
        );
      }
      let g = (e) => p(e),
        m = (e) => p(e),
        f = (...e) => p(e);
      function y(e, t = !1) {
        let r = [];
        for (let { property: i, childNode: s } of (!0 === e.isNode &&
          (r.push(e.id), (e = e.getSelf())),
        b(e)))
          r.push(p(i.slice(0, -4)), s.getCacheKey(t));
        return p(r);
      }
      function* b(e, t = !1) {
        for (let r in e) {
          if (!0 === r.startsWith("_")) continue;
          let i = e[r];
          if (!0 === Array.isArray(i))
            for (let e = 0; e < i.length; e++) {
              let s = i[e];
              s &&
                (!0 === s.isNode || (t && "function" == typeof s.toJSON)) &&
                (yield { property: r, index: e, childNode: s });
            }
          else if (i && !0 === i.isNode) yield { property: r, childNode: i };
          else if (i && Object.getPrototypeOf(i) === Object.prototype)
            for (let e in i) {
              if (!0 === e.startsWith("_")) continue;
              let s = i[e];
              s &&
                (!0 === s.isNode || (t && "function" == typeof s.toJSON)) &&
                (yield { property: r, index: e, childNode: s });
            }
        }
      }
      let x = new Map([
          [1, "float"],
          [2, "vec2"],
          [3, "vec3"],
          [4, "vec4"],
          [9, "mat3"],
          [16, "mat4"],
        ]),
        T = new WeakMap();
      function _(e) {
        if (/[iu]?vec\d/.test(e))
          return e.startsWith("ivec")
            ? Int32Array
            : e.startsWith("uvec")
            ? Uint32Array
            : Float32Array;
        if (/mat\d/.test(e) || /float/.test(e)) return Float32Array;
        if (/uint/.test(e)) return Uint32Array;
        if (/int/.test(e)) return Int32Array;
        throw Error(`THREE.NodeUtils: Unsupported type: ${e}`);
      }
      function v(e) {
        return /float|int|uint/.test(e)
          ? 1
          : /vec2/.test(e)
          ? 2
          : /vec3/.test(e)
          ? 3
          : /vec4/.test(e) || /mat2/.test(e)
          ? 4
          : /mat3/.test(e)
          ? 9
          : /mat4/.test(e)
          ? 16
          : void console.error("THREE.TSL: Unsupported type:", e);
      }
      function N(e) {
        if (null == e) return null;
        let t = typeof e;
        if (!0 === e.isNode) return "node";
        if ("number" === t) return "float";
        if ("boolean" === t) return "bool";
        if ("string" === t) return "string";
        if ("function" === t) return "shader";
        else if (!0 === e.isVector2) return "vec2";
        else if (!0 === e.isVector3) return "vec3";
        else if (!0 === e.isVector4) return "vec4";
        else if (!0 === e.isMatrix2) return "mat2";
        else if (!0 === e.isMatrix3) return "mat3";
        else if (!0 === e.isMatrix4) return "mat4";
        else if (!0 === e.isColor) return "color";
        else if (e instanceof ArrayBuffer) return "ArrayBuffer";
        return null;
      }
      function S(e, ...t) {
        let r = e ? e.slice(-4) : void 0;
        if (
          (1 === t.length &&
            ("vec2" === r
              ? (t = [t[0], t[0]])
              : "vec3" === r
              ? (t = [t[0], t[0], t[0]])
              : "vec4" === r && (t = [t[0], t[0], t[0], t[0]])),
          "color" === e)
        )
          return new u.Q1f(...t);
        if ("vec2" === r) return new u.I9Y(...t);
        if ("vec3" === r) return new u.Pq0(...t);
        if ("vec4" === r) return new u.IUQ(...t);
        if ("mat2" === r) return new u.k_V(...t);
        else if ("mat3" === r) return new u.dwI(...t);
        else if ("mat4" === r) return new u.kn4(...t);
        else if ("bool" === e) return t[0] || !1;
        else if ("float" === e || "int" === e || "uint" === e) return t[0] || 0;
        else if ("string" === e) return t[0] || "";
        else if ("ArrayBuffer" === e) return E(t[0]);
        return null;
      }
      function R(e) {
        let t = T.get(e);
        return void 0 === t && ((t = {}), T.set(e, t)), t;
      }
      function A(e) {
        let t = "",
          r = new Uint8Array(e);
        for (let e = 0; e < r.length; e++) t += String.fromCharCode(r[e]);
        return btoa(t);
      }
      function E(e) {
        return Uint8Array.from(atob(e), (e) => e.charCodeAt(0)).buffer;
      }
      let w = { VERTEX: "vertex", FRAGMENT: "fragment" },
        C = {
          NONE: "none",
          FRAME: "frame",
          RENDER: "render",
          OBJECT: "object",
        },
        M = {
          READ_ONLY: "readOnly",
          WRITE_ONLY: "writeOnly",
          READ_WRITE: "readWrite",
        },
        B = ["fragment", "vertex"],
        L = ["setup", "analyze", "generate"],
        F = [...B, "compute"],
        P = ["x", "y", "z", "w"],
        I = { analyze: "setup", generate: "analyze" },
        U = 0;
      class D extends u.Qev {
        static get type() {
          return "Node";
        }
        constructor(e = null) {
          super(),
            (this.nodeType = e),
            (this.updateType = C.NONE),
            (this.updateBeforeType = C.NONE),
            (this.updateAfterType = C.NONE),
            (this.uuid = u.cj9.generateUUID()),
            (this.version = 0),
            (this.global = !1),
            (this.parents = !1),
            (this.isNode = !0),
            (this._cacheKey = null),
            (this._cacheKeyVersion = 0),
            Object.defineProperty(this, "id", { value: U++ });
        }
        set needsUpdate(e) {
          !0 === e && this.version++;
        }
        get type() {
          return this.constructor.type;
        }
        onUpdate(e, t) {
          return (
            (this.updateType = t), (this.update = e.bind(this.getSelf())), this
          );
        }
        onFrameUpdate(e) {
          return this.onUpdate(e, C.FRAME);
        }
        onRenderUpdate(e) {
          return this.onUpdate(e, C.RENDER);
        }
        onObjectUpdate(e) {
          return this.onUpdate(e, C.OBJECT);
        }
        onReference(e) {
          return (this.updateReference = e.bind(this.getSelf())), this;
        }
        getSelf() {
          return this.self || this;
        }
        updateReference() {
          return this;
        }
        isGlobal() {
          return this.global;
        }
        *getChildren() {
          for (let { childNode: e } of b(this)) yield e;
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        traverse(e) {
          for (let t of (e(this), this.getChildren())) t.traverse(e);
        }
        getCacheKey(e = !1) {
          return (
            (!0 === (e = e || this.version !== this._cacheKeyVersion) ||
              null === this._cacheKey) &&
              ((this._cacheKey = f(y(this, e), this.customCacheKey())),
              (this._cacheKeyVersion = this.version)),
            this._cacheKey
          );
        }
        customCacheKey() {
          return 0;
        }
        getScope() {
          return this;
        }
        getHash() {
          return this.uuid;
        }
        getUpdateType() {
          return this.updateType;
        }
        getUpdateBeforeType() {
          return this.updateBeforeType;
        }
        getUpdateAfterType() {
          return this.updateAfterType;
        }
        getElementType(e) {
          let t = this.getNodeType(e);
          return e.getElementType(t);
        }
        getMemberType() {
          return "void";
        }
        getNodeType(e) {
          let t = e.getNodeProperties(this);
          return t.outputNode ? t.outputNode.getNodeType(e) : this.nodeType;
        }
        getShared(e) {
          let t = this.getHash(e);
          return e.getNodeFromHash(t) || this;
        }
        getArrayCount() {
          return null;
        }
        setup(e) {
          let t = e.getNodeProperties(this),
            r = 0;
          for (let e of this.getChildren()) t["node" + r++] = e;
          return t.outputNode || null;
        }
        analyze(e, t = null) {
          let r = e.increaseUsage(this);
          if (!0 === this.parents) {
            let r = e.getDataFromNode(this, "any");
            (r.stages = r.stages || {}),
              (r.stages[e.shaderStage] = r.stages[e.shaderStage] || []),
              r.stages[e.shaderStage].push(t);
          }
          if (1 === r)
            for (let t of Object.values(e.getNodeProperties(this)))
              t && !0 === t.isNode && t.build(e, this);
        }
        generate(e, t) {
          let { outputNode: r } = e.getNodeProperties(this);
          if (r && !0 === r.isNode) return r.build(e, t);
        }
        updateBefore() {
          console.warn("Abstract function.");
        }
        updateAfter() {
          console.warn("Abstract function.");
        }
        update() {
          console.warn("Abstract function.");
        }
        build(e, t = null) {
          let r = this.getShared(e);
          if (this !== r) return r.build(e, t);
          let i = e.getDataFromNode(this);
          (i.buildStages = i.buildStages || {}),
            (i.buildStages[e.buildStage] = !0);
          let s = I[e.buildStage];
          if (s && !0 !== i.buildStages[s]) {
            let t = e.getBuildStage();
            e.setBuildStage(s), this.build(e), e.setBuildStage(t);
          }
          e.addNode(this), e.addChain(this);
          let n = null,
            a = e.getBuildStage();
          if ("setup" === a) {
            this.updateReference(e);
            let t = e.getNodeProperties(this);
            if (!0 !== t.initialized) {
              for (let r of ((t.initialized = !0),
              (t.outputNode = this.setup(e) || t.outputNode || null),
              Object.values(t)))
                if (r && !0 === r.isNode) {
                  if (!0 === r.parents) {
                    let t = e.getNodeProperties(r);
                    (t.parents = t.parents || []), t.parents.push(this);
                  }
                  r.build(e);
                }
            }
            n = t.outputNode;
          } else if ("analyze" === a) this.analyze(e, t);
          else if ("generate" === a)
            if (1 === this.generate.length) {
              let r = this.getNodeType(e),
                i = e.getDataFromNode(this);
              void 0 === (n = i.snippet)
                ? void 0 === i.generated
                  ? ((i.generated = !0),
                    (i.snippet = n = this.generate(e) || ""))
                  : (console.warn("THREE.Node: Recursion detected.", this),
                    (n = "/* Recursion detected. */"))
                : void 0 !== i.flowCodes &&
                  void 0 !== e.context.nodeBlock &&
                  e.addFlowCodeHierarchy(this, e.context.nodeBlock),
                (n = e.format(n, r, t));
            } else n = this.generate(e, t) || "";
          return e.removeChain(this), e.addSequentialNode(this), n;
        }
        getSerializeChildren() {
          return b(this);
        }
        serialize(e) {
          let t = this.getSerializeChildren(),
            r = {};
          for (let { property: i, index: s, childNode: n } of t)
            void 0 !== s
              ? (void 0 === r[i] && (r[i] = Number.isInteger(s) ? [] : {}),
                (r[i][s] = n.toJSON(e.meta).uuid))
              : (r[i] = n.toJSON(e.meta).uuid);
          Object.keys(r).length > 0 && (e.inputNodes = r);
        }
        deserialize(e) {
          if (void 0 !== e.inputNodes) {
            let t = e.meta.nodes;
            for (let r in e.inputNodes)
              if (Array.isArray(e.inputNodes[r])) {
                let i = [];
                for (let s of e.inputNodes[r]) i.push(t[s]);
                this[r] = i;
              } else if ("object" == typeof e.inputNodes[r]) {
                let i = {};
                for (let s in e.inputNodes[r]) {
                  let n = e.inputNodes[r][s];
                  i[s] = t[n];
                }
                this[r] = i;
              } else {
                let i = e.inputNodes[r];
                this[r] = t[i];
              }
          }
        }
        toJSON(e) {
          let { uuid: t, type: r } = this,
            i = void 0 === e || "string" == typeof e;
          i && (e = { textures: {}, images: {}, nodes: {} });
          let s = e.nodes[t];
          function n(e) {
            let t = [];
            for (let r in e) {
              let i = e[r];
              delete i.metadata, t.push(i);
            }
            return t;
          }
          if (
            (void 0 === s &&
              ((s = {
                uuid: t,
                type: r,
                meta: e,
                metadata: {
                  version: 4.7,
                  type: "Node",
                  generator: "Node.toJSON",
                },
              }),
              !0 !== i && (e.nodes[s.uuid] = s),
              this.serialize(s),
              delete s.meta),
            i)
          ) {
            let t = n(e.textures),
              r = n(e.images),
              i = n(e.nodes);
            t.length > 0 && (s.textures = t),
              r.length > 0 && (s.images = r),
              i.length > 0 && (s.nodes = i);
          }
          return s;
        }
      }
      class V extends D {
        static get type() {
          return "ArrayElementNode";
        }
        constructor(e, t) {
          super(),
            (this.node = e),
            (this.indexNode = t),
            (this.isArrayElementNode = !0);
        }
        getNodeType(e) {
          return this.node.getElementType(e);
        }
        generate(e) {
          let t = this.indexNode.getNodeType(e),
            r = this.node.build(e),
            i = this.indexNode.build(
              e,
              !e.isVector(t) && e.isInteger(t) ? t : "uint"
            );
          return `${r}[ ${i} ]`;
        }
      }
      class O extends D {
        static get type() {
          return "ConvertNode";
        }
        constructor(e, t) {
          super(), (this.node = e), (this.convertTo = t);
        }
        getNodeType(e) {
          let t = this.node.getNodeType(e),
            r = null;
          for (let i of this.convertTo.split("|"))
            (null === r || e.getTypeLength(t) === e.getTypeLength(i)) &&
              (r = i);
          return r;
        }
        serialize(e) {
          super.serialize(e), (e.convertTo = this.convertTo);
        }
        deserialize(e) {
          super.deserialize(e), (this.convertTo = e.convertTo);
        }
        generate(e, t) {
          let r = this.node,
            i = this.getNodeType(e),
            s = r.build(e, i);
          return e.format(s, i, t);
        }
      }
      class G extends D {
        static get type() {
          return "TempNode";
        }
        constructor(e = null) {
          super(e), (this.isTempNode = !0);
        }
        hasDependencies(e) {
          return e.getDataFromNode(this).usageCount > 1;
        }
        build(e, t) {
          if ("generate" === e.getBuildStage()) {
            let r = e.getVectorType(this.getNodeType(e, t)),
              i = e.getDataFromNode(this);
            if (void 0 !== i.propertyName)
              return e.format(i.propertyName, r, t);
            if ("void" !== r && "void" !== t && this.hasDependencies(e)) {
              let s = super.build(e, r),
                n = e.getVarFromNode(this, null, r),
                a = e.getPropertyName(n);
              return (
                e.addLineFlowCode(`${a} = ${s}`, this),
                (i.snippet = s),
                (i.propertyName = a),
                e.format(i.propertyName, r, t)
              );
            }
          }
          return super.build(e, t);
        }
      }
      class k extends G {
        static get type() {
          return "JoinNode";
        }
        constructor(e = [], t = null) {
          super(t), (this.nodes = e);
        }
        getNodeType(e) {
          return null !== this.nodeType
            ? e.getVectorType(this.nodeType)
            : e.getTypeFromLength(
                this.nodes.reduce(
                  (t, r) => t + e.getTypeLength(r.getNodeType(e)),
                  0
                )
              );
        }
        generate(e, t) {
          let r = this.getNodeType(e),
            i = e.getTypeLength(r),
            s = this.nodes,
            n = e.getComponentType(r),
            a = [],
            o = 0;
          for (let t of s) {
            let s;
            if (o >= i) {
              console.error(
                `THREE.TSL: Length of parameters exceeds maximum length of function '${r}()' type.`
              );
              break;
            }
            let l = t.getNodeType(e),
              u = e.getTypeLength(l);
            o + u > i &&
              (console.error(
                `THREE.TSL: Length of '${r}()' data exceeds maximum length of output type.`
              ),
              (u = i - o),
              (l = e.getTypeFromLength(u))),
              (o += u),
              (s = t.build(e, l));
            let d = e.getComponentType(l);
            d !== n && (s = e.format(s, d, n)), a.push(s);
          }
          let l = `${e.getType(r)}( ${a.join(", ")} )`;
          return e.format(l, r, t);
        }
      }
      let z = P.join("");
      class $ extends D {
        static get type() {
          return "SplitNode";
        }
        constructor(e, t = "x") {
          super(),
            (this.node = e),
            (this.components = t),
            (this.isSplitNode = !0);
        }
        getVectorLength() {
          let e = this.components.length;
          for (let t of this.components) e = Math.max(P.indexOf(t) + 1, e);
          return e;
        }
        getComponentType(e) {
          return e.getComponentType(this.node.getNodeType(e));
        }
        getNodeType(e) {
          return e.getTypeFromLength(
            this.components.length,
            this.getComponentType(e)
          );
        }
        generate(e, t) {
          let r = this.node,
            i = e.getTypeLength(r.getNodeType(e)),
            s = null;
          if (i > 1) {
            let n = null;
            this.getVectorLength() >= i &&
              (n = e.getTypeFromLength(
                this.getVectorLength(),
                this.getComponentType(e)
              ));
            let a = r.build(e, n);
            s =
              this.components.length === i &&
              this.components === z.slice(0, this.components.length)
                ? e.format(a, n, t)
                : e.format(`${a}.${this.components}`, this.getNodeType(e), t);
          } else s = r.build(e, t);
          return s;
        }
        serialize(e) {
          super.serialize(e), (e.components = this.components);
        }
        deserialize(e) {
          super.deserialize(e), (this.components = e.components);
        }
      }
      class W extends G {
        static get type() {
          return "SetNode";
        }
        constructor(e, t, r) {
          super(),
            (this.sourceNode = e),
            (this.components = t),
            (this.targetNode = r);
        }
        getNodeType(e) {
          return this.sourceNode.getNodeType(e);
        }
        generate(e) {
          let { sourceNode: t, components: r, targetNode: i } = this,
            s = this.getNodeType(e),
            n = e.getComponentType(i.getNodeType(e)),
            a = e.getTypeFromLength(r.length, n),
            o = i.build(e, a),
            l = t.build(e, s),
            u = e.getTypeLength(s),
            d = [];
          for (let e = 0; e < u; e++) {
            let t = P[e];
            t === r[0] ? (d.push(o), (e += r.length - 1)) : d.push(l + "." + t);
          }
          return `${e.getType(s)}( ${d.join(", ")} )`;
        }
      }
      class H extends G {
        static get type() {
          return "FlipNode";
        }
        constructor(e, t) {
          super(), (this.sourceNode = e), (this.components = t);
        }
        getNodeType(e) {
          return this.sourceNode.getNodeType(e);
        }
        generate(e) {
          let { components: t, sourceNode: r } = this,
            i = this.getNodeType(e),
            s = r.build(e),
            n = e.getVarFromNode(this),
            a = e.getPropertyName(n);
          e.addLineFlowCode(a + " = " + s, this);
          let o = e.getTypeLength(i),
            l = [],
            u = 0;
          for (let e = 0; e < o; e++) {
            let r = P[e];
            r === t[u]
              ? (l.push("1.0 - " + a + "." + r), u++)
              : l.push(a + "." + r);
          }
          return `${e.getType(i)}( ${l.join(", ")} )`;
        }
      }
      class q extends D {
        static get type() {
          return "InputNode";
        }
        constructor(e, t = null) {
          super(t),
            (this.isInputNode = !0),
            (this.value = e),
            (this.precision = null);
        }
        getNodeType() {
          return null === this.nodeType ? N(this.value) : this.nodeType;
        }
        getInputType(e) {
          return this.getNodeType(e);
        }
        setPrecision(e) {
          return (this.precision = e), this;
        }
        serialize(e) {
          super.serialize(e),
            (e.value = this.value),
            this.value &&
              this.value.toArray &&
              (e.value = this.value.toArray()),
            (e.valueType = N(this.value)),
            (e.nodeType = this.nodeType),
            "ArrayBuffer" === e.valueType && (e.value = A(e.value)),
            (e.precision = this.precision);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.nodeType = e.nodeType),
            (this.value = Array.isArray(e.value)
              ? S(e.valueType, ...e.value)
              : e.value),
            (this.precision = e.precision || null),
            this.value &&
              this.value.fromArray &&
              (this.value = this.value.fromArray(e.value));
        }
        generate() {
          console.warn("Abstract function.");
        }
      }
      let j = /float|u?int/;
      class X extends q {
        static get type() {
          return "ConstNode";
        }
        constructor(e, t = null) {
          super(e, t), (this.isConstNode = !0);
        }
        generateConst(e) {
          return e.generateConst(this.getNodeType(e), this.value);
        }
        generate(e, t) {
          let r = this.getNodeType(e);
          return j.test(r) && j.test(t)
            ? e.generateConst(t, this.value)
            : e.format(this.generateConst(e), r, t);
        }
      }
      class K extends D {
        static get type() {
          return "MemberNode";
        }
        constructor(e, t) {
          super(),
            (this.node = e),
            (this.property = t),
            (this.isMemberNode = !0);
        }
        getNodeType(e) {
          return this.node.getMemberType(e, this.property);
        }
        generate(e) {
          return this.node.build(e) + "." + this.property;
        }
      }
      let Q = null,
        Y = new Map();
      function Z(e, t) {
        if (Y.has(e))
          return void console.warn(
            `THREE.TSL: Redefinition of method chaining '${e}'.`
          );
        if ("function" != typeof t)
          throw Error(`THREE.TSL: Node element ${e} is not a function`);
        Y.set(e, t);
      }
      let J = (e) =>
          e
            .replace(/r|s/g, "x")
            .replace(/g|t/g, "y")
            .replace(/b|p/g, "z")
            .replace(/a|q/g, "w"),
        ee = (e) => J(e).split("").sort().join(""),
        et = {
          setup: (e, t) => e(eR(t.shift()), ...t),
          get(e, t, r) {
            if ("string" == typeof t && void 0 === e[t]) {
              if (!0 !== e.isStackNode && "assign" === t)
                return (...e) => (Q.assign(r, ...e), r);
              else if (Y.has(t)) {
                let i = Y.get(t);
                return e.isStackNode
                  ? (...e) => r.add(i(...e))
                  : (...e) => i(r, ...e);
              } else if ("toVarIntent" === t) return () => r;
              else if ("self" === t) return e;
              else if (
                t.endsWith("Assign") &&
                Y.has(t.slice(0, t.length - 6))
              ) {
                let i = Y.get(t.slice(0, t.length - 6));
                return e.isStackNode
                  ? (...e) => r.assign(e[0], i(...e))
                  : (...e) => r.assign(i(r, ...e));
              } else if (!0 === /^[xyzwrgbastpq]{1,4}$/.test(t))
                return eN(new $(r, (t = J(t))));
              else if (!0 === /^set[XYZWRGBASTPQ]{1,4}$/.test(t))
                return (
                  (t = ee(t.slice(3).toLowerCase())),
                  (r) => eN(new W(e, t, eN(r)))
                );
              else if (!0 === /^flip[XYZWRGBASTPQ]{1,4}$/.test(t))
                return (
                  (t = ee(t.slice(4).toLowerCase())), () => eN(new H(eN(e), t))
                );
              else if ("width" === t || "height" === t || "depth" === t)
                return (
                  "width" === t
                    ? (t = "x")
                    : "height" === t
                    ? (t = "y")
                    : "depth" === t && (t = "z"),
                  eN(new $(e, t))
                );
              else if (!0 === /^\d+$/.test(t))
                return eN(new V(r, new X(Number(t), "uint")));
              else if (!0 === /^get$/.test(t)) return (e) => eN(new K(r, e));
            }
            return Reflect.get(e, t, r);
          },
          set: (e, t, r, i) =>
            "string" == typeof t &&
            void 0 === e[t] &&
            (!0 === /^[xyzwrgbastpq]{1,4}$/.test(t) ||
              "width" === t ||
              "height" === t ||
              "depth" === t ||
              !0 === /^\d+$/.test(t))
              ? (i[t].assign(r), !0)
              : Reflect.set(e, t, r, i),
        },
        er = new WeakMap(),
        ei = new WeakMap(),
        es = function (e, t = null) {
          let r = N(e);
          if ("node" === r) {
            let t = er.get(e);
            return (
              void 0 === t &&
                ((t = new Proxy(e, et)), er.set(e, t), er.set(t, t)),
              t
            );
          }
          return (null === t && ("float" === r || "boolean" === r)) ||
            (r && "shader" !== r && "string" !== r)
            ? eN(eb(e, t))
            : "shader" === r
            ? e.isFn
              ? e
              : eB(e)
            : e;
        },
        en = function (e, t = null) {
          for (let r in e) e[r] = eN(e[r], t);
          return e;
        },
        ea = function (e, t = null) {
          let r = e.length;
          for (let i = 0; i < r; i++) e[i] = eN(e[i], t);
          return e;
        },
        eo = function (e, t = null, r = null, i = null) {
          function s(e) {
            return (
              null !== i
                ? ((e = eN(Object.assign(e, i))),
                  !0 === i.intent && (e = e.toVarIntent()))
                : (e = eN(e)),
              e
            );
          }
          let n,
            a = t,
            o,
            l;
          function u(t) {
            let r;
            return ((r = a ? (/[a-z]/i.test(a) ? a + "()" : a) : e.type),
            void 0 !== o && t.length < o)
              ? (console.error(
                  `THREE.TSL: "${r}" parameter length is less than minimum required.`
                ),
                t.concat(Array(o - t.length).fill(0)))
              : void 0 !== l && t.length > l
              ? (console.error(
                  `THREE.TSL: "${r}" parameter length exceeds limit.`
                ),
                t.slice(0, l))
              : t;
          }
          return (
            null === t
              ? (n = (...t) => s(new e(...eA(u(t)))))
              : null !== r
              ? ((r = eN(r)), (n = (...i) => s(new e(t, ...eA(u(i)), r))))
              : (n = (...r) => s(new e(t, ...eA(u(r))))),
            (n.setParameterLength = (...e) => (
              1 === e.length ? (o = l = e[0]) : 2 === e.length && ([o, l] = e),
              n
            )),
            (n.setName = (e) => ((a = e), n)),
            n
          );
        },
        el = function (e, ...t) {
          return eN(new e(...eA(t)));
        };
      class eu extends D {
        constructor(e, t) {
          super(),
            (this.shaderNode = e),
            (this.inputNodes = t),
            (this.isShaderCallNodeInternal = !0);
        }
        getNodeType(e) {
          return (
            this.shaderNode.nodeType || this.getOutputNode(e).getNodeType(e)
          );
        }
        getMemberType(e, t) {
          return this.getOutputNode(e).getMemberType(e, t);
        }
        call(e) {
          let { shaderNode: t, inputNodes: r } = this,
            i = e.getNodeProperties(t),
            s = e.getClosestSubBuild(t.subBuilds) || "",
            n = s || "default";
          if (i[n]) return i[n];
          let a = e.subBuildFn;
          e.subBuildFn = s;
          let o = null;
          if (t.layout) {
            let i = ei.get(e.constructor);
            void 0 === i && ((i = new WeakMap()), ei.set(e.constructor, i));
            let s = i.get(t);
            void 0 === s && ((s = eN(e.buildFunctionNode(t))), i.set(t, s)),
              e.addInclude(s),
              (o = eN(s.call(r)));
          } else {
            let i = r;
            if (Array.isArray(i)) {
              let e = 0;
              i = new Proxy(i, {
                get: (t, r, i) =>
                  void 0 === t[r] ? t[e++] : Reflect.get(t, r, i),
              });
            }
            let s = t.jsFunc;
            o = eN(null !== i || s.length > 1 ? s(i || [], e) : s(e));
          }
          return (e.subBuildFn = a), t.once && (i[n] = o), o;
        }
        setupOutput(e) {
          return (
            e.addStack(), (e.stack.outputNode = this.call(e)), e.removeStack()
          );
        }
        getOutputNode(e) {
          let t = e.getNodeProperties(this),
            r = e.getSubBuildOutput(this);
          return (
            (t[r] = t[r] || this.setupOutput(e)),
            (t[r].subBuild = e.getClosestSubBuild(this)),
            t[r]
          );
        }
        build(e, t = null) {
          let r = null,
            i = e.getBuildStage(),
            s = e.getNodeProperties(this),
            n = e.getSubBuildOutput(this),
            a = this.getOutputNode(e);
          if ("setup" === i) {
            let t = e.getSubBuildProperty("initialized", this);
            if (
              !0 !== s[t] &&
              ((s[t] = !0),
              (s[n] = this.getOutputNode(e)),
              s[n].build(e),
              this.shaderNode.subBuilds)
            )
              for (let t of e.chaining) {
                let r = e.getDataFromNode(t, "any");
                for (let e of ((r.subBuilds = r.subBuilds || new Set()),
                this.shaderNode.subBuilds))
                  r.subBuilds.add(e);
              }
            r = s[n];
          } else
            "analyze" === i
              ? a.build(e, t)
              : "generate" === i && (r = a.build(e, t) || "");
          return r;
        }
      }
      class ed extends D {
        constructor(e, t) {
          super(t),
            (this.jsFunc = e),
            (this.layout = null),
            (this.global = !0),
            (this.once = !1);
        }
        setLayout(e) {
          return (this.layout = e), this;
        }
        call(e = null) {
          return eR(e), eN(new eu(this, e));
        }
        setup() {
          return this.call();
        }
      }
      let eh = [
          0.5,
          1.5,
          1 / 3,
          1e-6,
          1e6,
          Math.PI,
          2 * Math.PI,
          1 / Math.PI,
          2 / Math.PI,
          1 / (2 * Math.PI),
          Math.PI / 2,
        ],
        ec = new Map();
      for (let e of [!1, !0]) ec.set(e, new X(e));
      let ep = new Map();
      for (let e of [0, 1, 2, 3]) ep.set(e, new X(e, "uint"));
      let eg = new Map([...ep].map((e) => new X(e.value, "int")));
      for (let e of [-1, -2]) eg.set(e, new X(e, "int"));
      let em = new Map([...eg].map((e) => new X(e.value)));
      for (let e of eh) em.set(e, new X(e));
      for (let e of eh) em.set(-e, new X(-e));
      let ef = { bool: ec, uint: ep, ints: eg, float: em },
        ey = new Map([...ec, ...em]),
        eb = (e, t) =>
          ey.has(e) ? ey.get(e) : !0 === e.isNode ? e : new X(e, t),
        ex = function (e, t = null) {
          return (...r) => {
            if (
              ((0 === r.length ||
                (!["bool", "float", "int", "uint"].includes(e) &&
                  r.every((e) => "object" != typeof e))) &&
                (r = [S(e, ...r)]),
              1 === r.length && null !== t && t.has(r[0]))
            )
              return eS(t.get(r[0]));
            if (1 === r.length) {
              let t = eb(r[0], e);
              return t.nodeType === e ? eS(t) : eS(new O(t, e));
            }
            return eS(
              new k(
                r.map((e) => eb(e)),
                e
              )
            );
          };
        },
        eT = (e) => ("object" == typeof e && null !== e ? e.value : e),
        e_ = (e) =>
          null != e
            ? e.nodeType || e.convertTo || ("string" == typeof e ? e : null)
            : null;
      function ev(e, t) {
        return new Proxy(new ed(e, t), et);
      }
      let eN = (e, t = null) => es(e, t),
        eS = (e, t = null) => eN(e, t).toVarIntent(),
        eR = (e, t = null) => new en(e, t),
        eA = (e, t = null) => new ea(e, t),
        eE = (e, t = null, r = null, i = null) => new eo(e, t, r, i),
        ew = (e, ...t) => new el(e, ...t),
        eC = (e, t = null, r = null, i = {}) =>
          new eo(e, t, r, { intent: !0, ...i }),
        eM = 0,
        eB = (e, t = null) => {
          let r = null;
          null !== t &&
            ("object" == typeof t
              ? (r = t.return)
              : ("string" == typeof t
                  ? (r = t)
                  : console.error("THREE.TSL: Invalid layout type."),
                (t = null)));
          let i = new ev(e, r),
            s = (...e) => {
              let t;
              eR(e),
                (t =
                  e[0] &&
                  (e[0].isNode ||
                    Object.getPrototypeOf(e[0]) !== Object.prototype)
                    ? [...e]
                    : e[0]);
              let s = i.call(t);
              return "void" === r && s.toStack(), s.toVarIntent();
            };
          if (
            ((s.shaderNode = i),
            (s.id = i.id),
            (s.isFn = !0),
            (s.getNodeType = (...e) => i.getNodeType(...e)),
            (s.getCacheKey = (...e) => i.getCacheKey(...e)),
            (s.setLayout = (e) => (i.setLayout(e), s)),
            (s.once = (e = null) => ((i.once = !0), (i.subBuilds = e), s)),
            null !== t)
          ) {
            if ("object" != typeof t.inputs) {
              let e = { name: "fn" + eM++, type: r, inputs: [] };
              for (let r in t)
                "return" !== r && e.inputs.push({ name: r, type: t[r] });
              t = e;
            }
            s.setLayout(t);
          }
          return s;
        },
        eL = (e) => {
          Q = e;
        },
        eF = () => Q,
        eP = (...e) => Q.If(...e);
      function eI(e) {
        return Q && Q.add(e), e;
      }
      Z("toStack", eI);
      let eU = new ex("color"),
        eD = new ex("float", ef.float),
        eV = new ex("int", ef.ints),
        eO = new ex("uint", ef.uint),
        eG = new ex("bool", ef.bool),
        ek = new ex("vec2"),
        ez = new ex("ivec2"),
        e$ = new ex("uvec2"),
        eW = new ex("bvec2"),
        eH = new ex("vec3"),
        eq = new ex("ivec3"),
        ej = new ex("uvec3"),
        eX = new ex("bvec3"),
        eK = new ex("vec4"),
        eQ = new ex("ivec4"),
        eY = new ex("uvec4"),
        eZ = new ex("bvec4"),
        eJ = new ex("mat2"),
        e0 = new ex("mat3"),
        e1 = new ex("mat4");
      Z("toColor", eU),
        Z("toFloat", eD),
        Z("toInt", eV),
        Z("toUint", eO),
        Z("toBool", eG),
        Z("toVec2", ek),
        Z("toIVec2", ez),
        Z("toUVec2", e$),
        Z("toBVec2", eW),
        Z("toVec3", eH),
        Z("toIVec3", eq),
        Z("toUVec3", ej),
        Z("toBVec3", eX),
        Z("toVec4", eK),
        Z("toIVec4", eQ),
        Z("toUVec4", eY),
        Z("toBVec4", eZ),
        Z("toMat2", eJ),
        Z("toMat3", e0),
        Z("toMat4", e1);
      let e2 = eE(V).setParameterLength(2),
        e3 = (e, t) => eN(new O(eN(e), t));
      Z("element", e2),
        Z("convert", e3),
        Z(
          "append",
          (e) => (
            console.warn(
              "THREE.TSL: .append() has been renamed to .toStack()."
            ),
            eI(e)
          )
        );
      class e4 extends D {
        static get type() {
          return "PropertyNode";
        }
        constructor(e, t = null, r = !1) {
          super(e),
            (this.name = t),
            (this.varying = r),
            (this.isPropertyNode = !0),
            (this.global = !0);
        }
        getHash(e) {
          return this.name || super.getHash(e);
        }
        generate(e) {
          let t;
          return (
            !0 === this.varying
              ? ((t = e.getVaryingFromNode(
                  this,
                  this.name
                )).needsInterpolation = !0)
              : (t = e.getVarFromNode(this, this.name)),
            e.getPropertyName(t)
          );
        }
      }
      let e6 = (e, t) => eN(new e4(e, t)),
        e8 = (e, t) => eN(new e4(e, t, !0)),
        e5 = ew(e4, "vec4", "DiffuseColor"),
        e9 = ew(e4, "vec3", "EmissiveColor"),
        e7 = ew(e4, "float", "Roughness"),
        te = ew(e4, "float", "Metalness"),
        tt = ew(e4, "float", "Clearcoat"),
        tr = ew(e4, "float", "ClearcoatRoughness"),
        ti = ew(e4, "vec3", "Sheen"),
        ts = ew(e4, "float", "SheenRoughness"),
        tn = ew(e4, "float", "Iridescence"),
        ta = ew(e4, "float", "IridescenceIOR"),
        to = ew(e4, "float", "IridescenceThickness"),
        tl = ew(e4, "float", "AlphaT"),
        tu = ew(e4, "float", "Anisotropy"),
        td = ew(e4, "vec3", "AnisotropyT"),
        th = ew(e4, "vec3", "AnisotropyB"),
        tc = ew(e4, "color", "SpecularColor"),
        tp = ew(e4, "float", "SpecularF90"),
        tg = ew(e4, "float", "Shininess"),
        tm = ew(e4, "vec4", "Output"),
        tf = ew(e4, "float", "dashSize"),
        ty = ew(e4, "float", "gapSize"),
        tb = ew(e4, "float", "pointWidth"),
        tx = ew(e4, "float", "IOR"),
        tT = ew(e4, "float", "Transmission"),
        t_ = ew(e4, "float", "Thickness"),
        tv = ew(e4, "float", "AttenuationDistance"),
        tN = ew(e4, "color", "AttenuationColor"),
        tS = ew(e4, "float", "Dispersion");
      class tR extends D {
        static get type() {
          return "UniformGroupNode";
        }
        constructor(e, t = !1, r = 1) {
          super("string"),
            (this.name = e),
            (this.shared = t),
            (this.order = r),
            (this.isUniformGroup = !0);
        }
        serialize(e) {
          super.serialize(e),
            (e.name = this.name),
            (e.version = this.version),
            (e.shared = this.shared);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.name = e.name),
            (this.version = e.version),
            (this.shared = e.shared);
        }
      }
      let tA = (e) => new tR(e),
        tE = (e, t = 0) => new tR(e, !0, t),
        tw = tE("frame"),
        tC = tE("render"),
        tM = tA("object");
      class tB extends q {
        static get type() {
          return "UniformNode";
        }
        constructor(e, t = null) {
          super(e, t),
            (this.isUniformNode = !0),
            (this.name = ""),
            (this.groupNode = tM);
        }
        setName(e) {
          return (this.name = e), this;
        }
        label(e) {
          return (
            console.warn(
              'THREE.TSL: "label()" has been deprecated. Use "setName()" instead.'
            ),
            this.setName(e)
          );
        }
        setGroup(e) {
          return (this.groupNode = e), this;
        }
        getGroup() {
          return this.groupNode;
        }
        getUniformHash(e) {
          return this.getHash(e);
        }
        onUpdate(e, t) {
          let r = this.getSelf();
          return (
            (e = e.bind(r)),
            super.onUpdate((t) => {
              let i = e(t, r);
              void 0 !== i && (this.value = i);
            }, t)
          );
        }
        getInputType(e) {
          let t = super.getInputType(e);
          return "bool" === t && (t = "uint"), t;
        }
        generate(e, t) {
          let r = this.getNodeType(e),
            i = this.getUniformHash(e),
            s = e.getNodeFromHash(i);
          void 0 === s && (e.setHashNode(this, i), (s = this));
          let n = s.getInputType(e),
            a = e.getUniformFromNode(
              s,
              n,
              e.shaderStage,
              this.name || e.context.nodeName
            ),
            o = e.getPropertyName(a);
          void 0 !== e.context.nodeName && delete e.context.nodeName;
          let l = o;
          if ("bool" === r) {
            let t = e.getDataFromNode(this),
              i = t.propertyName;
            if (void 0 === i) {
              let s = e.getVarFromNode(this, null, "bool");
              (t.propertyName = i = e.getPropertyName(s)),
                (l = e.format(o, n, r)),
                e.addLineFlowCode(`${i} = ${l}`, this);
            }
            l = i;
          }
          return e.format(l, r, t);
        }
      }
      let tL = (e, t) => {
        let r = e_(t || e);
        return eN(
          new tB(
            e && !0 === e.isNode ? (e.node && e.node.value) || e.value : e,
            r
          )
        );
      };
      class tF extends G {
        static get type() {
          return "ArrayNode";
        }
        constructor(e, t, r = null) {
          super(e),
            (this.count = t),
            (this.values = r),
            (this.isArrayNode = !0);
        }
        getArrayCount() {
          return this.count;
        }
        getNodeType(e) {
          return (
            null === this.nodeType &&
              (this.nodeType = this.values[0].getNodeType(e)),
            this.nodeType
          );
        }
        getElementType(e) {
          return this.getNodeType(e);
        }
        generate(e) {
          let t = this.getNodeType(e);
          return e.generateArray(t, this.count, this.values);
        }
      }
      let tP = (...e) => {
        let t;
        if (1 === e.length) {
          let r = e[0];
          t = new tF(null, r.length, r);
        } else t = new tF(e[0], e[1]);
        return eN(t);
      };
      Z("toArray", (e, t) => tP(Array(t).fill(e)));
      class tI extends G {
        static get type() {
          return "AssignNode";
        }
        constructor(e, t) {
          super(),
            (this.targetNode = e),
            (this.sourceNode = t),
            (this.isAssignNode = !0);
        }
        hasDependencies() {
          return !1;
        }
        getNodeType(e, t) {
          return "void" !== t ? this.targetNode.getNodeType(e) : "void";
        }
        needsSplitAssign(e) {
          let { targetNode: t } = this;
          if (
            !1 === e.isAvailable("swizzleAssign") &&
            t.isSplitNode &&
            t.components.length > 1
          ) {
            let r = e.getTypeLength(t.node.getNodeType(e));
            return P.join("").slice(0, r) !== t.components;
          }
          return !1;
        }
        setup(e) {
          let { targetNode: t, sourceNode: r } = this;
          e.getNodeProperties(t).assign = !0;
          let i = e.getNodeProperties(this);
          (i.sourceNode = r), (i.targetNode = t.context({ assign: !0 }));
        }
        generate(e, t) {
          let r,
            { targetNode: i, sourceNode: s } = e.getNodeProperties(this),
            n = this.needsSplitAssign(e),
            a = i.getNodeType(e),
            o = i.build(e),
            l = s.build(e, a),
            u = s.getNodeType(e),
            d = e.getDataFromNode(this);
          if (!0 === d.initialized) "void" !== t && (r = o);
          else if (n) {
            let s = e.getVarFromNode(this, null, a),
              n = e.getPropertyName(s);
            e.addLineFlowCode(`${n} = ${l}`, this);
            let u = i.node,
              d = u.node.context({ assign: !0 }).build(e);
            for (let t = 0; t < u.components.length; t++) {
              let r = u.components[t];
              e.addLineFlowCode(`${d}.${r} = ${n}[ ${t} ]`, this);
            }
            "void" !== t && (r = o);
          } else
            (r = `${o} = ${l}`),
              ("void" === t || "void" === u) &&
                (e.addLineFlowCode(r, this), "void" !== t && (r = o));
          return (d.initialized = !0), e.format(r, a, t);
        }
      }
      let tU = eE(tI).setParameterLength(2);
      Z("assign", tU);
      class tD extends G {
        static get type() {
          return "FunctionCallNode";
        }
        constructor(e = null, t = {}) {
          super(), (this.functionNode = e), (this.parameters = t);
        }
        setParameters(e) {
          return (this.parameters = e), this;
        }
        getParameters() {
          return this.parameters;
        }
        getNodeType(e) {
          return this.functionNode.getNodeType(e);
        }
        generate(e) {
          let t = [],
            r = this.functionNode,
            i = r.getInputs(e),
            s = this.parameters,
            n = (t, r) => {
              let i = r.type;
              return "pointer" === i ? "&" + t.build(e) : t.build(e, i);
            };
          if (Array.isArray(s)) {
            if (s.length > i.length)
              console.error(
                "THREE.TSL: The number of provided parameters exceeds the expected number of inputs in 'Fn()'."
              ),
                (s.length = i.length);
            else if (s.length < i.length)
              for (
                console.error(
                  "THREE.TSL: The number of provided parameters is less than the expected number of inputs in 'Fn()'."
                );
                s.length < i.length;

              )
                s.push(eD(0));
            for (let e = 0; e < s.length; e++) t.push(n(s[e], i[e]));
          } else
            for (let e of i) {
              let r = s[e.name];
              void 0 !== r
                ? t.push(n(r, e))
                : (console.error(
                    `THREE.TSL: Input '${e.name}' not found in 'Fn()'.`
                  ),
                  t.push(n(eD(0), e)));
            }
          let a = r.build(e, "property");
          return `${a}( ${t.join(", ")} )`;
        }
      }
      let tV = (e, ...t) => (
        (t = t.length > 1 || (t[0] && !0 === t[0].isNode) ? eA(t) : eR(t[0])),
        eN(new tD(eN(e), t))
      );
      Z("call", tV);
      let tO = {
        "==": "equal",
        "!=": "notEqual",
        "<": "lessThan",
        ">": "greaterThan",
        "<=": "lessThanEqual",
        ">=": "greaterThanEqual",
        "%": "mod",
      };
      class tG extends G {
        static get type() {
          return "OperatorNode";
        }
        constructor(e, t, r, ...i) {
          if ((super(), i.length > 0)) {
            let s = new tG(e, t, r);
            for (let t = 0; t < i.length - 1; t++) s = new tG(e, s, i[t]);
            (t = s), (r = i[i.length - 1]);
          }
          (this.op = e),
            (this.aNode = t),
            (this.bNode = r),
            (this.isOperatorNode = !0);
        }
        getOperatorMethod(e, t) {
          return e.getMethod(tO[this.op], t);
        }
        getNodeType(e) {
          let t = this.op,
            r = this.aNode,
            i = this.bNode,
            s = r.getNodeType(e),
            n = i ? i.getNodeType(e) : null;
          if ("void" === s || "void" === n) return "void";
          if ("%" === t) return s;
          if (
            "~" === t ||
            "&" === t ||
            "|" === t ||
            "^" === t ||
            ">>" === t ||
            "<<" === t
          )
            return e.getIntegerType(s);
          if ("!" === t || "&&" === t || "||" === t || "^^" === t)
            return "bool";
          if (
            "==" === t ||
            "!=" === t ||
            "<" === t ||
            ">" === t ||
            "<=" === t ||
            ">=" === t
          ) {
            let t = Math.max(e.getTypeLength(s), e.getTypeLength(n));
            return t > 1 ? `bvec${t}` : "bool";
          } else {
            if (e.isMatrix(s)) {
              if ("float" === n) return s;
              else if (e.isVector(n)) return e.getVectorFromMatrix(s);
              else if (e.isMatrix(n)) return s;
            } else if (e.isMatrix(n)) {
              if ("float" === s) return n;
              else if (e.isVector(s)) return e.getVectorFromMatrix(n);
            }
            return e.getTypeLength(n) > e.getTypeLength(s) ? n : s;
          }
        }
        generate(e, t) {
          let r = this.op,
            { aNode: i, bNode: s } = this,
            n = this.getNodeType(e),
            a = null,
            o = null;
          "void" !== n
            ? ((a = i.getNodeType(e)),
              (o = s ? s.getNodeType(e) : null),
              "<" === r ||
              ">" === r ||
              "<=" === r ||
              ">=" === r ||
              "==" === r ||
              "!=" === r
                ? e.isVector(a)
                  ? (o = a)
                  : e.isVector(o)
                  ? (a = o)
                  : a !== o && (a = o = "float")
                : ">>" === r || "<<" === r
                ? ((a = n), (o = e.changeComponentType(o, "uint")))
                : "%" === r
                ? ((a = n), (o = e.isInteger(a) && e.isInteger(o) ? o : a))
                : e.isMatrix(a)
                ? "float" === o
                  ? (o = "float")
                  : e.isVector(o)
                  ? (o = e.getVectorFromMatrix(a))
                  : e.isMatrix(o) || (a = o = n)
                : (a = e.isMatrix(o)
                    ? "float" === a
                      ? "float"
                      : e.isVector(a)
                      ? e.getVectorFromMatrix(o)
                      : (o = n)
                    : (o = n)))
            : (a = o = n);
          let l = i.build(e, a),
            d = s ? s.build(e, o) : null,
            h = e.getFunctionOperator(r);
          if ("void" !== t) {
            let i = e.renderer.coordinateSystem === u.TdN;
            if (
              "==" === r ||
              "!=" === r ||
              "<" === r ||
              ">" === r ||
              "<=" === r ||
              ">=" === r
            )
              if (!i) return e.format(`( ${l} ${r} ${d} )`, n, t);
              else if (e.isVector(a))
                return e.format(
                  `${this.getOperatorMethod(e, t)}( ${l}, ${d} )`,
                  n,
                  t
                );
              else return e.format(`( ${l} ${r} ${d} )`, n, t);
            if ("%" === r)
              if (e.isInteger(o)) return e.format(`( ${l} % ${d} )`, n, t);
              else
                return e.format(
                  `${this.getOperatorMethod(e, n)}( ${l}, ${d} )`,
                  n,
                  t
                );
            {
              if ("!" === r || "~" === r) return e.format(`(${r}${l})`, a, t);
              if (h) return e.format(`${h}( ${l}, ${d} )`, n, t);
              if (e.isMatrix(a) && "float" === o)
                return e.format(`( ${d} ${r} ${l} )`, n, t);
              if ("float" === a && e.isMatrix(o))
                return e.format(`${l} ${r} ${d}`, n, t);
              let s = `( ${l} ${r} ${d} )`;
              return (
                !i &&
                  "bool" === n &&
                  e.isVector(a) &&
                  e.isVector(o) &&
                  (s = `all${s}`),
                e.format(s, n, t)
              );
            }
          }
          if ("void" !== a)
            if (h) return e.format(`${h}( ${l}, ${d} )`, n, t);
            else if (e.isMatrix(a) && "float" === o)
              return e.format(`${d} ${r} ${l}`, n, t);
            else return e.format(`${l} ${r} ${d}`, n, t);
        }
        serialize(e) {
          super.serialize(e), (e.op = this.op);
        }
        deserialize(e) {
          super.deserialize(e), (this.op = e.op);
        }
      }
      let tk = eC(tG, "+")
          .setParameterLength(2, 1 / 0)
          .setName("add"),
        tz = eC(tG, "-")
          .setParameterLength(2, 1 / 0)
          .setName("sub"),
        t$ = eC(tG, "*")
          .setParameterLength(2, 1 / 0)
          .setName("mul"),
        tW = eC(tG, "/")
          .setParameterLength(2, 1 / 0)
          .setName("div"),
        tH = eC(tG, "%").setParameterLength(2).setName("mod"),
        tq = eC(tG, "==").setParameterLength(2).setName("equal"),
        tj = eC(tG, "!=").setParameterLength(2).setName("notEqual"),
        tX = eC(tG, "<").setParameterLength(2).setName("lessThan"),
        tK = eC(tG, ">").setParameterLength(2).setName("greaterThan"),
        tQ = eC(tG, "<=").setParameterLength(2).setName("lessThanEqual"),
        tY = eC(tG, ">=").setParameterLength(2).setName("greaterThanEqual"),
        tZ = eC(tG, "&&")
          .setParameterLength(2, 1 / 0)
          .setName("and"),
        tJ = eC(tG, "||")
          .setParameterLength(2, 1 / 0)
          .setName("or"),
        t0 = eC(tG, "!").setParameterLength(1).setName("not"),
        t1 = eC(tG, "^^").setParameterLength(2).setName("xor"),
        t2 = eC(tG, "&").setParameterLength(2).setName("bitAnd"),
        t3 = eC(tG, "~").setParameterLength(2).setName("bitNot"),
        t4 = eC(tG, "|").setParameterLength(2).setName("bitOr"),
        t6 = eC(tG, "^").setParameterLength(2).setName("bitXor"),
        t8 = eC(tG, "<<").setParameterLength(2).setName("shiftLeft"),
        t5 = eC(tG, ">>").setParameterLength(2).setName("shiftRight"),
        t9 = eB(([e]) => (e.addAssign(1), e)),
        t7 = eB(([e]) => (e.subAssign(1), e)),
        re = eB(([e]) => {
          let t = eV(e).toConst();
          return e.addAssign(1), t;
        }),
        rt = eB(([e]) => {
          let t = eV(e).toConst();
          return e.subAssign(1), t;
        });
      Z("add", tk),
        Z("sub", tz),
        Z("mul", t$),
        Z("div", tW),
        Z("mod", tH),
        Z("equal", tq),
        Z("notEqual", tj),
        Z("lessThan", tX),
        Z("greaterThan", tK),
        Z("lessThanEqual", tQ),
        Z("greaterThanEqual", tY),
        Z("and", tZ),
        Z("or", tJ),
        Z("not", t0),
        Z("xor", t1),
        Z("bitAnd", t2),
        Z("bitNot", t3),
        Z("bitOr", t4),
        Z("bitXor", t6),
        Z("shiftLeft", t8),
        Z("shiftRight", t5),
        Z("incrementBefore", t9),
        Z("decrementBefore", t7),
        Z("increment", re),
        Z("decrement", rt);
      let rr = (e, t) => (
        console.warn(
          'THREE.TSL: "modInt()" is deprecated. Use "mod( int( ... ) )" instead.'
        ),
        tH(eV(e), eV(t))
      );
      Z("modInt", rr);
      class ri extends G {
        static get type() {
          return "MathNode";
        }
        constructor(e, t, r = null, i = null) {
          if (
            (super(), (e === ri.MAX || e === ri.MIN) && arguments.length > 3)
          ) {
            let s = new ri(e, t, r);
            for (let t = 2; t < arguments.length - 1; t++)
              s = new ri(e, s, arguments[t]);
            (t = s), (r = arguments[arguments.length - 1]), (i = null);
          }
          (this.method = e),
            (this.aNode = t),
            (this.bNode = r),
            (this.cNode = i),
            (this.isMathNode = !0);
        }
        getInputType(e) {
          let t = this.aNode.getNodeType(e),
            r = this.bNode ? this.bNode.getNodeType(e) : null,
            i = this.cNode ? this.cNode.getNodeType(e) : null,
            s = e.isMatrix(t) ? 0 : e.getTypeLength(t),
            n = e.isMatrix(r) ? 0 : e.getTypeLength(r),
            a = e.isMatrix(i) ? 0 : e.getTypeLength(i);
          if (s > n && s > a);
          else if (n > a) return r;
          else if (a > s) return i;
          return t;
        }
        getNodeType(e) {
          let t = this.method;
          return t === ri.LENGTH || t === ri.DISTANCE || t === ri.DOT
            ? "float"
            : t === ri.CROSS
            ? "vec3"
            : t === ri.ALL || t === ri.ANY
            ? "bool"
            : t === ri.EQUALS
            ? e.changeComponentType(this.aNode.getNodeType(e), "bool")
            : this.getInputType(e);
        }
        setup(e) {
          let { aNode: t, bNode: r, method: i } = this,
            s = null;
          if (i === ri.ONE_MINUS) s = tz(1, t);
          else if (i === ri.RECIPROCAL) s = tW(1, t);
          else if (i === ri.DIFFERENCE) s = rw(tz(t, r));
          else if (i === ri.TRANSFORM_DIRECTION) {
            let i = t,
              n = r;
            e.isMatrix(i.getNodeType(e))
              ? (n = eK(eH(n), 0))
              : (i = eK(eH(i), 0)),
              (s = rT(t$(i, n).xyz));
          }
          return null !== s ? s : super.setup(e);
        }
        generate(e, t) {
          if (e.getNodeProperties(this).outputNode) return super.generate(e, t);
          let r = this.method,
            i = this.getNodeType(e),
            s = this.getInputType(e),
            n = this.aNode,
            a = this.bNode,
            o = this.cNode,
            l = e.renderer.coordinateSystem;
          if (r === ri.NEGATE)
            return e.format("( - " + n.build(e, s) + " )", i, t);
          {
            let d = [];
            return (
              r === ri.CROSS
                ? d.push(n.build(e, i), a.build(e, i))
                : l === u.TdN && r === ri.STEP
                ? d.push(
                    n.build(
                      e,
                      1 === e.getTypeLength(n.getNodeType(e)) ? "float" : s
                    ),
                    a.build(e, s)
                  )
                : l === u.TdN && (r === ri.MIN || r === ri.MAX)
                ? d.push(
                    n.build(e, s),
                    a.build(
                      e,
                      1 === e.getTypeLength(a.getNodeType(e)) ? "float" : s
                    )
                  )
                : r === ri.REFRACT
                ? d.push(n.build(e, s), a.build(e, s), o.build(e, "float"))
                : r === ri.MIX
                ? d.push(
                    n.build(e, s),
                    a.build(e, s),
                    o.build(
                      e,
                      1 === e.getTypeLength(o.getNodeType(e)) ? "float" : s
                    )
                  )
                : (l === u.i7u && r === ri.ATAN && null !== a && (r = "atan2"),
                  "fragment" !== e.shaderStage &&
                    (r === ri.DFDX || r === ri.DFDY) &&
                    (console.warn(
                      `THREE.TSL: '${r}' is not supported in the ${e.shaderStage} stage.`
                    ),
                    (r = "/*" + r + "*/")),
                  d.push(n.build(e, s)),
                  null !== a && d.push(a.build(e, s)),
                  null !== o && d.push(o.build(e, s))),
              e.format(`${e.getMethod(r, i)}( ${d.join(", ")} )`, i, t)
            );
          }
        }
        serialize(e) {
          super.serialize(e), (e.method = this.method);
        }
        deserialize(e) {
          super.deserialize(e), (this.method = e.method);
        }
      }
      (ri.ALL = "all"),
        (ri.ANY = "any"),
        (ri.RADIANS = "radians"),
        (ri.DEGREES = "degrees"),
        (ri.EXP = "exp"),
        (ri.EXP2 = "exp2"),
        (ri.LOG = "log"),
        (ri.LOG2 = "log2"),
        (ri.SQRT = "sqrt"),
        (ri.INVERSE_SQRT = "inversesqrt"),
        (ri.FLOOR = "floor"),
        (ri.CEIL = "ceil"),
        (ri.NORMALIZE = "normalize"),
        (ri.FRACT = "fract"),
        (ri.SIN = "sin"),
        (ri.COS = "cos"),
        (ri.TAN = "tan"),
        (ri.ASIN = "asin"),
        (ri.ACOS = "acos"),
        (ri.ATAN = "atan"),
        (ri.ABS = "abs"),
        (ri.SIGN = "sign"),
        (ri.LENGTH = "length"),
        (ri.NEGATE = "negate"),
        (ri.ONE_MINUS = "oneMinus"),
        (ri.DFDX = "dFdx"),
        (ri.DFDY = "dFdy"),
        (ri.ROUND = "round"),
        (ri.RECIPROCAL = "reciprocal"),
        (ri.TRUNC = "trunc"),
        (ri.FWIDTH = "fwidth"),
        (ri.TRANSPOSE = "transpose"),
        (ri.DETERMINANT = "determinant"),
        (ri.INVERSE = "inverse"),
        (ri.BITCAST = "bitcast"),
        (ri.EQUALS = "equals"),
        (ri.MIN = "min"),
        (ri.MAX = "max"),
        (ri.STEP = "step"),
        (ri.REFLECT = "reflect"),
        (ri.DISTANCE = "distance"),
        (ri.DIFFERENCE = "difference"),
        (ri.DOT = "dot"),
        (ri.CROSS = "cross"),
        (ri.POW = "pow"),
        (ri.TRANSFORM_DIRECTION = "transformDirection"),
        (ri.MIX = "mix"),
        (ri.CLAMP = "clamp"),
        (ri.REFRACT = "refract"),
        (ri.SMOOTHSTEP = "smoothstep"),
        (ri.FACEFORWARD = "faceforward");
      let rs = eD(1e-6),
        rn = eD(1e6),
        ra = eD(Math.PI),
        ro = eD(2 * Math.PI),
        rl = eC(ri, ri.ALL).setParameterLength(1),
        ru = eC(ri, ri.ANY).setParameterLength(1),
        rd = eC(ri, ri.RADIANS).setParameterLength(1),
        rh = eC(ri, ri.DEGREES).setParameterLength(1),
        rc = eC(ri, ri.EXP).setParameterLength(1),
        rp = eC(ri, ri.EXP2).setParameterLength(1),
        rg = eC(ri, ri.LOG).setParameterLength(1),
        rm = eC(ri, ri.LOG2).setParameterLength(1),
        rf = eC(ri, ri.SQRT).setParameterLength(1),
        ry = eC(ri, ri.INVERSE_SQRT).setParameterLength(1),
        rb = eC(ri, ri.FLOOR).setParameterLength(1),
        rx = eC(ri, ri.CEIL).setParameterLength(1),
        rT = eC(ri, ri.NORMALIZE).setParameterLength(1),
        r_ = eC(ri, ri.FRACT).setParameterLength(1),
        rv = eC(ri, ri.SIN).setParameterLength(1),
        rN = eC(ri, ri.COS).setParameterLength(1),
        rS = eC(ri, ri.TAN).setParameterLength(1),
        rR = eC(ri, ri.ASIN).setParameterLength(1),
        rA = eC(ri, ri.ACOS).setParameterLength(1),
        rE = eC(ri, ri.ATAN).setParameterLength(1, 2),
        rw = eC(ri, ri.ABS).setParameterLength(1),
        rC = eC(ri, ri.SIGN).setParameterLength(1),
        rM = eC(ri, ri.LENGTH).setParameterLength(1),
        rB = eC(ri, ri.NEGATE).setParameterLength(1),
        rL = eC(ri, ri.ONE_MINUS).setParameterLength(1),
        rF = eC(ri, ri.DFDX).setParameterLength(1),
        rP = eC(ri, ri.DFDY).setParameterLength(1),
        rI = eC(ri, ri.ROUND).setParameterLength(1),
        rU = eC(ri, ri.RECIPROCAL).setParameterLength(1),
        rD = eC(ri, ri.TRUNC).setParameterLength(1),
        rV = eC(ri, ri.FWIDTH).setParameterLength(1),
        rO = eC(ri, ri.TRANSPOSE).setParameterLength(1),
        rG = eC(ri, ri.DETERMINANT).setParameterLength(1),
        rk = eC(ri, ri.INVERSE).setParameterLength(1),
        rz = eC(ri, ri.BITCAST).setParameterLength(2),
        r$ = (e, t) => (
          console.warn(
            'THREE.TSL: "equals" is deprecated. Use "equal" inside a vector instead, like: "bvec*( equal( ... ) )"'
          ),
          tq(e, t)
        ),
        rW = eC(ri, ri.MIN).setParameterLength(2, 1 / 0),
        rH = eC(ri, ri.MAX).setParameterLength(2, 1 / 0),
        rq = eC(ri, ri.STEP).setParameterLength(2),
        rj = eC(ri, ri.REFLECT).setParameterLength(2),
        rX = eC(ri, ri.DISTANCE).setParameterLength(2),
        rK = eC(ri, ri.DIFFERENCE).setParameterLength(2),
        rQ = eC(ri, ri.DOT).setParameterLength(2),
        rY = eC(ri, ri.CROSS).setParameterLength(2),
        rZ = eC(ri, ri.POW).setParameterLength(2),
        rJ = eC(ri, ri.POW, 2).setParameterLength(1),
        r0 = eC(ri, ri.POW, 3).setParameterLength(1),
        r1 = eC(ri, ri.POW, 4).setParameterLength(1),
        r2 = eC(ri, ri.TRANSFORM_DIRECTION).setParameterLength(2),
        r3 = (e) => t$(rC(e), rZ(rw(e), 1 / 3)),
        r4 = (e) => rQ(e, e),
        r6 = eC(ri, ri.MIX).setParameterLength(3),
        r8 = (e, t = 0, r = 1) => eN(new ri(ri.CLAMP, eN(e), eN(t), eN(r))),
        r5 = (e) => r8(e),
        r9 = eC(ri, ri.REFRACT).setParameterLength(3),
        r7 = eC(ri, ri.SMOOTHSTEP).setParameterLength(3),
        ie = eC(ri, ri.FACEFORWARD).setParameterLength(3),
        it = eB(([e]) =>
          r_(rv(tH(rQ(e.xy, ek(12.9898, 78.233)), ra)).mul(43758.5453))
        ),
        ir = (e, t, r) => r6(t, r, e),
        ii = (e, t, r) => r7(t, r, e),
        is = (e, t) => rq(t, e),
        ia = (e, t) => (
          console.warn('THREE.TSL: "atan2" is overloaded. Use "atan" instead.'),
          rE(e, t)
        );
      Z("all", rl),
        Z("any", ru),
        Z("equals", r$),
        Z("radians", rd),
        Z("degrees", rh),
        Z("exp", rc),
        Z("exp2", rp),
        Z("log", rg),
        Z("log2", rm),
        Z("sqrt", rf),
        Z("inverseSqrt", ry),
        Z("floor", rb),
        Z("ceil", rx),
        Z("normalize", rT),
        Z("fract", r_),
        Z("sin", rv),
        Z("cos", rN),
        Z("tan", rS),
        Z("asin", rR),
        Z("acos", rA),
        Z("atan", rE),
        Z("abs", rw),
        Z("sign", rC),
        Z("length", rM),
        Z("lengthSq", r4),
        Z("negate", rB),
        Z("oneMinus", rL),
        Z("dFdx", rF),
        Z("dFdy", rP),
        Z("round", rI),
        Z("reciprocal", rU),
        Z("trunc", rD),
        Z("fwidth", rV),
        Z("atan2", ia),
        Z("min", rW),
        Z("max", rH),
        Z("step", is),
        Z("reflect", rj),
        Z("distance", rX),
        Z("dot", rQ),
        Z("cross", rY),
        Z("pow", rZ),
        Z("pow2", rJ),
        Z("pow3", r0),
        Z("pow4", r1),
        Z("transformDirection", r2),
        Z("mix", ir),
        Z("clamp", r8),
        Z("refract", r9),
        Z("smoothstep", ii),
        Z("faceForward", ie),
        Z("difference", rK),
        Z("saturate", r5),
        Z("cbrt", r3),
        Z("transpose", rO),
        Z("determinant", rG),
        Z("inverse", rk),
        Z("rand", it);
      class io extends D {
        static get type() {
          return "ConditionalNode";
        }
        constructor(e, t, r = null) {
          super(), (this.condNode = e), (this.ifNode = t), (this.elseNode = r);
        }
        getNodeType(e) {
          let { ifNode: t, elseNode: r } = e.getNodeProperties(this);
          if (void 0 === t)
            return e.flowBuildStage(this, "setup"), this.getNodeType(e);
          let i = t.getNodeType(e);
          if (null !== r) {
            let t = r.getNodeType(e);
            if (e.getTypeLength(t) > e.getTypeLength(i)) return t;
          }
          return i;
        }
        setup(e) {
          let t = this.condNode.cache(),
            r = this.ifNode.cache(),
            i = this.elseNode ? this.elseNode.cache() : null,
            s = e.context.nodeBlock;
          (e.getDataFromNode(r).parentNodeBlock = s),
            null !== i && (e.getDataFromNode(i).parentNodeBlock = s);
          let n = e.getNodeProperties(this);
          (n.condNode = t),
            (n.ifNode = r.context({ nodeBlock: r })),
            (n.elseNode = i ? i.context({ nodeBlock: i }) : null);
        }
        generate(e, t) {
          let r = this.getNodeType(e),
            i = e.getDataFromNode(this);
          if (void 0 !== i.nodeProperty) return i.nodeProperty;
          let {
              condNode: s,
              ifNode: n,
              elseNode: a,
            } = e.getNodeProperties(this),
            o = e.currentFunctionNode,
            l = "void" !== t,
            u = l ? e6(r).build(e) : "";
          i.nodeProperty = u;
          let d = s.build(e, "bool");
          e.addFlowCode(
            `
${e.tab}if ( ${d} ) {

`
          ).addFlowTab();
          let h = n.build(e, r);
          if (
            (h &&
              (l
                ? (h = u + " = " + h + ";")
                : ((h = "return " + h + ";"),
                  null === o &&
                    (console.warn(
                      "THREE.TSL: Return statement used in an inline 'Fn()'. Define a layout struct to allow return values."
                    ),
                    (h = "// " + h)))),
            e
              .removeFlowTab()
              .addFlowCode(e.tab + "	" + h + "\n\n" + e.tab + "}"),
            null !== a)
          ) {
            e.addFlowCode(" else {\n\n").addFlowTab();
            let t = a.build(e, r);
            t &&
              (l
                ? (t = u + " = " + t + ";")
                : ((t = "return " + t + ";"),
                  null === o &&
                    (console.warn(
                      "THREE.TSL: Return statement used in an inline 'Fn()'. Define a layout struct to allow return values."
                    ),
                    (t = "// " + t)))),
              e
                .removeFlowTab()
                .addFlowCode(e.tab + "	" + t + "\n\n" + e.tab + "}\n\n");
          } else e.addFlowCode("\n\n");
          return e.format(u, r, t);
        }
      }
      let il = eE(io).setParameterLength(2, 3);
      Z("select", il);
      class iu extends D {
        static get type() {
          return "ContextNode";
        }
        constructor(e, t = {}) {
          super(), (this.isContextNode = !0), (this.node = e), (this.value = t);
        }
        getScope() {
          return this.node.getScope();
        }
        getNodeType(e) {
          return this.node.getNodeType(e);
        }
        analyze(e) {
          let t = e.getContext();
          e.setContext({ ...e.context, ...this.value }),
            this.node.build(e),
            e.setContext(t);
        }
        setup(e) {
          let t = e.getContext();
          e.setContext({ ...e.context, ...this.value }),
            this.node.build(e),
            e.setContext(t);
        }
        generate(e, t) {
          let r = e.getContext();
          e.setContext({ ...e.context, ...this.value });
          let i = this.node.build(e, t);
          return e.setContext(r), i;
        }
      }
      let id = eE(iu).setParameterLength(1, 2),
        ih = (e, t) => id(e, { nodeName: t });
      function ic(e, t) {
        return (
          console.warn(
            'THREE.TSL: "label()" has been deprecated. Use "setName()" instead.'
          ),
          ih(e, t)
        );
      }
      Z("context", id), Z("label", ic), Z("setName", ih);
      class ip extends D {
        static get type() {
          return "VarNode";
        }
        constructor(e, t = null, r = !1) {
          super(),
            (this.node = e),
            (this.name = t),
            (this.global = !0),
            (this.isVarNode = !0),
            (this.readOnly = r),
            (this.parents = !0),
            (this.intent = !1);
        }
        setIntent(e) {
          return (this.intent = e), this;
        }
        getIntent() {
          return this.intent;
        }
        getMemberType(e, t) {
          return this.node.getMemberType(e, t);
        }
        getElementType(e) {
          return this.node.getElementType(e);
        }
        getNodeType(e) {
          return this.node.getNodeType(e);
        }
        getArrayCount(e) {
          return this.node.getArrayCount(e);
        }
        build(...e) {
          return !0 === this.intent &&
            !0 !== e[0].getNodeProperties(this).assign
            ? this.node.build(...e)
            : super.build(...e);
        }
        generate(e) {
          let { node: t, name: r, readOnly: i } = this,
            { renderer: s } = e,
            n = !0 === s.backend.isWebGPUBackend,
            a = !1,
            o = !1;
          i && ((a = e.isDeterministic(t)), (o = n ? i : a));
          let l = e.getVectorType(this.getNodeType(e)),
            u = t.build(e, l),
            d = e.getVarFromNode(this, r, l, void 0, o),
            h = e.getPropertyName(d),
            c = h;
          if (o)
            if (n) c = a ? `const ${h}` : `let ${h}`;
            else {
              let r = t.getArrayCount(e);
              c = `const ${e.getVar(d.type, h, r)}`;
            }
          return e.addLineFlowCode(`${c} = ${u}`, this), h;
        }
      }
      let ig = eE(ip),
        im = (e, t = null) => ig(e, t).toStack(),
        iy = (e, t = null) => ig(e, t, !0).toStack(),
        ib = (e) => (null === eF() ? e : ig(e).setIntent(!0).toStack());
      Z("toVar", im), Z("toConst", iy), Z("toVarIntent", ib);
      let ix = (e) => (
        console.warn(
          'TSL: "temp( node )" is deprecated. Use "Var( node )" or "node.toVar()" instead.'
        ),
        ig(e)
      );
      Z("temp", ix);
      class iT extends D {
        static get type() {
          return "SubBuild";
        }
        constructor(e, t, r = null) {
          super(r),
            (this.node = e),
            (this.name = t),
            (this.isSubBuildNode = !0);
        }
        getNodeType(e) {
          if (null !== this.nodeType) return this.nodeType;
          e.addSubBuild(this.name);
          let t = this.node.getNodeType(e);
          return e.removeSubBuild(), t;
        }
        build(e, ...t) {
          e.addSubBuild(this.name);
          let r = this.node.build(e, ...t);
          return e.removeSubBuild(), r;
        }
      }
      let i_ = (e, t, r = null) => eN(new iT(eN(e), t, r));
      class iv extends D {
        static get type() {
          return "VaryingNode";
        }
        constructor(e, t = null) {
          super(),
            (this.node = e),
            (this.name = t),
            (this.isVaryingNode = !0),
            (this.interpolationType = null),
            (this.interpolationSampling = null),
            (this.global = !0);
        }
        setInterpolation(e, t = null) {
          return (
            (this.interpolationType = e), (this.interpolationSampling = t), this
          );
        }
        getHash(e) {
          return this.name || super.getHash(e);
        }
        getNodeType(e) {
          return this.node.getNodeType(e);
        }
        setupVarying(e) {
          let t = e.getNodeProperties(this),
            r = t.varying;
          if (void 0 === r) {
            let i = this.name,
              s = this.getNodeType(e),
              n = this.interpolationType,
              a = this.interpolationSampling;
            (t.varying = r = e.getVaryingFromNode(this, i, s, n, a)),
              (t.node = i_(this.node, "VERTEX"));
          }
          return (
            r.needsInterpolation ||
              (r.needsInterpolation = "fragment" === e.shaderStage),
            r
          );
        }
        setup(e) {
          this.setupVarying(e), e.flowNodeFromShaderStage(w.VERTEX, this.node);
        }
        analyze(e) {
          this.setupVarying(e), e.flowNodeFromShaderStage(w.VERTEX, this.node);
        }
        generate(e) {
          let t = e.getSubBuildProperty("property", e.currentStack),
            r = e.getNodeProperties(this),
            i = this.setupVarying(e);
          if (void 0 === r[t]) {
            let s = this.getNodeType(e),
              n = e.getPropertyName(i, w.VERTEX);
            e.flowNodeFromShaderStage(w.VERTEX, r.node, s, n), (r[t] = n);
          }
          return e.getPropertyName(i);
        }
      }
      let iN = eE(iv).setParameterLength(1, 2),
        iS = (e) => iN(e);
      Z("toVarying", iN),
        Z("toVertexStage", iS),
        Z(
          "varying",
          (...e) => (
            console.warn(
              "THREE.TSL: .varying() has been renamed to .toVarying()."
            ),
            iN(...e)
          )
        ),
        Z(
          "vertexStage",
          (...e) => (
            console.warn(
              "THREE.TSL: .vertexStage() has been renamed to .toVertexStage()."
            ),
            iN(...e)
          )
        );
      let iR = eB(([e]) => {
          let t = e.mul(0.9478672986).add(0.0521327014).pow(2.4);
          return r6(t, e.mul(0.0773993808), e.lessThanEqual(0.04045));
        }).setLayout({
          name: "sRGBTransferEOTF",
          type: "vec3",
          inputs: [{ name: "color", type: "vec3" }],
        }),
        iA = eB(([e]) => {
          let t = e.pow(0.41666).mul(1.055).sub(0.055);
          return r6(t, e.mul(12.92), e.lessThanEqual(0.0031308));
        }).setLayout({
          name: "sRGBTransferOETF",
          type: "vec3",
          inputs: [{ name: "color", type: "vec3" }],
        }),
        iE = "WorkingColorSpace";
      class iw extends G {
        static get type() {
          return "ColorSpaceNode";
        }
        constructor(e, t, r) {
          super("vec4"),
            (this.colorNode = e),
            (this.source = t),
            (this.target = r);
        }
        resolveColorSpace(e, t) {
          return t === iE
            ? u.ppV.workingColorSpace
            : "OutputColorSpace" === t
            ? e.context.outputColorSpace || e.renderer.outputColorSpace
            : t;
        }
        setup(e) {
          let { colorNode: t } = this,
            r = this.resolveColorSpace(e, this.source),
            i = this.resolveColorSpace(e, this.target),
            s = t;
          return (
            !1 !== u.ppV.enabled &&
              r !== i &&
              r &&
              i &&
              (u.ppV.getTransfer(r) === u.KLL && (s = eK(iR(s.rgb), s.a)),
              u.ppV.getPrimaries(r) !== u.ppV.getPrimaries(i) &&
                (s = eK(
                  e0(u.ppV._getMatrix(new u.dwI(), r, i)).mul(s.rgb),
                  s.a
                )),
              u.ppV.getTransfer(i) === u.KLL && (s = eK(iA(s.rgb), s.a))),
            s
          );
        }
      }
      let iC = (e, t) => eN(new iw(eN(e), iE, t)),
        iM = (e, t) => eN(new iw(eN(e), t, iE));
      Z("workingToColorSpace", iC), Z("colorSpaceToWorking", iM);
      let iB = class extends V {
        static get type() {
          return "ReferenceElementNode";
        }
        constructor(e, t) {
          super(e, t),
            (this.referenceNode = e),
            (this.isReferenceElementNode = !0);
        }
        getNodeType() {
          return this.referenceNode.uniformType;
        }
        generate(e) {
          let t = super.generate(e),
            r = this.referenceNode.getNodeType(),
            i = this.getNodeType();
          return e.format(t, r, i);
        }
      };
      class iL extends D {
        static get type() {
          return "ReferenceBaseNode";
        }
        constructor(e, t, r = null, i = null) {
          super(),
            (this.property = e),
            (this.uniformType = t),
            (this.object = r),
            (this.count = i),
            (this.properties = e.split(".")),
            (this.reference = r),
            (this.node = null),
            (this.group = null),
            (this.updateType = C.OBJECT);
        }
        setGroup(e) {
          return (this.group = e), this;
        }
        element(e) {
          return eN(new iB(this, eN(e)));
        }
        setNodeType(e) {
          let t = tL(null, e).getSelf();
          null !== this.group && t.setGroup(this.group), (this.node = t);
        }
        getNodeType(e) {
          return (
            null === this.node && (this.updateReference(e), this.updateValue()),
            this.node.getNodeType(e)
          );
        }
        getValueFromReference(e = this.reference) {
          let { properties: t } = this,
            r = e[t[0]];
          for (let e = 1; e < t.length; e++) r = r[t[e]];
          return r;
        }
        updateReference(e) {
          return (
            (this.reference = null !== this.object ? this.object : e.object),
            this.reference
          );
        }
        setup() {
          return this.updateValue(), this.node;
        }
        update() {
          this.updateValue();
        }
        updateValue() {
          null === this.node && this.setNodeType(this.uniformType);
          let e = this.getValueFromReference();
          Array.isArray(e) ? (this.node.array = e) : (this.node.value = e);
        }
      }
      class iF extends iL {
        static get type() {
          return "RendererReferenceNode";
        }
        constructor(e, t, r = null) {
          super(e, t, r), (this.renderer = r), this.setGroup(tC);
        }
        updateReference(e) {
          return (
            (this.reference =
              null !== this.renderer ? this.renderer : e.renderer),
            this.reference
          );
        }
      }
      let iP = (e, t, r = null) => eN(new iF(e, t, r));
      class iI extends G {
        static get type() {
          return "ToneMappingNode";
        }
        constructor(e, t = iD, r = null) {
          super("vec3"),
            (this.toneMapping = e),
            (this.exposureNode = t),
            (this.colorNode = r);
        }
        customCacheKey() {
          return f(this.toneMapping);
        }
        setup(e) {
          let t = this.colorNode || e.context.color,
            r = this.toneMapping;
          if (r === u.y_p) return t;
          let i = null,
            s = e.renderer.library.getToneMappingFunction(r);
          return (
            null !== s
              ? (i = eK(s(t.rgb, this.exposureNode), t.a))
              : (console.error(
                  "ToneMappingNode: Unsupported Tone Mapping configuration.",
                  r
                ),
                (i = t)),
            i
          );
        }
      }
      let iU = (e, t, r) => eN(new iI(e, eN(t), eN(r))),
        iD = iP("toneMappingExposure", "float");
      Z("toneMapping", (e, t, r) => iU(t, r, e));
      class iV extends q {
        static get type() {
          return "BufferAttributeNode";
        }
        constructor(e, t = null, r = 0, i = 0) {
          super(e, t),
            (this.isBufferNode = !0),
            (this.bufferType = t),
            (this.bufferStride = r),
            (this.bufferOffset = i),
            (this.usage = u.agE),
            (this.instanced = !1),
            (this.attribute = null),
            (this.global = !0),
            e &&
              !0 === e.isBufferAttribute &&
              ((this.attribute = e),
              (this.usage = e.usage),
              (this.instanced = e.isInstancedBufferAttribute));
        }
        getHash(e) {
          if (0 === this.bufferStride && 0 === this.bufferOffset) {
            let t = e.globalCache.getData(this.value);
            return (
              void 0 === t &&
                ((t = { node: this }), e.globalCache.setData(this.value, t)),
              t.node.uuid
            );
          }
          return this.uuid;
        }
        getNodeType(e) {
          return (
            null === this.bufferType &&
              (this.bufferType = e.getTypeFromAttribute(this.attribute)),
            this.bufferType
          );
        }
        setup(e) {
          if (null !== this.attribute) return;
          let t = this.getNodeType(e),
            r = this.value,
            i = e.getTypeLength(t),
            s = this.bufferStride || i,
            n = this.bufferOffset,
            a = !0 === r.isInterleavedBuffer ? r : new u.eB$(r, s),
            o = new u.eHs(a, i, n);
          a.setUsage(this.usage),
            (this.attribute = o),
            (this.attribute.isInstancedBufferAttribute = this.instanced);
        }
        generate(e) {
          let t = this.getNodeType(e),
            r = e.getBufferAttributeFromNode(this, t),
            i = e.getPropertyName(r),
            s = null;
          return (
            "vertex" === e.shaderStage || "compute" === e.shaderStage
              ? ((this.name = i), (s = i))
              : (s = iN(this).build(e, t)),
            s
          );
        }
        getInputType() {
          return "bufferAttribute";
        }
        setUsage(e) {
          return (
            (this.usage = e),
            this.attribute &&
              !0 === this.attribute.isBufferAttribute &&
              (this.attribute.usage = e),
            this
          );
        }
        setInstanced(e) {
          return (this.instanced = e), this;
        }
      }
      let iO = (e, t = null, r = 0, i = 0) => eN(new iV(e, t, r, i)),
        iG = (e, t = null, r = 0, i = 0) => iO(e, t, r, i).setUsage(u.Vnu),
        ik = (e, t = null, r = 0, i = 0) => iO(e, t, r, i).setInstanced(!0),
        iz = (e, t = null, r = 0, i = 0) => iG(e, t, r, i).setInstanced(!0);
      Z("toAttribute", (e) => iO(e.value));
      class i$ extends D {
        static get type() {
          return "ComputeNode";
        }
        constructor(e, t) {
          super("void"),
            (this.isComputeNode = !0),
            (this.computeNode = e),
            (this.workgroupSize = t),
            (this.count = null),
            (this.version = 1),
            (this.name = ""),
            (this.updateBeforeType = C.OBJECT),
            (this.onInitFunction = null);
        }
        setCount(e) {
          return (this.count = e), this;
        }
        getCount() {
          return this.count;
        }
        dispose() {
          this.dispatchEvent({ type: "dispose" });
        }
        setName(e) {
          return (this.name = e), this;
        }
        label(e) {
          return (
            console.warn(
              'THREE.TSL: "label()" has been deprecated. Use "setName()" instead.'
            ),
            this.setName(e)
          );
        }
        onInit(e) {
          return (this.onInitFunction = e), this;
        }
        updateBefore({ renderer: e }) {
          e.compute(this);
        }
        setup(e) {
          let t = this.computeNode.build(e);
          return (
            t &&
              ((e.getNodeProperties(this).outputComputeNode = t.outputNode),
              (t.outputNode = null)),
            t
          );
        }
        generate(e, t) {
          let { shaderStage: r } = e;
          if ("compute" === r) {
            let t = this.computeNode.build(e, "void");
            "" !== t && e.addLineFlowCode(t, this);
          } else {
            let r = e.getNodeProperties(this).outputComputeNode;
            if (r) return r.build(e, t);
          }
        }
      }
      let iW = (e, t = [64]) => {
          (0 === t.length || t.length > 3) &&
            console.error(
              "THREE.TSL: compute() workgroupSize must have 1, 2, or 3 elements"
            );
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            ("number" != typeof r || r <= 0 || !Number.isInteger(r)) &&
              console.error(
                `THREE.TSL: compute() workgroupSize element at index [ ${e} ] must be a positive integer`
              );
          }
          for (; t.length < 3; ) t.push(1);
          return eN(new i$(eN(e), t));
        },
        iH = (e, t, r) => iW(e, r).setCount(t);
      Z("compute", iH), Z("computeKernel", iW);
      class iq extends D {
        static get type() {
          return "CacheNode";
        }
        constructor(e, t = !0) {
          super(), (this.node = e), (this.parent = t), (this.isCacheNode = !0);
        }
        getNodeType(e) {
          let t = e.getCache(),
            r = e.getCacheFromNode(this, this.parent);
          e.setCache(r);
          let i = this.node.getNodeType(e);
          return e.setCache(t), i;
        }
        build(e, ...t) {
          let r = e.getCache(),
            i = e.getCacheFromNode(this, this.parent);
          e.setCache(i);
          let s = this.node.build(e, ...t);
          return e.setCache(r), s;
        }
      }
      let ij = (e, t) => eN(new iq(eN(e), t));
      Z("cache", ij);
      class iX extends D {
        static get type() {
          return "BypassNode";
        }
        constructor(e, t) {
          super(),
            (this.isBypassNode = !0),
            (this.outputNode = e),
            (this.callNode = t);
        }
        getNodeType(e) {
          return this.outputNode.getNodeType(e);
        }
        generate(e) {
          let t = this.callNode.build(e, "void");
          return (
            "" !== t && e.addLineFlowCode(t, this), this.outputNode.build(e)
          );
        }
      }
      let iK = eE(iX).setParameterLength(2);
      Z("bypass", iK);
      class iQ extends D {
        static get type() {
          return "RemapNode";
        }
        constructor(e, t, r, i = eD(0), s = eD(1)) {
          super(),
            (this.node = e),
            (this.inLowNode = t),
            (this.inHighNode = r),
            (this.outLowNode = i),
            (this.outHighNode = s),
            (this.doClamp = !0);
        }
        setup() {
          let {
              node: e,
              inLowNode: t,
              inHighNode: r,
              outLowNode: i,
              outHighNode: s,
              doClamp: n,
            } = this,
            a = e.sub(t).div(r.sub(t));
          return !0 === n && (a = a.clamp()), a.mul(s.sub(i)).add(i);
        }
      }
      let iY = eE(iQ, null, null, { doClamp: !1 }).setParameterLength(3, 5),
        iZ = eE(iQ).setParameterLength(3, 5);
      Z("remap", iY), Z("remapClamp", iZ);
      class iJ extends D {
        static get type() {
          return "ExpressionNode";
        }
        constructor(e = "", t = "void") {
          super(t), (this.snippet = e);
        }
        generate(e, t) {
          let r = this.getNodeType(e),
            i = this.snippet;
          if ("void" !== r) return e.format(i, r, t);
          e.addLineFlowCode(i, this);
        }
      }
      let i0 = eE(iJ).setParameterLength(1, 2),
        i1 = (e) => (e ? il(e, i0("discard")) : i0("discard")).toStack();
      Z("discard", i1);
      class i2 extends G {
        static get type() {
          return "RenderOutputNode";
        }
        constructor(e, t, r) {
          super("vec4"),
            (this.colorNode = e),
            (this.toneMapping = t),
            (this.outputColorSpace = r),
            (this.isRenderOutputNode = !0);
        }
        setup({ context: e }) {
          let t = this.colorNode || e.color,
            r =
              (null !== this.toneMapping ? this.toneMapping : e.toneMapping) ||
              u.y_p,
            i =
              (null !== this.outputColorSpace
                ? this.outputColorSpace
                : e.outputColorSpace) || u.jf0;
          return (
            r !== u.y_p && (t = t.toneMapping(r)),
            i !== u.jf0 &&
              i !== u.ppV.workingColorSpace &&
              (t = t.workingToColorSpace(i)),
            t
          );
        }
      }
      let i3 = (e, t = null, r = null) => eN(new i2(eN(e), t, r));
      Z("renderOutput", i3);
      class i4 extends G {
        static get type() {
          return "DebugNode";
        }
        constructor(e, t = null) {
          super(), (this.node = e), (this.callback = t);
        }
        getNodeType(e) {
          return this.node.getNodeType(e);
        }
        setup(e) {
          return this.node.build(e);
        }
        analyze(e) {
          return this.node.build(e);
        }
        generate(e) {
          let t = this.callback,
            r = this.node.build(e),
            i = "--- TSL debug - " + e.shaderStage + " shader ---",
            s = "-".repeat(i.length),
            n = "";
          return (
            (n +=
              "// #" +
              i +
              "#\n" +
              e.flow.code.replace(/^\t/gm, "") +
              "\n" +
              ("/* ... */ " + r) +
              " /* ... */\n" +
              ("// #" + s) +
              "#\n"),
            null !== t ? t(e, n) : console.log(n),
            r
          );
        }
      }
      let i6 = (e, t = null) => eN(new i4(eN(e), t)).toStack();
      Z("debug", i6);
      class i8 extends D {
        static get type() {
          return "AttributeNode";
        }
        constructor(e, t = null) {
          super(t), (this.global = !0), (this._attributeName = e);
        }
        getHash(e) {
          return this.getAttributeName(e);
        }
        getNodeType(e) {
          let t = this.nodeType;
          if (null === t) {
            let r = this.getAttributeName(e);
            if (e.hasGeometryAttribute(r)) {
              let i = e.geometry.getAttribute(r);
              t = e.getTypeFromAttribute(i);
            } else t = "float";
          }
          return t;
        }
        setAttributeName(e) {
          return (this._attributeName = e), this;
        }
        getAttributeName() {
          return this._attributeName;
        }
        generate(e) {
          let t = this.getAttributeName(e),
            r = this.getNodeType(e);
          if (!0 !== e.hasGeometryAttribute(t))
            return (
              console.warn(
                `AttributeNode: Vertex attribute "${t}" not found on geometry.`
              ),
              e.generateConst(r)
            );
          {
            let i = e.geometry.getAttribute(t),
              s = e.getTypeFromAttribute(i),
              n = e.getAttribute(t, s);
            return "vertex" === e.shaderStage
              ? e.format(n.name, s, r)
              : iN(this).build(e, r);
          }
        }
        serialize(e) {
          super.serialize(e),
            (e.global = this.global),
            (e._attributeName = this._attributeName);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.global = e.global),
            (this._attributeName = e._attributeName);
        }
      }
      let i5 = (e, t = null) => eN(new i8(e, t)),
        i9 = (e = 0) => i5("uv" + (e > 0 ? e : ""), "vec2");
      class i7 extends D {
        static get type() {
          return "TextureSizeNode";
        }
        constructor(e, t = null) {
          super("uvec2"),
            (this.isTextureSizeNode = !0),
            (this.textureNode = e),
            (this.levelNode = t);
        }
        generate(e, t) {
          let r = this.textureNode.build(e, "property"),
            i = null === this.levelNode ? "0" : this.levelNode.build(e, "int");
          return e.format(
            `${e.getMethod("textureDimensions")}( ${r}, ${i} )`,
            this.getNodeType(e),
            t
          );
        }
      }
      let se = eE(i7).setParameterLength(1, 2);
      class st extends tB {
        static get type() {
          return "MaxMipLevelNode";
        }
        constructor(e) {
          super(0), (this._textureNode = e), (this.updateType = C.FRAME);
        }
        get textureNode() {
          return this._textureNode;
        }
        get texture() {
          return this._textureNode.value;
        }
        update() {
          let e = this.texture,
            t = e.images,
            r = t && t.length > 0 ? (t[0] && t[0].image) || t[0] : e.image;
          if (r && void 0 !== r.width) {
            let { width: e, height: t } = r;
            this.value = Math.log2(Math.max(e, t));
          }
        }
      }
      let sr = eE(st).setParameterLength(1),
        si = new u.gPd();
      class ss extends tB {
        static get type() {
          return "TextureNode";
        }
        constructor(e = si, t = null, r = null, i = null) {
          super(e),
            (this.isTextureNode = !0),
            (this.uvNode = t),
            (this.levelNode = r),
            (this.biasNode = i),
            (this.compareNode = null),
            (this.depthNode = null),
            (this.gradNode = null),
            (this.sampler = !0),
            (this.updateMatrix = !1),
            (this.updateType = C.NONE),
            (this.referenceNode = null),
            (this._value = e),
            (this._matrixUniform = null),
            this.setUpdateMatrix(null === t);
        }
        set value(e) {
          this.referenceNode
            ? (this.referenceNode.value = e)
            : (this._value = e);
        }
        get value() {
          return this.referenceNode ? this.referenceNode.value : this._value;
        }
        getUniformHash() {
          return this.value.uuid;
        }
        getNodeType() {
          return !0 === this.value.isDepthTexture
            ? "float"
            : this.value.type === u.bkx
            ? "uvec4"
            : this.value.type === u.Yuy
            ? "ivec4"
            : "vec4";
        }
        getInputType() {
          return "texture";
        }
        getDefaultUV() {
          return i9(this.value.channel);
        }
        updateReference() {
          return this.value;
        }
        getTransformedUV(e) {
          return (
            null === this._matrixUniform &&
              (this._matrixUniform = tL(this.value.matrix)),
            this._matrixUniform.mul(eH(e, 1)).xy
          );
        }
        setUpdateMatrix(e) {
          return (
            (this.updateMatrix = e),
            (this.updateType = e ? C.OBJECT : C.NONE),
            this
          );
        }
        setupUV(e, t) {
          let r = this.value;
          return (
            e.isFlipY() &&
              ((r.image instanceof ImageBitmap && !0 === r.flipY) ||
                !0 === r.isRenderTargetTexture ||
                !0 === r.isFramebufferTexture ||
                !0 === r.isDepthTexture) &&
              (t = this.sampler
                ? t.flipY()
                : t.setY(eV(se(this, this.levelNode).y).sub(t.y).sub(1))),
            t
          );
        }
        setup(e) {
          let t = e.getNodeProperties(this);
          t.referenceNode = this.referenceNode;
          let r = this.value;
          if (!r || !0 !== r.isTexture)
            throw Error(
              "THREE.TSL: `texture( value )` function expects a valid instance of THREE.Texture()."
            );
          let i = this.uvNode;
          (null === i || !0 === e.context.forceUVContext) &&
            e.context.getUV &&
            (i = e.context.getUV(this, e)),
            i || (i = this.getDefaultUV()),
            !0 === this.updateMatrix && (i = this.getTransformedUV(i)),
            (i = this.setupUV(e, i));
          let s = this.levelNode;
          null === s &&
            e.context.getTextureLevel &&
            (s = e.context.getTextureLevel(this)),
            (t.uvNode = i),
            (t.levelNode = s),
            (t.biasNode = this.biasNode),
            (t.compareNode = this.compareNode),
            (t.gradNode = this.gradNode),
            (t.depthNode = this.depthNode);
        }
        generateUV(e, t) {
          return t.build(e, !0 === this.sampler ? "vec2" : "ivec2");
        }
        generateSnippet(e, t, r, i, s, n, a, o) {
          let l = this.value;
          return i
            ? e.generateTextureLevel(l, t, r, i, n)
            : s
            ? e.generateTextureBias(l, t, r, s, n)
            : o
            ? e.generateTextureGrad(l, t, r, o, n)
            : a
            ? e.generateTextureCompare(l, t, r, a, n)
            : !1 === this.sampler
            ? e.generateTextureLoad(l, t, r, n)
            : e.generateTexture(l, t, r, n);
        }
        generate(e, t) {
          let r = this.value,
            i = e.getNodeProperties(this),
            s = super.generate(e, "property");
          if (/^sampler/.test(t)) return s + "_sampler";
          {
            if (e.isReference(t)) return s;
            let n = e.getDataFromNode(this),
              a = n.propertyName;
            if (void 0 === a) {
              let {
                  uvNode: t,
                  levelNode: r,
                  biasNode: o,
                  compareNode: l,
                  depthNode: u,
                  gradNode: d,
                } = i,
                h = this.generateUV(e, t),
                c = r ? r.build(e, "float") : null,
                p = o ? o.build(e, "float") : null,
                g = u ? u.build(e, "int") : null,
                m = l ? l.build(e, "float") : null,
                f = d ? [d[0].build(e, "vec2"), d[1].build(e, "vec2")] : null,
                y = e.getVarFromNode(this);
              a = e.getPropertyName(y);
              let b = this.generateSnippet(e, s, h, c, p, g, m, f);
              e.addLineFlowCode(`${a} = ${b}`, this),
                (n.snippet = b),
                (n.propertyName = a);
            }
            let o = a,
              l = this.getNodeType(e);
            return (
              e.needsToWorkingColorSpace(r) &&
                (o = iM(i0(o, l), r.colorSpace).setup(e).build(e, l)),
              e.format(o, l, t)
            );
          }
        }
        setSampler(e) {
          return (this.sampler = e), this;
        }
        getSampler() {
          return this.sampler;
        }
        uv(e) {
          return (
            console.warn(
              "THREE.TextureNode: .uv() has been renamed. Use .sample() instead."
            ),
            this.sample(e)
          );
        }
        sample(e) {
          let t = this.clone();
          return (t.uvNode = eN(e)), (t.referenceNode = this.getSelf()), eN(t);
        }
        load(e) {
          return this.sample(e).setSampler(!1);
        }
        blur(e) {
          let t = this.clone();
          (t.biasNode = eN(e).mul(sr(t))), (t.referenceNode = this.getSelf());
          let r = t.value;
          return (
            !1 === t.generateMipmaps &&
              ((r && !1 === r.generateMipmaps) ||
                r.minFilter === u.hxR ||
                r.magFilter === u.hxR) &&
              (console.warn(
                "THREE.TSL: texture().blur() requires mipmaps and sampling. Use .generateMipmaps=true and .minFilter/.magFilter=THREE.LinearFilter in the Texture."
              ),
              (t.biasNode = null)),
            eN(t)
          );
        }
        level(e) {
          let t = this.clone();
          return (
            (t.levelNode = eN(e)), (t.referenceNode = this.getSelf()), eN(t)
          );
        }
        size(e) {
          return se(this, e);
        }
        bias(e) {
          let t = this.clone();
          return (
            (t.biasNode = eN(e)), (t.referenceNode = this.getSelf()), eN(t)
          );
        }
        compare(e) {
          let t = this.clone();
          return (
            (t.compareNode = eN(e)), (t.referenceNode = this.getSelf()), eN(t)
          );
        }
        grad(e, t) {
          let r = this.clone();
          return (
            (r.gradNode = [eN(e), eN(t)]),
            (r.referenceNode = this.getSelf()),
            eN(r)
          );
        }
        depth(e) {
          let t = this.clone();
          return (
            (t.depthNode = eN(e)), (t.referenceNode = this.getSelf()), eN(t)
          );
        }
        serialize(e) {
          super.serialize(e),
            (e.value = this.value.toJSON(e.meta).uuid),
            (e.sampler = this.sampler),
            (e.updateMatrix = this.updateMatrix),
            (e.updateType = this.updateType);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.value = e.meta.textures[e.value]),
            (this.sampler = e.sampler),
            (this.updateMatrix = e.updateMatrix),
            (this.updateType = e.updateType);
        }
        update() {
          let e = this.value,
            t = this._matrixUniform;
          null !== t && (t.value = e.matrix),
            !0 === e.matrixAutoUpdate && e.updateMatrix();
        }
        clone() {
          let e = new this.constructor(
            this.value,
            this.uvNode,
            this.levelNode,
            this.biasNode
          );
          return (
            (e.sampler = this.sampler),
            (e.depthNode = this.depthNode),
            (e.compareNode = this.compareNode),
            (e.gradNode = this.gradNode),
            e
          );
        }
      }
      let sn = eE(ss).setParameterLength(1, 4).setName("texture"),
        sa = (e = si, t = null, r = null, i = null) => {
          let s;
          return (
            e && !0 === e.isTextureNode
              ? (((s = eN(e.clone())).referenceNode = e.getSelf()),
                null !== t && (s.uvNode = eN(t)),
                null !== r && (s.levelNode = eN(r)),
                null !== i && (s.biasNode = eN(i)))
              : (s = sn(e, t, r, i)),
            s
          );
        },
        so = (...e) => sa(...e).setSampler(!1);
      class sl extends tB {
        static get type() {
          return "BufferNode";
        }
        constructor(e, t, r = 0) {
          super(e, t),
            (this.isBufferNode = !0),
            (this.bufferType = t),
            (this.bufferCount = r);
        }
        getElementType(e) {
          return this.getNodeType(e);
        }
        getInputType() {
          return "buffer";
        }
      }
      let su = (e, t, r) => eN(new sl(e, t, r));
      class sd extends V {
        static get type() {
          return "UniformArrayElementNode";
        }
        constructor(e, t) {
          super(e, t), (this.isArrayBufferElementNode = !0);
        }
        generate(e) {
          let t = super.generate(e),
            r = this.getNodeType(),
            i = this.node.getPaddedType();
          return e.format(t, i, r);
        }
      }
      class sh extends sl {
        static get type() {
          return "UniformArrayNode";
        }
        constructor(e, t = null) {
          super(null),
            (this.array = e),
            (this.elementType = null === t ? N(e[0]) : t),
            (this.paddedType = this.getPaddedType()),
            (this.updateType = C.RENDER),
            (this.isArrayBufferNode = !0);
        }
        getNodeType() {
          return this.paddedType;
        }
        getElementType() {
          return this.elementType;
        }
        getPaddedType() {
          let e = this.elementType,
            t = "vec4";
          return (
            "mat2" === e
              ? (t = "mat2")
              : !0 === /mat/.test(e)
              ? (t = "mat4")
              : "i" === e.charAt(0)
              ? (t = "ivec4")
              : "u" === e.charAt(0) && (t = "uvec4"),
            t
          );
        }
        update() {
          let { array: e, value: t } = this,
            r = this.elementType;
          if ("float" === r || "int" === r || "uint" === r)
            for (let r = 0; r < e.length; r++) t[4 * r] = e[r];
          else if ("color" === r)
            for (let r = 0; r < e.length; r++) {
              let i = 4 * r,
                s = e[r];
              (t[i] = s.r), (t[i + 1] = s.g), (t[i + 2] = s.b || 0);
            }
          else if ("mat2" === r)
            for (let r = 0; r < e.length; r++) {
              let i = 4 * r,
                s = e[r];
              (t[i] = s.elements[0]),
                (t[i + 1] = s.elements[1]),
                (t[i + 2] = s.elements[2]),
                (t[i + 3] = s.elements[3]);
            }
          else if ("mat3" === r)
            for (let r = 0; r < e.length; r++) {
              let i = 16 * r,
                s = e[r];
              (t[i] = s.elements[0]),
                (t[i + 1] = s.elements[1]),
                (t[i + 2] = s.elements[2]),
                (t[i + 4] = s.elements[3]),
                (t[i + 5] = s.elements[4]),
                (t[i + 6] = s.elements[5]),
                (t[i + 8] = s.elements[6]),
                (t[i + 9] = s.elements[7]),
                (t[i + 10] = s.elements[8]),
                (t[i + 15] = 1);
            }
          else if ("mat4" === r)
            for (let r = 0; r < e.length; r++) {
              let i = 16 * r,
                s = e[r];
              for (let e = 0; e < s.elements.length; e++)
                t[i + e] = s.elements[e];
            }
          else
            for (let r = 0; r < e.length; r++) {
              let i = 4 * r,
                s = e[r];
              (t[i] = s.x),
                (t[i + 1] = s.y),
                (t[i + 2] = s.z || 0),
                (t[i + 3] = s.w || 0);
            }
        }
        setup(e) {
          let t = this.array.length,
            r = this.elementType,
            i = Float32Array,
            s = this.paddedType,
            n = e.getTypeLength(s);
          return (
            "i" === r.charAt(0) && (i = Int32Array),
            "u" === r.charAt(0) && (i = Uint32Array),
            (this.value = new i(t * n)),
            (this.bufferCount = t),
            (this.bufferType = s),
            super.setup(e)
          );
        }
        element(e) {
          return eN(new sd(this, eN(e)));
        }
      }
      let sc = (e, t) => eN(new sh(e, t));
      class sp extends D {
        constructor(e) {
          super("float"), (this.name = e), (this.isBuiltinNode = !0);
        }
        generate() {
          return this.name;
        }
      }
      let sg = eE(sp).setParameterLength(1),
        sm = tL(0, "uint")
          .setName("u_cameraIndex")
          .setGroup(tE("cameraIndex"))
          .toVarying("v_cameraIndex"),
        sf = tL("float")
          .setName("cameraNear")
          .setGroup(tC)
          .onRenderUpdate(({ camera: e }) => e.near),
        sy = tL("float")
          .setName("cameraFar")
          .setGroup(tC)
          .onRenderUpdate(({ camera: e }) => e.far),
        sb = eB(({ camera: e }) => {
          let t;
          if (e.isArrayCamera && e.cameras.length > 0) {
            let r = [];
            for (let t of e.cameras) r.push(t.projectionMatrix);
            t = sc(r)
              .setGroup(tC)
              .setName("cameraProjectionMatrices")
              .element(e.isMultiViewCamera ? sg("gl_ViewID_OVR") : sm)
              .toVar("cameraProjectionMatrix");
          } else
            t = tL("mat4")
              .setName("cameraProjectionMatrix")
              .setGroup(tC)
              .onRenderUpdate(({ camera: e }) => e.projectionMatrix);
          return t;
        }).once()(),
        sx = eB(({ camera: e }) => {
          let t;
          if (e.isArrayCamera && e.cameras.length > 0) {
            let r = [];
            for (let t of e.cameras) r.push(t.projectionMatrixInverse);
            t = sc(r)
              .setGroup(tC)
              .setName("cameraProjectionMatricesInverse")
              .element(e.isMultiViewCamera ? sg("gl_ViewID_OVR") : sm)
              .toVar("cameraProjectionMatrixInverse");
          } else
            t = tL("mat4")
              .setName("cameraProjectionMatrixInverse")
              .setGroup(tC)
              .onRenderUpdate(({ camera: e }) => e.projectionMatrixInverse);
          return t;
        }).once()(),
        sT = eB(({ camera: e }) => {
          let t;
          if (e.isArrayCamera && e.cameras.length > 0) {
            let r = [];
            for (let t of e.cameras) r.push(t.matrixWorldInverse);
            t = sc(r)
              .setGroup(tC)
              .setName("cameraViewMatrices")
              .element(e.isMultiViewCamera ? sg("gl_ViewID_OVR") : sm)
              .toVar("cameraViewMatrix");
          } else
            t = tL("mat4")
              .setName("cameraViewMatrix")
              .setGroup(tC)
              .onRenderUpdate(({ camera: e }) => e.matrixWorldInverse);
          return t;
        }).once()(),
        s_ = tL("mat4")
          .setName("cameraWorldMatrix")
          .setGroup(tC)
          .onRenderUpdate(({ camera: e }) => e.matrixWorld),
        sv = tL("mat3")
          .setName("cameraNormalMatrix")
          .setGroup(tC)
          .onRenderUpdate(({ camera: e }) => e.normalMatrix),
        sN = tL(new u.Pq0())
          .setName("cameraPosition")
          .setGroup(tC)
          .onRenderUpdate(({ camera: e }, t) =>
            t.value.setFromMatrixPosition(e.matrixWorld)
          ),
        sS = new u.iyt();
      class sR extends D {
        static get type() {
          return "Object3DNode";
        }
        constructor(e, t = null) {
          super(),
            (this.scope = e),
            (this.object3d = t),
            (this.updateType = C.OBJECT),
            (this.uniformNode = new tB(null));
        }
        getNodeType() {
          let e = this.scope;
          return e === sR.WORLD_MATRIX
            ? "mat4"
            : e === sR.POSITION ||
              e === sR.VIEW_POSITION ||
              e === sR.DIRECTION ||
              e === sR.SCALE
            ? "vec3"
            : e === sR.RADIUS
            ? "float"
            : void 0;
        }
        update(e) {
          let t = this.object3d,
            r = this.uniformNode,
            i = this.scope;
          if (i === sR.WORLD_MATRIX) r.value = t.matrixWorld;
          else if (i === sR.POSITION)
            (r.value = r.value || new u.Pq0()),
              r.value.setFromMatrixPosition(t.matrixWorld);
          else if (i === sR.SCALE)
            (r.value = r.value || new u.Pq0()),
              r.value.setFromMatrixScale(t.matrixWorld);
          else if (i === sR.DIRECTION)
            (r.value = r.value || new u.Pq0()), t.getWorldDirection(r.value);
          else if (i === sR.VIEW_POSITION) {
            let i = e.camera;
            (r.value = r.value || new u.Pq0()),
              r.value.setFromMatrixPosition(t.matrixWorld),
              r.value.applyMatrix4(i.matrixWorldInverse);
          } else if (i === sR.RADIUS) {
            let i = e.object.geometry;
            null === i.boundingSphere && i.computeBoundingSphere(),
              sS.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),
              (r.value = sS.radius);
          }
        }
        generate(e) {
          let t = this.scope;
          return (
            t === sR.WORLD_MATRIX
              ? (this.uniformNode.nodeType = "mat4")
              : t === sR.POSITION ||
                t === sR.VIEW_POSITION ||
                t === sR.DIRECTION ||
                t === sR.SCALE
              ? (this.uniformNode.nodeType = "vec3")
              : t === sR.RADIUS && (this.uniformNode.nodeType = "float"),
            this.uniformNode.build(e)
          );
        }
        serialize(e) {
          super.serialize(e), (e.scope = this.scope);
        }
        deserialize(e) {
          super.deserialize(e), (this.scope = e.scope);
        }
      }
      (sR.WORLD_MATRIX = "worldMatrix"),
        (sR.POSITION = "position"),
        (sR.SCALE = "scale"),
        (sR.VIEW_POSITION = "viewPosition"),
        (sR.DIRECTION = "direction"),
        (sR.RADIUS = "radius");
      let sA = eE(sR, sR.DIRECTION).setParameterLength(1),
        sE = eE(sR, sR.WORLD_MATRIX).setParameterLength(1),
        sw = eE(sR, sR.POSITION).setParameterLength(1),
        sC = eE(sR, sR.SCALE).setParameterLength(1),
        sM = eE(sR, sR.VIEW_POSITION).setParameterLength(1),
        sB = eE(sR, sR.RADIUS).setParameterLength(1);
      class sL extends sR {
        static get type() {
          return "ModelNode";
        }
        constructor(e) {
          super(e);
        }
        update(e) {
          (this.object3d = e.object), super.update(e);
        }
      }
      let sF = ew(sL, sL.DIRECTION),
        sP = ew(sL, sL.WORLD_MATRIX),
        sI = ew(sL, sL.POSITION),
        sU = ew(sL, sL.SCALE),
        sD = ew(sL, sL.VIEW_POSITION),
        sV = ew(sL, sL.RADIUS),
        sO = tL(new u.dwI()).onObjectUpdate(({ object: e }, t) =>
          t.value.getNormalMatrix(e.matrixWorld)
        ),
        sG = tL(new u.kn4()).onObjectUpdate(({ object: e }, t) =>
          t.value.copy(e.matrixWorld).invert()
        ),
        sk = eB((e) => e.renderer.overrideNodes.modelViewMatrix || sz)
          .once()()
          .toVar("modelViewMatrix"),
        sz = sT.mul(sP),
        s$ = eB(
          (e) => (
            (e.context.isHighPrecisionModelViewMatrix = !0),
            tL("mat4").onObjectUpdate(({ object: e, camera: t }) =>
              e.modelViewMatrix.multiplyMatrices(
                t.matrixWorldInverse,
                e.matrixWorld
              )
            )
          )
        )
          .once()()
          .toVar("highpModelViewMatrix"),
        sW = eB((e) => {
          let t = e.context.isHighPrecisionModelViewMatrix;
          return tL("mat3").onObjectUpdate(
            ({ object: e, camera: r }) => (
              !0 !== t &&
                e.modelViewMatrix.multiplyMatrices(
                  r.matrixWorldInverse,
                  e.matrixWorld
                ),
              e.normalMatrix.getNormalMatrix(e.modelViewMatrix)
            )
          );
        })
          .once()()
          .toVar("highpModelNormalViewMatrix"),
        sH = i5("position", "vec3"),
        sq = sH.toVarying("positionLocal"),
        sj = sH.toVarying("positionPrevious"),
        sX = eB(
          (e) =>
            sP.mul(sq).xyz.toVarying(e.getSubBuildProperty("v_positionWorld")),
          "vec3"
        ).once(["POSITION"])(),
        sK = eB(
          () =>
            sq
              .transformDirection(sP)
              .toVarying("v_positionWorldDirection")
              .normalize()
              .toVar("positionWorldDirection"),
          "vec3"
        ).once(["POSITION"])(),
        sQ = eB(
          (e) => e.context.setupPositionView().toVarying("v_positionView"),
          "vec3"
        ).once(["POSITION"])(),
        sY = sQ
          .negate()
          .toVarying("v_positionViewDirection")
          .normalize()
          .toVar("positionViewDirection");
      class sZ extends D {
        static get type() {
          return "FrontFacingNode";
        }
        constructor() {
          super("bool"), (this.isFrontFacingNode = !0);
        }
        generate(e) {
          if ("fragment" !== e.shaderStage) return "true";
          let { renderer: t, material: r } = e;
          return t.coordinateSystem === u.TdN && r.side === u.hsX
            ? "false"
            : e.getFrontFacing();
        }
      }
      let sJ = ew(sZ),
        s0 = eD(sJ).mul(2).sub(1),
        s1 = eB(([e], { material: t }) => {
          let r = t.side;
          return (
            r === u.hsX ? (e = e.mul(-1)) : r === u.$EB && (e = e.mul(s0)), e
          );
        }),
        s2 = i5("normal", "vec3"),
        s3 = eB(
          (e) =>
            !1 === e.geometry.hasAttribute("normal")
              ? (console.warn(
                  'THREE.TSL: Vertex attribute "normal" not found on geometry.'
                ),
                eH(0, 1, 0))
              : s2,
          "vec3"
        )
          .once()()
          .toVar("normalLocal"),
        s4 = sQ.dFdx().cross(sQ.dFdy()).normalize().toVar("normalFlat"),
        s6 = eB(
          (e) =>
            !0 === e.material.flatShading
              ? s4
              : nt(s3).toVarying("v_normalViewGeometry").normalize(),
          "vec3"
        )
          .once()()
          .toVar("normalViewGeometry"),
        s8 = eB((e) => {
          let t = s6.transformDirection(sT);
          return (
            !0 !== e.material.flatShading &&
              (t = t.toVarying("v_normalWorldGeometry")),
            t.normalize().toVar("normalWorldGeometry")
          );
        }, "vec3").once()(),
        s5 = eB(({ subBuildFn: e, material: t, context: r }) => {
          let i;
          return (
            "NORMAL" === e || "VERTEX" === e
              ? ((i = s6), !0 !== t.flatShading && (i = s1(i)))
              : (i = r.setupNormal().context({ getUV: null })),
            i
          );
        }, "vec3")
          .once(["NORMAL", "VERTEX"])()
          .toVar("normalView"),
        s9 = s5.transformDirection(sT).toVar("normalWorld"),
        s7 = eB(
          ({ subBuildFn: e, context: t }) =>
            "NORMAL" === e || "VERTEX" === e
              ? s5
              : t.setupClearcoatNormal().context({ getUV: null }),
          "vec3"
        )
          .once(["NORMAL", "VERTEX"])()
          .toVar("clearcoatNormalView"),
        ne = eB(([e, t = sP]) => {
          let r = e0(t),
            i = e.div(eH(r[0].dot(r[0]), r[1].dot(r[1]), r[2].dot(r[2])));
          return r.mul(i).xyz;
        }),
        nt = eB(([e], t) => {
          let r = t.renderer.overrideNodes.modelNormalViewMatrix;
          if (null !== r) return r.transformDirection(e);
          let i = sO.mul(e);
          return sT.transformDirection(i);
        }),
        nr = eB(
          () => (
            console.warn(
              'THREE.TSL: "transformedNormalView" is deprecated. Use "normalView" instead.'
            ),
            s5
          )
        ).once(["NORMAL", "VERTEX"])(),
        ni = eB(
          () => (
            console.warn(
              'THREE.TSL: "transformedNormalWorld" is deprecated. Use "normalWorld" instead.'
            ),
            s9
          )
        ).once(["NORMAL", "VERTEX"])(),
        ns = eB(
          () => (
            console.warn(
              'THREE.TSL: "transformedClearcoatNormalView" is deprecated. Use "clearcoatNormalView" instead.'
            ),
            s7
          )
        ).once(["NORMAL", "VERTEX"])(),
        nn = new u.O9p(),
        na = new u.kn4(),
        no = tL(0)
          .onReference(({ material: e }) => e)
          .onObjectUpdate(({ material: e }) => e.refractionRatio),
        nl = tL(1)
          .onReference(({ material: e }) => e)
          .onObjectUpdate(function ({ material: e, scene: t }) {
            return e.envMap ? e.envMapIntensity : t.environmentIntensity;
          }),
        nu = tL(new u.kn4())
          .onReference(function (e) {
            return e.material;
          })
          .onObjectUpdate(function ({ material: e, scene: t }) {
            let r =
              null !== t.environment && null === e.envMap
                ? t.environmentRotation
                : e.envMapRotation;
            return (
              r ? (nn.copy(r), na.makeRotationFromEuler(nn)) : na.identity(), na
            );
          }),
        nd = sY.negate().reflect(s5),
        nh = sY.negate().refract(s5, no),
        nc = nd.transformDirection(sT).toVar("reflectVector"),
        np = nh.transformDirection(sT).toVar("reflectVector"),
        ng = new u.b4q();
      class nm extends ss {
        static get type() {
          return "CubeTextureNode";
        }
        constructor(e, t = null, r = null, i = null) {
          super(e, t, r, i), (this.isCubeTextureNode = !0);
        }
        getInputType() {
          return "cubeTexture";
        }
        getDefaultUV() {
          let e = this.value;
          return e.mapping === u.hy7
            ? nc
            : e.mapping === u.xFO
            ? np
            : (console.error(
                'THREE.CubeTextureNode: Mapping "%s" not supported.',
                e.mapping
              ),
              eH(0, 0, 0));
        }
        setUpdateMatrix() {}
        setupUV(e, t) {
          let r = this.value;
          return (
            (e.renderer.coordinateSystem !== u.i7u &&
              r.isRenderTargetTexture) ||
              (t = eH(t.x.negate(), t.yz)),
            nu.mul(t)
          );
        }
        generateUV(e, t) {
          return t.build(e, "vec3");
        }
      }
      let nf = eE(nm).setParameterLength(1, 4).setName("cubeTexture"),
        ny = (e = ng, t = null, r = null, i = null) => {
          let s;
          return (
            e && !0 === e.isCubeTextureNode
              ? (((s = eN(e.clone())).referenceNode = e.getSelf()),
                null !== t && (s.uvNode = eN(t)),
                null !== r && (s.levelNode = eN(r)),
                null !== i && (s.biasNode = eN(i)))
              : (s = nf(e, t, r, i)),
            s
          );
        };
      class nb extends V {
        static get type() {
          return "ReferenceElementNode";
        }
        constructor(e, t) {
          super(e, t),
            (this.referenceNode = e),
            (this.isReferenceElementNode = !0);
        }
        getNodeType() {
          return this.referenceNode.uniformType;
        }
        generate(e) {
          let t = super.generate(e),
            r = this.referenceNode.getNodeType(),
            i = this.getNodeType();
          return e.format(t, r, i);
        }
      }
      class nx extends D {
        static get type() {
          return "ReferenceNode";
        }
        constructor(e, t, r = null, i = null) {
          super(),
            (this.property = e),
            (this.uniformType = t),
            (this.object = r),
            (this.count = i),
            (this.properties = e.split(".")),
            (this.reference = r),
            (this.node = null),
            (this.group = null),
            (this.name = null),
            (this.updateType = C.OBJECT);
        }
        element(e) {
          return eN(new nb(this, eN(e)));
        }
        setGroup(e) {
          return (this.group = e), this;
        }
        setName(e) {
          return (this.name = e), this;
        }
        label(e) {
          return (
            console.warn(
              'THREE.TSL: "label()" has been deprecated. Use "setName()" instead.'
            ),
            this.setName(e)
          );
        }
        setNodeType(e) {
          let t = null;
          (t =
            null !== this.count
              ? su(null, e, this.count)
              : Array.isArray(this.getValueFromReference())
              ? sc(null, e)
              : "texture" === e
              ? sa(null)
              : "cubeTexture" === e
              ? ny(null)
              : tL(null, e)),
            null !== this.group && t.setGroup(this.group),
            null !== this.name && t.setName(this.name),
            (this.node = t.getSelf());
        }
        getNodeType(e) {
          return (
            null === this.node && (this.updateReference(e), this.updateValue()),
            this.node.getNodeType(e)
          );
        }
        getValueFromReference(e = this.reference) {
          let { properties: t } = this,
            r = e[t[0]];
          for (let e = 1; e < t.length; e++) r = r[t[e]];
          return r;
        }
        updateReference(e) {
          return (
            (this.reference = null !== this.object ? this.object : e.object),
            this.reference
          );
        }
        setup() {
          return this.updateValue(), this.node;
        }
        update() {
          this.updateValue();
        }
        updateValue() {
          null === this.node && this.setNodeType(this.uniformType);
          let e = this.getValueFromReference();
          Array.isArray(e) ? (this.node.array = e) : (this.node.value = e);
        }
      }
      let nT = (e, t, r) => eN(new nx(e, t, r)),
        n_ = (e, t, r, i) => eN(new nx(e, t, i, r));
      class nv extends nx {
        static get type() {
          return "MaterialReferenceNode";
        }
        constructor(e, t, r = null) {
          super(e, t, r),
            (this.material = r),
            (this.isMaterialReferenceNode = !0);
        }
        updateReference(e) {
          return (
            (this.reference =
              null !== this.material ? this.material : e.material),
            this.reference
          );
        }
      }
      let nN = (e, t, r = null) => eN(new nv(e, t, r)),
        nS = i9(),
        nR = sQ.dFdx(),
        nA = sQ.dFdy(),
        nE = nS.dFdx(),
        nw = nS.dFdy(),
        nC = nA.cross(s5),
        nM = s5.cross(nR),
        nB = nC.mul(nE.x).add(nM.mul(nw.x)),
        nL = nC.mul(nE.y).add(nM.mul(nw.y)),
        nF = nB.dot(nB).max(nL.dot(nL)),
        nP = nF.equal(0).select(0, nF.inverseSqrt()),
        nI = nB.mul(nP).toVar("tangentViewFrame"),
        nU = nL.mul(nP).toVar("bitangentViewFrame"),
        nD = eB(
          (e) => (
            !1 === e.geometry.hasAttribute("tangent") &&
              e.geometry.computeTangents(),
            i5("tangent", "vec4")
          )
        )(),
        nV = nD.xyz.toVar("tangentLocal"),
        nO = eB(({ subBuildFn: e, geometry: t, material: r }) => {
          let i;
          return (
            (i =
              "VERTEX" === e || t.hasAttribute("tangent")
                ? sk.mul(eK(nV, 0)).xyz.toVarying("v_tangentView").normalize()
                : nI),
            !0 !== r.flatShading && (i = s1(i)),
            i
          );
        }, "vec3")
          .once(["NORMAL", "VERTEX"])()
          .toVar("tangentView"),
        nG = nO
          .transformDirection(sT)
          .toVarying("v_tangentWorld")
          .normalize()
          .toVar("tangentWorld"),
        nk = eB(([e, t], { subBuildFn: r, material: i }) => {
          let s = e.mul(nD.w).xyz;
          return (
            "NORMAL" === r && !0 !== i.flatShading && (s = s.toVarying(t)), s
          );
        }).once(["NORMAL"]),
        nz = nk(s2.cross(nD), "v_bitangentGeometry")
          .normalize()
          .toVar("bitangentGeometry"),
        n$ = nk(s3.cross(nV), "v_bitangentLocal")
          .normalize()
          .toVar("bitangentLocal"),
        nW = eB(({ subBuildFn: e, geometry: t, material: r }) => {
          let i;
          return (
            (i =
              "VERTEX" === e || t.hasAttribute("tangent")
                ? nk(s5.cross(nO), "v_bitangentView").normalize()
                : nU),
            !0 !== r.flatShading && (i = s1(i)),
            i
          );
        }, "vec3")
          .once(["NORMAL", "VERTEX"])()
          .toVar("bitangentView"),
        nH = nk(s9.cross(nG), "v_bitangentWorld")
          .normalize()
          .toVar("bitangentWorld"),
        nq = e0(nO, nW, s5).toVar("TBNViewMatrix"),
        nj = sY.mul(nq),
        nX = eB(() => {
          let e = th.cross(sY);
          return r6(
            (e = e.cross(th).normalize()),
            s5,
            tu.mul(e7.oneMinus()).oneMinus().pow2().pow2()
          ).normalize();
        }).once()();
      class nK extends G {
        static get type() {
          return "NormalMapNode";
        }
        constructor(e, t = null) {
          super("vec3"),
            (this.node = e),
            (this.scaleNode = t),
            (this.normalMapType = u.bI3);
        }
        setup({ material: e }) {
          let { normalMapType: t, scaleNode: r } = this,
            i = this.node.mul(2).sub(1);
          if (null !== r) {
            let t = r;
            !0 === e.flatShading && (t = s1(t)), (i = eH(i.xy.mul(t), i.z));
          }
          let s = null;
          return (
            t === u.vyJ
              ? (s = nt(i))
              : t === u.bI3
              ? (s = nq.mul(i).normalize())
              : (console.error(
                  `THREE.NodeMaterial: Unsupported normal map type: ${t}`
                ),
                (s = s5)),
            s
          );
        }
      }
      let nQ = eE(nK).setParameterLength(1, 2),
        nY = eB(({ textureNode: e, bumpScale: t }) => {
          let r = (t) =>
              e
                .cache()
                .context({
                  getUV: (e) => t(e.uvNode || i9()),
                  forceUVContext: !0,
                }),
            i = eD(r((e) => e));
          return ek(
            eD(r((e) => e.add(e.dFdx()))).sub(i),
            eD(r((e) => e.add(e.dFdy()))).sub(i)
          ).mul(t);
        }),
        nZ = eB((e) => {
          let { surf_pos: t, surf_norm: r, dHdxy: i } = e,
            s = t.dFdx().normalize(),
            n = t.dFdy().normalize().cross(r),
            a = r.cross(s),
            o = s.dot(n).mul(s0),
            l = o.sign().mul(i.x.mul(n).add(i.y.mul(a)));
          return o.abs().mul(r).sub(l).normalize();
        });
      class nJ extends G {
        static get type() {
          return "BumpMapNode";
        }
        constructor(e, t = null) {
          super("vec3"), (this.textureNode = e), (this.scaleNode = t);
        }
        setup() {
          let e = null !== this.scaleNode ? this.scaleNode : 1;
          return nZ({
            surf_pos: sQ,
            surf_norm: s5,
            dHdxy: nY({ textureNode: this.textureNode, bumpScale: e }),
          });
        }
      }
      let n0 = eE(nJ).setParameterLength(1, 2),
        n1 = new Map();
      class n2 extends D {
        static get type() {
          return "MaterialNode";
        }
        constructor(e) {
          super(), (this.scope = e);
        }
        getCache(e, t) {
          let r = n1.get(e);
          return void 0 === r && ((r = nN(e, t)), n1.set(e, r)), r;
        }
        getFloat(e) {
          return this.getCache(e, "float");
        }
        getColor(e) {
          return this.getCache(e, "color");
        }
        getTexture(e) {
          return this.getCache("map" === e ? "map" : e + "Map", "texture");
        }
        setup(e) {
          let t = e.context.material,
            r = this.scope,
            i = null;
          if (r === n2.COLOR) {
            let e = void 0 !== t.color ? this.getColor(r) : eH();
            i =
              t.map && !0 === t.map.isTexture
                ? e.mul(this.getTexture("map"))
                : e;
          } else if (r === n2.OPACITY) {
            let e = this.getFloat(r);
            i =
              t.alphaMap && !0 === t.alphaMap.isTexture
                ? e.mul(this.getTexture("alpha"))
                : e;
          } else if (r === n2.SPECULAR_STRENGTH)
            i =
              t.specularMap && !0 === t.specularMap.isTexture
                ? this.getTexture("specular").r
                : eD(1);
          else if (r === n2.SPECULAR_INTENSITY) {
            let e = this.getFloat(r);
            i =
              t.specularIntensityMap && !0 === t.specularIntensityMap.isTexture
                ? e.mul(this.getTexture(r).a)
                : e;
          } else if (r === n2.SPECULAR_COLOR) {
            let e = this.getColor(r);
            i =
              t.specularColorMap && !0 === t.specularColorMap.isTexture
                ? e.mul(this.getTexture(r).rgb)
                : e;
          } else if (r === n2.ROUGHNESS) {
            let e = this.getFloat(r);
            i =
              t.roughnessMap && !0 === t.roughnessMap.isTexture
                ? e.mul(this.getTexture(r).g)
                : e;
          } else if (r === n2.METALNESS) {
            let e = this.getFloat(r);
            i =
              t.metalnessMap && !0 === t.metalnessMap.isTexture
                ? e.mul(this.getTexture(r).b)
                : e;
          } else if (r === n2.EMISSIVE) {
            let e = this.getFloat("emissiveIntensity"),
              s = this.getColor(r).mul(e);
            i =
              t.emissiveMap && !0 === t.emissiveMap.isTexture
                ? s.mul(this.getTexture(r))
                : s;
          } else if (r === n2.NORMAL)
            t.normalMap
              ? ((i = nQ(
                  this.getTexture("normal"),
                  this.getCache("normalScale", "vec2")
                )).normalMapType = t.normalMapType)
              : (i = t.bumpMap
                  ? n0(this.getTexture("bump").r, this.getFloat("bumpScale"))
                  : s5);
          else if (r === n2.CLEARCOAT) {
            let e = this.getFloat(r);
            i =
              t.clearcoatMap && !0 === t.clearcoatMap.isTexture
                ? e.mul(this.getTexture(r).r)
                : e;
          } else if (r === n2.CLEARCOAT_ROUGHNESS) {
            let e = this.getFloat(r);
            i =
              t.clearcoatRoughnessMap &&
              !0 === t.clearcoatRoughnessMap.isTexture
                ? e.mul(this.getTexture(r).r)
                : e;
          } else if (r === n2.CLEARCOAT_NORMAL)
            i = t.clearcoatNormalMap
              ? nQ(this.getTexture(r), this.getCache(r + "Scale", "vec2"))
              : s5;
          else if (r === n2.SHEEN) {
            let e = this.getColor("sheenColor").mul(this.getFloat("sheen"));
            i =
              t.sheenColorMap && !0 === t.sheenColorMap.isTexture
                ? e.mul(this.getTexture("sheenColor").rgb)
                : e;
          } else if (r === n2.SHEEN_ROUGHNESS) {
            let e = this.getFloat(r);
            i = (i =
              t.sheenRoughnessMap && !0 === t.sheenRoughnessMap.isTexture
                ? e.mul(this.getTexture(r).a)
                : e).clamp(0.07, 1);
          } else if (r === n2.ANISOTROPY)
            if (t.anisotropyMap && !0 === t.anisotropyMap.isTexture) {
              let e = this.getTexture(r);
              i = eJ(aM.x, aM.y, aM.y.negate(), aM.x).mul(
                e.rg.mul(2).sub(ek(1)).normalize().mul(e.b)
              );
            } else i = aM;
          else if (r === n2.IRIDESCENCE_THICKNESS) {
            let e = nT("1", "float", t.iridescenceThicknessRange);
            if (t.iridescenceThicknessMap) {
              let s = nT("0", "float", t.iridescenceThicknessRange);
              i = e.sub(s).mul(this.getTexture(r).g).add(s);
            } else i = e;
          } else if (r === n2.TRANSMISSION) {
            let e = this.getFloat(r);
            i = t.transmissionMap ? e.mul(this.getTexture(r).r) : e;
          } else if (r === n2.THICKNESS) {
            let e = this.getFloat(r);
            i = t.thicknessMap ? e.mul(this.getTexture(r).g) : e;
          } else if (r === n2.IOR) i = this.getFloat(r);
          else if (r === n2.LIGHT_MAP)
            i = this.getTexture(r).rgb.mul(this.getFloat("lightMapIntensity"));
          else if (r === n2.AO)
            i = this.getTexture(r)
              .r.sub(1)
              .mul(this.getFloat("aoMapIntensity"))
              .add(1);
          else if (r === n2.LINE_DASH_OFFSET)
            i = t.dashOffset ? this.getFloat(r) : eD(0);
          else {
            let t = this.getNodeType(e);
            i = this.getCache(r, t);
          }
          return i;
        }
      }
      (n2.ALPHA_TEST = "alphaTest"),
        (n2.COLOR = "color"),
        (n2.OPACITY = "opacity"),
        (n2.SHININESS = "shininess"),
        (n2.SPECULAR = "specular"),
        (n2.SPECULAR_STRENGTH = "specularStrength"),
        (n2.SPECULAR_INTENSITY = "specularIntensity"),
        (n2.SPECULAR_COLOR = "specularColor"),
        (n2.REFLECTIVITY = "reflectivity"),
        (n2.ROUGHNESS = "roughness"),
        (n2.METALNESS = "metalness"),
        (n2.NORMAL = "normal"),
        (n2.CLEARCOAT = "clearcoat"),
        (n2.CLEARCOAT_ROUGHNESS = "clearcoatRoughness"),
        (n2.CLEARCOAT_NORMAL = "clearcoatNormal"),
        (n2.EMISSIVE = "emissive"),
        (n2.ROTATION = "rotation"),
        (n2.SHEEN = "sheen"),
        (n2.SHEEN_ROUGHNESS = "sheenRoughness"),
        (n2.ANISOTROPY = "anisotropy"),
        (n2.IRIDESCENCE = "iridescence"),
        (n2.IRIDESCENCE_IOR = "iridescenceIOR"),
        (n2.IRIDESCENCE_THICKNESS = "iridescenceThickness"),
        (n2.IOR = "ior"),
        (n2.TRANSMISSION = "transmission"),
        (n2.THICKNESS = "thickness"),
        (n2.ATTENUATION_DISTANCE = "attenuationDistance"),
        (n2.ATTENUATION_COLOR = "attenuationColor"),
        (n2.LINE_SCALE = "scale"),
        (n2.LINE_DASH_SIZE = "dashSize"),
        (n2.LINE_GAP_SIZE = "gapSize"),
        (n2.LINE_WIDTH = "linewidth"),
        (n2.LINE_DASH_OFFSET = "dashOffset"),
        (n2.POINT_SIZE = "size"),
        (n2.DISPERSION = "dispersion"),
        (n2.LIGHT_MAP = "light"),
        (n2.AO = "ao");
      let n3 = ew(n2, n2.ALPHA_TEST),
        n4 = ew(n2, n2.COLOR),
        n6 = ew(n2, n2.SHININESS),
        n8 = ew(n2, n2.EMISSIVE),
        n5 = ew(n2, n2.OPACITY),
        n9 = ew(n2, n2.SPECULAR),
        n7 = ew(n2, n2.SPECULAR_INTENSITY),
        ae = ew(n2, n2.SPECULAR_COLOR),
        at = ew(n2, n2.SPECULAR_STRENGTH),
        ar = ew(n2, n2.REFLECTIVITY),
        ai = ew(n2, n2.ROUGHNESS),
        as = ew(n2, n2.METALNESS),
        an = ew(n2, n2.NORMAL),
        aa = ew(n2, n2.CLEARCOAT),
        ao = ew(n2, n2.CLEARCOAT_ROUGHNESS),
        al = ew(n2, n2.CLEARCOAT_NORMAL),
        au = ew(n2, n2.ROTATION),
        ad = ew(n2, n2.SHEEN),
        ah = ew(n2, n2.SHEEN_ROUGHNESS),
        ac = ew(n2, n2.ANISOTROPY),
        ap = ew(n2, n2.IRIDESCENCE),
        ag = ew(n2, n2.IRIDESCENCE_IOR),
        am = ew(n2, n2.IRIDESCENCE_THICKNESS),
        af = ew(n2, n2.TRANSMISSION),
        ay = ew(n2, n2.THICKNESS),
        ab = ew(n2, n2.IOR),
        ax = ew(n2, n2.ATTENUATION_DISTANCE),
        aT = ew(n2, n2.ATTENUATION_COLOR),
        a_ = ew(n2, n2.LINE_SCALE),
        av = ew(n2, n2.LINE_DASH_SIZE),
        aN = ew(n2, n2.LINE_GAP_SIZE),
        aS = ew(n2, n2.LINE_WIDTH),
        aR = ew(n2, n2.LINE_DASH_OFFSET),
        aA = ew(n2, n2.POINT_SIZE),
        aE = ew(n2, n2.DISPERSION),
        aw = ew(n2, n2.LIGHT_MAP),
        aC = ew(n2, n2.AO),
        aM = tL(new u.I9Y())
          .onReference(function (e) {
            return e.material;
          })
          .onRenderUpdate(function ({ material: e }) {
            this.value.set(
              e.anisotropy * Math.cos(e.anisotropyRotation),
              e.anisotropy * Math.sin(e.anisotropyRotation)
            );
          }),
        aB = eB((e) => e.context.setupModelViewProjection(), "vec4")
          .once()()
          .toVarying("v_modelViewProjection");
      class aL extends D {
        static get type() {
          return "IndexNode";
        }
        constructor(e) {
          super("uint"), (this.scope = e), (this.isIndexNode = !0);
        }
        generate(e) {
          let t,
            r = this.getNodeType(e),
            i = this.scope;
          if (i === aL.VERTEX) t = e.getVertexIndex();
          else if (i === aL.INSTANCE) t = e.getInstanceIndex();
          else if (i === aL.DRAW) t = e.getDrawIndex();
          else if (i === aL.INVOCATION_LOCAL) t = e.getInvocationLocalIndex();
          else if (i === aL.INVOCATION_SUBGROUP)
            t = e.getInvocationSubgroupIndex();
          else if (i === aL.SUBGROUP) t = e.getSubgroupIndex();
          else throw Error("THREE.IndexNode: Unknown scope: " + i);
          return "vertex" === e.shaderStage || "compute" === e.shaderStage
            ? t
            : iN(this).build(e, r);
        }
      }
      (aL.VERTEX = "vertex"),
        (aL.INSTANCE = "instance"),
        (aL.SUBGROUP = "subgroup"),
        (aL.INVOCATION_LOCAL = "invocationLocal"),
        (aL.INVOCATION_SUBGROUP = "invocationSubgroup"),
        (aL.DRAW = "draw");
      let aF = ew(aL, aL.VERTEX),
        aP = ew(aL, aL.INSTANCE),
        aI = ew(aL, aL.SUBGROUP),
        aU = ew(aL, aL.INVOCATION_SUBGROUP),
        aD = ew(aL, aL.INVOCATION_LOCAL),
        aV = ew(aL, aL.DRAW);
      class aO extends D {
        static get type() {
          return "InstanceNode";
        }
        constructor(e, t, r = null) {
          super("void"),
            (this.count = e),
            (this.instanceMatrix = t),
            (this.instanceColor = r),
            (this.instanceMatrixNode = null),
            (this.instanceColorNode = null),
            (this.updateType = C.FRAME),
            (this.buffer = null),
            (this.bufferColor = null);
        }
        setup(e) {
          let { count: t, instanceMatrix: r, instanceColor: i } = this,
            { instanceMatrixNode: s, instanceColorNode: n } = this;
          if (null === s) {
            if (t <= 1e3) s = su(r.array, "mat4", Math.max(t, 1)).element(aP);
            else {
              let e = new u.LuO(r.array, 16, 1);
              this.buffer = e;
              let t = r.usage === u.Vnu ? iz : ik;
              s = e1(
                t(e, "vec4", 16, 0),
                t(e, "vec4", 16, 4),
                t(e, "vec4", 16, 8),
                t(e, "vec4", 16, 12)
              );
            }
            this.instanceMatrixNode = s;
          }
          if (i && null === n) {
            let e = new u.uWO(i.array, 3),
              t = i.usage === u.Vnu ? iz : ik;
            (this.bufferColor = e),
              (n = eH(t(e, "vec3", 3, 0))),
              (this.instanceColorNode = n);
          }
          let a = s.mul(sq).xyz;
          if ((sq.assign(a), e.hasGeometryAttribute("normal"))) {
            let e = ne(s3, s);
            s3.assign(e);
          }
          null !== this.instanceColorNode &&
            e8("vec3", "vInstanceColor").assign(this.instanceColorNode);
        }
        update() {
          this.instanceMatrix.usage !== u.Vnu &&
            null !== this.buffer &&
            this.instanceMatrix.version !== this.buffer.version &&
            (this.buffer.version = this.instanceMatrix.version),
            this.instanceColor &&
              this.instanceColor.usage !== u.Vnu &&
              null !== this.bufferColor &&
              this.instanceColor.version !== this.bufferColor.version &&
              (this.bufferColor.version = this.instanceColor.version);
        }
      }
      let aG = eE(aO).setParameterLength(2, 3);
      class ak extends aO {
        static get type() {
          return "InstancedMeshNode";
        }
        constructor(e) {
          let { count: t, instanceMatrix: r, instanceColor: i } = e;
          super(t, r, i), (this.instancedMesh = e);
        }
      }
      let az = eE(ak).setParameterLength(1);
      class a$ extends D {
        static get type() {
          return "BatchNode";
        }
        constructor(e) {
          super("void"), (this.batchMesh = e), (this.batchingIdNode = null);
        }
        setup(e) {
          null === this.batchingIdNode &&
            (null === e.getDrawIndex()
              ? (this.batchingIdNode = aP)
              : (this.batchingIdNode = aV));
          let t = eB(([e]) => {
              let t = eV(se(so(this.batchMesh._indirectTexture), 0).x),
                r = eV(e).mod(t),
                i = eV(e).div(t);
              return so(this.batchMesh._indirectTexture, ez(r, i)).x;
            }).setLayout({
              name: "getIndirectIndex",
              type: "uint",
              inputs: [{ name: "id", type: "int" }],
            })(eV(this.batchingIdNode)),
            r = this.batchMesh._matricesTexture,
            i = eV(se(so(r), 0).x),
            s = eD(t).mul(4).toInt().toVar(),
            n = s.mod(i),
            a = s.div(i),
            o = e1(
              so(r, ez(n, a)),
              so(r, ez(n.add(1), a)),
              so(r, ez(n.add(2), a)),
              so(r, ez(n.add(3), a))
            ),
            l = this.batchMesh._colorsTexture;
          if (null !== l) {
            let e = eB(([e]) => {
              let t = eV(se(so(l), 0).x);
              return so(l, ez(e.mod(t), e.div(t))).rgb;
            }).setLayout({
              name: "getBatchingColor",
              type: "vec3",
              inputs: [{ name: "id", type: "int" }],
            })(t);
            e8("vec3", "vBatchColor").assign(e);
          }
          let u = e0(o);
          sq.assign(o.mul(sq));
          let d = s3.div(eH(u[0].dot(u[0]), u[1].dot(u[1]), u[2].dot(u[2]))),
            h = u.mul(d).xyz;
          s3.assign(h), e.hasGeometryAttribute("tangent") && nV.mulAssign(u);
        }
      }
      let aW = eE(a$).setParameterLength(1);
      class aH extends V {
        static get type() {
          return "StorageArrayElementNode";
        }
        constructor(e, t) {
          super(e, t), (this.isStorageArrayElementNode = !0);
        }
        set storageBufferNode(e) {
          this.node = e;
        }
        get storageBufferNode() {
          return this.node;
        }
        getMemberType(e, t) {
          let r = this.storageBufferNode.structTypeNode;
          return r ? r.getMemberType(e, t) : "void";
        }
        setup(e) {
          return (
            !1 === e.isAvailable("storageBuffer") &&
              !0 === this.node.isPBO &&
              e.setupPBO(this.node),
            super.setup(e)
          );
        }
        generate(e, t) {
          let r,
            i = e.context.assign;
          if (
            ((r =
              !1 === e.isAvailable("storageBuffer")
                ? !0 === this.node.isPBO &&
                  !0 !== i &&
                  (this.node.value.isInstancedBufferAttribute ||
                    "compute" !== e.shaderStage)
                  ? e.generatePBO(this)
                  : this.node.build(e)
                : super.generate(e)),
            !0 !== i)
          ) {
            let i = this.getNodeType(e);
            r = e.format(r, i, t);
          }
          return r;
        }
      }
      let aq = eE(aH).setParameterLength(2);
      class aj extends sl {
        static get type() {
          return "StorageBufferNode";
        }
        constructor(e, t = null, r = 0) {
          let i,
            s = null;
          if (t && t.isStruct)
            (i = "struct"),
              (s = t.layout),
              (e.isStorageBufferAttribute ||
                e.isStorageInstancedBufferAttribute) &&
                (r = e.count);
          else if (
            null === t &&
            (e.isStorageBufferAttribute || e.isStorageInstancedBufferAttribute)
          ) {
            var n;
            (n = e.itemSize), (i = x.get(n)), (r = e.count);
          } else i = t;
          super(e, i, r),
            (this.isStorageBufferNode = !0),
            (this.structTypeNode = s),
            (this.access = M.READ_WRITE),
            (this.isAtomic = !1),
            (this.isPBO = !1),
            (this._attribute = null),
            (this._varying = null),
            (this.global = !0),
            !0 !== e.isStorageBufferAttribute &&
              !0 !== e.isStorageInstancedBufferAttribute &&
              (e.isInstancedBufferAttribute
                ? (e.isStorageInstancedBufferAttribute = !0)
                : (e.isStorageBufferAttribute = !0));
        }
        getHash(e) {
          if (0 === this.bufferCount) {
            let t = e.globalCache.getData(this.value);
            return (
              void 0 === t &&
                ((t = { node: this }), e.globalCache.setData(this.value, t)),
              t.node.uuid
            );
          }
          return this.uuid;
        }
        getInputType() {
          return this.value.isIndirectStorageBufferAttribute
            ? "indirectStorageBuffer"
            : "storageBuffer";
        }
        element(e) {
          return aq(this, e);
        }
        setPBO(e) {
          return (this.isPBO = e), this;
        }
        getPBO() {
          return this.isPBO;
        }
        setAccess(e) {
          return (this.access = e), this;
        }
        toReadOnly() {
          return this.setAccess(M.READ_ONLY);
        }
        setAtomic(e) {
          return (this.isAtomic = e), this;
        }
        toAtomic() {
          return this.setAtomic(!0);
        }
        getAttributeData() {
          return (
            null === this._attribute &&
              ((this._attribute = iO(this.value)),
              (this._varying = iN(this._attribute))),
            { attribute: this._attribute, varying: this._varying }
          );
        }
        getNodeType(e) {
          if (null !== this.structTypeNode)
            return this.structTypeNode.getNodeType(e);
          if (
            e.isAvailable("storageBuffer") ||
            e.isAvailable("indirectStorageBuffer")
          )
            return super.getNodeType(e);
          let { attribute: t } = this.getAttributeData();
          return t.getNodeType(e);
        }
        getMemberType(e, t) {
          return null !== this.structTypeNode
            ? this.structTypeNode.getMemberType(e, t)
            : "void";
        }
        generate(e) {
          if (
            (null !== this.structTypeNode && this.structTypeNode.build(e),
            e.isAvailable("storageBuffer") ||
              e.isAvailable("indirectStorageBuffer"))
          )
            return super.generate(e);
          let { attribute: t, varying: r } = this.getAttributeData(),
            i = r.build(e);
          return e.registerTransform(i, t), i;
        }
      }
      let aX = (e, t = null, r = 0) => eN(new aj(e, t, r)),
        aK = new WeakMap();
      class aQ extends D {
        static get type() {
          return "SkinningNode";
        }
        constructor(e) {
          super("void"),
            (this.skinnedMesh = e),
            (this.updateType = C.OBJECT),
            (this.skinIndexNode = i5("skinIndex", "uvec4")),
            (this.skinWeightNode = i5("skinWeight", "vec4")),
            (this.bindMatrixNode = nT("bindMatrix", "mat4")),
            (this.bindMatrixInverseNode = nT("bindMatrixInverse", "mat4")),
            (this.boneMatricesNode = n_(
              "skeleton.boneMatrices",
              "mat4",
              e.skeleton.bones.length
            )),
            (this.positionNode = sq),
            (this.toPositionNode = sq),
            (this.previousBoneMatricesNode = null);
        }
        getSkinnedPosition(e = this.boneMatricesNode, t = this.positionNode) {
          let {
              skinIndexNode: r,
              skinWeightNode: i,
              bindMatrixNode: s,
              bindMatrixInverseNode: n,
            } = this,
            a = e.element(r.x),
            o = e.element(r.y),
            l = e.element(r.z),
            u = e.element(r.w),
            d = s.mul(t),
            h = tk(
              a.mul(i.x).mul(d),
              o.mul(i.y).mul(d),
              l.mul(i.z).mul(d),
              u.mul(i.w).mul(d)
            );
          return n.mul(h).xyz;
        }
        getSkinnedNormal(e = this.boneMatricesNode, t = s3) {
          let {
              skinIndexNode: r,
              skinWeightNode: i,
              bindMatrixNode: s,
              bindMatrixInverseNode: n,
            } = this,
            a = e.element(r.x),
            o = e.element(r.y),
            l = e.element(r.z),
            u = e.element(r.w),
            d = tk(i.x.mul(a), i.y.mul(o), i.z.mul(l), i.w.mul(u));
          return (d = n.mul(d).mul(s)).transformDirection(t).xyz;
        }
        getPreviousSkinnedPosition(e) {
          let t = e.object;
          return (
            null === this.previousBoneMatricesNode &&
              ((t.skeleton.previousBoneMatrices = new Float32Array(
                t.skeleton.boneMatrices
              )),
              (this.previousBoneMatricesNode = n_(
                "skeleton.previousBoneMatrices",
                "mat4",
                t.skeleton.bones.length
              ))),
            this.getSkinnedPosition(this.previousBoneMatricesNode, sj)
          );
        }
        needsPreviousBoneMatrices(e) {
          let t = e.renderer.getMRT();
          return (t && t.has("velocity")) || !0 === R(e.object).useVelocity;
        }
        setup(e) {
          this.needsPreviousBoneMatrices(e) &&
            sj.assign(this.getPreviousSkinnedPosition(e));
          let t = this.getSkinnedPosition();
          if (
            (this.toPositionNode && this.toPositionNode.assign(t),
            e.hasGeometryAttribute("normal"))
          ) {
            let t = this.getSkinnedNormal();
            s3.assign(t), e.hasGeometryAttribute("tangent") && nV.assign(t);
          }
          return t;
        }
        generate(e, t) {
          if ("void" !== t) return super.generate(e, t);
        }
        update(e) {
          let t =
            e.object && e.object.skeleton
              ? e.object.skeleton
              : this.skinnedMesh.skeleton;
          aK.get(t) !== e.frameId &&
            (aK.set(t, e.frameId),
            null !== this.previousBoneMatricesNode &&
              t.previousBoneMatrices.set(t.boneMatrices),
            t.update());
        }
      }
      let aY = (e) => eN(new aQ(e));
      class aZ extends D {
        static get type() {
          return "LoopNode";
        }
        constructor(e = []) {
          super(), (this.params = e);
        }
        getVarName(e) {
          return String.fromCharCode(105 + e);
        }
        getProperties(e) {
          let t = e.getNodeProperties(this);
          if (void 0 !== t.stackNode) return t;
          let r = {};
          for (let e = 0, t = this.params.length - 1; e < t; e++) {
            let t = this.params[e],
              i = (!0 !== t.isNode && t.name) || this.getVarName(e),
              s = (!0 !== t.isNode && t.type) || "int";
            r[i] = i0(i, s);
          }
          let i = e.addStack();
          (t.returnsNode = this.params[this.params.length - 1](r, e)),
            (t.stackNode = i);
          let s = this.params[0];
          return (
            !0 !== s.isNode &&
              "function" == typeof s.update &&
              (t.updateNode = eB(this.params[0].update)(r)),
            e.removeStack(),
            t
          );
        }
        getNodeType(e) {
          let { returnsNode: t } = this.getProperties(e);
          return t ? t.getNodeType(e) : "void";
        }
        setup(e) {
          this.getProperties(e);
        }
        generate(e) {
          let t = this.getProperties(e),
            r = this.params,
            i = t.stackNode;
          for (let i = 0, s = r.length - 1; i < s; i++) {
            let s,
              n = r[i],
              a = !1,
              o = null,
              l = null,
              u = null,
              d = null,
              h = null,
              c = null;
            if (
              (n.isNode
                ? "bool" === n.getNodeType(e)
                  ? ((a = !0), (d = "bool"), (l = n.build(e, d)))
                  : ((d = "int"),
                    (u = this.getVarName(i)),
                    (o = "0"),
                    (l = n.build(e, d)),
                    (h = "<"))
                : ((d = n.type || "int"),
                  (u = n.name || this.getVarName(i)),
                  (o = n.start),
                  (l = n.end),
                  (h = n.condition),
                  (c = n.update),
                  "number" == typeof o
                    ? (o = e.generateConst(d, o))
                    : o && o.isNode && (o = o.build(e, d)),
                  "number" == typeof l
                    ? (l = e.generateConst(d, l))
                    : l && l.isNode && (l = l.build(e, d)),
                  void 0 !== o && void 0 === l
                    ? ((o += " - 1"), (l = "0"), (h = ">="))
                    : void 0 !== l && void 0 === o && ((o = "0"), (h = "<")),
                  void 0 === h && (h = Number(o) > Number(l) ? ">=" : "<")),
              a)
            )
              s = `while ( ${l} )`;
            else {
              let r,
                i = o,
                n = l,
                a = () => (h.includes("<") ? "+=" : "-=");
              if (null != c)
                switch (typeof c) {
                  case "function":
                    r = e
                      .flowStagesNode(t.updateNode, "void")
                      .code.replace(/\t|;/g, "");
                    break;
                  case "number":
                    r = u + " " + a() + " " + e.generateConst(d, c);
                    break;
                  case "string":
                    r = u + " " + c;
                    break;
                  default:
                    c.isNode
                      ? (r = u + " " + a() + " " + c.build(e))
                      : (console.error(
                          "THREE.TSL: 'Loop( { update: ... } )' is not a function, string or number."
                        ),
                        (r = "break /* invalid update */"));
                }
              else
                r =
                  u +
                  " " +
                  (c =
                    "int" === d || "uint" === d
                      ? h.includes("<")
                        ? "++"
                        : "--"
                      : a() + " 1.");
              let p = e.getVar(d, u) + " = " + i,
                g = u + " " + h + " " + n;
              s = `for ( ${p}; ${g}; ${r} )`;
            }
            e.addFlowCode(
              (0 === i ? "\n" : "") + e.tab + s + " {\n\n"
            ).addFlowTab();
          }
          let s = i.build(e, "void"),
            n = t.returnsNode ? t.returnsNode.build(e) : "";
          e.removeFlowTab().addFlowCode("\n" + e.tab + s);
          for (let t = 0, r = this.params.length - 1; t < r; t++)
            e.addFlowCode((0 === t ? "" : e.tab) + "}\n\n").removeFlowTab();
          return e.addFlowTab(), n;
        }
      }
      let aJ = (...e) => eN(new aZ(eA(e, "int"))).toStack(),
        a0 = () => i0("break").toStack(),
        a1 = new WeakMap(),
        a2 = new u.IUQ(),
        a3 = eB(
          ({
            bufferMap: e,
            influence: t,
            stride: r,
            width: i,
            depth: s,
            offset: n,
          }) => {
            let a = eV(aF).mul(r).add(n),
              o = a.div(i);
            return so(e, ez(a.sub(o.mul(i)), o))
              .depth(s)
              .xyz.mul(t);
          }
        );
      class a4 extends D {
        static get type() {
          return "MorphNode";
        }
        constructor(e) {
          super("void"),
            (this.mesh = e),
            (this.morphBaseInfluence = tL(1)),
            (this.updateType = C.OBJECT);
        }
        setup(e) {
          let { geometry: t } = e,
            r = void 0 !== t.morphAttributes.position,
            i = t.hasAttribute("normal") && void 0 !== t.morphAttributes.normal,
            s =
              t.morphAttributes.position ||
              t.morphAttributes.normal ||
              t.morphAttributes.color,
            n = void 0 !== s ? s.length : 0,
            {
              texture: a,
              stride: o,
              size: l,
            } = (function (e) {
              let t = void 0 !== e.morphAttributes.position,
                r = void 0 !== e.morphAttributes.normal,
                i = void 0 !== e.morphAttributes.color,
                s =
                  e.morphAttributes.position ||
                  e.morphAttributes.normal ||
                  e.morphAttributes.color,
                n = void 0 !== s ? s.length : 0,
                a = a1.get(e);
              if (void 0 === a || a.count !== n) {
                void 0 !== a && a.texture.dispose();
                let s = e.morphAttributes.position || [],
                  o = e.morphAttributes.normal || [],
                  l = e.morphAttributes.color || [],
                  d = 0;
                !0 === t && (d = 1), !0 === r && (d = 2), !0 === i && (d = 3);
                let h = e.attributes.position.count * d,
                  c = 1;
                h > 4096 && ((c = Math.ceil(h / 4096)), (h = 4096));
                let p = new Float32Array(h * c * 4 * n),
                  g = new u.rFo(p, h, c, n);
                (g.type = u.RQf), (g.needsUpdate = !0);
                let m = 4 * d;
                for (let e = 0; e < n; e++) {
                  let n = s[e],
                    a = o[e],
                    u = l[e],
                    d = h * c * 4 * e;
                  for (let e = 0; e < n.count; e++) {
                    let s = e * m;
                    !0 === t &&
                      (a2.fromBufferAttribute(n, e),
                      (p[d + s + 0] = a2.x),
                      (p[d + s + 1] = a2.y),
                      (p[d + s + 2] = a2.z),
                      (p[d + s + 3] = 0)),
                      !0 === r &&
                        (a2.fromBufferAttribute(a, e),
                        (p[d + s + 4] = a2.x),
                        (p[d + s + 5] = a2.y),
                        (p[d + s + 6] = a2.z),
                        (p[d + s + 7] = 0)),
                      !0 === i &&
                        (a2.fromBufferAttribute(u, e),
                        (p[d + s + 8] = a2.x),
                        (p[d + s + 9] = a2.y),
                        (p[d + s + 10] = a2.z),
                        (p[d + s + 11] = 4 === u.itemSize ? a2.w : 1));
                  }
                }
                (a = {
                  count: n,
                  texture: g,
                  stride: d,
                  size: new u.I9Y(h, c),
                }),
                  a1.set(e, a),
                  e.addEventListener("dispose", function t() {
                    g.dispose(),
                      a1.delete(e),
                      e.removeEventListener("dispose", t);
                  });
              }
              return a;
            })(t);
          !0 === r && sq.mulAssign(this.morphBaseInfluence),
            !0 === i && s3.mulAssign(this.morphBaseInfluence);
          let d = eV(l.width);
          aJ(n, ({ i: e }) => {
            let t = eD(0).toVar();
            this.mesh.count > 1 &&
            null !== this.mesh.morphTexture &&
            void 0 !== this.mesh.morphTexture
              ? t.assign(so(this.mesh.morphTexture, ez(eV(e).add(1), eV(aP))).r)
              : t.assign(
                  nT("morphTargetInfluences", "float").element(e).toVar()
                ),
              eP(t.notEqual(0), () => {
                !0 === r &&
                  sq.addAssign(
                    a3({
                      bufferMap: a,
                      influence: t,
                      stride: o,
                      width: d,
                      depth: e,
                      offset: eV(0),
                    })
                  ),
                  !0 === i &&
                    s3.addAssign(
                      a3({
                        bufferMap: a,
                        influence: t,
                        stride: o,
                        width: d,
                        depth: e,
                        offset: eV(1),
                      })
                    );
              });
          });
        }
        update() {
          let e = this.morphBaseInfluence;
          this.mesh.geometry.morphTargetsRelative
            ? (e.value = 1)
            : (e.value =
                1 - this.mesh.morphTargetInfluences.reduce((e, t) => e + t, 0));
        }
      }
      let a6 = eE(a4).setParameterLength(1);
      class a8 extends D {
        static get type() {
          return "LightingNode";
        }
        constructor() {
          super("vec3"), (this.isLightingNode = !0);
        }
      }
      class a5 extends a8 {
        static get type() {
          return "AONode";
        }
        constructor(e = null) {
          super(), (this.aoNode = e);
        }
        setup(e) {
          e.context.ambientOcclusion.mulAssign(this.aoNode);
        }
      }
      class a9 extends iu {
        static get type() {
          return "LightingContextNode";
        }
        constructor(e, t = null, r = null, i = null) {
          super(e),
            (this.lightingModel = t),
            (this.backdropNode = r),
            (this.backdropAlphaNode = i),
            (this._value = null);
        }
        getContext() {
          let { backdropNode: e, backdropAlphaNode: t } = this,
            r = eH().toVar("directDiffuse"),
            i = eH().toVar("directSpecular"),
            s = eH().toVar("indirectDiffuse"),
            n = eH().toVar("indirectSpecular");
          return {
            radiance: eH().toVar("radiance"),
            irradiance: eH().toVar("irradiance"),
            iblIrradiance: eH().toVar("iblIrradiance"),
            ambientOcclusion: eD(1).toVar("ambientOcclusion"),
            reflectedLight: {
              directDiffuse: r,
              directSpecular: i,
              indirectDiffuse: s,
              indirectSpecular: n,
            },
            backdrop: e,
            backdropAlpha: t,
          };
        }
        setup(e) {
          return (
            (this.value = this._value || (this._value = this.getContext())),
            (this.value.lightingModel =
              this.lightingModel || e.context.lightingModel),
            super.setup(e)
          );
        }
      }
      let a7 = eE(a9);
      class oe extends a8 {
        static get type() {
          return "IrradianceNode";
        }
        constructor(e) {
          super(), (this.node = e);
        }
        setup(e) {
          e.context.irradiance.addAssign(this.node);
        }
      }
      class ot extends D {
        static get type() {
          return "ScreenNode";
        }
        constructor(e) {
          super(), (this.scope = e), (this.isViewportNode = !0);
        }
        getNodeType() {
          return this.scope === ot.VIEWPORT ? "vec4" : "vec2";
        }
        getUpdateType() {
          let e = C.NONE;
          return (
            (this.scope === ot.SIZE || this.scope === ot.VIEWPORT) &&
              (e = C.RENDER),
            (this.updateType = e),
            e
          );
        }
        update({ renderer: e }) {
          let t = e.getRenderTarget();
          this.scope === ot.VIEWPORT
            ? null !== t
              ? s.copy(t.viewport)
              : (e.getViewport(s), s.multiplyScalar(e.getPixelRatio()))
            : null !== t
            ? ((i.width = t.width), (i.height = t.height))
            : e.getDrawingBufferSize(i);
        }
        setup() {
          let e = this.scope;
          return e === ot.SIZE
            ? tL(i || (i = new u.I9Y()))
            : e === ot.VIEWPORT
            ? tL(s || (s = new u.IUQ()))
            : ek(os.div(oi));
        }
        generate(e) {
          if (this.scope === ot.COORDINATE) {
            let t = e.getFragCoord();
            if (e.isFlipY()) {
              let r = e.getNodeProperties(oi).outputNode.build(e);
              t = `${e.getType("vec2")}( ${t}.x, ${r}.y - ${t}.y )`;
            }
            return t;
          }
          return super.generate(e);
        }
      }
      (ot.COORDINATE = "coordinate"),
        (ot.VIEWPORT = "viewport"),
        (ot.SIZE = "size"),
        (ot.UV = "uv");
      let or = ew(ot, ot.UV),
        oi = ew(ot, ot.SIZE),
        os = ew(ot, ot.COORDINATE),
        on = ew(ot, ot.VIEWPORT),
        oa = on.zw,
        oo = os.sub(on.xy),
        ol = oo.div(oa),
        ou = eB(
          () => (
            console.warn(
              'THREE.TSL: "viewportResolution" is deprecated. Use "screenSize" instead.'
            ),
            oi
          ),
          "vec2"
        ).once()(),
        od = new u.I9Y();
      class oh extends ss {
        static get type() {
          return "ViewportTextureNode";
        }
        constructor(e = or, t = null, r = null) {
          let i = null;
          null === r
            ? (((i = new u.Pem()).minFilter = u.$_I), (r = i))
            : (i = r),
            super(r, e, t),
            (this.generateMipmaps = !1),
            (this.defaultFramebuffer = i),
            (this.isOutputTextureNode = !0),
            (this.updateBeforeType = C.RENDER),
            (this._textures = new WeakMap());
        }
        getFrameBufferTexture(e = null) {
          let t = this.referenceNode
            ? this.referenceNode.defaultFramebuffer
            : this.defaultFramebuffer;
          if (null === e) return t;
          if (!1 === this._textures.has(e)) {
            let r = t.clone();
            this._textures.set(e, r);
          }
          return this._textures.get(e);
        }
        updateBefore(e) {
          let t = e.renderer,
            r = t.getRenderTarget();
          null === r ? t.getDrawingBufferSize(od) : od.set(r.width, r.height);
          let i = this.getFrameBufferTexture(r);
          (i.image.width !== od.width || i.image.height !== od.height) &&
            ((i.image.width = od.width),
            (i.image.height = od.height),
            (i.needsUpdate = !0));
          let s = i.generateMipmaps;
          (i.generateMipmaps = this.generateMipmaps),
            t.copyFramebufferToTexture(i),
            (i.generateMipmaps = s),
            (this.value = i);
        }
        clone() {
          let e = new this.constructor(this.uvNode, this.levelNode, this.value);
          return (e.generateMipmaps = this.generateMipmaps), e;
        }
      }
      let oc = eE(oh).setParameterLength(0, 3),
        op = eE(oh, null, null, { generateMipmaps: !0 }).setParameterLength(
          0,
          3
        ),
        og = null;
      class om extends oh {
        static get type() {
          return "ViewportDepthTextureNode";
        }
        constructor(e = or, t = null) {
          null === og && (og = new u.VCu()), super(e, t, og);
        }
      }
      let of = eE(om).setParameterLength(0, 2);
      class oy extends D {
        static get type() {
          return "ViewportDepthNode";
        }
        constructor(e, t = null) {
          super("float"),
            (this.scope = e),
            (this.valueNode = t),
            (this.isViewportDepthNode = !0);
        }
        generate(e) {
          let { scope: t } = this;
          return t === oy.DEPTH_BASE ? e.getFragDepth() : super.generate(e);
        }
        setup({ camera: e }) {
          let { scope: t } = this,
            r = this.valueNode,
            i = null;
          return (
            t === oy.DEPTH_BASE
              ? null !== r && (i = ov().assign(r))
              : t === oy.DEPTH
              ? (i = e.isPerspectiveCamera
                  ? ox(sQ.z, sf, sy)
                  : ob(sQ.z, sf, sy))
              : t === oy.LINEAR_DEPTH &&
                (i =
                  null !== r
                    ? e.isPerspectiveCamera
                      ? ob(oT(r, sf, sy), sf, sy)
                      : r
                    : ob(sQ.z, sf, sy)),
            i
          );
        }
      }
      (oy.DEPTH_BASE = "depthBase"),
        (oy.DEPTH = "depth"),
        (oy.LINEAR_DEPTH = "linearDepth");
      let ob = (e, t, r) => e.add(t).div(t.sub(r)),
        ox = (e, t, r) => t.add(e).mul(r).div(r.sub(t).mul(e)),
        oT = (e, t, r) => t.mul(r).div(r.sub(t).mul(e).sub(r)),
        o_ = (e, t, r) => {
          t = t.max(1e-6).toVar();
          let i = rm(e.negate().div(t)),
            s = rm(r.div(t));
          return i.div(s);
        },
        ov = eE(oy, oy.DEPTH_BASE),
        oN = ew(oy, oy.DEPTH),
        oS = eE(oy, oy.LINEAR_DEPTH).setParameterLength(0, 1),
        oR = oS(of());
      oN.assign = (e) => ov(e);
      class oA extends D {
        static get type() {
          return "ClippingNode";
        }
        constructor(e = oA.DEFAULT) {
          super(), (this.scope = e);
        }
        setup(e) {
          super.setup(e);
          let { intersectionPlanes: t, unionPlanes: r } = e.clippingContext;
          return ((this.hardwareClipping = e.material.hardwareClipping),
          this.scope === oA.ALPHA_TO_COVERAGE)
            ? this.setupAlphaToCoverage(t, r)
            : this.scope === oA.HARDWARE
            ? this.setupHardwareClipping(r, e)
            : this.setupDefault(t, r);
        }
        setupAlphaToCoverage(e, t) {
          return eB(() => {
            let r = eD().toVar("distanceToPlane"),
              i = eD().toVar("distanceToGradient"),
              s = eD(1).toVar("clipOpacity"),
              n = t.length;
            if (!1 === this.hardwareClipping && n > 0) {
              let e = sc(t);
              aJ(n, ({ i: t }) => {
                let n = e.element(t);
                r.assign(sQ.dot(n.xyz).negate().add(n.w)),
                  i.assign(r.fwidth().div(2)),
                  s.mulAssign(r7(i.negate(), i, r));
              });
            }
            let a = e.length;
            if (a > 0) {
              let t = sc(e),
                n = eD(1).toVar("intersectionClipOpacity");
              aJ(a, ({ i: e }) => {
                let s = t.element(e);
                r.assign(sQ.dot(s.xyz).negate().add(s.w)),
                  i.assign(r.fwidth().div(2)),
                  n.mulAssign(r7(i.negate(), i, r).oneMinus());
              }),
                s.mulAssign(n.oneMinus());
            }
            e5.a.mulAssign(s), e5.a.equal(0).discard();
          })();
        }
        setupDefault(e, t) {
          return eB(() => {
            let r = t.length;
            if (!1 === this.hardwareClipping && r > 0) {
              let e = sc(t);
              aJ(r, ({ i: t }) => {
                let r = e.element(t);
                sQ.dot(r.xyz).greaterThan(r.w).discard();
              });
            }
            let i = e.length;
            if (i > 0) {
              let t = sc(e),
                r = eG(!0).toVar("clipped");
              aJ(i, ({ i: e }) => {
                let i = t.element(e);
                r.assign(sQ.dot(i.xyz).greaterThan(i.w).and(r));
              }),
                r.discard();
            }
          })();
        }
        setupHardwareClipping(e, t) {
          let r = e.length;
          return (
            t.enableHardwareClipping(r),
            eB(() => {
              let i = sc(e),
                s = sg(t.getClipDistance());
              aJ(r, ({ i: e }) => {
                let t = i.element(e),
                  r = sQ.dot(t.xyz).sub(t.w).negate();
                s.element(e).assign(r);
              });
            })()
          );
        }
      }
      (oA.ALPHA_TO_COVERAGE = "alphaToCoverage"),
        (oA.DEFAULT = "default"),
        (oA.HARDWARE = "hardware");
      let oE = eB(([e]) =>
          r_(
            t$(1e4, rv(t$(17, e.x).add(t$(0.1, e.y)))).mul(
              tk(0.1, rw(rv(t$(13, e.y).add(e.x))))
            )
          )
        ),
        ow = eB(([e]) => oE(ek(oE(e.xy), e.z))),
        oC = eB(([e]) => {
          let t = rH(rM(rF(e.xyz)), rM(rP(e.xyz))),
            r = eD(1).div(eD(0.05).mul(t)).toVar("pixScale"),
            i = ek(rp(rb(rm(r))), rp(rx(rm(r)))),
            s = ek(ow(rb(i.x.mul(e.xyz))), ow(rb(i.y.mul(e.xyz)))),
            n = r_(rm(r)),
            a = tk(t$(n.oneMinus(), s.x), t$(n, s.y)),
            o = rW(n, n.oneMinus()),
            l = eH(
              a.mul(a).div(t$(2, o).mul(tz(1, o))),
              a.sub(t$(0.5, o)).div(tz(1, o)),
              tz(
                1,
                tz(1, a)
                  .mul(tz(1, a))
                  .div(t$(2, o).mul(tz(1, o)))
              )
            );
          return r8(
            a
              .lessThan(o.oneMinus())
              .select(a.lessThan(o).select(l.x, l.y), l.z),
            1e-6,
            1
          );
        }).setLayout({
          name: "getAlphaHashThreshold",
          type: "float",
          inputs: [{ name: "position", type: "vec3" }],
        });
      class oM extends i8 {
        static get type() {
          return "VertexColorNode";
        }
        constructor(e) {
          super(null, "vec4"), (this.isVertexColorNode = !0), (this.index = e);
        }
        getAttributeName() {
          let e = this.index;
          return "color" + (e > 0 ? e : "");
        }
        generate(e) {
          let t = this.getAttributeName(e);
          return !0 === e.hasGeometryAttribute(t)
            ? super.generate(e)
            : e.generateConst(this.nodeType, new u.IUQ(1, 1, 1, 1));
        }
        serialize(e) {
          super.serialize(e), (e.index = this.index);
        }
        deserialize(e) {
          super.deserialize(e), (this.index = e.index);
        }
      }
      let oB = (e = 0) => eN(new oM(e)),
        oL = eB(([e, t]) => rW(1, e.oneMinus().div(t)).oneMinus()).setLayout({
          name: "blendBurn",
          type: "vec3",
          inputs: [
            { name: "base", type: "vec3" },
            { name: "blend", type: "vec3" },
          ],
        }),
        oF = eB(([e, t]) => rW(e.div(t.oneMinus()), 1)).setLayout({
          name: "blendDodge",
          type: "vec3",
          inputs: [
            { name: "base", type: "vec3" },
            { name: "blend", type: "vec3" },
          ],
        }),
        oP = eB(([e, t]) =>
          e.oneMinus().mul(t.oneMinus()).oneMinus()
        ).setLayout({
          name: "blendScreen",
          type: "vec3",
          inputs: [
            { name: "base", type: "vec3" },
            { name: "blend", type: "vec3" },
          ],
        }),
        oI = eB(([e, t]) =>
          r6(
            e.mul(2).mul(t),
            e.oneMinus().mul(2).mul(t.oneMinus()).oneMinus(),
            rq(0.5, e)
          )
        ).setLayout({
          name: "blendOverlay",
          type: "vec3",
          inputs: [
            { name: "base", type: "vec3" },
            { name: "blend", type: "vec3" },
          ],
        }),
        oU = eB(([e, t]) => {
          let r = t.a.add(e.a.mul(t.a.oneMinus()));
          return eK(
            t.rgb.mul(t.a).add(e.rgb.mul(e.a).mul(t.a.oneMinus())).div(r),
            r
          );
        }).setLayout({
          name: "blendColor",
          type: "vec4",
          inputs: [
            { name: "base", type: "vec4" },
            { name: "blend", type: "vec4" },
          ],
        }),
        oD = eB(([e]) => eK(e.rgb.mul(e.a), e.a), {
          color: "vec4",
          return: "vec4",
        }),
        oV = eB(
          ([e]) => (eP(e.a.equal(0), () => eK(0)), eK(e.rgb.div(e.a), e.a)),
          { color: "vec4", return: "vec4" }
        );
      class oO extends u.imn {
        static get type() {
          return "NodeMaterial";
        }
        get type() {
          return this.constructor.type;
        }
        set type(e) {}
        constructor() {
          super(),
            (this.isNodeMaterial = !0),
            (this.fog = !0),
            (this.lights = !1),
            (this.hardwareClipping = !1),
            (this.lightsNode = null),
            (this.envNode = null),
            (this.aoNode = null),
            (this.colorNode = null),
            (this.normalNode = null),
            (this.opacityNode = null),
            (this.backdropNode = null),
            (this.backdropAlphaNode = null),
            (this.alphaTestNode = null),
            (this.maskNode = null),
            (this.positionNode = null),
            (this.geometryNode = null),
            (this.depthNode = null),
            (this.receivedShadowPositionNode = null),
            (this.castShadowPositionNode = null),
            (this.receivedShadowNode = null),
            (this.castShadowNode = null),
            (this.outputNode = null),
            (this.mrtNode = null),
            (this.fragmentNode = null),
            (this.vertexNode = null),
            Object.defineProperty(this, "shadowPositionNode", {
              get: () => this.receivedShadowPositionNode,
              set: (e) => {
                console.warn(
                  'THREE.NodeMaterial: ".shadowPositionNode" was renamed to ".receivedShadowPositionNode".'
                ),
                  (this.receivedShadowPositionNode = e);
              },
            });
        }
        customProgramCacheKey() {
          return this.type + y(this);
        }
        build(e) {
          this.setup(e);
        }
        setupObserver(e) {
          return new c(e);
        }
        setup(e) {
          let t;
          (e.context.setupNormal = () =>
            i_(this.setupNormal(e), "NORMAL", "vec3")),
            (e.context.setupPositionView = () => this.setupPositionView(e)),
            (e.context.setupModelViewProjection = () =>
              this.setupModelViewProjection(e));
          let r = e.renderer,
            i = r.getRenderTarget();
          e.addStack();
          let s = i_(this.setupVertex(e), "VERTEX"),
            n = this.vertexNode || s;
          (e.stack.outputNode = n),
            this.setupHardwareClipping(e),
            null !== this.geometryNode &&
              (e.stack.outputNode = e.stack.outputNode.bypass(
                this.geometryNode
              )),
            e.addFlow("vertex", e.removeStack()),
            e.addStack();
          let a = this.setupClipping(e);
          if (
            ((!0 === this.depthWrite || !0 === this.depthTest) &&
              (null !== i
                ? !0 === i.depthBuffer && this.setupDepth(e)
                : !0 === r.depth && this.setupDepth(e)),
            null === this.fragmentNode)
          ) {
            this.setupDiffuseColor(e), this.setupVariants(e);
            let s = this.setupLighting(e);
            null !== a && e.stack.add(a);
            let n = eK(s, e5.a).max(0);
            (t = this.setupOutput(e, n)), tm.assign(t);
            let o = null !== this.outputNode;
            if ((o && (t = this.outputNode), null !== i)) {
              let e = r.getMRT(),
                i = this.mrtNode;
              null !== e
                ? (o && tm.assign(t), (t = e), null !== i && (t = e.merge(i)))
                : null !== i && (t = i);
            }
          } else {
            let r = this.fragmentNode;
            !0 !== r.isOutputStructNode && (r = eK(r)),
              (t = this.setupOutput(e, r));
          }
          (e.stack.outputNode = t),
            e.addFlow("fragment", e.removeStack()),
            (e.observer = this.setupObserver(e));
        }
        setupClipping(e) {
          if (null === e.clippingContext) return null;
          let { unionPlanes: t, intersectionPlanes: r } = e.clippingContext,
            i = null;
          if (t.length > 0 || r.length > 0) {
            let t = e.renderer.samples;
            this.alphaToCoverage && t > 1
              ? (i = eN(new oA(oA.ALPHA_TO_COVERAGE)))
              : e.stack.add(eN(new oA()));
          }
          return i;
        }
        setupHardwareClipping(e) {
          if (((this.hardwareClipping = !1), null === e.clippingContext))
            return;
          let t = e.clippingContext.unionPlanes.length;
          t > 0 &&
            t <= 8 &&
            e.isAvailable("clipDistance") &&
            (e.stack.add(eN(new oA(oA.HARDWARE))),
            (this.hardwareClipping = !0));
        }
        setupDepth(e) {
          let { renderer: t, camera: r } = e,
            i = this.depthNode;
          if (null === i) {
            let e = t.getMRT();
            e && e.has("depth")
              ? (i = e.get("depth"))
              : !0 === t.logarithmicDepthBuffer &&
                (i = r.isPerspectiveCamera
                  ? o_(sQ.z, sf, sy)
                  : ob(sQ.z, sf, sy));
          }
          null !== i && oN.assign(i).toStack();
        }
        setupPositionView() {
          return sk.mul(sq).xyz;
        }
        setupModelViewProjection() {
          return sb.mul(sQ);
        }
        setupVertex(e) {
          return (
            e.addStack(),
            this.setupPosition(e),
            (e.context.vertex = e.removeStack()),
            aB
          );
        }
        setupPosition(e) {
          let { object: t, geometry: r } = e;
          if (
            ((r.morphAttributes.position ||
              r.morphAttributes.normal ||
              r.morphAttributes.color) &&
              a6(t).toStack(),
            !0 === t.isSkinnedMesh && aY(t).toStack(),
            this.displacementMap)
          ) {
            let e = nN("displacementMap", "texture"),
              t = nN("displacementScale", "float"),
              r = nN("displacementBias", "float");
            sq.addAssign(s3.normalize().mul(e.x.mul(t).add(r)));
          }
          return (
            t.isBatchedMesh && aW(t).toStack(),
            t.isInstancedMesh &&
              t.instanceMatrix &&
              !0 === t.instanceMatrix.isInstancedBufferAttribute &&
              az(t).toStack(),
            null !== this.positionNode &&
              sq.assign(i_(this.positionNode, "POSITION", "vec3")),
            sq
          );
        }
        setupDiffuseColor({ object: e, geometry: t }) {
          null !== this.maskNode && eG(this.maskNode).not().discard();
          let r = this.colorNode ? eK(this.colorNode) : n4;
          !0 === this.vertexColors &&
            t.hasAttribute("color") &&
            (r = r.mul(oB())),
            e.instanceColor && (r = e8("vec3", "vInstanceColor").mul(r)),
            e.isBatchedMesh &&
              e._colorsTexture &&
              (r = e8("vec3", "vBatchColor").mul(r)),
            e5.assign(r);
          let i = this.opacityNode ? eD(this.opacityNode) : n5;
          e5.a.assign(e5.a.mul(i));
          let s = null;
          (null !== this.alphaTestNode || this.alphaTest > 0) &&
            ((s = null !== this.alphaTestNode ? eD(this.alphaTestNode) : n3),
            e5.a.lessThanEqual(s).discard()),
            !0 === this.alphaHash && e5.a.lessThan(oC(sq)).discard(),
            !1 === this.transparent &&
            this.blending === u.NTi &&
            !1 === this.alphaToCoverage
              ? e5.a.assign(1)
              : null === s && e5.a.lessThanEqual(0).discard();
        }
        setupVariants() {}
        setupOutgoingLight() {
          return !0 === this.lights ? eH(0) : e5.rgb;
        }
        setupNormal() {
          return this.normalNode ? eH(this.normalNode) : an;
        }
        setupEnvironment() {
          let e = null;
          return (
            this.envNode
              ? (e = this.envNode)
              : this.envMap &&
                (e = this.envMap.isCubeTexture
                  ? nN("envMap", "cubeTexture")
                  : nN("envMap", "texture")),
            e
          );
        }
        setupLightMap(e) {
          let t = null;
          return e.material.lightMap && (t = new oe(aw)), t;
        }
        setupLights(e) {
          let t = [],
            r = this.setupEnvironment(e);
          r && r.isLightingNode && t.push(r);
          let i = this.setupLightMap(e);
          if (
            (i && i.isLightingNode && t.push(i),
            null !== this.aoNode || e.material.aoMap)
          ) {
            let e = null !== this.aoNode ? this.aoNode : aC;
            t.push(new a5(e));
          }
          let s = this.lightsNode || e.lightsNode;
          return (
            t.length > 0 &&
              (s = e.renderer.lighting.createNode([...s.getLights(), ...t])),
            s
          );
        }
        setupLightingModel() {}
        setupLighting(e) {
          let { material: t } = e,
            { backdropNode: r, backdropAlphaNode: i, emissiveNode: s } = this,
            n =
              !0 === this.lights || null !== this.lightsNode
                ? this.setupLights(e)
                : null,
            a = this.setupOutgoingLight(e);
          return (
            n && n.getScope().hasLights
              ? (a = a7(n, this.setupLightingModel(e) || null, r, i))
              : null !== r && (a = eH(null !== i ? r6(a, r, i) : r)),
            ((s && !0 === s.isNode) ||
              (t.emissive && !0 === t.emissive.isColor)) &&
              (e9.assign(eH(s || n8)), (a = a.add(e9))),
            a
          );
        }
        setupFog(e, t) {
          let r = e.fogNode;
          return r && (tm.assign(t), (t = eK(r.toVar()))), t;
        }
        setupPremultipliedAlpha(e, t) {
          return oD(t);
        }
        setupOutput(e, t) {
          return (
            !0 === this.fog && (t = this.setupFog(e, t)),
            !0 === this.premultipliedAlpha &&
              (t = this.setupPremultipliedAlpha(e, t)),
            t
          );
        }
        setDefaultValues(e) {
          for (let t in e) {
            let r = e[t];
            void 0 === this[t] &&
              ((this[t] = r), r && r.clone && (this[t] = r.clone()));
          }
          let t = Object.getOwnPropertyDescriptors(e.constructor.prototype);
          for (let e in t)
            void 0 ===
              Object.getOwnPropertyDescriptor(this.constructor.prototype, e) &&
              void 0 !== t[e].get &&
              Object.defineProperty(this.constructor.prototype, e, t[e]);
        }
        toJSON(e) {
          let t = void 0 === e || "string" == typeof e;
          t && (e = { textures: {}, images: {}, nodes: {} });
          let r = u.imn.prototype.toJSON.call(this, e),
            i = b(this);
          for (let { property: t, childNode: s } of ((r.inputNodes = {}), i))
            r.inputNodes[t] = s.toJSON(e).uuid;
          function s(e) {
            let t = [];
            for (let r in e) {
              let i = e[r];
              delete i.metadata, t.push(i);
            }
            return t;
          }
          if (t) {
            let t = s(e.textures),
              i = s(e.images),
              n = s(e.nodes);
            t.length > 0 && (r.textures = t),
              i.length > 0 && (r.images = i),
              n.length > 0 && (r.nodes = n);
          }
          return r;
        }
        copy(e) {
          return (
            (this.lightsNode = e.lightsNode),
            (this.envNode = e.envNode),
            (this.colorNode = e.colorNode),
            (this.normalNode = e.normalNode),
            (this.opacityNode = e.opacityNode),
            (this.backdropNode = e.backdropNode),
            (this.backdropAlphaNode = e.backdropAlphaNode),
            (this.alphaTestNode = e.alphaTestNode),
            (this.maskNode = e.maskNode),
            (this.positionNode = e.positionNode),
            (this.geometryNode = e.geometryNode),
            (this.depthNode = e.depthNode),
            (this.receivedShadowPositionNode = e.receivedShadowPositionNode),
            (this.castShadowPositionNode = e.castShadowPositionNode),
            (this.receivedShadowNode = e.receivedShadowNode),
            (this.castShadowNode = e.castShadowNode),
            (this.outputNode = e.outputNode),
            (this.mrtNode = e.mrtNode),
            (this.fragmentNode = e.fragmentNode),
            (this.vertexNode = e.vertexNode),
            super.copy(e)
          );
        }
      }
      let oG = new u.mrM();
      class ok extends oO {
        static get type() {
          return "LineBasicNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isLineBasicNodeMaterial = !0),
            this.setDefaultValues(oG),
            this.setValues(e);
        }
      }
      let oz = new u.Fvt();
      class o$ extends oO {
        static get type() {
          return "LineDashedNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isLineDashedNodeMaterial = !0),
            this.setDefaultValues(oz),
            (this.dashOffset = 0),
            (this.offsetNode = null),
            (this.dashScaleNode = null),
            (this.dashSizeNode = null),
            (this.gapSizeNode = null),
            this.setValues(e);
        }
        setupVariants() {
          let e = this.offsetNode ? eD(this.offsetNode) : aR,
            t = this.dashScaleNode ? eD(this.dashScaleNode) : a_,
            r = this.dashSizeNode ? eD(this.dashSizeNode) : av,
            i = this.gapSizeNode ? eD(this.gapSizeNode) : aN;
          tf.assign(r), ty.assign(i);
          let s = iN(i5("lineDistance").mul(t));
          (e ? s.add(e) : s).mod(tf.add(ty)).greaterThan(tf).discard();
        }
      }
      let oW = null;
      class oH extends oh {
        static get type() {
          return "ViewportSharedTextureNode";
        }
        constructor(e = or, t = null) {
          null === oW && (oW = new u.Pem()), super(e, t, oW);
        }
        updateReference() {
          return this;
        }
      }
      let oq = eE(oH).setParameterLength(0, 2),
        oj = (e) => eN(e).mul(0.5).add(0.5),
        oX = new u.qBx();
      class oK extends oO {
        static get type() {
          return "MeshNormalNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshNormalNodeMaterial = !0),
            this.setDefaultValues(oX),
            this.setValues(e);
        }
        setupDiffuseColor() {
          let e = this.opacityNode ? eD(this.opacityNode) : n5;
          e5.assign(iM(eK(oj(s5), e), u.er$));
        }
      }
      let oQ = eB(([e = sK]) =>
        ek(
          e.z
            .atan(e.x)
            .mul(1 / (2 * Math.PI))
            .add(0.5),
          e.y
            .clamp(-1, 1)
            .asin()
            .mul(1 / Math.PI)
            .add(0.5)
        )
      );
      class oY extends u.o6l {
        constructor(e = 1, t = {}) {
          super(e, t), (this.isCubeRenderTarget = !0);
        }
        fromEquirectangularTexture(e, t) {
          let r = t.minFilter,
            i = t.generateMipmaps;
          (t.generateMipmaps = !0),
            (this.texture.type = t.type),
            (this.texture.colorSpace = t.colorSpace),
            (this.texture.generateMipmaps = t.generateMipmaps),
            (this.texture.minFilter = t.minFilter),
            (this.texture.magFilter = t.magFilter);
          let s = new u.iNn(5, 5, 5),
            n = oQ(sK),
            a = new oO();
          (a.colorNode = sa(t, n, 0)), (a.side = u.hsX), (a.blending = u.XIg);
          let o = new u.eaF(s, a),
            l = new u.Z58();
          l.add(o), t.minFilter === u.$_I && (t.minFilter = u.k6q);
          let d = new u.F1T(1, 10, this),
            h = e.getMRT();
          return (
            e.setMRT(null),
            d.update(e, l),
            e.setMRT(h),
            (t.minFilter = r),
            (t.currentGenerateMipmaps = i),
            o.geometry.dispose(),
            o.material.dispose(),
            this
          );
        }
      }
      let oZ = new WeakMap();
      class oJ extends G {
        static get type() {
          return "CubeMapNode";
        }
        constructor(e) {
          super("vec3"),
            (this.envNode = e),
            (this._cubeTexture = null),
            (this._cubeTextureNode = ny(null));
          let t = new u.b4q();
          (t.isRenderTargetTexture = !0),
            (this._defaultTexture = t),
            (this.updateBeforeType = C.RENDER);
        }
        updateBefore(e) {
          let { renderer: t, material: r } = e,
            i = this.envNode;
          if (i.isTextureNode || i.isMaterialReferenceNode) {
            let e = i.isTextureNode ? i.value : r[i.property];
            if (e && e.isTexture) {
              let r = e.mapping;
              if (r === u.wfO || r === u.uV5) {
                if (oZ.has(e)) {
                  let t = oZ.get(e);
                  o1(t, e.mapping), (this._cubeTexture = t);
                } else {
                  var s;
                  let r = e.image;
                  if (null != (s = r) && s.height > 0) {
                    let i = new oY(r.height);
                    i.fromEquirectangularTexture(t, e),
                      o1(i.texture, e.mapping),
                      (this._cubeTexture = i.texture),
                      oZ.set(e, i.texture),
                      e.addEventListener("dispose", o0);
                  } else this._cubeTexture = this._defaultTexture;
                }
                this._cubeTextureNode.value = this._cubeTexture;
              } else this._cubeTextureNode = this.envNode;
            }
          }
        }
        setup(e) {
          return this.updateBefore(e), this._cubeTextureNode;
        }
      }
      function o0(e) {
        let t = e.target;
        t.removeEventListener("dispose", o0);
        let r = oZ.get(t);
        void 0 !== r && (oZ.delete(t), r.dispose());
      }
      function o1(e, t) {
        t === u.wfO ? (e.mapping = u.hy7) : t === u.uV5 && (e.mapping = u.xFO);
      }
      let o2 = eE(oJ).setParameterLength(1);
      class o3 extends a8 {
        static get type() {
          return "BasicEnvironmentNode";
        }
        constructor(e = null) {
          super(), (this.envNode = e);
        }
        setup(e) {
          e.context.environment = o2(this.envNode);
        }
      }
      class o4 extends a8 {
        static get type() {
          return "BasicLightMapNode";
        }
        constructor(e = null) {
          super(), (this.lightMapNode = e);
        }
        setup(e) {
          let t = eD(1 / Math.PI);
          e.context.irradianceLightMap = this.lightMapNode.mul(t);
        }
      }
      class o6 {
        start(e) {
          e.lightsNode.setupLights(e, e.lightsNode.getLightNodes(e)),
            this.indirect(e);
        }
        finish() {}
        direct() {}
        directRectArea() {}
        indirect() {}
        ambientOcclusion() {}
      }
      class o8 extends o6 {
        constructor() {
          super();
        }
        indirect({ context: e }) {
          let t = e.ambientOcclusion,
            r = e.reflectedLight,
            i = e.irradianceLightMap;
          r.indirectDiffuse.assign(eK(0)),
            i
              ? r.indirectDiffuse.addAssign(i)
              : r.indirectDiffuse.addAssign(eK(1, 1, 1, 0)),
            r.indirectDiffuse.mulAssign(t),
            r.indirectDiffuse.mulAssign(e5.rgb);
        }
        finish(e) {
          let { material: t, context: r } = e,
            i = r.outgoingLight,
            s = e.context.environment;
          if (s)
            switch (t.combine) {
              case u.caT:
                i.rgb.assign(r6(i.rgb, i.rgb.mul(s.rgb), at.mul(ar)));
                break;
              case u.KRh:
                i.rgb.assign(r6(i.rgb, s.rgb, at.mul(ar)));
                break;
              case u.XrR:
                i.rgb.addAssign(s.rgb.mul(at.mul(ar)));
                break;
              default:
                console.warn(
                  "THREE.BasicLightingModel: Unsupported .combine value:",
                  t.combine
                );
            }
        }
      }
      let o5 = new u.V9B();
      class o9 extends oO {
        static get type() {
          return "MeshBasicNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshBasicNodeMaterial = !0),
            (this.lights = !0),
            this.setDefaultValues(o5),
            this.setValues(e);
        }
        setupNormal() {
          return s1(s6);
        }
        setupEnvironment(e) {
          let t = super.setupEnvironment(e);
          return t ? new o3(t) : null;
        }
        setupLightMap(e) {
          let t = null;
          return e.material.lightMap && (t = new o4(aw)), t;
        }
        setupOutgoingLight() {
          return e5.rgb;
        }
        setupLightingModel() {
          return new o8();
        }
      }
      let o7 = eB(({ f0: e, f90: t, dotVH: r }) => {
          let i = r.mul(-5.55473).sub(6.98316).mul(r).exp2();
          return e.mul(i.oneMinus()).add(t.mul(i));
        }),
        le = eB((e) => e.diffuseColor.mul(1 / Math.PI)),
        lt = eB(({ dotNH: e }) =>
          tg
            .mul(eD(0.5))
            .add(1)
            .mul(eD(1 / Math.PI))
            .mul(e.pow(tg))
        ),
        lr = eB(({ lightDirection: e }) => {
          let t = e.add(sY).normalize(),
            r = s5.dot(t).clamp(),
            i = o7({ f0: tc, f90: 1, dotVH: sY.dot(t).clamp() }),
            s = eD(0.25),
            n = lt({ dotNH: r });
          return i.mul(s).mul(n);
        });
      class li extends o8 {
        constructor(e = !0) {
          super(), (this.specular = e);
        }
        direct({ lightDirection: e, lightColor: t, reflectedLight: r }) {
          let i = s5.dot(e).clamp().mul(t);
          r.directDiffuse.addAssign(i.mul(le({ diffuseColor: e5.rgb }))),
            !0 === this.specular &&
              r.directSpecular.addAssign(
                i.mul(lr({ lightDirection: e })).mul(at)
              );
        }
        indirect(e) {
          let {
            ambientOcclusion: t,
            irradiance: r,
            reflectedLight: i,
          } = e.context;
          i.indirectDiffuse.addAssign(r.mul(le({ diffuseColor: e5 }))),
            i.indirectDiffuse.mulAssign(t);
        }
      }
      let ls = new u.G_z();
      class ln extends oO {
        static get type() {
          return "MeshLambertNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshLambertNodeMaterial = !0),
            (this.lights = !0),
            this.setDefaultValues(ls),
            this.setValues(e);
        }
        setupEnvironment(e) {
          let t = super.setupEnvironment(e);
          return t ? new o3(t) : null;
        }
        setupLightingModel() {
          return new li(!1);
        }
      }
      let la = new u.tXL();
      class lo extends oO {
        static get type() {
          return "MeshPhongNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshPhongNodeMaterial = !0),
            (this.lights = !0),
            (this.shininessNode = null),
            (this.specularNode = null),
            this.setDefaultValues(la),
            this.setValues(e);
        }
        setupEnvironment(e) {
          let t = super.setupEnvironment(e);
          return t ? new o3(t) : null;
        }
        setupLightingModel() {
          return new li();
        }
        setupVariants() {
          let e = (this.shininessNode ? eD(this.shininessNode) : n6).max(1e-4);
          tg.assign(e);
          let t = this.specularNode || n9;
          tc.assign(t);
        }
        copy(e) {
          return (
            (this.shininessNode = e.shininessNode),
            (this.specularNode = e.specularNode),
            super.copy(e)
          );
        }
      }
      let ll = eB((e) => {
          if (!1 === e.geometry.hasAttribute("normal")) return eD(0);
          let t = s6.dFdx().abs().max(s6.dFdy().abs());
          return t.x.max(t.y).max(t.z);
        }),
        lu = eB((e) => {
          let { roughness: t } = e,
            r = ll(),
            i = t.max(0.0525);
          return (i = i.add(r)).min(1);
        }),
        ld = eB(({ alpha: e, dotNL: t, dotNV: r }) => {
          let i = e.pow2(),
            s = t.mul(i.add(i.oneMinus().mul(r.pow2())).sqrt()),
            n = r.mul(i.add(i.oneMinus().mul(t.pow2())).sqrt());
          return tW(0.5, s.add(n).max(rs));
        }).setLayout({
          name: "V_GGX_SmithCorrelated",
          type: "float",
          inputs: [
            { name: "alpha", type: "float" },
            { name: "dotNL", type: "float" },
            { name: "dotNV", type: "float" },
          ],
        }),
        lh = eB(
          ({
            alphaT: e,
            alphaB: t,
            dotTV: r,
            dotBV: i,
            dotTL: s,
            dotBL: n,
            dotNV: a,
            dotNL: o,
          }) => {
            let l = o.mul(eH(e.mul(r), t.mul(i), a).length()),
              u = a.mul(eH(e.mul(s), t.mul(n), o).length());
            return tW(0.5, l.add(u)).saturate();
          }
        ).setLayout({
          name: "V_GGX_SmithCorrelated_Anisotropic",
          type: "float",
          inputs: [
            { name: "alphaT", type: "float", qualifier: "in" },
            { name: "alphaB", type: "float", qualifier: "in" },
            { name: "dotTV", type: "float", qualifier: "in" },
            { name: "dotBV", type: "float", qualifier: "in" },
            { name: "dotTL", type: "float", qualifier: "in" },
            { name: "dotBL", type: "float", qualifier: "in" },
            { name: "dotNV", type: "float", qualifier: "in" },
            { name: "dotNL", type: "float", qualifier: "in" },
          ],
        }),
        lc = eB(({ alpha: e, dotNH: t }) => {
          let r = e.pow2(),
            i = t.pow2().mul(r.oneMinus()).oneMinus();
          return r.div(i.pow2()).mul(1 / Math.PI);
        }).setLayout({
          name: "D_GGX",
          type: "float",
          inputs: [
            { name: "alpha", type: "float" },
            { name: "dotNH", type: "float" },
          ],
        }),
        lp = eD(1 / Math.PI),
        lg = eB(({ alphaT: e, alphaB: t, dotNH: r, dotTH: i, dotBH: s }) => {
          let n = e.mul(t),
            a = eH(t.mul(i), e.mul(s), n.mul(r)),
            o = a.dot(a),
            l = n.div(o);
          return lp.mul(n.mul(l.pow2()));
        }).setLayout({
          name: "D_GGX_Anisotropic",
          type: "float",
          inputs: [
            { name: "alphaT", type: "float", qualifier: "in" },
            { name: "alphaB", type: "float", qualifier: "in" },
            { name: "dotNH", type: "float", qualifier: "in" },
            { name: "dotTH", type: "float", qualifier: "in" },
            { name: "dotBH", type: "float", qualifier: "in" },
          ],
        }),
        lm = eB(
          ({
            lightDirection: e,
            f0: t,
            f90: r,
            roughness: i,
            f: s,
            normalView: n = s5,
            USE_IRIDESCENCE: a,
            USE_ANISOTROPY: o,
          }) => {
            let l,
              u,
              d = i.pow2(),
              h = e.add(sY).normalize(),
              c = n.dot(e).clamp(),
              p = n.dot(sY).clamp(),
              g = n.dot(h).clamp(),
              m = o7({ f0: t, f90: r, dotVH: sY.dot(h).clamp() });
            if ((eT(a) && (m = tn.mix(m, s)), eT(o))) {
              let t = td.dot(e),
                r = td.dot(sY),
                i = td.dot(h),
                s = th.dot(e),
                n = th.dot(sY),
                a = th.dot(h);
              (l = lh({
                alphaT: tl,
                alphaB: d,
                dotTV: r,
                dotBV: n,
                dotTL: t,
                dotBL: s,
                dotNV: p,
                dotNL: c,
              })),
                (u = lg({
                  alphaT: tl,
                  alphaB: d,
                  dotNH: g,
                  dotTH: i,
                  dotBH: a,
                }));
            } else
              (l = ld({ alpha: d, dotNL: c, dotNV: p })),
                (u = lc({ alpha: d, dotNH: g }));
            return m.mul(l).mul(u);
          }
        ),
        lf = eB(({ roughness: e, dotNV: t }) => {
          let r = eK(-1, -0.0275, -0.572, 0.022),
            i = eK(1, 0.0425, 1.04, -0.04),
            s = e.mul(r).add(i),
            n = s.x.mul(s.x).min(t.mul(-9.28).exp2()).mul(s.x).add(s.y);
          return ek(-1.04, 1.04).mul(n).add(s.zw);
        }).setLayout({
          name: "DFGApprox",
          type: "vec2",
          inputs: [
            { name: "roughness", type: "float" },
            { name: "dotNV", type: "vec3" },
          ],
        }),
        ly = eB((e) => {
          let { dotNV: t, specularColor: r, specularF90: i, roughness: s } = e,
            n = lf({ dotNV: t, roughness: s });
          return r.mul(n.x).add(i.mul(n.y));
        }),
        lb = eB(({ f: e, f90: t, dotVH: r }) => {
          let i = r.oneMinus().saturate(),
            s = i.mul(i),
            n = i.mul(s, s).clamp(0, 0.9999);
          return e.sub(eH(t).mul(n)).div(n.oneMinus());
        }).setLayout({
          name: "Schlick_to_F0",
          type: "vec3",
          inputs: [
            { name: "f", type: "vec3" },
            { name: "f90", type: "float" },
            { name: "dotVH", type: "float" },
          ],
        }),
        lx = eB(({ roughness: e, dotNH: t }) => {
          let r = e.pow2(),
            i = eD(1).div(r),
            s = t.pow2().oneMinus().max(0.0078125);
          return eD(2)
            .add(i)
            .mul(s.pow(i.mul(0.5)))
            .div(2 * Math.PI);
        }).setLayout({
          name: "D_Charlie",
          type: "float",
          inputs: [
            { name: "roughness", type: "float" },
            { name: "dotNH", type: "float" },
          ],
        }),
        lT = eB(({ dotNV: e, dotNL: t }) =>
          eD(1).div(eD(4).mul(t.add(e).sub(t.mul(e))))
        ).setLayout({
          name: "V_Neubelt",
          type: "float",
          inputs: [
            { name: "dotNV", type: "float" },
            { name: "dotNL", type: "float" },
          ],
        }),
        l_ = eB(({ lightDirection: e }) => {
          let t = e.add(sY).normalize(),
            r = s5.dot(e).clamp(),
            i = s5.dot(sY).clamp(),
            s = lx({ roughness: ts, dotNH: s5.dot(t).clamp() }),
            n = lT({ dotNV: i, dotNL: r });
          return ti.mul(s).mul(n);
        }),
        lv = eB(({ N: e, V: t, roughness: r }) => {
          let i = ek(r, e.dot(t).saturate().oneMinus().sqrt());
          return i.assign(i.mul(0.984375).add(0.0078125)), i;
        }).setLayout({
          name: "LTC_Uv",
          type: "vec2",
          inputs: [
            { name: "N", type: "vec3" },
            { name: "V", type: "vec3" },
            { name: "roughness", type: "float" },
          ],
        }),
        lN = eB(({ f: e }) => {
          let t = e.length();
          return rH(t.mul(t).add(e.z).div(t.add(1)), 0);
        }).setLayout({
          name: "LTC_ClippedSphereFormFactor",
          type: "float",
          inputs: [{ name: "f", type: "vec3" }],
        }),
        lS = eB(({ v1: e, v2: t }) => {
          let r = e.dot(t),
            i = r.abs().toVar(),
            s = i.mul(0.0145206).add(0.4965155).mul(i).add(0.8543985).toVar(),
            n = i.add(4.1616724).mul(i).add(3.417594).toVar(),
            a = s.div(n),
            o = r
              .greaterThan(0)
              .select(
                a,
                rH(r.mul(r).oneMinus(), 1e-7).inverseSqrt().mul(0.5).sub(a)
              );
          return e.cross(t).mul(o);
        }).setLayout({
          name: "LTC_EdgeVectorFormFactor",
          type: "vec3",
          inputs: [
            { name: "v1", type: "vec3" },
            { name: "v2", type: "vec3" },
          ],
        }),
        lR = eB(({ N: e, V: t, P: r, mInv: i, p0: s, p1: n, p2: a, p3: o }) => {
          let l = n.sub(s).toVar(),
            u = o.sub(s).toVar(),
            d = l.cross(u),
            h = eH().toVar();
          return (
            eP(d.dot(r.sub(s)).greaterThanEqual(0), () => {
              let l = t.sub(e.mul(t.dot(e))).normalize(),
                u = e.cross(l).negate(),
                d = i.mul(e0(l, u, e).transpose()).toVar(),
                c = d.mul(s.sub(r)).normalize().toVar(),
                p = d.mul(n.sub(r)).normalize().toVar(),
                g = d.mul(a.sub(r)).normalize().toVar(),
                m = d.mul(o.sub(r)).normalize().toVar(),
                f = eH(0).toVar();
              f.addAssign(lS({ v1: c, v2: p })),
                f.addAssign(lS({ v1: p, v2: g })),
                f.addAssign(lS({ v1: g, v2: m })),
                f.addAssign(lS({ v1: m, v2: c })),
                h.assign(eH(lN({ f: f })));
            }),
            h
          );
        }).setLayout({
          name: "LTC_Evaluate",
          type: "vec3",
          inputs: [
            { name: "N", type: "vec3" },
            { name: "V", type: "vec3" },
            { name: "P", type: "vec3" },
            { name: "mInv", type: "mat3" },
            { name: "p0", type: "vec3" },
            { name: "p1", type: "vec3" },
            { name: "p2", type: "vec3" },
            { name: "p3", type: "vec3" },
          ],
        }),
        lA = 1 / 6,
        lE = (e) => t$(lA, t$(e, t$(e, e.negate().add(3)).sub(3)).add(1)),
        lw = (e) => t$(lA, t$(e, t$(e, t$(3, e).sub(6))).add(4)),
        lC = (e) => t$(lA, t$(e, t$(e, t$(-3, e).add(3)).add(3)).add(1)),
        lM = (e) => t$(lA, rZ(e, 3)),
        lB = (e) => lE(e).add(lw(e)),
        lL = (e) => lC(e).add(lM(e)),
        lF = (e) => tk(-1, lw(e).div(lE(e).add(lw(e)))),
        lP = (e) => tk(1, lM(e).div(lC(e).add(lM(e)))),
        lI = (e, t, r) => {
          let i = t$(e.uvNode, t.zw).add(0.5),
            s = rb(i),
            n = r_(i),
            a = lB(n.x),
            o = lL(n.x),
            l = lF(n.x),
            u = lP(n.x),
            d = lF(n.y),
            h = lP(n.y),
            c = ek(s.x.add(l), s.y.add(d)).sub(0.5).mul(t.xy),
            p = ek(s.x.add(u), s.y.add(d)).sub(0.5).mul(t.xy),
            g = ek(s.x.add(l), s.y.add(h)).sub(0.5).mul(t.xy),
            m = ek(s.x.add(u), s.y.add(h)).sub(0.5).mul(t.xy),
            f = lB(n.y).mul(
              tk(a.mul(e.sample(c).level(r)), o.mul(e.sample(p).level(r)))
            ),
            y = lL(n.y).mul(
              tk(a.mul(e.sample(g).level(r)), o.mul(e.sample(m).level(r)))
            );
          return f.add(y);
        },
        lU = eB(([e, t]) => {
          let r = ek(e.size(eV(t))),
            i = ek(e.size(eV(t.add(1)))),
            s = tW(1, r),
            n = tW(1, i),
            a = lI(e, eK(s, r), rb(t)),
            o = lI(e, eK(n, i), rx(t));
          return r_(t).mix(a, o);
        }),
        lD = eB(([e, t]) => {
          let r = t.mul(sr(e));
          return lU(e, r);
        }),
        lV = eB(([e, t, r, i, s]) => {
          let n = eH(r9(t.negate(), rT(e), tW(1, i))),
            a = eH(rM(s[0].xyz), rM(s[1].xyz), rM(s[2].xyz));
          return rT(n).mul(r.mul(a));
        }).setLayout({
          name: "getVolumeTransmissionRay",
          type: "vec3",
          inputs: [
            { name: "n", type: "vec3" },
            { name: "v", type: "vec3" },
            { name: "thickness", type: "float" },
            { name: "ior", type: "float" },
            { name: "modelMatrix", type: "mat4" },
          ],
        }),
        lO = eB(([e, t]) => e.mul(r8(t.mul(2).sub(2), 0, 1))).setLayout({
          name: "applyIorToRoughness",
          type: "float",
          inputs: [
            { name: "roughness", type: "float" },
            { name: "ior", type: "float" },
          ],
        }),
        lG = op(),
        lk = op(),
        lz = eB(([e, t, r], { material: i }) =>
          lU((i.side === u.hsX ? lG : lk).sample(e), rm(oi.x).mul(lO(t, r)))
        ),
        l$ = eB(
          ([e, t, r]) => (
            eP(r.notEqual(0), () => rc(rg(t).negate().div(r).negate().mul(e))),
            eH(1)
          )
        ).setLayout({
          name: "volumeAttenuation",
          type: "vec3",
          inputs: [
            { name: "transmissionDistance", type: "float" },
            { name: "attenuationColor", type: "vec3" },
            { name: "attenuationDistance", type: "float" },
          ],
        }),
        lW = eB(([e, t, r, i, s, n, a, o, l, u, d, h, c, p, g]) => {
          let m, f;
          if (g) {
            (m = eK().toVar()), (f = eH().toVar());
            let s = d.sub(1).mul(g.mul(0.025)),
              n = eH(d.sub(s), d, d.add(s));
            aJ({ start: 0, end: 3 }, ({ i: s }) => {
              let d = n.element(s),
                g = lV(e, t, h, d, o),
                y = a.add(g),
                b = u.mul(l.mul(eK(y, 1))),
                x = ek(b.xy.div(b.w)).toVar();
              x.addAssign(1), x.divAssign(2), x.assign(ek(x.x, x.y.oneMinus()));
              let T = lz(x, r, d);
              m.element(s).assign(T.element(s)),
                m.a.addAssign(T.a),
                f
                  .element(s)
                  .assign(i.element(s).mul(l$(rM(g), c, p).element(s)));
            }),
              m.a.divAssign(3);
          } else {
            let s = lV(e, t, h, d, o),
              n = a.add(s),
              g = u.mul(l.mul(eK(n, 1))),
              y = ek(g.xy.div(g.w)).toVar();
            y.addAssign(1),
              y.divAssign(2),
              y.assign(ek(y.x, y.y.oneMinus())),
              (m = lz(y, r, d)),
              (f = i.mul(l$(rM(s), c, p)));
          }
          let y = f.rgb.mul(m.rgb),
            b = eH(
              ly({
                dotNV: e.dot(t).clamp(),
                specularColor: s,
                specularF90: n,
                roughness: r,
              })
            ),
            x = f.r.add(f.g, f.b).div(3);
          return eK(b.oneMinus().mul(y), m.a.oneMinus().mul(x).oneMinus());
        }),
        lH = e0(
          3.2404542,
          -0.969266,
          0.0556434,
          -1.5371385,
          1.8760108,
          -0.2040259,
          -0.4985314,
          0.041556,
          1.0572252
        ),
        lq = (e, t) => e.sub(t).div(e.add(t)).pow2(),
        lj = eB(
          ({
            outsideIOR: e,
            eta2: t,
            cosTheta1: r,
            thinFilmThickness: i,
            baseF0: s,
          }) => {
            let n = r6(e, t, r7(0, 0.03, i)),
              a = e.div(n).pow2().mul(r.pow2().oneMinus()).oneMinus();
            eP(a.lessThan(0), () => eH(1));
            let o = a.sqrt(),
              l = o7({ f0: lq(n, e), f90: 1, dotVH: r }),
              u = l.oneMinus(),
              d = n.lessThan(e).select(Math.PI, 0),
              h = eD(Math.PI).sub(d),
              c = ((e) => {
                let t = e.sqrt();
                return eH(1).add(t).div(eH(1).sub(t));
              })(s.clamp(0, 0.9999)),
              p = o7({ f0: lq(c, n.toVec3()), f90: 1, dotVH: o }),
              g = eH(
                c.x.lessThan(n).select(Math.PI, 0),
                c.y.lessThan(n).select(Math.PI, 0),
                c.z.lessThan(n).select(Math.PI, 0)
              ),
              m = n.mul(i, o, 2),
              f = eH(h).add(g),
              y = l.mul(p).clamp(1e-5, 0.9999),
              b = y.sqrt(),
              x = u.pow2().mul(p).div(eH(1).sub(y)),
              T = l.add(x).toVar(),
              _ = x.sub(u).toVar();
            return (
              aJ(
                { start: 1, end: 2, condition: "<=", name: "m" },
                ({ m: e }) => {
                  _.mulAssign(b);
                  let t = ((e, t) => {
                    let r = e.mul(2 * Math.PI * 1e-9),
                      i = eH(54856e-17, 44201e-17, 52481e-17),
                      s = eH(1681e3, 1795300, 2208400),
                      n = eH(43278e5, 93046e5, 66121e5),
                      a = eD(9747e-17 * Math.sqrt(2 * Math.PI * 45282e5))
                        .mul(r.mul(2239900).add(t.x).cos())
                        .mul(r.pow2().mul(-45282e5).exp()),
                      o = i
                        .mul(n.mul(2 * Math.PI).sqrt())
                        .mul(s.mul(r).add(t).cos())
                        .mul(r.pow2().negate().mul(n).exp());
                    return (
                      (o = eH(o.x.add(a), o.y, o.z).div(10685e-11)), lH.mul(o)
                    );
                  })(eD(e).mul(m), eD(e).mul(f)).mul(2);
                  T.addAssign(_.mul(t));
                }
              ),
              T.max(eH(0))
            );
          }
        ).setLayout({
          name: "evalIridescence",
          type: "vec3",
          inputs: [
            { name: "outsideIOR", type: "float" },
            { name: "eta2", type: "float" },
            { name: "cosTheta1", type: "float" },
            { name: "thinFilmThickness", type: "float" },
            { name: "baseF0", type: "vec3" },
          ],
        }),
        lX = eB(({ normal: e, viewDir: t, roughness: r }) => {
          let i = e.dot(t).saturate(),
            s = r.pow2(),
            n = il(
              r.lessThan(0.25),
              eD(-339.2).mul(s).add(eD(161.4).mul(r)).sub(25.9),
              eD(-8.48).mul(s).add(eD(14.3).mul(r)).sub(9.95)
            ),
            a = il(
              r.lessThan(0.25),
              eD(44).mul(s).sub(eD(23.7).mul(r)).add(3.26),
              eD(1.97).mul(s).sub(eD(3.27).mul(r)).add(0.72)
            );
          return il(r.lessThan(0.25), 0, eD(0.1).mul(r).sub(0.025))
            .add(n.mul(i).add(a).exp())
            .mul(1 / Math.PI)
            .saturate();
        }),
        lK = eH(0.04),
        lQ = eD(1);
      class lY extends o6 {
        constructor(e = !1, t = !1, r = !1, i = !1, s = !1, n = !1) {
          super(),
            (this.clearcoat = e),
            (this.sheen = t),
            (this.iridescence = r),
            (this.anisotropy = i),
            (this.transmission = s),
            (this.dispersion = n),
            (this.clearcoatRadiance = null),
            (this.clearcoatSpecularDirect = null),
            (this.clearcoatSpecularIndirect = null),
            (this.sheenSpecularDirect = null),
            (this.sheenSpecularIndirect = null),
            (this.iridescenceFresnel = null),
            (this.iridescenceF0 = null);
        }
        start(e) {
          if (
            (!0 === this.clearcoat &&
              ((this.clearcoatRadiance = eH().toVar("clearcoatRadiance")),
              (this.clearcoatSpecularDirect = eH().toVar(
                "clearcoatSpecularDirect"
              )),
              (this.clearcoatSpecularIndirect = eH().toVar(
                "clearcoatSpecularIndirect"
              ))),
            !0 === this.sheen &&
              ((this.sheenSpecularDirect = eH().toVar("sheenSpecularDirect")),
              (this.sheenSpecularIndirect = eH().toVar(
                "sheenSpecularIndirect"
              ))),
            !0 === this.iridescence)
          ) {
            let e = s5.dot(sY).clamp();
            (this.iridescenceFresnel = lj({
              outsideIOR: eD(1),
              eta2: ta,
              cosTheta1: e,
              thinFilmThickness: to,
              baseF0: tc,
            })),
              (this.iridescenceF0 = lb({
                f: this.iridescenceFresnel,
                f90: 1,
                dotVH: e,
              }));
          }
          if (!0 === this.transmission) {
            let t = sN.sub(sX).normalize(),
              r = e.context;
            (r.backdrop = lW(
              s9,
              t,
              e7,
              e5,
              tc,
              tp,
              sX,
              sP,
              sT,
              sb,
              tx,
              t_,
              tN,
              tv,
              this.dispersion ? tS : null
            )),
              (r.backdropAlpha = tT),
              e5.a.mulAssign(r6(1, r.backdrop.a, tT));
          }
          super.start(e);
        }
        computeMultiscattering(e, t, r) {
          let i = lf({ roughness: e7, dotNV: s5.dot(sY).clamp() }),
            s = (this.iridescenceF0 ? tn.mix(tc, this.iridescenceF0) : tc)
              .mul(i.x)
              .add(r.mul(i.y)),
            n = i.x.add(i.y).oneMinus(),
            a = tc.add(tc.oneMinus().mul(0.047619)),
            o = s.mul(a).div(n.mul(a).oneMinus());
          e.addAssign(s), t.addAssign(o.mul(n));
        }
        direct({ lightDirection: e, lightColor: t, reflectedLight: r }) {
          let i = s5.dot(e).clamp().mul(t);
          if (
            (!0 === this.sheen &&
              this.sheenSpecularDirect.addAssign(
                i.mul(l_({ lightDirection: e }))
              ),
            !0 === this.clearcoat)
          ) {
            let r = s7.dot(e).clamp().mul(t);
            this.clearcoatSpecularDirect.addAssign(
              r.mul(
                lm({
                  lightDirection: e,
                  f0: lK,
                  f90: lQ,
                  roughness: tr,
                  normalView: s7,
                })
              )
            );
          }
          r.directDiffuse.addAssign(i.mul(le({ diffuseColor: e5.rgb }))),
            r.directSpecular.addAssign(
              i.mul(
                lm({
                  lightDirection: e,
                  f0: tc,
                  f90: 1,
                  roughness: e7,
                  iridescence: this.iridescence,
                  f: this.iridescenceFresnel,
                  USE_IRIDESCENCE: this.iridescence,
                  USE_ANISOTROPY: this.anisotropy,
                })
              )
            );
        }
        directRectArea({
          lightColor: e,
          lightPosition: t,
          halfWidth: r,
          halfHeight: i,
          reflectedLight: s,
          ltc_1: n,
          ltc_2: a,
        }) {
          let o = t.add(r).sub(i),
            l = t.sub(r).sub(i),
            u = t.sub(r).add(i),
            d = t.add(r).add(i),
            h = sQ.toVar(),
            c = lv({ N: s5, V: sY, roughness: e7 }),
            p = n.sample(c).toVar(),
            g = a.sample(c).toVar(),
            m = e0(eH(p.x, 0, p.y), eH(0, 1, 0), eH(p.z, 0, p.w)).toVar(),
            f = tc.mul(g.x).add(tc.oneMinus().mul(g.y)).toVar();
          s.directSpecular.addAssign(
            e
              .mul(f)
              .mul(
                lR({ N: s5, V: sY, P: h, mInv: m, p0: o, p1: l, p2: u, p3: d })
              )
          ),
            s.directDiffuse.addAssign(
              e
                .mul(e5)
                .mul(
                  lR({
                    N: s5,
                    V: sY,
                    P: h,
                    mInv: e0(1, 0, 0, 0, 1, 0, 0, 0, 1),
                    p0: o,
                    p1: l,
                    p2: u,
                    p3: d,
                  })
                )
            );
        }
        indirect(e) {
          this.indirectDiffuse(e),
            this.indirectSpecular(e),
            this.ambientOcclusion(e);
        }
        indirectDiffuse(e) {
          let { irradiance: t, reflectedLight: r } = e.context;
          r.indirectDiffuse.addAssign(t.mul(le({ diffuseColor: e5 })));
        }
        indirectSpecular(e) {
          let { radiance: t, iblIrradiance: r, reflectedLight: i } = e.context;
          if (
            (!0 === this.sheen &&
              this.sheenSpecularIndirect.addAssign(
                r.mul(ti, lX({ normal: s5, viewDir: sY, roughness: ts }))
              ),
            !0 === this.clearcoat)
          ) {
            let e = ly({
              dotNV: s7.dot(sY).clamp(),
              specularColor: lK,
              specularF90: lQ,
              roughness: tr,
            });
            this.clearcoatSpecularIndirect.addAssign(
              this.clearcoatRadiance.mul(e)
            );
          }
          let s = eH().toVar("singleScattering"),
            n = eH().toVar("multiScattering"),
            a = r.mul(1 / Math.PI);
          this.computeMultiscattering(s, n, tp);
          let o = s.add(n),
            l = e5.mul(o.r.max(o.g).max(o.b).oneMinus());
          i.indirectSpecular.addAssign(t.mul(s)),
            i.indirectSpecular.addAssign(n.mul(a)),
            i.indirectDiffuse.addAssign(l.mul(a));
        }
        ambientOcclusion(e) {
          let { ambientOcclusion: t, reflectedLight: r } = e.context,
            i = s5.dot(sY).clamp().add(t),
            s = e7.mul(-16).oneMinus().negate().exp2(),
            n = t.sub(i.pow(s).oneMinus()).clamp();
          !0 === this.clearcoat && this.clearcoatSpecularIndirect.mulAssign(t),
            !0 === this.sheen && this.sheenSpecularIndirect.mulAssign(t),
            r.indirectDiffuse.mulAssign(t),
            r.indirectSpecular.mulAssign(n);
        }
        finish({ context: e }) {
          let { outgoingLight: t } = e;
          if (!0 === this.clearcoat) {
            let e = o7({ dotVH: s7.dot(sY).clamp(), f0: lK, f90: lQ }),
              r = t
                .mul(tt.mul(e).oneMinus())
                .add(
                  this.clearcoatSpecularDirect
                    .add(this.clearcoatSpecularIndirect)
                    .mul(tt)
                );
            t.assign(r);
          }
          if (!0 === this.sheen) {
            let e = ti.r.max(ti.g).max(ti.b).mul(0.157).oneMinus(),
              r = t
                .mul(e)
                .add(this.sheenSpecularDirect, this.sheenSpecularIndirect);
            t.assign(r);
          }
        }
      }
      let lZ = eD(1),
        lJ = eD(-2),
        l0 = eD(0.8),
        l1 = eD(-1),
        l2 = eD(0.4),
        l3 = eD(2),
        l4 = eD(0.305),
        l6 = eD(3),
        l8 = eD(0.21),
        l5 = eD(4),
        l9 = eD(4),
        l7 = eD(16),
        ue = eB(([e]) => {
          let t = eH(rw(e)).toVar(),
            r = eD(-1).toVar();
          return (
            eP(t.x.greaterThan(t.z), () => {
              eP(t.x.greaterThan(t.y), () => {
                r.assign(il(e.x.greaterThan(0), 0, 3));
              }).Else(() => {
                r.assign(il(e.y.greaterThan(0), 1, 4));
              });
            }).Else(() => {
              eP(t.z.greaterThan(t.y), () => {
                r.assign(il(e.z.greaterThan(0), 2, 5));
              }).Else(() => {
                r.assign(il(e.y.greaterThan(0), 1, 4));
              });
            }),
            r
          );
        }).setLayout({
          name: "getFace",
          type: "float",
          inputs: [{ name: "direction", type: "vec3" }],
        }),
        ut = eB(([e, t]) => {
          let r = ek().toVar();
          return (
            eP(t.equal(0), () => {
              r.assign(ek(e.z, e.y).div(rw(e.x)));
            })
              .ElseIf(t.equal(1), () => {
                r.assign(ek(e.x.negate(), e.z.negate()).div(rw(e.y)));
              })
              .ElseIf(t.equal(2), () => {
                r.assign(ek(e.x.negate(), e.y).div(rw(e.z)));
              })
              .ElseIf(t.equal(3), () => {
                r.assign(ek(e.z.negate(), e.y).div(rw(e.x)));
              })
              .ElseIf(t.equal(4), () => {
                r.assign(ek(e.x.negate(), e.z).div(rw(e.y)));
              })
              .Else(() => {
                r.assign(ek(e.x, e.y).div(rw(e.z)));
              }),
            t$(0.5, r.add(1))
          );
        }).setLayout({
          name: "getUV",
          type: "vec2",
          inputs: [
            { name: "direction", type: "vec3" },
            { name: "face", type: "float" },
          ],
        }),
        ur = eB(([e]) => {
          let t = eD(0).toVar();
          return (
            eP(e.greaterThanEqual(l0), () => {
              t.assign(lZ.sub(e).mul(l1.sub(lJ)).div(lZ.sub(l0)).add(lJ));
            })
              .ElseIf(e.greaterThanEqual(l2), () => {
                t.assign(l0.sub(e).mul(l3.sub(l1)).div(l0.sub(l2)).add(l1));
              })
              .ElseIf(e.greaterThanEqual(l4), () => {
                t.assign(l2.sub(e).mul(l6.sub(l3)).div(l2.sub(l4)).add(l3));
              })
              .ElseIf(e.greaterThanEqual(l8), () => {
                t.assign(l4.sub(e).mul(l5.sub(l6)).div(l4.sub(l8)).add(l6));
              })
              .Else(() => {
                t.assign(eD(-2).mul(rm(t$(1.16, e))));
              }),
            t
          );
        }).setLayout({
          name: "roughnessToMip",
          type: "float",
          inputs: [{ name: "roughness", type: "float" }],
        }),
        ui = eB(([e, t]) => {
          let r = e.toVar();
          r.assign(t$(2, r).sub(1));
          let i = eH(r, 1).toVar();
          return (
            eP(t.equal(0), () => {
              i.assign(i.zyx);
            })
              .ElseIf(t.equal(1), () => {
                i.assign(i.xzy), i.xz.mulAssign(-1);
              })
              .ElseIf(t.equal(2), () => {
                i.x.mulAssign(-1);
              })
              .ElseIf(t.equal(3), () => {
                i.assign(i.zyx), i.xz.mulAssign(-1);
              })
              .ElseIf(t.equal(4), () => {
                i.assign(i.xzy), i.xy.mulAssign(-1);
              })
              .ElseIf(t.equal(5), () => {
                i.z.mulAssign(-1);
              }),
            i
          );
        }).setLayout({
          name: "getDirection",
          type: "vec3",
          inputs: [
            { name: "uv", type: "vec2" },
            { name: "face", type: "float" },
          ],
        }),
        us = eB(([e, t, r, i, s, n]) => {
          let a = eD(r),
            o = eH(t),
            l = r8(ur(a), lJ, n),
            u = r_(l),
            d = rb(l),
            h = eH(un(e, o, d, i, s, n)).toVar();
          return (
            eP(u.notEqual(0), () => {
              let t = eH(un(e, o, d.add(1), i, s, n)).toVar();
              h.assign(r6(h, t, u));
            }),
            h
          );
        }),
        un = eB(([e, t, r, i, s, n]) => {
          let a = eD(r).toVar(),
            o = eH(t),
            l = eD(ue(o)).toVar(),
            u = eD(rH(l9.sub(a), 0)).toVar();
          a.assign(rH(a, l9));
          let d = eD(rp(a)).toVar(),
            h = ek(ut(o, l).mul(d.sub(2)).add(1)).toVar();
          return (
            eP(l.greaterThan(2), () => {
              h.y.addAssign(d), l.subAssign(3);
            }),
            h.x.addAssign(l.mul(d)),
            h.x.addAssign(u.mul(t$(3, l7))),
            h.y.addAssign(t$(4, rp(n).sub(d))),
            h.x.mulAssign(i),
            h.y.mulAssign(s),
            e.sample(h).grad(ek(), ek())
          );
        }),
        ua = eB(
          ({
            envMap: e,
            mipInt: t,
            outputDirection: r,
            theta: i,
            axis: s,
            CUBEUV_TEXEL_WIDTH: n,
            CUBEUV_TEXEL_HEIGHT: a,
            CUBEUV_MAX_MIP: o,
          }) => {
            let l = rN(i);
            return un(
              e,
              r
                .mul(l)
                .add(s.cross(r).mul(rv(i)))
                .add(s.mul(s.dot(r).mul(l.oneMinus()))),
              t,
              n,
              a,
              o
            );
          }
        ),
        uo = eB(
          ({
            n: e,
            latitudinal: t,
            poleAxis: r,
            outputDirection: i,
            weights: s,
            samples: n,
            dTheta: a,
            mipInt: o,
            envMap: l,
            CUBEUV_TEXEL_WIDTH: u,
            CUBEUV_TEXEL_HEIGHT: d,
            CUBEUV_MAX_MIP: h,
          }) => {
            let c = eH(il(t, r, rY(r, i))).toVar();
            eP(c.equal(eH(0)), () => {
              c.assign(eH(i.z, 0, i.x.negate()));
            }),
              c.assign(rT(c));
            let p = eH().toVar();
            return (
              p.addAssign(
                s
                  .element(0)
                  .mul(
                    ua({
                      theta: 0,
                      axis: c,
                      outputDirection: i,
                      mipInt: o,
                      envMap: l,
                      CUBEUV_TEXEL_WIDTH: u,
                      CUBEUV_TEXEL_HEIGHT: d,
                      CUBEUV_MAX_MIP: h,
                    })
                  )
              ),
              aJ({ start: eV(1), end: e }, ({ i: e }) => {
                eP(e.greaterThanEqual(n), () => {
                  a0();
                });
                let t = eD(a.mul(eD(e))).toVar();
                p.addAssign(
                  s
                    .element(e)
                    .mul(
                      ua({
                        theta: t.mul(-1),
                        axis: c,
                        outputDirection: i,
                        mipInt: o,
                        envMap: l,
                        CUBEUV_TEXEL_WIDTH: u,
                        CUBEUV_TEXEL_HEIGHT: d,
                        CUBEUV_MAX_MIP: h,
                      })
                    )
                ),
                  p.addAssign(
                    s
                      .element(e)
                      .mul(
                        ua({
                          theta: t,
                          axis: c,
                          outputDirection: i,
                          mipInt: o,
                          envMap: l,
                          CUBEUV_TEXEL_WIDTH: u,
                          CUBEUV_TEXEL_HEIGHT: d,
                          CUBEUV_MAX_MIP: h,
                        })
                      )
                  );
              }),
              eK(p, 1)
            );
          }
        ),
        ul = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
        uu = new u.qUd(-1, 1, 1, -1, 0, 1),
        ud = new u.ubm(90, 1),
        uh = new u.Q1f(),
        uc = null,
        up = 0,
        ug = 0,
        um = (1 + Math.sqrt(5)) / 2,
        uf = 1 / um,
        uy = [
          new u.Pq0(-um, uf, 0),
          new u.Pq0(um, uf, 0),
          new u.Pq0(-uf, 0, um),
          new u.Pq0(uf, 0, um),
          new u.Pq0(0, um, -uf),
          new u.Pq0(0, um, uf),
          new u.Pq0(-1, 1, -1),
          new u.Pq0(1, 1, -1),
          new u.Pq0(-1, 1, 1),
          new u.Pq0(1, 1, 1),
        ],
        ub = new u.Pq0(),
        ux = new WeakMap(),
        uT = [3, 1, 5, 0, 4, 2],
        u_ = ui(i9(), i5("faceIndex")).normalize(),
        uv = eH(u_.x, u_.y, u_.z);
      class uN {
        constructor(e) {
          (this._renderer = e),
            (this._pingPongRenderTarget = null),
            (this._lodMax = 0),
            (this._cubeSize = 0),
            (this._lodPlanes = []),
            (this._sizeLods = []),
            (this._sigmas = []),
            (this._lodMeshes = []),
            (this._blurMaterial = null),
            (this._cubemapMaterial = null),
            (this._equirectMaterial = null),
            (this._backgroundBox = null);
        }
        get _hasInitialized() {
          return this._renderer.hasInitialized();
        }
        fromScene(e, t = 0, r = 0.1, i = 100, s = {}) {
          let { size: n = 256, position: a = ub, renderTarget: o = null } = s;
          if ((this._setSize(n), !1 === this._hasInitialized)) {
            console.warn(
              "THREE.PMREMGenerator: .fromScene() called before the backend is initialized. Try using .fromSceneAsync() instead."
            );
            let n = o || this._allocateTarget();
            return (s.renderTarget = n), this.fromSceneAsync(e, t, r, i, s), n;
          }
          (uc = this._renderer.getRenderTarget()),
            (up = this._renderer.getActiveCubeFace()),
            (ug = this._renderer.getActiveMipmapLevel());
          let l = o || this._allocateTarget();
          return (
            (l.depthBuffer = !0),
            this._init(l),
            this._sceneToCubeUV(e, r, i, l, a),
            t > 0 && this._blur(l, 0, 0, t),
            this._applyPMREM(l),
            this._cleanup(l),
            l
          );
        }
        async fromSceneAsync(e, t = 0, r = 0.1, i = 100, s = {}) {
          return (
            !1 === this._hasInitialized && (await this._renderer.init()),
            this.fromScene(e, t, r, i, s)
          );
        }
        fromEquirectangular(e, t = null) {
          if (!1 === this._hasInitialized) {
            console.warn(
              "THREE.PMREMGenerator: .fromEquirectangular() called before the backend is initialized. Try using .fromEquirectangularAsync() instead."
            ),
              this._setSizeFromTexture(e);
            let r = t || this._allocateTarget();
            return this.fromEquirectangularAsync(e, r), r;
          }
          return this._fromTexture(e, t);
        }
        async fromEquirectangularAsync(e, t = null) {
          return (
            !1 === this._hasInitialized && (await this._renderer.init()),
            this._fromTexture(e, t)
          );
        }
        fromCubemap(e, t = null) {
          if (!1 === this._hasInitialized) {
            console.warn(
              "THREE.PMREMGenerator: .fromCubemap() called before the backend is initialized. Try using .fromCubemapAsync() instead."
            ),
              this._setSizeFromTexture(e);
            let r = t || this._allocateTarget();
            return this.fromCubemapAsync(e, t), r;
          }
          return this._fromTexture(e, t);
        }
        async fromCubemapAsync(e, t = null) {
          return (
            !1 === this._hasInitialized && (await this._renderer.init()),
            this._fromTexture(e, t)
          );
        }
        async compileCubemapShader() {
          null === this._cubemapMaterial &&
            ((this._cubemapMaterial = uE()),
            await this._compileMaterial(this._cubemapMaterial));
        }
        async compileEquirectangularShader() {
          null === this._equirectMaterial &&
            ((this._equirectMaterial = uw()),
            await this._compileMaterial(this._equirectMaterial));
        }
        dispose() {
          this._dispose(),
            null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
            null !== this._equirectMaterial && this._equirectMaterial.dispose(),
            null !== this._backgroundBox &&
              (this._backgroundBox.geometry.dispose(),
              this._backgroundBox.material.dispose());
        }
        _setSizeFromTexture(e) {
          e.mapping === u.hy7 || e.mapping === u.xFO
            ? this._setSize(
                0 === e.image.length
                  ? 16
                  : e.image[0].width || e.image[0].image.width
              )
            : this._setSize(e.image.width / 4);
        }
        _setSize(e) {
          (this._lodMax = Math.floor(Math.log2(e))),
            (this._cubeSize = Math.pow(2, this._lodMax));
        }
        _dispose() {
          null !== this._blurMaterial && this._blurMaterial.dispose(),
            null !== this._pingPongRenderTarget &&
              this._pingPongRenderTarget.dispose();
          for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose();
        }
        _cleanup(e) {
          this._renderer.setRenderTarget(uc, up, ug),
            (e.scissorTest = !1),
            uR(e, 0, 0, e.width, e.height);
        }
        _fromTexture(e, t) {
          this._setSizeFromTexture(e),
            (uc = this._renderer.getRenderTarget()),
            (up = this._renderer.getActiveCubeFace()),
            (ug = this._renderer.getActiveMipmapLevel());
          let r = t || this._allocateTarget();
          return (
            this._init(r),
            this._textureToCubeUV(e, r),
            this._applyPMREM(r),
            this._cleanup(r),
            r
          );
        }
        _allocateTarget() {
          return uS(3 * Math.max(this._cubeSize, 112), 4 * this._cubeSize);
        }
        _init(e) {
          if (
            null === this._pingPongRenderTarget ||
            this._pingPongRenderTarget.width !== e.width ||
            this._pingPongRenderTarget.height !== e.height
          ) {
            null !== this._pingPongRenderTarget && this._dispose(),
              (this._pingPongRenderTarget = uS(e.width, e.height));
            let { _lodMax: t } = this;
            ({
              sizeLods: this._sizeLods,
              lodPlanes: this._lodPlanes,
              sigmas: this._sigmas,
              lodMeshes: this._lodMeshes,
            } = (function (e) {
              let t = [],
                r = [],
                i = [],
                s = [],
                n = e,
                a = e - 4 + 1 + ul.length;
              for (let o = 0; o < a; o++) {
                let a = Math.pow(2, n);
                r.push(a);
                let l = 1 / a;
                o > e - 4 ? (l = ul[o - e + 4 - 1]) : 0 === o && (l = 0),
                  i.push(l);
                let d = 1 / (a - 2),
                  h = -d,
                  c = 1 + d,
                  p = [h, h, c, h, c, c, h, h, c, c, h, c],
                  g = new Float32Array(108),
                  m = new Float32Array(72),
                  f = new Float32Array(36);
                for (let e = 0; e < 6; e++) {
                  let t = ((e % 3) * 2) / 3 - 1,
                    r = e > 2 ? 0 : -1,
                    i = [
                      t,
                      r,
                      0,
                      t + 2 / 3,
                      r,
                      0,
                      t + 2 / 3,
                      r + 1,
                      0,
                      t,
                      r,
                      0,
                      t + 2 / 3,
                      r + 1,
                      0,
                      t,
                      r + 1,
                      0,
                    ],
                    s = uT[e];
                  g.set(i, 18 * s), m.set(p, 12 * s);
                  let n = [s, s, s, s, s, s];
                  f.set(n, 6 * s);
                }
                let y = new u.LoY();
                y.setAttribute("position", new u.THS(g, 3)),
                  y.setAttribute("uv", new u.THS(m, 2)),
                  y.setAttribute("faceIndex", new u.THS(f, 1)),
                  t.push(y),
                  s.push(new u.eaF(y, null)),
                  n > 4 && n--;
              }
              return { lodPlanes: t, sizeLods: r, sigmas: i, lodMeshes: s };
            })(t)),
              (this._blurMaterial = (function (e, t, r) {
                let i = sc(Array(20).fill(0)),
                  s = tL(new u.Pq0(0, 1, 0)),
                  n = tL(0),
                  a = eD(20),
                  o = tL(0),
                  l = tL(1),
                  d = sa(null),
                  h = tL(0),
                  c = eD(1 / t),
                  p = {
                    n: a,
                    latitudinal: o,
                    weights: i,
                    poleAxis: s,
                    outputDirection: uv,
                    dTheta: n,
                    samples: l,
                    envMap: d,
                    mipInt: h,
                    CUBEUV_TEXEL_WIDTH: c,
                    CUBEUV_TEXEL_HEIGHT: eD(1 / r),
                    CUBEUV_MAX_MIP: eD(e),
                  },
                  g = uA("blur");
                return (
                  (g.fragmentNode = uo({ ...p, latitudinal: o.equal(1) })),
                  ux.set(g, p),
                  g
                );
              })(t, e.width, e.height));
          }
        }
        async _compileMaterial(e) {
          let t = new u.eaF(this._lodPlanes[0], e);
          await this._renderer.compile(t, uu);
        }
        _sceneToCubeUV(e, t, r, i, s) {
          (ud.near = t), (ud.far = r);
          let n = [1, 1, 1, 1, -1, 1],
            a = [1, -1, 1, -1, 1, -1],
            o = this._renderer,
            l = o.autoClear;
          o.getClearColor(uh), (o.autoClear = !1);
          let d = this._backgroundBox;
          if (null === d) {
            let e = new u.V9B({
              name: "PMREM.Background",
              side: u.hsX,
              depthWrite: !1,
              depthTest: !1,
            });
            d = new u.eaF(new u.iNn(), e);
          }
          let h = !1,
            c = e.background;
          c
            ? c.isColor &&
              (d.material.color.copy(c), (e.background = null), (h = !0))
            : (d.material.color.copy(uh), (h = !0)),
            o.setRenderTarget(i),
            o.clear(),
            h && o.render(d, ud);
          for (let t = 0; t < 6; t++) {
            let r = t % 3;
            0 === r
              ? (ud.up.set(0, n[t], 0),
                ud.position.set(s.x, s.y, s.z),
                ud.lookAt(s.x + a[t], s.y, s.z))
              : 1 === r
              ? (ud.up.set(0, 0, n[t]),
                ud.position.set(s.x, s.y, s.z),
                ud.lookAt(s.x, s.y + a[t], s.z))
              : (ud.up.set(0, n[t], 0),
                ud.position.set(s.x, s.y, s.z),
                ud.lookAt(s.x, s.y, s.z + a[t]));
            let l = this._cubeSize;
            uR(i, r * l, t > 2 ? l : 0, l, l), o.render(e, ud);
          }
          (o.autoClear = l), (e.background = c);
        }
        _textureToCubeUV(e, t) {
          let r = this._renderer,
            i = e.mapping === u.hy7 || e.mapping === u.xFO;
          i
            ? null === this._cubemapMaterial && (this._cubemapMaterial = uE(e))
            : null === this._equirectMaterial &&
              (this._equirectMaterial = uw(e));
          let s = i ? this._cubemapMaterial : this._equirectMaterial;
          s.fragmentNode.value = e;
          let n = this._lodMeshes[0];
          n.material = s;
          let a = this._cubeSize;
          uR(t, 0, 0, 3 * a, 2 * a), r.setRenderTarget(t), r.render(n, uu);
        }
        _applyPMREM(e) {
          let t = this._renderer,
            r = t.autoClear;
          t.autoClear = !1;
          let i = this._lodPlanes.length;
          for (let t = 1; t < i; t++) {
            let r = Math.sqrt(
                this._sigmas[t] * this._sigmas[t] -
                  this._sigmas[t - 1] * this._sigmas[t - 1]
              ),
              s = uy[(i - t - 1) % uy.length];
            this._blur(e, t - 1, t, r, s);
          }
          t.autoClear = r;
        }
        _blur(e, t, r, i, s) {
          let n = this._pingPongRenderTarget;
          this._halfBlur(e, n, t, r, i, "latitudinal", s),
            this._halfBlur(n, e, r, r, i, "longitudinal", s);
        }
        _halfBlur(e, t, r, i, s, n, a) {
          let o = this._renderer,
            l = this._blurMaterial;
          "latitudinal" !== n &&
            "longitudinal" !== n &&
            console.error(
              "blur direction must be either latitudinal or longitudinal!"
            );
          let u = this._lodMeshes[i];
          u.material = l;
          let d = ux.get(l),
            h = this._sizeLods[r] - 1,
            c = isFinite(s) ? Math.PI / (2 * h) : (2 * Math.PI) / 39,
            p = s / c,
            g = isFinite(s) ? 1 + Math.floor(3 * p) : 20;
          g > 20 &&
            console.warn(
              `sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`
            );
          let m = [],
            f = 0;
          for (let e = 0; e < 20; ++e) {
            let t = e / p,
              r = Math.exp((-t * t) / 2);
            m.push(r), 0 === e ? (f += r) : e < g && (f += 2 * r);
          }
          for (let e = 0; e < m.length; e++) m[e] = m[e] / f;
          (e.texture.frame = (e.texture.frame || 0) + 1),
            (d.envMap.value = e.texture),
            (d.samples.value = g),
            (d.weights.array = m),
            (d.latitudinal.value = +("latitudinal" === n)),
            a && (d.poleAxis.value = a);
          let { _lodMax: y } = this;
          (d.dTheta.value = c), (d.mipInt.value = y - r);
          let b = this._sizeLods[i],
            x = 4 * (this._cubeSize - b);
          uR(t, 3 * b * (i > y - 4 ? i - y + 4 : 0), x, 3 * b, 2 * b),
            o.setRenderTarget(t),
            o.render(u, uu);
        }
      }
      function uS(e, t) {
        let r = {
            magFilter: u.k6q,
            minFilter: u.k6q,
            generateMipmaps: !1,
            type: u.ix0,
            format: u.GWd,
            colorSpace: u.Zr2,
          },
          i = new u.O0B(e, t, r);
        return (
          (i.texture.mapping = u.Om),
          (i.texture.name = "PMREM.cubeUv"),
          (i.texture.isPMREMTexture = !0),
          (i.scissorTest = !0),
          i
        );
      }
      function uR(e, t, r, i, s) {
        e.viewport.set(t, r, i, s), e.scissor.set(t, r, i, s);
      }
      function uA(e) {
        let t = new oO();
        return (
          (t.depthTest = !1),
          (t.depthWrite = !1),
          (t.blending = u.XIg),
          (t.name = `PMREM_${e}`),
          t
        );
      }
      function uE(e) {
        let t = uA("cubemap");
        return (t.fragmentNode = ny(e, uv)), t;
      }
      function uw(e) {
        let t = uA("equirect");
        return (t.fragmentNode = sa(e, oQ(uv), 0)), t;
      }
      let uC = new WeakMap();
      class uM extends G {
        static get type() {
          return "PMREMNode";
        }
        constructor(e, t = null, r = null) {
          super("vec3"),
            (this._value = e),
            (this._pmrem = null),
            (this.uvNode = t),
            (this.levelNode = r),
            (this._generator = null);
          let i = new u.gPd();
          (i.isRenderTargetTexture = !0),
            (this._texture = sa(i)),
            (this._width = tL(0)),
            (this._height = tL(0)),
            (this._maxMip = tL(0)),
            (this.updateBeforeType = C.RENDER);
        }
        set value(e) {
          (this._value = e), (this._pmrem = null);
        }
        get value() {
          return this._value;
        }
        updateFromTexture(e) {
          let t = (function (e) {
            let t = Math.log2(e) - 2;
            return {
              texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
              texelHeight: 1 / e,
              maxMip: t,
            };
          })(e.image.height);
          (this._texture.value = e),
            (this._width.value = t.texelWidth),
            (this._height.value = t.texelHeight),
            (this._maxMip.value = t.maxMip);
        }
        updateBefore(e) {
          let t = this._pmrem,
            r = t ? t.pmremVersion : -1,
            i = this._value;
          r !== i.pmremVersion &&
            null !==
              (t =
                !0 === i.isPMREMTexture
                  ? i
                  : (function (e, t, r) {
                      var i, s;
                      let n,
                        a =
                          ((i = t),
                          void 0 === (n = uC.get(i)) &&
                            ((n = new WeakMap()), uC.set(i, n)),
                          n),
                        o = a.get(e);
                      if (
                        (void 0 !== o ? o.pmremVersion : -1) !== e.pmremVersion
                      ) {
                        let t = e.image;
                        if (e.isCubeTexture)
                          if (
                            !(function (e) {
                              if (null == e) return !1;
                              let t = 0;
                              for (let r = 0; r < 6; r++)
                                void 0 !== e[r] && t++;
                              return 6 === t;
                            })(t)
                          )
                            return null;
                          else o = r.fromCubemap(e, o);
                        else {
                          if (!(null != (s = t) && s.height > 0)) return null;
                          o = r.fromEquirectangular(e, o);
                        }
                        (o.pmremVersion = e.pmremVersion), a.set(e, o);
                      }
                      return o.texture;
                    })(i, e.renderer, this._generator)) &&
            ((this._pmrem = t), this.updateFromTexture(t));
        }
        setup(e) {
          null === this._generator && (this._generator = new uN(e.renderer)),
            this.updateBefore(e);
          let t = this.uvNode;
          null === t && e.context.getUV && (t = e.context.getUV(this)),
            (t = nu.mul(eH(t.x, t.y.negate(), t.z)));
          let r = this.levelNode;
          return (
            null === r &&
              e.context.getTextureLevel &&
              (r = e.context.getTextureLevel(this)),
            us(this._texture, t, r, this._width, this._height, this._maxMip)
          );
        }
        dispose() {
          super.dispose(),
            null !== this._generator && this._generator.dispose();
        }
      }
      let uB = eE(uM).setParameterLength(1, 3),
        uL = new WeakMap();
      class uF extends a8 {
        static get type() {
          return "EnvironmentNode";
        }
        constructor(e = null) {
          super(), (this.envNode = e);
        }
        setup(e) {
          let { material: t } = e,
            r = this.envNode;
          if (r.isTextureNode || r.isMaterialReferenceNode) {
            let e = r.isTextureNode ? r.value : t[r.property],
              i = uL.get(e);
            void 0 === i && ((i = uB(e)), uL.set(e, i)), (r = i);
          }
          let i = !0 === t.useAnisotropy || t.anisotropy > 0 ? nX : s5,
            s = r.context(uP(e7, i)).mul(nl),
            n = r.context(uI(s9)).mul(Math.PI).mul(nl),
            a = ij(s),
            o = ij(n);
          e.context.radiance.addAssign(a), e.context.iblIrradiance.addAssign(o);
          let l = e.context.lightingModel.clearcoatRadiance;
          if (l) {
            let e = ij(r.context(uP(tr, s7)).mul(nl));
            l.addAssign(e);
          }
        }
      }
      let uP = (e, t) => {
          let r = null;
          return {
            getUV: () => (
              null === r &&
                ((r = sY.negate().reflect(t)),
                (r = (r = e.mul(e).mix(r, t).normalize()).transformDirection(
                  sT
                ))),
              r
            ),
            getTextureLevel: () => e,
          };
        },
        uI = (e) => ({ getUV: () => e, getTextureLevel: () => eD(1) }),
        uU = new u._4j();
      class uD extends oO {
        static get type() {
          return "MeshStandardNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshStandardNodeMaterial = !0),
            (this.lights = !0),
            (this.emissiveNode = null),
            (this.metalnessNode = null),
            (this.roughnessNode = null),
            this.setDefaultValues(uU),
            this.setValues(e);
        }
        setupEnvironment(e) {
          let t = super.setupEnvironment(e);
          return (
            null === t && e.environmentNode && (t = e.environmentNode),
            t ? new uF(t) : null
          );
        }
        setupLightingModel() {
          return new lY();
        }
        setupSpecular() {
          let e = r6(eH(0.04), e5.rgb, te);
          tc.assign(e), tp.assign(1);
        }
        setupVariants() {
          let e = this.metalnessNode ? eD(this.metalnessNode) : as;
          te.assign(e);
          let t = this.roughnessNode ? eD(this.roughnessNode) : ai;
          (t = lu({ roughness: t })),
            e7.assign(t),
            this.setupSpecular(),
            e5.assign(eK(e5.rgb.mul(e.oneMinus()), e5.a));
        }
        copy(e) {
          return (
            (this.emissiveNode = e.emissiveNode),
            (this.metalnessNode = e.metalnessNode),
            (this.roughnessNode = e.roughnessNode),
            super.copy(e)
          );
        }
      }
      let uV = new u.uSd();
      class uO extends uD {
        static get type() {
          return "MeshPhysicalNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshPhysicalNodeMaterial = !0),
            (this.clearcoatNode = null),
            (this.clearcoatRoughnessNode = null),
            (this.clearcoatNormalNode = null),
            (this.sheenNode = null),
            (this.sheenRoughnessNode = null),
            (this.iridescenceNode = null),
            (this.iridescenceIORNode = null),
            (this.iridescenceThicknessNode = null),
            (this.specularIntensityNode = null),
            (this.specularColorNode = null),
            (this.iorNode = null),
            (this.transmissionNode = null),
            (this.thicknessNode = null),
            (this.attenuationDistanceNode = null),
            (this.attenuationColorNode = null),
            (this.dispersionNode = null),
            (this.anisotropyNode = null),
            this.setDefaultValues(uV),
            this.setValues(e);
        }
        get useClearcoat() {
          return this.clearcoat > 0 || null !== this.clearcoatNode;
        }
        get useIridescence() {
          return this.iridescence > 0 || null !== this.iridescenceNode;
        }
        get useSheen() {
          return this.sheen > 0 || null !== this.sheenNode;
        }
        get useAnisotropy() {
          return this.anisotropy > 0 || null !== this.anisotropyNode;
        }
        get useTransmission() {
          return this.transmission > 0 || null !== this.transmissionNode;
        }
        get useDispersion() {
          return this.dispersion > 0 || null !== this.dispersionNode;
        }
        setupSpecular() {
          let e = this.iorNode ? eD(this.iorNode) : ab;
          tx.assign(e),
            tc.assign(
              r6(
                rW(rJ(tx.sub(1).div(tx.add(1))).mul(ae), eH(1)).mul(n7),
                e5.rgb,
                te
              )
            ),
            tp.assign(r6(n7, 1, te));
        }
        setupLightingModel() {
          return new lY(
            this.useClearcoat,
            this.useSheen,
            this.useIridescence,
            this.useAnisotropy,
            this.useTransmission,
            this.useDispersion
          );
        }
        setupVariants(e) {
          if ((super.setupVariants(e), this.useClearcoat)) {
            let e = this.clearcoatNode ? eD(this.clearcoatNode) : aa,
              t = this.clearcoatRoughnessNode
                ? eD(this.clearcoatRoughnessNode)
                : ao;
            tt.assign(e), tr.assign(lu({ roughness: t }));
          }
          if (this.useSheen) {
            let e = this.sheenNode ? eH(this.sheenNode) : ad,
              t = this.sheenRoughnessNode ? eD(this.sheenRoughnessNode) : ah;
            ti.assign(e), ts.assign(t);
          }
          if (this.useIridescence) {
            let e = this.iridescenceNode ? eD(this.iridescenceNode) : ap,
              t = this.iridescenceIORNode ? eD(this.iridescenceIORNode) : ag,
              r = this.iridescenceThicknessNode
                ? eD(this.iridescenceThicknessNode)
                : am;
            tn.assign(e), ta.assign(t), to.assign(r);
          }
          if (this.useAnisotropy) {
            let e = (
              this.anisotropyNode ? ek(this.anisotropyNode) : ac
            ).toVar();
            tu.assign(e.length()),
              eP(tu.equal(0), () => {
                e.assign(ek(1, 0));
              }).Else(() => {
                e.divAssign(ek(tu)), tu.assign(tu.saturate());
              }),
              tl.assign(tu.pow2().mix(e7.pow2(), 1)),
              td.assign(nq[0].mul(e.x).add(nq[1].mul(e.y))),
              th.assign(nq[1].mul(e.x).sub(nq[0].mul(e.y)));
          }
          if (this.useTransmission) {
            let e = this.transmissionNode ? eD(this.transmissionNode) : af,
              t = this.thicknessNode ? eD(this.thicknessNode) : ay,
              r = this.attenuationDistanceNode
                ? eD(this.attenuationDistanceNode)
                : ax,
              i = this.attenuationColorNode
                ? eH(this.attenuationColorNode)
                : aT;
            if (
              (tT.assign(e),
              t_.assign(t),
              tv.assign(r),
              tN.assign(i),
              this.useDispersion)
            ) {
              let e = this.dispersionNode ? eD(this.dispersionNode) : aE;
              tS.assign(e);
            }
          }
        }
        setupClearcoatNormal() {
          return this.clearcoatNormalNode ? eH(this.clearcoatNormalNode) : al;
        }
        setup(e) {
          (e.context.setupClearcoatNormal = () =>
            i_(this.setupClearcoatNormal(e), "NORMAL", "vec3")),
            super.setup(e);
        }
        copy(e) {
          return (
            (this.clearcoatNode = e.clearcoatNode),
            (this.clearcoatRoughnessNode = e.clearcoatRoughnessNode),
            (this.clearcoatNormalNode = e.clearcoatNormalNode),
            (this.sheenNode = e.sheenNode),
            (this.sheenRoughnessNode = e.sheenRoughnessNode),
            (this.iridescenceNode = e.iridescenceNode),
            (this.iridescenceIORNode = e.iridescenceIORNode),
            (this.iridescenceThicknessNode = e.iridescenceThicknessNode),
            (this.specularIntensityNode = e.specularIntensityNode),
            (this.specularColorNode = e.specularColorNode),
            (this.transmissionNode = e.transmissionNode),
            (this.thicknessNode = e.thicknessNode),
            (this.attenuationDistanceNode = e.attenuationDistanceNode),
            (this.attenuationColorNode = e.attenuationColorNode),
            (this.dispersionNode = e.dispersionNode),
            (this.anisotropyNode = e.anisotropyNode),
            super.copy(e)
          );
        }
      }
      let uG = eB(({ normal: e, lightDirection: t, builder: r }) => {
        let i = ek(e.dot(t).mul(0.5).add(0.5), 0);
        if (r.material.gradientMap)
          return eH(nN("gradientMap", "texture").context({ getUV: () => i }).r);
        {
          let e = i.fwidth().mul(0.5);
          return r6(
            eH(0.7),
            eH(1),
            r7(eD(0.7).sub(e.x), eD(0.7).add(e.x), i.x)
          );
        }
      });
      class uk extends o6 {
        direct({ lightDirection: e, lightColor: t, reflectedLight: r }, i) {
          let s = uG({ normal: s2, lightDirection: e, builder: i }).mul(t);
          r.directDiffuse.addAssign(s.mul(le({ diffuseColor: e5.rgb })));
        }
        indirect(e) {
          let {
            ambientOcclusion: t,
            irradiance: r,
            reflectedLight: i,
          } = e.context;
          i.indirectDiffuse.addAssign(r.mul(le({ diffuseColor: e5 }))),
            i.indirectDiffuse.mulAssign(t);
        }
      }
      let uz = new u.Df();
      class u$ extends oO {
        static get type() {
          return "MeshToonNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshToonNodeMaterial = !0),
            (this.lights = !0),
            this.setDefaultValues(uz),
            this.setValues(e);
        }
        setupLightingModel() {
          return new uk();
        }
      }
      let uW = eB(() => {
          let e = eH(sY.z, 0, sY.x.negate()).normalize(),
            t = sY.cross(e);
          return ek(e.dot(s5), t.dot(s5)).mul(0.495).add(0.5);
        })
          .once(["NORMAL", "VERTEX"])()
          .toVar("matcapUV"),
        uH = new u.FNr();
      class uq extends oO {
        static get type() {
          return "MeshMatcapNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isMeshMatcapNodeMaterial = !0),
            this.setDefaultValues(uH),
            this.setValues(e);
        }
        setupVariants(e) {
          let t;
          (t = e.material.matcap
            ? nN("matcap", "texture").context({ getUV: () => uW })
            : eH(r6(0.2, 0.8, uW.y))),
            e5.rgb.mulAssign(t.rgb);
        }
      }
      class uj extends G {
        static get type() {
          return "RotateNode";
        }
        constructor(e, t) {
          super(), (this.positionNode = e), (this.rotationNode = t);
        }
        getNodeType(e) {
          return this.positionNode.getNodeType(e);
        }
        setup(e) {
          let { rotationNode: t, positionNode: r } = this;
          if ("vec2" === this.getNodeType(e)) {
            let e = t.cos(),
              i = t.sin();
            return eJ(e, i, i.negate(), e).mul(r);
          }
          {
            let e = e1(
                eK(1, 0, 0, 0),
                eK(0, rN(t.x), rv(t.x).negate(), 0),
                eK(0, rv(t.x), rN(t.x), 0),
                eK(0, 0, 0, 1)
              ),
              i = e1(
                eK(rN(t.y), 0, rv(t.y), 0),
                eK(0, 1, 0, 0),
                eK(rv(t.y).negate(), 0, rN(t.y), 0),
                eK(0, 0, 0, 1)
              ),
              s = e1(
                eK(rN(t.z), rv(t.z).negate(), 0, 0),
                eK(rv(t.z), rN(t.z), 0, 0),
                eK(0, 0, 1, 0),
                eK(0, 0, 0, 1)
              );
            return e.mul(i).mul(s).mul(eK(r, 1)).xyz;
          }
        }
      }
      let uX = eE(uj).setParameterLength(2),
        uK = new u.RoJ();
      class uQ extends oO {
        static get type() {
          return "SpriteNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isSpriteNodeMaterial = !0),
            (this._useSizeAttenuation = !0),
            (this.positionNode = null),
            (this.rotationNode = null),
            (this.scaleNode = null),
            (this.transparent = !0),
            this.setDefaultValues(uK),
            this.setValues(e);
        }
        setupPositionView(e) {
          let { object: t, camera: r } = e,
            i = this.sizeAttenuation,
            { positionNode: s, rotationNode: n, scaleNode: a } = this,
            o = sk.mul(eH(s || 0)),
            l = ek(sP[0].xyz.length(), sP[1].xyz.length());
          if ((null !== a && (l = l.mul(ek(a))), !1 === i))
            if (r.isPerspectiveCamera) l = l.mul(o.z.negate());
            else {
              let e = eD(2).div(sb.element(1).element(1));
              l = l.mul(e.mul(2));
            }
          let u = sH.xy;
          if (t.center && !0 === t.center.isVector2) {
            let e = eN(new iL("center", "vec2", t));
            u = u.sub(e.sub(0.5));
          }
          let d = uX((u = u.mul(l)), eD(n || au));
          return eK(o.xy.add(d), o.zw);
        }
        copy(e) {
          return (
            (this.positionNode = e.positionNode),
            (this.rotationNode = e.rotationNode),
            (this.scaleNode = e.scaleNode),
            super.copy(e)
          );
        }
        get sizeAttenuation() {
          return this._useSizeAttenuation;
        }
        set sizeAttenuation(e) {
          this._useSizeAttenuation !== e &&
            ((this._useSizeAttenuation = e), (this.needsUpdate = !0));
        }
      }
      let uY = new u.BH$();
      class uZ extends uQ {
        static get type() {
          return "PointsNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.sizeNode = null),
            (this.isPointsNodeMaterial = !0),
            this.setDefaultValues(uY),
            this.setValues(e);
        }
        setupPositionView() {
          let { positionNode: e } = this;
          return sk.mul(eH(e || sq)).xyz;
        }
        setupVertex(e) {
          let t = super.setupVertex(e);
          if (!0 !== e.material.isNodeMaterial) return t;
          let { rotationNode: r, scaleNode: i, sizeNode: s } = this,
            n = sH.xy.toVar(),
            a = on.z.div(on.w);
          if (r && r.isNode) {
            let e = eD(r);
            n.assign(uX(n, e));
          }
          let o = null !== s ? ek(s) : aA;
          return (
            !0 === this.sizeAttenuation && (o = o.mul(o.div(sQ.z.negate()))),
            i && i.isNode && (o = o.mul(ek(i))),
            n.mulAssign(o.mul(2)),
            n.assign(n.div(on.z)),
            n.y.assign(n.y.mul(a)),
            n.assign(n.mul(t.w)),
            t.addAssign(eK(n, 0, 0)),
            t
          );
        }
        get alphaToCoverage() {
          return this._useAlphaToCoverage;
        }
        set alphaToCoverage(e) {
          this._useAlphaToCoverage !== e &&
            ((this._useAlphaToCoverage = e), (this.needsUpdate = !0));
        }
      }
      class uJ extends o6 {
        constructor() {
          super(), (this.shadowNode = eD(1).toVar("shadowMask"));
        }
        direct({ lightNode: e }) {
          null !== e.shadowNode && this.shadowNode.mulAssign(e.shadowNode);
        }
        finish({ context: e }) {
          e5.a.mulAssign(this.shadowNode.oneMinus()),
            e.outgoingLight.rgb.assign(e5.rgb);
        }
      }
      let u0 = new u.q2();
      class u1 extends oO {
        static get type() {
          return "ShadowNodeMaterial";
        }
        constructor(e) {
          super(),
            (this.isShadowNodeMaterial = !0),
            (this.lights = !0),
            (this.transparent = !0),
            this.setDefaultValues(u0),
            this.setValues(e);
        }
        setupLightingModel() {
          return new uJ();
        }
      }
      e6("vec3"), e6("vec3"), e6("vec3");
      class u2 {
        constructor(e, t) {
          (this.nodes = e),
            (this.info = t),
            (this._context = "undefined" != typeof self ? self : null),
            (this._animationLoop = null),
            (this._requestId = null);
        }
        start() {
          let e = (t, r) => {
            (this._requestId = this._context.requestAnimationFrame(e)),
              !0 === this.info.autoReset && this.info.reset(),
              this.nodes.nodeFrame.update(),
              (this.info.frame = this.nodes.nodeFrame.frameId),
              null !== this._animationLoop && this._animationLoop(t, r);
          };
          e();
        }
        stop() {
          this._context.cancelAnimationFrame(this._requestId),
            (this._requestId = null);
        }
        getAnimationLoop() {
          return this._animationLoop;
        }
        setAnimationLoop(e) {
          this._animationLoop = e;
        }
        getContext() {
          return this._context;
        }
        setContext(e) {
          this._context = e;
        }
        dispose() {
          this.stop();
        }
      }
      class u3 {
        constructor() {
          this.weakMap = new WeakMap();
        }
        get(e) {
          let t = this.weakMap;
          for (let r = 0; r < e.length - 1; r++)
            if (void 0 === (t = t.get(e[r]))) return;
          return t.get(e[e.length - 1]);
        }
        set(e, t) {
          let r = this.weakMap;
          for (let t = 0; t < e.length - 1; t++) {
            let i = e[t];
            !1 === r.has(i) && r.set(i, new WeakMap()), (r = r.get(i));
          }
          return r.set(e[e.length - 1], t), this;
        }
        delete(e) {
          let t = this.weakMap;
          for (let r = 0; r < e.length - 1; r++)
            if (void 0 === (t = t.get(e[r]))) return !1;
          return t.delete(e[e.length - 1]);
        }
      }
      let u4 = 0;
      class u6 {
        constructor(e, t, r, i, s, n, a, o, l, u) {
          (this.id = u4++),
            (this._nodes = e),
            (this._geometries = t),
            (this.renderer = r),
            (this.object = i),
            (this.material = s),
            (this.scene = n),
            (this.camera = a),
            (this.lightsNode = o),
            (this.context = l),
            (this.geometry = i.geometry),
            (this.version = s.version),
            (this.drawRange = null),
            (this.attributes = null),
            (this.attributesId = null),
            (this.pipeline = null),
            (this.group = null),
            (this.vertexBuffers = null),
            (this.drawParams = null),
            (this.bundle = null),
            (this.clippingContext = u),
            (this.clippingContextCacheKey = null !== u ? u.cacheKey : ""),
            (this.initialNodesCacheKey = this.getDynamicCacheKey()),
            (this.initialCacheKey = this.getCacheKey()),
            (this._nodeBuilderState = null),
            (this._bindings = null),
            (this._monitor = null),
            (this.onDispose = null),
            (this.isRenderObject = !0),
            (this.onMaterialDispose = () => {
              this.dispose();
            }),
            (this.onGeometryDispose = () => {
              (this.attributes = null), (this.attributesId = null);
            }),
            this.material.addEventListener("dispose", this.onMaterialDispose),
            this.geometry.addEventListener("dispose", this.onGeometryDispose);
        }
        updateClipping(e) {
          this.clippingContext = e;
        }
        get clippingNeedsUpdate() {
          return (
            null !== this.clippingContext &&
            this.clippingContext.cacheKey !== this.clippingContextCacheKey &&
            ((this.clippingContextCacheKey = this.clippingContext.cacheKey), !0)
          );
        }
        get hardwareClippingPlanes() {
          return !0 === this.material.hardwareClipping
            ? this.clippingContext.unionClippingCount
            : 0;
        }
        getNodeBuilderState() {
          return (
            this._nodeBuilderState ||
            (this._nodeBuilderState = this._nodes.getForRender(this))
          );
        }
        getMonitor() {
          return (
            this._monitor ||
            (this._monitor = this.getNodeBuilderState().observer)
          );
        }
        getBindings() {
          return (
            this._bindings ||
            (this._bindings = this.getNodeBuilderState().createBindings())
          );
        }
        getBindingGroup(e) {
          for (let t of this.getBindings()) if (t.name === e) return t;
        }
        getIndex() {
          return this._geometries.getIndex(this);
        }
        getIndirect() {
          return this._geometries.getIndirect(this);
        }
        getChainArray() {
          return [this.object, this.material, this.context, this.lightsNode];
        }
        setGeometry(e) {
          (this.geometry = e),
            (this.attributes = null),
            (this.attributesId = null);
        }
        getAttributes() {
          if (null !== this.attributes) return this.attributes;
          let e = this.getNodeBuilderState().nodeAttributes,
            t = this.geometry,
            r = [],
            i = new Set(),
            s = {};
          for (let n of e) {
            let e;
            if (
              (n.node && n.node.attribute
                ? (e = n.node.attribute)
                : ((e = t.getAttribute(n.name)), (s[n.name] = e.version)),
              void 0 === e)
            )
              continue;
            r.push(e);
            let a = e.isInterleavedBufferAttribute ? e.data : e;
            i.add(a);
          }
          return (
            (this.attributes = r),
            (this.attributesId = s),
            (this.vertexBuffers = Array.from(i.values())),
            r
          );
        }
        getVertexBuffers() {
          return (
            null === this.vertexBuffers && this.getAttributes(),
            this.vertexBuffers
          );
        }
        getDrawParameters() {
          let {
              object: e,
              material: t,
              geometry: r,
              group: i,
              drawRange: s,
            } = this,
            n =
              this.drawParams ||
              (this.drawParams = {
                vertexCount: 0,
                firstVertex: 0,
                instanceCount: 0,
                firstInstance: 0,
              }),
            a = this.getIndex(),
            o = null !== a,
            l = 1;
          if (
            (!0 === r.isInstancedBufferGeometry
              ? (l = r.instanceCount)
              : void 0 !== e.count && (l = Math.max(0, e.count)),
            0 === l)
          )
            return null;
          if (((n.instanceCount = l), !0 === e.isBatchedMesh)) return n;
          let u = 1;
          !0 !== t.wireframe ||
            e.isPoints ||
            e.isLineSegments ||
            e.isLine ||
            e.isLineLoop ||
            (u = 2);
          let d = s.start * u,
            h = (s.start + s.count) * u;
          null !== i &&
            ((d = Math.max(d, i.start * u)),
            (h = Math.min(h, (i.start + i.count) * u)));
          let c = r.attributes.position,
            p = 1 / 0;
          o ? (p = a.count) : null != c && (p = c.count), (d = Math.max(d, 0));
          let g = (h = Math.min(h, p)) - d;
          return g < 0 || g === 1 / 0
            ? null
            : ((n.vertexCount = g), (n.firstVertex = d), n);
        }
        getGeometryCacheKey() {
          let { geometry: e } = this,
            t = "";
          for (let r of Object.keys(e.attributes).sort()) {
            let i = e.attributes[r];
            (t += r + ","),
              i.data && (t += i.data.stride + ","),
              i.offset && (t += i.offset + ","),
              i.itemSize && (t += i.itemSize + ","),
              i.normalized && (t += "n,");
          }
          for (let r of Object.keys(e.morphAttributes).sort()) {
            let i = e.morphAttributes[r];
            t += "morph-" + r + ",";
            for (let e = 0, r = i.length; e < r; e++) t += i[e].id + ",";
          }
          return e.index && (t += "index,"), t;
        }
        getMaterialCacheKey() {
          let { object: e, material: t } = this,
            r = t.customProgramCacheKey();
          for (let e of (function (e) {
            let t = Object.keys(e),
              r = Object.getPrototypeOf(e);
            for (; r; ) {
              let e = Object.getOwnPropertyDescriptors(r);
              for (let r in e)
                if (void 0 !== e[r]) {
                  let i = e[r];
                  i && "function" == typeof i.get && t.push(r);
                }
              r = Object.getPrototypeOf(r);
            }
            return t;
          })(t)) {
            let i;
            if (
              /^(is[A-Z]|_)|^(visible|version|uuid|name|opacity|userData)$/.test(
                e
              )
            )
              continue;
            let s = t[e];
            if (null !== s) {
              let e = typeof s;
              "number" === e
                ? (i = 0 !== s ? "1" : "0")
                : "object" === e
                ? ((i = "{"), s.isTexture && (i += s.mapping), (i += "}"))
                : (i = String(s));
            } else i = String(s);
            r += i + ",";
          }
          return (
            (r += this.clippingContextCacheKey + ","),
            e.geometry && (r += this.getGeometryCacheKey()),
            e.skeleton && (r += e.skeleton.bones.length + ","),
            e.isBatchedMesh &&
              ((r += e._matricesTexture.uuid + ","),
              null !== e._colorsTexture && (r += e._colorsTexture.uuid + ",")),
            e.count > 1 && (r += e.uuid + ","),
            g((r += e.receiveShadow + ","))
          );
        }
        get needsGeometryUpdate() {
          if (this.geometry.id !== this.object.geometry.id) return !0;
          if (null !== this.attributes) {
            let e = this.attributesId;
            for (let t in e) {
              let r = this.geometry.getAttribute(t);
              if (void 0 === r || e[t] !== r.id) return !0;
            }
          }
          return !1;
        }
        get needsUpdate() {
          return (
            this.initialNodesCacheKey !== this.getDynamicCacheKey() ||
            this.clippingNeedsUpdate
          );
        }
        getDynamicCacheKey() {
          let e = 0;
          return (
            !0 !== this.material.isShadowPassMaterial &&
              (e = this._nodes.getCacheKey(this.scene, this.lightsNode)),
            this.camera.isArrayCamera && (e = f(e, this.camera.cameras.length)),
            this.object.receiveShadow && (e = f(e, 1)),
            e
          );
        }
        getCacheKey() {
          return this.getMaterialCacheKey() + this.getDynamicCacheKey();
        }
        dispose() {
          this.material.removeEventListener("dispose", this.onMaterialDispose),
            this.geometry.removeEventListener(
              "dispose",
              this.onGeometryDispose
            ),
            this.onDispose();
        }
      }
      let u8 = [];
      class u5 {
        constructor(e, t, r, i, s, n) {
          (this.renderer = e),
            (this.nodes = t),
            (this.geometries = r),
            (this.pipelines = i),
            (this.bindings = s),
            (this.info = n),
            (this.chainMaps = {});
        }
        get(e, t, r, i, s, n, a, o) {
          let l = this.getChainMap(o);
          (u8[0] = e), (u8[1] = t), (u8[2] = n), (u8[3] = s);
          let u = l.get(u8);
          return (
            void 0 === u
              ? ((u = this.createRenderObject(
                  this.nodes,
                  this.geometries,
                  this.renderer,
                  e,
                  t,
                  r,
                  i,
                  s,
                  n,
                  a,
                  o
                )),
                l.set(u8, u))
              : (u.updateClipping(a),
                u.needsGeometryUpdate && u.setGeometry(e.geometry),
                (u.version !== t.version || u.needsUpdate) &&
                  (u.initialCacheKey !== u.getCacheKey()
                    ? (u.dispose(), (u = this.get(e, t, r, i, s, n, a, o)))
                    : (u.version = t.version))),
            (u8.length = 0),
            u
          );
        }
        getChainMap(e = "default") {
          return this.chainMaps[e] || (this.chainMaps[e] = new u3());
        }
        dispose() {
          this.chainMaps = {};
        }
        createRenderObject(e, t, r, i, s, n, a, o, l, u, d) {
          let h = this.getChainMap(d),
            c = new u6(e, t, r, i, s, n, a, o, l, u);
          return (
            (c.onDispose = () => {
              this.pipelines.delete(c),
                this.bindings.delete(c),
                this.nodes.delete(c),
                h.delete(c.getChainArray());
            }),
            c
          );
        }
      }
      class u9 {
        constructor() {
          this.data = new WeakMap();
        }
        get(e) {
          let t = this.data.get(e);
          return void 0 === t && ((t = {}), this.data.set(e, t)), t;
        }
        delete(e) {
          let t = null;
          return (
            this.data.has(e) && ((t = this.data.get(e)), this.data.delete(e)), t
          );
        }
        has(e) {
          return this.data.has(e);
        }
        dispose() {
          this.data = new WeakMap();
        }
      }
      let u7 = { VERTEX: 1, INDEX: 2, STORAGE: 3, INDIRECT: 4 };
      class de extends u9 {
        constructor(e) {
          super(), (this.backend = e);
        }
        delete(e) {
          let t = super.delete(e);
          return null !== t && this.backend.destroyAttribute(e), t;
        }
        update(e, t) {
          let r = this.get(e);
          if (void 0 === r.version)
            t === u7.VERTEX
              ? this.backend.createAttribute(e)
              : t === u7.INDEX
              ? this.backend.createIndexAttribute(e)
              : t === u7.STORAGE
              ? this.backend.createStorageAttribute(e)
              : t === u7.INDIRECT &&
                this.backend.createIndirectStorageAttribute(e),
              (r.version = this._getBufferAttribute(e).version);
          else {
            let t = this._getBufferAttribute(e);
            (r.version < t.version || t.usage === u.Vnu) &&
              (this.backend.updateAttribute(e), (r.version = t.version));
          }
        }
        _getBufferAttribute(e) {
          return e.isInterleavedBufferAttribute && (e = e.data), e;
        }
      }
      function dt(e) {
        return null !== e.index
          ? e.index.version
          : e.attributes.position.version;
      }
      function dr(e) {
        let t = [],
          r = e.index,
          i = e.attributes.position;
        if (null !== r) {
          let e = r.array;
          for (let r = 0, i = e.length; r < i; r += 3) {
            let i = e[r + 0],
              s = e[r + 1],
              n = e[r + 2];
            t.push(i, s, s, n, n, i);
          }
        } else {
          let e = i.array;
          for (let r = 0, i = e.length / 3 - 1; r < i; r += 3) {
            let e = r + 0,
              i = r + 1,
              s = r + 2;
            t.push(e, i, i, s, s, e);
          }
        }
        let s = new ((0, u.AQS)(t) ? u.MW4 : u.A$4)(t, 1);
        return (s.version = dt(e)), s;
      }
      class di extends u9 {
        constructor(e, t) {
          super(),
            (this.attributes = e),
            (this.info = t),
            (this.wireframes = new WeakMap()),
            (this.attributeCall = new WeakMap());
        }
        has(e) {
          let t = e.geometry;
          return super.has(t) && !0 === this.get(t).initialized;
        }
        updateForRender(e) {
          !1 === this.has(e) && this.initGeometry(e), this.updateAttributes(e);
        }
        initGeometry(e) {
          let t = e.geometry;
          (this.get(t).initialized = !0), this.info.memory.geometries++;
          let r = () => {
            this.info.memory.geometries--;
            let i = t.index,
              s = e.getAttributes();
            for (let e of (null !== i && this.attributes.delete(i), s))
              this.attributes.delete(e);
            let n = this.wireframes.get(t);
            void 0 !== n && this.attributes.delete(n),
              t.removeEventListener("dispose", r);
          };
          t.addEventListener("dispose", r);
        }
        updateAttributes(e) {
          for (let t of e.getAttributes())
            t.isStorageBufferAttribute || t.isStorageInstancedBufferAttribute
              ? this.updateAttribute(t, u7.STORAGE)
              : this.updateAttribute(t, u7.VERTEX);
          let t = this.getIndex(e);
          null !== t && this.updateAttribute(t, u7.INDEX);
          let r = e.geometry.indirect;
          null !== r && this.updateAttribute(r, u7.INDIRECT);
        }
        updateAttribute(e, t) {
          let r = this.info.render.calls;
          e.isInterleavedBufferAttribute
            ? void 0 === this.attributeCall.get(e)
              ? (this.attributes.update(e, t), this.attributeCall.set(e, r))
              : this.attributeCall.get(e.data) !== r &&
                (this.attributes.update(e, t),
                this.attributeCall.set(e.data, r),
                this.attributeCall.set(e, r))
            : this.attributeCall.get(e) !== r &&
              (this.attributes.update(e, t), this.attributeCall.set(e, r));
        }
        getIndirect(e) {
          return e.geometry.indirect;
        }
        getIndex(e) {
          let { geometry: t, material: r } = e,
            i = t.index;
          if (!0 === r.wireframe) {
            let e = this.wireframes,
              r = e.get(t);
            void 0 === r
              ? ((r = dr(t)), e.set(t, r))
              : r.version !== dt(t) &&
                (this.attributes.delete(r), (r = dr(t)), e.set(t, r)),
              (i = r);
          }
          return i;
        }
      }
      class ds {
        constructor() {
          (this.autoReset = !0),
            (this.frame = 0),
            (this.calls = 0),
            (this.render = {
              calls: 0,
              frameCalls: 0,
              drawCalls: 0,
              triangles: 0,
              points: 0,
              lines: 0,
              timestamp: 0,
            }),
            (this.compute = { calls: 0, frameCalls: 0, timestamp: 0 }),
            (this.memory = { geometries: 0, textures: 0 });
        }
        update(e, t, r) {
          this.render.drawCalls++,
            e.isMesh || e.isSprite
              ? (this.render.triangles += (t / 3) * r)
              : e.isPoints
              ? (this.render.points += r * t)
              : e.isLineSegments
              ? (this.render.lines += (t / 2) * r)
              : e.isLine
              ? (this.render.lines += r * (t - 1))
              : console.error("THREE.WebGPUInfo: Unknown object type.");
        }
        reset() {
          (this.render.drawCalls = 0),
            (this.render.frameCalls = 0),
            (this.compute.frameCalls = 0),
            (this.render.triangles = 0),
            (this.render.points = 0),
            (this.render.lines = 0);
        }
        dispose() {
          this.reset(),
            (this.calls = 0),
            (this.render.calls = 0),
            (this.compute.calls = 0),
            (this.render.timestamp = 0),
            (this.compute.timestamp = 0),
            (this.memory.geometries = 0),
            (this.memory.textures = 0);
        }
      }
      class dn {
        constructor(e) {
          (this.cacheKey = e), (this.usedTimes = 0);
        }
      }
      class da extends dn {
        constructor(e, t, r) {
          super(e), (this.vertexProgram = t), (this.fragmentProgram = r);
        }
      }
      class dl extends dn {
        constructor(e, t) {
          super(e), (this.computeProgram = t), (this.isComputePipeline = !0);
        }
      }
      let du = 0;
      class dd {
        constructor(e, t, r, i = null, s = null) {
          (this.id = du++),
            (this.code = e),
            (this.stage = t),
            (this.name = r),
            (this.transforms = i),
            (this.attributes = s),
            (this.usedTimes = 0);
        }
      }
      class dh extends u9 {
        constructor(e, t) {
          super(),
            (this.backend = e),
            (this.nodes = t),
            (this.bindings = null),
            (this.caches = new Map()),
            (this.programs = {
              vertex: new Map(),
              fragment: new Map(),
              compute: new Map(),
            });
        }
        getForCompute(e, t) {
          let { backend: r } = this,
            i = this.get(e);
          if (this._needsComputeUpdate(e)) {
            let s = i.pipeline;
            s && (s.usedTimes--, s.computeProgram.usedTimes--);
            let n = this.nodes.getForCompute(e),
              a = this.programs.compute.get(n.computeShader);
            void 0 === a &&
              (s &&
                0 === s.computeProgram.usedTimes &&
                this._releaseProgram(s.computeProgram),
              (a = new dd(
                n.computeShader,
                "compute",
                e.name,
                n.transforms,
                n.nodeAttributes
              )),
              this.programs.compute.set(n.computeShader, a),
              r.createProgram(a));
            let o = this._getComputeCacheKey(e, a),
              l = this.caches.get(o);
            void 0 === l &&
              (s && 0 === s.usedTimes && this._releasePipeline(s),
              (l = this._getComputePipeline(e, a, o, t))),
              l.usedTimes++,
              a.usedTimes++,
              (i.version = e.version),
              (i.pipeline = l);
          }
          return i.pipeline;
        }
        getForRender(e, t = null) {
          let { backend: r } = this,
            i = this.get(e);
          if (this._needsRenderUpdate(e)) {
            let s = i.pipeline;
            s &&
              (s.usedTimes--,
              s.vertexProgram.usedTimes--,
              s.fragmentProgram.usedTimes--);
            let n = e.getNodeBuilderState(),
              a = e.material ? e.material.name : "",
              o = this.programs.vertex.get(n.vertexShader);
            void 0 === o &&
              (s &&
                0 === s.vertexProgram.usedTimes &&
                this._releaseProgram(s.vertexProgram),
              (o = new dd(n.vertexShader, "vertex", a)),
              this.programs.vertex.set(n.vertexShader, o),
              r.createProgram(o));
            let l = this.programs.fragment.get(n.fragmentShader);
            void 0 === l &&
              (s &&
                0 === s.fragmentProgram.usedTimes &&
                this._releaseProgram(s.fragmentProgram),
              (l = new dd(n.fragmentShader, "fragment", a)),
              this.programs.fragment.set(n.fragmentShader, l),
              r.createProgram(l));
            let u = this._getRenderCacheKey(e, o, l),
              d = this.caches.get(u);
            void 0 === d
              ? (s && 0 === s.usedTimes && this._releasePipeline(s),
                (d = this._getRenderPipeline(e, o, l, u, t)))
              : (e.pipeline = d),
              d.usedTimes++,
              o.usedTimes++,
              l.usedTimes++,
              (i.pipeline = d);
          }
          return i.pipeline;
        }
        delete(e) {
          let t = this.get(e).pipeline;
          return (
            t &&
              (t.usedTimes--,
              0 === t.usedTimes && this._releasePipeline(t),
              t.isComputePipeline
                ? (t.computeProgram.usedTimes--,
                  0 === t.computeProgram.usedTimes &&
                    this._releaseProgram(t.computeProgram))
                : (t.fragmentProgram.usedTimes--,
                  t.vertexProgram.usedTimes--,
                  0 === t.vertexProgram.usedTimes &&
                    this._releaseProgram(t.vertexProgram),
                  0 === t.fragmentProgram.usedTimes &&
                    this._releaseProgram(t.fragmentProgram))),
            super.delete(e)
          );
        }
        dispose() {
          super.dispose(),
            (this.caches = new Map()),
            (this.programs = {
              vertex: new Map(),
              fragment: new Map(),
              compute: new Map(),
            });
        }
        updateForRender(e) {
          this.getForRender(e);
        }
        _getComputePipeline(e, t, r, i) {
          r = r || this._getComputeCacheKey(e, t);
          let s = this.caches.get(r);
          return (
            void 0 === s &&
              ((s = new dl(r, t)),
              this.caches.set(r, s),
              this.backend.createComputePipeline(s, i)),
            s
          );
        }
        _getRenderPipeline(e, t, r, i, s) {
          i = i || this._getRenderCacheKey(e, t, r);
          let n = this.caches.get(i);
          return (
            void 0 === n &&
              ((n = new da(i, t, r)),
              this.caches.set(i, n),
              (e.pipeline = n),
              this.backend.createRenderPipeline(e, s)),
            n
          );
        }
        _getComputeCacheKey(e, t) {
          return e.id + "," + t.id;
        }
        _getRenderCacheKey(e, t, r) {
          return t.id + "," + r.id + "," + this.backend.getRenderCacheKey(e);
        }
        _releasePipeline(e) {
          this.caches.delete(e.cacheKey);
        }
        _releaseProgram(e) {
          let t = e.code,
            r = e.stage;
          this.programs[r].delete(t);
        }
        _needsComputeUpdate(e) {
          let t = this.get(e);
          return void 0 === t.pipeline || t.version !== e.version;
        }
        _needsRenderUpdate(e) {
          return (
            void 0 === this.get(e).pipeline || this.backend.needsRenderUpdate(e)
          );
        }
      }
      class dc extends u9 {
        constructor(e, t, r, i, s, n) {
          super(),
            (this.backend = e),
            (this.textures = r),
            (this.pipelines = s),
            (this.attributes = i),
            (this.nodes = t),
            (this.info = n),
            (this.pipelines.bindings = this);
        }
        getForRender(e) {
          let t = e.getBindings();
          for (let e of t) {
            let r = this.get(e);
            void 0 === r.bindGroup &&
              (this._init(e),
              this.backend.createBindings(e, t, 0),
              (r.bindGroup = e));
          }
          return t;
        }
        getForCompute(e) {
          let t = this.nodes.getForCompute(e).bindings;
          for (let e of t) {
            let r = this.get(e);
            void 0 === r.bindGroup &&
              (this._init(e),
              this.backend.createBindings(e, t, 0),
              (r.bindGroup = e));
          }
          return t;
        }
        updateForCompute(e) {
          this._updateBindings(this.getForCompute(e));
        }
        updateForRender(e) {
          this._updateBindings(this.getForRender(e));
        }
        _updateBindings(e) {
          for (let t of e) this._update(t, e);
        }
        _init(e) {
          for (let t of e.bindings)
            if (t.isSampledTexture) this.textures.updateTexture(t.texture);
            else if (t.isStorageBuffer) {
              let e = t.attribute,
                r = e.isIndirectStorageBufferAttribute
                  ? u7.INDIRECT
                  : u7.STORAGE;
              this.attributes.update(e, r);
            }
        }
        _update(e, t) {
          let { backend: r } = this,
            i = !1,
            s = !0,
            n = 0,
            a = 0;
          for (let t of e.bindings)
            if (!t.isNodeUniformsGroup || !1 !== this.nodes.updateGroup(t)) {
              if (t.isStorageBuffer) {
                let e = t.attribute,
                  r = e.isIndirectStorageBufferAttribute
                    ? u7.INDIRECT
                    : u7.STORAGE;
                this.attributes.update(e, r);
              }
              if (t.isUniformBuffer) t.update() && r.updateBinding(t);
              else if (t.isSampledTexture) {
                let e = t.update(),
                  o = t.texture,
                  l = this.textures.get(o);
                if (
                  (e &&
                    (this.textures.updateTexture(o),
                    t.generation !== l.generation &&
                      ((t.generation = l.generation), (i = !0))),
                  void 0 !== r.get(o).externalTexture || l.isDefaultTexture
                    ? (s = !1)
                    : ((n = 10 * n + o.id), (a += o.version)),
                  !0 === o.isStorageTexture)
                ) {
                  let e = this.get(o);
                  !0 === t.store
                    ? (e.needsMipmap = !0)
                    : this.textures.needsMipmaps(o) &&
                      !0 === e.needsMipmap &&
                      (this.backend.generateMipmaps(o), (e.needsMipmap = !1));
                }
              } else t.isSampler && t.update();
            }
          !0 === i && this.backend.updateBindings(e, t, s ? n : 0, a);
        }
      }
      function dp(e, t) {
        return e.groupOrder !== t.groupOrder
          ? e.groupOrder - t.groupOrder
          : e.renderOrder !== t.renderOrder
          ? e.renderOrder - t.renderOrder
          : e.z !== t.z
          ? e.z - t.z
          : e.id - t.id;
      }
      function dg(e, t) {
        return e.groupOrder !== t.groupOrder
          ? e.groupOrder - t.groupOrder
          : e.renderOrder !== t.renderOrder
          ? e.renderOrder - t.renderOrder
          : e.z !== t.z
          ? t.z - e.z
          : e.id - t.id;
      }
      function dm(e) {
        return (
          (e.transmission > 0 || e.transmissionNode) &&
          e.side === u.$EB &&
          !1 === e.forceSinglePass
        );
      }
      class df {
        constructor(e, t, r) {
          (this.renderItems = []),
            (this.renderItemsIndex = 0),
            (this.opaque = []),
            (this.transparentDoublePass = []),
            (this.transparent = []),
            (this.bundles = []),
            (this.lightsNode = e.getNode(t, r)),
            (this.lightsArray = []),
            (this.scene = t),
            (this.camera = r),
            (this.occlusionQueryCount = 0);
        }
        begin() {
          return (
            (this.renderItemsIndex = 0),
            (this.opaque.length = 0),
            (this.transparentDoublePass.length = 0),
            (this.transparent.length = 0),
            (this.bundles.length = 0),
            (this.lightsArray.length = 0),
            (this.occlusionQueryCount = 0),
            this
          );
        }
        getNextRenderItem(e, t, r, i, s, n, a) {
          let o = this.renderItems[this.renderItemsIndex];
          return (
            void 0 === o
              ? ((o = {
                  id: e.id,
                  object: e,
                  geometry: t,
                  material: r,
                  groupOrder: i,
                  renderOrder: e.renderOrder,
                  z: s,
                  group: n,
                  clippingContext: a,
                }),
                (this.renderItems[this.renderItemsIndex] = o))
              : ((o.id = e.id),
                (o.object = e),
                (o.geometry = t),
                (o.material = r),
                (o.groupOrder = i),
                (o.renderOrder = e.renderOrder),
                (o.z = s),
                (o.group = n),
                (o.clippingContext = a)),
            this.renderItemsIndex++,
            o
          );
        }
        push(e, t, r, i, s, n, a) {
          let o = this.getNextRenderItem(e, t, r, i, s, n, a);
          !0 === e.occlusionTest && this.occlusionQueryCount++,
            !0 === r.transparent || r.transmission > 0
              ? (dm(r) && this.transparentDoublePass.push(o),
                this.transparent.push(o))
              : this.opaque.push(o);
        }
        unshift(e, t, r, i, s, n, a) {
          let o = this.getNextRenderItem(e, t, r, i, s, n, a);
          !0 === r.transparent || r.transmission > 0
            ? (dm(r) && this.transparentDoublePass.unshift(o),
              this.transparent.unshift(o))
            : this.opaque.unshift(o);
        }
        pushBundle(e) {
          this.bundles.push(e);
        }
        pushLight(e) {
          this.lightsArray.push(e);
        }
        sort(e, t) {
          this.opaque.length > 1 && this.opaque.sort(e || dp),
            this.transparentDoublePass.length > 1 &&
              this.transparentDoublePass.sort(t || dg),
            this.transparent.length > 1 && this.transparent.sort(t || dg);
        }
        finish() {
          this.lightsNode.setLights(this.lightsArray);
          for (
            let e = this.renderItemsIndex, t = this.renderItems.length;
            e < t;
            e++
          ) {
            let t = this.renderItems[e];
            if (null === t.id) break;
            (t.id = null),
              (t.object = null),
              (t.geometry = null),
              (t.material = null),
              (t.groupOrder = null),
              (t.renderOrder = null),
              (t.z = null),
              (t.group = null),
              (t.clippingContext = null);
          }
        }
      }
      let dy = [];
      class db {
        constructor(e) {
          (this.lighting = e), (this.lists = new u3());
        }
        get(e, t) {
          let r = this.lists;
          (dy[0] = e), (dy[1] = t);
          let i = r.get(dy);
          return (
            void 0 === i && ((i = new df(this.lighting, e, t)), r.set(dy, i)),
            (dy.length = 0),
            i
          );
        }
        dispose() {
          this.lists = new u3();
        }
      }
      let dx = 0;
      class dT {
        constructor() {
          (this.id = dx++),
            (this.color = !0),
            (this.clearColor = !0),
            (this.clearColorValue = { r: 0, g: 0, b: 0, a: 1 }),
            (this.depth = !0),
            (this.clearDepth = !0),
            (this.clearDepthValue = 1),
            (this.stencil = !1),
            (this.clearStencil = !0),
            (this.clearStencilValue = 1),
            (this.viewport = !1),
            (this.viewportValue = new u.IUQ()),
            (this.scissor = !1),
            (this.scissorValue = new u.IUQ()),
            (this.renderTarget = null),
            (this.textures = null),
            (this.depthTexture = null),
            (this.activeCubeFace = 0),
            (this.activeMipmapLevel = 0),
            (this.sampleCount = 1),
            (this.width = 0),
            (this.height = 0),
            (this.occlusionQueryCount = 0),
            (this.clippingContext = null),
            (this.isRenderContext = !0);
        }
        getCacheKey() {
          return d_(this);
        }
      }
      function d_(e) {
        let { textures: t, activeCubeFace: r } = e,
          i = [r];
        for (let e of t) i.push(e.id);
        return m(i);
      }
      let dv = [],
        dN = new u.Z58(),
        dS = new u.i7d();
      class dR {
        constructor() {
          this.chainMaps = {};
        }
        get(e, t, r = null) {
          let i;
          if (((dv[0] = e), (dv[1] = t), null === r)) i = "default";
          else {
            let e = r.texture.format,
              t = r.textures.length;
            i = `${t}:${e}:${r.samples}:${r.depthBuffer}:${r.stencilBuffer}`;
          }
          let s = this._getChainMap(i),
            n = s.get(dv);
          return (
            void 0 === n && ((n = new dT()), s.set(dv, n)),
            (dv.length = 0),
            null !== r && (n.sampleCount = 0 === r.samples ? 1 : r.samples),
            n
          );
        }
        getForClear(e = null) {
          return this.get(dN, dS, e);
        }
        _getChainMap(e) {
          return this.chainMaps[e] || (this.chainMaps[e] = new u3());
        }
        dispose() {
          this.chainMaps = {};
        }
      }
      let dA = new u.Pq0();
      class dE extends u9 {
        constructor(e, t, r) {
          super(), (this.renderer = e), (this.backend = t), (this.info = r);
        }
        updateRenderTarget(e, t = 0) {
          let r = this.get(e),
            i = 0 === e.samples ? 1 : e.samples,
            s = r.depthTextureMips || (r.depthTextureMips = {}),
            n = e.textures,
            a = this.getSize(n[0]),
            o = a.width >> t,
            l = a.height >> t,
            d = e.depthTexture || s[t],
            h = !0 === e.depthBuffer || !0 === e.stencilBuffer,
            c = !1;
          void 0 === d &&
            h &&
            (((d = new u.VCu()).format = e.stencilBuffer ? u.dcC : u.zdS),
            (d.type = e.stencilBuffer ? u.V3x : u.bkx),
            (d.image.width = o),
            (d.image.height = l),
            (d.image.depth = a.depth),
            (d.isArrayTexture = !0 === e.multiview && a.depth > 1),
            (s[t] = d)),
            (r.width !== a.width || a.height !== r.height) &&
              ((c = !0),
              d &&
                ((d.needsUpdate = !0),
                (d.image.width = o),
                (d.image.height = l),
                (d.image.depth = d.isArrayTexture ? d.image.depth : 1))),
            (r.width = a.width),
            (r.height = a.height),
            (r.textures = n),
            (r.depthTexture = d || null),
            (r.depth = e.depthBuffer),
            (r.stencil = e.stencilBuffer),
            (r.renderTarget = e),
            r.sampleCount !== i &&
              ((c = !0), d && (d.needsUpdate = !0), (r.sampleCount = i));
          let p = { sampleCount: i };
          if (!0 !== e.isXRRenderTarget) {
            for (let e = 0; e < n.length; e++) {
              let t = n[e];
              c && (t.needsUpdate = !0), this.updateTexture(t, p);
            }
            d && this.updateTexture(d, p);
          }
          if (!0 !== r.initialized) {
            r.initialized = !0;
            let t = () => {
              e.removeEventListener("dispose", t);
              for (let e = 0; e < n.length; e++) this._destroyTexture(n[e]);
              d && this._destroyTexture(d), this.delete(e);
            };
            e.addEventListener("dispose", t);
          }
        }
        updateTexture(e, t = {}) {
          let r = this.get(e);
          if (!0 === r.initialized && r.version === e.version) return;
          let i =
              e.isRenderTargetTexture ||
              e.isDepthTexture ||
              e.isFramebufferTexture,
            s = this.backend;
          if (
            (i &&
              !0 === r.initialized &&
              (s.destroySampler(e), s.destroyTexture(e)),
            e.isFramebufferTexture)
          ) {
            let t = this.renderer.getRenderTarget();
            t ? (e.type = t.texture.type) : (e.type = u.OUM);
          }
          let { width: n, height: a, depth: o } = this.getSize(e);
          if (
            ((t.width = n),
            (t.height = a),
            (t.depth = o),
            (t.needsMipmaps = this.needsMipmaps(e)),
            (t.levels = t.needsMipmaps ? this.getMipLevels(e, n, a) : 1),
            i || !0 === e.isStorageTexture)
          )
            s.createSampler(e),
              s.createTexture(e, t),
              (r.generation = e.version);
          else if (
            (!0 !== r.initialized && s.createSampler(e), e.version > 0)
          ) {
            let i = e.image;
            if (void 0 === i)
              console.warn(
                "THREE.Renderer: Texture marked for update but image is undefined."
              );
            else if (!1 === i.complete)
              console.warn(
                "THREE.Renderer: Texture marked for update but image is incomplete."
              );
            else {
              if (e.images) {
                let r = [];
                for (let t of e.images) r.push(t);
                t.images = r;
              } else t.image = i;
              (void 0 === r.isDefaultTexture || !0 === r.isDefaultTexture) &&
                (s.createTexture(e, t),
                (r.isDefaultTexture = !1),
                (r.generation = e.version)),
                !0 === e.source.dataReady && s.updateTexture(e, t),
                t.needsMipmaps &&
                  0 === e.mipmaps.length &&
                  s.generateMipmaps(e);
            }
          } else
            s.createDefaultTexture(e),
              (r.isDefaultTexture = !0),
              (r.generation = e.version);
          if (!0 !== r.initialized) {
            (r.initialized = !0),
              (r.generation = e.version),
              this.info.memory.textures++;
            let t = () => {
              e.removeEventListener("dispose", t), this._destroyTexture(e);
            };
            e.addEventListener("dispose", t);
          }
          r.version = e.version;
        }
        getSize(e, t = dA) {
          let r = e.images ? e.images[0] : e.image;
          return (
            r
              ? (void 0 !== r.image && (r = r.image),
                r instanceof HTMLVideoElement
                  ? ((t.width = r.videoWidth || 1),
                    (t.height = r.videoHeight || 1),
                    (t.depth = 1))
                  : r instanceof VideoFrame
                  ? ((t.width = r.displayWidth || 1),
                    (t.height = r.displayHeight || 1),
                    (t.depth = 1))
                  : ((t.width = r.width || 1),
                    (t.height = r.height || 1),
                    (t.depth = e.isCubeTexture ? 6 : r.depth || 1)))
              : (t.width = t.height = t.depth = 1),
            t
          );
        }
        getMipLevels(e, t, r) {
          return e.isCompressedTexture
            ? e.mipmaps
              ? e.mipmaps.length
              : 1
            : Math.floor(Math.log2(Math.max(t, r))) + 1;
        }
        needsMipmaps(e) {
          return !0 === e.isCompressedTexture || e.generateMipmaps;
        }
        _destroyTexture(e) {
          !0 === this.has(e) &&
            (this.backend.destroySampler(e),
            this.backend.destroyTexture(e),
            this.delete(e),
            this.info.memory.textures--);
        }
      }
      class dw extends u.Q1f {
        constructor(e, t, r, i = 1) {
          super(e, t, r), (this.a = i);
        }
        set(e, t, r, i = 1) {
          return (this.a = i), super.set(e, t, r);
        }
        copy(e) {
          return void 0 !== e.a && (this.a = e.a), super.copy(e);
        }
        clone() {
          return new this.constructor(this.r, this.g, this.b, this.a);
        }
      }
      class dC extends e4 {
        static get type() {
          return "ParameterNode";
        }
        constructor(e, t = null) {
          super(e, t), (this.isParameterNode = !0);
        }
        getHash() {
          return this.uuid;
        }
        generate() {
          return this.name;
        }
      }
      class dM extends D {
        static get type() {
          return "StackNode";
        }
        constructor(e = null) {
          super(),
            (this.nodes = []),
            (this.outputNode = null),
            (this.parent = e),
            (this._currentCond = null),
            (this._expressionNode = null),
            (this.isStackNode = !0);
        }
        getNodeType(e) {
          return this.outputNode ? this.outputNode.getNodeType(e) : "void";
        }
        getMemberType(e, t) {
          return this.outputNode ? this.outputNode.getMemberType(e, t) : "void";
        }
        add(e) {
          return this.nodes.push(e), this;
        }
        If(e, t) {
          let r = new ev(t);
          return (this._currentCond = il(e, r)), this.add(this._currentCond);
        }
        ElseIf(e, t) {
          let r = il(e, new ev(t));
          return (
            (this._currentCond.elseNode = r), (this._currentCond = r), this
          );
        }
        Else(e) {
          return (this._currentCond.elseNode = new ev(e)), this;
        }
        Switch(e) {
          return (this._expressionNode = eN(e)), this;
        }
        Case(...e) {
          let t = [];
          if (e.length >= 2)
            for (let r = 0; r < e.length - 1; r++)
              t.push(this._expressionNode.equal(eN(e[r])));
          else
            throw Error(
              "TSL: Invalid parameter length. Case() requires at least two parameters."
            );
          let r = new ev(e[e.length - 1]),
            i = t[0];
          for (let e = 1; e < t.length; e++) i = i.or(t[e]);
          let s = il(i, r);
          return null === this._currentCond
            ? ((this._currentCond = s), this.add(this._currentCond))
            : ((this._currentCond.elseNode = s), (this._currentCond = s), this);
        }
        Default(e) {
          return this.Else(e), this;
        }
        setup(e) {
          let t = e.getNodeProperties(this),
            r = 0;
          for (let i of this.getChildren())
            (i.isVarNode &&
              !0 === i.intent &&
              !0 !== e.getNodeProperties(i).assign) ||
              (t["node" + r++] = i);
          return t.outputNode || null;
        }
        build(e, ...t) {
          let r = e.currentStack,
            i = eF();
          eL(this), (e.currentStack = this);
          let s = e.buildStage;
          for (let t of this.nodes)
            if (
              !t.isVarNode ||
              !0 !== t.intent ||
              !0 === e.getNodeProperties(t).assign
            ) {
              if ("setup" === s) t.build(e);
              else if ("analyze" === s) t.build(e, this);
              else if ("generate" === s) {
                let r = e.getDataFromNode(t, "any").stages,
                  i = r && r[e.shaderStage];
                if (
                  t.isVarNode &&
                  i &&
                  1 === i.length &&
                  i[0] &&
                  i[0].isStackNode
                )
                  continue;
                t.build(e, "void");
              }
            }
          let n = this.outputNode
            ? this.outputNode.build(e, ...t)
            : super.build(e, ...t);
          return eL(i), (e.currentStack = r), n;
        }
      }
      let dB = eE(dM).setParameterLength(0, 1);
      class dL extends D {
        static get type() {
          return "StructTypeNode";
        }
        constructor(e, t = null) {
          super("struct"),
            (this.membersLayout = Object.entries(e).map(([e, t]) =>
              "string" == typeof t
                ? { name: e, type: t, atomic: !1 }
                : { name: e, type: t.type, atomic: t.atomic || !1 }
            )),
            (this.name = t),
            (this.isStructLayoutNode = !0);
        }
        getLength() {
          let e = Float32Array.BYTES_PER_ELEMENT,
            t = 0;
          for (let r of this.membersLayout) {
            let i = r.type,
              s =
                (/float|int|uint/.test(i)
                  ? 1
                  : /vec2/.test(i)
                  ? 2
                  : /vec3/.test(i)
                  ? 3
                  : /vec4/.test(i) || /mat2/.test(i)
                  ? 4
                  : /mat3/.test(i)
                  ? 12
                  : /mat4/.test(i)
                  ? 16
                  : void console.error("THREE.TSL: Unsupported type:", i)) * e,
              n = /float|int|uint/.test(i)
                ? 4
                : /vec2/.test(i)
                ? 8
                : /vec3/.test(i) || /vec4/.test(i)
                ? 16
                : /mat2/.test(i)
                ? 8
                : /mat3/.test(i)
                ? 48
                : /mat4/.test(i)
                ? 64
                : void console.error("THREE.TSL: Unsupported type:", i),
              a = t % 8,
              o = a % n,
              l = a + o;
            (t += o), 0 !== l && 8 - l < s && (t += 8 - l), (t += s);
          }
          return (8 * Math.ceil(t / 8)) / e;
        }
        getMemberType(e, t) {
          let r = this.membersLayout.find((e) => e.name === t);
          return r ? r.type : "void";
        }
        getNodeType(e) {
          return e.getStructTypeFromNode(this, this.membersLayout, this.name)
            .name;
        }
        setup(e) {
          e.addInclude(this);
        }
        generate(e) {
          return this.getNodeType(e);
        }
      }
      class dF extends D {
        static get type() {
          return "StructNode";
        }
        constructor(e, t) {
          super("vec3"),
            (this.structLayoutNode = e),
            (this.values = t),
            (this.isStructNode = !0);
        }
        getNodeType(e) {
          return this.structLayoutNode.getNodeType(e);
        }
        getMemberType(e, t) {
          return this.structLayoutNode.getMemberType(e, t);
        }
        generate(e) {
          let t = e.getVarFromNode(this),
            r = t.type,
            i = e.getPropertyName(t);
          return (
            e.addLineFlowCode(
              `${i} = ${e.generateStruct(
                r,
                this.structLayoutNode.membersLayout,
                this.values
              )}`,
              this
            ),
            t.name
          );
        }
      }
      class dP extends D {
        static get type() {
          return "OutputStructNode";
        }
        constructor(...e) {
          super(), (this.members = e), (this.isOutputStructNode = !0);
        }
        getNodeType(e) {
          let t = e.getNodeProperties(this);
          if (void 0 === t.membersLayout) {
            let r = this.members,
              i = [];
            for (let t = 0; t < r.length; t++) {
              let s = "m" + t,
                n = r[t].getNodeType(e);
              i.push({ name: s, type: n, index: t });
            }
            (t.membersLayout = i),
              (t.structType = e.getOutputStructTypeFromNode(
                this,
                t.membersLayout
              ));
          }
          return t.structType.name;
        }
        generate(e) {
          let t = e.getOutputStructName(),
            r = this.members,
            i = "" !== t ? t + "." : "";
          for (let t = 0; t < r.length; t++) {
            let s = r[t].build(e);
            e.addLineFlowCode(`${i}m${t} = ${s}`, this);
          }
          return t;
        }
      }
      let dI = eE(dP);
      function dU(e, t) {
        for (let r = 0; r < e.length; r++) if (e[r].name === t) return r;
        return -1;
      }
      class dD extends dP {
        static get type() {
          return "MRTNode";
        }
        constructor(e) {
          super(), (this.outputNodes = e), (this.isMRTNode = !0);
        }
        has(e) {
          return void 0 !== this.outputNodes[e];
        }
        get(e) {
          return this.outputNodes[e];
        }
        merge(e) {
          return dV({ ...this.outputNodes, ...e.outputNodes });
        }
        setup(e) {
          let t = this.outputNodes,
            r = e.renderer.getRenderTarget(),
            i = [],
            s = r.textures;
          for (let e in t) i[dU(s, e)] = eK(t[e]);
          return (this.members = i), super.setup(e);
        }
      }
      let dV = eE(dD),
        dO = eB(([e]) => {
          let t = e.toUint().mul(0x2c9277b5).add(0xac564b05),
            r = t.shiftRight(t.shiftRight(28).add(4)).bitXor(t).mul(0x108ef2d9);
          return r
            .shiftRight(22)
            .bitXor(r)
            .toFloat()
            .mul(1 / 0x100000000);
        }),
        dG = (e, t) => rZ(t$(4, e.mul(tz(1, e))), t),
        dk = eB(([e]) => e.fract().sub(0.5).abs()).setLayout({
          name: "tri",
          type: "float",
          inputs: [{ name: "x", type: "float" }],
        }),
        dz = eB(([e]) =>
          eH(
            dk(e.z.add(dk(e.y.mul(1)))),
            dk(e.z.add(dk(e.x.mul(1)))),
            dk(e.y.add(dk(e.x.mul(1))))
          )
        ).setLayout({
          name: "tri3",
          type: "vec3",
          inputs: [{ name: "p", type: "vec3" }],
        }),
        d$ = eB(([e, t, r]) => {
          let i = eH(e).toVar(),
            s = eD(1.4).toVar(),
            n = eD(0).toVar(),
            a = eH(i).toVar();
          return (
            aJ(
              { start: eD(0), end: eD(3), type: "float", condition: "<=" },
              () => {
                let e = eH(dz(a.mul(2))).toVar();
                i.addAssign(e.add(r.mul(eD(0.1).mul(t)))),
                  a.mulAssign(1.8),
                  s.mulAssign(1.5),
                  i.mulAssign(1.2);
                let o = eD(dk(i.z.add(dk(i.x.add(dk(i.y)))))).toVar();
                n.addAssign(o.div(s)), a.addAssign(0.14);
              }
            ),
            n
          );
        }).setLayout({
          name: "triNoise3D",
          type: "float",
          inputs: [
            { name: "position", type: "vec3" },
            { name: "speed", type: "float" },
            { name: "time", type: "float" },
          ],
        });
      class dW extends D {
        static get type() {
          return "FunctionOverloadingNode";
        }
        constructor(e = [], ...t) {
          super(),
            (this.functionNodes = e),
            (this.parametersNodes = t),
            (this._candidateFnCall = null),
            (this.global = !0);
        }
        getNodeType() {
          return this.functionNodes[0].shaderNode.layout.type;
        }
        setup(e) {
          let t = this.parametersNodes,
            r = this._candidateFnCall;
          if (null === r) {
            let i = null,
              s = -1;
            for (let r of this.functionNodes) {
              let n = r.shaderNode.layout;
              if (null === n)
                throw Error(
                  "FunctionOverloadingNode: FunctionNode must be a layout."
                );
              let a = n.inputs;
              if (t.length === a.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) {
                  let i = t[r],
                    s = a[r];
                  i.getNodeType(e) === s.type ? n++ : (n = 0);
                }
                n > s && ((i = r), (s = n));
              }
            }
            this._candidateFnCall = r = i(...t);
          }
          return r;
        }
      }
      let dH = eE(dW),
        dq =
          (e) =>
          (...t) =>
            dH(e, ...t),
        dj = tL(0)
          .setGroup(tC)
          .onRenderUpdate((e) => e.time),
        dX = tL(0)
          .setGroup(tC)
          .onRenderUpdate((e) => e.deltaTime),
        dK = tL(0, "uint")
          .setGroup(tC)
          .onRenderUpdate((e) => e.frameId),
        dQ = eB(([e, t, r = ek(0.5)]) => uX(e.sub(r), t).add(r)),
        dY = eB(([e, t, r = ek(0.5)]) => {
          let i = e.sub(r),
            s = i.dot(i),
            n = s.mul(s).mul(t);
          return e.add(i.mul(n));
        }),
        dZ = eB(
          ({ position: e = null, horizontal: t = !0, vertical: r = !1 }) => {
            let i;
            null !== e
              ? (((i = sP.toVar())[3][0] = e.x),
                (i[3][1] = e.y),
                (i[3][2] = e.z))
              : (i = sP);
            let s = sT.mul(i);
            return (
              eT(t) &&
                ((s[0][0] = sP[0].length()), (s[0][1] = 0), (s[0][2] = 0)),
              eT(r) &&
                ((s[1][0] = 0), (s[1][1] = sP[1].length()), (s[1][2] = 0)),
              (s[2][0] = 0),
              (s[2][1] = 0),
              (s[2][2] = 1),
              sb.mul(s).mul(sq)
            );
          }
        ),
        dJ = eB(([e = null]) => {
          let t = oS();
          return oS(of(e)).sub(t).lessThan(0).select(or, e);
        });
      class d0 extends D {
        static get type() {
          return "SpriteSheetUVNode";
        }
        constructor(e, t = i9(), r = eD(0)) {
          super("vec2"),
            (this.countNode = e),
            (this.uvNode = t),
            (this.frameNode = r);
        }
        setup() {
          let { frameNode: e, uvNode: t, countNode: r } = this,
            { width: i, height: s } = r,
            n = e.mod(i.mul(s)).floor(),
            a = n.mod(i),
            o = s.sub(n.add(1).div(i).ceil()),
            l = r.reciprocal(),
            u = ek(a, o);
          return t.add(u).mul(l);
        }
      }
      let d1 = eE(d0).setParameterLength(3),
        d2 = eB(([e, t = null, r = null, i = eD(1), s = sq, n = s3]) => {
          let a = n.abs().normalize();
          a = a.div(a.dot(eH(1)));
          let o = s.yz.mul(i),
            l = s.zx.mul(i),
            u = s.xy.mul(i),
            d = e.value,
            h = null !== t ? t.value : d,
            c = null !== r ? r.value : d,
            p = sa(d, o).mul(a.x);
          return tk(p, sa(h, l).mul(a.y), sa(c, u).mul(a.z));
        }),
        d3 = new u.Zcv(),
        d4 = new u.Pq0(),
        d6 = new u.Pq0(),
        d8 = new u.Pq0(),
        d5 = new u.kn4(),
        d9 = new u.Pq0(0, 0, -1),
        d7 = new u.IUQ(),
        he = new u.Pq0(),
        ht = new u.Pq0(),
        hr = new u.IUQ(),
        hi = new u.I9Y(),
        hs = new u.O0B(),
        hn = or.flipX();
      hs.depthTexture = new u.VCu(1, 1);
      let ha = !1;
      class ho extends ss {
        static get type() {
          return "ReflectorNode";
        }
        constructor(e = {}) {
          super(e.defaultTexture || hs.texture, hn),
            (this._reflectorBaseNode = e.reflector || new hl(this, e)),
            (this._depthNode = null),
            this.setUpdateMatrix(!1);
        }
        get reflector() {
          return this._reflectorBaseNode;
        }
        get target() {
          return this._reflectorBaseNode.target;
        }
        getDepthNode() {
          if (null === this._depthNode) {
            if (!0 !== this._reflectorBaseNode.depth)
              throw Error(
                "THREE.ReflectorNode: Depth node can only be requested when the reflector is created with { depth: true }. "
              );
            this._depthNode = eN(
              new ho({
                defaultTexture: hs.depthTexture,
                reflector: this._reflectorBaseNode,
              })
            );
          }
          return this._depthNode;
        }
        setup(e) {
          return (
            e.object.isQuadMesh || this._reflectorBaseNode.build(e),
            super.setup(e)
          );
        }
        clone() {
          let e = new this.constructor(this.reflectorNode);
          return (
            (e.uvNode = this.uvNode),
            (e.levelNode = this.levelNode),
            (e.biasNode = this.biasNode),
            (e.sampler = this.sampler),
            (e.depthNode = this.depthNode),
            (e.compareNode = this.compareNode),
            (e.gradNode = this.gradNode),
            (e._reflectorBaseNode = this._reflectorBaseNode),
            e
          );
        }
        dispose() {
          super.dispose(), this._reflectorBaseNode.dispose();
        }
      }
      class hl extends D {
        static get type() {
          return "ReflectorBaseNode";
        }
        constructor(e, t = {}) {
          super();
          let {
            target: r = new u.B69(),
            resolution: i = 1,
            generateMipmaps: s = !1,
            bounces: n = !0,
            depth: a = !1,
          } = t;
          (this.textureNode = e),
            (this.target = r),
            (this.resolution = i),
            (this.generateMipmaps = s),
            (this.bounces = n),
            (this.depth = a),
            (this.updateBeforeType = n ? C.RENDER : C.FRAME),
            (this.virtualCameras = new WeakMap()),
            (this.renderTargets = new Map()),
            (this.forceUpdate = !1),
            (this.hasOutput = !1);
        }
        _updateResolution(e, t) {
          let r = this.resolution;
          t.getDrawingBufferSize(hi),
            e.setSize(Math.round(hi.width * r), Math.round(hi.height * r));
        }
        setup(e) {
          return this._updateResolution(hs, e.renderer), super.setup(e);
        }
        dispose() {
          for (let e of (super.dispose(), this.renderTargets.values()))
            e.dispose();
        }
        getVirtualCamera(e) {
          let t = this.virtualCameras.get(e);
          return (
            void 0 === t && ((t = e.clone()), this.virtualCameras.set(e, t)), t
          );
        }
        getRenderTarget(e) {
          let t = this.renderTargets.get(e);
          return (
            void 0 === t &&
              ((t = new u.O0B(0, 0, { type: u.ix0 })),
              !0 === this.generateMipmaps &&
                ((t.texture.minFilter = u.NZq),
                (t.texture.generateMipmaps = !0)),
              !0 === this.depth && (t.depthTexture = new u.VCu()),
              this.renderTargets.set(e, t)),
            t
          );
        }
        updateBefore(e) {
          if (!1 === this.bounces && ha) return !1;
          ha = !0;
          let { scene: t, camera: r, renderer: i, material: s } = e,
            { target: n } = this,
            a = this.getVirtualCamera(r),
            o = this.getRenderTarget(a);
          i.getDrawingBufferSize(hi),
            this._updateResolution(o, i),
            d6.setFromMatrixPosition(n.matrixWorld),
            d8.setFromMatrixPosition(r.matrixWorld),
            d5.extractRotation(n.matrixWorld),
            d4.set(0, 0, 1),
            d4.applyMatrix4(d5),
            he.subVectors(d6, d8);
          let l = he.dot(d4) > 0,
            d = !1;
          if (!0 === l && !1 === this.forceUpdate) {
            if (!1 === this.hasOutput) {
              ha = !1;
              return;
            }
            d = !0;
          }
          he.reflect(d4).negate(),
            he.add(d6),
            d5.extractRotation(r.matrixWorld),
            d9.set(0, 0, -1),
            d9.applyMatrix4(d5),
            d9.add(d8),
            ht.subVectors(d6, d9),
            ht.reflect(d4).negate(),
            ht.add(d6),
            (a.coordinateSystem = r.coordinateSystem),
            a.position.copy(he),
            a.up.set(0, 1, 0),
            a.up.applyMatrix4(d5),
            a.up.reflect(d4),
            a.lookAt(ht),
            (a.near = r.near),
            (a.far = r.far),
            a.updateMatrixWorld(),
            a.projectionMatrix.copy(r.projectionMatrix),
            d3.setFromNormalAndCoplanarPoint(d4, d6),
            d3.applyMatrix4(a.matrixWorldInverse),
            d7.set(d3.normal.x, d3.normal.y, d3.normal.z, d3.constant);
          let h = a.projectionMatrix;
          (hr.x = (Math.sign(d7.x) + h.elements[8]) / h.elements[0]),
            (hr.y = (Math.sign(d7.y) + h.elements[9]) / h.elements[5]),
            (hr.z = -1),
            (hr.w = (1 + h.elements[10]) / h.elements[14]),
            d7.multiplyScalar(1 / d7.dot(hr)),
            (h.elements[2] = d7.x),
            (h.elements[6] = d7.y),
            (h.elements[10] =
              i.coordinateSystem === u.i7u ? d7.z - 0 : d7.z + 1 - 0),
            (h.elements[14] = d7.w),
            (this.textureNode.value = o.texture),
            !0 === this.depth &&
              (this.textureNode.getDepthNode().value = o.depthTexture),
            (s.visible = !1);
          let c = i.getRenderTarget(),
            p = i.getMRT(),
            g = i.autoClear;
          i.setMRT(null),
            i.setRenderTarget(o),
            (i.autoClear = !0),
            d
              ? (i.clear(), (this.hasOutput = !1))
              : (i.render(t, a), (this.hasOutput = !0)),
            i.setMRT(p),
            i.setRenderTarget(c),
            (i.autoClear = g),
            (s.visible = !0),
            (ha = !1),
            (this.forceUpdate = !1);
        }
      }
      let hu = new u.qUd(-1, 1, 1, -1, 0, 1);
      class hd extends u.LoY {
        constructor(e = !1) {
          super(),
            this.setAttribute(
              "position",
              new u.qtW([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)
            ),
            this.setAttribute(
              "uv",
              new u.qtW(!1 === e ? [0, -1, 0, 1, 2, 1] : [0, 2, 0, 0, 2, 0], 2)
            );
        }
      }
      let hh = new hd();
      class hc extends u.eaF {
        constructor(e = null) {
          super(hh, e), (this.camera = hu), (this.isQuadMesh = !0);
        }
        async renderAsync(e) {
          return e.renderAsync(this, hu);
        }
        render(e) {
          e.render(this, hu);
        }
      }
      let hp = new u.I9Y();
      class hg extends ss {
        static get type() {
          return "RTTNode";
        }
        constructor(e, t = null, r = null, i = { type: u.ix0 }) {
          let s = new u.O0B(t, r, i);
          super(s.texture, i9()),
            (this.isRTTNode = !0),
            (this.node = e),
            (this.width = t),
            (this.height = r),
            (this.pixelRatio = 1),
            (this.renderTarget = s),
            (this.textureNeedsUpdate = !0),
            (this.autoUpdate = !0),
            (this._rttNode = null),
            (this._quadMesh = new hc(new oO())),
            (this.updateBeforeType = C.RENDER);
        }
        get autoResize() {
          return null === this.width;
        }
        setup(e) {
          return (
            (this._rttNode = this.node.context(e.getSharedContext())),
            (this._quadMesh.material.name = "RTT"),
            (this._quadMesh.material.needsUpdate = !0),
            super.setup(e)
          );
        }
        setSize(e, t) {
          (this.width = e), (this.height = t);
          let r = e * this.pixelRatio,
            i = t * this.pixelRatio;
          this.renderTarget.setSize(r, i), (this.textureNeedsUpdate = !0);
        }
        setPixelRatio(e) {
          (this.pixelRatio = e), this.setSize(this.width, this.height);
        }
        updateBefore({ renderer: e }) {
          if (!1 === this.textureNeedsUpdate && !1 === this.autoUpdate) return;
          if (((this.textureNeedsUpdate = !1), !0 === this.autoResize)) {
            let t = e.getPixelRatio(),
              r = e.getSize(hp),
              i = r.width * t,
              s = r.height * t;
            (i !== this.renderTarget.width || s !== this.renderTarget.height) &&
              (this.renderTarget.setSize(i, s), (this.textureNeedsUpdate = !0));
          }
          this._quadMesh.material.fragmentNode = this._rttNode;
          let t = e.getRenderTarget();
          e.setRenderTarget(this.renderTarget),
            this._quadMesh.render(e),
            e.setRenderTarget(t);
        }
        clone() {
          let e = new ss(this.value, this.uvNode, this.levelNode);
          return (e.sampler = this.sampler), (e.referenceNode = this), e;
        }
      }
      let hm = (e, ...t) => eN(new hg(eN(e), ...t)),
        hf = eB(([e, t, r], i) => {
          let s;
          s =
            i.renderer.coordinateSystem === u.i7u
              ? eK(eH((e = ek(e.x, e.y.oneMinus()).mul(2).sub(1)), t), 1)
              : eK(eH(e.x, e.y.oneMinus(), t).mul(2).sub(1), 1);
          let n = eK(r.mul(s));
          return n.xyz.div(n.w);
        }),
        hy = eB(([e, t]) => {
          let r = t.mul(eK(e, 1)),
            i = r.xy.div(r.w).mul(0.5).add(0.5).toVar();
          return ek(i.x, i.y.oneMinus());
        }),
        hb = eB(([e, t, r]) => {
          let i = se(so(t)),
            s = ez(e.mul(i)).toVar(),
            n = so(t, s).toVar(),
            a = so(t, s.sub(ez(2, 0))).toVar(),
            o = so(t, s.sub(ez(1, 0))).toVar(),
            l = so(t, s.add(ez(1, 0))).toVar(),
            u = so(t, s.add(ez(2, 0))).toVar(),
            d = so(t, s.add(ez(0, 2))).toVar(),
            h = so(t, s.add(ez(0, 1))).toVar(),
            c = so(t, s.sub(ez(0, 1))).toVar(),
            p = so(t, s.sub(ez(0, 2))).toVar(),
            g = rw(tz(eD(2).mul(o).sub(a), n)).toVar(),
            m = rw(tz(eD(2).mul(l).sub(u), n)).toVar(),
            f = rw(tz(eD(2).mul(h).sub(d), n)).toVar(),
            y = rw(tz(eD(2).mul(c).sub(p), n)).toVar(),
            b = hf(e, n, r).toVar();
          return rT(
            rY(
              g
                .lessThan(m)
                .select(
                  b.sub(hf(e.sub(ek(eD(1).div(i.x), 0)), o, r)),
                  b.negate().add(hf(e.add(ek(eD(1).div(i.x), 0)), l, r))
                ),
              f
                .lessThan(y)
                .select(
                  b.sub(hf(e.add(ek(0, eD(1).div(i.y))), h, r)),
                  b.negate().add(hf(e.sub(ek(0, eD(1).div(i.y))), c, r))
                )
            )
          );
        });
      class hx extends D {
        static get type() {
          return "SampleNode";
        }
        constructor(e) {
          super(), (this.callback = e), (this.isSampleNode = !0);
        }
        setup() {
          return this.sample(i9());
        }
        sample(e) {
          return this.callback(e);
        }
      }
      class hT extends D {
        static get type() {
          return "EventNode";
        }
        constructor(e, t) {
          super("void"),
            (this.eventType = e),
            (this.callback = t),
            e === hT.OBJECT
              ? (this.updateType = C.OBJECT)
              : e === hT.MATERIAL && (this.updateType = C.RENDER);
        }
        update(e) {
          this.callback(e);
        }
      }
      (hT.OBJECT = "object"), (hT.MATERIAL = "material");
      let h_ = (e, t) => eN(new hT(e, t)).toStack();
      class hv extends u.uWO {
        constructor(e, t, r = Float32Array) {
          super(ArrayBuffer.isView(e) ? e : new r(e * t), t),
            (this.isStorageInstancedBufferAttribute = !0);
        }
      }
      class hN extends u.THS {
        constructor(e, t, r = Float32Array) {
          super(ArrayBuffer.isView(e) ? e : new r(e * t), t),
            (this.isStorageBufferAttribute = !0);
        }
      }
      class hS extends D {
        static get type() {
          return "PointUVNode";
        }
        constructor() {
          super("vec2"), (this.isPointUVNode = !0);
        }
        generate() {
          return "vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )";
        }
      }
      let hR = ew(hS),
        hA = new u.O9p(),
        hE = new u.kn4();
      class hw extends D {
        static get type() {
          return "SceneNode";
        }
        constructor(e = hw.BACKGROUND_BLURRINESS, t = null) {
          super(), (this.scope = e), (this.scene = t);
        }
        setup(e) {
          let t,
            r = this.scope,
            i = null !== this.scene ? this.scene : e.scene;
          return (
            r === hw.BACKGROUND_BLURRINESS
              ? (t = nT("backgroundBlurriness", "float", i))
              : r === hw.BACKGROUND_INTENSITY
              ? (t = nT("backgroundIntensity", "float", i))
              : r === hw.BACKGROUND_ROTATION
              ? (t = tL("mat4")
                  .setName("backgroundRotation")
                  .setGroup(tC)
                  .onRenderUpdate(() => {
                    let e = i.background;
                    return (
                      null !== e && e.isTexture && e.mapping !== u.UTZ
                        ? (hA.copy(i.backgroundRotation),
                          (hA.x *= -1),
                          (hA.y *= -1),
                          (hA.z *= -1),
                          hE.makeRotationFromEuler(hA))
                        : hE.identity(),
                      hE
                    );
                  }))
              : console.error("THREE.SceneNode: Unknown scope:", r),
            t
          );
        }
      }
      (hw.BACKGROUND_BLURRINESS = "backgroundBlurriness"),
        (hw.BACKGROUND_INTENSITY = "backgroundIntensity"),
        (hw.BACKGROUND_ROTATION = "backgroundRotation");
      let hC = ew(hw, hw.BACKGROUND_BLURRINESS),
        hM = ew(hw, hw.BACKGROUND_INTENSITY),
        hB = ew(hw, hw.BACKGROUND_ROTATION);
      class hL extends ss {
        static get type() {
          return "StorageTextureNode";
        }
        constructor(e, t, r = null) {
          super(e, t),
            (this.storeNode = r),
            (this.isStorageTextureNode = !0),
            (this.access = M.WRITE_ONLY);
        }
        getInputType() {
          return "storageTexture";
        }
        setup(e) {
          super.setup(e);
          let t = e.getNodeProperties(this);
          return (t.storeNode = this.storeNode), t;
        }
        setAccess(e) {
          return (this.access = e), this;
        }
        generate(e, t) {
          return null !== this.storeNode
            ? this.generateStore(e)
            : super.generate(e, t);
        }
        toReadWrite() {
          return this.setAccess(M.READ_WRITE);
        }
        toReadOnly() {
          return this.setAccess(M.READ_ONLY);
        }
        toWriteOnly() {
          return this.setAccess(M.WRITE_ONLY);
        }
        generateStore(e) {
          let {
              uvNode: t,
              storeNode: r,
              depthNode: i,
            } = e.getNodeProperties(this),
            s = super.generate(e, "property"),
            n = t.build(e, !0 === this.value.is3DTexture ? "uvec3" : "uvec2"),
            a = r.build(e, "vec4"),
            o = i ? i.build(e, "int") : null,
            l = e.generateTextureStore(e, s, n, o, a);
          e.addLineFlowCode(l, this);
        }
        clone() {
          let e = super.clone();
          return (e.storeNode = this.storeNode), e;
        }
      }
      let hF = eE(hL).setParameterLength(1, 3),
        hP = eB(({ texture: e, uv: t }) => {
          let r = eH().toVar();
          return (
            eP(t.x.lessThan(1e-4), () => {
              r.assign(eH(1, 0, 0));
            })
              .ElseIf(t.y.lessThan(1e-4), () => {
                r.assign(eH(0, 1, 0));
              })
              .ElseIf(t.z.lessThan(1e-4), () => {
                r.assign(eH(0, 0, 1));
              })
              .ElseIf(t.x.greaterThan(0.9999), () => {
                r.assign(eH(-1, 0, 0));
              })
              .ElseIf(t.y.greaterThan(0.9999), () => {
                r.assign(eH(0, -1, 0));
              })
              .ElseIf(t.z.greaterThan(0.9999), () => {
                r.assign(eH(0, 0, -1));
              })
              .Else(() => {
                let i = e
                    .sample(t.add(eH(-0.01, 0, 0)))
                    .r.sub(e.sample(t.add(eH(0.01, 0, 0))).r),
                  s = e
                    .sample(t.add(eH(0, -0.01, 0)))
                    .r.sub(e.sample(t.add(eH(0, 0.01, 0))).r),
                  n = e
                    .sample(t.add(eH(0, 0, -0.01)))
                    .r.sub(e.sample(t.add(eH(0, 0, 0.01))).r);
                r.assign(eH(i, s, n));
              }),
            r.normalize()
          );
        });
      class hI extends ss {
        static get type() {
          return "Texture3DNode";
        }
        constructor(e, t = null, r = null) {
          super(e, t, r), (this.isTexture3DNode = !0);
        }
        getInputType() {
          return "texture3D";
        }
        getDefaultUV() {
          return eH(0.5, 0.5, 0.5);
        }
        setUpdateMatrix() {}
        setupUV(e, t) {
          let r = this.value;
          return (
            e.isFlipY() &&
              (!0 === r.isRenderTargetTexture ||
                !0 === r.isFramebufferTexture) &&
              (t = this.sampler
                ? t.flipY()
                : t.setY(eV(se(this, this.levelNode).y).sub(t.y).sub(1))),
            t
          );
        }
        generateUV(e, t) {
          return t.build(e, "vec3");
        }
        normal(e) {
          return hP({ texture: this, uv: e });
        }
      }
      let hU = eE(hI).setParameterLength(1, 3);
      class hD extends nx {
        static get type() {
          return "UserDataNode";
        }
        constructor(e, t, r = null) {
          super(e, t, r), (this.userData = r);
        }
        updateReference(e) {
          return (
            (this.reference =
              null !== this.userData ? this.userData : e.object.userData),
            this.reference
          );
        }
      }
      let hV = new WeakMap();
      class hO extends G {
        static get type() {
          return "VelocityNode";
        }
        constructor() {
          super("vec2"),
            (this.projectionMatrix = null),
            (this.updateType = C.OBJECT),
            (this.updateAfterType = C.OBJECT),
            (this.previousModelWorldMatrix = tL(new u.kn4())),
            (this.previousProjectionMatrix = tL(new u.kn4()).setGroup(tC)),
            (this.previousCameraViewMatrix = tL(new u.kn4()));
        }
        setProjectionMatrix(e) {
          this.projectionMatrix = e;
        }
        update({ frameId: e, camera: t, object: r }) {
          let i = hk(r);
          this.previousModelWorldMatrix.value.copy(i);
          let s = hG(t);
          s.frameId !== e &&
            ((s.frameId = e),
            void 0 === s.previousProjectionMatrix
              ? ((s.previousProjectionMatrix = new u.kn4()),
                (s.previousCameraViewMatrix = new u.kn4()),
                (s.currentProjectionMatrix = new u.kn4()),
                (s.currentCameraViewMatrix = new u.kn4()),
                s.previousProjectionMatrix.copy(
                  this.projectionMatrix || t.projectionMatrix
                ),
                s.previousCameraViewMatrix.copy(t.matrixWorldInverse))
              : (s.previousProjectionMatrix.copy(s.currentProjectionMatrix),
                s.previousCameraViewMatrix.copy(s.currentCameraViewMatrix)),
            s.currentProjectionMatrix.copy(
              this.projectionMatrix || t.projectionMatrix
            ),
            s.currentCameraViewMatrix.copy(t.matrixWorldInverse),
            this.previousProjectionMatrix.value.copy(
              s.previousProjectionMatrix
            ),
            this.previousCameraViewMatrix.value.copy(
              s.previousCameraViewMatrix
            ));
        }
        updateAfter({ object: e }) {
          hk(e).copy(e.matrixWorld);
        }
        setup() {
          let e =
              null === this.projectionMatrix ? sb : tL(this.projectionMatrix),
            t = this.previousCameraViewMatrix.mul(
              this.previousModelWorldMatrix
            ),
            r = e.mul(sk).mul(sq),
            i = this.previousProjectionMatrix.mul(t).mul(sj);
          return tz(r.xy.div(r.w), i.xy.div(i.w));
        }
      }
      function hG(e) {
        let t = hV.get(e);
        return void 0 === t && ((t = {}), hV.set(e, t)), t;
      }
      function hk(e, t = 0) {
        let r = hG(e),
          i = r[t];
        return (
          void 0 === i && ((r[t] = i = new u.kn4()), r[t].copy(e.matrixWorld)),
          i
        );
      }
      let hz = ew(hO),
        h$ = eB(([e]) => hj(e.rgb)),
        hW = eB(([e, t = eD(1)]) => t.mix(hj(e.rgb), e.rgb)),
        hH = eB(([e, t = eD(1)]) => {
          let r = tk(e.r, e.g, e.b).div(3),
            i = e.r.max(e.g.max(e.b)),
            s = i.sub(r).mul(t).mul(-3);
          return r6(e.rgb, i, s);
        }),
        hq = eB(([e, t = eD(1)]) => {
          let r = eH(0.57735, 0.57735, 0.57735),
            i = t.cos();
          return eH(
            e.rgb.mul(i).add(
              r
                .cross(e.rgb)
                .mul(t.sin())
                .add(r.mul(rQ(r, e.rgb).mul(i.oneMinus())))
            )
          );
        }),
        hj = (e, t = eH(u.ppV.getLuminanceCoefficients(new u.Pq0()))) =>
          rQ(e, t),
        hX = eB(
          ([
            e,
            t = eH(1),
            r = eH(0),
            i = eH(1),
            s = eD(1),
            n = eH(u.ppV.getLuminanceCoefficients(new u.Pq0(), u.Zr2)),
          ]) => {
            let a = e.rgb.dot(eH(n)),
              o = rH(e.rgb.mul(t).add(r), 0).toVar(),
              l = o.pow(i).toVar();
            return (
              eP(o.r.greaterThan(0), () => {
                o.r.assign(l.r);
              }),
              eP(o.g.greaterThan(0), () => {
                o.g.assign(l.g);
              }),
              eP(o.b.greaterThan(0), () => {
                o.b.assign(l.b);
              }),
              o.assign(a.add(o.sub(a).mul(s))),
              eK(o.rgb, e.a)
            );
          }
        );
      class hK extends G {
        static get type() {
          return "PosterizeNode";
        }
        constructor(e, t) {
          super(), (this.sourceNode = e), (this.stepsNode = t);
        }
        setup() {
          let { sourceNode: e, stepsNode: t } = this;
          return e.mul(t).floor().div(t);
        }
      }
      let hQ = eE(hK).setParameterLength(2),
        hY = new u.I9Y();
      class hZ extends ss {
        static get type() {
          return "PassTextureNode";
        }
        constructor(e, t) {
          super(t), (this.passNode = e), this.setUpdateMatrix(!1);
        }
        setup(e) {
          return this.passNode.build(e), super.setup(e);
        }
        clone() {
          return new this.constructor(this.passNode, this.value);
        }
      }
      class hJ extends hZ {
        static get type() {
          return "PassMultipleTextureNode";
        }
        constructor(e, t, r = !1) {
          super(e, null), (this.textureName = t), (this.previousTexture = r);
        }
        updateTexture() {
          this.value = this.previousTexture
            ? this.passNode.getPreviousTexture(this.textureName)
            : this.passNode.getTexture(this.textureName);
        }
        setup(e) {
          return this.updateTexture(), super.setup(e);
        }
        clone() {
          let e = new this.constructor(
            this.passNode,
            this.textureName,
            this.previousTexture
          );
          return (
            (e.uvNode = this.uvNode),
            (e.levelNode = this.levelNode),
            (e.biasNode = this.biasNode),
            (e.sampler = this.sampler),
            (e.depthNode = this.depthNode),
            (e.compareNode = this.compareNode),
            (e.gradNode = this.gradNode),
            e
          );
        }
      }
      class h0 extends G {
        static get type() {
          return "PassNode";
        }
        constructor(e, t, r, i = {}) {
          super("vec4"),
            (this.scope = e),
            (this.scene = t),
            (this.camera = r),
            (this.options = i),
            (this._pixelRatio = 1),
            (this._width = 1),
            (this._height = 1);
          let s = new u.VCu();
          (s.isRenderTargetTexture = !0), (s.name = "depth");
          let n = new u.O0B(
            this._width * this._pixelRatio,
            this._height * this._pixelRatio,
            { type: u.ix0, ...i }
          );
          (n.texture.name = "output"),
            (n.depthTexture = s),
            (this.renderTarget = n),
            (this._textures = { output: n.texture, depth: s }),
            (this._textureNodes = {}),
            (this._linearDepthNodes = {}),
            (this._viewZNodes = {}),
            (this._previousTextures = {}),
            (this._previousTextureNodes = {}),
            (this._cameraNear = tL(0)),
            (this._cameraFar = tL(0)),
            (this._mrt = null),
            (this._layers = null),
            (this._resolution = 1),
            (this._viewport = null),
            (this._scissor = null),
            (this.isPassNode = !0),
            (this.updateBeforeType = C.FRAME),
            (this.global = !0);
        }
        setResolution(e) {
          return (this._resolution = e), this;
        }
        getResolution() {
          return this._resolution;
        }
        setLayers(e) {
          return (this._layers = e), this;
        }
        getLayers() {
          return this._layers;
        }
        setMRT(e) {
          return (this._mrt = e), this;
        }
        getMRT() {
          return this._mrt;
        }
        getTexture(e) {
          let t = this._textures[e];
          return (
            void 0 === t &&
              (((t = this.renderTarget.texture.clone()).name = e),
              (this._textures[e] = t),
              this.renderTarget.textures.push(t)),
            t
          );
        }
        getPreviousTexture(e) {
          let t = this._previousTextures[e];
          return (
            void 0 === t &&
              ((t = this.getTexture(e).clone()),
              (this._previousTextures[e] = t)),
            t
          );
        }
        toggleTexture(e) {
          let t = this._previousTextures[e];
          if (void 0 !== t) {
            let r = this._textures[e],
              i = this.renderTarget.textures.indexOf(r);
            (this.renderTarget.textures[i] = t),
              (this._textures[e] = t),
              (this._previousTextures[e] = r),
              this._textureNodes[e].updateTexture(),
              this._previousTextureNodes[e].updateTexture();
          }
        }
        getTextureNode(e = "output") {
          let t = this._textureNodes[e];
          return (
            void 0 === t &&
              ((t = eN(new hJ(this, e))).updateTexture(),
              (this._textureNodes[e] = t)),
            t
          );
        }
        getPreviousTextureNode(e = "output") {
          let t = this._previousTextureNodes[e];
          return (
            void 0 === t &&
              (void 0 === this._textureNodes[e] && this.getTextureNode(e),
              (t = eN(new hJ(this, e, !0))).updateTexture(),
              (this._previousTextureNodes[e] = t)),
            t
          );
        }
        getViewZNode(e = "depth") {
          let t = this._viewZNodes[e];
          if (void 0 === t) {
            let r = this._cameraNear,
              i = this._cameraFar;
            this._viewZNodes[e] = t = oT(this.getTextureNode(e), r, i);
          }
          return t;
        }
        getLinearDepthNode(e = "depth") {
          let t = this._linearDepthNodes[e];
          if (void 0 === t) {
            let r = this._cameraNear,
              i = this._cameraFar,
              s = this.getViewZNode(e);
            this._linearDepthNodes[e] = t = ob(s, r, i);
          }
          return t;
        }
        async compileAsync(e) {
          let t = e.getRenderTarget(),
            r = e.getMRT();
          e.setRenderTarget(this.renderTarget),
            e.setMRT(this._mrt),
            await e.compileAsync(this.scene, this.camera),
            e.setRenderTarget(t),
            e.setMRT(r);
        }
        setup({ renderer: e }) {
          return (
            (this.renderTarget.samples =
              void 0 === this.options.samples
                ? e.samples
                : this.options.samples),
            (this.renderTarget.texture.type = e.getColorBufferType()),
            this.scope === h0.COLOR
              ? this.getTextureNode()
              : this.getLinearDepthNode()
          );
        }
        updateBefore(e) {
          let t,
            r,
            { renderer: i } = e,
            { scene: s } = this,
            n = i.getOutputRenderTarget();
          n && !0 === n.isXRRenderTarget
            ? ((r = 1),
              (t = i.xr.getCamera()),
              i.xr.updateCamera(t),
              hY.set(n.width, n.height))
            : ((t = this.camera), (r = i.getPixelRatio()), i.getSize(hY)),
            (this._pixelRatio = r),
            this.setSize(hY.width, hY.height);
          let a = i.getRenderTarget(),
            o = i.getMRT(),
            l = t.layers.mask;
          for (let e in ((this._cameraNear.value = t.near),
          (this._cameraFar.value = t.far),
          null !== this._layers && (t.layers.mask = this._layers.mask),
          this._previousTextures))
            this.toggleTexture(e);
          i.setRenderTarget(this.renderTarget),
            i.setMRT(this._mrt),
            i.render(s, t),
            i.setRenderTarget(a),
            i.setMRT(o),
            (t.layers.mask = l);
        }
        setSize(e, t) {
          (this._width = e), (this._height = t);
          let r = this._width * this._pixelRatio * this._resolution,
            i = this._height * this._pixelRatio * this._resolution;
          this.renderTarget.setSize(r, i),
            null !== this._scissor &&
              this.renderTarget.scissor.copy(this._scissor),
            null !== this._viewport &&
              this.renderTarget.viewport.copy(this._viewport);
        }
        setScissor(e, t, r, i) {
          null === e
            ? (this._scissor = null)
            : (null === this._scissor && (this._scissor = new u.IUQ()),
              e.isVector4
                ? this._scissor.copy(e)
                : this._scissor.set(e, t, r, i),
              this._scissor
                .multiplyScalar(this._pixelRatio * this._resolution)
                .floor());
        }
        setViewport(e, t, r, i) {
          null === e
            ? (this._viewport = null)
            : (null === this._viewport && (this._viewport = new u.IUQ()),
              e.isVector4
                ? this._viewport.copy(e)
                : this._viewport.set(e, t, r, i),
              this._viewport
                .multiplyScalar(this._pixelRatio * this._resolution)
                .floor());
        }
        setPixelRatio(e) {
          (this._pixelRatio = e), this.setSize(this._width, this._height);
        }
        dispose() {
          this.renderTarget.dispose();
        }
      }
      (h0.COLOR = "color"), (h0.DEPTH = "depth");
      class h1 extends h0 {
        static get type() {
          return "ToonOutlinePassNode";
        }
        constructor(e, t, r, i, s) {
          super(h0.COLOR, e, t),
            (this.colorNode = r),
            (this.thicknessNode = i),
            (this.alphaNode = s),
            (this._materialCache = new WeakMap());
        }
        updateBefore(e) {
          let { renderer: t } = e,
            r = t.getRenderObjectFunction();
          t.setRenderObjectFunction((e, r, i, s, n, a, o, l) => {
            if (
              (n.isMeshToonMaterial || n.isMeshToonNodeMaterial) &&
              !1 === n.wireframe
            ) {
              let u = this._getOutlineMaterial(n);
              t.renderObject(e, r, i, s, u, a, o, l);
            }
            t.renderObject(e, r, i, s, n, a, o, l);
          }),
            super.updateBefore(e),
            t.setRenderObjectFunction(r);
        }
        _createMaterial() {
          let e = new oO();
          (e.isMeshToonOutlineMaterial = !0),
            (e.name = "Toon_Outline"),
            (e.side = u.hsX);
          let t = s3.negate(),
            r = sb.mul(sk),
            i = eD(1),
            s = r.mul(eK(sq, 1)),
            n = r.mul(eK(sq.add(t), 1)),
            a = rT(s.sub(n));
          return (
            (e.vertexNode = s.add(a.mul(this.thicknessNode).mul(s.w).mul(i))),
            (e.colorNode = eK(this.colorNode, this.alphaNode)),
            e
          );
        }
        _getOutlineMaterial(e) {
          let t = this._materialCache.get(e);
          return (
            void 0 === t &&
              ((t = this._createMaterial()), this._materialCache.set(e, t)),
            t
          );
        }
      }
      let h2 = eB(([e, t]) => e.mul(t).clamp()).setLayout({
          name: "linearToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        }),
        h3 = eB(([e, t]) => (e = e.mul(t)).div(e.add(1)).clamp()).setLayout({
          name: "reinhardToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        }),
        h4 = eB(([e, t]) => {
          let r = (e = (e = e.mul(t)).sub(0.004).max(0)).mul(
              e.mul(6.2).add(0.5)
            ),
            i = e.mul(e.mul(6.2).add(1.7)).add(0.06);
          return r.div(i).pow(2.2);
        }).setLayout({
          name: "cineonToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        }),
        h6 = eB(([e]) => {
          let t = e.mul(e.add(0.0245786)).sub(90537e-9),
            r = e.mul(e.add(0.432951).mul(0.983729)).add(0.238081);
          return t.div(r);
        }),
        h8 = eB(([e, t]) => {
          let r = e0(
              0.59719,
              0.35458,
              0.04823,
              0.076,
              0.90834,
              0.01566,
              0.0284,
              0.13383,
              0.83777
            ),
            i = e0(
              1.60475,
              -0.53108,
              -0.07367,
              -0.10208,
              1.10813,
              -0.00605,
              -0.00327,
              -0.07276,
              1.07602
            );
          return (
            (e = e.mul(t).div(0.6)),
            (e = h6((e = r.mul(e)))),
            (e = i.mul(e)).clamp()
          );
        }).setLayout({
          name: "acesFilmicToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        }),
        h5 = e0(
          eH(1.6605, -0.1246, -0.0182),
          eH(-0.5876, 1.1329, -0.1006),
          eH(-0.0728, -0.0083, 1.1187)
        ),
        h9 = e0(
          eH(0.6274, 0.0691, 0.0164),
          eH(0.3293, 0.9195, 0.088),
          eH(0.0433, 0.0113, 0.8956)
        ),
        h7 = eB(([e]) => {
          let t = eH(e).toVar(),
            r = eH(t.mul(t)).toVar(),
            i = eH(r.mul(r)).toVar();
          return eD(15.5)
            .mul(i.mul(r))
            .sub(t$(40.14, i.mul(t)))
            .add(
              t$(31.96, i)
                .sub(t$(6.868, r.mul(t)))
                .add(t$(0.4298, r).add(t$(0.1191, t).sub(0.00232)))
            );
        }),
        ce = eB(([e, t]) => {
          let r = eH(e).toVar(),
            i = e0(
              eH(0.856627153315983, 0.137318972929847, 0.11189821299995),
              eH(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
              eH(0.0482516061458583, 0.101439036467562, 0.811302368396859)
            ),
            s = e0(
              eH(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
              eH(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
              eH(
                -0.016493938717834573,
                -0.016493938717834257,
                1.2519364065950405
              )
            ),
            n = eD(-12.47393),
            a = eD(4.026069);
          return (
            r.mulAssign(t),
            r.assign(h9.mul(r)),
            r.assign(i.mul(r)),
            r.assign(rH(r, 1e-10)),
            r.assign(rm(r)),
            r.assign(r.sub(n).div(a.sub(n))),
            r.assign(r8(r, 0, 1)),
            r.assign(h7(r)),
            r.assign(s.mul(r)),
            r.assign(rZ(rH(eH(0), r), eH(2.2))),
            r.assign(h5.mul(r)),
            r.assign(r8(r, 0, 1)),
            r
          );
        }).setLayout({
          name: "agxToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        }),
        ct = eB(([e, t]) => {
          let r = eD(0.76),
            i = eD(0.15),
            s = rW((e = e.mul(t)).r, rW(e.g, e.b)),
            n = il(s.lessThan(0.08), s.sub(t$(6.25, s.mul(s))), 0.04);
          e.subAssign(n);
          let a = rH(e.r, rH(e.g, e.b));
          eP(a.lessThan(r), () => e);
          let o = tz(1, r),
            l = tz(1, o.mul(o).div(a.add(o.sub(r))));
          e.mulAssign(l.div(a));
          let u = tz(1, tW(1, i.mul(a.sub(l)).add(1)));
          return r6(e, eH(l), u);
        }).setLayout({
          name: "neutralToneMapping",
          type: "vec3",
          inputs: [
            { name: "color", type: "vec3" },
            { name: "exposure", type: "float" },
          ],
        });
      class cr extends D {
        static get type() {
          return "CodeNode";
        }
        constructor(e = "", t = [], r = "") {
          super("code"),
            (this.isCodeNode = !0),
            (this.global = !0),
            (this.code = e),
            (this.includes = t),
            (this.language = r);
        }
        setIncludes(e) {
          return (this.includes = e), this;
        }
        getIncludes() {
          return this.includes;
        }
        generate(e) {
          for (let t of this.getIncludes(e)) t.build(e);
          let t = e.getCodeFromNode(this, this.getNodeType(e));
          return (t.code = this.code), t.code;
        }
        serialize(e) {
          super.serialize(e),
            (e.code = this.code),
            (e.language = this.language);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.code = e.code),
            (this.language = e.language);
        }
      }
      let ci = eE(cr).setParameterLength(1, 3);
      class cs extends cr {
        static get type() {
          return "FunctionNode";
        }
        constructor(e = "", t = [], r = "") {
          super(e, t, r);
        }
        getNodeType(e) {
          return this.getNodeFunction(e).type;
        }
        getInputs(e) {
          return this.getNodeFunction(e).inputs;
        }
        getNodeFunction(e) {
          let t = e.getDataFromNode(this),
            r = t.nodeFunction;
          return (
            void 0 === r &&
              (t.nodeFunction = r = e.parser.parseFunction(this.code)),
            r
          );
        }
        generate(e, t) {
          super.generate(e);
          let r = this.getNodeFunction(e),
            i = r.name,
            s = r.type,
            n = e.getCodeFromNode(this, s);
          "" !== i && (n.name = i);
          let a = e.getPropertyName(n);
          return ((n.code = this.getNodeFunction(e).getCode(a) + "\n"),
          "property" === t)
            ? a
            : e.format(`${a}()`, s, t);
        }
      }
      let cn = (e, t = [], r = "") => {
        for (let e = 0; e < t.length; e++) {
          let r = t[e];
          "function" == typeof r && (t[e] = r.functionNode);
        }
        let i = eN(new cs(e, t, r)),
          s = (...e) => i.call(...e);
        return (s.functionNode = i), s;
      };
      class ca extends D {
        static get type() {
          return "ScriptableValueNode";
        }
        constructor(e = null) {
          super(),
            (this._value = e),
            (this._cache = null),
            (this.inputType = null),
            (this.outputType = null),
            (this.events = new u.Qev()),
            (this.isScriptableValueNode = !0);
        }
        get isScriptableOutputNode() {
          return null !== this.outputType;
        }
        set value(e) {
          this._value !== e &&
            (this._cache &&
              "URL" === this.inputType &&
              this.value.value instanceof ArrayBuffer &&
              (URL.revokeObjectURL(this._cache), (this._cache = null)),
            (this._value = e),
            this.events.dispatchEvent({ type: "change" }),
            this.refresh());
        }
        get value() {
          return this._value;
        }
        refresh() {
          this.events.dispatchEvent({ type: "refresh" });
        }
        getValue() {
          let e = this.value;
          if (
            e &&
            null === this._cache &&
            "URL" === this.inputType &&
            e.value instanceof ArrayBuffer
          )
            this._cache = URL.createObjectURL(new Blob([e.value]));
          else if (
            e &&
            null !== e.value &&
            void 0 !== e.value &&
            ((("URL" === this.inputType || "String" === this.inputType) &&
              "string" == typeof e.value) ||
              ("Number" === this.inputType && "number" == typeof e.value) ||
              ("Vector2" === this.inputType && e.value.isVector2) ||
              ("Vector3" === this.inputType && e.value.isVector3) ||
              ("Vector4" === this.inputType && e.value.isVector4) ||
              ("Color" === this.inputType && e.value.isColor) ||
              ("Matrix3" === this.inputType && e.value.isMatrix3) ||
              ("Matrix4" === this.inputType && e.value.isMatrix4))
          )
            return e.value;
          return this._cache || e;
        }
        getNodeType(e) {
          return this.value && this.value.isNode
            ? this.value.getNodeType(e)
            : "float";
        }
        setup() {
          return this.value && this.value.isNode ? this.value : eD();
        }
        serialize(e) {
          super.serialize(e),
            null !== this.value
              ? "ArrayBuffer" === this.inputType
                ? (e.value = A(this.value))
                : (e.value = this.value ? this.value.toJSON(e.meta).uuid : null)
              : (e.value = null),
            (e.inputType = this.inputType),
            (e.outputType = this.outputType);
        }
        deserialize(e) {
          super.deserialize(e);
          let t = null;
          null !== e.value &&
            (t =
              "ArrayBuffer" === e.inputType
                ? E(e.value)
                : "Texture" === e.inputType
                ? e.meta.textures[e.value]
                : e.meta.nodes[e.value] || null),
            (this.value = t),
            (this.inputType = e.inputType),
            (this.outputType = e.outputType);
        }
      }
      let co = eE(ca).setParameterLength(1);
      class cl extends Map {
        get(e, t = null, ...r) {
          if (this.has(e)) return super.get(e);
          if (null !== t) {
            let i = t(...r);
            return this.set(e, i), i;
          }
        }
      }
      class cu {
        constructor(e) {
          this.scriptableNode = e;
        }
        get parameters() {
          return this.scriptableNode.parameters;
        }
        get layout() {
          return this.scriptableNode.getLayout();
        }
        getInputLayout(e) {
          return this.scriptableNode.getInputLayout(e);
        }
        get(e) {
          let t = this.parameters[e];
          return t ? t.getValue() : null;
        }
      }
      let cd = new cl();
      class ch extends D {
        static get type() {
          return "ScriptableNode";
        }
        constructor(e = null, t = {}) {
          super(),
            (this.codeNode = e),
            (this.parameters = t),
            (this._local = new cl()),
            (this._output = co(null)),
            (this._outputs = {}),
            (this._source = this.source),
            (this._method = null),
            (this._object = null),
            (this._value = null),
            (this._needsOutputUpdate = !0),
            (this.onRefresh = this.onRefresh.bind(this)),
            (this.isScriptableNode = !0);
        }
        get source() {
          return this.codeNode ? this.codeNode.code : "";
        }
        setLocal(e, t) {
          return this._local.set(e, t);
        }
        getLocal(e) {
          return this._local.get(e);
        }
        onRefresh() {
          this._refresh();
        }
        getInputLayout(e) {
          for (let t of this.getLayout())
            if (t.inputType && (t.id === e || t.name === e)) return t;
        }
        getOutputLayout(e) {
          for (let t of this.getLayout())
            if (t.outputType && (t.id === e || t.name === e)) return t;
        }
        setOutput(e, t) {
          let r = this._outputs;
          return void 0 === r[e] ? (r[e] = co(t)) : (r[e].value = t), this;
        }
        getOutput(e) {
          return this._outputs[e];
        }
        getParameter(e) {
          return this.parameters[e];
        }
        setParameter(e, t) {
          let r = this.parameters;
          return (
            t && t.isScriptableNode
              ? (this.deleteParameter(e),
                (r[e] = t),
                r[e]
                  .getDefaultOutput()
                  .events.addEventListener("refresh", this.onRefresh))
              : t && t.isScriptableValueNode
              ? (this.deleteParameter(e),
                (r[e] = t),
                r[e].events.addEventListener("refresh", this.onRefresh))
              : void 0 === r[e]
              ? ((r[e] = co(t)),
                r[e].events.addEventListener("refresh", this.onRefresh))
              : (r[e].value = t),
            this
          );
        }
        getValue() {
          return this.getDefaultOutput().getValue();
        }
        deleteParameter(e) {
          let t = this.parameters[e];
          return (
            t &&
              (t.isScriptableNode && (t = t.getDefaultOutput()),
              t.events.removeEventListener("refresh", this.onRefresh)),
            this
          );
        }
        clearParameters() {
          for (let e of Object.keys(this.parameters)) this.deleteParameter(e);
          return (this.needsUpdate = !0), this;
        }
        call(e, ...t) {
          let r = this.getObject()[e];
          if ("function" == typeof r) return r(...t);
        }
        async callAsync(e, ...t) {
          let r = this.getObject()[e];
          if ("function" == typeof r)
            return "AsyncFunction" === r.constructor.name
              ? await r(...t)
              : r(...t);
        }
        getNodeType(e) {
          return this.getDefaultOutputNode().getNodeType(e);
        }
        refresh(e = null) {
          null !== e ? this.getOutput(e).refresh() : this._refresh();
        }
        getObject() {
          if ((this.needsUpdate && this.dispose(), null !== this._object))
            return this._object;
          let e = () => this.refresh(),
            t = (e, t) => this.setOutput(e, t),
            r = new cu(this),
            i = cd.get("THREE"),
            s = cd.get("TSL"),
            n = this.getMethod(),
            a = [r, this._local, cd, e, t, i, s];
          this._object = n(...a);
          let o = this._object.layout;
          if (
            o &&
            (!1 === o.cache && this._local.clear(),
            (this._output.outputType = o.outputType || null),
            Array.isArray(o.elements))
          )
            for (let e of o.elements) {
              let t = e.id || e.name;
              e.inputType &&
                (void 0 === this.getParameter(t) && this.setParameter(t, null),
                (this.getParameter(t).inputType = e.inputType)),
                e.outputType &&
                  (void 0 === this.getOutput(t) && this.setOutput(t, null),
                  (this.getOutput(t).outputType = e.outputType));
            }
          return this._object;
        }
        deserialize(e) {
          for (let t in (super.deserialize(e), this.parameters)) {
            let e = this.parameters[t];
            e.isScriptableNode && (e = e.getDefaultOutput()),
              e.events.addEventListener("refresh", this.onRefresh);
          }
        }
        getLayout() {
          return this.getObject().layout;
        }
        getDefaultOutputNode() {
          let e = this.getDefaultOutput().value;
          return e && e.isNode ? e : eD();
        }
        getDefaultOutput() {
          return this._exec()._output;
        }
        getMethod() {
          if ((this.needsUpdate && this.dispose(), null !== this._method))
            return this._method;
          let e = "layout, init, main, dispose",
            t =
              "var " +
              e +
              "; var output = {};\n" +
              this.codeNode.code +
              "\nreturn { ...output, " +
              e +
              " };";
          return (
            (this._method = Function(
              "parameters",
              "local",
              "global",
              "refresh",
              "setOutput",
              "THREE",
              "TSL",
              t
            )),
            this._method
          );
        }
        dispose() {
          null !== this._method &&
            (this._object &&
              "function" == typeof this._object.dispose &&
              this._object.dispose(),
            (this._method = null),
            (this._object = null),
            (this._source = null),
            (this._value = null),
            (this._needsOutputUpdate = !0),
            (this._output.value = null),
            (this._outputs = {}));
        }
        setup() {
          return this.getDefaultOutputNode();
        }
        getCacheKey(e) {
          let t = [g(this.source), this.getDefaultOutputNode().getCacheKey(e)];
          for (let r in this.parameters)
            t.push(this.parameters[r].getCacheKey(e));
          return m(t);
        }
        set needsUpdate(e) {
          !0 === e && this.dispose();
        }
        get needsUpdate() {
          return this.source !== this._source;
        }
        _exec() {
          return (
            null === this.codeNode ||
              (!0 === this._needsOutputUpdate &&
                ((this._value = this.call("main")),
                (this._needsOutputUpdate = !1)),
              (this._output.value = this._value)),
            this
          );
        }
        _refresh() {
          (this.needsUpdate = !0), this._exec(), this._output.refresh();
        }
      }
      let cc = eE(ch).setParameterLength(1, 2);
      function cp(e) {
        let t,
          r = e.context.getViewZ;
        return void 0 !== r && (t = r(this)), (t || sQ.z).negate();
      }
      let cg = eB(([e, t], r) => r7(e, t, cp(r))),
        cm = eB(([e], t) => {
          let r = cp(t);
          return e.mul(e, r, r).negate().exp().oneMinus();
        }),
        cf = eB(([e, t]) => eK(t.toFloat().mix(tm.rgb, e.toVec3()), tm.a)),
        cy = null,
        cb = null;
      class cx extends D {
        static get type() {
          return "RangeNode";
        }
        constructor(e = eD(), t = eD()) {
          super(), (this.minNode = e), (this.maxNode = t);
        }
        getVectorLength(e) {
          let t = e.getTypeLength(N(this.minNode.value)),
            r = e.getTypeLength(N(this.maxNode.value));
          return t > r ? t : r;
        }
        getNodeType(e) {
          return e.object.count > 1
            ? e.getTypeFromLength(this.getVectorLength(e))
            : "float";
        }
        setup(e) {
          let t = e.object,
            r = null;
          if (t.count > 1) {
            let i = this.minNode.value,
              s = this.maxNode.value,
              n = e.getTypeLength(N(i)),
              a = e.getTypeLength(N(s));
            (cy = cy || new u.IUQ()),
              (cb = cb || new u.IUQ()),
              cy.setScalar(0),
              cb.setScalar(0),
              1 === n
                ? cy.setScalar(i)
                : i.isColor
                ? cy.set(i.r, i.g, i.b, 1)
                : cy.set(i.x, i.y, i.z || 0, i.w || 0),
              1 === a
                ? cb.setScalar(s)
                : s.isColor
                ? cb.set(s.r, s.g, s.b, 1)
                : cb.set(s.x, s.y, s.z || 0, s.w || 0);
            let o = 4 * t.count,
              l = new Float32Array(o);
            for (let e = 0; e < o; e++) {
              let t = e % 4,
                r = cy.getComponent(t),
                i = cb.getComponent(t);
              l[e] = u.cj9.lerp(r, i, Math.random());
            }
            let d = this.getNodeType(e);
            if (t.count <= 4096)
              r = su(l, "vec4", t.count).element(aP).convert(d);
            else {
              let t = new u.uWO(l, 4);
              e.geometry.setAttribute("__range" + this.id, t),
                (r = ik(t).convert(d));
            }
          } else r = eD(0);
          return r;
        }
      }
      let cT = eE(cx).setParameterLength(2);
      class c_ extends D {
        static get type() {
          return "ComputeBuiltinNode";
        }
        constructor(e, t) {
          super(t), (this._builtinName = e);
        }
        getHash(e) {
          return this.getBuiltinName(e);
        }
        getNodeType() {
          return this.nodeType;
        }
        setBuiltinName(e) {
          return (this._builtinName = e), this;
        }
        getBuiltinName() {
          return this._builtinName;
        }
        hasBuiltin(e) {
          return e.hasBuiltin(this._builtinName);
        }
        generate(e, t) {
          let r = this.getBuiltinName(e),
            i = this.getNodeType(e);
          return "compute" === e.shaderStage
            ? e.format(r, i, t)
            : (console.warn(
                `ComputeBuiltinNode: Compute built-in value ${r} can not be accessed in the ${e.shaderStage} stage`
              ),
              e.generateConst(i));
        }
        serialize(e) {
          super.serialize(e),
            (e.global = this.global),
            (e._builtinName = this._builtinName);
        }
        deserialize(e) {
          super.deserialize(e),
            (this.global = e.global),
            (this._builtinName = e._builtinName);
        }
      }
      let cv = (e, t) => eN(new c_(e, t)),
        cN = cv("numWorkgroups", "uvec3"),
        cS = cv("workgroupId", "uvec3"),
        cR = cv("globalId", "uvec3"),
        cA = cv("localId", "uvec3"),
        cE = cv("subgroupSize", "uint");
      class cw extends D {
        constructor(e) {
          super(), (this.scope = e);
        }
        generate(e) {
          let { scope: t } = this,
            { renderer: r } = e;
          !0 === r.backend.isWebGLBackend
            ? e.addFlowCode(`	// ${t}Barrier 
`)
            : e.addLineFlowCode(`${t}Barrier()`, this);
        }
      }
      let cC = eE(cw);
      class cM extends V {
        constructor(e, t) {
          super(e, t), (this.isWorkgroupInfoElementNode = !0);
        }
        generate(e, t) {
          let r,
            i = e.context.assign;
          if (((r = super.generate(e)), !0 !== i)) {
            let i = this.getNodeType(e);
            r = e.format(r, i, t);
          }
          return r;
        }
      }
      class cB extends D {
        constructor(e, t, r = 0) {
          super(t),
            (this.bufferType = t),
            (this.bufferCount = r),
            (this.isWorkgroupInfoNode = !0),
            (this.elementType = t),
            (this.scope = e),
            (this.name = "");
        }
        setName(e) {
          return (this.name = e), this;
        }
        label(e) {
          return (
            console.warn(
              'THREE.TSL: "label()" has been deprecated. Use "setName()" instead.'
            ),
            this.setName(e)
          );
        }
        setScope(e) {
          return (this.scope = e), this;
        }
        getElementType() {
          return this.elementType;
        }
        getInputType() {
          return `${this.scope}Array`;
        }
        element(e) {
          return eN(new cM(this, e));
        }
        generate(e) {
          let t =
            "" !== this.name ? this.name : `${this.scope}Array_${this.id}`;
          return e.getScopedArray(
            t,
            this.scope.toLowerCase(),
            this.bufferType,
            this.bufferCount
          );
        }
      }
      class cL extends D {
        static get type() {
          return "AtomicFunctionNode";
        }
        constructor(e, t, r) {
          super("uint"),
            (this.method = e),
            (this.pointerNode = t),
            (this.valueNode = r),
            (this.parents = !0);
        }
        getInputType(e) {
          return this.pointerNode.getNodeType(e);
        }
        getNodeType(e) {
          return this.getInputType(e);
        }
        generate(e) {
          let t = e.getNodeProperties(this),
            r = t.parents,
            i = this.method,
            s = this.getNodeType(e),
            n = this.getInputType(e),
            a = this.pointerNode,
            o = this.valueNode,
            l = [];
          l.push(`&${a.build(e, n)}`), null !== o && l.push(o.build(e, n));
          let u = `${e.getMethod(i, s)}( ${l.join(", ")} )`;
          if (!(r && 1 === r.length && !0 === r[0].isStackNode))
            return (
              void 0 === t.constNode && (t.constNode = i0(u, s).toConst()),
              t.constNode.build(e)
            );
          e.addLineFlowCode(u, this);
        }
      }
      (cL.ATOMIC_LOAD = "atomicLoad"),
        (cL.ATOMIC_STORE = "atomicStore"),
        (cL.ATOMIC_ADD = "atomicAdd"),
        (cL.ATOMIC_SUB = "atomicSub"),
        (cL.ATOMIC_MAX = "atomicMax"),
        (cL.ATOMIC_MIN = "atomicMin"),
        (cL.ATOMIC_AND = "atomicAnd"),
        (cL.ATOMIC_OR = "atomicOr"),
        (cL.ATOMIC_XOR = "atomicXor");
      let cF = eE(cL),
        cP = (e, t, r) => cF(e, t, r).toStack();
      function cI(e) {
        let t = (n = n || new WeakMap()).get(e);
        return void 0 === t && n.set(e, (t = {})), t;
      }
      function cU(e) {
        let t = cI(e);
        return (
          t.shadowMatrix ||
          (t.shadowMatrix = tL("mat4")
            .setGroup(tC)
            .onRenderUpdate(
              (t) => (
                (!0 !== e.castShadow || !1 === t.renderer.shadowMap.enabled) &&
                  e.shadow.updateMatrices(e),
                e.shadow.matrix
              )
            ))
        );
      }
      function cD(e, t = sX) {
        let r = cU(e).mul(t);
        return r.xyz.div(r.w);
      }
      function cV(e) {
        let t = cI(e);
        return (
          t.position ||
          (t.position = tL(new u.Pq0())
            .setGroup(tC)
            .onRenderUpdate((t, r) =>
              r.value.setFromMatrixPosition(e.matrixWorld)
            ))
        );
      }
      function cO(e) {
        let t = cI(e);
        return (
          t.targetPosition ||
          (t.targetPosition = tL(new u.Pq0())
            .setGroup(tC)
            .onRenderUpdate((t, r) =>
              r.value.setFromMatrixPosition(e.target.matrixWorld)
            ))
        );
      }
      function cG(e) {
        let t = cI(e);
        return (
          t.viewPosition ||
          (t.viewPosition = tL(new u.Pq0())
            .setGroup(tC)
            .onRenderUpdate(({ camera: t }, r) => {
              (r.value = r.value || new u.Pq0()),
                r.value.setFromMatrixPosition(e.matrixWorld),
                r.value.applyMatrix4(t.matrixWorldInverse);
            }))
        );
      }
      let ck = (e) => sT.transformDirection(cV(e).sub(cO(e))),
        cz = (e, t) => {
          for (let r of t)
            if (r.isAnalyticLightNode && r.light.id === e) return r;
          return null;
        },
        c$ = new WeakMap(),
        cW = [];
      class cH extends D {
        static get type() {
          return "LightsNode";
        }
        constructor() {
          super("vec3"),
            (this.totalDiffuseNode = e6("vec3", "totalDiffuse")),
            (this.totalSpecularNode = e6("vec3", "totalSpecular")),
            (this.outgoingLightNode = e6("vec3", "outgoingLight")),
            (this._lights = []),
            (this._lightNodes = null),
            (this._lightNodesHash = null),
            (this.global = !0);
        }
        customCacheKey() {
          let e = this._lights;
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            if (
              (cW.push(r.id), cW.push(+!!r.castShadow), !0 === r.isSpotLight)
            ) {
              let e = null !== r.map ? r.map.id : -1,
                t = r.colorNode ? r.colorNode.getCacheKey() : -1;
              cW.push(e, t);
            }
          }
          let t = m(cW);
          return (cW.length = 0), t;
        }
        getHash(e) {
          if (null === this._lightNodesHash) {
            null === this._lightNodes && this.setupLightsNode(e);
            let t = [];
            for (let e of this._lightNodes) t.push(e.getSelf().getHash());
            this._lightNodesHash = "lights-" + t.join(",");
          }
          return this._lightNodesHash;
        }
        analyze(e) {
          let t = e.getNodeProperties(this);
          for (let r of t.nodes) r.build(e);
          t.outputNode.build(e);
        }
        setupLightsNode(e) {
          let t = [],
            r = this._lightNodes,
            i = this._lights.sort((e, t) => e.id - t.id),
            s = e.renderer.library;
          for (let e of i)
            if (e.isNode) t.push(eN(e));
            else {
              let i = null;
              if ((null !== r && (i = cz(e.id, r)), null === i)) {
                let r = s.getLightNodeClass(e.constructor);
                if (null === r) {
                  console.warn(
                    `LightsNode.setupNodeLights: Light node not found for ${e.constructor.name}`
                  );
                  continue;
                }
                let i = null;
                c$.has(e)
                  ? (i = c$.get(e))
                  : ((i = eN(new r(e))), c$.set(e, i)),
                  t.push(i);
              }
            }
          this._lightNodes = t;
        }
        setupDirectLight(e, t, r) {
          let { lightingModel: i, reflectedLight: s } = e.context;
          i.direct({ ...r, lightNode: t, reflectedLight: s }, e);
        }
        setupDirectRectAreaLight(e, t, r) {
          let { lightingModel: i, reflectedLight: s } = e.context;
          i.directRectArea({ ...r, lightNode: t, reflectedLight: s }, e);
        }
        setupLights(e, t) {
          for (let r of t) r.build(e);
        }
        getLightNodes(e) {
          return (
            null === this._lightNodes && this.setupLightsNode(e),
            this._lightNodes
          );
        }
        setup(e) {
          let t = e.lightsNode;
          e.lightsNode = this;
          let r = this.outgoingLightNode,
            i = e.context,
            s = i.lightingModel,
            n = e.getNodeProperties(this);
          if (s) {
            let { totalDiffuseNode: t, totalSpecularNode: a } = this;
            (i.outgoingLight = r), (n.nodes = e.addStack().nodes), s.start(e);
            let { backdrop: o, backdropAlpha: l } = i,
              {
                directDiffuse: u,
                directSpecular: d,
                indirectDiffuse: h,
                indirectSpecular: c,
              } = i.reflectedLight,
              p = u.add(h);
            null !== o &&
              ((p = null !== l ? eH(l.mix(p, o)) : eH(o)),
              (i.material.transparent = !0)),
              t.assign(p),
              a.assign(d.add(c)),
              r.assign(t.add(a)),
              s.finish(e),
              (r = r.bypass(e.removeStack()));
          } else n.nodes = [];
          return (e.lightsNode = t), r;
        }
        setLights(e) {
          return (
            (this._lights = e),
            (this._lightNodes = null),
            (this._lightNodesHash = null),
            this
          );
        }
        getLights() {
          return this._lights;
        }
        get hasLights() {
          return this._lights.length > 0;
        }
      }
      class cq extends D {
        static get type() {
          return "ShadowBaseNode";
        }
        constructor(e) {
          super(),
            (this.light = e),
            (this.updateBeforeType = C.RENDER),
            (this.isShadowBaseNode = !0);
        }
        setupShadowPosition({ context: e, material: t }) {
          cj.assign(
            t.receivedShadowPositionNode || e.shadowPositionWorld || sX
          );
        }
      }
      let cj = e6("vec3", "shadowPositionWorld"),
        cX = new WeakMap(),
        cK = eB(({ depthTexture: e, shadowCoord: t, depthLayer: r }) => {
          let i = sa(e, t.xy).setName("t_basic");
          return e.isArrayTexture && (i = i.depth(r)), i.compare(t.z);
        }),
        cQ = eB(
          ({ depthTexture: e, shadowCoord: t, shadow: r, depthLayer: i }) => {
            let s = (t, r) => {
                let s = sa(e, t);
                return e.isArrayTexture && (s = s.depth(i)), s.compare(r);
              },
              n = nT("mapSize", "vec2", r).setGroup(tC),
              a = nT("radius", "float", r).setGroup(tC),
              o = ek(1).div(n),
              l = o.x.negate().mul(a),
              u = o.y.negate().mul(a),
              d = o.x.mul(a),
              h = o.y.mul(a),
              c = l.div(2),
              p = u.div(2),
              g = d.div(2),
              m = h.div(2);
            return tk(
              s(t.xy.add(ek(l, u)), t.z),
              s(t.xy.add(ek(0, u)), t.z),
              s(t.xy.add(ek(d, u)), t.z),
              s(t.xy.add(ek(c, p)), t.z),
              s(t.xy.add(ek(0, p)), t.z),
              s(t.xy.add(ek(g, p)), t.z),
              s(t.xy.add(ek(l, 0)), t.z),
              s(t.xy.add(ek(c, 0)), t.z),
              s(t.xy, t.z),
              s(t.xy.add(ek(g, 0)), t.z),
              s(t.xy.add(ek(d, 0)), t.z),
              s(t.xy.add(ek(c, m)), t.z),
              s(t.xy.add(ek(0, m)), t.z),
              s(t.xy.add(ek(g, m)), t.z),
              s(t.xy.add(ek(l, h)), t.z),
              s(t.xy.add(ek(0, h)), t.z),
              s(t.xy.add(ek(d, h)), t.z)
            ).mul(1 / 17);
          }
        ),
        cY = eB(
          ({ depthTexture: e, shadowCoord: t, shadow: r, depthLayer: i }) => {
            let s = (t, r) => {
                let s = sa(e, t);
                return e.isArrayTexture && (s = s.depth(i)), s.compare(r);
              },
              n = nT("mapSize", "vec2", r).setGroup(tC),
              a = ek(1).div(n),
              o = a.x,
              l = a.y,
              u = t.xy,
              d = r_(u.mul(n).add(0.5));
            return (
              u.subAssign(d.mul(a)),
              tk(
                s(u, t.z),
                s(u.add(ek(o, 0)), t.z),
                s(u.add(ek(0, l)), t.z),
                s(u.add(a), t.z),
                r6(
                  s(u.add(ek(o.negate(), 0)), t.z),
                  s(u.add(ek(o.mul(2), 0)), t.z),
                  d.x
                ),
                r6(
                  s(u.add(ek(o.negate(), l)), t.z),
                  s(u.add(ek(o.mul(2), l)), t.z),
                  d.x
                ),
                r6(
                  s(u.add(ek(0, l.negate())), t.z),
                  s(u.add(ek(0, l.mul(2))), t.z),
                  d.y
                ),
                r6(
                  s(u.add(ek(o, l.negate())), t.z),
                  s(u.add(ek(o, l.mul(2))), t.z),
                  d.y
                ),
                r6(
                  r6(
                    s(u.add(ek(o.negate(), l.negate())), t.z),
                    s(u.add(ek(o.mul(2), l.negate())), t.z),
                    d.x
                  ),
                  r6(
                    s(u.add(ek(o.negate(), l.mul(2))), t.z),
                    s(u.add(ek(o.mul(2), l.mul(2))), t.z),
                    d.x
                  ),
                  d.y
                )
              ).mul(1 / 9)
            );
          }
        ),
        cZ = eB(({ depthTexture: e, shadowCoord: t, depthLayer: r }) => {
          let i = eD(1).toVar(),
            s = sa(e).sample(t.xy);
          e.isArrayTexture && (s = s.depth(r)), (s = s.rg);
          let n = rq(t.z, s.x);
          return (
            eP(n.notEqual(eD(1)), () => {
              let e = t.z.sub(s.x),
                r = rH(0, s.y.mul(s.y)),
                a = r.div(r.add(e.mul(e)));
              (a = r8(tz(a, 0.3).div(0.95 - 0.3))), i.assign(r8(rH(n, a)));
            }),
            i
          );
        }),
        cJ = eB(([e, t, r]) => {
          let i = sX.sub(e).length();
          return (i = i.sub(t).div(r.sub(t))).saturate();
        }),
        c0 = (e) => {
          let t = cX.get(e);
          if (void 0 === t) {
            let r = e.isPointLight
              ? ((e) => {
                  let t = e.shadow.camera,
                    r = nT("near", "float", t).setGroup(tC),
                    i = nT("far", "float", t).setGroup(tC);
                  return cJ(sw(e), r, i);
                })(e)
              : null;
            ((t = new oO()).colorNode = eK(0, 0, 0, 1)),
              (t.depthNode = r),
              (t.isShadowPassMaterial = !0),
              (t.name = "ShadowMaterial"),
              (t.fog = !1),
              cX.set(e, t);
          }
          return t;
        },
        c1 = new u3(),
        c2 = [],
        c3 = (e, t, r, i) => {
          (c2[0] = e), (c2[1] = t);
          let s = c1.get(c2);
          return (
            (void 0 === s || s.shadowType !== r || s.useVelocity !== i) &&
              (((s = (s, n, a, o, l, d, ...h) => {
                (!0 === s.castShadow || (s.receiveShadow && r === u.RyA)) &&
                  (i && (R(s).useVelocity = !0),
                  s.onBeforeShadow(e, s, a, t.camera, o, n.overrideMaterial, d),
                  e.renderObject(s, n, a, o, l, d, ...h),
                  s.onAfterShadow(e, s, a, t.camera, o, n.overrideMaterial, d));
              }).shadowType = r),
              (s.useVelocity = i),
              c1.set(c2, s)),
            (c2[0] = null),
            (c2[1] = null),
            s
          );
        },
        c4 = eB(
          ({
            samples: e,
            radius: t,
            size: r,
            shadowPass: i,
            depthLayer: s,
          }) => {
            let n = eD(0).toVar("meanVertical"),
              a = eD(0).toVar("squareMeanVertical"),
              o = e.lessThanEqual(eD(1)).select(eD(0), eD(2).div(e.sub(1))),
              l = e.lessThanEqual(eD(1)).select(eD(0), eD(-1));
            aJ(
              { start: eV(0), end: eV(e), type: "int", condition: "<" },
              ({ i: e }) => {
                let u = l.add(eD(e).mul(o)),
                  d = i.sample(tk(os.xy, ek(0, u).mul(t)).div(r));
                i.value.isArrayTexture && (d = d.depth(s)),
                  (d = d.x),
                  n.addAssign(d),
                  a.addAssign(d.mul(d));
              }
            ),
              n.divAssign(e),
              a.divAssign(e);
            let u = rf(a.sub(n.mul(n)));
            return ek(n, u);
          }
        ),
        c6 = eB(
          ({
            samples: e,
            radius: t,
            size: r,
            shadowPass: i,
            depthLayer: s,
          }) => {
            let n = eD(0).toVar("meanHorizontal"),
              a = eD(0).toVar("squareMeanHorizontal"),
              o = e.lessThanEqual(eD(1)).select(eD(0), eD(2).div(e.sub(1))),
              l = e.lessThanEqual(eD(1)).select(eD(0), eD(-1));
            aJ(
              { start: eV(0), end: eV(e), type: "int", condition: "<" },
              ({ i: e }) => {
                let u = l.add(eD(e).mul(o)),
                  d = i.sample(tk(os.xy, ek(u, 0).mul(t)).div(r));
                i.value.isArrayTexture && (d = d.depth(s)),
                  n.addAssign(d.x),
                  a.addAssign(tk(d.y.mul(d.y), d.x.mul(d.x)));
              }
            ),
              n.divAssign(e),
              a.divAssign(e);
            let u = rf(a.sub(n.mul(n)));
            return ek(n, u);
          }
        ),
        c8 = [cK, cQ, cY, cZ],
        c5 = new hc();
      class c9 extends cq {
        static get type() {
          return "ShadowNode";
        }
        constructor(e, t = null) {
          super(e),
            (this.shadow = t || e.shadow),
            (this.shadowMap = null),
            (this.vsmShadowMapVertical = null),
            (this.vsmShadowMapHorizontal = null),
            (this.vsmMaterialVertical = null),
            (this.vsmMaterialHorizontal = null),
            (this._node = null),
            (this._cameraFrameId = new WeakMap()),
            (this.isShadowNode = !0),
            (this.depthLayer = 0);
        }
        setupShadowFilter(
          e,
          {
            filterFn: t,
            depthTexture: r,
            shadowCoord: i,
            shadow: s,
            depthLayer: n,
          }
        ) {
          let a = i.x
              .greaterThanEqual(0)
              .and(i.x.lessThanEqual(1))
              .and(i.y.greaterThanEqual(0))
              .and(i.y.lessThanEqual(1))
              .and(i.z.lessThanEqual(1)),
            o = t({
              depthTexture: r,
              shadowCoord: i,
              shadow: s,
              depthLayer: n,
            });
          return a.select(o, eD(1));
        }
        setupShadowCoord(e, t) {
          let r,
            { shadow: i } = this,
            { renderer: s } = e,
            n = nT("bias", "float", i).setGroup(tC),
            a = t;
          if (i.camera.isOrthographicCamera || !0 !== s.logarithmicDepthBuffer)
            (r = (a = a.xyz.div(a.w)).z),
              s.coordinateSystem === u.i7u && (r = r.mul(2).sub(1));
          else {
            let e = a.w;
            a = a.xy.div(e);
            let t = nT("near", "float", i.camera).setGroup(tC),
              s = nT("far", "float", i.camera).setGroup(tC);
            r = o_(e.negate(), t, s);
          }
          return eH(a.x, a.y.oneMinus(), r.add(n));
        }
        getShadowFilterFn(e) {
          return c8[e];
        }
        setupRenderTarget(e, t) {
          let r = new u.VCu(e.mapSize.width, e.mapSize.height);
          (r.name = "ShadowDepthTexture"), (r.compareFunction = u.vim);
          let i = t.createRenderTarget(e.mapSize.width, e.mapSize.height);
          return (
            (i.texture.name = "ShadowMap"),
            (i.texture.type = e.mapType),
            (i.depthTexture = r),
            { shadowMap: i, depthTexture: r }
          );
        }
        setupShadow(e) {
          let { renderer: t } = e,
            { light: r, shadow: i } = this,
            s = t.shadowMap.type,
            { depthTexture: n, shadowMap: a } = this.setupRenderTarget(i, e);
          if (
            (i.camera.updateProjectionMatrix(),
            s === u.RyA && !0 !== i.isPointLightShadow)
          ) {
            (n.compareFunction = null),
              a.depth > 1
                ? (a._vsmShadowMapVertical ||
                    ((a._vsmShadowMapVertical = e.createRenderTarget(
                      i.mapSize.width,
                      i.mapSize.height,
                      {
                        format: u.paN,
                        type: u.ix0,
                        depth: a.depth,
                        depthBuffer: !1,
                      }
                    )),
                    (a._vsmShadowMapVertical.texture.name = "VSMVertical")),
                  (this.vsmShadowMapVertical = a._vsmShadowMapVertical),
                  a._vsmShadowMapHorizontal ||
                    ((a._vsmShadowMapHorizontal = e.createRenderTarget(
                      i.mapSize.width,
                      i.mapSize.height,
                      {
                        format: u.paN,
                        type: u.ix0,
                        depth: a.depth,
                        depthBuffer: !1,
                      }
                    )),
                    (a._vsmShadowMapHorizontal.texture.name = "VSMHorizontal")),
                  (this.vsmShadowMapHorizontal = a._vsmShadowMapHorizontal))
                : ((this.vsmShadowMapVertical = e.createRenderTarget(
                    i.mapSize.width,
                    i.mapSize.height,
                    { format: u.paN, type: u.ix0, depthBuffer: !1 }
                  )),
                  (this.vsmShadowMapHorizontal = e.createRenderTarget(
                    i.mapSize.width,
                    i.mapSize.height,
                    { format: u.paN, type: u.ix0, depthBuffer: !1 }
                  )));
            let t = sa(n);
            n.isArrayTexture && (t = t.depth(this.depthLayer));
            let r = sa(this.vsmShadowMapVertical.texture);
            n.isArrayTexture && (r = r.depth(this.depthLayer));
            let s = nT("blurSamples", "float", i).setGroup(tC),
              o = nT("radius", "float", i).setGroup(tC),
              l = nT("mapSize", "vec2", i).setGroup(tC),
              d =
                this.vsmMaterialVertical ||
                (this.vsmMaterialVertical = new oO());
            (d.fragmentNode = c4({
              samples: s,
              radius: o,
              size: l,
              shadowPass: t,
              depthLayer: this.depthLayer,
            }).context(e.getSharedContext())),
              (d.name = "VSMVertical"),
              ((d =
                this.vsmMaterialHorizontal ||
                (this.vsmMaterialHorizontal = new oO())).fragmentNode = c6({
                samples: s,
                radius: o,
                size: l,
                shadowPass: r,
                depthLayer: this.depthLayer,
              }).context(e.getSharedContext())),
              (d.name = "VSMHorizontal");
          }
          let o = nT("intensity", "float", i).setGroup(tC),
            l = nT("normalBias", "float", i).setGroup(tC),
            d = cU(r).mul(cj.add(s9.mul(l))),
            h = this.setupShadowCoord(e, d),
            c =
              i.filterNode || this.getShadowFilterFn(t.shadowMap.type) || null;
          if (null === c)
            throw Error(
              "THREE.WebGPURenderer: Shadow map type not supported yet."
            );
          let p =
              s === u.RyA && !0 !== i.isPointLightShadow
                ? this.vsmShadowMapHorizontal.texture
                : n,
            g = this.setupShadowFilter(e, {
              filterFn: c,
              shadowTexture: a.texture,
              depthTexture: p,
              shadowCoord: h,
              shadow: i,
              depthLayer: this.depthLayer,
            }),
            m = sa(a.texture, h);
          n.isArrayTexture && (m = m.depth(this.depthLayer));
          let f = r6(1, g.rgb.mix(m, 1), o.mul(m.a)).toVar();
          return (this.shadowMap = a), (this.shadow.map = a), f;
        }
        setup(e) {
          if (!1 !== e.renderer.shadowMap.enabled)
            return eB(() => {
              let t = this._node;
              return (
                this.setupShadowPosition(e),
                null === t && (this._node = t = this.setupShadow(e)),
                e.material.shadowNode &&
                  console.warn(
                    'THREE.NodeMaterial: ".shadowNode" is deprecated. Use ".castShadowNode" instead.'
                  ),
                e.material.receivedShadowNode &&
                  (t = e.material.receivedShadowNode(t)),
                t
              );
            })();
        }
        renderShadow(e) {
          let { shadow: t, shadowMap: r, light: i } = this,
            { renderer: s, scene: n } = e;
          t.updateMatrices(i),
            r.setSize(t.mapSize.width, t.mapSize.height, r.depth),
            s.render(n, t.camera);
        }
        updateShadow(e) {
          var t, r, i;
          let { shadowMap: s, light: n, shadow: o } = this,
            { renderer: l, scene: d, camera: h } = e,
            c = l.shadowMap.type,
            p = s.depthTexture.version;
          this._depthVersionCached = p;
          let g = o.camera.layers.mask;
          (0xfffffffe & o.camera.layers.mask) == 0 &&
            (o.camera.layers.mask = h.layers.mask);
          let m = l.getRenderObjectFunction(),
            f = l.getMRT(),
            y = !!f && f.has("velocity");
          (t = (function (e, t = {}) {
            return (
              (t.toneMapping = e.toneMapping),
              (t.toneMappingExposure = e.toneMappingExposure),
              (t.outputColorSpace = e.outputColorSpace),
              (t.renderTarget = e.getRenderTarget()),
              (t.activeCubeFace = e.getActiveCubeFace()),
              (t.activeMipmapLevel = e.getActiveMipmapLevel()),
              (t.renderObjectFunction = e.getRenderObjectFunction()),
              (t.pixelRatio = e.getPixelRatio()),
              (t.mrt = e.getMRT()),
              (t.clearColor = e.getClearColor(t.clearColor || new u.Q1f())),
              (t.clearAlpha = e.getClearAlpha()),
              (t.autoClear = e.autoClear),
              (t.scissorTest = e.getScissorTest()),
              t
            );
          })(l, (t = a))),
            l.setMRT(null),
            l.setRenderObjectFunction(null),
            l.setClearColor(0, 1),
            (l.autoClear = !0),
            (r = (function (e, t = {}) {
              return (
                (t.background = e.background),
                (t.backgroundNode = e.backgroundNode),
                (t.overrideMaterial = e.overrideMaterial),
                t
              );
            })(d, (r = t))),
            (d.background = null),
            (d.backgroundNode = null),
            (d.overrideMaterial = null),
            (a = r),
            (d.overrideMaterial = c0(n)),
            l.setRenderObjectFunction(c3(l, o, c, y)),
            l.setClearColor(0, 0),
            l.setRenderTarget(s),
            this.renderShadow(e),
            l.setRenderObjectFunction(m),
            c === u.RyA && !0 !== o.isPointLightShadow && this.vsmPass(l),
            (o.camera.layers.mask = g),
            (l.toneMapping = (i = a).toneMapping),
            (l.toneMappingExposure = i.toneMappingExposure),
            (l.outputColorSpace = i.outputColorSpace),
            l.setRenderTarget(
              i.renderTarget,
              i.activeCubeFace,
              i.activeMipmapLevel
            ),
            l.setRenderObjectFunction(i.renderObjectFunction),
            l.setPixelRatio(i.pixelRatio),
            l.setMRT(i.mrt),
            l.setClearColor(i.clearColor, i.clearAlpha),
            (l.autoClear = i.autoClear),
            l.setScissorTest(i.scissorTest),
            (d.background = i.background),
            (d.backgroundNode = i.backgroundNode),
            (d.overrideMaterial = i.overrideMaterial);
        }
        vsmPass(e) {
          let { shadow: t } = this,
            r = this.shadowMap.depth;
          this.vsmShadowMapVertical.setSize(
            t.mapSize.width,
            t.mapSize.height,
            r
          ),
            this.vsmShadowMapHorizontal.setSize(
              t.mapSize.width,
              t.mapSize.height,
              r
            ),
            e.setRenderTarget(this.vsmShadowMapVertical),
            (c5.material = this.vsmMaterialVertical),
            c5.render(e),
            e.setRenderTarget(this.vsmShadowMapHorizontal),
            (c5.material = this.vsmMaterialHorizontal),
            c5.render(e);
        }
        dispose() {
          this.shadowMap.dispose(),
            (this.shadowMap = null),
            null !== this.vsmShadowMapVertical &&
              (this.vsmShadowMapVertical.dispose(),
              (this.vsmShadowMapVertical = null),
              this.vsmMaterialVertical.dispose(),
              (this.vsmMaterialVertical = null)),
            null !== this.vsmShadowMapHorizontal &&
              (this.vsmShadowMapHorizontal.dispose(),
              (this.vsmShadowMapHorizontal = null),
              this.vsmMaterialHorizontal.dispose(),
              (this.vsmMaterialHorizontal = null)),
            super.dispose();
        }
        updateBefore(e) {
          let { shadow: t } = this,
            r = t.needsUpdate || t.autoUpdate;
          r &&
            (this._cameraFrameId[e.camera] === e.frameId && (r = !1),
            (this._cameraFrameId[e.camera] = e.frameId)),
            r &&
              (this.updateShadow(e),
              this.shadowMap.depthTexture.version ===
                this._depthVersionCached && (t.needsUpdate = !1));
        }
      }
      let c7 = (e, t) => eN(new c9(e, t)),
        pe = new u.Q1f(),
        pt = eB(([e, t]) => {
          let r = e.toVar(),
            i = rw(r),
            s = tW(1, rH(i.x, rH(i.y, i.z)));
          i.mulAssign(s), r.mulAssign(s.mul(t.mul(2).oneMinus()));
          let n = ek(r.xy).toVar(),
            a = t.mul(1.5).oneMinus();
          return (
            eP(i.z.greaterThanEqual(a), () => {
              eP(r.z.greaterThan(0), () => {
                n.x.assign(tz(4, r.x));
              });
            })
              .ElseIf(i.x.greaterThanEqual(a), () => {
                let e = rC(r.x);
                n.x.assign(r.z.mul(e).add(e.mul(2)));
              })
              .ElseIf(i.y.greaterThanEqual(a), () => {
                let e = rC(r.y);
                n.x.assign(r.x.add(e.mul(2)).add(2)),
                  n.y.assign(r.z.mul(e).sub(2));
              }),
            ek(0.125, 0.25).mul(n).add(ek(0.375, 0.75)).flipY()
          );
        }).setLayout({
          name: "cubeToUV",
          type: "vec2",
          inputs: [
            { name: "pos", type: "vec3" },
            { name: "texelSizeY", type: "float" },
          ],
        }),
        pr = eB(({ depthTexture: e, bd3D: t, dp: r, texelSize: i }) =>
          sa(e, pt(t, i.y)).compare(r)
        ),
        pi = eB(
          ({ depthTexture: e, bd3D: t, dp: r, texelSize: i, shadow: s }) => {
            let n = nT("radius", "float", s).setGroup(tC),
              a = ek(-1, 1).mul(n).mul(i.y);
            return sa(e, pt(t.add(a.xyy), i.y))
              .compare(r)
              .add(sa(e, pt(t.add(a.yyy), i.y)).compare(r))
              .add(sa(e, pt(t.add(a.xyx), i.y)).compare(r))
              .add(sa(e, pt(t.add(a.yyx), i.y)).compare(r))
              .add(sa(e, pt(t, i.y)).compare(r))
              .add(sa(e, pt(t.add(a.xxy), i.y)).compare(r))
              .add(sa(e, pt(t.add(a.yxy), i.y)).compare(r))
              .add(sa(e, pt(t.add(a.xxx), i.y)).compare(r))
              .add(sa(e, pt(t.add(a.yxx), i.y)).compare(r))
              .mul(1 / 9);
          }
        ),
        ps = eB(
          ({ filterFn: e, depthTexture: t, shadowCoord: r, shadow: i }) => {
            let s = r.xyz.toVar(),
              n = s.length(),
              a = tL("float")
                .setGroup(tC)
                .onRenderUpdate(() => i.camera.near),
              o = tL("float")
                .setGroup(tC)
                .onRenderUpdate(() => i.camera.far),
              l = nT("bias", "float", i).setGroup(tC),
              u = tL(i.mapSize).setGroup(tC),
              d = eD(1).toVar();
            return (
              eP(
                n.sub(o).lessThanEqual(0).and(n.sub(a).greaterThanEqual(0)),
                () => {
                  let r = n.sub(a).div(o.sub(a)).toVar();
                  r.addAssign(l);
                  let h = s.normalize(),
                    c = ek(1).div(u.mul(ek(4, 2)));
                  d.assign(
                    e({
                      depthTexture: t,
                      bd3D: h,
                      dp: r,
                      texelSize: c,
                      shadow: i,
                    })
                  );
                }
              ),
              d
            );
          }
        ),
        pn = new u.IUQ(),
        pa = new u.I9Y(),
        po = new u.I9Y();
      class pl extends c9 {
        static get type() {
          return "PointShadowNode";
        }
        constructor(e, t = null) {
          super(e, t);
        }
        getShadowFilterFn(e) {
          return e === u.bTm ? pr : pi;
        }
        setupShadowCoord(e, t) {
          return t;
        }
        setupShadowFilter(
          e,
          {
            filterFn: t,
            shadowTexture: r,
            depthTexture: i,
            shadowCoord: s,
            shadow: n,
          }
        ) {
          return ps({
            filterFn: t,
            shadowTexture: r,
            depthTexture: i,
            shadowCoord: s,
            shadow: n,
          });
        }
        renderShadow(e) {
          let { shadow: t, shadowMap: r, light: i } = this,
            { renderer: s, scene: n } = e,
            a = t.getFrameExtents();
          po.copy(t.mapSize),
            po.multiply(a),
            r.setSize(po.width, po.height),
            pa.copy(t.mapSize);
          let o = s.autoClear,
            l = s.getClearColor(pe),
            u = s.getClearAlpha();
          (s.autoClear = !1),
            s.setClearColor(t.clearColor, t.clearAlpha),
            s.clear();
          let d = t.getViewportCount();
          for (let e = 0; e < d; e++) {
            let a = t.getViewport(e),
              o = pa.x * a.x,
              l = po.y - pa.y - pa.y * a.y;
            pn.set(o, l, pa.x * a.z, pa.y * a.w),
              r.viewport.copy(pn),
              t.updateMatrices(i, e),
              s.render(n, t.camera);
          }
          (s.autoClear = o), s.setClearColor(l, u);
        }
      }
      let pu = (e, t) => eN(new pl(e, t));
      class pd extends a8 {
        static get type() {
          return "AnalyticLightNode";
        }
        constructor(e = null) {
          super(),
            (this.light = e),
            (this.color = new u.Q1f()),
            (this.colorNode =
              (e && e.colorNode) || tL(this.color).setGroup(tC)),
            (this.baseColorNode = null),
            (this.shadowNode = null),
            (this.shadowColorNode = null),
            (this.isAnalyticLightNode = !0),
            (this.updateType = C.FRAME);
        }
        getHash() {
          return this.light.uuid;
        }
        getLightVector(e) {
          return cG(this.light).sub(e.context.positionView || sQ);
        }
        setupDirect() {}
        setupDirectRectArea() {}
        setupShadowNode() {
          return c7(this.light);
        }
        setupShadow(e) {
          let { renderer: t } = e;
          if (!1 === t.shadowMap.enabled) return;
          let r = this.shadowColorNode;
          if (null === r) {
            let e,
              t = this.light.shadow.shadowNode;
            (e = void 0 !== t ? eN(t) : this.setupShadowNode()),
              (this.shadowNode = e),
              (this.shadowColorNode = r = this.colorNode.mul(e)),
              (this.baseColorNode = this.colorNode);
          }
          this.colorNode = r;
        }
        setup(e) {
          (this.colorNode = this.baseColorNode || this.colorNode),
            this.light.castShadow
              ? e.object.receiveShadow && this.setupShadow(e)
              : null !== this.shadowNode &&
                (this.shadowNode.dispose(),
                (this.shadowNode = null),
                (this.shadowColorNode = null));
          let t = this.setupDirect(e),
            r = this.setupDirectRectArea(e);
          t && e.lightsNode.setupDirectLight(e, this, t),
            r && e.lightsNode.setupDirectRectAreaLight(e, this, r);
        }
        update() {
          let { light: e } = this;
          this.color.copy(e.color).multiplyScalar(e.intensity);
        }
      }
      let ph = eB(
          ({ lightDistance: e, cutoffDistance: t, decayExponent: r }) => {
            let i = e.pow(r).max(0.01).reciprocal();
            return t
              .greaterThan(0)
              .select(i.mul(e.div(t).pow4().oneMinus().clamp().pow2()), i);
          }
        ),
        pc = ({
          color: e,
          lightVector: t,
          cutoffDistance: r,
          decayExponent: i,
        }) => {
          let s = t.normalize(),
            n = ph({
              lightDistance: t.length(),
              cutoffDistance: r,
              decayExponent: i,
            });
          return { lightDirection: s, lightColor: e.mul(n) };
        };
      class pp extends pd {
        static get type() {
          return "PointLightNode";
        }
        constructor(e = null) {
          super(e),
            (this.cutoffDistanceNode = tL(0).setGroup(tC)),
            (this.decayExponentNode = tL(2).setGroup(tC));
        }
        update(e) {
          let { light: t } = this;
          super.update(e),
            (this.cutoffDistanceNode.value = t.distance),
            (this.decayExponentNode.value = t.decay);
        }
        setupShadowNode() {
          return pu(this.light);
        }
        setupDirect(e) {
          return pc({
            color: this.colorNode,
            lightVector: this.getLightVector(e),
            cutoffDistance: this.cutoffDistanceNode,
            decayExponent: this.decayExponentNode,
          });
        }
      }
      let pg = eB(([e = i9()]) => {
          let t = e.mul(2),
            r = t.x.floor(),
            i = t.y.floor();
          return r.add(i).mod(2).sign();
        }),
        pm = eB(([e = i9()], { renderer: t, material: r }) => {
          let i,
            s = r4(e.mul(2).sub(1));
          if (r.alphaToCoverage && t.samples > 1) {
            let e = eD(s.fwidth()).toVar();
            i = r7(e.oneMinus(), e.add(1), s).oneMinus();
          } else i = il(s.greaterThan(1), 0, 1);
          return i;
        }),
        pf = eB(([e, t, r]) => {
          let i = eD(r).toVar(),
            s = eD(t).toVar();
          return il(eG(e).toVar(), s, i);
        }).setLayout({
          name: "mx_select",
          type: "float",
          inputs: [
            { name: "b", type: "bool" },
            { name: "t", type: "float" },
            { name: "f", type: "float" },
          ],
        }),
        py = eB(([e, t]) => {
          let r = eG(t).toVar(),
            i = eD(e).toVar();
          return il(r, i.negate(), i);
        }).setLayout({
          name: "mx_negate_if",
          type: "float",
          inputs: [
            { name: "val", type: "float" },
            { name: "b", type: "bool" },
          ],
        }),
        pb = eB(([e]) => eV(rb(eD(e).toVar()))).setLayout({
          name: "mx_floor",
          type: "int",
          inputs: [{ name: "x", type: "float" }],
        }),
        px = eB(([e, t]) => {
          let r = eD(e).toVar();
          return t.assign(pb(r)), r.sub(eD(t));
        }),
        pT = dq([
          eB(([e, t, r, i, s, n]) => {
            let a = eD(n).toVar(),
              o = eD(s).toVar(),
              l = eD(i).toVar(),
              u = eD(r).toVar(),
              d = eD(t).toVar(),
              h = eD(e).toVar(),
              c = eD(tz(1, o)).toVar();
            return tz(1, a)
              .mul(h.mul(c).add(d.mul(o)))
              .add(a.mul(u.mul(c).add(l.mul(o))));
          }).setLayout({
            name: "mx_bilerp_0",
            type: "float",
            inputs: [
              { name: "v0", type: "float" },
              { name: "v1", type: "float" },
              { name: "v2", type: "float" },
              { name: "v3", type: "float" },
              { name: "s", type: "float" },
              { name: "t", type: "float" },
            ],
          }),
          eB(([e, t, r, i, s, n]) => {
            let a = eD(n).toVar(),
              o = eD(s).toVar(),
              l = eH(i).toVar(),
              u = eH(r).toVar(),
              d = eH(t).toVar(),
              h = eH(e).toVar(),
              c = eD(tz(1, o)).toVar();
            return tz(1, a)
              .mul(h.mul(c).add(d.mul(o)))
              .add(a.mul(u.mul(c).add(l.mul(o))));
          }).setLayout({
            name: "mx_bilerp_1",
            type: "vec3",
            inputs: [
              { name: "v0", type: "vec3" },
              { name: "v1", type: "vec3" },
              { name: "v2", type: "vec3" },
              { name: "v3", type: "vec3" },
              { name: "s", type: "float" },
              { name: "t", type: "float" },
            ],
          }),
        ]),
        p_ = dq([
          eB(([e, t, r, i, s, n, a, o, l, u, d]) => {
            let h = eD(d).toVar(),
              c = eD(u).toVar(),
              p = eD(l).toVar(),
              g = eD(o).toVar(),
              m = eD(a).toVar(),
              f = eD(n).toVar(),
              y = eD(s).toVar(),
              b = eD(i).toVar(),
              x = eD(r).toVar(),
              T = eD(t).toVar(),
              _ = eD(e).toVar(),
              v = eD(tz(1, p)).toVar(),
              N = eD(tz(1, c)).toVar();
            return eD(tz(1, h))
              .toVar()
              .mul(
                N.mul(_.mul(v).add(T.mul(p))).add(c.mul(x.mul(v).add(b.mul(p))))
              )
              .add(
                h.mul(
                  N.mul(y.mul(v).add(f.mul(p))).add(
                    c.mul(m.mul(v).add(g.mul(p)))
                  )
                )
              );
          }).setLayout({
            name: "mx_trilerp_0",
            type: "float",
            inputs: [
              { name: "v0", type: "float" },
              { name: "v1", type: "float" },
              { name: "v2", type: "float" },
              { name: "v3", type: "float" },
              { name: "v4", type: "float" },
              { name: "v5", type: "float" },
              { name: "v6", type: "float" },
              { name: "v7", type: "float" },
              { name: "s", type: "float" },
              { name: "t", type: "float" },
              { name: "r", type: "float" },
            ],
          }),
          eB(([e, t, r, i, s, n, a, o, l, u, d]) => {
            let h = eD(d).toVar(),
              c = eD(u).toVar(),
              p = eD(l).toVar(),
              g = eH(o).toVar(),
              m = eH(a).toVar(),
              f = eH(n).toVar(),
              y = eH(s).toVar(),
              b = eH(i).toVar(),
              x = eH(r).toVar(),
              T = eH(t).toVar(),
              _ = eH(e).toVar(),
              v = eD(tz(1, p)).toVar(),
              N = eD(tz(1, c)).toVar();
            return eD(tz(1, h))
              .toVar()
              .mul(
                N.mul(_.mul(v).add(T.mul(p))).add(c.mul(x.mul(v).add(b.mul(p))))
              )
              .add(
                h.mul(
                  N.mul(y.mul(v).add(f.mul(p))).add(
                    c.mul(m.mul(v).add(g.mul(p)))
                  )
                )
              );
          }).setLayout({
            name: "mx_trilerp_1",
            type: "vec3",
            inputs: [
              { name: "v0", type: "vec3" },
              { name: "v1", type: "vec3" },
              { name: "v2", type: "vec3" },
              { name: "v3", type: "vec3" },
              { name: "v4", type: "vec3" },
              { name: "v5", type: "vec3" },
              { name: "v6", type: "vec3" },
              { name: "v7", type: "vec3" },
              { name: "s", type: "float" },
              { name: "t", type: "float" },
              { name: "r", type: "float" },
            ],
          }),
        ]),
        pv = dq([
          eB(([e, t, r]) => {
            let i = eD(r).toVar(),
              s = eD(t).toVar(),
              n = eO(e).toVar(),
              a = eO(n.bitAnd(eO(7))).toVar(),
              o = eD(pf(a.lessThan(eO(4)), s, i)).toVar(),
              l = eD(t$(2, pf(a.lessThan(eO(4)), i, s))).toVar();
            return py(o, eG(a.bitAnd(eO(1)))).add(py(l, eG(a.bitAnd(eO(2)))));
          }).setLayout({
            name: "mx_gradient_float_0",
            type: "float",
            inputs: [
              { name: "hash", type: "uint" },
              { name: "x", type: "float" },
              { name: "y", type: "float" },
            ],
          }),
          eB(([e, t, r, i]) => {
            let s = eD(i).toVar(),
              n = eD(r).toVar(),
              a = eD(t).toVar(),
              o = eO(e).toVar(),
              l = eO(o.bitAnd(eO(15))).toVar(),
              u = eD(pf(l.lessThan(eO(8)), a, n)).toVar(),
              d = eD(
                pf(
                  l.lessThan(eO(4)),
                  n,
                  pf(l.equal(eO(12)).or(l.equal(eO(14))), a, s)
                )
              ).toVar();
            return py(u, eG(l.bitAnd(eO(1)))).add(py(d, eG(l.bitAnd(eO(2)))));
          }).setLayout({
            name: "mx_gradient_float_1",
            type: "float",
            inputs: [
              { name: "hash", type: "uint" },
              { name: "x", type: "float" },
              { name: "y", type: "float" },
              { name: "z", type: "float" },
            ],
          }),
        ]),
        pN = dq([
          eB(([e, t, r]) => {
            let i = eD(r).toVar(),
              s = eD(t).toVar(),
              n = ej(e).toVar();
            return eH(pv(n.x, s, i), pv(n.y, s, i), pv(n.z, s, i));
          }).setLayout({
            name: "mx_gradient_vec3_0",
            type: "vec3",
            inputs: [
              { name: "hash", type: "uvec3" },
              { name: "x", type: "float" },
              { name: "y", type: "float" },
            ],
          }),
          eB(([e, t, r, i]) => {
            let s = eD(i).toVar(),
              n = eD(r).toVar(),
              a = eD(t).toVar(),
              o = ej(e).toVar();
            return eH(pv(o.x, a, n, s), pv(o.y, a, n, s), pv(o.z, a, n, s));
          }).setLayout({
            name: "mx_gradient_vec3_1",
            type: "vec3",
            inputs: [
              { name: "hash", type: "uvec3" },
              { name: "x", type: "float" },
              { name: "y", type: "float" },
              { name: "z", type: "float" },
            ],
          }),
        ]),
        pS = eB(([e]) => t$(0.6616, eD(e).toVar())).setLayout({
          name: "mx_gradient_scale2d_0",
          type: "float",
          inputs: [{ name: "v", type: "float" }],
        }),
        pR = eB(([e]) => t$(0.982, eD(e).toVar())).setLayout({
          name: "mx_gradient_scale3d_0",
          type: "float",
          inputs: [{ name: "v", type: "float" }],
        }),
        pA = dq([
          pS,
          eB(([e]) => t$(0.6616, eH(e).toVar())).setLayout({
            name: "mx_gradient_scale2d_1",
            type: "vec3",
            inputs: [{ name: "v", type: "vec3" }],
          }),
        ]),
        pE = dq([
          pR,
          eB(([e]) => t$(0.982, eH(e).toVar())).setLayout({
            name: "mx_gradient_scale3d_1",
            type: "vec3",
            inputs: [{ name: "v", type: "vec3" }],
          }),
        ]),
        pw = eB(([e, t]) => {
          let r = eV(t).toVar(),
            i = eO(e).toVar();
          return i.shiftLeft(r).bitOr(i.shiftRight(eV(32).sub(r)));
        }).setLayout({
          name: "mx_rotl32",
          type: "uint",
          inputs: [
            { name: "x", type: "uint" },
            { name: "k", type: "int" },
          ],
        }),
        pC = eB(([e, t, r]) => {
          e.subAssign(r),
            e.bitXorAssign(pw(r, eV(4))),
            r.addAssign(t),
            t.subAssign(e),
            t.bitXorAssign(pw(e, eV(6))),
            e.addAssign(r),
            r.subAssign(t),
            r.bitXorAssign(pw(t, eV(8))),
            t.addAssign(e),
            e.subAssign(r),
            e.bitXorAssign(pw(r, eV(16))),
            r.addAssign(t),
            t.subAssign(e),
            t.bitXorAssign(pw(e, eV(19))),
            e.addAssign(r),
            r.subAssign(t),
            r.bitXorAssign(pw(t, eV(4))),
            t.addAssign(e);
        }),
        pM = eB(([e, t, r]) => {
          let i = eO(r).toVar(),
            s = eO(t).toVar(),
            n = eO(e).toVar();
          return (
            i.bitXorAssign(s),
            i.subAssign(pw(s, eV(14))),
            n.bitXorAssign(i),
            n.subAssign(pw(i, eV(11))),
            s.bitXorAssign(n),
            s.subAssign(pw(n, eV(25))),
            i.bitXorAssign(s),
            i.subAssign(pw(s, eV(16))),
            n.bitXorAssign(i),
            n.subAssign(pw(i, eV(4))),
            s.bitXorAssign(n),
            s.subAssign(pw(n, eV(14))),
            i.bitXorAssign(s),
            i.subAssign(pw(s, eV(24))),
            i
          );
        }).setLayout({
          name: "mx_bjfinal",
          type: "uint",
          inputs: [
            { name: "a", type: "uint" },
            { name: "b", type: "uint" },
            { name: "c", type: "uint" },
          ],
        }),
        pB = eB(([e]) =>
          eD(eO(e).toVar()).div(eD(eO(eV(0xffffffff))))
        ).setLayout({
          name: "mx_bits_to_01",
          type: "float",
          inputs: [{ name: "bits", type: "uint" }],
        }),
        pL = eB(([e]) => {
          let t = eD(e).toVar();
          return t
            .mul(t)
            .mul(t)
            .mul(t.mul(t.mul(6).sub(15)).add(10));
        }).setLayout({
          name: "mx_fade",
          type: "float",
          inputs: [{ name: "t", type: "float" }],
        }),
        pF = eB(([e]) => {
          let t = eV(e).toVar(),
            r = eO(eO(1)).toVar(),
            i = eO(
              eO(eV(0xdeadbeef))
                .add(r.shiftLeft(eO(2)))
                .add(eO(13))
            ).toVar();
          return pM(i.add(eO(t)), i, i);
        }).setLayout({
          name: "mx_hash_int_0",
          type: "uint",
          inputs: [{ name: "x", type: "int" }],
        }),
        pP = eB(([e, t]) => {
          let r = eV(t).toVar(),
            i = eV(e).toVar(),
            s = eO(eO(2)).toVar(),
            n = eO().toVar(),
            a = eO().toVar(),
            o = eO().toVar();
          return (
            n.assign(
              a.assign(
                o.assign(
                  eO(eV(0xdeadbeef))
                    .add(s.shiftLeft(eO(2)))
                    .add(eO(13))
                )
              )
            ),
            n.addAssign(eO(i)),
            a.addAssign(eO(r)),
            pM(n, a, o)
          );
        }).setLayout({
          name: "mx_hash_int_1",
          type: "uint",
          inputs: [
            { name: "x", type: "int" },
            { name: "y", type: "int" },
          ],
        }),
        pI = eB(([e, t, r]) => {
          let i = eV(r).toVar(),
            s = eV(t).toVar(),
            n = eV(e).toVar(),
            a = eO(eO(3)).toVar(),
            o = eO().toVar(),
            l = eO().toVar(),
            u = eO().toVar();
          return (
            o.assign(
              l.assign(
                u.assign(
                  eO(eV(0xdeadbeef))
                    .add(a.shiftLeft(eO(2)))
                    .add(eO(13))
                )
              )
            ),
            o.addAssign(eO(n)),
            l.addAssign(eO(s)),
            u.addAssign(eO(i)),
            pM(o, l, u)
          );
        }).setLayout({
          name: "mx_hash_int_2",
          type: "uint",
          inputs: [
            { name: "x", type: "int" },
            { name: "y", type: "int" },
            { name: "z", type: "int" },
          ],
        }),
        pU = dq([
          pF,
          pP,
          pI,
          eB(([e, t, r, i]) => {
            let s = eV(i).toVar(),
              n = eV(r).toVar(),
              a = eV(t).toVar(),
              o = eV(e).toVar(),
              l = eO(eO(4)).toVar(),
              u = eO().toVar(),
              d = eO().toVar(),
              h = eO().toVar();
            return (
              u.assign(
                d.assign(
                  h.assign(
                    eO(eV(0xdeadbeef))
                      .add(l.shiftLeft(eO(2)))
                      .add(eO(13))
                  )
                )
              ),
              u.addAssign(eO(o)),
              d.addAssign(eO(a)),
              h.addAssign(eO(n)),
              pC(u, d, h),
              u.addAssign(eO(s)),
              pM(u, d, h)
            );
          }).setLayout({
            name: "mx_hash_int_3",
            type: "uint",
            inputs: [
              { name: "x", type: "int" },
              { name: "y", type: "int" },
              { name: "z", type: "int" },
              { name: "xx", type: "int" },
            ],
          }),
          eB(([e, t, r, i, s]) => {
            let n = eV(s).toVar(),
              a = eV(i).toVar(),
              o = eV(r).toVar(),
              l = eV(t).toVar(),
              u = eV(e).toVar(),
              d = eO(eO(5)).toVar(),
              h = eO().toVar(),
              c = eO().toVar(),
              p = eO().toVar();
            return (
              h.assign(
                c.assign(
                  p.assign(
                    eO(eV(0xdeadbeef))
                      .add(d.shiftLeft(eO(2)))
                      .add(eO(13))
                  )
                )
              ),
              h.addAssign(eO(u)),
              c.addAssign(eO(l)),
              p.addAssign(eO(o)),
              pC(h, c, p),
              h.addAssign(eO(a)),
              c.addAssign(eO(n)),
              pM(h, c, p)
            );
          }).setLayout({
            name: "mx_hash_int_4",
            type: "uint",
            inputs: [
              { name: "x", type: "int" },
              { name: "y", type: "int" },
              { name: "z", type: "int" },
              { name: "xx", type: "int" },
              { name: "yy", type: "int" },
            ],
          }),
        ]),
        pD = dq([
          eB(([e, t]) => {
            let r = eV(t).toVar(),
              i = eO(pU(eV(e).toVar(), r)).toVar(),
              s = ej().toVar();
            return (
              s.x.assign(i.bitAnd(eV(255))),
              s.y.assign(i.shiftRight(eV(8)).bitAnd(eV(255))),
              s.z.assign(i.shiftRight(eV(16)).bitAnd(eV(255))),
              s
            );
          }).setLayout({
            name: "mx_hash_vec3_0",
            type: "uvec3",
            inputs: [
              { name: "x", type: "int" },
              { name: "y", type: "int" },
            ],
          }),
          eB(([e, t, r]) => {
            let i = eV(r).toVar(),
              s = eV(t).toVar(),
              n = eO(pU(eV(e).toVar(), s, i)).toVar(),
              a = ej().toVar();
            return (
              a.x.assign(n.bitAnd(eV(255))),
              a.y.assign(n.shiftRight(eV(8)).bitAnd(eV(255))),
              a.z.assign(n.shiftRight(eV(16)).bitAnd(eV(255))),
              a
            );
          }).setLayout({
            name: "mx_hash_vec3_1",
            type: "uvec3",
            inputs: [
              { name: "x", type: "int" },
              { name: "y", type: "int" },
              { name: "z", type: "int" },
            ],
          }),
        ]),
        pV = dq([
          eB(([e]) => {
            let t = ek(e).toVar(),
              r = eV().toVar(),
              i = eV().toVar(),
              s = eD(px(t.x, r)).toVar(),
              n = eD(px(t.y, i)).toVar(),
              a = eD(pL(s)).toVar(),
              o = eD(pL(n)).toVar();
            return pA(
              eD(
                pT(
                  pv(pU(r, i), s, n),
                  pv(pU(r.add(eV(1)), i), s.sub(1), n),
                  pv(pU(r, i.add(eV(1))), s, n.sub(1)),
                  pv(pU(r.add(eV(1)), i.add(eV(1))), s.sub(1), n.sub(1)),
                  a,
                  o
                )
              ).toVar()
            );
          }).setLayout({
            name: "mx_perlin_noise_float_0",
            type: "float",
            inputs: [{ name: "p", type: "vec2" }],
          }),
          eB(([e]) => {
            let t = eH(e).toVar(),
              r = eV().toVar(),
              i = eV().toVar(),
              s = eV().toVar(),
              n = eD(px(t.x, r)).toVar(),
              a = eD(px(t.y, i)).toVar(),
              o = eD(px(t.z, s)).toVar(),
              l = eD(pL(n)).toVar(),
              u = eD(pL(a)).toVar(),
              d = eD(pL(o)).toVar();
            return pE(
              eD(
                p_(
                  pv(pU(r, i, s), n, a, o),
                  pv(pU(r.add(eV(1)), i, s), n.sub(1), a, o),
                  pv(pU(r, i.add(eV(1)), s), n, a.sub(1), o),
                  pv(pU(r.add(eV(1)), i.add(eV(1)), s), n.sub(1), a.sub(1), o),
                  pv(pU(r, i, s.add(eV(1))), n, a, o.sub(1)),
                  pv(pU(r.add(eV(1)), i, s.add(eV(1))), n.sub(1), a, o.sub(1)),
                  pv(pU(r, i.add(eV(1)), s.add(eV(1))), n, a.sub(1), o.sub(1)),
                  pv(
                    pU(r.add(eV(1)), i.add(eV(1)), s.add(eV(1))),
                    n.sub(1),
                    a.sub(1),
                    o.sub(1)
                  ),
                  l,
                  u,
                  d
                )
              ).toVar()
            );
          }).setLayout({
            name: "mx_perlin_noise_float_1",
            type: "float",
            inputs: [{ name: "p", type: "vec3" }],
          }),
        ]),
        pO = dq([
          eB(([e]) => {
            let t = ek(e).toVar(),
              r = eV().toVar(),
              i = eV().toVar(),
              s = eD(px(t.x, r)).toVar(),
              n = eD(px(t.y, i)).toVar(),
              a = eD(pL(s)).toVar(),
              o = eD(pL(n)).toVar();
            return pA(
              eH(
                pT(
                  pN(pD(r, i), s, n),
                  pN(pD(r.add(eV(1)), i), s.sub(1), n),
                  pN(pD(r, i.add(eV(1))), s, n.sub(1)),
                  pN(pD(r.add(eV(1)), i.add(eV(1))), s.sub(1), n.sub(1)),
                  a,
                  o
                )
              ).toVar()
            );
          }).setLayout({
            name: "mx_perlin_noise_vec3_0",
            type: "vec3",
            inputs: [{ name: "p", type: "vec2" }],
          }),
          eB(([e]) => {
            let t = eH(e).toVar(),
              r = eV().toVar(),
              i = eV().toVar(),
              s = eV().toVar(),
              n = eD(px(t.x, r)).toVar(),
              a = eD(px(t.y, i)).toVar(),
              o = eD(px(t.z, s)).toVar(),
              l = eD(pL(n)).toVar(),
              u = eD(pL(a)).toVar(),
              d = eD(pL(o)).toVar();
            return pE(
              eH(
                p_(
                  pN(pD(r, i, s), n, a, o),
                  pN(pD(r.add(eV(1)), i, s), n.sub(1), a, o),
                  pN(pD(r, i.add(eV(1)), s), n, a.sub(1), o),
                  pN(pD(r.add(eV(1)), i.add(eV(1)), s), n.sub(1), a.sub(1), o),
                  pN(pD(r, i, s.add(eV(1))), n, a, o.sub(1)),
                  pN(pD(r.add(eV(1)), i, s.add(eV(1))), n.sub(1), a, o.sub(1)),
                  pN(pD(r, i.add(eV(1)), s.add(eV(1))), n, a.sub(1), o.sub(1)),
                  pN(
                    pD(r.add(eV(1)), i.add(eV(1)), s.add(eV(1))),
                    n.sub(1),
                    a.sub(1),
                    o.sub(1)
                  ),
                  l,
                  u,
                  d
                )
              ).toVar()
            );
          }).setLayout({
            name: "mx_perlin_noise_vec3_1",
            type: "vec3",
            inputs: [{ name: "p", type: "vec3" }],
          }),
        ]),
        pG = eB(([e]) => pB(pU(eV(pb(eD(e).toVar())).toVar()))).setLayout({
          name: "mx_cell_noise_float_0",
          type: "float",
          inputs: [{ name: "p", type: "float" }],
        }),
        pk = eB(([e]) => {
          let t = ek(e).toVar();
          return pB(pU(eV(pb(t.x)).toVar(), eV(pb(t.y)).toVar()));
        }).setLayout({
          name: "mx_cell_noise_float_1",
          type: "float",
          inputs: [{ name: "p", type: "vec2" }],
        }),
        pz = dq([
          pG,
          pk,
          eB(([e]) => {
            let t = eH(e).toVar(),
              r = eV(pb(t.x)).toVar();
            return pB(pU(r, eV(pb(t.y)).toVar(), eV(pb(t.z)).toVar()));
          }).setLayout({
            name: "mx_cell_noise_float_2",
            type: "float",
            inputs: [{ name: "p", type: "vec3" }],
          }),
          eB(([e]) => {
            let t = eK(e).toVar(),
              r = eV(pb(t.x)).toVar(),
              i = eV(pb(t.y)).toVar();
            return pB(pU(r, i, eV(pb(t.z)).toVar(), eV(pb(t.w)).toVar()));
          }).setLayout({
            name: "mx_cell_noise_float_3",
            type: "float",
            inputs: [{ name: "p", type: "vec4" }],
          }),
        ]),
        p$ = eB(([e]) => {
          let t = eV(pb(eD(e).toVar())).toVar();
          return eH(pB(pU(t, eV(0))), pB(pU(t, eV(1))), pB(pU(t, eV(2))));
        }).setLayout({
          name: "mx_cell_noise_vec3_0",
          type: "vec3",
          inputs: [{ name: "p", type: "float" }],
        }),
        pW = eB(([e]) => {
          let t = ek(e).toVar(),
            r = eV(pb(t.x)).toVar(),
            i = eV(pb(t.y)).toVar();
          return eH(
            pB(pU(r, i, eV(0))),
            pB(pU(r, i, eV(1))),
            pB(pU(r, i, eV(2)))
          );
        }).setLayout({
          name: "mx_cell_noise_vec3_1",
          type: "vec3",
          inputs: [{ name: "p", type: "vec2" }],
        }),
        pH = dq([
          p$,
          pW,
          eB(([e]) => {
            let t = eH(e).toVar(),
              r = eV(pb(t.x)).toVar(),
              i = eV(pb(t.y)).toVar(),
              s = eV(pb(t.z)).toVar();
            return eH(
              pB(pU(r, i, s, eV(0))),
              pB(pU(r, i, s, eV(1))),
              pB(pU(r, i, s, eV(2)))
            );
          }).setLayout({
            name: "mx_cell_noise_vec3_2",
            type: "vec3",
            inputs: [{ name: "p", type: "vec3" }],
          }),
          eB(([e]) => {
            let t = eK(e).toVar(),
              r = eV(pb(t.x)).toVar(),
              i = eV(pb(t.y)).toVar(),
              s = eV(pb(t.z)).toVar(),
              n = eV(pb(t.w)).toVar();
            return eH(
              pB(pU(r, i, s, n, eV(0))),
              pB(pU(r, i, s, n, eV(1))),
              pB(pU(r, i, s, n, eV(2)))
            );
          }).setLayout({
            name: "mx_cell_noise_vec3_3",
            type: "vec3",
            inputs: [{ name: "p", type: "vec4" }],
          }),
        ]),
        pq = eB(([e, t, r, i]) => {
          let s = eD(i).toVar(),
            n = eD(r).toVar(),
            a = eV(t).toVar(),
            o = eH(e).toVar(),
            l = eD(0).toVar(),
            u = eD(1).toVar();
          return (
            aJ(a, () => {
              l.addAssign(u.mul(pV(o))), u.mulAssign(s), o.mulAssign(n);
            }),
            l
          );
        }).setLayout({
          name: "mx_fractal_noise_float",
          type: "float",
          inputs: [
            { name: "p", type: "vec3" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        pj = eB(([e, t, r, i]) => {
          let s = eD(i).toVar(),
            n = eD(r).toVar(),
            a = eV(t).toVar(),
            o = eH(e).toVar(),
            l = eH(0).toVar(),
            u = eD(1).toVar();
          return (
            aJ(a, () => {
              l.addAssign(u.mul(pO(o))), u.mulAssign(s), o.mulAssign(n);
            }),
            l
          );
        }).setLayout({
          name: "mx_fractal_noise_vec3",
          type: "vec3",
          inputs: [
            { name: "p", type: "vec3" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        pX = eB(([e, t, r, i]) => {
          let s = eD(i).toVar(),
            n = eD(r).toVar(),
            a = eV(t).toVar(),
            o = eH(e).toVar();
          return ek(
            pq(o, a, n, s),
            pq(o.add(eH(eV(19), eV(193), eV(17))), a, n, s)
          );
        }).setLayout({
          name: "mx_fractal_noise_vec2",
          type: "vec2",
          inputs: [
            { name: "p", type: "vec3" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        pK = eB(([e, t, r, i]) => {
          let s = eD(i).toVar(),
            n = eD(r).toVar(),
            a = eV(t).toVar(),
            o = eH(e).toVar();
          return eK(
            eH(pj(o, a, n, s)).toVar(),
            eD(pq(o.add(eH(eV(19), eV(193), eV(17))), a, n, s)).toVar()
          );
        }).setLayout({
          name: "mx_fractal_noise_vec4",
          type: "vec4",
          inputs: [
            { name: "p", type: "vec3" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        pQ = dq([
          eB(([e, t, r, i, s, n, a]) => {
            let o = eV(a).toVar(),
              l = eD(n).toVar(),
              u = eV(s).toVar(),
              d = eV(i).toVar(),
              h = eV(r).toVar(),
              c = eV(t).toVar(),
              p = ek(e).toVar(),
              g = eH(pH(ek(c.add(d), h.add(u)))).toVar(),
              m = ek(g.x, g.y).toVar();
            m.subAssign(0.5), m.mulAssign(l), m.addAssign(0.5);
            let f = ek(ek(eD(c), eD(h)).add(m)).toVar(),
              y = ek(f.sub(p)).toVar();
            return (
              eP(o.equal(eV(2)), () => rw(y.x).add(rw(y.y))),
              eP(o.equal(eV(3)), () => rH(rw(y.x), rw(y.y))),
              rQ(y, y)
            );
          }).setLayout({
            name: "mx_worley_distance_0",
            type: "float",
            inputs: [
              { name: "p", type: "vec2" },
              { name: "x", type: "int" },
              { name: "y", type: "int" },
              { name: "xoff", type: "int" },
              { name: "yoff", type: "int" },
              { name: "jitter", type: "float" },
              { name: "metric", type: "int" },
            ],
          }),
          eB(([e, t, r, i, s, n, a, o, l]) => {
            let u = eV(l).toVar(),
              d = eD(o).toVar(),
              h = eV(a).toVar(),
              c = eV(n).toVar(),
              p = eV(s).toVar(),
              g = eV(i).toVar(),
              m = eV(r).toVar(),
              f = eV(t).toVar(),
              y = eH(e).toVar(),
              b = eH(pH(eH(f.add(p), m.add(c), g.add(h)))).toVar();
            b.subAssign(0.5), b.mulAssign(d), b.addAssign(0.5);
            let x = eH(eH(eD(f), eD(m), eD(g)).add(b)).toVar(),
              T = eH(x.sub(y)).toVar();
            return (
              eP(u.equal(eV(2)), () => rw(T.x).add(rw(T.y)).add(rw(T.z))),
              eP(u.equal(eV(3)), () => rH(rw(T.x), rw(T.y), rw(T.z))),
              rQ(T, T)
            );
          }).setLayout({
            name: "mx_worley_distance_1",
            type: "float",
            inputs: [
              { name: "p", type: "vec3" },
              { name: "x", type: "int" },
              { name: "y", type: "int" },
              { name: "z", type: "int" },
              { name: "xoff", type: "int" },
              { name: "yoff", type: "int" },
              { name: "zoff", type: "int" },
              { name: "jitter", type: "float" },
              { name: "metric", type: "int" },
            ],
          }),
        ]),
        pY = eB(([e, t, r]) => {
          let i = eV(r).toVar(),
            s = eD(t).toVar(),
            n = ek(e).toVar(),
            a = eV().toVar(),
            o = eV().toVar(),
            l = ek(px(n.x, a), px(n.y, o)).toVar(),
            u = eD(1e6).toVar();
          return (
            aJ(
              { start: -1, end: eV(1), name: "x", condition: "<=" },
              ({ x: e }) => {
                aJ(
                  { start: -1, end: eV(1), name: "y", condition: "<=" },
                  ({ y: t }) => {
                    let r = eD(pQ(l, e, t, a, o, s, i)).toVar();
                    u.assign(rW(u, r));
                  }
                );
              }
            ),
            eP(i.equal(eV(0)), () => {
              u.assign(rf(u));
            }),
            u
          );
        }).setLayout({
          name: "mx_worley_noise_float_0",
          type: "float",
          inputs: [
            { name: "p", type: "vec2" },
            { name: "jitter", type: "float" },
            { name: "metric", type: "int" },
          ],
        }),
        pZ = eB(([e, t, r]) => {
          let i = eV(r).toVar(),
            s = eD(t).toVar(),
            n = ek(e).toVar(),
            a = eV().toVar(),
            o = eV().toVar(),
            l = ek(px(n.x, a), px(n.y, o)).toVar(),
            u = ek(1e6, 1e6).toVar();
          return (
            aJ(
              { start: -1, end: eV(1), name: "x", condition: "<=" },
              ({ x: e }) => {
                aJ(
                  { start: -1, end: eV(1), name: "y", condition: "<=" },
                  ({ y: t }) => {
                    let r = eD(pQ(l, e, t, a, o, s, i)).toVar();
                    eP(r.lessThan(u.x), () => {
                      u.y.assign(u.x), u.x.assign(r);
                    }).ElseIf(r.lessThan(u.y), () => {
                      u.y.assign(r);
                    });
                  }
                );
              }
            ),
            eP(i.equal(eV(0)), () => {
              u.assign(rf(u));
            }),
            u
          );
        }).setLayout({
          name: "mx_worley_noise_vec2_0",
          type: "vec2",
          inputs: [
            { name: "p", type: "vec2" },
            { name: "jitter", type: "float" },
            { name: "metric", type: "int" },
          ],
        }),
        pJ = eB(([e, t, r]) => {
          let i = eV(r).toVar(),
            s = eD(t).toVar(),
            n = ek(e).toVar(),
            a = eV().toVar(),
            o = eV().toVar(),
            l = ek(px(n.x, a), px(n.y, o)).toVar(),
            u = eH(1e6, 1e6, 1e6).toVar();
          return (
            aJ(
              { start: -1, end: eV(1), name: "x", condition: "<=" },
              ({ x: e }) => {
                aJ(
                  { start: -1, end: eV(1), name: "y", condition: "<=" },
                  ({ y: t }) => {
                    let r = eD(pQ(l, e, t, a, o, s, i)).toVar();
                    eP(r.lessThan(u.x), () => {
                      u.z.assign(u.y), u.y.assign(u.x), u.x.assign(r);
                    })
                      .ElseIf(r.lessThan(u.y), () => {
                        u.z.assign(u.y), u.y.assign(r);
                      })
                      .ElseIf(r.lessThan(u.z), () => {
                        u.z.assign(r);
                      });
                  }
                );
              }
            ),
            eP(i.equal(eV(0)), () => {
              u.assign(rf(u));
            }),
            u
          );
        }).setLayout({
          name: "mx_worley_noise_vec3_0",
          type: "vec3",
          inputs: [
            { name: "p", type: "vec2" },
            { name: "jitter", type: "float" },
            { name: "metric", type: "int" },
          ],
        }),
        p0 = dq([
          pY,
          eB(([e, t, r]) => {
            let i = eV(r).toVar(),
              s = eD(t).toVar(),
              n = eH(e).toVar(),
              a = eV().toVar(),
              o = eV().toVar(),
              l = eV().toVar(),
              u = eH(px(n.x, a), px(n.y, o), px(n.z, l)).toVar(),
              d = eD(1e6).toVar();
            return (
              aJ(
                { start: -1, end: eV(1), name: "x", condition: "<=" },
                ({ x: e }) => {
                  aJ(
                    { start: -1, end: eV(1), name: "y", condition: "<=" },
                    ({ y: t }) => {
                      aJ(
                        { start: -1, end: eV(1), name: "z", condition: "<=" },
                        ({ z: r }) => {
                          let n = eD(pQ(u, e, t, r, a, o, l, s, i)).toVar();
                          d.assign(rW(d, n));
                        }
                      );
                    }
                  );
                }
              ),
              eP(i.equal(eV(0)), () => {
                d.assign(rf(d));
              }),
              d
            );
          }).setLayout({
            name: "mx_worley_noise_float_1",
            type: "float",
            inputs: [
              { name: "p", type: "vec3" },
              { name: "jitter", type: "float" },
              { name: "metric", type: "int" },
            ],
          }),
        ]),
        p1 = dq([
          pZ,
          eB(([e, t, r]) => {
            let i = eV(r).toVar(),
              s = eD(t).toVar(),
              n = eH(e).toVar(),
              a = eV().toVar(),
              o = eV().toVar(),
              l = eV().toVar(),
              u = eH(px(n.x, a), px(n.y, o), px(n.z, l)).toVar(),
              d = ek(1e6, 1e6).toVar();
            return (
              aJ(
                { start: -1, end: eV(1), name: "x", condition: "<=" },
                ({ x: e }) => {
                  aJ(
                    { start: -1, end: eV(1), name: "y", condition: "<=" },
                    ({ y: t }) => {
                      aJ(
                        { start: -1, end: eV(1), name: "z", condition: "<=" },
                        ({ z: r }) => {
                          let n = eD(pQ(u, e, t, r, a, o, l, s, i)).toVar();
                          eP(n.lessThan(d.x), () => {
                            d.y.assign(d.x), d.x.assign(n);
                          }).ElseIf(n.lessThan(d.y), () => {
                            d.y.assign(n);
                          });
                        }
                      );
                    }
                  );
                }
              ),
              eP(i.equal(eV(0)), () => {
                d.assign(rf(d));
              }),
              d
            );
          }).setLayout({
            name: "mx_worley_noise_vec2_1",
            type: "vec2",
            inputs: [
              { name: "p", type: "vec3" },
              { name: "jitter", type: "float" },
              { name: "metric", type: "int" },
            ],
          }),
        ]),
        p2 = dq([
          pJ,
          eB(([e, t, r]) => {
            let i = eV(r).toVar(),
              s = eD(t).toVar(),
              n = eH(e).toVar(),
              a = eV().toVar(),
              o = eV().toVar(),
              l = eV().toVar(),
              u = eH(px(n.x, a), px(n.y, o), px(n.z, l)).toVar(),
              d = eH(1e6, 1e6, 1e6).toVar();
            return (
              aJ(
                { start: -1, end: eV(1), name: "x", condition: "<=" },
                ({ x: e }) => {
                  aJ(
                    { start: -1, end: eV(1), name: "y", condition: "<=" },
                    ({ y: t }) => {
                      aJ(
                        { start: -1, end: eV(1), name: "z", condition: "<=" },
                        ({ z: r }) => {
                          let n = eD(pQ(u, e, t, r, a, o, l, s, i)).toVar();
                          eP(n.lessThan(d.x), () => {
                            d.z.assign(d.y), d.y.assign(d.x), d.x.assign(n);
                          })
                            .ElseIf(n.lessThan(d.y), () => {
                              d.z.assign(d.y), d.y.assign(n);
                            })
                            .ElseIf(n.lessThan(d.z), () => {
                              d.z.assign(n);
                            });
                        }
                      );
                    }
                  );
                }
              ),
              eP(i.equal(eV(0)), () => {
                d.assign(rf(d));
              }),
              d
            );
          }).setLayout({
            name: "mx_worley_noise_vec3_1",
            type: "vec3",
            inputs: [
              { name: "p", type: "vec3" },
              { name: "jitter", type: "float" },
              { name: "metric", type: "int" },
            ],
          }),
        ]),
        p3 = eB(([e, t, r, i, s, n, a, o, l, u, d]) => {
          let h = eV(e).toVar(),
            c = ek(t).toVar(),
            p = ek(r).toVar(),
            g = ek(i).toVar(),
            m = eD(s).toVar(),
            f = eD(n).toVar(),
            y = eD(a).toVar(),
            b = eG(o).toVar(),
            x = eV(l).toVar(),
            T = eD(u).toVar(),
            _ = eD(d).toVar(),
            v = c.mul(p).add(g),
            N = eD(0).toVar();
          return (
            eP(h.equal(eV(0)), () => {
              N.assign(pO(v));
            }),
            eP(h.equal(eV(1)), () => {
              N.assign(pH(v));
            }),
            eP(h.equal(eV(2)), () => {
              N.assign(p2(v, m, eV(0)));
            }),
            eP(h.equal(eV(3)), () => {
              N.assign(pj(eH(v, 0), x, T, _));
            }),
            N.assign(N.mul(y.sub(f)).add(f)),
            eP(b, () => {
              N.assign(r8(N, f, y));
            }),
            N
          );
        }).setLayout({
          name: "mx_unifiednoise2d",
          type: "float",
          inputs: [
            { name: "noiseType", type: "int" },
            { name: "texcoord", type: "vec2" },
            { name: "freq", type: "vec2" },
            { name: "offset", type: "vec2" },
            { name: "jitter", type: "float" },
            { name: "outmin", type: "float" },
            { name: "outmax", type: "float" },
            { name: "clampoutput", type: "bool" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        p4 = eB(([e, t, r, i, s, n, a, o, l, u, d]) => {
          let h = eV(e).toVar(),
            c = eH(t).toVar(),
            p = eH(r).toVar(),
            g = eH(i).toVar(),
            m = eD(s).toVar(),
            f = eD(n).toVar(),
            y = eD(a).toVar(),
            b = eG(o).toVar(),
            x = eV(l).toVar(),
            T = eD(u).toVar(),
            _ = eD(d).toVar(),
            v = c.mul(p).add(g),
            N = eD(0).toVar();
          return (
            eP(h.equal(eV(0)), () => {
              N.assign(pO(v));
            }),
            eP(h.equal(eV(1)), () => {
              N.assign(pH(v));
            }),
            eP(h.equal(eV(2)), () => {
              N.assign(p2(v, m, eV(0)));
            }),
            eP(h.equal(eV(3)), () => {
              N.assign(pj(v, x, T, _));
            }),
            N.assign(N.mul(y.sub(f)).add(f)),
            eP(b, () => {
              N.assign(r8(N, f, y));
            }),
            N
          );
        }).setLayout({
          name: "mx_unifiednoise3d",
          type: "float",
          inputs: [
            { name: "noiseType", type: "int" },
            { name: "position", type: "vec3" },
            { name: "freq", type: "vec3" },
            { name: "offset", type: "vec3" },
            { name: "jitter", type: "float" },
            { name: "outmin", type: "float" },
            { name: "outmax", type: "float" },
            { name: "clampoutput", type: "bool" },
            { name: "octaves", type: "int" },
            { name: "lacunarity", type: "float" },
            { name: "diminish", type: "float" },
          ],
        }),
        p6 = eB(([e]) => {
          let t = e.y,
            r = e.z,
            i = eH().toVar();
          return (
            eP(t.lessThan(1e-4), () => {
              i.assign(eH(r, r, r));
            }).Else(() => {
              let s = e.x,
                n = eV(rD((s = s.sub(rb(s)).mul(6).toVar()))),
                a = s.sub(eD(n)),
                o = r.mul(t.oneMinus()),
                l = r.mul(t.mul(a).oneMinus()),
                u = r.mul(t.mul(a.oneMinus()).oneMinus());
              eP(n.equal(eV(0)), () => {
                i.assign(eH(r, u, o));
              })
                .ElseIf(n.equal(eV(1)), () => {
                  i.assign(eH(l, r, o));
                })
                .ElseIf(n.equal(eV(2)), () => {
                  i.assign(eH(o, r, u));
                })
                .ElseIf(n.equal(eV(3)), () => {
                  i.assign(eH(o, l, r));
                })
                .ElseIf(n.equal(eV(4)), () => {
                  i.assign(eH(u, o, r));
                })
                .Else(() => {
                  i.assign(eH(r, o, l));
                });
            }),
            i
          );
        }).setLayout({
          name: "mx_hsvtorgb",
          type: "vec3",
          inputs: [{ name: "hsv", type: "vec3" }],
        }),
        p8 = eB(([e]) => {
          let t = eH(e).toVar(),
            r = eD(t.x).toVar(),
            i = eD(t.y).toVar(),
            s = eD(t.z).toVar(),
            n = eD(rW(r, rW(i, s))).toVar(),
            a = eD(rH(r, rH(i, s))).toVar(),
            o = eD(a.sub(n)).toVar(),
            l = eD().toVar(),
            u = eD().toVar(),
            d = eD().toVar();
          return (
            d.assign(a),
            eP(a.greaterThan(0), () => {
              u.assign(o.div(a));
            }).Else(() => {
              u.assign(0);
            }),
            eP(u.lessThanEqual(0), () => {
              l.assign(0);
            }).Else(() => {
              eP(r.greaterThanEqual(a), () => {
                l.assign(i.sub(s).div(o));
              })
                .ElseIf(i.greaterThanEqual(a), () => {
                  l.assign(tk(2, s.sub(r).div(o)));
                })
                .Else(() => {
                  l.assign(tk(4, r.sub(i).div(o)));
                }),
                l.mulAssign(1 / 6),
                eP(l.lessThan(0), () => {
                  l.addAssign(1);
                });
            }),
            eH(l, u, d)
          );
        }).setLayout({
          name: "mx_rgbtohsv",
          type: "vec3",
          inputs: [{ name: "c", type: "vec3" }],
        }),
        p5 = eB(([e]) => {
          let t = eH(e).toVar(),
            r = eX(tK(t, eH(0.04045))).toVar();
          return r6(
            eH(t.div(12.92)).toVar(),
            eH(rZ(rH(t.add(eH(0.055)), eH(0)).div(1.055), eH(2.4))).toVar(),
            r
          );
        }).setLayout({
          name: "mx_srgb_texture_to_lin_rec709",
          type: "vec3",
          inputs: [{ name: "color", type: "vec3" }],
        }),
        p9 = (e, t) => {
          e = eD(e);
          let r = ek((t = eD(t)).dFdx(), t.dFdy())
            .length()
            .mul(0.7071067811865476);
          return r7(e.sub(r), e.add(r), t);
        },
        p7 = (e, t, r, i) => r6(e, t, r[i].clamp()),
        ge = (e, t, r, i, s) => r6(e, t, p9(r, i[s])),
        gt = eB(([e, t, r]) => {
          let i = rT(e).toVar(),
            s = tz(eD(0.5).mul(t.sub(r)), sX)
              .div(i)
              .toVar(),
            n = tz(eD(-0.5).mul(t.sub(r)), sX)
              .div(i)
              .toVar(),
            a = eH().toVar();
          (a.x = i.x.greaterThan(eD(0)).select(s.x, n.x)),
            (a.y = i.y.greaterThan(eD(0)).select(s.y, n.y)),
            (a.z = i.z.greaterThan(eD(0)).select(s.z, n.z));
          let o = rW(a.x, a.y, a.z).toVar();
          return sX.add(i.mul(o)).toVar().sub(r);
        }),
        gr = eB(([e, t]) => {
          let r = e.x,
            i = e.y,
            s = e.z,
            n = t.element(0).mul(0.886227);
          return (n = (n = (n = (n = (n = (n = (n = n.add(
            t.element(1).mul(1.023328).mul(i)
          )).add(t.element(2).mul(1.023328).mul(s))).add(
            t.element(3).mul(1.023328).mul(r)
          )).add(t.element(4).mul(0.858086).mul(r).mul(i))).add(
            t.element(5).mul(0.858086).mul(i).mul(s)
          )).add(t.element(6).mul(s.mul(s).mul(0.743125).sub(0.247708)))).add(
            t.element(7).mul(0.858086).mul(r).mul(s)
          )).add(
            t
              .element(8)
              .mul(0.429043)
              .mul(t$(r, r).sub(t$(i, i)))
          );
        });
      var gi = Object.freeze({
        __proto__: null,
        BRDF_GGX: lm,
        BRDF_Lambert: le,
        BasicPointShadowFilter: pr,
        BasicShadowFilter: cK,
        Break: a0,
        Const: iy,
        Continue: () => i0("continue").toStack(),
        DFGApprox: lf,
        D_GGX: lc,
        Discard: i1,
        EPSILON: rs,
        F_Schlick: o7,
        Fn: eB,
        INFINITY: rn,
        If: eP,
        Loop: aJ,
        NodeAccess: M,
        NodeShaderStage: w,
        NodeType: {
          BOOLEAN: "bool",
          INTEGER: "int",
          FLOAT: "float",
          VECTOR2: "vec2",
          VECTOR3: "vec3",
          VECTOR4: "vec4",
          MATRIX2: "mat2",
          MATRIX3: "mat3",
          MATRIX4: "mat4",
        },
        NodeUpdateType: C,
        OnMaterialUpdate: (e) => h_(hT.MATERIAL, e),
        OnObjectUpdate: (e) => h_(hT.OBJECT, e),
        PCFShadowFilter: cQ,
        PCFSoftShadowFilter: cY,
        PI: ra,
        PI2: ro,
        PointShadowFilter: pi,
        Return: () => i0("return").toStack(),
        Schlick_to_F0: lb,
        ScriptableNodeResources: cd,
        ShaderNode: ev,
        Stack: eI,
        Switch: (...e) => Q.Switch(...e),
        TBNViewMatrix: nq,
        VSMShadowFilter: cZ,
        V_GGX_SmithCorrelated: ld,
        Var: im,
        VarIntent: ib,
        abs: rw,
        acesFilmicToneMapping: h8,
        acos: rA,
        add: tk,
        addMethodChaining: Z,
        addNodeElement: function (e) {
          console.warn(
            "THREE.TSL: AddNodeElement has been removed in favor of tree-shaking. Trying add",
            e
          );
        },
        agxToneMapping: ce,
        all: rl,
        alphaT: tl,
        and: tZ,
        anisotropy: tu,
        anisotropyB: th,
        anisotropyT: td,
        any: ru,
        append: (e) => (
          console.warn("THREE.TSL: append() has been renamed to Stack()."),
          eI(e)
        ),
        array: tP,
        arrayBuffer: (e) => eN(new X(e, "ArrayBuffer")),
        asin: rR,
        assign: tU,
        atan: rE,
        atan2: ia,
        atomicAdd: (e, t) => cP(cL.ATOMIC_ADD, e, t),
        atomicAnd: (e, t) => cP(cL.ATOMIC_AND, e, t),
        atomicFunc: cP,
        atomicLoad: (e) => cP(cL.ATOMIC_LOAD, e, null),
        atomicMax: (e, t) => cP(cL.ATOMIC_MAX, e, t),
        atomicMin: (e, t) => cP(cL.ATOMIC_MIN, e, t),
        atomicOr: (e, t) => cP(cL.ATOMIC_OR, e, t),
        atomicStore: (e, t) => cP(cL.ATOMIC_STORE, e, t),
        atomicSub: (e, t) => cP(cL.ATOMIC_SUB, e, t),
        atomicXor: (e, t) => cP(cL.ATOMIC_XOR, e, t),
        attenuationColor: tN,
        attenuationDistance: tv,
        attribute: i5,
        attributeArray: (e, t = "float") => {
          let r, i;
          return (
            !0 === t.isStruct
              ? ((r = t.layout.getLength()), (i = _("float")))
              : ((r = v(t)), (i = _(t))),
            aX(new hN(e, r, i), t, e)
          );
        },
        backgroundBlurriness: hC,
        backgroundIntensity: hM,
        backgroundRotation: hB,
        batch: aW,
        bentNormalView: nX,
        billboarding: dZ,
        bitAnd: t2,
        bitNot: t3,
        bitOr: t4,
        bitXor: t6,
        bitangentGeometry: nz,
        bitangentLocal: n$,
        bitangentView: nW,
        bitangentWorld: nH,
        bitcast: rz,
        blendBurn: oL,
        blendColor: oU,
        blendDodge: oF,
        blendOverlay: oI,
        blendScreen: oP,
        blur: uo,
        bool: eG,
        buffer: su,
        bufferAttribute: iO,
        bumpMap: n0,
        burn: (...e) => (
          console.warn(
            'THREE.TSL: "burn" has been renamed. Use "blendBurn" instead.'
          ),
          oL(e)
        ),
        bvec2: eW,
        bvec3: eX,
        bvec4: eZ,
        bypass: iK,
        cache: ij,
        call: tV,
        cameraFar: sy,
        cameraIndex: sm,
        cameraNear: sf,
        cameraNormalMatrix: sv,
        cameraPosition: sN,
        cameraProjectionMatrix: sb,
        cameraProjectionMatrixInverse: sx,
        cameraViewMatrix: sT,
        cameraWorldMatrix: s_,
        cbrt: r3,
        cdl: hX,
        ceil: rx,
        checker: pg,
        cineonToneMapping: h4,
        clamp: r8,
        clearcoat: tt,
        clearcoatNormalView: s7,
        clearcoatRoughness: tr,
        code: ci,
        color: eU,
        colorSpaceToWorking: iM,
        colorToDirection: (e) => eN(e).mul(2).sub(1),
        compute: iH,
        computeKernel: iW,
        computeSkinning: (e, t = null) => {
          let r = new aQ(e);
          return (
            (r.positionNode = aX(
              new u.uWO(e.geometry.getAttribute("position").array, 3),
              "vec3"
            )
              .setPBO(!0)
              .toReadOnly()
              .element(aP)
              .toVar()),
            (r.skinIndexNode = aX(
              new u.uWO(
                new Uint32Array(e.geometry.getAttribute("skinIndex").array),
                4
              ),
              "uvec4"
            )
              .setPBO(!0)
              .toReadOnly()
              .element(aP)
              .toVar()),
            (r.skinWeightNode = aX(
              new u.uWO(e.geometry.getAttribute("skinWeight").array, 4),
              "vec4"
            )
              .setPBO(!0)
              .toReadOnly()
              .element(aP)
              .toVar()),
            (r.bindMatrixNode = tL(e.bindMatrix, "mat4")),
            (r.bindMatrixInverseNode = tL(e.bindMatrixInverse, "mat4")),
            (r.boneMatricesNode = su(
              e.skeleton.boneMatrices,
              "mat4",
              e.skeleton.bones.length
            )),
            (r.toPositionNode = t),
            eN(r)
          );
        },
        context: id,
        convert: e3,
        convertColorSpace: (e, t, r) => eN(new iw(eN(e), t, r)),
        convertToTexture: (e, ...t) =>
          e.isTextureNode ? e : e.isPassNode ? e.getTextureNode() : hm(e, ...t),
        cos: rN,
        cross: rY,
        cubeTexture: ny,
        cubeTextureBase: nf,
        cubeToUV: pt,
        dFdx: rF,
        dFdy: rP,
        dashSize: tf,
        debug: i6,
        decrement: rt,
        decrementBefore: t7,
        defaultBuildStages: L,
        defaultShaderStages: B,
        defined: eT,
        degrees: rh,
        deltaTime: dX,
        densityFog: function (e, t) {
          return (
            console.warn(
              'THREE.TSL: "densityFog( color, density )" is deprecated. Use "fog( color, densityFogFactor( density ) )" instead.'
            ),
            cf(e, cm(t))
          );
        },
        densityFogFactor: cm,
        depth: oN,
        depthPass: (e, t, r) => eN(new h0(h0.DEPTH, e, t, r)),
        determinant: rG,
        difference: rK,
        diffuseColor: e5,
        directPointLight: pc,
        directionToColor: oj,
        directionToFaceDirection: s1,
        dispersion: tS,
        distance: rX,
        div: tW,
        dodge: (...e) => (
          console.warn(
            'THREE.TSL: "dodge" has been renamed. Use "blendDodge" instead.'
          ),
          oF(e)
        ),
        dot: rQ,
        drawIndex: aV,
        dynamicBufferAttribute: iG,
        element: e2,
        emissive: e9,
        equal: tq,
        equals: r$,
        equirectUV: oQ,
        exp: rc,
        exp2: rp,
        expression: i0,
        faceDirection: s0,
        faceForward: ie,
        faceforward: ie,
        float: eD,
        floor: rb,
        fog: cf,
        fract: r_,
        frameGroup: tw,
        frameId: dK,
        frontFacing: sJ,
        fwidth: rV,
        gain: (e, t) =>
          e.lessThan(0.5)
            ? dG(e.mul(2), t).div(2)
            : tz(1, dG(t$(tz(1, e), 2), t).div(2)),
        gapSize: ty,
        getConstNodeType: e_,
        getCurrentStack: eF,
        getDirection: ui,
        getDistanceAttenuation: ph,
        getGeometryRoughness: ll,
        getNormalFromDepth: hb,
        getParallaxCorrectNormal: gt,
        getRoughness: lu,
        getScreenPosition: hy,
        getShIrradianceAt: gr,
        getShadowMaterial: c0,
        getShadowRenderObjectFunction: c3,
        getTextureIndex: dU,
        getViewPosition: hf,
        globalId: cR,
        glsl: (e, t) => ci(e, t, "glsl"),
        glslFn: (e, t) => cn(e, t, "glsl"),
        grayscale: h$,
        greaterThan: tK,
        greaterThanEqual: tY,
        hash: dO,
        highpModelNormalViewMatrix: sW,
        highpModelViewMatrix: s$,
        hue: hq,
        increment: re,
        incrementBefore: t9,
        instance: aG,
        instanceIndex: aP,
        instancedArray: (e, t = "float") => {
          let r, i;
          return (
            !0 === t.isStruct
              ? ((r = t.layout.getLength()), (i = _("float")))
              : ((r = v(t)), (i = _(t))),
            aX(new hv(e, r, i), t, e)
          );
        },
        instancedBufferAttribute: ik,
        instancedDynamicBufferAttribute: iz,
        instancedMesh: az,
        int: eV,
        inverse: rk,
        inverseSqrt: ry,
        inversesqrt: ry,
        invocationLocalIndex: aD,
        invocationSubgroupIndex: aU,
        ior: tx,
        iridescence: tn,
        iridescenceIOR: ta,
        iridescenceThickness: to,
        ivec2: ez,
        ivec3: eq,
        ivec4: eQ,
        js: (e, t) => ci(e, t, "js"),
        label: ic,
        length: rM,
        lengthSq: r4,
        lessThan: tX,
        lessThanEqual: tQ,
        lightPosition: cV,
        lightProjectionUV: cD,
        lightShadowMatrix: cU,
        lightTargetDirection: ck,
        lightTargetPosition: cO,
        lightViewPosition: cG,
        lightingContext: a7,
        lights: (e = []) => eN(new cH()).setLights(e),
        linearDepth: oS,
        linearToneMapping: h2,
        localId: cA,
        log: rg,
        log2: rm,
        logarithmicDepthToViewZ: (e, t, r) => {
          let i = e.mul(rg(r.div(t)));
          return eD(Math.E).pow(i).mul(t).negate();
        },
        luminance: hj,
        mat2: eJ,
        mat3: e0,
        mat4: e1,
        matcapUV: uW,
        materialAO: aC,
        materialAlphaTest: n3,
        materialAnisotropy: ac,
        materialAnisotropyVector: aM,
        materialAttenuationColor: aT,
        materialAttenuationDistance: ax,
        materialClearcoat: aa,
        materialClearcoatNormal: al,
        materialClearcoatRoughness: ao,
        materialColor: n4,
        materialDispersion: aE,
        materialEmissive: n8,
        materialEnvIntensity: nl,
        materialEnvRotation: nu,
        materialIOR: ab,
        materialIridescence: ap,
        materialIridescenceIOR: ag,
        materialIridescenceThickness: am,
        materialLightMap: aw,
        materialLineDashOffset: aR,
        materialLineDashSize: av,
        materialLineGapSize: aN,
        materialLineScale: a_,
        materialLineWidth: aS,
        materialMetalness: as,
        materialNormal: an,
        materialOpacity: n5,
        materialPointSize: aA,
        materialReference: nN,
        materialReflectivity: ar,
        materialRefractionRatio: no,
        materialRotation: au,
        materialRoughness: ai,
        materialSheen: ad,
        materialSheenRoughness: ah,
        materialShininess: n6,
        materialSpecular: n9,
        materialSpecularColor: ae,
        materialSpecularIntensity: n7,
        materialSpecularStrength: at,
        materialThickness: ay,
        materialTransmission: af,
        max: rH,
        maxMipLevel: sr,
        mediumpModelViewMatrix: sz,
        metalness: te,
        min: rW,
        mix: r6,
        mixElement: ir,
        mod: tH,
        modInt: rr,
        modelDirection: sF,
        modelNormalMatrix: sO,
        modelPosition: sI,
        modelRadius: sV,
        modelScale: sU,
        modelViewMatrix: sk,
        modelViewPosition: sD,
        modelViewProjection: aB,
        modelWorldMatrix: sP,
        modelWorldMatrixInverse: sG,
        morphReference: a6,
        mrt: dV,
        mul: t$,
        mx_aastep: p9,
        mx_add: (e, t = eD(0)) => tk(e, t),
        mx_atan2: (e = eD(0), t = eD(1)) => rE(e, t),
        mx_cell_noise_float: (e = i9()) => pz(e.convert("vec2|vec3")),
        mx_contrast: (e, t = 1, r = 0.5) => eD(e).sub(r).mul(t).add(r),
        mx_divide: (e, t = eD(1)) => tW(e, t),
        mx_fractal_noise_float: (e = i9(), t = 3, r = 2, i = 0.5, s = 1) =>
          pq(e, eV(t), r, i).mul(s),
        mx_fractal_noise_vec2: (e = i9(), t = 3, r = 2, i = 0.5, s = 1) =>
          pX(e, eV(t), r, i).mul(s),
        mx_fractal_noise_vec3: (e = i9(), t = 3, r = 2, i = 0.5, s = 1) =>
          pj(e, eV(t), r, i).mul(s),
        mx_fractal_noise_vec4: (e = i9(), t = 3, r = 2, i = 0.5, s = 1) =>
          pK(e, eV(t), r, i).mul(s),
        mx_frame: () => dK,
        mx_heighttonormal: (e, t) => n0((e = eH(e)), (t = eD(t))),
        mx_hsvtorgb: p6,
        mx_ifequal: (e, t, r, i) => e.equal(t).mix(r, i),
        mx_ifgreater: (e, t, r, i) => e.greaterThan(t).mix(r, i),
        mx_ifgreatereq: (e, t, r, i) => e.greaterThanEqual(t).mix(r, i),
        mx_invert: (e, t = eD(1)) => tz(t, e),
        mx_modulo: (e, t = eD(1)) => tH(e, t),
        mx_multiply: (e, t = eD(1)) => t$(e, t),
        mx_noise_float: (e = i9(), t = 1, r = 0) =>
          pV(e.convert("vec2|vec3")).mul(t).add(r),
        mx_noise_vec3: (e = i9(), t = 1, r = 0) =>
          pO(e.convert("vec2|vec3")).mul(t).add(r),
        mx_noise_vec4: (e = i9(), t = 1, r = 0) =>
          eK(pO((e = e.convert("vec2|vec3"))), pV(e.add(ek(19, 73))))
            .mul(t)
            .add(r),
        mx_place2d: (
          e,
          t = ek(0.5, 0.5),
          r = ek(1, 1),
          i = eD(0),
          s = ek(0, 0)
        ) => {
          let n = e;
          if ((t && (n = n.sub(t)), r && (n = n.mul(r)), i)) {
            let e = i.mul(Math.PI / 180),
              t = e.cos(),
              r = e.sin();
            n = ek(n.x.mul(t).sub(n.y.mul(r)), n.x.mul(r).add(n.y.mul(t)));
          }
          return t && (n = n.add(t)), s && (n = n.add(s)), n;
        },
        mx_power: (e, t = eD(1)) => rZ(e, t),
        mx_ramp4: (e, t, r, i, s = i9()) => {
          let n = s.x.clamp(),
            a = s.y.clamp(),
            o = r6(e, t, n),
            l = r6(r, i, n);
          return r6(o, l, a);
        },
        mx_ramplr: (e, t, r = i9()) => p7(e, t, r, "x"),
        mx_ramptb: (e, t, r = i9()) => p7(e, t, r, "y"),
        mx_rgbtohsv: p8,
        mx_rotate2d: (e, t) => uX((e = ek(e)), (t = eD(t)).mul(Math.PI / 180)),
        mx_rotate3d: (e, t, r) => {
          (e = eH(e)), (t = eD(t)), (r = eH(r));
          let i = t.mul(Math.PI / 180),
            s = r.normalize(),
            n = i.cos(),
            a = i.sin(),
            o = eD(1).sub(n);
          return e
            .mul(n)
            .add(s.cross(e).mul(a))
            .add(s.mul(s.dot(e)).mul(o));
        },
        mx_safepower: (e, t = 1) => (e = eD(e)).abs().pow(t).mul(e.sign()),
        mx_separate: (e, t = null) => {
          if ("string" == typeof t) {
            let r = { x: 0, r: 0, y: 1, g: 1, z: 2, b: 2, w: 3, a: 3 },
              i = t.replace(/^out/, "").toLowerCase();
            if (void 0 !== r[i]) return e.element(r[i]);
          }
          if ("number" == typeof t) return e.element(t);
          if ("string" == typeof t && 1 === t.length) {
            let r = { x: 0, r: 0, y: 1, g: 1, z: 2, b: 2, w: 3, a: 3 };
            if (void 0 !== r[t]) return e.element(r[t]);
          }
          return e;
        },
        mx_splitlr: (e, t, r, i = i9()) => ge(e, t, r, i, "x"),
        mx_splittb: (e, t, r, i = i9()) => ge(e, t, r, i, "y"),
        mx_srgb_texture_to_lin_rec709: p5,
        mx_subtract: (e, t = eD(0)) => tz(e, t),
        mx_timer: () => dj,
        mx_transform_uv: (e = 1, t = 0, r = i9()) => r.mul(e).add(t),
        mx_unifiednoise2d: (
          e,
          t = i9(),
          r = ek(1, 1),
          i = ek(0, 0),
          s = 1,
          n = 0,
          a = 1,
          o = !1,
          l = 1,
          u = 2,
          d = 0.5
        ) => p3(e, t.convert("vec2|vec3"), r, i, s, n, a, o, l, u, d),
        mx_unifiednoise3d: (
          e,
          t = i9(),
          r = ek(1, 1),
          i = ek(0, 0),
          s = 1,
          n = 0,
          a = 1,
          o = !1,
          l = 1,
          u = 2,
          d = 0.5
        ) => p4(e, t.convert("vec2|vec3"), r, i, s, n, a, o, l, u, d),
        mx_worley_noise_float: (e = i9(), t = 1) =>
          p0(e.convert("vec2|vec3"), t, eV(1)),
        mx_worley_noise_vec2: (e = i9(), t = 1) =>
          p1(e.convert("vec2|vec3"), t, eV(1)),
        mx_worley_noise_vec3: (e = i9(), t = 1) =>
          p2(e.convert("vec2|vec3"), t, eV(1)),
        negate: rB,
        neutralToneMapping: ct,
        nodeArray: eA,
        nodeImmutable: ew,
        nodeObject: eN,
        nodeObjectIntent: eS,
        nodeObjects: eR,
        nodeProxy: eE,
        nodeProxyIntent: eC,
        normalFlat: s4,
        normalGeometry: s2,
        normalLocal: s3,
        normalMap: nQ,
        normalView: s5,
        normalViewGeometry: s6,
        normalWorld: s9,
        normalWorldGeometry: s8,
        normalize: rT,
        not: t0,
        notEqual: tj,
        numWorkgroups: cN,
        objectDirection: sA,
        objectGroup: tM,
        objectPosition: sw,
        objectRadius: sB,
        objectScale: sC,
        objectViewPosition: sM,
        objectWorldMatrix: sE,
        oneMinus: rL,
        or: tJ,
        orthographicDepthToViewZ: (e, t, r) => t.sub(r).mul(e).sub(t),
        oscSawtooth: (e = dj) => e.fract(),
        oscSine: (e = dj) =>
          e
            .add(0.75)
            .mul(2 * Math.PI)
            .sin()
            .mul(0.5)
            .add(0.5),
        oscSquare: (e = dj) => e.fract().round(),
        oscTriangle: (e = dj) => e.add(0.5).fract().mul(2).sub(1).abs(),
        output: tm,
        outputStruct: dI,
        overlay: (...e) => (
          console.warn(
            'THREE.TSL: "overlay" has been renamed. Use "blendOverlay" instead.'
          ),
          oI(e)
        ),
        overloadingFn: dq,
        parabola: dG,
        parallaxDirection: nj,
        parallaxUV: (e, t) => e.sub(nj.mul(t)),
        parameter: (e, t) => eN(new dC(e, t)),
        pass: (e, t, r) => eN(new h0(h0.COLOR, e, t, r)),
        passTexture: (e, t) => eN(new hZ(e, t)),
        pcurve: (e, t, r) =>
          rZ(tW(rZ(e, t), tk(rZ(e, t), rZ(tz(1, e), r))), 1 / t),
        perspectiveDepthToViewZ: oT,
        pmremTexture: uB,
        pointShadow: pu,
        pointUV: hR,
        pointWidth: tb,
        positionGeometry: sH,
        positionLocal: sq,
        positionPrevious: sj,
        positionView: sQ,
        positionViewDirection: sY,
        positionWorld: sX,
        positionWorldDirection: sK,
        posterize: hQ,
        pow: rZ,
        pow2: rJ,
        pow3: r0,
        pow4: r1,
        premultiplyAlpha: oD,
        property: e6,
        radians: rd,
        rand: it,
        range: cT,
        rangeFog: function (e, t, r) {
          return (
            console.warn(
              'THREE.TSL: "rangeFog( color, near, far )" is deprecated. Use "fog( color, rangeFogFactor( near, far ) )" instead.'
            ),
            cf(e, cg(t, r))
          );
        },
        rangeFogFactor: cg,
        reciprocal: rU,
        reference: nT,
        referenceBuffer: n_,
        reflect: rj,
        reflectVector: nc,
        reflectView: nd,
        reflector: (e) => eN(new ho(e)),
        refract: r9,
        refractVector: np,
        refractView: nh,
        reinhardToneMapping: h3,
        remap: iY,
        remapClamp: iZ,
        renderGroup: tC,
        renderOutput: i3,
        rendererReference: iP,
        rotate: uX,
        rotateUV: dQ,
        roughness: e7,
        round: rI,
        rtt: hm,
        sRGBTransferEOTF: iR,
        sRGBTransferOETF: iA,
        sample: (e) => eN(new hx(e)),
        sampler: (e) => (!0 === e.isNode ? e : sa(e)).convert("sampler"),
        samplerComparison: (e) =>
          (!0 === e.isNode ? e : sa(e)).convert("samplerComparison"),
        saturate: r5,
        saturation: hW,
        screen: (...e) => (
          console.warn(
            'THREE.TSL: "screen" has been renamed. Use "blendScreen" instead.'
          ),
          oP(e)
        ),
        screenCoordinate: os,
        screenSize: oi,
        screenUV: or,
        scriptable: cc,
        scriptableValue: co,
        select: il,
        setCurrentStack: eL,
        setName: ih,
        shaderStages: F,
        shadow: c7,
        shadowPositionWorld: cj,
        shapeCircle: pm,
        sharedUniformGroup: tE,
        sheen: ti,
        sheenRoughness: ts,
        shiftLeft: t8,
        shiftRight: t5,
        shininess: tg,
        sign: rC,
        sin: rv,
        sinc: (e, t) =>
          rv(ra.mul(t.mul(e).sub(1))).div(ra.mul(t.mul(e).sub(1))),
        skinning: aY,
        smoothstep: r7,
        smoothstepElement: ii,
        specularColor: tc,
        specularF90: tp,
        spherizeUV: dY,
        split: (e, t) => eN(new $(eN(e), t)),
        spritesheetUV: d1,
        sqrt: rf,
        stack: dB,
        step: rq,
        stepElement: is,
        storage: aX,
        storageBarrier: () => cC("storage").toStack(),
        storageObject: (e, t, r) => (
          console.warn(
            'THREE.TSL: "storageObject()" is deprecated. Use "storage().setPBO( true )" instead.'
          ),
          aX(e, t, r).setPBO(!0)
        ),
        storageTexture: hF,
        string: (e = "") => eN(new X(e, "string")),
        struct: (e, t = null) => {
          let r = new dL(e, t),
            i = (...t) => {
              let i = null;
              if (t.length > 0)
                if (t[0].isNode) {
                  i = {};
                  let r = Object.keys(e);
                  for (let e = 0; e < t.length; e++) i[r[e]] = t[e];
                } else i = t[0];
              return eN(new dF(r, i));
            };
          return (i.layout = r), (i.isStruct = !0), i;
        },
        sub: tz,
        subBuild: i_,
        subgroupIndex: aI,
        subgroupSize: cE,
        tan: rS,
        tangentGeometry: nD,
        tangentLocal: nV,
        tangentView: nO,
        tangentWorld: nG,
        temp: ix,
        texture: sa,
        texture3D: hU,
        textureBarrier: () => cC("texture").toStack(),
        textureBicubic: lD,
        textureBicubicLevel: lU,
        textureCubeUV: us,
        textureLoad: so,
        textureSize: se,
        textureStore: (e, t, r) => {
          let i = hF(e, t, r);
          return null !== r && i.toStack(), i;
        },
        thickness: t_,
        time: dj,
        timerDelta: (e = 1) => (
          console.warn(
            'TSL: timerDelta() is deprecated. Use "deltaTime" instead.'
          ),
          dX.mul(e)
        ),
        timerGlobal: (e = 1) => (
          console.warn('TSL: timerGlobal() is deprecated. Use "time" instead.'),
          dj.mul(e)
        ),
        timerLocal: (e = 1) => (
          console.warn('TSL: timerLocal() is deprecated. Use "time" instead.'),
          dj.mul(e)
        ),
        toneMapping: iU,
        toneMappingExposure: iD,
        toonOutlinePass: (e, t, r = new u.Q1f(0, 0, 0), i = 0.003, s = 1) =>
          eN(new h1(e, t, eN(r), eN(i), eN(s))),
        transformDirection: r2,
        transformNormal: ne,
        transformNormalToView: nt,
        transformedClearcoatNormalView: ns,
        transformedNormalView: nr,
        transformedNormalWorld: ni,
        transmission: tT,
        transpose: rO,
        triNoise3D: d$,
        triplanarTexture: (...e) => d2(...e),
        triplanarTextures: d2,
        trunc: rD,
        uint: eO,
        uniform: tL,
        uniformArray: sc,
        uniformCubeTexture: (e = ng) => nf(e),
        uniformGroup: tA,
        uniformTexture: (e = si) => sa(e),
        unpremultiplyAlpha: oV,
        userData: (e, t, r) => eN(new hD(e, t, r)),
        uv: i9,
        uvec2: e$,
        uvec3: ej,
        uvec4: eY,
        varying: iN,
        varyingProperty: e8,
        vec2: ek,
        vec3: eH,
        vec4: eK,
        vectorComponents: P,
        velocity: hz,
        vertexColor: oB,
        vertexIndex: aF,
        vertexStage: iS,
        vibrance: hH,
        viewZToLogarithmicDepth: o_,
        viewZToOrthographicDepth: ob,
        viewZToPerspectiveDepth: ox,
        viewport: on,
        viewportCoordinate: oo,
        viewportDepthTexture: of,
        viewportLinearDepth: oR,
        viewportMipTexture: op,
        viewportResolution: ou,
        viewportSafeUV: dJ,
        viewportSharedTexture: oq,
        viewportSize: oa,
        viewportTexture: oc,
        viewportUV: ol,
        wgsl: (e, t) => ci(e, t, "wgsl"),
        wgslFn: (e, t) => cn(e, t, "wgsl"),
        workgroupArray: (e, t) => eN(new cB("Workgroup", e, t)),
        workgroupBarrier: () => cC("workgroup").toStack(),
        workgroupId: cS,
        workingToColorSpace: iC,
        xor: t1,
      });
      let gs = new dw();
      class gn extends u9 {
        constructor(e, t) {
          super(), (this.renderer = e), (this.nodes = t);
        }
        update(e, t, r) {
          let i = this.renderer,
            s = this.nodes.getBackgroundNode(e) || e.background,
            n = !1;
          if (null === s) i._clearColor.getRGB(gs), (gs.a = i._clearColor.a);
          else if (!0 === s.isColor) s.getRGB(gs), (gs.a = 1), (n = !0);
          else if (!0 === s.isNode) {
            let r = this.get(e);
            gs.copy(i._clearColor);
            let n = r.backgroundMesh;
            if (void 0 === n) {
              let e = id(eK(s).mul(hM), {
                  getUV: () => hB.mul(s8),
                  getTextureLevel: () => hC,
                }),
                t = aB;
              t = t.setZ(t.w);
              let i = new oO();
              (i.name = "Background.material"),
                (i.side = u.hsX),
                (i.depthTest = !1),
                (i.depthWrite = !1),
                (i.allowOverride = !1),
                (i.fog = !1),
                (i.lights = !1),
                (i.vertexNode = t),
                (i.colorNode = e),
                (r.backgroundMeshNode = e),
                (r.backgroundMesh = n = new u.eaF(new u.Gu$(1, 32, 32), i)),
                (n.frustumCulled = !1),
                (n.name = "Background.mesh"),
                (n.onBeforeRender = function (e, t, r) {
                  this.matrixWorld.copyPosition(r.matrixWorld);
                }),
                s.addEventListener("dispose", function e() {
                  s.removeEventListener("dispose", e),
                    n.material.dispose(),
                    n.geometry.dispose();
                });
            }
            let a = s.getCacheKey();
            r.backgroundCacheKey !== a &&
              ((r.backgroundMeshNode.node = eK(s).mul(hM)),
              (r.backgroundMeshNode.needsUpdate = !0),
              (n.material.needsUpdate = !0),
              (r.backgroundCacheKey = a)),
              t.unshift(n, n.geometry, n.material, 0, 0, null, null);
          } else
            console.error(
              "THREE.Renderer: Unsupported background configuration.",
              s
            );
          let a = i.xr.getEnvironmentBlendMode();
          if (
            ("additive" === a
              ? gs.set(0, 0, 0, 1)
              : "alpha-blend" === a && gs.set(0, 0, 0, 0),
            !0 === i.autoClear || !0 === n)
          ) {
            let e = r.clearColorValue;
            (e.r = gs.r),
              (e.g = gs.g),
              (e.b = gs.b),
              (e.a = gs.a),
              (!0 === i.backend.isWebGLBackend || !0 === i.alpha) &&
                ((e.r *= e.a), (e.g *= e.a), (e.b *= e.a)),
              (r.depthClearValue = i._clearDepth),
              (r.stencilClearValue = i._clearStencil),
              (r.clearColor = !0 === i.autoClearColor),
              (r.clearDepth = !0 === i.autoClearDepth),
              (r.clearStencil = !0 === i.autoClearStencil);
          } else
            (r.clearColor = !1), (r.clearDepth = !1), (r.clearStencil = !1);
        }
      }
      let ga = 0;
      class go {
        constructor(e = "", t = [], r = 0, i = []) {
          (this.name = e),
            (this.bindings = t),
            (this.index = r),
            (this.bindingsReference = i),
            (this.id = ga++);
        }
      }
      class gl {
        constructor(e, t, r, i, s, n, a, o, l, u = []) {
          (this.vertexShader = e),
            (this.fragmentShader = t),
            (this.computeShader = r),
            (this.transforms = u),
            (this.nodeAttributes = i),
            (this.bindings = s),
            (this.updateNodes = n),
            (this.updateBeforeNodes = a),
            (this.updateAfterNodes = o),
            (this.observer = l),
            (this.usedTimes = 0);
        }
        createBindings() {
          let e = [];
          for (let t of this.bindings)
            if (!0 !== t.bindings[0].groupNode.shared) {
              let r = new go(t.name, [], t.index, t);
              for (let i of (e.push(r), t.bindings)) r.bindings.push(i.clone());
            } else e.push(t);
          return e;
        }
      }
      class gu {
        constructor(e, t, r = null) {
          (this.isNodeAttribute = !0),
            (this.name = e),
            (this.type = t),
            (this.node = r);
        }
      }
      class gd {
        constructor(e, t, r) {
          (this.isNodeUniform = !0),
            (this.name = e),
            (this.type = t),
            (this.node = r.getSelf());
        }
        get value() {
          return this.node.value;
        }
        set value(e) {
          this.node.value = e;
        }
        get id() {
          return this.node.id;
        }
        get groupNode() {
          return this.node.groupNode;
        }
      }
      class gh {
        constructor(e, t, r = !1, i = null) {
          (this.isNodeVar = !0),
            (this.name = e),
            (this.type = t),
            (this.readOnly = r),
            (this.count = i);
        }
      }
      class gc extends gh {
        constructor(e, t, r = null, i = null) {
          super(e, t),
            (this.needsInterpolation = !1),
            (this.isNodeVarying = !0),
            (this.interpolationType = r),
            (this.interpolationSampling = i);
        }
      }
      class gp {
        constructor(e, t, r = "") {
          (this.name = e),
            (this.type = t),
            (this.code = r),
            Object.defineProperty(this, "isNodeCode", { value: !0 });
        }
      }
      let gg = 0;
      class gm {
        constructor(e = null) {
          (this.id = gg++), (this.nodesData = new WeakMap()), (this.parent = e);
        }
        getData(e) {
          let t = this.nodesData.get(e);
          return (
            void 0 === t &&
              null !== this.parent &&
              (t = this.parent.getData(e)),
            t
          );
        }
        setData(e, t) {
          this.nodesData.set(e, t);
        }
      }
      class gf {
        constructor(e, t) {
          (this.name = e), (this.members = t), (this.output = !1);
        }
      }
      class gy {
        constructor(e, t) {
          (this.name = e),
            (this.value = t),
            (this.boundary = 0),
            (this.itemSize = 0),
            (this.offset = 0);
        }
        setValue(e) {
          this.value = e;
        }
        getValue() {
          return this.value;
        }
      }
      class gb extends gy {
        constructor(e, t = 0) {
          super(e, t),
            (this.isNumberUniform = !0),
            (this.boundary = 4),
            (this.itemSize = 1);
        }
      }
      class gx extends gy {
        constructor(e, t = new u.I9Y()) {
          super(e, t),
            (this.isVector2Uniform = !0),
            (this.boundary = 8),
            (this.itemSize = 2);
        }
      }
      class gT extends gy {
        constructor(e, t = new u.Pq0()) {
          super(e, t),
            (this.isVector3Uniform = !0),
            (this.boundary = 16),
            (this.itemSize = 3);
        }
      }
      class g_ extends gy {
        constructor(e, t = new u.IUQ()) {
          super(e, t),
            (this.isVector4Uniform = !0),
            (this.boundary = 16),
            (this.itemSize = 4);
        }
      }
      class gv extends gy {
        constructor(e, t = new u.Q1f()) {
          super(e, t),
            (this.isColorUniform = !0),
            (this.boundary = 16),
            (this.itemSize = 3);
        }
      }
      class gN extends gy {
        constructor(e, t = new u.k_V()) {
          super(e, t),
            (this.isMatrix2Uniform = !0),
            (this.boundary = 8),
            (this.itemSize = 4);
        }
      }
      class gS extends gy {
        constructor(e, t = new u.dwI()) {
          super(e, t),
            (this.isMatrix3Uniform = !0),
            (this.boundary = 48),
            (this.itemSize = 12);
        }
      }
      class gR extends gy {
        constructor(e, t = new u.kn4()) {
          super(e, t),
            (this.isMatrix4Uniform = !0),
            (this.boundary = 64),
            (this.itemSize = 16);
        }
      }
      class gA extends gb {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gE extends gx {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gw extends gT {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gC extends g_ {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gM extends gv {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gB extends gN {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gL extends gS {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      class gF extends gR {
        constructor(e) {
          super(e.name, e.value), (this.nodeUniform = e);
        }
        getValue() {
          return this.nodeUniform.value;
        }
        getType() {
          return this.nodeUniform.type;
        }
      }
      let gP = new WeakMap(),
        gI = new Map([
          [Int8Array, "int"],
          [Int16Array, "int"],
          [Int32Array, "int"],
          [Uint8Array, "uint"],
          [Uint16Array, "uint"],
          [Uint32Array, "uint"],
          [Float32Array, "float"],
        ]),
        gU = (e) =>
          /e/g.test(e)
            ? String(e).replace(/\+/g, "")
            : (e = Number(e)) + (e % 1 ? "" : ".0");
      class gD {
        constructor(e, t, r) {
          (this.object = e),
            (this.material = (e && e.material) || null),
            (this.geometry = (e && e.geometry) || null),
            (this.renderer = t),
            (this.parser = r),
            (this.scene = null),
            (this.camera = null),
            (this.nodes = []),
            (this.sequentialNodes = []),
            (this.updateNodes = []),
            (this.updateBeforeNodes = []),
            (this.updateAfterNodes = []),
            (this.hashNodes = {}),
            (this.observer = null),
            (this.lightsNode = null),
            (this.environmentNode = null),
            (this.fogNode = null),
            (this.clippingContext = null),
            (this.vertexShader = null),
            (this.fragmentShader = null),
            (this.computeShader = null),
            (this.flowNodes = { vertex: [], fragment: [], compute: [] }),
            (this.flowCode = { vertex: "", fragment: "", compute: "" }),
            (this.uniforms = {
              vertex: [],
              fragment: [],
              compute: [],
              index: 0,
            }),
            (this.structs = {
              vertex: [],
              fragment: [],
              compute: [],
              index: 0,
            }),
            (this.bindings = { vertex: {}, fragment: {}, compute: {} }),
            (this.bindingsIndexes = {}),
            (this.bindGroups = null),
            (this.attributes = []),
            (this.bufferAttributes = []),
            (this.varyings = []),
            (this.codes = {}),
            (this.vars = {}),
            (this.declarations = {}),
            (this.flow = { code: "" }),
            (this.chaining = []),
            (this.stack = dB()),
            (this.stacks = []),
            (this.tab = "	"),
            (this.currentFunctionNode = null),
            (this.context = { material: this.material }),
            (this.cache = new gm()),
            (this.globalCache = this.cache),
            (this.flowsData = new WeakMap()),
            (this.shaderStage = null),
            (this.buildStage = null),
            (this.subBuildLayers = []),
            (this.currentStack = null),
            (this.subBuildFn = null);
        }
        getBindGroupsCache() {
          let e = gP.get(this.renderer);
          return void 0 === e && ((e = new u3()), gP.set(this.renderer, e)), e;
        }
        createRenderTarget(e, t, r) {
          return new u.O0B(e, t, r);
        }
        createCubeRenderTarget(e, t) {
          return new oY(e, t);
        }
        includes(e) {
          return this.nodes.includes(e);
        }
        getOutputStructName() {}
        _getBindGroup(e, t) {
          let r,
            i = this.getBindGroupsCache(),
            s = [],
            n = !0;
          for (let e of t) s.push(e), (n = n && !0 !== e.groupNode.shared);
          return (
            n
              ? void 0 === (r = i.get(s)) &&
                ((r = new go(e, s, this.bindingsIndexes[e].group, s)),
                i.set(s, r))
              : (r = new go(e, s, this.bindingsIndexes[e].group, s)),
            r
          );
        }
        getBindGroupArray(e, t) {
          let r = this.bindings[t],
            i = r[e];
          return (
            void 0 === i &&
              (void 0 === this.bindingsIndexes[e] &&
                (this.bindingsIndexes[e] = {
                  binding: 0,
                  group: Object.keys(this.bindingsIndexes).length,
                }),
              (r[e] = i = [])),
            i
          );
        }
        getBindings() {
          let e = this.bindGroups;
          if (null === e) {
            let t = {},
              r = this.bindings;
            for (let e of F)
              for (let i in r[e]) {
                let s = r[e][i];
                (t[i] || (t[i] = [])).push(...s);
              }
            for (let r in ((e = []), t)) {
              let i = t[r],
                s = this._getBindGroup(r, i);
              e.push(s);
            }
            this.bindGroups = e;
          }
          return e;
        }
        sortBindingGroups() {
          let e = this.getBindings();
          e.sort(
            (e, t) =>
              e.bindings[0].groupNode.order - t.bindings[0].groupNode.order
          );
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            (this.bindingsIndexes[r.name].group = t), (r.index = t);
          }
        }
        setHashNode(e, t) {
          this.hashNodes[t] = e;
        }
        addNode(e) {
          !1 === this.nodes.includes(e) &&
            (this.nodes.push(e), this.setHashNode(e, e.getHash(this)));
        }
        addSequentialNode(e) {
          !1 === this.sequentialNodes.includes(e) &&
            this.sequentialNodes.push(e);
        }
        buildUpdateNodes() {
          for (let e of this.nodes)
            e.getUpdateType() !== C.NONE && this.updateNodes.push(e.getSelf());
          for (let e of this.sequentialNodes) {
            let t = e.getUpdateBeforeType(),
              r = e.getUpdateAfterType();
            t !== C.NONE && this.updateBeforeNodes.push(e.getSelf()),
              r !== C.NONE && this.updateAfterNodes.push(e.getSelf());
          }
        }
        get currentNode() {
          return this.chaining[this.chaining.length - 1];
        }
        isFilteredTexture(e) {
          return (
            e.magFilter === u.k6q ||
            e.magFilter === u.kRr ||
            e.magFilter === u.Cfg ||
            e.magFilter === u.$_I ||
            e.minFilter === u.k6q ||
            e.minFilter === u.kRr ||
            e.minFilter === u.Cfg ||
            e.minFilter === u.$_I
          );
        }
        addChain(e) {
          this.chaining.push(e);
        }
        removeChain(e) {
          if (this.chaining.pop() !== e)
            throw Error("NodeBuilder: Invalid node chaining!");
        }
        getMethod(e) {
          return e;
        }
        getNodeFromHash(e) {
          return this.hashNodes[e];
        }
        addFlow(e, t) {
          return this.flowNodes[e].push(t), t;
        }
        setContext(e) {
          this.context = e;
        }
        getContext() {
          return this.context;
        }
        getSharedContext() {
          return { ...this.context }, this.context;
        }
        setCache(e) {
          this.cache = e;
        }
        getCache() {
          return this.cache;
        }
        getCacheFromNode(e, t = !0) {
          let r = this.getDataFromNode(e);
          return (
            void 0 === r.cache &&
              (r.cache = new gm(t ? this.getCache() : null)),
            r.cache
          );
        }
        isAvailable() {
          return !1;
        }
        getVertexIndex() {
          console.warn("Abstract function.");
        }
        getInstanceIndex() {
          console.warn("Abstract function.");
        }
        getDrawIndex() {
          console.warn("Abstract function.");
        }
        getFrontFacing() {
          console.warn("Abstract function.");
        }
        getFragCoord() {
          console.warn("Abstract function.");
        }
        isFlipY() {
          return !1;
        }
        increaseUsage(e) {
          let t = this.getDataFromNode(e);
          return (
            (t.usageCount = void 0 === t.usageCount ? 1 : t.usageCount + 1),
            t.usageCount
          );
        }
        generateTexture() {
          console.warn("Abstract function.");
        }
        generateTextureLod() {
          console.warn("Abstract function.");
        }
        generateArrayDeclaration(e, t) {
          return this.getType(e) + "[ " + t + " ]";
        }
        generateArray(e, t, r = null) {
          let i = this.generateArrayDeclaration(e, t) + "( ";
          for (let s = 0; s < t; s++) {
            let n = r ? r[s] : null;
            null !== n ? (i += n.build(this, e)) : (i += this.generateConst(e)),
              s < t - 1 && (i += ", ");
          }
          return i + " )";
        }
        generateStruct(e, t, r = null) {
          let i = [];
          for (let e of t) {
            let { name: t, type: s } = e;
            r && r[t] && r[t].isNode
              ? i.push(r[t].build(this, s))
              : i.push(this.generateConst(s));
          }
          return e + "( " + i.join(", ") + " )";
        }
        generateConst(e, t = null) {
          if (
            (null === t &&
              ("float" === e || "int" === e || "uint" === e
                ? (t = 0)
                : "bool" === e
                ? (t = !1)
                : "color" === e
                ? (t = new u.Q1f())
                : "vec2" === e
                ? (t = new u.I9Y())
                : "vec3" === e
                ? (t = new u.Pq0())
                : "vec4" === e && (t = new u.IUQ())),
            "float" === e)
          )
            return gU(t);
          if ("int" === e) return `${Math.round(t)}`;
          if ("uint" === e) return t >= 0 ? `${Math.round(t)}u` : "0u";
          if ("bool" === e) return t ? "true" : "false";
          if ("color" === e)
            return `${this.getType("vec3")}( ${gU(t.r)}, ${gU(t.g)}, ${gU(
              t.b
            )} )`;
          let r = this.getTypeLength(e),
            i = this.getComponentType(e),
            s = (e) => this.generateConst(i, e);
          if (2 === r) return `${this.getType(e)}( ${s(t.x)}, ${s(t.y)} )`;
          if (3 === r)
            return `${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)} )`;
          if (4 === r && "mat2" !== e)
            return `${this.getType(e)}( ${s(t.x)}, ${s(t.y)}, ${s(t.z)}, ${s(
              t.w
            )} )`;
          if (r >= 4 && t && (t.isMatrix2 || t.isMatrix3 || t.isMatrix4))
            return `${this.getType(e)}( ${t.elements.map(s).join(", ")} )`;
          if (r > 4) return `${this.getType(e)}()`;
          throw Error(
            `NodeBuilder: Type '${e}' not found in generate constant attempt.`
          );
        }
        getType(e) {
          return "color" === e ? "vec3" : e;
        }
        hasGeometryAttribute(e) {
          return this.geometry && void 0 !== this.geometry.getAttribute(e);
        }
        getAttribute(e, t) {
          let r = this.attributes;
          for (let t of r) if (t.name === e) return t;
          let i = new gu(e, t);
          return this.registerDeclaration(i), r.push(i), i;
        }
        getPropertyName(e) {
          return e.name;
        }
        isVector(e) {
          return /vec\d/.test(e);
        }
        isMatrix(e) {
          return /mat\d/.test(e);
        }
        isReference(e) {
          return (
            "void" === e ||
            "property" === e ||
            "sampler" === e ||
            "samplerComparison" === e ||
            "texture" === e ||
            "cubeTexture" === e ||
            "storageTexture" === e ||
            "depthTexture" === e ||
            "texture3D" === e
          );
        }
        needsToWorkingColorSpace() {
          return !1;
        }
        getComponentTypeFromTexture(e) {
          let t = e.type;
          if (e.isDataTexture) {
            if (t === u.Yuy) return "int";
            if (t === u.bkx) return "uint";
          }
          return "float";
        }
        getElementType(e) {
          return "mat2" === e
            ? "vec2"
            : "mat3" === e
            ? "vec3"
            : "mat4" === e
            ? "vec4"
            : this.getComponentType(e);
        }
        getComponentType(e) {
          if (
            "float" === (e = this.getVectorType(e)) ||
            "bool" === e ||
            "int" === e ||
            "uint" === e
          )
            return e;
          let t = /(b|i|u|)(vec|mat)([2-4])/.exec(e);
          return null === t
            ? null
            : "b" === t[1]
            ? "bool"
            : "i" === t[1]
            ? "int"
            : "u" === t[1]
            ? "uint"
            : "float";
        }
        getVectorType(e) {
          return "color" === e
            ? "vec3"
            : "texture" === e ||
              "cubeTexture" === e ||
              "storageTexture" === e ||
              "texture3D" === e
            ? "vec4"
            : e;
        }
        getTypeFromLength(e, t = "float") {
          if (1 === e) return t;
          let r = x.get(e),
            i = "float" === t ? "" : t[0];
          return !0 === /mat2/.test(t) && (r = r.replace("vec", "mat")), i + r;
        }
        getTypeFromArray(e) {
          return gI.get(e.constructor);
        }
        isInteger(e) {
          return /int|uint|(i|u)vec/.test(e);
        }
        getTypeFromAttribute(e) {
          let t,
            r = e;
          e.isInterleavedBufferAttribute && (r = e.data);
          let i = r.array,
            s = e.itemSize,
            n = e.normalized;
          return (
            e instanceof u.Oax || !0 === n || (t = this.getTypeFromArray(i)),
            this.getTypeFromLength(s, t)
          );
        }
        getTypeLength(e) {
          let t = this.getVectorType(e),
            r = /vec([2-4])/.exec(t);
          return null !== r
            ? Number(r[1])
            : "float" === t || "bool" === t || "int" === t || "uint" === t
            ? 1
            : !0 === /mat2/.test(e)
            ? 4
            : !0 === /mat3/.test(e)
            ? 9
            : 16 * (!0 === /mat4/.test(e));
        }
        getVectorFromMatrix(e) {
          return e.replace("mat", "vec");
        }
        changeComponentType(e, t) {
          return this.getTypeFromLength(this.getTypeLength(e), t);
        }
        getIntegerType(e) {
          let t = this.getComponentType(e);
          return "int" === t || "uint" === t
            ? e
            : this.changeComponentType(e, "int");
        }
        addStack() {
          return (
            (this.stack = dB(this.stack)),
            this.stacks.push(eF() || this.stack),
            eL(this.stack),
            this.stack
          );
        }
        removeStack() {
          let e = this.stack;
          return (this.stack = e.parent), eL(this.stacks.pop()), e;
        }
        getDataFromNode(e, t = this.shaderStage, r = null) {
          let i = (r =
            null === r
              ? e.isGlobal(this)
                ? this.globalCache
                : this.cache
              : r).getData(e);
          void 0 === i && ((i = {}), r.setData(e, i)),
            void 0 === i[t] && (i[t] = {});
          let s = i[t],
            n = i.any ? i.any.subBuilds : null,
            a = this.getClosestSubBuild(n);
          return (
            a &&
              (void 0 === s.subBuildsCache && (s.subBuildsCache = {}),
              ((s =
                s.subBuildsCache[a] || (s.subBuildsCache[a] = {})).subBuilds =
                n)),
            s
          );
        }
        getNodeProperties(e, t = "any") {
          let r = this.getDataFromNode(e, t);
          return r.properties || (r.properties = { outputNode: null });
        }
        getBufferAttributeFromNode(e, t) {
          let r = this.getDataFromNode(e),
            i = r.bufferAttribute;
          return (
            void 0 === i &&
              ((i = new gu("nodeAttribute" + this.uniforms.index++, t, e)),
              this.bufferAttributes.push(i),
              (r.bufferAttribute = i)),
            i
          );
        }
        getStructTypeFromNode(e, t, r = null, i = this.shaderStage) {
          let s = this.getDataFromNode(e, i, this.globalCache),
            n = s.structType;
          if (void 0 === n) {
            let e = this.structs.index++;
            null === r && (r = "StructType" + e),
              (n = new gf(r, t)),
              this.structs[i].push(n),
              (s.structType = n);
          }
          return n;
        }
        getOutputStructTypeFromNode(e, t) {
          let r = this.getStructTypeFromNode(e, t, "OutputType", "fragment");
          return (r.output = !0), r;
        }
        getUniformFromNode(e, t, r = this.shaderStage, i = null) {
          let s = this.getDataFromNode(e, r, this.globalCache),
            n = s.uniform;
          if (void 0 === n) {
            let a = this.uniforms.index++;
            (n = new gd(i || "nodeUniform" + a, t, e)),
              this.uniforms[r].push(n),
              this.registerDeclaration(n),
              (s.uniform = n);
          }
          return n;
        }
        getVarFromNode(
          e,
          t = null,
          r = e.getNodeType(this),
          i = this.shaderStage,
          s = !1
        ) {
          let n = this.getDataFromNode(e, i),
            a = this.getSubBuildProperty("variable", n.subBuilds),
            o = n[a];
          if (void 0 === o) {
            let l = s ? "_const" : "_var",
              u = this.vars[i] || (this.vars[i] = []),
              d = this.vars[l] || (this.vars[l] = 0);
            null === t &&
              ((t = (s ? "nodeConst" : "nodeVar") + d), this.vars[l]++),
              "variable" !== a &&
                (t = this.getSubBuildProperty(t, n.subBuilds));
            let h = e.getArrayCount(this);
            (o = new gh(t, r, s, h)),
              s || u.push(o),
              this.registerDeclaration(o),
              (n[a] = o);
          }
          return o;
        }
        isDeterministic(e) {
          if (e.isMathNode)
            return (
              this.isDeterministic(e.aNode) &&
              (!e.bNode || this.isDeterministic(e.bNode)) &&
              (!e.cNode || this.isDeterministic(e.cNode))
            );
          if (e.isOperatorNode)
            return (
              this.isDeterministic(e.aNode) &&
              (!e.bNode || this.isDeterministic(e.bNode))
            );
          if (e.isArrayNode) {
            if (null !== e.values) {
              for (let t of e.values) if (!this.isDeterministic(t)) return !1;
            }
            return !0;
          }
          return !!e.isConstNode || !1;
        }
        getVaryingFromNode(
          e,
          t = null,
          r = e.getNodeType(this),
          i = null,
          s = null
        ) {
          let n = this.getDataFromNode(e, "any"),
            a = this.getSubBuildProperty("varying", n.subBuilds),
            o = n[a];
          if (void 0 === o) {
            let e = this.varyings,
              l = e.length;
            null === t && (t = "nodeVarying" + l),
              "varying" !== a && (t = this.getSubBuildProperty(t, n.subBuilds)),
              (o = new gc(t, r, i, s)),
              e.push(o),
              this.registerDeclaration(o),
              (n[a] = o);
          }
          return o;
        }
        registerDeclaration(e) {
          let t = this.shaderStage,
            r = this.declarations[t] || (this.declarations[t] = {}),
            i = this.getPropertyName(e),
            s = 1,
            n = i;
          for (; void 0 !== r[n]; ) n = i + "_" + s++;
          s > 1 &&
            ((e.name = n),
            console.warn(
              `THREE.TSL: Declaration name '${i}' of '${e.type}' already in use. Renamed to '${n}'.`
            )),
            (r[n] = e);
        }
        getCodeFromNode(e, t, r = this.shaderStage) {
          let i = this.getDataFromNode(e),
            s = i.code;
          if (void 0 === s) {
            let e = this.codes[r] || (this.codes[r] = []);
            (s = new gp("nodeCode" + e.length, t)), e.push(s), (i.code = s);
          }
          return s;
        }
        addFlowCodeHierarchy(e, t) {
          let { flowCodes: r, flowCodeBlock: i } = this.getDataFromNode(e),
            s = !0,
            n = t;
          for (; n; ) {
            if (!0 === i.get(n)) {
              s = !1;
              break;
            }
            n = this.getDataFromNode(n).parentNodeBlock;
          }
          if (s) for (let e of r) this.addLineFlowCode(e);
        }
        addLineFlowCodeBlock(e, t, r) {
          let i = this.getDataFromNode(e),
            s = i.flowCodes || (i.flowCodes = []),
            n = i.flowCodeBlock || (i.flowCodeBlock = new WeakMap());
          s.push(t), n.set(r, !0);
        }
        addLineFlowCode(e, t = null) {
          return (
            "" === e ||
              (null !== t &&
                this.context.nodeBlock &&
                this.addLineFlowCodeBlock(t, e, this.context.nodeBlock),
              (e = this.tab + e),
              /;\s*$/.test(e) || (e += ";\n"),
              (this.flow.code += e)),
            this
          );
        }
        addFlowCode(e) {
          return (this.flow.code += e), this;
        }
        addFlowTab() {
          return (this.tab += "	"), this;
        }
        removeFlowTab() {
          return (this.tab = this.tab.slice(0, -1)), this;
        }
        getFlowData(e) {
          return this.flowsData.get(e);
        }
        flowNode(e) {
          let t = e.getNodeType(this),
            r = this.flowChildNode(e, t);
          return this.flowsData.set(e, r), r;
        }
        addInclude(e) {
          null !== this.currentFunctionNode &&
            this.currentFunctionNode.includes.push(e);
        }
        buildFunctionNode(e) {
          let t = new cs(),
            r = this.currentFunctionNode;
          return (
            (this.currentFunctionNode = t),
            (t.code = this.buildFunctionCode(e)),
            (this.currentFunctionNode = r),
            t
          );
        }
        flowShaderNode(e) {
          let t = e.layout,
            r = {
              [Symbol.iterator]() {
                let e = 0,
                  t = Object.values(this);
                return { next: () => ({ value: t[e], done: e++ >= t.length }) };
              },
            };
          for (let e of t.inputs) r[e.name] = new dC(e.type, e.name);
          e.layout = null;
          let i = e.call(r),
            s = this.flowStagesNode(i, t.type);
          return (e.layout = t), s;
        }
        flowBuildStage(e, t, r = null) {
          let i = this.getBuildStage();
          this.setBuildStage(t);
          let s = e.build(this, r);
          return this.setBuildStage(i), s;
        }
        flowStagesNode(e, t = null) {
          let r = this.flow,
            i = this.vars,
            s = this.declarations,
            n = this.cache,
            a = this.buildStage,
            o = this.stack,
            l = { code: "" };
          for (let r of ((this.flow = l),
          (this.vars = {}),
          (this.declarations = {}),
          (this.cache = new gm()),
          (this.stack = dB()),
          L))
            this.setBuildStage(r), (l.result = e.build(this, t));
          return (
            (l.vars = this.getVars(this.shaderStage)),
            (this.flow = r),
            (this.vars = i),
            (this.declarations = s),
            (this.cache = n),
            (this.stack = o),
            this.setBuildStage(a),
            l
          );
        }
        getFunctionOperator() {
          return null;
        }
        buildFunctionCode() {
          console.warn("Abstract function.");
        }
        flowChildNode(e, t = null) {
          let r = this.flow,
            i = { code: "" };
          return (
            (this.flow = i), (i.result = e.build(this, t)), (this.flow = r), i
          );
        }
        flowNodeFromShaderStage(e, t, r = null, i = null) {
          let s = this.tab,
            n = this.cache,
            a = this.shaderStage,
            o = this.context;
          this.setShaderStage(e);
          let l = { ...this.context };
          delete l.nodeBlock,
            (this.cache = this.globalCache),
            (this.tab = "	"),
            (this.context = l);
          let u = null;
          if ("generate" === this.buildStage) {
            let s = this.flowChildNode(t, r);
            null !== i &&
              (s.code += `${this.tab + i} = ${s.result};
`),
              (this.flowCode[e] = this.flowCode[e] + s.code),
              (u = s);
          } else u = t.build(this);
          return (
            this.setShaderStage(a),
            (this.cache = n),
            (this.tab = s),
            (this.context = o),
            u
          );
        }
        getAttributesArray() {
          return this.attributes.concat(this.bufferAttributes);
        }
        getAttributes() {
          console.warn("Abstract function.");
        }
        getVaryings() {
          console.warn("Abstract function.");
        }
        getVar(e, t, r = null) {
          return `${
            null !== r ? this.generateArrayDeclaration(e, r) : this.getType(e)
          } ${t}`;
        }
        getVars(e) {
          let t = "",
            r = this.vars[e];
          if (void 0 !== r)
            for (let e of r) t += `${this.getVar(e.type, e.name)}; `;
          return t;
        }
        getUniforms() {
          console.warn("Abstract function.");
        }
        getCodes(e) {
          let t = this.codes[e],
            r = "";
          if (void 0 !== t) for (let e of t) r += e.code + "\n";
          return r;
        }
        getHash() {
          return this.vertexShader + this.fragmentShader + this.computeShader;
        }
        setShaderStage(e) {
          this.shaderStage = e;
        }
        getShaderStage() {
          return this.shaderStage;
        }
        setBuildStage(e) {
          this.buildStage = e;
        }
        getBuildStage() {
          return this.buildStage;
        }
        buildCode() {
          console.warn("Abstract function.");
        }
        get subBuild() {
          return this.subBuildLayers[this.subBuildLayers.length - 1] || null;
        }
        addSubBuild(e) {
          this.subBuildLayers.push(e);
        }
        removeSubBuild() {
          return this.subBuildLayers.pop();
        }
        getClosestSubBuild(e) {
          let t;
          if (
            !(t =
              e && e.isNode
                ? e.isShaderCallNodeInternal
                  ? e.shaderNode.subBuilds
                  : e.isStackNode
                  ? [e.subBuild]
                  : this.getDataFromNode(e, "any").subBuilds
                : e instanceof Set
                ? [...e]
                : e)
          )
            return null;
          let r = this.subBuildLayers;
          for (let e = t.length - 1; e >= 0; e--) {
            let i = t[e];
            if (r.includes(i)) return i;
          }
          return null;
        }
        getSubBuildOutput(e) {
          return this.getSubBuildProperty("outputNode", e);
        }
        getSubBuildProperty(e = "", t = null) {
          let r;
          return (r = null !== t ? this.getClosestSubBuild(t) : this.subBuildFn)
            ? e
              ? r + "_" + e
              : r
            : e;
        }
        build() {
          let { object: e, material: t, renderer: r } = this;
          if (null !== t) {
            let e = r.library.fromMaterial(t);
            null === e &&
              (console.error(
                `NodeMaterial: Material "${t.type}" is not compatible.`
              ),
              (e = new oO())),
              e.build(this);
          } else this.addFlow("compute", e);
          for (let e of L)
            for (let t of (this.setBuildStage(e),
            this.context.vertex &&
              this.context.vertex.isNode &&
              this.flowNodeFromShaderStage("vertex", this.context.vertex),
            F))
              for (let r of (this.setShaderStage(t), this.flowNodes[t]))
                "generate" === e ? this.flowNode(r) : r.build(this);
          return (
            this.setBuildStage(null),
            this.setShaderStage(null),
            this.buildCode(),
            this.buildUpdateNodes(),
            this
          );
        }
        getNodeUniform(e, t) {
          if ("float" === t || "int" === t || "uint" === t) return new gA(e);
          if ("vec2" === t || "ivec2" === t || "uvec2" === t) return new gE(e);
          if ("vec3" === t || "ivec3" === t || "uvec3" === t) return new gw(e);
          if ("vec4" === t || "ivec4" === t || "uvec4" === t) return new gC(e);
          if ("color" === t) return new gM(e);
          if ("mat2" === t) return new gB(e);
          if ("mat3" === t) return new gL(e);
          if ("mat4" === t) return new gF(e);
          throw Error(`Uniform "${t}" not declared.`);
        }
        format(e, t, r) {
          if (
            ((t = this.getVectorType(t)),
            (r = this.getVectorType(r)),
            t === r || null === r || this.isReference(r))
          )
            return e;
          let i = this.getTypeLength(t),
            s = this.getTypeLength(r);
          return 16 === i && 9 === s
            ? `${this.getType(
                r
              )}( ${e}[ 0 ].xyz, ${e}[ 1 ].xyz, ${e}[ 2 ].xyz )`
            : 9 === i && 4 === s
            ? `${this.getType(r)}( ${e}[ 0 ].xy, ${e}[ 1 ].xy )`
            : i > 4 || s > 4 || 0 === s
            ? e
            : i === s
            ? `${this.getType(r)}( ${e} )`
            : i > s
            ? ((e = "bool" === r ? `all( ${e} )` : `${e}.${"xyz".slice(0, s)}`),
              this.format(
                e,
                this.getTypeFromLength(s, this.getComponentType(t)),
                r
              ))
            : 4 === s && i > 1
            ? `${this.getType(r)}( ${this.format(e, t, "vec3")}, 1.0 )`
            : 2 === i
            ? `${this.getType(r)}( ${this.format(e, t, "vec2")}, 0.0 )`
            : (1 === i &&
                s > 1 &&
                t !== this.getComponentType(r) &&
                (e = `${this.getType(this.getComponentType(r))}( ${e} )`),
              `${this.getType(r)}( ${e} )`);
        }
        getSignature() {
          return `// Three.js r${u.sPf} - Node System
`;
        }
        *[Symbol.iterator]() {}
      }
      class gV {
        constructor() {
          (this.time = 0),
            (this.deltaTime = 0),
            (this.frameId = 0),
            (this.renderId = 0),
            (this.updateMap = new WeakMap()),
            (this.updateBeforeMap = new WeakMap()),
            (this.updateAfterMap = new WeakMap()),
            (this.renderer = null),
            (this.material = null),
            (this.camera = null),
            (this.object = null),
            (this.scene = null);
        }
        _getMaps(e, t) {
          let r = e.get(t);
          return (
            void 0 === r &&
              ((r = { renderMap: new WeakMap(), frameMap: new WeakMap() }),
              e.set(t, r)),
            r
          );
        }
        updateBeforeNode(e) {
          let t = e.getUpdateBeforeType(),
            r = e.updateReference(this);
          if (t === C.FRAME) {
            let { frameMap: t } = this._getMaps(this.updateBeforeMap, r);
            t.get(r) !== this.frameId &&
              !1 !== e.updateBefore(this) &&
              t.set(r, this.frameId);
          } else if (t === C.RENDER) {
            let { renderMap: t } = this._getMaps(this.updateBeforeMap, r);
            t.get(r) !== this.renderId &&
              !1 !== e.updateBefore(this) &&
              t.set(r, this.renderId);
          } else t === C.OBJECT && e.updateBefore(this);
        }
        updateAfterNode(e) {
          let t = e.getUpdateAfterType(),
            r = e.updateReference(this);
          if (t === C.FRAME) {
            let { frameMap: t } = this._getMaps(this.updateAfterMap, r);
            t.get(r) !== this.frameId &&
              !1 !== e.updateAfter(this) &&
              t.set(r, this.frameId);
          } else if (t === C.RENDER) {
            let { renderMap: t } = this._getMaps(this.updateAfterMap, r);
            t.get(r) !== this.renderId &&
              !1 !== e.updateAfter(this) &&
              t.set(r, this.renderId);
          } else t === C.OBJECT && e.updateAfter(this);
        }
        updateNode(e) {
          let t = e.getUpdateType(),
            r = e.updateReference(this);
          if (t === C.FRAME) {
            let { frameMap: t } = this._getMaps(this.updateMap, r);
            t.get(r) !== this.frameId &&
              !1 !== e.update(this) &&
              t.set(r, this.frameId);
          } else if (t === C.RENDER) {
            let { renderMap: t } = this._getMaps(this.updateMap, r);
            t.get(r) !== this.renderId &&
              !1 !== e.update(this) &&
              t.set(r, this.renderId);
          } else t === C.OBJECT && e.update(this);
        }
        update() {
          this.frameId++,
            void 0 === this.lastTime && (this.lastTime = performance.now()),
            (this.deltaTime = (performance.now() - this.lastTime) / 1e3),
            (this.lastTime = performance.now()),
            (this.time += this.deltaTime);
        }
      }
      class gO {
        constructor(e, t, r = null, i = "", s = !1) {
          (this.type = e),
            (this.name = t),
            (this.count = r),
            (this.qualifier = i),
            (this.isConst = s);
        }
      }
      gO.isNodeFunctionInput = !0;
      class gG extends pd {
        static get type() {
          return "DirectionalLightNode";
        }
        constructor(e = null) {
          super(e);
        }
        setupDirect() {
          let e = this.colorNode;
          return { lightDirection: ck(this.light), lightColor: e };
        }
      }
      let gk = new u.kn4(),
        gz = new u.kn4(),
        g$ = null;
      class gW extends pd {
        static get type() {
          return "RectAreaLightNode";
        }
        constructor(e = null) {
          super(e),
            (this.halfHeight = tL(new u.Pq0()).setGroup(tC)),
            (this.halfWidth = tL(new u.Pq0()).setGroup(tC)),
            (this.updateType = C.RENDER);
        }
        update(e) {
          super.update(e);
          let { light: t } = this,
            r = e.camera.matrixWorldInverse;
          gz.identity(),
            gk.copy(t.matrixWorld),
            gk.premultiply(r),
            gz.extractRotation(gk),
            this.halfWidth.value.set(0.5 * t.width, 0, 0),
            this.halfHeight.value.set(0, 0.5 * t.height, 0),
            this.halfWidth.value.applyMatrix4(gz),
            this.halfHeight.value.applyMatrix4(gz);
        }
        setupDirectRectArea(e) {
          let t, r;
          e.isAvailable("float32Filterable")
            ? ((t = sa(g$.LTC_FLOAT_1)), (r = sa(g$.LTC_FLOAT_2)))
            : ((t = sa(g$.LTC_HALF_1)), (r = sa(g$.LTC_HALF_2)));
          let { colorNode: i, light: s } = this;
          return {
            lightColor: i,
            lightPosition: cG(s),
            halfWidth: this.halfWidth,
            halfHeight: this.halfHeight,
            ltc_1: t,
            ltc_2: r,
          };
        }
        static setLTC(e) {
          g$ = e;
        }
      }
      class gH extends pd {
        static get type() {
          return "SpotLightNode";
        }
        constructor(e = null) {
          super(e),
            (this.coneCosNode = tL(0).setGroup(tC)),
            (this.penumbraCosNode = tL(0).setGroup(tC)),
            (this.cutoffDistanceNode = tL(0).setGroup(tC)),
            (this.decayExponentNode = tL(0).setGroup(tC)),
            (this.colorNode = tL(this.color).setGroup(tC));
        }
        update(e) {
          super.update(e);
          let { light: t } = this;
          (this.coneCosNode.value = Math.cos(t.angle)),
            (this.penumbraCosNode.value = Math.cos(t.angle * (1 - t.penumbra))),
            (this.cutoffDistanceNode.value = t.distance),
            (this.decayExponentNode.value = t.decay);
        }
        getSpotAttenuation(e, t) {
          let { coneCosNode: r, penumbraCosNode: i } = this;
          return r7(r, i, t);
        }
        getLightCoord(e) {
          let t = e.getNodeProperties(this),
            r = t.projectionUV;
          return (
            void 0 === r &&
              (t.projectionUV = r = cD(this.light, e.context.positionWorld)),
            r
          );
        }
        setupDirect(e) {
          let t,
            r,
            {
              colorNode: i,
              cutoffDistanceNode: s,
              decayExponentNode: n,
              light: a,
            } = this,
            o = this.getLightVector(e),
            l = o.normalize(),
            u = l.dot(ck(a)),
            d = this.getSpotAttenuation(e, u),
            h = ph({
              lightDistance: o.length(),
              cutoffDistance: s,
              decayExponent: n,
            }),
            c = i.mul(d).mul(h);
          return (
            a.colorNode
              ? ((r = this.getLightCoord(e)), (t = a.colorNode(r)))
              : a.map &&
                ((r = this.getLightCoord(e)),
                (t = sa(a.map, r.xy).onRenderUpdate(() => a.map))),
            t &&
              (c = r.mul(2).sub(1).abs().lessThan(1).all().select(c.mul(t), c)),
            { lightColor: c, lightDirection: l }
          );
        }
      }
      class gq extends gH {
        static get type() {
          return "IESSpotLightNode";
        }
        getSpotAttenuation(e, t) {
          let r = this.light.iesMap;
          return r && !0 === r.isTexture
            ? sa(r, ek(t.acos().mul(1 / Math.PI), 0), 0).r
            : super.getSpotAttenuation(t);
        }
      }
      let gj = eB(([e, t]) => {
        let r = e.abs().sub(t);
        return rM(rH(r, 0)).add(rW(rH(r.x, r.y), 0));
      });
      class gX extends gH {
        static get type() {
          return "ProjectorLightNode";
        }
        update(e) {
          super.update(e);
          let t = this.light;
          if (
            ((this.penumbraCosNode.value = Math.min(
              Math.cos(t.angle * (1 - t.penumbra)),
              0.99999
            )),
            null === t.aspect)
          ) {
            let e = 1;
            null !== t.map && (e = t.map.width / t.map.height),
              (t.shadow.aspect = e);
          } else t.shadow.aspect = t.aspect;
        }
        getSpotAttenuation(e) {
          let t = eD(0),
            r = this.penumbraCosNode,
            i = cU(this.light).mul(e.context.positionWorld || sX);
          return (
            eP(i.w.greaterThan(0), () => {
              let e = gj(i.xyz.div(i.w).xy.sub(ek(0.5)), ek(0.5)),
                s = tW(-1, tz(1, rA(r)).sub(1));
              t.assign(r5(e.mul(-2).mul(s)));
            }),
            t
          );
        }
      }
      class gK extends pd {
        static get type() {
          return "AmbientLightNode";
        }
        constructor(e = null) {
          super(e);
        }
        setup({ context: e }) {
          e.irradiance.addAssign(this.colorNode);
        }
      }
      class gQ extends pd {
        static get type() {
          return "HemisphereLightNode";
        }
        constructor(e = null) {
          super(e),
            (this.lightPositionNode = cV(e)),
            (this.lightDirectionNode = this.lightPositionNode.normalize()),
            (this.groundColorNode = tL(new u.Q1f()).setGroup(tC));
        }
        update(e) {
          let { light: t } = this;
          super.update(e),
            (this.lightPositionNode.object3d = t),
            this.groundColorNode.value
              .copy(t.groundColor)
              .multiplyScalar(t.intensity);
        }
        setup(e) {
          let {
              colorNode: t,
              groundColorNode: r,
              lightDirectionNode: i,
            } = this,
            s = r6(r, t, s9.dot(i).mul(0.5).add(0.5));
          e.context.irradiance.addAssign(s);
        }
      }
      class gY extends pd {
        static get type() {
          return "LightProbeNode";
        }
        constructor(e = null) {
          super(e);
          let t = [];
          for (let e = 0; e < 9; e++) t.push(new u.Pq0());
          this.lightProbe = sc(t);
        }
        update(e) {
          let { light: t } = this;
          super.update(e);
          for (let e = 0; e < 9; e++)
            this.lightProbe.array[e]
              .copy(t.sh.coefficients[e])
              .multiplyScalar(t.intensity);
        }
        setup(e) {
          let t = gr(s9, this.lightProbe);
          e.context.irradiance.addAssign(t);
        }
      }
      class gZ {
        parseFunction() {
          console.warn("Abstract function.");
        }
      }
      class gJ {
        constructor(e, t, r = "", i = "") {
          (this.type = e),
            (this.inputs = t),
            (this.name = r),
            (this.precision = i);
        }
        getCode() {
          console.warn("Abstract function.");
        }
      }
      gJ.isNodeFunction = !0;
      let g0 =
          /^\s*(highp|mediump|lowp)?\s*([a-z_0-9]+)\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)/i,
        g1 = /[a-z_0-9]+/gi,
        g2 = "#pragma main";
      class g3 extends gJ {
        constructor(e) {
          let {
            type: t,
            inputs: r,
            name: i,
            precision: s,
            inputsCode: n,
            blockCode: a,
            headerCode: o,
          } = ((e) => {
            let t = (e = e.trim()).indexOf(g2),
              r = -1 !== t ? e.slice(t + g2.length) : e,
              i = r.match(g0);
            if (null !== i && 5 === i.length) {
              let s = i[4],
                n = [],
                a = null;
              for (; null !== (a = g1.exec(s)); ) n.push(a);
              let o = [],
                l = 0;
              for (; l < n.length; ) {
                let e = "const" === n[l][0];
                !0 === e && l++;
                let t = n[l][0];
                "in" === t || "out" === t || "inout" === t ? l++ : (t = "");
                let r = n[l++][0],
                  i = Number.parseInt(n[l][0]);
                !1 === Number.isNaN(i) ? l++ : (i = null);
                let s = n[l++][0];
                o.push(new gO(r, s, i, t, e));
              }
              let u = r.substring(i[0].length),
                d = void 0 !== i[3] ? i[3] : "",
                h = i[2];
              return {
                type: h,
                inputs: o,
                name: d,
                precision: void 0 !== i[1] ? i[1] : "",
                inputsCode: s,
                blockCode: u,
                headerCode: -1 !== t ? e.slice(0, t) : "",
              };
            }
            throw Error("FunctionNode: Function is not a GLSL code.");
          })(e);
          super(t, r, i, s),
            (this.inputsCode = n),
            (this.blockCode = a),
            (this.headerCode = o);
        }
        getCode(e = this.name) {
          let t,
            r = this.blockCode;
          if ("" !== r) {
            let { type: i, inputsCode: s, headerCode: n, precision: a } = this,
              o = `${i} ${e} ( ${s.trim()} )`;
            "" !== a && (o = `${a} ${o}`), (t = n + o + r);
          } else t = "";
          return t;
        }
      }
      class g4 extends gZ {
        parseFunction(e) {
          return new g3(e);
        }
      }
      let g6 = new WeakMap(),
        g8 = [],
        g5 = [];
      class g9 extends u9 {
        constructor(e, t) {
          super(),
            (this.renderer = e),
            (this.backend = t),
            (this.nodeFrame = new gV()),
            (this.nodeBuilderCache = new Map()),
            (this.callHashCache = new u3()),
            (this.groupsData = new u3()),
            (this.cacheLib = {});
        }
        updateGroup(e) {
          let t = e.groupNode,
            r = t.name;
          if (r === tM.name) return !0;
          if (r === tC.name) {
            let t = this.get(e),
              r = this.nodeFrame.renderId;
            return t.renderId !== r && ((t.renderId = r), !0);
          }
          if (r === tw.name) {
            let t = this.get(e),
              r = this.nodeFrame.frameId;
            return t.frameId !== r && ((t.frameId = r), !0);
          }
          (g8[0] = t), (g8[1] = e);
          let i = this.groupsData.get(g8);
          return (
            void 0 === i && this.groupsData.set(g8, (i = {})),
            (g8.length = 0),
            i.version !== t.version && ((i.version = t.version), !0)
          );
        }
        getForRenderCacheKey(e) {
          return e.initialCacheKey;
        }
        getForRender(e) {
          let t = this.get(e),
            r = t.nodeBuilderState;
          if (void 0 === r) {
            let { nodeBuilderCache: i } = this,
              s = this.getForRenderCacheKey(e);
            if (void 0 === (r = i.get(s))) {
              let t = this.backend.createNodeBuilder(e.object, this.renderer);
              (t.scene = e.scene),
                (t.material = e.material),
                (t.camera = e.camera),
                (t.context.material = e.material),
                (t.lightsNode = e.lightsNode),
                (t.environmentNode = this.getEnvironmentNode(e.scene)),
                (t.fogNode = this.getFogNode(e.scene)),
                (t.clippingContext = e.clippingContext),
                this.renderer.getOutputRenderTarget() &&
                  this.renderer.getOutputRenderTarget().multiview &&
                  t.enableMultiview(),
                t.build(),
                (r = this._createNodeBuilderState(t)),
                i.set(s, r);
            }
            r.usedTimes++, (t.nodeBuilderState = r);
          }
          return r;
        }
        delete(e) {
          if (e.isRenderObject) {
            let t = this.get(e).nodeBuilderState;
            t.usedTimes--,
              0 === t.usedTimes &&
                this.nodeBuilderCache.delete(this.getForRenderCacheKey(e));
          }
          return super.delete(e);
        }
        getForCompute(e) {
          let t = this.get(e),
            r = t.nodeBuilderState;
          if (void 0 === r) {
            let i = this.backend.createNodeBuilder(e, this.renderer);
            i.build(),
              (t.nodeBuilderState = r = this._createNodeBuilderState(i));
          }
          return r;
        }
        _createNodeBuilderState(e) {
          return new gl(
            e.vertexShader,
            e.fragmentShader,
            e.computeShader,
            e.getAttributesArray(),
            e.getBindings(),
            e.updateNodes,
            e.updateBeforeNodes,
            e.updateAfterNodes,
            e.observer,
            e.transforms
          );
        }
        getEnvironmentNode(e) {
          this.updateEnvironment(e);
          let t = null;
          if (e.environmentNode && e.environmentNode.isNode)
            t = e.environmentNode;
          else {
            let r = this.get(e);
            r.environmentNode && (t = r.environmentNode);
          }
          return t;
        }
        getBackgroundNode(e) {
          this.updateBackground(e);
          let t = null;
          if (e.backgroundNode && e.backgroundNode.isNode) t = e.backgroundNode;
          else {
            let r = this.get(e);
            r.backgroundNode && (t = r.backgroundNode);
          }
          return t;
        }
        getFogNode(e) {
          return this.updateFog(e), e.fogNode || this.get(e).fogNode || null;
        }
        getCacheKey(e, t) {
          (g8[0] = e), (g8[1] = t);
          let r = this.renderer.info.calls,
            i = this.callHashCache.get(g8) || {};
          if (i.callId !== r) {
            let s = this.getEnvironmentNode(e),
              n = this.getFogNode(e);
            t && g5.push(t.getCacheKey(!0)),
              s && g5.push(s.getCacheKey()),
              n && g5.push(n.getCacheKey()),
              g5.push(
                this.renderer.getOutputRenderTarget() &&
                  this.renderer.getOutputRenderTarget().multiview
                  ? 1
                  : 0
              ),
              g5.push(+!!this.renderer.shadowMap.enabled),
              (i.callId = r),
              (i.cacheKey = m(g5)),
              this.callHashCache.set(g8, i),
              (g5.length = 0);
          }
          return (g8.length = 0), i.cacheKey;
        }
        get isToneMappingState() {
          return !this.renderer.getRenderTarget();
        }
        updateBackground(e) {
          let t = this.get(e),
            r = e.background;
          if (r) {
            let i =
              (0 === e.backgroundBlurriness && t.backgroundBlurriness > 0) ||
              (e.backgroundBlurriness > 0 && 0 === t.backgroundBlurriness);
            (t.background !== r || i) &&
              ((t.backgroundNode = this.getCacheNode(
                "background",
                r,
                () => {
                  if (
                    !0 === r.isCubeTexture ||
                    r.mapping === u.wfO ||
                    r.mapping === u.uV5 ||
                    r.mapping === u.Om
                  )
                    if (e.backgroundBlurriness > 0 || r.mapping === u.Om)
                      return uB(r);
                    else return o2(!0 === r.isCubeTexture ? ny(r) : sa(r));
                  if (!0 === r.isTexture)
                    return sa(r, or.flipY()).setUpdateMatrix(!0);
                  !0 !== r.isColor &&
                    console.error(
                      "WebGPUNodes: Unsupported background configuration.",
                      r
                    );
                },
                i
              )),
              (t.background = r),
              (t.backgroundBlurriness = e.backgroundBlurriness));
          } else
            t.backgroundNode && (delete t.backgroundNode, delete t.background);
        }
        getCacheNode(e, t, r, i = !1) {
          let s = this.cacheLib[e] || (this.cacheLib[e] = new WeakMap()),
            n = s.get(t);
          return (void 0 === n || i) && ((n = r()), s.set(t, n)), n;
        }
        updateFog(e) {
          let t = this.get(e),
            r = e.fog;
          r
            ? t.fog !== r &&
              ((t.fogNode = this.getCacheNode("fog", r, () => {
                if (r.isFogExp2)
                  return cf(
                    nT("color", "color", r).setGroup(tC),
                    cm(nT("density", "float", r).setGroup(tC))
                  );
                if (r.isFog) {
                  let e = nT("color", "color", r).setGroup(tC);
                  return cf(
                    e,
                    cg(
                      nT("near", "float", r).setGroup(tC),
                      nT("far", "float", r).setGroup(tC)
                    )
                  );
                }
                console.error(
                  "THREE.Renderer: Unsupported fog configuration.",
                  r
                );
              })),
              (t.fog = r))
            : (delete t.fogNode, delete t.fog);
        }
        updateEnvironment(e) {
          let t = this.get(e),
            r = e.environment;
          r
            ? t.environment !== r &&
              ((t.environmentNode = this.getCacheNode("environment", r, () =>
                !0 === r.isCubeTexture
                  ? ny(r)
                  : !0 === r.isTexture
                  ? sa(r)
                  : void console.error(
                      "Nodes: Unsupported environment configuration.",
                      r
                    )
              )),
              (t.environment = r))
            : t.environmentNode &&
              (delete t.environmentNode, delete t.environment);
        }
        getNodeFrame(
          e = this.renderer,
          t = null,
          r = null,
          i = null,
          s = null
        ) {
          let n = this.nodeFrame;
          return (
            (n.renderer = e),
            (n.scene = t),
            (n.object = r),
            (n.camera = i),
            (n.material = s),
            n
          );
        }
        getNodeFrameForRender(e) {
          return this.getNodeFrame(
            e.renderer,
            e.scene,
            e.object,
            e.camera,
            e.material
          );
        }
        getOutputCacheKey() {
          let e = this.renderer;
          return (
            e.toneMapping + "," + e.currentColorSpace + "," + e.xr.isPresenting
          );
        }
        hasOutputChange(e) {
          return g6.get(e) !== this.getOutputCacheKey();
        }
        getOutputNode(e) {
          let t = this.renderer,
            r = this.getOutputCacheKey(),
            i = e.isArrayTexture
              ? hU(e, eH(or, sg("gl_ViewID_OVR"))).renderOutput(
                  t.toneMapping,
                  t.currentColorSpace
                )
              : sa(e, or).renderOutput(t.toneMapping, t.currentColorSpace);
          return g6.set(e, r), i;
        }
        updateBefore(e) {
          for (let t of e.getNodeBuilderState().updateBeforeNodes)
            this.getNodeFrameForRender(e).updateBeforeNode(t);
        }
        updateAfter(e) {
          for (let t of e.getNodeBuilderState().updateAfterNodes)
            this.getNodeFrameForRender(e).updateAfterNode(t);
        }
        updateForCompute(e) {
          let t = this.getNodeFrame();
          for (let r of this.getForCompute(e).updateNodes) t.updateNode(r);
        }
        updateForRender(e) {
          let t = this.getNodeFrameForRender(e);
          for (let r of e.getNodeBuilderState().updateNodes) t.updateNode(r);
        }
        needsRefresh(e) {
          let t = this.getNodeFrameForRender(e);
          return e.getMonitor().needsRefresh(e, t);
        }
        dispose() {
          super.dispose(),
            (this.nodeFrame = new gV()),
            (this.nodeBuilderCache = new Map()),
            (this.cacheLib = {});
        }
      }
      let g7 = new u.Zcv();
      class me {
        constructor(e = null) {
          (this.version = 0),
            (this.clipIntersection = null),
            (this.cacheKey = ""),
            (this.shadowPass = !1),
            (this.viewNormalMatrix = new u.dwI()),
            (this.clippingGroupContexts = new WeakMap()),
            (this.intersectionPlanes = []),
            (this.unionPlanes = []),
            (this.parentVersion = null),
            null !== e &&
              ((this.viewNormalMatrix = e.viewNormalMatrix),
              (this.clippingGroupContexts = e.clippingGroupContexts),
              (this.shadowPass = e.shadowPass),
              (this.viewMatrix = e.viewMatrix));
        }
        projectPlanes(e, t, r) {
          let i = e.length;
          for (let s = 0; s < i; s++) {
            g7.copy(e[s]).applyMatrix4(this.viewMatrix, this.viewNormalMatrix);
            let i = t[r + s],
              n = g7.normal;
            (i.x = -n.x), (i.y = -n.y), (i.z = -n.z), (i.w = g7.constant);
          }
        }
        updateGlobal(e, t) {
          (this.shadowPass =
            null !== e.overrideMaterial &&
            e.overrideMaterial.isShadowPassMaterial),
            (this.viewMatrix = t.matrixWorldInverse),
            this.viewNormalMatrix.getNormalMatrix(this.viewMatrix);
        }
        update(e, t) {
          let r,
            i,
            s = !1;
          e.version !== this.parentVersion &&
            ((this.intersectionPlanes = Array.from(e.intersectionPlanes)),
            (this.unionPlanes = Array.from(e.unionPlanes)),
            (this.parentVersion = e.version)),
            this.clipIntersection !== t.clipIntersection &&
              ((this.clipIntersection = t.clipIntersection),
              this.clipIntersection
                ? (this.unionPlanes.length = e.unionPlanes.length)
                : (this.intersectionPlanes.length =
                    e.intersectionPlanes.length));
          let n = t.clippingPlanes,
            a = n.length;
          if (
            (this.clipIntersection
              ? ((r = this.intersectionPlanes),
                (i = e.intersectionPlanes.length))
              : ((r = this.unionPlanes), (i = e.unionPlanes.length)),
            r.length !== i + a)
          ) {
            r.length = i + a;
            for (let e = 0; e < a; e++) r[i + e] = new u.IUQ();
            s = !0;
          }
          this.projectPlanes(n, r, i),
            s &&
              (this.version++,
              (this.cacheKey = `${this.intersectionPlanes.length}:${this.unionPlanes.length}`));
        }
        getGroupContext(e) {
          if (this.shadowPass && !e.clipShadows) return this;
          let t = this.clippingGroupContexts.get(e);
          return (
            void 0 === t &&
              ((t = new me(this)), this.clippingGroupContexts.set(e, t)),
            t.update(this, e),
            t
          );
        }
        get unionClippingCount() {
          return this.unionPlanes.length;
        }
      }
      class mt {
        constructor(e, t) {
          (this.bundleGroup = e), (this.camera = t);
        }
      }
      let mr = [];
      class mi {
        constructor() {
          this.bundles = new u3();
        }
        get(e, t) {
          let r = this.bundles;
          (mr[0] = e), (mr[1] = t);
          let i = r.get(mr);
          return (
            void 0 === i && ((i = new mt(e, t)), r.set(mr, i)),
            (mr.length = 0),
            i
          );
        }
        dispose() {
          this.bundles = new u3();
        }
      }
      class ms {
        constructor() {
          (this.lightNodes = new WeakMap()),
            (this.materialNodes = new Map()),
            (this.toneMappingNodes = new Map());
        }
        fromMaterial(e) {
          if (e.isNodeMaterial) return e;
          let t = null,
            r = this.getMaterialNodeClass(e.type);
          if (null !== r) for (let i in ((t = new r()), e)) t[i] = e[i];
          return t;
        }
        addToneMapping(e, t) {
          this.addType(e, t, this.toneMappingNodes);
        }
        getToneMappingFunction(e) {
          return this.toneMappingNodes.get(e) || null;
        }
        getMaterialNodeClass(e) {
          return this.materialNodes.get(e) || null;
        }
        addMaterial(e, t) {
          this.addType(e, t, this.materialNodes);
        }
        getLightNodeClass(e) {
          return this.lightNodes.get(e) || null;
        }
        addLight(e, t) {
          this.addClass(e, t, this.lightNodes);
        }
        addType(e, t, r) {
          if (r.has(t)) return void console.warn(`Redefinition of node ${t}`);
          if ("function" != typeof e)
            throw Error(`Node class ${e.name} is not a class.`);
          if ("function" == typeof t || "object" == typeof t)
            throw Error(`Base class ${t} is not a class.`);
          r.set(t, e);
        }
        addClass(e, t, r) {
          if (r.has(t))
            return void console.warn(`Redefinition of node ${t.name}`);
          if ("function" != typeof e)
            throw Error(`Node class ${e.name} is not a class.`);
          if ("function" != typeof t)
            throw Error(`Base class ${t.name} is not a class.`);
          r.set(t, e);
        }
      }
      let mn = new cH(),
        ma = [];
      class mo extends u3 {
        constructor() {
          super();
        }
        createNode(e = []) {
          return new cH().setLights(e);
        }
        getNode(e, t) {
          if (e.isQuadMesh) return mn;
          (ma[0] = e), (ma[1] = t);
          let r = this.get(ma);
          return (
            void 0 === r && ((r = this.createNode()), this.set(ma, r)),
            (ma.length = 0),
            r
          );
        }
      }
      class ml extends u.O0B {
        constructor(e = 1, t = 1, r = {}) {
          super(e, t, r),
            (this.isXRRenderTarget = !0),
            (this._hasExternalTextures = !1),
            (this._autoAllocateDepthBuffer = !0),
            (this._isOpaqueFramebuffer = !1);
        }
        copy(e) {
          return (
            super.copy(e),
            (this._hasExternalTextures = e._hasExternalTextures),
            (this._autoAllocateDepthBuffer = e._autoAllocateDepthBuffer),
            (this._isOpaqueFramebuffer = e._isOpaqueFramebuffer),
            this
          );
        }
      }
      let mu = new u.Pq0(),
        md = new u.Pq0();
      class mh extends u.Qev {
        constructor(e, t = !1) {
          super(),
            (this.enabled = !1),
            (this.isPresenting = !1),
            (this.cameraAutoUpdate = !0),
            (this._renderer = e),
            (this._cameraL = new u.ubm()),
            (this._cameraL.viewport = new u.IUQ()),
            (this._cameraR = new u.ubm()),
            (this._cameraR.viewport = new u.IUQ()),
            (this._cameras = [this._cameraL, this._cameraR]),
            (this._cameraXR = new u.nZQ()),
            (this._currentDepthNear = null),
            (this._currentDepthFar = null),
            (this._controllers = []),
            (this._controllerInputSources = []),
            (this._xrRenderTarget = null),
            (this._layers = []),
            (this._supportsLayers = !1),
            (this._supportsGlBinding = "undefined" != typeof XRWebGLBinding),
            (this._frameBufferTargets = null),
            (this._createXRLayer = mf.bind(this)),
            (this._gl = null),
            (this._currentAnimationContext = null),
            (this._currentAnimationLoop = null),
            (this._currentPixelRatio = null),
            (this._currentSize = new u.I9Y()),
            (this._onSessionEvent = mp.bind(this)),
            (this._onSessionEnd = mg.bind(this)),
            (this._onInputSourcesChange = mm.bind(this)),
            (this._onAnimationFrame = my.bind(this)),
            (this._referenceSpace = null),
            (this._referenceSpaceType = "local-floor"),
            (this._customReferenceSpace = null),
            (this._framebufferScaleFactor = 1),
            (this._foveation = 1),
            (this._session = null),
            (this._glBaseLayer = null),
            (this._glBinding = null),
            (this._glProjLayer = null),
            (this._xrFrame = null),
            (this._useLayers =
              this._supportsGlBinding &&
              "createProjectionLayer" in XRWebGLBinding.prototype),
            (this._useMultiviewIfPossible = t),
            (this._useMultiview = !1);
        }
        getController(e) {
          return this._getController(e).getTargetRaySpace();
        }
        getControllerGrip(e) {
          return this._getController(e).getGripSpace();
        }
        getHand(e) {
          return this._getController(e).getHandSpace();
        }
        getFoveation() {
          if (null !== this._glProjLayer || null !== this._glBaseLayer)
            return this._foveation;
        }
        setFoveation(e) {
          (this._foveation = e),
            null !== this._glProjLayer &&
              (this._glProjLayer.fixedFoveation = e),
            null !== this._glBaseLayer &&
              void 0 !== this._glBaseLayer.fixedFoveation &&
              (this._glBaseLayer.fixedFoveation = e);
        }
        getFramebufferScaleFactor() {
          return this._framebufferScaleFactor;
        }
        setFramebufferScaleFactor(e) {
          (this._framebufferScaleFactor = e),
            !0 === this.isPresenting &&
              console.warn(
                "THREE.XRManager: Cannot change framebuffer scale while presenting."
              );
        }
        getReferenceSpaceType() {
          return this._referenceSpaceType;
        }
        setReferenceSpaceType(e) {
          (this._referenceSpaceType = e),
            !0 === this.isPresenting &&
              console.warn(
                "THREE.XRManager: Cannot change reference space type while presenting."
              );
        }
        getReferenceSpace() {
          return this._customReferenceSpace || this._referenceSpace;
        }
        setReferenceSpace(e) {
          this._customReferenceSpace = e;
        }
        getCamera() {
          return this._cameraXR;
        }
        getEnvironmentBlendMode() {
          if (null !== this._session) return this._session.environmentBlendMode;
        }
        getFrame() {
          return this._xrFrame;
        }
        useMultiview() {
          return this._useMultiview;
        }
        createQuadLayer(e, t, r, i, s, n, a, o = {}) {
          let l = new u.bdM(e, t),
            d = new ml(s, n, {
              format: u.GWd,
              type: u.OUM,
              depthTexture: new u.VCu(
                s,
                n,
                o.stencil ? u.V3x : u.bkx,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                o.stencil ? u.dcC : u.zdS
              ),
              stencilBuffer: o.stencil,
              resolveDepthBuffer: !1,
              resolveStencilBuffer: !1,
            });
          d._autoAllocateDepthBuffer = !0;
          let h = new u.V9B({ color: 0xffffff, side: u.hB5 });
          (h.map = d.texture), (h.map.offset.y = 1), (h.map.repeat.y = -1);
          let c = new u.eaF(l, h);
          c.position.copy(r), c.quaternion.copy(i);
          let p = {
            type: "quad",
            width: e,
            height: t,
            translation: r,
            quaternion: i,
            pixelwidth: s,
            pixelheight: n,
            plane: c,
            material: h,
            rendercall: a,
            renderTarget: d,
          };
          if ((this._layers.push(p), null !== this._session)) {
            (p.plane.material = new u.V9B({ color: 0xffffff, side: u.hB5 })),
              (p.plane.material.blending = u.bCz),
              (p.plane.material.blendEquation = u.gO9),
              (p.plane.material.blendSrc = u.ojh),
              (p.plane.material.blendDst = u.ojh),
              (p.xrlayer = this._createXRLayer(p));
            let e = this._session.renderState.layers;
            e.unshift(p.xrlayer),
              this._session.updateRenderState({ layers: e });
          } else d.isXRRenderTarget = !1;
          return c;
        }
        createCylinderLayer(e, t, r, i, s, n, a, o, l = {}) {
          let d = new u.Ho_(e, e, (e * t) / r, 64, 64, !0, Math.PI - t / 2, t),
            h = new ml(n, a, {
              format: u.GWd,
              type: u.OUM,
              depthTexture: new u.VCu(
                n,
                a,
                l.stencil ? u.V3x : u.bkx,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                l.stencil ? u.dcC : u.zdS
              ),
              stencilBuffer: l.stencil,
              resolveDepthBuffer: !1,
              resolveStencilBuffer: !1,
            });
          h._autoAllocateDepthBuffer = !0;
          let c = new u.V9B({ color: 0xffffff, side: u.hsX });
          (c.map = h.texture), (c.map.offset.y = 1), (c.map.repeat.y = -1);
          let p = new u.eaF(d, c);
          p.position.copy(i), p.quaternion.copy(s);
          let g = {
            type: "cylinder",
            radius: e,
            centralAngle: t,
            aspectratio: r,
            translation: i,
            quaternion: s,
            pixelwidth: n,
            pixelheight: a,
            plane: p,
            material: c,
            rendercall: o,
            renderTarget: h,
          };
          if ((this._layers.push(g), null !== this._session)) {
            (g.plane.material = new u.V9B({ color: 0xffffff, side: u.hsX })),
              (g.plane.material.blending = u.bCz),
              (g.plane.material.blendEquation = u.gO9),
              (g.plane.material.blendSrc = u.ojh),
              (g.plane.material.blendDst = u.ojh),
              (g.xrlayer = this._createXRLayer(g));
            let e = this._session.renderState.layers;
            e.unshift(g.xrlayer),
              this._session.updateRenderState({ layers: e });
          } else h.isXRRenderTarget = !1;
          return p;
        }
        renderLayers() {
          let e = new u.Pq0(),
            t = new u.PTz(),
            r = this._renderer,
            i = this.isPresenting,
            s = r.getOutputRenderTarget(),
            n = r._frameBufferTarget;
          this.isPresenting = !1;
          let a = new u.I9Y();
          r.getSize(a);
          let o = r._quad;
          for (let i of this._layers)
            if (
              ((i.renderTarget.isXRRenderTarget = null !== this._session),
              (i.renderTarget._hasExternalTextures =
                i.renderTarget.isXRRenderTarget),
              i.renderTarget.isXRRenderTarget && this._supportsLayers)
            ) {
              i.xrlayer.transform = new XRRigidTransform(
                i.plane.getWorldPosition(e),
                i.plane.getWorldQuaternion(t)
              );
              let s = this._glBinding.getSubImage(i.xrlayer, this._xrFrame);
              r.backend.setXRRenderTargetTextures(
                i.renderTarget,
                s.colorTexture,
                void 0
              ),
                r._setXRLayerSize(i.renderTarget.width, i.renderTarget.height),
                r.setOutputRenderTarget(i.renderTarget),
                r.setRenderTarget(null),
                (r._frameBufferTarget = null),
                this._frameBufferTargets ||
                  (this._frameBufferTargets = new WeakMap());
              let { frameBufferTarget: n, quad: a } =
                this._frameBufferTargets.get(i.renderTarget) || {
                  frameBufferTarget: null,
                  quad: null,
                };
              n
                ? ((r._frameBufferTarget = n), (r._quad = a))
                : ((r._quad = new hc(new oO())),
                  this._frameBufferTargets.set(i.renderTarget, {
                    frameBufferTarget: r._getFrameBufferTarget(),
                    quad: r._quad,
                  })),
                i.rendercall(),
                (r._frameBufferTarget = null);
            } else r.setRenderTarget(i.renderTarget), i.rendercall();
          r.setRenderTarget(null),
            r.setOutputRenderTarget(s),
            (r._frameBufferTarget = n),
            r._setXRLayerSize(a.x, a.y),
            (r._quad = o),
            (this.isPresenting = i);
        }
        getSession() {
          return this._session;
        }
        async setSession(e) {
          let t = this._renderer,
            r = t.backend;
          this._gl = t.getContext();
          let i = this._gl,
            s = i.getContextAttributes();
          if (((this._session = e), null !== e)) {
            if (!0 === r.isWebGPUBackend)
              throw Error(
                'THREE.XRManager: XR is currently not supported with a WebGPU backend. Use WebGL by passing "{ forceWebGL: true }" to the constructor of the renderer.'
              );
            if (
              (e.addEventListener("select", this._onSessionEvent),
              e.addEventListener("selectstart", this._onSessionEvent),
              e.addEventListener("selectend", this._onSessionEvent),
              e.addEventListener("squeeze", this._onSessionEvent),
              e.addEventListener("squeezestart", this._onSessionEvent),
              e.addEventListener("squeezeend", this._onSessionEvent),
              e.addEventListener("end", this._onSessionEnd),
              e.addEventListener(
                "inputsourceschange",
                this._onInputSourcesChange
              ),
              await r.makeXRCompatible(),
              (this._currentPixelRatio = t.getPixelRatio()),
              t.getSize(this._currentSize),
              (this._currentAnimationContext = t._animation.getContext()),
              (this._currentAnimationLoop = t._animation.getAnimationLoop()),
              t._animation.stop(),
              this._supportsGlBinding)
            ) {
              let t = new XRWebGLBinding(e, i);
              this._glBinding = t;
            }
            if (!0 === this._useLayers) {
              let r = null,
                n = null,
                a = null;
              t.depth &&
                ((a = t.stencil ? i.DEPTH24_STENCIL8 : i.DEPTH_COMPONENT24),
                (r = t.stencil ? u.dcC : u.zdS),
                (n = t.stencil ? u.V3x : u.bkx));
              let o = {
                colorFormat: i.RGBA8,
                depthFormat: a,
                scaleFactor: this._framebufferScaleFactor,
                clearOnAccess: !1,
              };
              this._useMultiviewIfPossible &&
                t.hasFeature("OVR_multiview2") &&
                ((o.textureType = "texture-array"), (this._useMultiview = !0));
              let l = this._glBinding.createProjectionLayer(o),
                d = [l];
              (this._glProjLayer = l),
                t.setPixelRatio(1),
                t._setXRLayerSize(l.textureWidth, l.textureHeight);
              let h = this._useMultiview ? 2 : 1,
                c = new u.VCu(
                  l.textureWidth,
                  l.textureHeight,
                  n,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  r,
                  h
                );
              if (
                ((this._xrRenderTarget = new ml(
                  l.textureWidth,
                  l.textureHeight,
                  {
                    format: u.GWd,
                    type: u.OUM,
                    colorSpace: t.outputColorSpace,
                    depthTexture: c,
                    stencilBuffer: t.stencil,
                    samples: 4 * !!s.antialias,
                    resolveDepthBuffer: !1 === l.ignoreDepthValues,
                    resolveStencilBuffer: !1 === l.ignoreDepthValues,
                    depth: this._useMultiview ? 2 : 1,
                    multiview: this._useMultiview,
                  }
                )),
                (this._xrRenderTarget._hasExternalTextures = !0),
                (this._xrRenderTarget.depth = this._useMultiview ? 2 : 1),
                (this._supportsLayers = e.enabledFeatures.includes("layers")),
                (this._referenceSpace = await e.requestReferenceSpace(
                  this.getReferenceSpaceType()
                )),
                this._supportsLayers)
              )
                for (let e of this._layers)
                  (e.plane.material = new u.V9B({
                    color: 0xffffff,
                    side: "cylinder" === e.type ? u.hsX : u.hB5,
                  })),
                    (e.plane.material.blending = u.bCz),
                    (e.plane.material.blendEquation = u.gO9),
                    (e.plane.material.blendSrc = u.ojh),
                    (e.plane.material.blendDst = u.ojh),
                    (e.xrlayer = this._createXRLayer(e)),
                    d.unshift(e.xrlayer);
              e.updateRenderState({ layers: d });
            } else {
              let r = new XRWebGLLayer(e, i, {
                antialias: t.samples > 0,
                alpha: !0,
                depth: t.depth,
                stencil: t.stencil,
                framebufferScaleFactor: this.getFramebufferScaleFactor(),
              });
              (this._glBaseLayer = r),
                e.updateRenderState({ baseLayer: r }),
                t.setPixelRatio(1),
                t._setXRLayerSize(r.framebufferWidth, r.framebufferHeight),
                (this._xrRenderTarget = new ml(
                  r.framebufferWidth,
                  r.framebufferHeight,
                  {
                    format: u.GWd,
                    type: u.OUM,
                    colorSpace: t.outputColorSpace,
                    stencilBuffer: t.stencil,
                    resolveDepthBuffer: !1 === r.ignoreDepthValues,
                    resolveStencilBuffer: !1 === r.ignoreDepthValues,
                  }
                )),
                (this._xrRenderTarget._isOpaqueFramebuffer = !0),
                (this._referenceSpace = await e.requestReferenceSpace(
                  this.getReferenceSpaceType()
                ));
            }
            this.setFoveation(this.getFoveation()),
              t._animation.setAnimationLoop(this._onAnimationFrame),
              t._animation.setContext(e),
              t._animation.start(),
              (this.isPresenting = !0),
              this.dispatchEvent({ type: "sessionstart" });
          }
        }
        updateCamera(e) {
          var t, r, i;
          let s = this._session;
          if (null === s) return;
          let n = e.near,
            a = e.far,
            o = this._cameraXR,
            l = this._cameraL,
            d = this._cameraR;
          (o.near = d.near = l.near = n),
            (o.far = d.far = l.far = a),
            (o.isMultiViewCamera = this._useMultiview),
            (this._currentDepthNear !== o.near ||
              this._currentDepthFar !== o.far) &&
              (s.updateRenderState({ depthNear: o.near, depthFar: o.far }),
              (this._currentDepthNear = o.near),
              (this._currentDepthFar = o.far)),
            (o.layers.mask = 6 | e.layers.mask),
            (l.layers.mask = 3 & o.layers.mask),
            (d.layers.mask = 5 & o.layers.mask);
          let h = e.parent,
            c = o.cameras;
          mc(o, h);
          for (let e = 0; e < c.length; e++) mc(c[e], h);
          2 === c.length
            ? (function (e, t, r) {
                mu.setFromMatrixPosition(t.matrixWorld),
                  md.setFromMatrixPosition(r.matrixWorld);
                let i = mu.distanceTo(md),
                  s = t.projectionMatrix.elements,
                  n = r.projectionMatrix.elements,
                  a = s[14] / (s[10] - 1),
                  o = s[14] / (s[10] + 1),
                  l = (s[9] + 1) / s[5],
                  u = (s[9] - 1) / s[5],
                  d = (s[8] - 1) / s[0],
                  h = (n[8] + 1) / n[0],
                  c = i / (-d + h),
                  p = -(c * d);
                if (
                  (t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
                  e.translateX(p),
                  e.translateZ(c),
                  e.matrixWorld.compose(e.position, e.quaternion, e.scale),
                  e.matrixWorldInverse.copy(e.matrixWorld).invert(),
                  -1 === s[10])
                )
                  e.projectionMatrix.copy(t.projectionMatrix),
                    e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
                else {
                  let t = a + c,
                    r = o + c;
                  e.projectionMatrix.makePerspective(
                    a * d - p,
                    a * h + (i - p),
                    ((l * o) / r) * t,
                    ((u * o) / r) * t,
                    t,
                    r
                  ),
                    e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
                }
              })(o, l, d)
            : o.projectionMatrix.copy(l.projectionMatrix),
            (t = e),
            (r = o),
            null === (i = h)
              ? t.matrix.copy(r.matrixWorld)
              : (t.matrix.copy(i.matrixWorld),
                t.matrix.invert(),
                t.matrix.multiply(r.matrixWorld)),
            t.matrix.decompose(t.position, t.quaternion, t.scale),
            t.updateMatrixWorld(!0),
            t.projectionMatrix.copy(r.projectionMatrix),
            t.projectionMatrixInverse.copy(r.projectionMatrixInverse),
            t.isPerspectiveCamera &&
              ((t.fov =
                2 * u.a55 * Math.atan(1 / t.projectionMatrix.elements[5])),
              (t.zoom = 1));
        }
        _getController(e) {
          let t = this._controllers[e];
          return (
            void 0 === t && ((t = new u.R3r()), (this._controllers[e] = t)), t
          );
        }
      }
      function mc(e, t) {
        null === t
          ? e.matrixWorld.copy(e.matrix)
          : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
          e.matrixWorldInverse.copy(e.matrixWorld).invert();
      }
      function mp(e) {
        let t = this._controllerInputSources.indexOf(e.inputSource);
        if (-1 === t) return;
        let r = this._controllers[t];
        if (void 0 !== r) {
          let t = this.getReferenceSpace();
          r.update(e.inputSource, e.frame, t),
            r.dispatchEvent({ type: e.type, data: e.inputSource });
        }
      }
      function mg() {
        let e = this._session,
          t = this._renderer;
        e.removeEventListener("select", this._onSessionEvent),
          e.removeEventListener("selectstart", this._onSessionEvent),
          e.removeEventListener("selectend", this._onSessionEvent),
          e.removeEventListener("squeeze", this._onSessionEvent),
          e.removeEventListener("squeezestart", this._onSessionEvent),
          e.removeEventListener("squeezeend", this._onSessionEvent),
          e.removeEventListener("end", this._onSessionEnd),
          e.removeEventListener(
            "inputsourceschange",
            this._onInputSourcesChange
          );
        for (let e = 0; e < this._controllers.length; e++) {
          let t = this._controllerInputSources[e];
          null !== t &&
            ((this._controllerInputSources[e] = null),
            this._controllers[e].disconnect(t));
        }
        if (
          ((this._currentDepthNear = null),
          (this._currentDepthFar = null),
          t._resetXRState(),
          (this._session = null),
          (this._xrRenderTarget = null),
          !0 === this._supportsLayers)
        )
          for (let e of this._layers)
            (e.renderTarget = new ml(e.pixelwidth, e.pixelheight, {
              format: u.GWd,
              type: u.OUM,
              depthTexture: new u.VCu(
                e.pixelwidth,
                e.pixelheight,
                e.stencilBuffer ? u.V3x : u.bkx,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                void 0,
                e.stencilBuffer ? u.dcC : u.zdS
              ),
              stencilBuffer: e.stencilBuffer,
              resolveDepthBuffer: !1,
              resolveStencilBuffer: !1,
            })),
              (e.renderTarget.isXRRenderTarget = !1),
              (e.plane.material = e.material),
              (e.material.map = e.renderTarget.texture),
              (e.material.map.offset.y = 1),
              (e.material.map.repeat.y = -1),
              delete e.xrlayer;
        (this.isPresenting = !1),
          (this._useMultiview = !1),
          t._animation.stop(),
          t._animation.setAnimationLoop(this._currentAnimationLoop),
          t._animation.setContext(this._currentAnimationContext),
          t._animation.start(),
          t.setPixelRatio(this._currentPixelRatio),
          t.setSize(this._currentSize.width, this._currentSize.height, !1),
          this.dispatchEvent({ type: "sessionend" });
      }
      function mm(e) {
        let t = this._controllers,
          r = this._controllerInputSources;
        for (let i = 0; i < e.removed.length; i++) {
          let s = e.removed[i],
            n = r.indexOf(s);
          n >= 0 && ((r[n] = null), t[n].disconnect(s));
        }
        for (let i = 0; i < e.added.length; i++) {
          let s = e.added[i],
            n = r.indexOf(s);
          if (-1 === n) {
            for (let e = 0; e < t.length; e++)
              if (e >= r.length) {
                r.push(s), (n = e);
                break;
              } else if (null === r[e]) {
                (r[e] = s), (n = e);
                break;
              }
            if (-1 === n) break;
          }
          let a = t[n];
          a && a.connect(s);
        }
      }
      function mf(e) {
        return "quad" === e.type
          ? this._glBinding.createQuadLayer({
              transform: new XRRigidTransform(e.translation, e.quaternion),
              width: e.width / 2,
              height: e.height / 2,
              space: this._referenceSpace,
              viewPixelWidth: e.pixelwidth,
              viewPixelHeight: e.pixelheight,
              clearOnAccess: !1,
            })
          : this._glBinding.createCylinderLayer({
              transform: new XRRigidTransform(e.translation, e.quaternion),
              radius: e.radius,
              centralAngle: e.centralAngle,
              aspectRatio: e.aspectRatio,
              space: this._referenceSpace,
              viewPixelWidth: e.pixelwidth,
              viewPixelHeight: e.pixelheight,
              clearOnAccess: !1,
            });
      }
      function my(e, t) {
        if (void 0 === t) return;
        let r = this._cameraXR,
          i = this._renderer,
          s = i.backend,
          n = this._glBaseLayer,
          a = this.getReferenceSpace(),
          o = t.getViewerPose(a);
        if (((this._xrFrame = t), null !== o)) {
          let e = o.views;
          null !== this._glBaseLayer && s.setXRTarget(n.framebuffer);
          let t = !1;
          e.length !== r.cameras.length && ((r.cameras.length = 0), (t = !0));
          for (let i = 0; i < e.length; i++) {
            let a,
              o = e[i];
            if (!0 === this._useLayers) {
              let e = this._glBinding.getViewSubImage(this._glProjLayer, o);
              (a = e.viewport),
                0 === i &&
                  s.setXRRenderTargetTextures(
                    this._xrRenderTarget,
                    e.colorTexture,
                    this._glProjLayer.ignoreDepthValues && !this._useMultiview
                      ? void 0
                      : e.depthStencilTexture
                  );
            } else a = n.getViewport(o);
            let l = this._cameras[i];
            void 0 === l &&
              ((l = new u.ubm()).layers.enable(i),
              (l.viewport = new u.IUQ()),
              (this._cameras[i] = l)),
              l.matrix.fromArray(o.transform.matrix),
              l.matrix.decompose(l.position, l.quaternion, l.scale),
              l.projectionMatrix.fromArray(o.projectionMatrix),
              l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),
              l.viewport.set(a.x, a.y, a.width, a.height),
              0 === i &&
                (r.matrix.copy(l.matrix),
                r.matrix.decompose(r.position, r.quaternion, r.scale)),
              !0 === t && r.cameras.push(l);
          }
          i.setOutputRenderTarget(this._xrRenderTarget);
        }
        for (let e = 0; e < this._controllers.length; e++) {
          let r = this._controllerInputSources[e],
            i = this._controllers[e];
          null !== r && void 0 !== i && i.update(r, t, a);
        }
        this._currentAnimationLoop && this._currentAnimationLoop(e, t),
          t.detectedPlanes &&
            this.dispatchEvent({ type: "planesdetected", data: t }),
          (this._xrFrame = null);
      }
      let mb = new u.Z58(),
        mx = new u.I9Y(),
        mT = new u.IUQ(),
        m_ = new u.PPD(),
        mv = new u.uf3(),
        mN = new u.kn4(),
        mS = new u.IUQ();
      class mR {
        constructor(e, t = {}) {
          this.isRenderer = !0;
          let {
            logarithmicDepthBuffer: r = !1,
            alpha: i = !0,
            depth: s = !0,
            stencil: n = !1,
            antialias: a = !1,
            samples: o = 0,
            getFallback: l = null,
            colorBufferType: d = u.ix0,
            multiview: h = !1,
          } = t;
          (this.domElement = e.getDomElement()),
            (this.backend = e),
            (this.samples = o || !0 === a ? 4 : 0),
            (this.autoClear = !0),
            (this.autoClearColor = !0),
            (this.autoClearDepth = !0),
            (this.autoClearStencil = !0),
            (this.alpha = i),
            (this.logarithmicDepthBuffer = r),
            (this.outputColorSpace = u.er$),
            (this.toneMapping = u.y_p),
            (this.toneMappingExposure = 1),
            (this.sortObjects = !0),
            (this.depth = s),
            (this.stencil = n),
            (this.info = new ds()),
            (this.overrideNodes = {
              modelViewMatrix: null,
              modelNormalViewMatrix: null,
            }),
            (this.library = new ms()),
            (this.lighting = new mo()),
            (this._getFallback = l),
            (this._pixelRatio = 1),
            (this._width = this.domElement.width),
            (this._height = this.domElement.height),
            (this._viewport = new u.IUQ(0, 0, this._width, this._height)),
            (this._scissor = new u.IUQ(0, 0, this._width, this._height)),
            (this._scissorTest = !1),
            (this._attributes = null),
            (this._geometries = null),
            (this._nodes = null),
            (this._animation = null),
            (this._bindings = null),
            (this._objects = null),
            (this._pipelines = null),
            (this._bundles = null),
            (this._renderLists = null),
            (this._renderContexts = null),
            (this._textures = null),
            (this._background = null),
            (this._quad = new hc(new oO())),
            (this._quad.material.name = "Renderer_output"),
            (this._currentRenderContext = null),
            (this._opaqueSort = null),
            (this._transparentSort = null),
            (this._frameBufferTarget = null);
          let c = +(!0 !== this.alpha);
          (this._clearColor = new dw(0, 0, 0, c)),
            (this._clearDepth = 1),
            (this._clearStencil = 0),
            (this._renderTarget = null),
            (this._activeCubeFace = 0),
            (this._activeMipmapLevel = 0),
            (this._outputRenderTarget = null),
            (this._mrt = null),
            (this._renderObjectFunction = null),
            (this._currentRenderObjectFunction = null),
            (this._currentRenderBundle = null),
            (this._handleObjectFunction = this._renderObjectDirect),
            (this._isDeviceLost = !1),
            (this.onDeviceLost = this._onDeviceLost),
            (this._colorBufferType = d),
            (this._initialized = !1),
            (this._initPromise = null),
            (this._compilationPromises = null),
            (this.transparent = !0),
            (this.opaque = !0),
            (this.shadowMap = { enabled: !1, type: u.QP0 }),
            (this.xr = new mh(this, h)),
            (this.debug = {
              checkShaderErrors: !0,
              onShaderError: null,
              getShaderAsync: async (e, t, r) => {
                await this.compileAsync(e, t);
                let i = this._renderLists.get(e, t),
                  s = this._renderContexts.get(e, t, this._renderTarget),
                  n = e.overrideMaterial || r.material,
                  { fragmentShader: a, vertexShader: o } = this._objects
                    .get(r, n, e, t, i.lightsNode, s, s.clippingContext)
                    .getNodeBuilderState();
                return { fragmentShader: a, vertexShader: o };
              },
            });
        }
        async init() {
          if (this._initialized)
            throw Error("Renderer: Backend has already been initialized.");
          return (
            null !== this._initPromise ||
              (this._initPromise = new Promise(async (e, t) => {
                let r = this.backend;
                try {
                  await r.init(this);
                } catch (e) {
                  if (null === this._getFallback) return void t(e);
                  try {
                    (this.backend = r = this._getFallback(e)),
                      await r.init(this);
                  } catch (e) {
                    t(e);
                    return;
                  }
                }
                (this._nodes = new g9(this, r)),
                  (this._animation = new u2(this._nodes, this.info)),
                  (this._attributes = new de(r)),
                  (this._background = new gn(this, this._nodes)),
                  (this._geometries = new di(this._attributes, this.info)),
                  (this._textures = new dE(this, r, this.info)),
                  (this._pipelines = new dh(r, this._nodes)),
                  (this._bindings = new dc(
                    r,
                    this._nodes,
                    this._textures,
                    this._attributes,
                    this._pipelines,
                    this.info
                  )),
                  (this._objects = new u5(
                    this,
                    this._nodes,
                    this._geometries,
                    this._pipelines,
                    this._bindings,
                    this.info
                  )),
                  (this._renderLists = new db(this.lighting)),
                  (this._bundles = new mi()),
                  (this._renderContexts = new dR()),
                  this._animation.start(),
                  (this._initialized = !0),
                  e(this);
              })),
            this._initPromise
          );
        }
        get coordinateSystem() {
          return this.backend.coordinateSystem;
        }
        async compileAsync(e, t, r = null) {
          if (!0 === this._isDeviceLost) return;
          !1 === this._initialized && (await this.init());
          let i = this._nodes.nodeFrame,
            s = i.renderId,
            n = this._currentRenderContext,
            a = this._currentRenderObjectFunction,
            o = this._compilationPromises,
            l = !0 === e.isScene ? e : mb;
          null === r && (r = e);
          let u = this._renderTarget,
            d = this._renderContexts.get(r, t, u),
            h = this._activeMipmapLevel,
            c = [];
          (this._currentRenderContext = d),
            (this._currentRenderObjectFunction = this.renderObject),
            (this._handleObjectFunction = this._createObjectPipeline),
            (this._compilationPromises = c),
            i.renderId++,
            i.update(),
            (d.depth = this.depth),
            (d.stencil = this.stencil),
            d.clippingContext || (d.clippingContext = new me()),
            d.clippingContext.updateGlobal(l, t),
            l.onBeforeRender(this, e, t, u);
          let p = this._renderLists.get(e, t);
          if (
            (p.begin(),
            this._projectObject(e, t, 0, p, d.clippingContext),
            r !== e &&
              r.traverseVisible(function (e) {
                e.isLight && e.layers.test(t.layers) && p.pushLight(e);
              }),
            p.finish(),
            null !== u)
          ) {
            this._textures.updateRenderTarget(u, h);
            let e = this._textures.get(u);
            (d.textures = e.textures), (d.depthTexture = e.depthTexture);
          } else (d.textures = null), (d.depthTexture = null);
          this._background.update(l, p, d);
          let g = p.opaque,
            m = p.transparent,
            f = p.transparentDoublePass,
            y = p.lightsNode;
          !0 === this.opaque && g.length > 0 && this._renderObjects(g, t, l, y),
            !0 === this.transparent &&
              m.length > 0 &&
              this._renderTransparents(m, f, t, l, y),
            (i.renderId = s),
            (this._currentRenderContext = n),
            (this._currentRenderObjectFunction = a),
            (this._compilationPromises = o),
            (this._handleObjectFunction = this._renderObjectDirect),
            await Promise.all(c);
        }
        async renderAsync(e, t) {
          !1 === this._initialized && (await this.init()),
            this._renderScene(e, t);
        }
        async waitForGPU() {
          await this.backend.waitForGPU();
        }
        set highPrecision(e) {
          !0 === e
            ? ((this.overrideNodes.modelViewMatrix = s$),
              (this.overrideNodes.modelNormalViewMatrix = sW))
            : this.highPrecision &&
              ((this.overrideNodes.modelViewMatrix = null),
              (this.overrideNodes.modelNormalViewMatrix = null));
        }
        get highPrecision() {
          return (
            this.overrideNodes.modelViewMatrix === s$ &&
            this.overrideNodes.modelNormalViewMatrix === sW
          );
        }
        setMRT(e) {
          return (this._mrt = e), this;
        }
        getMRT() {
          return this._mrt;
        }
        getColorBufferType() {
          return this._colorBufferType;
        }
        _onDeviceLost(e) {
          let t = `THREE.WebGPURenderer: ${e.api} Device Lost:

Message: ${e.message}`;
          e.reason &&
            (t += `
Reason: ${e.reason}`),
            console.error(t),
            (this._isDeviceLost = !0);
        }
        _renderBundle(e, t, r) {
          let { bundleGroup: i, camera: s, renderList: n } = e,
            a = this._currentRenderContext,
            o = this._bundles.get(i, s),
            l = this.backend.get(o);
          void 0 === l.renderContexts && (l.renderContexts = new Set());
          let u = i.version !== l.version,
            d = !1 === l.renderContexts.has(a) || u;
          if ((l.renderContexts.add(a), d)) {
            this.backend.beginBundle(a),
              (void 0 === l.renderObjects || u) && (l.renderObjects = []),
              (this._currentRenderBundle = o);
            let { transparentDoublePass: e, transparent: d, opaque: h } = n;
            !0 === this.opaque &&
              h.length > 0 &&
              this._renderObjects(h, s, t, r),
              !0 === this.transparent &&
                d.length > 0 &&
                this._renderTransparents(d, e, s, t, r),
              (this._currentRenderBundle = null),
              this.backend.finishBundle(a, o),
              (l.version = i.version);
          } else {
            let { renderObjects: e } = l;
            for (let t = 0, r = e.length; t < r; t++) {
              let r = e[t];
              this._nodes.needsRefresh(r) &&
                (this._nodes.updateBefore(r),
                this._nodes.updateForRender(r),
                this._bindings.updateForRender(r),
                this._nodes.updateAfter(r));
            }
          }
          this.backend.addBundle(a, o);
        }
        render(e, t) {
          if (!1 === this._initialized)
            return (
              console.warn(
                "THREE.Renderer: .render() called before the backend is initialized. Try using .renderAsync() instead."
              ),
              this.renderAsync(e, t)
            );
          this._renderScene(e, t);
        }
        _getFrameBufferTarget() {
          let { currentToneMapping: e, currentColorSpace: t } = this,
            r = e !== u.y_p,
            i = t !== u.ppV.workingColorSpace;
          if (!1 === r && !1 === i) return null;
          let { width: s, height: n } = this.getDrawingBufferSize(mx),
            { depth: a, stencil: o } = this,
            l = this._frameBufferTarget;
          null === l &&
            (((l = new u.O0B(s, n, {
              depthBuffer: a,
              stencilBuffer: o,
              type: this._colorBufferType,
              format: u.GWd,
              colorSpace: u.ppV.workingColorSpace,
              generateMipmaps: !1,
              minFilter: u.k6q,
              magFilter: u.k6q,
              samples: this.samples,
            })).isPostProcessingRenderTarget = !0),
            (this._frameBufferTarget = l));
          let d = this.getOutputRenderTarget();
          return (
            (l.depthBuffer = a),
            (l.stencilBuffer = o),
            null !== d
              ? l.setSize(d.width, d.height, d.depth)
              : l.setSize(s, n, 1),
            l.viewport.copy(this._viewport),
            l.scissor.copy(this._scissor),
            l.viewport.multiplyScalar(this._pixelRatio),
            l.scissor.multiplyScalar(this._pixelRatio),
            (l.scissorTest = this._scissorTest),
            (l.multiview = null !== d && d.multiview),
            (l.resolveDepthBuffer = null === d || d.resolveDepthBuffer),
            (l._autoAllocateDepthBuffer =
              null !== d && d._autoAllocateDepthBuffer),
            l
          );
        }
        _renderScene(e, t, r = !0) {
          let i;
          if (!0 === this._isDeviceLost) return;
          let s = r ? this._getFrameBufferTarget() : null,
            n = this._nodes.nodeFrame,
            a = n.renderId,
            o = this._currentRenderContext,
            l = this._currentRenderObjectFunction,
            u = !0 === e.isScene ? e : mb,
            d = this._renderTarget || this._outputRenderTarget,
            h = this._activeCubeFace,
            c = this._activeMipmapLevel;
          null !== s ? ((i = s), this.setRenderTarget(i)) : (i = d);
          let p = this._renderContexts.get(e, t, i);
          (this._currentRenderContext = p),
            (this._currentRenderObjectFunction =
              this._renderObjectFunction || this.renderObject),
            this.info.calls++,
            this.info.render.calls++,
            this.info.render.frameCalls++,
            (n.renderId = this.info.calls);
          let g = this.coordinateSystem,
            m = this.xr;
          if (
            t.coordinateSystem !== g &&
            !1 === m.isPresenting &&
            ((t.coordinateSystem = g),
            t.updateProjectionMatrix(),
            t.isArrayCamera)
          )
            for (let e of t.cameras)
              (e.coordinateSystem = g), e.updateProjectionMatrix();
          !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
            null === t.parent &&
              !0 === t.matrixWorldAutoUpdate &&
              t.updateMatrixWorld(),
            !0 === m.enabled &&
              !0 === m.isPresenting &&
              (!0 === m.cameraAutoUpdate && m.updateCamera(t),
              (t = m.getCamera()));
          let f = this._viewport,
            y = this._scissor,
            b = this._pixelRatio;
          null !== i && ((f = i.viewport), (y = i.scissor), (b = 1)),
            this.getDrawingBufferSize(mx),
            mT.set(0, 0, mx.width, mx.height);
          let x = void 0 === f.minDepth ? 0 : f.minDepth,
            T = void 0 === f.maxDepth ? 1 : f.maxDepth;
          p.viewportValue.copy(f).multiplyScalar(b).floor(),
            (p.viewportValue.width >>= c),
            (p.viewportValue.height >>= c),
            (p.viewportValue.minDepth = x),
            (p.viewportValue.maxDepth = T),
            (p.viewport = !1 === p.viewportValue.equals(mT)),
            p.scissorValue.copy(y).multiplyScalar(b).floor(),
            (p.scissor = this._scissorTest && !1 === p.scissorValue.equals(mT)),
            (p.scissorValue.width >>= c),
            (p.scissorValue.height >>= c),
            p.clippingContext || (p.clippingContext = new me()),
            p.clippingContext.updateGlobal(u, t),
            u.onBeforeRender(this, e, t, i);
          let _ = t.isArrayCamera ? mv : m_;
          t.isArrayCamera ||
            (mN.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            _.setFromProjectionMatrix(mN, t.coordinateSystem, t.reversedDepth));
          let v = this._renderLists.get(e, t);
          if (
            (v.begin(),
            this._projectObject(e, t, 0, v, p.clippingContext),
            v.finish(),
            !0 === this.sortObjects &&
              v.sort(this._opaqueSort, this._transparentSort),
            null !== i)
          ) {
            this._textures.updateRenderTarget(i, c);
            let e = this._textures.get(i);
            (p.textures = e.textures),
              (p.depthTexture = e.depthTexture),
              (p.width = e.width),
              (p.height = e.height),
              (p.renderTarget = i),
              (p.depth = i.depthBuffer),
              (p.stencil = i.stencilBuffer);
          } else
            (p.textures = null),
              (p.depthTexture = null),
              (p.width = this.domElement.width),
              (p.height = this.domElement.height),
              (p.depth = this.depth),
              (p.stencil = this.stencil);
          (p.width >>= c),
            (p.height >>= c),
            (p.activeCubeFace = h),
            (p.activeMipmapLevel = c),
            (p.occlusionQueryCount = v.occlusionQueryCount),
            this._background.update(u, v, p),
            (p.camera = t),
            this.backend.beginRender(p);
          let {
            bundles: N,
            lightsNode: S,
            transparentDoublePass: R,
            transparent: A,
            opaque: E,
          } = v;
          return (
            N.length > 0 && this._renderBundles(N, u, S),
            !0 === this.opaque &&
              E.length > 0 &&
              this._renderObjects(E, t, u, S),
            !0 === this.transparent &&
              A.length > 0 &&
              this._renderTransparents(A, R, t, u, S),
            this.backend.finishRender(p),
            (n.renderId = a),
            (this._currentRenderContext = o),
            (this._currentRenderObjectFunction = l),
            null !== s &&
              (this.setRenderTarget(d, h, c), this._renderOutput(i)),
            u.onAfterRender(this, e, t, i),
            p
          );
        }
        _setXRLayerSize(e, t) {
          (this._width = e), (this._height = t), this.setViewport(0, 0, e, t);
        }
        _renderOutput(e) {
          let t = this._quad;
          this._nodes.hasOutputChange(e.texture) &&
            ((t.material.fragmentNode = this._nodes.getOutputNode(e.texture)),
            (t.material.needsUpdate = !0));
          let r = this.autoClear,
            i = this.xr.enabled;
          (this.autoClear = !1),
            (this.xr.enabled = !1),
            this._renderScene(t, t.camera, !1),
            (this.autoClear = r),
            (this.xr.enabled = i);
        }
        getMaxAnisotropy() {
          return this.backend.getMaxAnisotropy();
        }
        getActiveCubeFace() {
          return this._activeCubeFace;
        }
        getActiveMipmapLevel() {
          return this._activeMipmapLevel;
        }
        async setAnimationLoop(e) {
          !1 === this._initialized && (await this.init()),
            this._animation.setAnimationLoop(e);
        }
        async getArrayBufferAsync(e) {
          return await this.backend.getArrayBufferAsync(e);
        }
        getContext() {
          return this.backend.getContext();
        }
        getPixelRatio() {
          return this._pixelRatio;
        }
        getDrawingBufferSize(e) {
          return e
            .set(
              this._width * this._pixelRatio,
              this._height * this._pixelRatio
            )
            .floor();
        }
        getSize(e) {
          return e.set(this._width, this._height);
        }
        setPixelRatio(e = 1) {
          this._pixelRatio !== e &&
            ((this._pixelRatio = e),
            this.setSize(this._width, this._height, !1));
        }
        setDrawingBufferSize(e, t, r) {
          (this.xr && this.xr.isPresenting) ||
            ((this._width = e),
            (this._height = t),
            (this._pixelRatio = r),
            (this.domElement.width = Math.floor(e * r)),
            (this.domElement.height = Math.floor(t * r)),
            this.setViewport(0, 0, e, t),
            this._initialized && this.backend.updateSize());
        }
        setSize(e, t, r = !0) {
          (this.xr && this.xr.isPresenting) ||
            ((this._width = e),
            (this._height = t),
            (this.domElement.width = Math.floor(e * this._pixelRatio)),
            (this.domElement.height = Math.floor(t * this._pixelRatio)),
            !0 === r &&
              ((this.domElement.style.width = e + "px"),
              (this.domElement.style.height = t + "px")),
            this.setViewport(0, 0, e, t),
            this._initialized && this.backend.updateSize());
        }
        setOpaqueSort(e) {
          this._opaqueSort = e;
        }
        setTransparentSort(e) {
          this._transparentSort = e;
        }
        getScissor(e) {
          let t = this._scissor;
          return (
            (e.x = t.x),
            (e.y = t.y),
            (e.width = t.width),
            (e.height = t.height),
            e
          );
        }
        setScissor(e, t, r, i) {
          let s = this._scissor;
          e.isVector4 ? s.copy(e) : s.set(e, t, r, i);
        }
        getScissorTest() {
          return this._scissorTest;
        }
        setScissorTest(e) {
          (this._scissorTest = e), this.backend.setScissorTest(e);
        }
        getViewport(e) {
          return e.copy(this._viewport);
        }
        setViewport(e, t, r, i, s = 0, n = 1) {
          let a = this._viewport;
          e.isVector4 ? a.copy(e) : a.set(e, t, r, i),
            (a.minDepth = s),
            (a.maxDepth = n);
        }
        getClearColor(e) {
          return e.copy(this._clearColor);
        }
        setClearColor(e, t = 1) {
          this._clearColor.set(e), (this._clearColor.a = t);
        }
        getClearAlpha() {
          return this._clearColor.a;
        }
        setClearAlpha(e) {
          this._clearColor.a = e;
        }
        getClearDepth() {
          return this._clearDepth;
        }
        setClearDepth(e) {
          this._clearDepth = e;
        }
        getClearStencil() {
          return this._clearStencil;
        }
        setClearStencil(e) {
          this._clearStencil = e;
        }
        isOccluded(e) {
          let t = this._currentRenderContext;
          return t && this.backend.isOccluded(t, e);
        }
        clear(e = !0, t = !0, r = !0) {
          if (!1 === this._initialized)
            return (
              console.warn(
                "THREE.Renderer: .clear() called before the backend is initialized. Try using .clearAsync() instead."
              ),
              this.clearAsync(e, t, r)
            );
          let i = this._renderTarget || this._getFrameBufferTarget(),
            s = null;
          if (null !== i) {
            this._textures.updateRenderTarget(i);
            let e = this._textures.get(i);
            ((s = this._renderContexts.getForClear(i)).textures = e.textures),
              (s.depthTexture = e.depthTexture),
              (s.width = e.width),
              (s.height = e.height),
              (s.renderTarget = i),
              (s.depth = i.depthBuffer),
              (s.stencil = i.stencilBuffer),
              (s.clearColorValue = this.backend.getClearColor()),
              (s.activeCubeFace = this.getActiveCubeFace()),
              (s.activeMipmapLevel = this.getActiveMipmapLevel());
          }
          this.backend.clear(e, t, r, s),
            null !== i && null === this._renderTarget && this._renderOutput(i);
        }
        clearColor() {
          return this.clear(!0, !1, !1);
        }
        clearDepth() {
          return this.clear(!1, !0, !1);
        }
        clearStencil() {
          return this.clear(!1, !1, !0);
        }
        async clearAsync(e = !0, t = !0, r = !0) {
          !1 === this._initialized && (await this.init()), this.clear(e, t, r);
        }
        async clearColorAsync() {
          this.clearAsync(!0, !1, !1);
        }
        async clearDepthAsync() {
          this.clearAsync(!1, !0, !1);
        }
        async clearStencilAsync() {
          this.clearAsync(!1, !1, !0);
        }
        get currentToneMapping() {
          return this.isOutputTarget ? this.toneMapping : u.y_p;
        }
        get currentColorSpace() {
          return this.isOutputTarget
            ? this.outputColorSpace
            : u.ppV.workingColorSpace;
        }
        get isOutputTarget() {
          return (
            this._renderTarget === this._outputRenderTarget ||
            null === this._renderTarget
          );
        }
        dispose() {
          this.info.dispose(),
            this.backend.dispose(),
            this._animation.dispose(),
            this._objects.dispose(),
            this._pipelines.dispose(),
            this._nodes.dispose(),
            this._bindings.dispose(),
            this._renderLists.dispose(),
            this._renderContexts.dispose(),
            this._textures.dispose(),
            null !== this._frameBufferTarget &&
              this._frameBufferTarget.dispose(),
            Object.values(this.backend.timestampQueryPool).forEach((e) => {
              null !== e && e.dispose();
            }),
            this.setRenderTarget(null),
            this.setAnimationLoop(null);
        }
        setRenderTarget(e, t = 0, r = 0) {
          (this._renderTarget = e),
            (this._activeCubeFace = t),
            (this._activeMipmapLevel = r);
        }
        getRenderTarget() {
          return this._renderTarget;
        }
        setOutputRenderTarget(e) {
          this._outputRenderTarget = e;
        }
        getOutputRenderTarget() {
          return this._outputRenderTarget;
        }
        _resetXRState() {
          this.backend.setXRTarget(null),
            this.setOutputRenderTarget(null),
            this.setRenderTarget(null),
            this._frameBufferTarget.dispose(),
            (this._frameBufferTarget = null);
        }
        setRenderObjectFunction(e) {
          this._renderObjectFunction = e;
        }
        getRenderObjectFunction() {
          return this._renderObjectFunction;
        }
        compute(e, t = null) {
          if (!0 === this._isDeviceLost) return;
          if (!1 === this._initialized)
            return (
              console.warn(
                "THREE.Renderer: .compute() called before the backend is initialized. Try using .computeAsync() instead."
              ),
              this.computeAsync(e)
            );
          let r = this._nodes.nodeFrame,
            i = r.renderId;
          this.info.calls++,
            this.info.compute.calls++,
            this.info.compute.frameCalls++,
            (r.renderId = this.info.calls);
          let s = this.backend,
            n = this._pipelines,
            a = this._bindings,
            o = this._nodes,
            l = Array.isArray(e) ? e : [e];
          if (void 0 === l[0] || !0 !== l[0].isComputeNode)
            throw Error("THREE.Renderer: .compute() expects a ComputeNode.");
          for (let r of (s.beginCompute(e), l)) {
            if (!1 === n.has(r)) {
              let e = () => {
                r.removeEventListener("dispose", e),
                  n.delete(r),
                  a.delete(r),
                  o.delete(r);
              };
              r.addEventListener("dispose", e);
              let t = r.onInitFunction;
              null !== t && t.call(r, { renderer: this });
            }
            o.updateForCompute(r), a.updateForCompute(r);
            let i = a.getForCompute(r),
              l = n.getForCompute(r, i);
            s.compute(e, r, i, l, t);
          }
          s.finishCompute(e), (r.renderId = i);
        }
        async computeAsync(e, t = null) {
          !1 === this._initialized && (await this.init()), this.compute(e, t);
        }
        async hasFeatureAsync(e) {
          return (
            !1 === this._initialized && (await this.init()),
            this.backend.hasFeature(e)
          );
        }
        async resolveTimestampsAsync(e = "render") {
          return (
            !1 === this._initialized && (await this.init()),
            this.backend.resolveTimestampsAsync(e)
          );
        }
        hasFeature(e) {
          return !1 === this._initialized
            ? (console.warn(
                "THREE.Renderer: .hasFeature() called before the backend is initialized. Try using .hasFeatureAsync() instead."
              ),
              !1)
            : this.backend.hasFeature(e);
        }
        hasInitialized() {
          return this._initialized;
        }
        async initTextureAsync(e) {
          !1 === this._initialized && (await this.init()),
            this._textures.updateTexture(e);
        }
        initTexture(e) {
          !1 === this._initialized &&
            console.warn(
              "THREE.Renderer: .initTexture() called before the backend is initialized. Try using .initTextureAsync() instead."
            ),
            this._textures.updateTexture(e);
        }
        copyFramebufferToTexture(e, t = null) {
          let r;
          if (null !== t)
            if (t.isVector2)
              t = mS.set(t.x, t.y, e.image.width, e.image.height).floor();
            else {
              if (!t.isVector4)
                return void console.error(
                  "THREE.Renderer.copyFramebufferToTexture: Invalid rectangle."
                );
              t = mS.copy(t).floor();
            }
          else t = mS.set(0, 0, e.image.width, e.image.height);
          let i = this._currentRenderContext;
          null !== i
            ? (r = i.renderTarget)
            : null !==
                (r = this._renderTarget || this._getFrameBufferTarget()) &&
              (this._textures.updateRenderTarget(r),
              (i = this._textures.get(r))),
            this._textures.updateTexture(e, { renderTarget: r }),
            this.backend.copyFramebufferToTexture(e, i, t);
        }
        copyTextureToTexture(e, t, r = null, i = null, s = 0, n = 0) {
          this._textures.updateTexture(e),
            this._textures.updateTexture(t),
            this.backend.copyTextureToTexture(e, t, r, i, s, n);
        }
        async readRenderTargetPixelsAsync(e, t, r, i, s, n = 0, a = 0) {
          return this.backend.copyTextureToBuffer(e.textures[n], t, r, i, s, a);
        }
        _projectObject(e, t, r, i, s) {
          if (!1 === e.visible) return;
          if (e.layers.test(t.layers)) {
            if (e.isGroup)
              (r = e.renderOrder),
                e.isClippingGroup && e.enabled && (s = s.getGroupContext(e));
            else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
            else if (e.isLight) i.pushLight(e);
            else if (e.isSprite) {
              let n = t.isArrayCamera ? mv : m_;
              if (!e.frustumCulled || n.intersectsSprite(e, t)) {
                !0 === this.sortObjects &&
                  mS.setFromMatrixPosition(e.matrixWorld).applyMatrix4(mN);
                let { geometry: t, material: n } = e;
                n.visible && i.push(e, t, n, r, mS.z, null, s);
              }
            } else if (e.isLineLoop)
              console.error(
                "THREE.Renderer: Objects of type THREE.LineLoop are not supported. Please use THREE.Line or THREE.LineSegments."
              );
            else if (e.isMesh || e.isLine || e.isPoints) {
              let n = t.isArrayCamera ? mv : m_;
              if (!e.frustumCulled || n.intersectsObject(e, t)) {
                let { geometry: t, material: n } = e;
                if (
                  (!0 === this.sortObjects &&
                    (null === t.boundingSphere && t.computeBoundingSphere(),
                    mS
                      .copy(t.boundingSphere.center)
                      .applyMatrix4(e.matrixWorld)
                      .applyMatrix4(mN)),
                  Array.isArray(n))
                ) {
                  let a = t.groups;
                  for (let o = 0, l = a.length; o < l; o++) {
                    let l = a[o],
                      u = n[l.materialIndex];
                    u && u.visible && i.push(e, t, u, r, mS.z, l, s);
                  }
                } else n.visible && i.push(e, t, n, r, mS.z, null, s);
              }
            }
          }
          if (!0 === e.isBundleGroup && void 0 !== this.backend.beginBundle) {
            let r = i;
            (i = this._renderLists.get(e, t)).begin(),
              r.pushBundle({ bundleGroup: e, camera: t, renderList: i }),
              i.finish();
          }
          let n = e.children;
          for (let e = 0, a = n.length; e < a; e++)
            this._projectObject(n[e], t, r, i, s);
        }
        _renderBundles(e, t, r) {
          for (let i of e) this._renderBundle(i, t, r);
        }
        _renderTransparents(e, t, r, i, s) {
          if (t.length > 0) {
            for (let { material: e } of t) e.side = u.hsX;
            for (let { material: e } of (this._renderObjects(
              t,
              r,
              i,
              s,
              "backSide"
            ),
            t))
              e.side = u.hB5;
            for (let { material: n } of (this._renderObjects(e, r, i, s), t))
              n.side = u.$EB;
          } else this._renderObjects(e, r, i, s);
        }
        _renderObjects(e, t, r, i, s = null) {
          for (let n = 0, a = e.length; n < a; n++) {
            let {
              object: a,
              geometry: o,
              material: l,
              group: u,
              clippingContext: d,
            } = e[n];
            this._currentRenderObjectFunction(a, r, t, o, l, u, i, d, s);
          }
        }
        renderObject(e, t, r, i, s, n, a, o = null, l = null) {
          let d, h, c;
          if (
            (e.onBeforeRender(this, t, r, i, s, n),
            !0 === s.allowOverride && null !== t.overrideMaterial)
          ) {
            let e = t.overrideMaterial;
            s.positionNode &&
              s.positionNode.isNode &&
              ((d = e.positionNode), (e.positionNode = s.positionNode)),
              (e.alphaTest = s.alphaTest),
              (e.alphaMap = s.alphaMap),
              (e.transparent = s.transparent || s.transmission > 0),
              e.isShadowPassMaterial &&
                ((e.side = null === s.shadowSide ? s.side : s.shadowSide),
                s.depthNode &&
                  s.depthNode.isNode &&
                  ((c = e.depthNode), (e.depthNode = s.depthNode)),
                s.castShadowNode &&
                  s.castShadowNode.isNode &&
                  ((h = e.colorNode), (e.colorNode = s.castShadowNode)),
                s.castShadowPositionNode &&
                  s.castShadowPositionNode.isNode &&
                  ((d = e.positionNode),
                  (e.positionNode = s.castShadowPositionNode))),
              (s = e);
          }
          !0 === s.transparent && s.side === u.$EB && !1 === s.forceSinglePass
            ? ((s.side = u.hsX),
              this._handleObjectFunction(e, s, t, r, a, n, o, "backSide"),
              (s.side = u.hB5),
              this._handleObjectFunction(e, s, t, r, a, n, o, l),
              (s.side = u.$EB))
            : this._handleObjectFunction(e, s, t, r, a, n, o, l),
            void 0 !== d && (t.overrideMaterial.positionNode = d),
            void 0 !== c && (t.overrideMaterial.depthNode = c),
            void 0 !== h && (t.overrideMaterial.colorNode = h),
            e.onAfterRender(this, t, r, i, s, n);
        }
        _renderObjectDirect(e, t, r, i, s, n, a, o) {
          let l = this._objects.get(
            e,
            t,
            r,
            i,
            s,
            this._currentRenderContext,
            a,
            o
          );
          (l.drawRange = e.geometry.drawRange), (l.group = n);
          let u = this._nodes.needsRefresh(l);
          u &&
            (this._nodes.updateBefore(l),
            this._geometries.updateForRender(l),
            this._nodes.updateForRender(l),
            this._bindings.updateForRender(l)),
            this._pipelines.updateForRender(l),
            null !== this._currentRenderBundle &&
              (this.backend
                .get(this._currentRenderBundle)
                .renderObjects.push(l),
              (l.bundle = this._currentRenderBundle.bundleGroup)),
            this.backend.draw(l, this.info),
            u && this._nodes.updateAfter(l);
        }
        _createObjectPipeline(e, t, r, i, s, n, a, o) {
          let l = this._objects.get(
            e,
            t,
            r,
            i,
            s,
            this._currentRenderContext,
            a,
            o
          );
          (l.drawRange = e.geometry.drawRange),
            (l.group = n),
            this._nodes.updateBefore(l),
            this._geometries.updateForRender(l),
            this._nodes.updateForRender(l),
            this._bindings.updateForRender(l),
            this._pipelines.getForRender(l, this._compilationPromises),
            this._nodes.updateAfter(l);
        }
        get compile() {
          return this.compileAsync;
        }
      }
      class mA {
        constructor(e = "") {
          (this.name = e), (this.visibility = 0);
        }
        setVisibility(e) {
          this.visibility |= e;
        }
        clone() {
          return Object.assign(new this.constructor(), this);
        }
      }
      class mE extends mA {
        constructor(e, t = null) {
          super(e),
            (this.isBuffer = !0),
            (this.bytesPerElement = Float32Array.BYTES_PER_ELEMENT),
            (this._buffer = t);
        }
        get byteLength() {
          var e;
          return (e = this._buffer.byteLength) + ((16 - (e % 16)) % 16);
        }
        get buffer() {
          return this._buffer;
        }
        update() {
          return !0;
        }
      }
      class mw extends mE {
        constructor(e, t = null) {
          super(e, t), (this.isUniformBuffer = !0);
        }
      }
      let mC = 0;
      class mM extends mw {
        constructor(e, t) {
          super("UniformBuffer_" + mC++, e ? e.value : null),
            (this.nodeUniform = e),
            (this.groupNode = t);
        }
        get buffer() {
          return this.nodeUniform.value;
        }
      }
      class mB extends mw {
        constructor(e) {
          super(e),
            (this.isUniformsGroup = !0),
            (this._values = null),
            (this.uniforms = []);
        }
        addUniform(e) {
          return this.uniforms.push(e), this;
        }
        removeUniform(e) {
          let t = this.uniforms.indexOf(e);
          return -1 !== t && this.uniforms.splice(t, 1), this;
        }
        get values() {
          return (
            null === this._values && (this._values = Array.from(this.buffer)),
            this._values
          );
        }
        get buffer() {
          let e = this._buffer;
          return (
            null === e &&
              ((e = new Float32Array(new ArrayBuffer(this.byteLength))),
              (this._buffer = e)),
            e
          );
        }
        get byteLength() {
          let e = this.bytesPerElement,
            t = 0;
          for (let r = 0, i = this.uniforms.length; r < i; r++) {
            let i = this.uniforms[r],
              s = i.boundary,
              n = i.itemSize * e,
              a = t % 16,
              o = a % s,
              l = a + o;
            (t += o),
              0 !== l && 16 - l < n && (t += 16 - l),
              (i.offset = t / e),
              (t += n);
          }
          return 16 * Math.ceil(t / 16);
        }
        update() {
          let e = !1;
          for (let t of this.uniforms) !0 === this.updateByType(t) && (e = !0);
          return e;
        }
        updateByType(e) {
          return e.isNumberUniform
            ? this.updateNumber(e)
            : e.isVector2Uniform
            ? this.updateVector2(e)
            : e.isVector3Uniform
            ? this.updateVector3(e)
            : e.isVector4Uniform
            ? this.updateVector4(e)
            : e.isColorUniform
            ? this.updateColor(e)
            : e.isMatrix3Uniform
            ? this.updateMatrix3(e)
            : e.isMatrix4Uniform
            ? this.updateMatrix4(e)
            : void console.error(
                "THREE.WebGPUUniformsGroup: Unsupported uniform type.",
                e
              );
        }
        updateNumber(e) {
          let t = !1,
            r = this.values,
            i = e.getValue(),
            s = e.offset,
            n = e.getType();
          return (
            r[s] !== i && ((this._getBufferForType(n)[s] = r[s] = i), (t = !0)),
            t
          );
        }
        updateVector2(e) {
          let t = !1,
            r = this.values,
            i = e.getValue(),
            s = e.offset,
            n = e.getType();
          if (r[s + 0] !== i.x || r[s + 1] !== i.y) {
            let e = this._getBufferForType(n);
            (e[s + 0] = r[s + 0] = i.x), (e[s + 1] = r[s + 1] = i.y), (t = !0);
          }
          return t;
        }
        updateVector3(e) {
          let t = !1,
            r = this.values,
            i = e.getValue(),
            s = e.offset,
            n = e.getType();
          if (r[s + 0] !== i.x || r[s + 1] !== i.y || r[s + 2] !== i.z) {
            let e = this._getBufferForType(n);
            (e[s + 0] = r[s + 0] = i.x),
              (e[s + 1] = r[s + 1] = i.y),
              (e[s + 2] = r[s + 2] = i.z),
              (t = !0);
          }
          return t;
        }
        updateVector4(e) {
          let t = !1,
            r = this.values,
            i = e.getValue(),
            s = e.offset,
            n = e.getType();
          if (
            r[s + 0] !== i.x ||
            r[s + 1] !== i.y ||
            r[s + 2] !== i.z ||
            r[s + 4] !== i.w
          ) {
            let e = this._getBufferForType(n);
            (e[s + 0] = r[s + 0] = i.x),
              (e[s + 1] = r[s + 1] = i.y),
              (e[s + 2] = r[s + 2] = i.z),
              (e[s + 3] = r[s + 3] = i.w),
              (t = !0);
          }
          return t;
        }
        updateColor(e) {
          let t = !1,
            r = this.values,
            i = e.getValue(),
            s = e.offset;
          if (r[s + 0] !== i.r || r[s + 1] !== i.g || r[s + 2] !== i.b) {
            let e = this.buffer;
            (e[s + 0] = r[s + 0] = i.r),
              (e[s + 1] = r[s + 1] = i.g),
              (e[s + 2] = r[s + 2] = i.b),
              (t = !0);
          }
          return t;
        }
        updateMatrix3(e) {
          let t = !1,
            r = this.values,
            i = e.getValue().elements,
            s = e.offset;
          if (
            r[s + 0] !== i[0] ||
            r[s + 1] !== i[1] ||
            r[s + 2] !== i[2] ||
            r[s + 4] !== i[3] ||
            r[s + 5] !== i[4] ||
            r[s + 6] !== i[5] ||
            r[s + 8] !== i[6] ||
            r[s + 9] !== i[7] ||
            r[s + 10] !== i[8]
          ) {
            let e = this.buffer;
            (e[s + 0] = r[s + 0] = i[0]),
              (e[s + 1] = r[s + 1] = i[1]),
              (e[s + 2] = r[s + 2] = i[2]),
              (e[s + 4] = r[s + 4] = i[3]),
              (e[s + 5] = r[s + 5] = i[4]),
              (e[s + 6] = r[s + 6] = i[5]),
              (e[s + 8] = r[s + 8] = i[6]),
              (e[s + 9] = r[s + 9] = i[7]),
              (e[s + 10] = r[s + 10] = i[8]),
              (t = !0);
          }
          return t;
        }
        updateMatrix4(e) {
          let t = !1,
            r = this.values,
            i = e.getValue().elements,
            s = e.offset;
          return (
            !1 ===
              (function (e, t, r) {
                for (let i = 0, s = t.length; i < s; i++)
                  if (e[r + i] !== t[i]) return !1;
                return !0;
              })(r, i, s) &&
              (this.buffer.set(i, s),
              (function (e, t, r) {
                for (let i = 0, s = t.length; i < s; i++) e[r + i] = t[i];
              })(r, i, s),
              (t = !0)),
            t
          );
        }
        _getBufferForType(e) {
          return "int" === e || "ivec2" === e || "ivec3" === e || "ivec4" === e
            ? new Int32Array(this.buffer.buffer)
            : "uint" === e || "uvec2" === e || "uvec3" === e || "uvec4" === e
            ? new Uint32Array(this.buffer.buffer)
            : this.buffer;
        }
      }
      let mL = 0;
      class mF extends mB {
        constructor(e, t) {
          super(e),
            (this.id = mL++),
            (this.groupNode = t),
            (this.isNodeUniformsGroup = !0);
        }
      }
      class mP extends mA {
        constructor(e, t) {
          super(e),
            (this._onDisposeTexture = () => {
              this.texture = null;
            }),
            (this.texture = t),
            (this.version = t ? t.version : 0),
            (this.generation = null),
            (this.isSampler = !0);
        }
        set texture(e) {
          this._texture !== e &&
            (this._texture &&
              this._texture.removeEventListener(
                "dispose",
                this._onDisposeTexture
              ),
            (this._texture = e),
            (this.generation = null),
            (this.version = 0),
            this._texture &&
              this._texture.addEventListener(
                "dispose",
                this._onDisposeTexture
              ));
        }
        get texture() {
          return this._texture;
        }
        update() {
          let { texture: e, version: t } = this;
          return t !== e.version && ((this.version = e.version), !0);
        }
      }
      let mI = 0;
      class mU extends mP {
        constructor(e, t) {
          super(e, t),
            (this.id = mI++),
            (this.store = !1),
            (this.isSampledTexture = !0);
        }
      }
      class mD extends mU {
        constructor(e, t, r, i = null) {
          super(e, t ? t.value : null),
            (this.textureNode = t),
            (this.groupNode = r),
            (this.access = i);
        }
        update() {
          let { textureNode: e } = this;
          return this.texture !== e.value
            ? ((this.texture = e.value), !0)
            : super.update();
        }
      }
      class mV extends mD {
        constructor(e, t, r, i = null) {
          super(e, t, r, i), (this.isSampledCubeTexture = !0);
        }
      }
      class mO extends mD {
        constructor(e, t, r, i = null) {
          super(e, t, r, i), (this.isSampledTexture3D = !0);
        }
      }
      let mG = { textureDimensions: "textureSize", equals: "equal" },
        mk = { low: "lowp", medium: "mediump", high: "highp" },
        mz = { swizzleAssign: !0, storageBuffer: !1 },
        m$ = { perspective: "smooth", linear: "noperspective" },
        mW = { centroid: "centroid" },
        mH = `
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;
precision highp samplerCube;
precision highp sampler2DArray;

precision highp usampler2D;
precision highp usampler3D;
precision highp usamplerCube;
precision highp usampler2DArray;

precision highp isampler2D;
precision highp isampler3D;
precision highp isamplerCube;
precision highp isampler2DArray;

precision lowp sampler2DShadow;
precision lowp sampler2DArrayShadow;
precision lowp samplerCubeShadow;
`;
      class mq extends gD {
        constructor(e, t) {
          super(e, t, new g4()),
            (this.uniformGroups = {}),
            (this.transforms = []),
            (this.extensions = {}),
            (this.builtins = { vertex: [], fragment: [], compute: [] });
        }
        needsToWorkingColorSpace(e) {
          return !0 === e.isVideoTexture && e.colorSpace !== u.jf0;
        }
        getMethod(e) {
          return mG[e] || e;
        }
        getOutputStructName() {
          return "";
        }
        buildFunctionCode(e) {
          let t = e.layout,
            r = this.flowShaderNode(e),
            i = [];
          for (let e of t.inputs) i.push(this.getType(e.type) + " " + e.name);
          return `${this.getType(t.type)} ${t.name}( ${i.join(", ")} ) {

	${r.vars}

${r.code}
	return ${r.result};

}`;
        }
        setupPBO(e) {
          let t = e.value;
          if (void 0 === t.pbo) {
            let e = t.array,
              r = t.count * t.itemSize,
              { itemSize: i } = t,
              s = t.array.constructor.name.toLowerCase().includes("int"),
              n = s ? u.ZQM : u.VT0;
            2 === i
              ? (n = s ? u.TkQ : u.paN)
              : 3 === i
              ? (n = s ? u.VGF : u.HIg)
              : 4 === i && (n = s ? u.c90 : u.GWd);
            let a = {
                Float32Array: u.RQf,
                Uint8Array: u.OUM,
                Uint16Array: u.cHt,
                Uint32Array: u.bkx,
                Int8Array: u.tJf,
                Int16Array: u.fBL,
                Int32Array: u.Yuy,
                Uint8ClampedArray: u.OUM,
              },
              o = Math.pow(2, Math.ceil(Math.log2(Math.sqrt(r / i)))),
              l = Math.ceil(r / i / o);
            o * l * i < r && l++;
            let d = o * l * i,
              h = new e.constructor(d);
            h.set(e, 0), (t.array = h);
            let c = new u.GYF(
              t.array,
              o,
              l,
              n,
              a[t.array.constructor.name] || u.RQf
            );
            (c.needsUpdate = !0), (c.isPBOTexture = !0);
            let p = new ss(c, null, null);
            p.setPrecision("high"),
              (t.pboNode = p),
              (t.pbo = p.value),
              this.getUniformFromNode(
                t.pboNode,
                "texture",
                this.shaderStage,
                this.context.nodeName
              );
          }
        }
        getPropertyName(e, t = this.shaderStage) {
          return e.isNodeUniform &&
            !0 !== e.node.isTextureNode &&
            !0 !== e.node.isBufferNode
            ? t.charAt(0) + "_" + e.name
            : super.getPropertyName(e, t);
        }
        generatePBO(e) {
          let { node: t, indexNode: r } = e,
            i = t.value;
          this.renderer.backend.has(i) &&
            (this.renderer.backend.get(i).pbo = i.pbo);
          let s = this.getUniformFromNode(
              i.pboNode,
              "texture",
              this.shaderStage,
              this.context.nodeName
            ),
            n = this.getPropertyName(s);
          this.increaseUsage(r);
          let a = r.build(this, "uint"),
            o = this.getDataFromNode(e),
            l = o.propertyName;
          if (void 0 === l) {
            let r = this.getVarFromNode(e);
            l = this.getPropertyName(r);
            let s = this.getDataFromNode(t),
              d = s.propertySizeName;
            void 0 === d &&
              ((d = l + "Size"),
              this.getVarFromNode(t, d, "uint"),
              this.addLineFlowCode(
                `${d} = uint( textureSize( ${n}, 0 ).x )`,
                e
              ),
              (s.propertySizeName = d));
            let { itemSize: h } = i,
              c = "." + P.join("").slice(0, h),
              p = `ivec2(${a} % ${d}, ${a} / ${d})`,
              g = this.generateTextureLoad(null, n, p, null, "0"),
              m = "vec4";
            i.pbo.type === u.bkx
              ? (m = "uvec4")
              : i.pbo.type === u.Yuy && (m = "ivec4"),
              this.addLineFlowCode(`${l} = ${m}(${g})${c}`, e),
              (o.propertyName = l);
          }
          return l;
        }
        generateTextureLoad(e, t, r, i, s = "0") {
          return i
            ? `texelFetch( ${t}, ivec3( ${r}, ${i} ), ${s} )`
            : `texelFetch( ${t}, ${r}, ${s} )`;
        }
        generateTexture(e, t, r, i) {
          return e.isDepthTexture
            ? (i && (r = `vec4( ${r}, ${i} )`), `texture( ${t}, ${r} ).x`)
            : (i && (r = `vec3( ${r}, ${i} )`), `texture( ${t}, ${r} )`);
        }
        generateTextureLevel(e, t, r, i) {
          return `textureLod( ${t}, ${r}, ${i} )`;
        }
        generateTextureBias(e, t, r, i) {
          return `texture( ${t}, ${r}, ${i} )`;
        }
        generateTextureGrad(e, t, r, i) {
          return `textureGrad( ${t}, ${r}, ${i[0]}, ${i[1]} )`;
        }
        generateTextureCompare(e, t, r, i, s, n = this.shaderStage) {
          if ("fragment" === n)
            return s
              ? `texture( ${t}, vec4( ${r}, ${s}, ${i} ) )`
              : `texture( ${t}, vec3( ${r}, ${i} ) )`;
          console.error(
            `WebGPURenderer: THREE.DepthTexture.compareFunction() does not support ${n} shader.`
          );
        }
        getVars(e) {
          let t = [],
            r = this.vars[e];
          if (void 0 !== r)
            for (let e of r) t.push(`${this.getVar(e.type, e.name, e.count)};`);
          return t.join("\n	");
        }
        getUniforms(e) {
          let t = this.uniforms[e],
            r = [],
            i = {};
          for (let s of t) {
            let t = null,
              n = !1;
            if ("texture" === s.type || "texture3D" === s.type) {
              let e = s.node.value,
                r = "";
              (!0 === e.isDataTexture || !0 === e.isData3DTexture) &&
                (e.type === u.bkx ? (r = "u") : e.type === u.Yuy && (r = "i")),
                (t =
                  "texture3D" === s.type && !1 === e.isArrayTexture
                    ? `${r}sampler3D ${s.name};`
                    : e.compareFunction
                    ? !0 === e.isArrayTexture
                      ? `sampler2DArrayShadow ${s.name};`
                      : `sampler2DShadow ${s.name};`
                    : !0 === e.isArrayTexture ||
                      !0 === e.isDataArrayTexture ||
                      !0 === e.isCompressedArrayTexture
                    ? `${r}sampler2DArray ${s.name};`
                    : `${r}sampler2D ${s.name};`);
            } else if ("cubeTexture" === s.type) t = `samplerCube ${s.name};`;
            else if ("buffer" === s.type) {
              let e = s.node,
                r = this.getType(e.bufferType),
                i = e.bufferCount,
                n = i > 0 ? i : "";
              t = `${e.name} {
	${r} ${s.name}[${n}];
};
`;
            } else {
              let r = this.getVectorType(s.type);
              (t = `${r} ${this.getPropertyName(s, e)};`), (n = !0);
            }
            let a = s.node.precision;
            if ((null !== a && (t = mk[a] + " " + t), n)) {
              t = "	" + t;
              let e = s.groupNode.name;
              (i[e] || (i[e] = [])).push(t);
            } else (t = "uniform " + t), r.push(t);
          }
          let s = "";
          for (let t in i) {
            let r = i[t];
            s += this._getGLSLUniformStruct(e + "_" + t, r.join("\n")) + "\n";
          }
          return s + r.join("\n");
        }
        getTypeFromAttribute(e) {
          let t = super.getTypeFromAttribute(e);
          if (/^[iu]/.test(t) && e.gpuType !== u.Yuy) {
            let r = e;
            e.isInterleavedBufferAttribute && (r = e.data);
            let i = r.array;
            !1 == (i instanceof Uint32Array || i instanceof Int32Array) &&
              (t = t.slice(1));
          }
          return t;
        }
        getAttributes(e) {
          let t = "";
          if ("vertex" === e || "compute" === e) {
            let e = this.getAttributesArray(),
              r = 0;
            for (let i of e)
              t += `layout( location = ${r++} ) in ${i.type} ${i.name};
`;
          }
          return t;
        }
        getStructMembers(e) {
          let t = [];
          for (let r of e.members) t.push(`	${r.type} ${r.name};`);
          return t.join("\n");
        }
        getStructs(e) {
          let t = [],
            r = this.structs[e],
            i = [];
          for (let e of r)
            if (e.output)
              for (let t of e.members)
                i.push(
                  `layout( location = ${t.index} ) out ${t.type} ${t.name};`
                );
            else {
              let r = "struct " + e.name + " {\n";
              (r += this.getStructMembers(e)), (r += "\n};\n"), t.push(r);
            }
          return (
            0 === i.length &&
              i.push("layout( location = 0 ) out vec4 fragColor;"),
            "\n" + i.join("\n") + "\n\n" + t.join("\n")
          );
        }
        getVaryings(e) {
          let t = "",
            r = this.varyings;
          if ("vertex" === e || "compute" === e)
            for (let i of r) {
              "compute" === e && (i.needsInterpolation = !0);
              let r = this.getType(i.type);
              if (i.needsInterpolation)
                if (i.interpolationType) {
                  let e = m$[i.interpolationType] || i.interpolationType,
                    s = mW[i.interpolationSampling] || "";
                  t += `${e} ${s} out ${r} ${i.name};
`;
                } else {
                  let e =
                    r.includes("int") || r.includes("uv") || r.includes("iv")
                      ? "flat "
                      : "";
                  t += `${e}out ${r} ${i.name};
`;
                }
              else
                t += `${r} ${i.name};
`;
            }
          else if ("fragment" === e) {
            for (let e of r)
              if (e.needsInterpolation) {
                let r = this.getType(e.type);
                if (e.interpolationType) {
                  let i = m$[e.interpolationType] || e.interpolationType,
                    s = mW[e.interpolationSampling] || "";
                  t += `${i} ${s} in ${r} ${e.name};
`;
                } else {
                  let i =
                    r.includes("int") || r.includes("uv") || r.includes("iv")
                      ? "flat "
                      : "";
                  t += `${i}in ${r} ${e.name};
`;
                }
              }
          }
          for (let r of this.builtins[e])
            t += `${r};
`;
          return t;
        }
        getVertexIndex() {
          return "uint( gl_VertexID )";
        }
        getInstanceIndex() {
          return "uint( gl_InstanceID )";
        }
        getInvocationLocalIndex() {
          let e = this.object.workgroupSize.reduce((e, t) => e * t, 1);
          return `uint( gl_InstanceID ) % ${e}u`;
        }
        getDrawIndex() {
          return this.renderer.backend.extensions.has("WEBGL_multi_draw")
            ? "uint( gl_DrawID )"
            : null;
        }
        getFrontFacing() {
          return "gl_FrontFacing";
        }
        getFragCoord() {
          return "gl_FragCoord.xy";
        }
        getFragDepth() {
          return "gl_FragDepth";
        }
        enableExtension(e, t, r = this.shaderStage) {
          let i = this.extensions[r] || (this.extensions[r] = new Map());
          !1 === i.has(e) && i.set(e, { name: e, behavior: t });
        }
        getExtensions(e) {
          let t = [];
          if ("vertex" === e) {
            let t = this.renderer.backend.extensions;
            this.object.isBatchedMesh &&
              t.has("WEBGL_multi_draw") &&
              this.enableExtension("GL_ANGLE_multi_draw", "require", e);
          }
          let r = this.extensions[e];
          if (void 0 !== r)
            for (let { name: e, behavior: i } of r.values())
              t.push(`#extension ${e} : ${i}`);
          return t.join("\n");
        }
        getClipDistance() {
          return "gl_ClipDistance";
        }
        isAvailable(e) {
          let t = mz[e];
          if (void 0 === t) {
            let r;
            switch (((t = !1), e)) {
              case "float32Filterable":
                r = "OES_texture_float_linear";
                break;
              case "clipDistance":
                r = "WEBGL_clip_cull_distance";
            }
            if (void 0 !== r) {
              let e = this.renderer.backend.extensions;
              e.has(r) && (e.get(r), (t = !0));
            }
            mz[e] = t;
          }
          return t;
        }
        isFlipY() {
          return !0;
        }
        enableHardwareClipping(e) {
          this.enableExtension("GL_ANGLE_clip_cull_distance", "require"),
            this.builtins.vertex.push(`out float gl_ClipDistance[ ${e} ]`);
        }
        enableMultiview() {
          this.enableExtension("GL_OVR_multiview2", "require", "fragment"),
            this.enableExtension("GL_OVR_multiview2", "require", "vertex"),
            this.builtins.vertex.push("layout(num_views = 2) in");
        }
        registerTransform(e, t) {
          this.transforms.push({ varyingName: e, attributeNode: t });
        }
        getTransforms() {
          let e = this.transforms,
            t = "";
          for (let r = 0; r < e.length; r++) {
            let i = e[r],
              s = this.getPropertyName(i.attributeNode);
            s &&
              (t += `${i.varyingName} = ${s};
	`);
          }
          return t;
        }
        _getGLSLUniformStruct(e, t) {
          return `
layout( std140 ) uniform ${e} {
${t}
};`;
        }
        _getGLSLVertexCode(e) {
          return `#version 300 es

${this.getSignature()}

// extensions
${e.extensions}

// precision
${mH}

// uniforms
${e.uniforms}

// varyings
${e.varyings}

// attributes
${e.attributes}

// codes
${e.codes}

void main() {

	// vars
	${e.vars}

	// transforms
	${e.transforms}

	// flow
	${e.flow}

	gl_PointSize = 1.0;

}
`;
        }
        _getGLSLFragmentCode(e) {
          return `#version 300 es

${this.getSignature()}

// extensions
${e.extensions}

// precision
${mH}

// uniforms
${e.uniforms}

// varyings
${e.varyings}

// codes
${e.codes}

// structs
${e.structs}

void main() {

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`;
        }
        buildCode() {
          let e =
            null !== this.material
              ? { fragment: {}, vertex: {} }
              : { compute: {} };
          for (let t in (this.sortBindingGroups(), e)) {
            let r = "// code\n\n";
            r += this.flowCode[t];
            let i = this.flowNodes[t],
              s = i[i.length - 1];
            for (let e of i) {
              let i = this.getFlowData(e),
                n = e.name;
              n &&
                (r.length > 0 && (r += "\n"),
                (r += `	// flow -> ${n}
	`)),
                (r += `${i.code}
	`),
                e === s &&
                  "compute" !== t &&
                  ((r += "// result\n	"),
                  "vertex" === t
                    ? ((r += "gl_Position = "), (r += `${i.result};`))
                    : "fragment" !== t ||
                      e.outputNode.isOutputStructNode ||
                      ((r += "fragColor = "), (r += `${i.result};`)));
            }
            let n = e[t];
            (n.extensions = this.getExtensions(t)),
              (n.uniforms = this.getUniforms(t)),
              (n.attributes = this.getAttributes(t)),
              (n.varyings = this.getVaryings(t)),
              (n.vars = this.getVars(t)),
              (n.structs = this.getStructs(t)),
              (n.codes = this.getCodes(t)),
              (n.transforms = this.getTransforms(t)),
              (n.flow = r);
          }
          null !== this.material
            ? ((this.vertexShader = this._getGLSLVertexCode(e.vertex)),
              (this.fragmentShader = this._getGLSLFragmentCode(e.fragment)))
            : (this.computeShader = this._getGLSLVertexCode(e.compute));
        }
        getUniformFromNode(e, t, r, i = null) {
          let s = super.getUniformFromNode(e, t, r, i),
            n = this.getDataFromNode(e, r, this.globalCache),
            a = n.uniformGPU;
          if (void 0 === a) {
            let i = e.groupNode,
              o = i.name,
              l = this.getBindGroupArray(o, r);
            if ("texture" === t) (a = new mD(s.name, s.node, i)), l.push(a);
            else if ("cubeTexture" === t)
              (a = new mV(s.name, s.node, i)), l.push(a);
            else if ("texture3D" === t)
              (a = new mO(s.name, s.node, i)), l.push(a);
            else if ("buffer" === t) {
              (e.name = `NodeBuffer_${e.id}`), (s.name = `buffer${e.id}`);
              let t = new mM(e, i);
              (t.name = e.name), l.push(t), (a = t);
            } else {
              let e = this.uniformGroups[r] || (this.uniformGroups[r] = {}),
                n = e[o];
              void 0 === n &&
                ((n = new mF(r + "_" + o, i)), (e[o] = n), l.push(n)),
                (a = this.getNodeUniform(s, t)),
                n.addUniform(a);
            }
            n.uniformGPU = a;
          }
          return s;
        }
      }
      let mj = null,
        mX = null;
      class mK {
        constructor(e = {}) {
          (this.parameters = Object.assign({}, e)),
            (this.data = new WeakMap()),
            (this.renderer = null),
            (this.domElement = null),
            (this.timestampQueryPool = { render: null, compute: null }),
            (this.trackTimestamp = !0 === e.trackTimestamp);
        }
        async init(e) {
          this.renderer = e;
        }
        get coordinateSystem() {}
        beginRender() {}
        finishRender() {}
        beginCompute() {}
        finishCompute() {}
        draw() {}
        compute() {}
        createProgram() {}
        destroyProgram() {}
        createBindings() {}
        updateBindings() {}
        updateBinding() {}
        createRenderPipeline() {}
        createComputePipeline() {}
        needsRenderUpdate() {}
        getRenderCacheKey() {}
        createNodeBuilder() {}
        createSampler() {}
        destroySampler() {}
        createDefaultTexture() {}
        createTexture() {}
        updateTexture() {}
        generateMipmaps() {}
        destroyTexture() {}
        async copyTextureToBuffer() {}
        copyTextureToTexture() {}
        copyFramebufferToTexture() {}
        createAttribute() {}
        createIndexAttribute() {}
        createStorageAttribute() {}
        updateAttribute() {}
        destroyAttribute() {}
        getContext() {}
        updateSize() {}
        updateViewport() {}
        isOccluded() {}
        async resolveTimestampsAsync(e = "render") {
          if (!this.trackTimestamp)
            return void (0, u.mcG)(
              "WebGPURenderer: Timestamp tracking is disabled."
            );
          let t = this.timestampQueryPool[e];
          if (!t)
            return void (0, u.mcG)(
              `WebGPURenderer: No timestamp query pool for type '${e}' found.`
            );
          let r = await t.resolveQueriesAsync();
          return (this.renderer.info[e].timestamp = r), r;
        }
        async waitForGPU() {}
        async getArrayBufferAsync() {}
        async hasFeatureAsync() {}
        hasFeature() {}
        getMaxAnisotropy() {}
        getDrawingBufferSize() {
          return (
            (mj = mj || new u.I9Y()), this.renderer.getDrawingBufferSize(mj)
          );
        }
        setScissorTest() {}
        getClearColor() {
          let e = this.renderer;
          return (mX = mX || new dw()), e.getClearColor(mX), mX.getRGB(mX), mX;
        }
        getDomElement() {
          let e = this.domElement;
          return (
            null === e &&
              ("setAttribute" in
                (e =
                  void 0 !== this.parameters.canvas
                    ? this.parameters.canvas
                    : (0, u.lPF)()) &&
                e.setAttribute("data-engine", `three.js r${u.sPf} webgpu`),
              (this.domElement = e)),
            e
          );
        }
        set(e, t) {
          this.data.set(e, t);
        }
        get(e) {
          let t = this.data.get(e);
          return void 0 === t && ((t = {}), this.data.set(e, t)), t;
        }
        has(e) {
          return this.data.has(e);
        }
        delete(e) {
          this.data.delete(e);
        }
        dispose() {}
      }
      let mQ = 0;
      class mY {
        constructor(e, t) {
          (this.buffers = [e.bufferGPU, t]),
            (this.type = e.type),
            (this.bufferType = e.bufferType),
            (this.pbo = e.pbo),
            (this.byteLength = e.byteLength),
            (this.bytesPerElement = e.BYTES_PER_ELEMENT),
            (this.version = e.version),
            (this.isInteger = e.isInteger),
            (this.activeBufferIndex = 0),
            (this.baseId = e.id);
        }
        get id() {
          return `${this.baseId}|${this.activeBufferIndex}`;
        }
        get bufferGPU() {
          return this.buffers[this.activeBufferIndex];
        }
        get transformBuffer() {
          return this.buffers[1 ^ this.activeBufferIndex];
        }
        switchBuffers() {
          this.activeBufferIndex ^= 1;
        }
      }
      class mZ {
        constructor(e) {
          this.backend = e;
        }
        createAttribute(e, t) {
          let r,
            i = this.backend,
            { gl: s } = i,
            n = e.array,
            a = e.usage || s.STATIC_DRAW,
            o = e.isInterleavedBufferAttribute ? e.data : e,
            l = i.get(o),
            d = l.bufferGPU;
          if (
            (void 0 === d &&
              ((l.bufferGPU = d = this._createBuffer(s, t, n, a)),
              (l.bufferType = t),
              (l.version = o.version)),
            n instanceof Float32Array)
          )
            r = s.FLOAT;
          else if (
            "undefined" != typeof Float16Array &&
            n instanceof Float16Array
          )
            r = s.HALF_FLOAT;
          else if (n instanceof Uint16Array)
            r = e.isFloat16BufferAttribute ? s.HALF_FLOAT : s.UNSIGNED_SHORT;
          else if (n instanceof Int16Array) r = s.SHORT;
          else if (n instanceof Uint32Array) r = s.UNSIGNED_INT;
          else if (n instanceof Int32Array) r = s.INT;
          else if (n instanceof Int8Array) r = s.BYTE;
          else if (n instanceof Uint8Array) r = s.UNSIGNED_BYTE;
          else if (n instanceof Uint8ClampedArray) r = s.UNSIGNED_BYTE;
          else
            throw Error(
              "THREE.WebGLBackend: Unsupported buffer data format: " + n
            );
          let h = {
            bufferGPU: d,
            bufferType: t,
            type: r,
            byteLength: n.byteLength,
            bytesPerElement: n.BYTES_PER_ELEMENT,
            version: e.version,
            pbo: e.pbo,
            isInteger:
              r === s.INT || r === s.UNSIGNED_INT || e.gpuType === u.Yuy,
            id: mQ++,
          };
          (e.isStorageBufferAttribute || e.isStorageInstancedBufferAttribute) &&
            (h = new mY(h, this._createBuffer(s, t, n, a))),
            i.set(e, h);
        }
        updateAttribute(e) {
          let t = this.backend,
            { gl: r } = t,
            i = e.array,
            s = e.isInterleavedBufferAttribute ? e.data : e,
            n = t.get(s),
            a = n.bufferType,
            o = e.isInterleavedBufferAttribute
              ? e.data.updateRanges
              : e.updateRanges;
          if ((r.bindBuffer(a, n.bufferGPU), 0 === o.length))
            r.bufferSubData(a, 0, i);
          else {
            for (let e = 0, t = o.length; e < t; e++) {
              let t = o[e];
              r.bufferSubData(
                a,
                t.start * i.BYTES_PER_ELEMENT,
                i,
                t.start,
                t.count
              );
            }
            s.clearUpdateRanges();
          }
          r.bindBuffer(a, null), (n.version = s.version);
        }
        destroyAttribute(e) {
          let t = this.backend,
            { gl: r } = t;
          e.isInterleavedBufferAttribute && t.delete(e.data);
          let i = t.get(e);
          r.deleteBuffer(i.bufferGPU), t.delete(e);
        }
        async getArrayBufferAsync(e) {
          let t = this.backend,
            { gl: r } = t,
            i = e.isInterleavedBufferAttribute ? e.data : e,
            { bufferGPU: s } = t.get(i),
            n = e.array,
            a = n.byteLength;
          r.bindBuffer(r.COPY_READ_BUFFER, s);
          let o = r.createBuffer();
          r.bindBuffer(r.COPY_WRITE_BUFFER, o),
            r.bufferData(r.COPY_WRITE_BUFFER, a, r.STREAM_READ),
            r.copyBufferSubData(
              r.COPY_READ_BUFFER,
              r.COPY_WRITE_BUFFER,
              0,
              0,
              a
            ),
            await t.utils._clientWaitAsync();
          let l = new e.array.constructor(n.length);
          return (
            r.bindBuffer(r.COPY_WRITE_BUFFER, o),
            r.getBufferSubData(r.COPY_WRITE_BUFFER, 0, l),
            r.deleteBuffer(o),
            r.bindBuffer(r.COPY_READ_BUFFER, null),
            r.bindBuffer(r.COPY_WRITE_BUFFER, null),
            l.buffer
          );
        }
        _createBuffer(e, t, r, i) {
          let s = e.createBuffer();
          return (
            e.bindBuffer(t, s), e.bufferData(t, r, i), e.bindBuffer(t, null), s
          );
        }
      }
      class mJ {
        constructor(e) {
          (this.backend = e),
            (this.gl = this.backend.gl),
            (this.enabled = {}),
            (this.currentFlipSided = null),
            (this.currentCullFace = null),
            (this.currentProgram = null),
            (this.currentBlendingEnabled = !1),
            (this.currentBlending = null),
            (this.currentBlendSrc = null),
            (this.currentBlendDst = null),
            (this.currentBlendSrcAlpha = null),
            (this.currentBlendDstAlpha = null),
            (this.currentPremultipledAlpha = null),
            (this.currentPolygonOffsetFactor = null),
            (this.currentPolygonOffsetUnits = null),
            (this.currentColorMask = null),
            (this.currentDepthFunc = null),
            (this.currentDepthMask = null),
            (this.currentStencilFunc = null),
            (this.currentStencilRef = null),
            (this.currentStencilFuncMask = null),
            (this.currentStencilFail = null),
            (this.currentStencilZFail = null),
            (this.currentStencilZPass = null),
            (this.currentStencilMask = null),
            (this.currentLineWidth = null),
            (this.currentClippingPlanes = 0),
            (this.currentVAO = null),
            (this.currentIndex = null),
            (this.currentBoundFramebuffers = {}),
            (this.currentDrawbuffers = new WeakMap()),
            (this.maxTextures = this.gl.getParameter(
              this.gl.MAX_TEXTURE_IMAGE_UNITS
            )),
            (this.currentTextureSlot = null),
            (this.currentBoundTextures = {}),
            (this.currentBoundBufferBases = {}),
            this._init();
        }
        _init() {
          let e = this.gl;
          (o = {
            [u.gO9]: e.FUNC_ADD,
            [u.FXf]: e.FUNC_SUBTRACT,
            [u.nST]: e.FUNC_REVERSE_SUBTRACT,
          }),
            (l = {
              [u.ojh]: e.ZERO,
              [u.qad]: e.ONE,
              [u.f4X]: e.SRC_COLOR,
              [u.ie2]: e.SRC_ALPHA,
              [u.hgQ]: e.SRC_ALPHA_SATURATE,
              [u.wn6]: e.DST_COLOR,
              [u.hdd]: e.DST_ALPHA,
              [u.LiQ]: e.ONE_MINUS_SRC_COLOR,
              [u.OuU]: e.ONE_MINUS_SRC_ALPHA,
              [u.aEY]: e.ONE_MINUS_DST_COLOR,
              [u.Nt7]: e.ONE_MINUS_DST_ALPHA,
            });
          let t = e.getParameter(e.SCISSOR_BOX),
            r = e.getParameter(e.VIEWPORT);
          (this.currentScissor = new u.IUQ().fromArray(t)),
            (this.currentViewport = new u.IUQ().fromArray(r)),
            (this._tempVec4 = new u.IUQ());
        }
        enable(e) {
          let { enabled: t } = this;
          !0 !== t[e] && (this.gl.enable(e), (t[e] = !0));
        }
        disable(e) {
          let { enabled: t } = this;
          !1 !== t[e] && (this.gl.disable(e), (t[e] = !1));
        }
        setFlipSided(e) {
          if (this.currentFlipSided !== e) {
            let { gl: t } = this;
            e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
              (this.currentFlipSided = e);
          }
        }
        setCullFace(e) {
          let { gl: t } = this;
          e !== u.WNZ
            ? (this.enable(t.CULL_FACE),
              e !== this.currentCullFace &&
                (e === u.Vb5
                  ? t.cullFace(t.BACK)
                  : e === u.Jnc
                  ? t.cullFace(t.FRONT)
                  : t.cullFace(t.FRONT_AND_BACK)))
            : this.disable(t.CULL_FACE),
            (this.currentCullFace = e);
        }
        setLineWidth(e) {
          let { currentLineWidth: t, gl: r } = this;
          e !== t && (r.lineWidth(e), (this.currentLineWidth = e));
        }
        setBlending(e, t, r, i, s, n, a, d) {
          let { gl: h } = this;
          if (e === u.XIg) {
            !0 === this.currentBlendingEnabled &&
              (this.disable(h.BLEND), (this.currentBlendingEnabled = !1));
            return;
          }
          if (
            (!1 === this.currentBlendingEnabled &&
              (this.enable(h.BLEND), (this.currentBlendingEnabled = !0)),
            e !== u.bCz)
          ) {
            if (
              e !== this.currentBlending ||
              d !== this.currentPremultipledAlpha
            ) {
              if (
                ((this.currentBlendEquation !== u.gO9 ||
                  this.currentBlendEquationAlpha !== u.gO9) &&
                  (h.blendEquation(h.FUNC_ADD),
                  (this.currentBlendEquation = u.gO9),
                  (this.currentBlendEquationAlpha = u.gO9)),
                d)
              )
                switch (e) {
                  case u.NTi:
                    h.blendFuncSeparate(
                      h.ONE,
                      h.ONE_MINUS_SRC_ALPHA,
                      h.ONE,
                      h.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case u.EZo:
                    h.blendFunc(h.ONE, h.ONE);
                    break;
                  case u.Kwu:
                    h.blendFuncSeparate(
                      h.ZERO,
                      h.ONE_MINUS_SRC_COLOR,
                      h.ZERO,
                      h.ONE
                    );
                    break;
                  case u.EdD:
                    h.blendFuncSeparate(
                      h.DST_COLOR,
                      h.ONE_MINUS_SRC_ALPHA,
                      h.ZERO,
                      h.ONE
                    );
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              else
                switch (e) {
                  case u.NTi:
                    h.blendFuncSeparate(
                      h.SRC_ALPHA,
                      h.ONE_MINUS_SRC_ALPHA,
                      h.ONE,
                      h.ONE_MINUS_SRC_ALPHA
                    );
                    break;
                  case u.EZo:
                    h.blendFuncSeparate(h.SRC_ALPHA, h.ONE, h.ONE, h.ONE);
                    break;
                  case u.Kwu:
                    console.error(
                      "THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true"
                    );
                    break;
                  case u.EdD:
                    console.error(
                      "THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true"
                    );
                    break;
                  default:
                    console.error("THREE.WebGLState: Invalid blending: ", e);
                }
              (this.currentBlendSrc = null),
                (this.currentBlendDst = null),
                (this.currentBlendSrcAlpha = null),
                (this.currentBlendDstAlpha = null),
                (this.currentBlending = e),
                (this.currentPremultipledAlpha = d);
            }
            return;
          }
          (s = s || t),
            (n = n || r),
            (a = a || i),
            (t !== this.currentBlendEquation ||
              s !== this.currentBlendEquationAlpha) &&
              (h.blendEquationSeparate(o[t], o[s]),
              (this.currentBlendEquation = t),
              (this.currentBlendEquationAlpha = s)),
            (r !== this.currentBlendSrc ||
              i !== this.currentBlendDst ||
              n !== this.currentBlendSrcAlpha ||
              a !== this.currentBlendDstAlpha) &&
              (h.blendFuncSeparate(l[r], l[i], l[n], l[a]),
              (this.currentBlendSrc = r),
              (this.currentBlendDst = i),
              (this.currentBlendSrcAlpha = n),
              (this.currentBlendDstAlpha = a)),
            (this.currentBlending = e),
            (this.currentPremultipledAlpha = !1);
        }
        setColorMask(e) {
          this.currentColorMask !== e &&
            (this.gl.colorMask(e, e, e, e), (this.currentColorMask = e));
        }
        setDepthTest(e) {
          let { gl: t } = this;
          e ? this.enable(t.DEPTH_TEST) : this.disable(t.DEPTH_TEST);
        }
        setDepthMask(e) {
          this.currentDepthMask !== e &&
            (this.gl.depthMask(e), (this.currentDepthMask = e));
        }
        setDepthFunc(e) {
          if (this.currentDepthFunc !== e) {
            let { gl: t } = this;
            switch (e) {
              case u.eHc:
                t.depthFunc(t.NEVER);
                break;
              case u.lGu:
                t.depthFunc(t.ALWAYS);
                break;
              case u.brA:
                t.depthFunc(t.LESS);
                break;
              case u.xSv:
                t.depthFunc(t.LEQUAL);
                break;
              case u.U3G:
                t.depthFunc(t.EQUAL);
                break;
              case u.Gwm:
                t.depthFunc(t.GEQUAL);
                break;
              case u.K52:
                t.depthFunc(t.GREATER);
                break;
              case u.bw0:
                t.depthFunc(t.NOTEQUAL);
                break;
              default:
                t.depthFunc(t.LEQUAL);
            }
            this.currentDepthFunc = e;
          }
        }
        scissor(e, t, r, i) {
          let s = this._tempVec4.set(e, t, r, i);
          if (!1 === this.currentScissor.equals(s)) {
            let { gl: e } = this;
            e.scissor(s.x, s.y, s.z, s.w), this.currentScissor.copy(s);
          }
        }
        viewport(e, t, r, i) {
          let s = this._tempVec4.set(e, t, r, i);
          if (!1 === this.currentViewport.equals(s)) {
            let { gl: e } = this;
            e.viewport(s.x, s.y, s.z, s.w), this.currentViewport.copy(s);
          }
        }
        setScissorTest(e) {
          let t = this.gl;
          e ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST);
        }
        setStencilTest(e) {
          let { gl: t } = this;
          e ? this.enable(t.STENCIL_TEST) : this.disable(t.STENCIL_TEST);
        }
        setStencilMask(e) {
          this.currentStencilMask !== e &&
            (this.gl.stencilMask(e), (this.currentStencilMask = e));
        }
        setStencilFunc(e, t, r) {
          (this.currentStencilFunc !== e ||
            this.currentStencilRef !== t ||
            this.currentStencilFuncMask !== r) &&
            (this.gl.stencilFunc(e, t, r),
            (this.currentStencilFunc = e),
            (this.currentStencilRef = t),
            (this.currentStencilFuncMask = r));
        }
        setStencilOp(e, t, r) {
          (this.currentStencilFail !== e ||
            this.currentStencilZFail !== t ||
            this.currentStencilZPass !== r) &&
            (this.gl.stencilOp(e, t, r),
            (this.currentStencilFail = e),
            (this.currentStencilZFail = t),
            (this.currentStencilZPass = r));
        }
        setMaterial(e, t, r) {
          let { gl: i } = this;
          e.side === u.$EB
            ? this.disable(i.CULL_FACE)
            : this.enable(i.CULL_FACE);
          let s = e.side === u.hsX;
          t && (s = !s),
            this.setFlipSided(s),
            e.blending === u.NTi && !1 === e.transparent
              ? this.setBlending(u.XIg)
              : this.setBlending(
                  e.blending,
                  e.blendEquation,
                  e.blendSrc,
                  e.blendDst,
                  e.blendEquationAlpha,
                  e.blendSrcAlpha,
                  e.blendDstAlpha,
                  e.premultipliedAlpha
                ),
            this.setDepthFunc(e.depthFunc),
            this.setDepthTest(e.depthTest),
            this.setDepthMask(e.depthWrite),
            this.setColorMask(e.colorWrite);
          let n = e.stencilWrite;
          if (
            (this.setStencilTest(n),
            n &&
              (this.setStencilMask(e.stencilWriteMask),
              this.setStencilFunc(
                e.stencilFunc,
                e.stencilRef,
                e.stencilFuncMask
              ),
              this.setStencilOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
            this.setPolygonOffset(
              e.polygonOffset,
              e.polygonOffsetFactor,
              e.polygonOffsetUnits
            ),
            !0 === e.alphaToCoverage && this.backend.renderer.samples > 1
              ? this.enable(i.SAMPLE_ALPHA_TO_COVERAGE)
              : this.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
            r > 0 && this.currentClippingPlanes !== r)
          )
            for (let e = 0; e < 8; e++)
              e < r ? this.enable(12288 + e) : this.disable(12288 + e);
        }
        setPolygonOffset(e, t, r) {
          let { gl: i } = this;
          e
            ? (this.enable(i.POLYGON_OFFSET_FILL),
              (this.currentPolygonOffsetFactor !== t ||
                this.currentPolygonOffsetUnits !== r) &&
                (i.polygonOffset(t, r),
                (this.currentPolygonOffsetFactor = t),
                (this.currentPolygonOffsetUnits = r)))
            : this.disable(i.POLYGON_OFFSET_FILL);
        }
        useProgram(e) {
          return (
            this.currentProgram !== e &&
            (this.gl.useProgram(e), (this.currentProgram = e), !0)
          );
        }
        setVertexState(e, t = null) {
          let r = this.gl;
          return (
            (this.currentVAO !== e || this.currentIndex !== t) &&
            (r.bindVertexArray(e),
            null !== t && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t),
            (this.currentVAO = e),
            (this.currentIndex = t),
            !0)
          );
        }
        resetVertexState() {
          let e = this.gl;
          e.bindVertexArray(null),
            e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null),
            (this.currentVAO = null),
            (this.currentIndex = null);
        }
        bindFramebuffer(e, t) {
          let { gl: r, currentBoundFramebuffers: i } = this;
          return (
            i[e] !== t &&
            (r.bindFramebuffer(e, t),
            (i[e] = t),
            e === r.DRAW_FRAMEBUFFER && (i[r.FRAMEBUFFER] = t),
            e === r.FRAMEBUFFER && (i[r.DRAW_FRAMEBUFFER] = t),
            !0)
          );
        }
        drawBuffers(e, t) {
          let { gl: r } = this,
            i = [],
            s = !1;
          if (null !== e.textures) {
            void 0 === (i = this.currentDrawbuffers.get(t)) &&
              ((i = []), this.currentDrawbuffers.set(t, i));
            let n = e.textures;
            if (i.length !== n.length || i[0] !== r.COLOR_ATTACHMENT0) {
              for (let e = 0, t = n.length; e < t; e++)
                i[e] = r.COLOR_ATTACHMENT0 + e;
              (i.length = n.length), (s = !0);
            }
          } else i[0] !== r.BACK && ((i[0] = r.BACK), (s = !0));
          s && r.drawBuffers(i);
        }
        activeTexture(e) {
          let { gl: t, currentTextureSlot: r, maxTextures: i } = this;
          void 0 === e && (e = t.TEXTURE0 + i - 1),
            r !== e && (t.activeTexture(e), (this.currentTextureSlot = e));
        }
        bindTexture(e, t, r) {
          let {
            gl: i,
            currentTextureSlot: s,
            currentBoundTextures: n,
            maxTextures: a,
          } = this;
          void 0 === r && (r = null === s ? i.TEXTURE0 + a - 1 : s);
          let o = n[r];
          void 0 === o && ((o = { type: void 0, texture: void 0 }), (n[r] = o)),
            (o.type !== e || o.texture !== t) &&
              (s !== r && (i.activeTexture(r), (this.currentTextureSlot = r)),
              i.bindTexture(e, t),
              (o.type = e),
              (o.texture = t));
        }
        bindBufferBase(e, t, r) {
          let { gl: i } = this,
            s = `${e}-${t}`;
          return (
            this.currentBoundBufferBases[s] !== r &&
            (i.bindBufferBase(e, t, r),
            (this.currentBoundBufferBases[s] = r),
            !0)
          );
        }
        unbindTexture() {
          let { gl: e, currentTextureSlot: t, currentBoundTextures: r } = this,
            i = r[t];
          void 0 !== i &&
            void 0 !== i.type &&
            (e.bindTexture(i.type, null),
            (i.type = void 0),
            (i.texture = void 0));
        }
      }
      class m0 {
        constructor(e) {
          (this.backend = e),
            (this.gl = this.backend.gl),
            (this.extensions = e.extensions);
        }
        convert(e, t = u.jf0) {
          let r,
            { gl: i, extensions: s } = this,
            n = u.ppV.getTransfer(t);
          if (e === u.OUM) return i.UNSIGNED_BYTE;
          if (e === u.Wew) return i.UNSIGNED_SHORT_4_4_4_4;
          if (e === u.gJ2) return i.UNSIGNED_SHORT_5_5_5_1;
          if (e === u.Dmk) return i.UNSIGNED_INT_5_9_9_9_REV;
          if (e === u.tJf) return i.BYTE;
          if (e === u.fBL) return i.SHORT;
          if (e === u.cHt) return i.UNSIGNED_SHORT;
          if (e === u.Yuy) return i.INT;
          if (e === u.bkx) return i.UNSIGNED_INT;
          if (e === u.RQf) return i.FLOAT;
          if (e === u.ix0) return i.HALF_FLOAT;
          if (e === u.wrO) return i.ALPHA;
          if (e === u.HIg) return i.RGB;
          if (e === u.GWd) return i.RGBA;
          if (e === u.zdS) return i.DEPTH_COMPONENT;
          if (e === u.dcC) return i.DEPTH_STENCIL;
          if (e === u.VT0) return i.RED;
          if (e === u.ZQM) return i.RED_INTEGER;
          if (e === u.paN) return i.RG;
          if (e === u.TkQ) return i.RG_INTEGER;
          if (e === u.c90) return i.RGBA_INTEGER;
          if (e === u.IE4 || e === u.Nz6 || e === u.jR7 || e === u.BXX)
            if (n === u.KLL) {
              if (null === (r = s.get("WEBGL_compressed_texture_s3tc_srgb")))
                return null;
              if (e === u.IE4) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
              if (e === u.Nz6) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
              if (e === u.jR7) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
              if (e === u.BXX) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            } else {
              if (null === (r = s.get("WEBGL_compressed_texture_s3tc")))
                return null;
              if (e === u.IE4) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
              if (e === u.Nz6) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
              if (e === u.jR7) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              if (e === u.BXX) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            }
          if (e === u.k6Q || e === u.kTp || e === u.HXV || e === u.pBf) {
            if (null === (r = s.get("WEBGL_compressed_texture_pvrtc")))
              return null;
            if (e === u.k6Q) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === u.kTp) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === u.HXV) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === u.pBf) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          }
          if (e === u.CVz || e === u.Riy || e === u.KDk) {
            if (null === (r = s.get("WEBGL_compressed_texture_etc")))
              return null;
            if (e === u.CVz || e === u.Riy)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ETC2
                : r.COMPRESSED_RGB8_ETC2;
            if (e === u.KDk)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
                : r.COMPRESSED_RGBA8_ETC2_EAC;
          }
          if (
            e === u.qa3 ||
            e === u.B_h ||
            e === u.czI ||
            e === u.rSH ||
            e === u.Qrf ||
            e === u.psI ||
            e === u.a5J ||
            e === u._QJ ||
            e === u.uB5 ||
            e === u.lyL ||
            e === u.bC7 ||
            e === u.y3Z ||
            e === u.ojs ||
            e === u.S$4
          ) {
            if (null === (r = s.get("WEBGL_compressed_texture_astc")))
              return null;
            if (e === u.qa3)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
                : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
            if (e === u.B_h)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
                : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
            if (e === u.czI)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
                : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
            if (e === u.rSH)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
                : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
            if (e === u.Qrf)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
                : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
            if (e === u.psI)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
                : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
            if (e === u.a5J)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
                : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
            if (e === u._QJ)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
                : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
            if (e === u.uB5)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
                : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
            if (e === u.lyL)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
                : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
            if (e === u.bC7)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
                : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
            if (e === u.y3Z)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
                : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
            if (e === u.ojs)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
                : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
            if (e === u.S$4)
              return n === u.KLL
                ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
                : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
          }
          if (e === u.Fn) {
            if (null === (r = s.get("EXT_texture_compression_bptc")))
              return null;
            if (e === u.Fn)
              return n === u.KLL
                ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
                : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
          }
          if (e === u.Kef || e === u.XG_ || e === u.HO_ || e === u.CWW) {
            if (null === (r = s.get("EXT_texture_compression_rgtc")))
              return null;
            if (e === u.Fn) return r.COMPRESSED_RED_RGTC1_EXT;
            if (e === u.XG_) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
            if (e === u.HO_) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
            if (e === u.CWW) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
          }
          return e === u.V3x
            ? i.UNSIGNED_INT_24_8
            : void 0 !== i[e]
            ? i[e]
            : null;
        }
        _clientWaitAsync() {
          let { gl: e } = this,
            t = e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return (
            e.flush(),
            new Promise((r, i) => {
              !(function s() {
                let n = e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0);
                if (n === e.WAIT_FAILED) {
                  e.deleteSync(t), i();
                  return;
                }
                if (n === e.TIMEOUT_EXPIRED)
                  return void requestAnimationFrame(s);
                e.deleteSync(t), r();
              })();
            })
          );
        }
      }
      let m1 = !1,
        m2,
        m3,
        m4;
      class m6 {
        constructor(e) {
          (this.backend = e),
            (this.gl = e.gl),
            (this.extensions = e.extensions),
            (this.defaultTextures = {}),
            !1 === m1 && (this._init(), (m1 = !0));
        }
        _init() {
          let e = this.gl;
          (m2 = {
            [u.GJx]: e.REPEAT,
            [u.ghU]: e.CLAMP_TO_EDGE,
            [u.kTW]: e.MIRRORED_REPEAT,
          }),
            (m3 = {
              [u.hxR]: e.NEAREST,
              [u.pHI]: e.NEAREST_MIPMAP_NEAREST,
              [u.Cfg]: e.NEAREST_MIPMAP_LINEAR,
              [u.k6q]: e.LINEAR,
              [u.kRr]: e.LINEAR_MIPMAP_NEAREST,
              [u.$_I]: e.LINEAR_MIPMAP_LINEAR,
            }),
            (m4 = {
              [u.amv]: e.NEVER,
              [u.FFZ]: e.ALWAYS,
              [u.vim]: e.LESS,
              [u.TiK]: e.LEQUAL,
              [u.kO0]: e.EQUAL,
              [u.gWB]: e.GEQUAL,
              [u.eoi]: e.GREATER,
              [u.jzd]: e.NOTEQUAL,
            });
        }
        getGLTextureType(e) {
          let { gl: t } = this;
          return !0 === e.isCubeTexture
            ? t.TEXTURE_CUBE_MAP
            : !0 === e.isArrayTexture ||
              !0 === e.isDataArrayTexture ||
              !0 === e.isCompressedArrayTexture
            ? t.TEXTURE_2D_ARRAY
            : !0 === e.isData3DTexture
            ? t.TEXTURE_3D
            : t.TEXTURE_2D;
        }
        getInternalFormat(e, t, r, i, s = !1) {
          let { gl: n, extensions: a } = this;
          if (null !== e) {
            if (void 0 !== n[e]) return n[e];
            console.warn(
              "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
                e +
                "'"
            );
          }
          let o = t;
          if (
            (t === n.RED &&
              (r === n.FLOAT && (o = n.R32F),
              r === n.HALF_FLOAT && (o = n.R16F),
              r === n.UNSIGNED_BYTE && (o = n.R8),
              r === n.UNSIGNED_SHORT && (o = n.R16),
              r === n.UNSIGNED_INT && (o = n.R32UI),
              r === n.BYTE && (o = n.R8I),
              r === n.SHORT && (o = n.R16I),
              r === n.INT && (o = n.R32I)),
            t === n.RED_INTEGER &&
              (r === n.UNSIGNED_BYTE && (o = n.R8UI),
              r === n.UNSIGNED_SHORT && (o = n.R16UI),
              r === n.UNSIGNED_INT && (o = n.R32UI),
              r === n.BYTE && (o = n.R8I),
              r === n.SHORT && (o = n.R16I),
              r === n.INT && (o = n.R32I)),
            t === n.RG &&
              (r === n.FLOAT && (o = n.RG32F),
              r === n.HALF_FLOAT && (o = n.RG16F),
              r === n.UNSIGNED_BYTE && (o = n.RG8),
              r === n.UNSIGNED_SHORT && (o = n.RG16),
              r === n.UNSIGNED_INT && (o = n.RG32UI),
              r === n.BYTE && (o = n.RG8I),
              r === n.SHORT && (o = n.RG16I),
              r === n.INT && (o = n.RG32I)),
            t === n.RG_INTEGER &&
              (r === n.UNSIGNED_BYTE && (o = n.RG8UI),
              r === n.UNSIGNED_SHORT && (o = n.RG16UI),
              r === n.UNSIGNED_INT && (o = n.RG32UI),
              r === n.BYTE && (o = n.RG8I),
              r === n.SHORT && (o = n.RG16I),
              r === n.INT && (o = n.RG32I)),
            t === n.RGB)
          ) {
            let e = s ? u.VxR : u.ppV.getTransfer(i);
            r === n.FLOAT && (o = n.RGB32F),
              r === n.HALF_FLOAT && (o = n.RGB16F),
              r === n.UNSIGNED_BYTE && (o = n.RGB8),
              r === n.UNSIGNED_SHORT && (o = n.RGB16),
              r === n.UNSIGNED_INT && (o = n.RGB32UI),
              r === n.BYTE && (o = n.RGB8I),
              r === n.SHORT && (o = n.RGB16I),
              r === n.INT && (o = n.RGB32I),
              r === n.UNSIGNED_BYTE && (o = e === u.KLL ? n.SRGB8 : n.RGB8),
              r === n.UNSIGNED_SHORT_5_6_5 && (o = n.RGB565),
              r === n.UNSIGNED_SHORT_5_5_5_1 && (o = n.RGB5_A1),
              r === n.UNSIGNED_SHORT_4_4_4_4 && (o = n.RGB4),
              r === n.UNSIGNED_INT_5_9_9_9_REV && (o = n.RGB9_E5);
          }
          if (
            (t === n.RGB_INTEGER &&
              (r === n.UNSIGNED_BYTE && (o = n.RGB8UI),
              r === n.UNSIGNED_SHORT && (o = n.RGB16UI),
              r === n.UNSIGNED_INT && (o = n.RGB32UI),
              r === n.BYTE && (o = n.RGB8I),
              r === n.SHORT && (o = n.RGB16I),
              r === n.INT && (o = n.RGB32I)),
            t === n.RGBA)
          ) {
            let e = s ? u.VxR : u.ppV.getTransfer(i);
            r === n.FLOAT && (o = n.RGBA32F),
              r === n.HALF_FLOAT && (o = n.RGBA16F),
              r === n.UNSIGNED_BYTE && (o = n.RGBA8),
              r === n.UNSIGNED_SHORT && (o = n.RGBA16),
              r === n.UNSIGNED_INT && (o = n.RGBA32UI),
              r === n.BYTE && (o = n.RGBA8I),
              r === n.SHORT && (o = n.RGBA16I),
              r === n.INT && (o = n.RGBA32I),
              r === n.UNSIGNED_BYTE &&
                (o = e === u.KLL ? n.SRGB8_ALPHA8 : n.RGBA8),
              r === n.UNSIGNED_SHORT_4_4_4_4 && (o = n.RGBA4),
              r === n.UNSIGNED_SHORT_5_5_5_1 && (o = n.RGB5_A1);
          }
          return (
            t === n.RGBA_INTEGER &&
              (r === n.UNSIGNED_BYTE && (o = n.RGBA8UI),
              r === n.UNSIGNED_SHORT && (o = n.RGBA16UI),
              r === n.UNSIGNED_INT && (o = n.RGBA32UI),
              r === n.BYTE && (o = n.RGBA8I),
              r === n.SHORT && (o = n.RGBA16I),
              r === n.INT && (o = n.RGBA32I)),
            t === n.DEPTH_COMPONENT &&
              (r === n.UNSIGNED_SHORT && (o = n.DEPTH_COMPONENT16),
              r === n.UNSIGNED_INT && (o = n.DEPTH_COMPONENT24),
              r === n.FLOAT && (o = n.DEPTH_COMPONENT32F)),
            t === n.DEPTH_STENCIL &&
              r === n.UNSIGNED_INT_24_8 &&
              (o = n.DEPTH24_STENCIL8),
            (o === n.R16F ||
              o === n.R32F ||
              o === n.RG16F ||
              o === n.RG32F ||
              o === n.RGBA16F ||
              o === n.RGBA32F) &&
              a.get("EXT_color_buffer_float"),
            o
          );
        }
        setTextureParameters(e, t) {
          let { gl: r, extensions: i, backend: s } = this,
            n = u.ppV.getPrimaries(u.ppV.workingColorSpace),
            a =
              t.colorSpace === u.jf0 ? null : u.ppV.getPrimaries(t.colorSpace),
            o =
              t.colorSpace === u.jf0 || n === a
                ? r.NONE
                : r.BROWSER_DEFAULT_WEBGL;
          r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, t.flipY),
            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
            r.pixelStorei(r.UNPACK_ALIGNMENT, t.unpackAlignment),
            r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, o),
            r.texParameteri(e, r.TEXTURE_WRAP_S, m2[t.wrapS]),
            r.texParameteri(e, r.TEXTURE_WRAP_T, m2[t.wrapT]),
            (e !== r.TEXTURE_3D && e !== r.TEXTURE_2D_ARRAY) ||
              t.isArrayTexture ||
              r.texParameteri(e, r.TEXTURE_WRAP_R, m2[t.wrapR]),
            r.texParameteri(e, r.TEXTURE_MAG_FILTER, m3[t.magFilter]);
          let l = void 0 !== t.mipmaps && t.mipmaps.length > 0,
            d = t.minFilter === u.k6q && l ? u.$_I : t.minFilter;
          if (
            (r.texParameteri(e, r.TEXTURE_MIN_FILTER, m3[d]),
            t.compareFunction &&
              (r.texParameteri(
                e,
                r.TEXTURE_COMPARE_MODE,
                r.COMPARE_REF_TO_TEXTURE
              ),
              r.texParameteri(
                e,
                r.TEXTURE_COMPARE_FUNC,
                m4[t.compareFunction]
              )),
            !0 === i.has("EXT_texture_filter_anisotropic"))
          ) {
            if (
              t.magFilter === u.hxR ||
              (t.minFilter !== u.Cfg && t.minFilter !== u.$_I) ||
              (t.type === u.RQf && !1 === i.has("OES_texture_float_linear"))
            )
              return;
            if (t.anisotropy > 1) {
              let n = i.get("EXT_texture_filter_anisotropic");
              r.texParameterf(
                e,
                n.TEXTURE_MAX_ANISOTROPY_EXT,
                Math.min(t.anisotropy, s.getMaxAnisotropy())
              );
            }
          }
        }
        createDefaultTexture(e) {
          let { gl: t, backend: r, defaultTextures: i } = this,
            s = this.getGLTextureType(e),
            n = i[s];
          void 0 === n &&
            ((n = t.createTexture()),
            r.state.bindTexture(s, n),
            t.texParameteri(s, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(s, t.TEXTURE_MAG_FILTER, t.NEAREST),
            (i[s] = n)),
            r.set(e, { textureGPU: n, glTextureType: s, isDefault: !0 });
        }
        createTexture(e, t) {
          let { gl: r, backend: i } = this,
            { levels: s, width: n, height: a, depth: o } = t,
            l = i.utils.convert(e.format, e.colorSpace),
            u = i.utils.convert(e.type),
            d = this.getInternalFormat(
              e.internalFormat,
              l,
              u,
              e.colorSpace,
              e.isVideoTexture
            ),
            h = r.createTexture(),
            c = this.getGLTextureType(e);
          i.state.bindTexture(c, h),
            this.setTextureParameters(c, e),
            e.isArrayTexture ||
            e.isDataArrayTexture ||
            e.isCompressedArrayTexture
              ? r.texStorage3D(r.TEXTURE_2D_ARRAY, s, d, n, a, o)
              : e.isData3DTexture
              ? r.texStorage3D(r.TEXTURE_3D, s, d, n, a, o)
              : e.isVideoTexture || r.texStorage2D(c, s, d, n, a),
            i.set(e, {
              textureGPU: h,
              glTextureType: c,
              glFormat: l,
              glType: u,
              glInternalFormat: d,
            });
        }
        copyBufferToTexture(e, t) {
          let { gl: r, backend: i } = this,
            {
              textureGPU: s,
              glTextureType: n,
              glFormat: a,
              glType: o,
            } = i.get(t),
            { width: l, height: u } = t.source.data;
          r.bindBuffer(r.PIXEL_UNPACK_BUFFER, e),
            i.state.bindTexture(n, s),
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !1),
            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
            r.texSubImage2D(n, 0, 0, 0, l, u, a, o, 0),
            r.bindBuffer(r.PIXEL_UNPACK_BUFFER, null),
            i.state.unbindTexture();
        }
        updateTexture(e, t) {
          let { gl: r } = this,
            { width: i, height: s } = t,
            {
              textureGPU: n,
              glTextureType: a,
              glFormat: o,
              glType: l,
              glInternalFormat: u,
            } = this.backend.get(e);
          if (!e.isRenderTargetTexture && void 0 !== n)
            if (
              (this.backend.state.bindTexture(a, n),
              this.setTextureParameters(a, e),
              e.isCompressedTexture)
            ) {
              let i = e.mipmaps,
                s = t.image;
              for (let t = 0; t < i.length; t++) {
                let n = i[t];
                e.isCompressedArrayTexture
                  ? e.format !== r.RGBA
                    ? null !== o
                      ? r.compressedTexSubImage3D(
                          r.TEXTURE_2D_ARRAY,
                          t,
                          0,
                          0,
                          0,
                          n.width,
                          n.height,
                          s.depth,
                          o,
                          n.data
                        )
                      : console.warn(
                          "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                        )
                    : r.texSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        t,
                        0,
                        0,
                        0,
                        n.width,
                        n.height,
                        s.depth,
                        o,
                        l,
                        n.data
                      )
                  : null !== o
                  ? r.compressedTexSubImage2D(
                      r.TEXTURE_2D,
                      t,
                      0,
                      0,
                      n.width,
                      n.height,
                      o,
                      n.data
                    )
                  : console.warn("Unsupported compressed texture format");
              }
            } else if (e.isCubeTexture) {
              let e = t.images;
              for (let t = 0; t < 6; t++) {
                let n = m8(e[t]);
                r.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  0,
                  0,
                  0,
                  i,
                  s,
                  o,
                  l,
                  n
                );
              }
            } else if (e.isDataArrayTexture || e.isArrayTexture) {
              let e = t.image;
              r.texSubImage3D(
                r.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                e.width,
                e.height,
                e.depth,
                o,
                l,
                e.data
              );
            } else if (e.isData3DTexture) {
              let e = t.image;
              r.texSubImage3D(
                r.TEXTURE_3D,
                0,
                0,
                0,
                0,
                e.width,
                e.height,
                e.depth,
                o,
                l,
                e.data
              );
            } else if (e.isVideoTexture)
              e.update(), r.texImage2D(a, 0, u, o, l, t.image);
            else {
              let e = m8(t.image);
              r.texSubImage2D(a, 0, 0, 0, i, s, o, l, e);
            }
        }
        generateMipmaps(e) {
          let { gl: t, backend: r } = this,
            { textureGPU: i, glTextureType: s } = r.get(e);
          r.state.bindTexture(s, i), t.generateMipmap(s);
        }
        deallocateRenderBuffers(e) {
          let { gl: t, backend: r } = this;
          if (e) {
            let i = r.get(e);
            if (((i.renderBufferStorageSetup = void 0), i.framebuffers)) {
              for (let e in i.framebuffers)
                t.deleteFramebuffer(i.framebuffers[e]);
              delete i.framebuffers;
            }
            if (
              (i.depthRenderbuffer &&
                (t.deleteRenderbuffer(i.depthRenderbuffer),
                delete i.depthRenderbuffer),
              i.stencilRenderbuffer &&
                (t.deleteRenderbuffer(i.stencilRenderbuffer),
                delete i.stencilRenderbuffer),
              i.msaaFrameBuffer &&
                (t.deleteFramebuffer(i.msaaFrameBuffer),
                delete i.msaaFrameBuffer),
              i.msaaRenderbuffers)
            ) {
              for (let e = 0; e < i.msaaRenderbuffers.length; e++)
                t.deleteRenderbuffer(i.msaaRenderbuffers[e]);
              delete i.msaaRenderbuffers;
            }
          }
        }
        destroyTexture(e) {
          let { gl: t, backend: r } = this,
            { textureGPU: i, renderTarget: s } = r.get(e);
          this.deallocateRenderBuffers(s), t.deleteTexture(i), r.delete(e);
        }
        copyTextureToTexture(e, t, r = null, i = null, s = 0, n = 0) {
          let a,
            o,
            l,
            u,
            d,
            h,
            c,
            p,
            g,
            { gl: m, backend: f } = this,
            { state: y } = this.backend,
            {
              textureGPU: b,
              glTextureType: x,
              glType: T,
              glFormat: _,
            } = f.get(t);
          y.bindTexture(x, b);
          let v = e.isCompressedTexture ? e.mipmaps[n] : e.image;
          if (null !== r)
            (a = r.max.x - r.min.x),
              (o = r.max.y - r.min.y),
              (l = r.isBox3 ? r.max.z - r.min.z : 1),
              (u = r.min.x),
              (d = r.min.y),
              (h = r.isBox3 ? r.min.z : 0);
          else {
            let t = Math.pow(2, -s);
            (a = Math.floor(v.width * t)),
              (o = Math.floor(v.height * t)),
              (l =
                e.isDataArrayTexture || e.isArrayTexture
                  ? v.depth
                  : e.isData3DTexture
                  ? Math.floor(v.depth * t)
                  : 1),
              (u = 0),
              (d = 0),
              (h = 0);
          }
          null !== i
            ? ((c = i.x), (p = i.y), (g = i.z))
            : ((c = 0), (p = 0), (g = 0)),
            m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, t.flipY),
            m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
            m.pixelStorei(m.UNPACK_ALIGNMENT, t.unpackAlignment);
          let N = m.getParameter(m.UNPACK_ROW_LENGTH),
            S = m.getParameter(m.UNPACK_IMAGE_HEIGHT),
            R = m.getParameter(m.UNPACK_SKIP_PIXELS),
            A = m.getParameter(m.UNPACK_SKIP_ROWS),
            E = m.getParameter(m.UNPACK_SKIP_IMAGES);
          m.pixelStorei(m.UNPACK_ROW_LENGTH, v.width),
            m.pixelStorei(m.UNPACK_IMAGE_HEIGHT, v.height),
            m.pixelStorei(m.UNPACK_SKIP_PIXELS, u),
            m.pixelStorei(m.UNPACK_SKIP_ROWS, d),
            m.pixelStorei(m.UNPACK_SKIP_IMAGES, h);
          let w = t.isDataArrayTexture || t.isData3DTexture || t.isArrayTexture;
          if (e.isRenderTargetTexture || e.isDepthTexture) {
            let r = f.get(e),
              i = f.get(t),
              s = f.get(r.renderTarget),
              n = f.get(i.renderTarget),
              l = s.framebuffers[r.cacheKey],
              h = n.framebuffers[i.cacheKey];
            y.bindFramebuffer(m.READ_FRAMEBUFFER, l),
              y.bindFramebuffer(m.DRAW_FRAMEBUFFER, h);
            let g = m.COLOR_BUFFER_BIT;
            e.isDepthTexture && (g = m.DEPTH_BUFFER_BIT),
              m.blitFramebuffer(u, d, a, o, c, p, a, o, g, m.NEAREST),
              y.bindFramebuffer(m.READ_FRAMEBUFFER, null),
              y.bindFramebuffer(m.DRAW_FRAMEBUFFER, null);
          } else
            w
              ? e.isDataTexture || e.isData3DTexture
                ? m.texSubImage3D(x, n, c, p, g, a, o, l, _, T, v.data)
                : t.isCompressedArrayTexture
                ? m.compressedTexSubImage3D(x, n, c, p, g, a, o, l, _, v.data)
                : m.texSubImage3D(x, n, c, p, g, a, o, l, _, T, v)
              : e.isDataTexture
              ? m.texSubImage2D(x, n, c, p, a, o, _, T, v.data)
              : e.isCompressedTexture
              ? m.compressedTexSubImage2D(
                  x,
                  n,
                  c,
                  p,
                  v.width,
                  v.height,
                  _,
                  v.data
                )
              : m.texSubImage2D(x, n, c, p, a, o, _, T, v);
          m.pixelStorei(m.UNPACK_ROW_LENGTH, N),
            m.pixelStorei(m.UNPACK_IMAGE_HEIGHT, S),
            m.pixelStorei(m.UNPACK_SKIP_PIXELS, R),
            m.pixelStorei(m.UNPACK_SKIP_ROWS, A),
            m.pixelStorei(m.UNPACK_SKIP_IMAGES, E),
            0 === n && t.generateMipmaps && m.generateMipmap(x),
            y.unbindTexture();
        }
        copyFramebufferToTexture(e, t, r) {
          let { gl: i } = this,
            { state: s } = this.backend,
            { textureGPU: n } = this.backend.get(e),
            { x: a, y: o, z: l, w: u } = r,
            d =
              !0 === e.isDepthTexture ||
              (t.renderTarget && t.renderTarget.samples > 0),
            h = t.renderTarget
              ? t.renderTarget.height
              : this.backend.getDrawingBufferSize().y;
          if (d) {
            let r,
              d,
              c = 0 !== a || 0 !== o;
            if (
              (!0 === e.isDepthTexture
                ? ((r = i.DEPTH_BUFFER_BIT),
                  (d = i.DEPTH_ATTACHMENT),
                  t.stencil && (r |= i.STENCIL_BUFFER_BIT))
                : ((r = i.COLOR_BUFFER_BIT), (d = i.COLOR_ATTACHMENT0)),
              c)
            ) {
              let e = this.backend.get(t.renderTarget),
                d = e.framebuffers[t.getCacheKey()],
                c = e.msaaFrameBuffer;
              s.bindFramebuffer(i.DRAW_FRAMEBUFFER, d),
                s.bindFramebuffer(i.READ_FRAMEBUFFER, c);
              let p = h - o - u;
              i.blitFramebuffer(
                a,
                p,
                a + l,
                p + u,
                a,
                p,
                a + l,
                p + u,
                r,
                i.NEAREST
              ),
                s.bindFramebuffer(i.READ_FRAMEBUFFER, d),
                s.bindTexture(i.TEXTURE_2D, n),
                i.copyTexSubImage2D(i.TEXTURE_2D, 0, 0, 0, a, p, l, u),
                s.unbindTexture();
            } else {
              let e = i.createFramebuffer();
              s.bindFramebuffer(i.DRAW_FRAMEBUFFER, e),
                i.framebufferTexture2D(
                  i.DRAW_FRAMEBUFFER,
                  d,
                  i.TEXTURE_2D,
                  n,
                  0
                ),
                i.blitFramebuffer(0, 0, l, u, 0, 0, l, u, r, i.NEAREST),
                i.deleteFramebuffer(e);
            }
          } else
            s.bindTexture(i.TEXTURE_2D, n),
              i.copyTexSubImage2D(i.TEXTURE_2D, 0, 0, 0, a, h - u - o, l, u),
              s.unbindTexture();
          e.generateMipmaps && this.generateMipmaps(e),
            this.backend._setFramebuffer(t);
        }
        setupRenderBufferStorage(e, t, r, i = !1) {
          let { gl: s } = this,
            n = t.renderTarget,
            {
              depthTexture: a,
              depthBuffer: o,
              stencilBuffer: l,
              width: u,
              height: d,
            } = n;
          if ((s.bindRenderbuffer(s.RENDERBUFFER, e), o && !l)) {
            let t = s.DEPTH_COMPONENT24;
            !0 === i
              ? this.extensions
                  .get("WEBGL_multisampled_render_to_texture")
                  .renderbufferStorageMultisampleEXT(
                    s.RENDERBUFFER,
                    n.samples,
                    t,
                    u,
                    d
                  )
              : r > 0
              ? (a &&
                  a.isDepthTexture &&
                  a.type === s.FLOAT &&
                  (t = s.DEPTH_COMPONENT32F),
                s.renderbufferStorageMultisample(s.RENDERBUFFER, r, t, u, d))
              : s.renderbufferStorage(s.RENDERBUFFER, t, u, d),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.DEPTH_ATTACHMENT,
                s.RENDERBUFFER,
                e
              );
          } else
            o &&
              l &&
              (r > 0
                ? s.renderbufferStorageMultisample(
                    s.RENDERBUFFER,
                    r,
                    s.DEPTH24_STENCIL8,
                    u,
                    d
                  )
                : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, u, d),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.DEPTH_STENCIL_ATTACHMENT,
                s.RENDERBUFFER,
                e
              ));
          s.bindRenderbuffer(s.RENDERBUFFER, null);
        }
        async copyTextureToBuffer(e, t, r, i, s, n) {
          let { backend: a, gl: o } = this,
            { textureGPU: l, glFormat: u, glType: d } = this.backend.get(e),
            h = o.createFramebuffer();
          o.bindFramebuffer(o.READ_FRAMEBUFFER, h);
          let c = e.isCubeTexture
            ? o.TEXTURE_CUBE_MAP_POSITIVE_X + n
            : o.TEXTURE_2D;
          o.framebufferTexture2D(
            o.READ_FRAMEBUFFER,
            o.COLOR_ATTACHMENT0,
            c,
            l,
            0
          );
          let p = this._getTypedArrayType(d),
            g = i * s * this._getBytesPerTexel(d, u),
            m = o.createBuffer();
          o.bindBuffer(o.PIXEL_PACK_BUFFER, m),
            o.bufferData(o.PIXEL_PACK_BUFFER, g, o.STREAM_READ),
            o.readPixels(t, r, i, s, u, d, 0),
            o.bindBuffer(o.PIXEL_PACK_BUFFER, null),
            await a.utils._clientWaitAsync();
          let f = new p(g / p.BYTES_PER_ELEMENT);
          return (
            o.bindBuffer(o.PIXEL_PACK_BUFFER, m),
            o.getBufferSubData(o.PIXEL_PACK_BUFFER, 0, f),
            o.bindBuffer(o.PIXEL_PACK_BUFFER, null),
            o.deleteFramebuffer(h),
            f
          );
        }
        _getTypedArrayType(e) {
          let { gl: t } = this;
          if (e === t.UNSIGNED_BYTE) return Uint8Array;
          if (
            e === t.UNSIGNED_SHORT_4_4_4_4 ||
            e === t.UNSIGNED_SHORT_5_5_5_1 ||
            e === t.UNSIGNED_SHORT_5_6_5 ||
            e === t.UNSIGNED_SHORT
          )
            return Uint16Array;
          if (e === t.UNSIGNED_INT) return Uint32Array;
          if (e === t.HALF_FLOAT) return Uint16Array;
          if (e === t.FLOAT) return Float32Array;
          throw Error(`Unsupported WebGL type: ${e}`);
        }
        _getBytesPerTexel(e, t) {
          let { gl: r } = this,
            i = 0;
          return (e === r.UNSIGNED_BYTE && (i = 1),
          (e === r.UNSIGNED_SHORT_4_4_4_4 ||
            e === r.UNSIGNED_SHORT_5_5_5_1 ||
            e === r.UNSIGNED_SHORT_5_6_5 ||
            e === r.UNSIGNED_SHORT ||
            e === r.HALF_FLOAT) &&
            (i = 2),
          (e === r.UNSIGNED_INT || e === r.FLOAT) && (i = 4),
          t === r.RGBA)
            ? 4 * i
            : t === r.RGB
            ? 3 * i
            : t === r.ALPHA
            ? i
            : void 0;
        }
      }
      function m8(e) {
        return e.isDataTexture
          ? e.image.data
          : ("undefined" != typeof HTMLImageElement &&
              e instanceof HTMLImageElement) ||
            ("undefined" != typeof HTMLCanvasElement &&
              e instanceof HTMLCanvasElement) ||
            ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
            ("undefined" != typeof OffscreenCanvas &&
              e instanceof OffscreenCanvas)
          ? e
          : e.data;
      }
      class m5 {
        constructor(e) {
          (this.backend = e),
            (this.gl = this.backend.gl),
            (this.availableExtensions = this.gl.getSupportedExtensions()),
            (this.extensions = {});
        }
        get(e) {
          let t = this.extensions[e];
          return (
            void 0 === t &&
              ((t = this.gl.getExtension(e)), (this.extensions[e] = t)),
            t
          );
        }
        has(e) {
          return this.availableExtensions.includes(e);
        }
      }
      class m9 {
        constructor(e) {
          (this.backend = e), (this.maxAnisotropy = null);
        }
        getMaxAnisotropy() {
          if (null !== this.maxAnisotropy) return this.maxAnisotropy;
          let e = this.backend.gl,
            t = this.backend.extensions;
          if (!0 === t.has("EXT_texture_filter_anisotropic")) {
            let r = t.get("EXT_texture_filter_anisotropic");
            this.maxAnisotropy = e.getParameter(
              r.MAX_TEXTURE_MAX_ANISOTROPY_EXT
            );
          } else this.maxAnisotropy = 0;
          return this.maxAnisotropy;
        }
      }
      let m7 = {
        WEBGL_multi_draw: "WEBGL_multi_draw",
        WEBGL_compressed_texture_astc: "texture-compression-astc",
        WEBGL_compressed_texture_etc: "texture-compression-etc2",
        WEBGL_compressed_texture_etc1: "texture-compression-etc1",
        WEBGL_compressed_texture_pvrtc: "texture-compression-pvrtc",
        WEBKIT_WEBGL_compressed_texture_pvrtc: "texture-compression-pvrtc",
        WEBGL_compressed_texture_s3tc: "texture-compression-bc",
        EXT_texture_compression_bptc: "texture-compression-bptc",
        EXT_disjoint_timer_query_webgl2: "timestamp-query",
        OVR_multiview2: "OVR_multiview2",
      };
      class fe {
        constructor(e) {
          (this.gl = e.gl),
            (this.extensions = e.extensions),
            (this.info = e.renderer.info),
            (this.mode = null),
            (this.index = 0),
            (this.type = null),
            (this.object = null);
        }
        render(e, t) {
          let { gl: r, mode: i, object: s, type: n, info: a, index: o } = this;
          0 !== o ? r.drawElements(i, t, n, e) : r.drawArrays(i, e, t),
            a.update(s, t, 1);
        }
        renderInstances(e, t, r) {
          let { gl: i, mode: s, type: n, index: a, object: o, info: l } = this;
          0 !== r &&
            (0 !== a
              ? i.drawElementsInstanced(s, t, n, e, r)
              : i.drawArraysInstanced(s, e, t, r),
            l.update(o, t, r));
        }
        renderMultiDraw(e, t, r) {
          let { extensions: i, mode: s, object: n, info: a } = this;
          if (0 === r) return;
          let o = i.get("WEBGL_multi_draw");
          if (null === o) for (let i = 0; i < r; i++) this.render(e[i], t[i]);
          else {
            0 !== this.index
              ? o.multiDrawElementsWEBGL(s, t, 0, this.type, e, 0, r)
              : o.multiDrawArraysWEBGL(s, e, 0, t, 0, r);
            let i = 0;
            for (let e = 0; e < r; e++) i += t[e];
            a.update(n, i, 1);
          }
        }
        renderMultiDrawInstances(e, t, r, i) {
          let { extensions: s, mode: n, object: a, info: o } = this;
          if (0 === r) return;
          let l = s.get("WEBGL_multi_draw");
          if (null === l)
            for (let s = 0; s < r; s++) this.renderInstances(e[s], t[s], i[s]);
          else {
            0 !== this.index
              ? l.multiDrawElementsInstancedWEBGL(
                  n,
                  t,
                  0,
                  this.type,
                  e,
                  0,
                  i,
                  0,
                  r
                )
              : l.multiDrawArraysInstancedWEBGL(n, e, 0, t, 0, i, 0, r);
            let s = 0;
            for (let e = 0; e < r; e++) s += t[e] * i[e];
            o.update(a, s, 1);
          }
        }
      }
      class ft {
        constructor(e = 256) {
          (this.trackTimestamp = !0),
            (this.maxQueries = e),
            (this.currentQueryIndex = 0),
            (this.queryOffsets = new Map()),
            (this.isDisposed = !1),
            (this.lastValue = 0),
            (this.pendingResolve = !1);
        }
        allocateQueriesForContext() {}
        async resolveQueriesAsync() {}
        dispose() {}
      }
      class fr extends ft {
        constructor(e, t, r = 2048) {
          if (
            (super(r),
            (this.gl = e),
            (this.type = t),
            (this.ext =
              e.getExtension("EXT_disjoint_timer_query_webgl2") ||
              e.getExtension("EXT_disjoint_timer_query")),
            !this.ext)
          ) {
            console.warn(
              "EXT_disjoint_timer_query not supported; timestamps will be disabled."
            ),
              (this.trackTimestamp = !1);
            return;
          }
          this.queries = [];
          for (let t = 0; t < this.maxQueries; t++)
            this.queries.push(e.createQuery());
          (this.activeQuery = null), (this.queryStates = new Map());
        }
        allocateQueriesForContext(e) {
          if (!this.trackTimestamp) return null;
          if (this.currentQueryIndex + 2 > this.maxQueries)
            return (
              (0, u.mcG)(
                `WebGPUTimestampQueryPool [${
                  this.type
                }]: Maximum number of queries exceeded, when using trackTimestamp it is necessary to resolves the queries via renderer.resolveTimestampsAsync( THREE.TimestampQuery.${this.type.toUpperCase()} ).`
              ),
              null
            );
          let t = this.currentQueryIndex;
          return (
            (this.currentQueryIndex += 2),
            this.queryStates.set(t, "inactive"),
            this.queryOffsets.set(e.id, t),
            t
          );
        }
        beginQuery(e) {
          if (!this.trackTimestamp || this.isDisposed) return;
          let t = this.queryOffsets.get(e.id);
          if (null == t || null !== this.activeQuery) return;
          let r = this.queries[t];
          if (r)
            try {
              "inactive" === this.queryStates.get(t) &&
                (this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, r),
                (this.activeQuery = t),
                this.queryStates.set(t, "started"));
            } catch (e) {
              console.error("Error in beginQuery:", e),
                (this.activeQuery = null),
                this.queryStates.set(t, "inactive");
            }
        }
        endQuery(e) {
          if (!this.trackTimestamp || this.isDisposed) return;
          let t = this.queryOffsets.get(e.id);
          if (null != t && this.activeQuery === t)
            try {
              this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),
                this.queryStates.set(t, "ended"),
                (this.activeQuery = null);
            } catch (e) {
              console.error("Error in endQuery:", e),
                this.queryStates.set(t, "inactive"),
                (this.activeQuery = null);
            }
        }
        async resolveQueriesAsync() {
          if (!this.trackTimestamp || this.pendingResolve)
            return this.lastValue;
          this.pendingResolve = !0;
          try {
            let e = [];
            for (let [t, r] of this.queryStates)
              if ("ended" === r) {
                let r = this.queries[t];
                e.push(this.resolveQuery(r));
              }
            if (0 === e.length) return this.lastValue;
            let t = (await Promise.all(e)).reduce((e, t) => e + t, 0);
            return (
              (this.lastValue = t),
              (this.currentQueryIndex = 0),
              this.queryOffsets.clear(),
              this.queryStates.clear(),
              (this.activeQuery = null),
              t
            );
          } catch (e) {
            return console.error("Error resolving queries:", e), this.lastValue;
          } finally {
            this.pendingResolve = !1;
          }
        }
        async resolveQuery(e) {
          return new Promise((t) => {
            let r;
            if (this.isDisposed) return void t(this.lastValue);
            let i = !1,
              s = (e) => {
                i || ((i = !0), r && (clearTimeout(r), (r = null)), t(e));
              },
              n = () => {
                if (this.isDisposed) return void s(this.lastValue);
                try {
                  if (this.gl.getParameter(this.ext.GPU_DISJOINT_EXT))
                    return void s(this.lastValue);
                  if (
                    !this.gl.getQueryParameter(
                      e,
                      this.gl.QUERY_RESULT_AVAILABLE
                    )
                  ) {
                    r = setTimeout(n, 1);
                    return;
                  }
                  let i = this.gl.getQueryParameter(e, this.gl.QUERY_RESULT);
                  t(Number(i) / 1e6);
                } catch (e) {
                  console.error("Error checking query:", e), t(this.lastValue);
                }
              };
            n();
          });
        }
        dispose() {
          if (
            !this.isDisposed &&
            ((this.isDisposed = !0), this.trackTimestamp)
          ) {
            for (let e of this.queries) this.gl.deleteQuery(e);
            (this.queries = []),
              this.queryStates.clear(),
              this.queryOffsets.clear(),
              (this.lastValue = 0),
              (this.activeQuery = null);
          }
        }
      }
      class fi extends mK {
        constructor(e = {}) {
          super(e),
            (this.isWebGLBackend = !0),
            (this.attributeUtils = null),
            (this.extensions = null),
            (this.capabilities = null),
            (this.textureUtils = null),
            (this.bufferRenderer = null),
            (this.gl = null),
            (this.state = null),
            (this.utils = null),
            (this.vaoCache = {}),
            (this.transformFeedbackCache = {}),
            (this.discard = !1),
            (this.disjoint = null),
            (this.parallel = null),
            (this._currentContext = null),
            (this._knownBindings = new WeakSet()),
            (this._supportsInvalidateFramebuffer =
              "undefined" != typeof navigator &&
              /OculusBrowser/g.test(navigator.userAgent)),
            (this._xrFramebuffer = null);
        }
        init(e) {
          super.init(e);
          let t = this.parameters,
            r = {
              antialias: e.samples > 0,
              alpha: !0,
              depth: e.depth,
              stencil: e.stencil,
            },
            i =
              void 0 !== t.context
                ? t.context
                : e.domElement.getContext("webgl2", r);
          function s(t) {
            t.preventDefault();
            let r = {
              api: "WebGL",
              message: t.statusMessage || "Unknown reason",
              reason: null,
              originalEvent: t,
            };
            e.onDeviceLost(r);
          }
          (this._onContextLost = s),
            e.domElement.addEventListener("webglcontextlost", s, !1),
            (this.gl = i),
            (this.extensions = new m5(this)),
            (this.capabilities = new m9(this)),
            (this.attributeUtils = new mZ(this)),
            (this.textureUtils = new m6(this)),
            (this.bufferRenderer = new fe(this)),
            (this.state = new mJ(this)),
            (this.utils = new m0(this)),
            this.extensions.get("EXT_color_buffer_float"),
            this.extensions.get("WEBGL_clip_cull_distance"),
            this.extensions.get("OES_texture_float_linear"),
            this.extensions.get("EXT_color_buffer_half_float"),
            this.extensions.get("WEBGL_multisampled_render_to_texture"),
            this.extensions.get("WEBGL_render_shared_exponent"),
            this.extensions.get("WEBGL_multi_draw"),
            this.extensions.get("OVR_multiview2"),
            (this.disjoint = this.extensions.get(
              "EXT_disjoint_timer_query_webgl2"
            )),
            (this.parallel = this.extensions.get(
              "KHR_parallel_shader_compile"
            ));
        }
        get coordinateSystem() {
          return u.TdN;
        }
        async getArrayBufferAsync(e) {
          return await this.attributeUtils.getArrayBufferAsync(e);
        }
        async waitForGPU() {
          await this.utils._clientWaitAsync();
        }
        async makeXRCompatible() {
          !0 !== this.gl.getContextAttributes().xrCompatible &&
            (await this.gl.makeXRCompatible());
        }
        setXRTarget(e) {
          this._xrFramebuffer = e;
        }
        setXRRenderTargetTextures(e, t, r = null) {
          let i = this.gl;
          if (
            (this.set(e.texture, { textureGPU: t, glInternalFormat: i.RGBA8 }),
            null !== r)
          ) {
            let t = e.stencilBuffer ? i.DEPTH24_STENCIL8 : i.DEPTH_COMPONENT24;
            this.set(e.depthTexture, { textureGPU: r, glInternalFormat: t }),
              !0 ===
                this.extensions.has("WEBGL_multisampled_render_to_texture") &&
                !0 === e._autoAllocateDepthBuffer &&
                !1 === e.multiview &&
                console.warn(
                  "THREE.WebGLBackend: Render-to-texture extension was disabled because an external texture was provided"
                ),
              (e._autoAllocateDepthBuffer = !1);
          }
        }
        initTimestampQuery(e) {
          if (!this.disjoint || !this.trackTimestamp) return;
          let t = e.isComputeNode ? "compute" : "render";
          this.timestampQueryPool[t] ||
            (this.timestampQueryPool[t] = new fr(this.gl, t, 2048));
          let r = this.timestampQueryPool[t];
          null !== r.allocateQueriesForContext(e) && r.beginQuery(e);
        }
        prepareTimestampBuffer(e) {
          if (!this.disjoint || !this.trackTimestamp) return;
          let t = e.isComputeNode ? "compute" : "render";
          this.timestampQueryPool[t].endQuery(e);
        }
        getContext() {
          return this.gl;
        }
        beginRender(e) {
          let { state: t } = this,
            r = this.get(e);
          if (e.viewport) this.updateViewport(e);
          else {
            let { width: e, height: r } = this.getDrawingBufferSize();
            t.viewport(0, 0, e, r);
          }
          if (e.scissor) {
            let { x: r, y: i, width: s, height: n } = e.scissorValue;
            t.scissor(r, e.height - n - i, s, n);
          }
          this.initTimestampQuery(e),
            (r.previousContext = this._currentContext),
            (this._currentContext = e),
            this._setFramebuffer(e),
            this.clear(e.clearColor, e.clearDepth, e.clearStencil, e, !1);
          let i = e.occlusionQueryCount;
          i > 0 &&
            ((r.currentOcclusionQueries = r.occlusionQueries),
            (r.currentOcclusionQueryObjects = r.occlusionQueryObjects),
            (r.lastOcclusionObject = null),
            (r.occlusionQueries = Array(i)),
            (r.occlusionQueryObjects = Array(i)),
            (r.occlusionQueryIndex = 0));
        }
        finishRender(e) {
          let { gl: t, state: r } = this,
            i = this.get(e),
            s = i.previousContext;
          r.resetVertexState();
          let n = e.occlusionQueryCount;
          n > 0 &&
            (n > i.occlusionQueryIndex && t.endQuery(t.ANY_SAMPLES_PASSED),
            this.resolveOccludedAsync(e));
          let a = e.textures;
          if (null !== a)
            for (let e = 0; e < a.length; e++) {
              let t = a[e];
              t.generateMipmaps && this.generateMipmaps(t);
            }
          this._currentContext = s;
          let o = e.renderTarget;
          if (null !== e.textures && o) {
            let i = this.get(o);
            if (o.samples > 0 && !1 === this._useMultisampledExtension(o)) {
              let s = i.framebuffers[e.getCacheKey()],
                n = t.COLOR_BUFFER_BIT;
              o.resolveDepthBuffer &&
                (o.depthBuffer && (n |= t.DEPTH_BUFFER_BIT),
                o.stencilBuffer &&
                  o.resolveStencilBuffer &&
                  (n |= t.STENCIL_BUFFER_BIT));
              let a = i.msaaFrameBuffer,
                l = i.msaaRenderbuffers,
                u = e.textures,
                d = u.length > 1;
              if (
                (r.bindFramebuffer(t.READ_FRAMEBUFFER, a),
                r.bindFramebuffer(t.DRAW_FRAMEBUFFER, s),
                d)
              )
                for (let e = 0; e < u.length; e++)
                  t.framebufferRenderbuffer(
                    t.READ_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.RENDERBUFFER,
                    null
                  ),
                    t.framebufferTexture2D(
                      t.DRAW_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.TEXTURE_2D,
                      null,
                      0
                    );
              for (let r = 0; r < u.length; r++) {
                if (d) {
                  let { textureGPU: e } = this.get(u[r]);
                  t.framebufferRenderbuffer(
                    t.READ_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0,
                    t.RENDERBUFFER,
                    l[r]
                  ),
                    t.framebufferTexture2D(
                      t.DRAW_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0,
                      t.TEXTURE_2D,
                      e,
                      0
                    );
                }
                if (e.scissor) {
                  let { x: r, y: i, width: s, height: a } = e.scissorValue,
                    o = e.height - a - i;
                  t.blitFramebuffer(
                    r,
                    o,
                    r + s,
                    o + a,
                    r,
                    o,
                    r + s,
                    o + a,
                    n,
                    t.NEAREST
                  );
                } else
                  t.blitFramebuffer(
                    0,
                    0,
                    e.width,
                    e.height,
                    0,
                    0,
                    e.width,
                    e.height,
                    n,
                    t.NEAREST
                  );
              }
              if (d)
                for (let e = 0; e < u.length; e++) {
                  let { textureGPU: r } = this.get(u[e]);
                  t.framebufferRenderbuffer(
                    t.READ_FRAMEBUFFER,
                    t.COLOR_ATTACHMENT0 + e,
                    t.RENDERBUFFER,
                    l[e]
                  ),
                    t.framebufferTexture2D(
                      t.DRAW_FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + e,
                      t.TEXTURE_2D,
                      r,
                      0
                    );
                }
              !0 === this._supportsInvalidateFramebuffer &&
                t.invalidateFramebuffer(
                  t.READ_FRAMEBUFFER,
                  i.invalidationArray
                );
            } else if (!1 === o.resolveDepthBuffer && i.framebuffers) {
              let s = i.framebuffers[e.getCacheKey()];
              r.bindFramebuffer(t.DRAW_FRAMEBUFFER, s),
                t.invalidateFramebuffer(
                  t.DRAW_FRAMEBUFFER,
                  i.depthInvalidationArray
                );
            }
          }
          if (null !== s)
            if ((this._setFramebuffer(s), s.viewport)) this.updateViewport(s);
            else {
              let { width: e, height: t } = this.getDrawingBufferSize();
              r.viewport(0, 0, e, t);
            }
          this.prepareTimestampBuffer(e);
        }
        resolveOccludedAsync(e) {
          let t = this.get(e),
            { currentOcclusionQueries: r, currentOcclusionQueryObjects: i } = t;
          if (r && i) {
            let e = new WeakSet(),
              { gl: s } = this;
            (t.currentOcclusionQueryObjects = null),
              (t.currentOcclusionQueries = null);
            let n = () => {
              let a = 0;
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                null !== n &&
                  s.getQueryParameter(n, s.QUERY_RESULT_AVAILABLE) &&
                  (0 === s.getQueryParameter(n, s.QUERY_RESULT) && e.add(i[t]),
                  (r[t] = null),
                  s.deleteQuery(n),
                  a++);
              }
              a < r.length ? requestAnimationFrame(n) : (t.occluded = e);
            };
            n();
          }
        }
        isOccluded(e, t) {
          let r = this.get(e);
          return r.occluded && r.occluded.has(t);
        }
        updateViewport(e) {
          let { state: t } = this,
            { x: r, y: i, width: s, height: n } = e.viewportValue;
          t.viewport(r, e.height - n - i, s, n);
        }
        setScissorTest(e) {
          this.state.setScissorTest(e);
        }
        getClearColor() {
          let e = super.getClearColor();
          return (e.r *= e.a), (e.g *= e.a), (e.b *= e.a), e;
        }
        clear(e, t, r, i = null, s = !0) {
          let { gl: n, renderer: a } = this;
          null === i &&
            (i = { textures: null, clearColorValue: this.getClearColor() });
          let o = 0;
          if (
            (e && (o |= n.COLOR_BUFFER_BIT),
            t && (o |= n.DEPTH_BUFFER_BIT),
            r && (o |= n.STENCIL_BUFFER_BIT),
            0 !== o)
          ) {
            let l;
            l = i.clearColorValue ? i.clearColorValue : this.getClearColor();
            let u = a.getClearDepth(),
              d = a.getClearStencil();
            if ((t && this.state.setDepthMask(!0), null === i.textures))
              n.clearColor(l.r, l.g, l.b, l.a), n.clear(o);
            else {
              if ((s && this._setFramebuffer(i), e))
                for (let e = 0; e < i.textures.length; e++)
                  0 === e
                    ? n.clearBufferfv(n.COLOR, e, [l.r, l.g, l.b, l.a])
                    : n.clearBufferfv(n.COLOR, e, [0, 0, 0, 1]);
              t && r
                ? n.clearBufferfi(n.DEPTH_STENCIL, 0, u, d)
                : t
                ? n.clearBufferfv(n.DEPTH, 0, [u])
                : r && n.clearBufferiv(n.STENCIL, 0, [d]);
            }
          }
        }
        beginCompute(e) {
          let { state: t, gl: r } = this;
          t.bindFramebuffer(r.FRAMEBUFFER, null), this.initTimestampQuery(e);
        }
        compute(e, t, r, i, s = null) {
          let { state: n, gl: a } = this;
          !1 === this.discard &&
            (a.enable(a.RASTERIZER_DISCARD), (this.discard = !0));
          let {
              programGPU: o,
              transformBuffers: l,
              attributes: d,
            } = this.get(i),
            h = this._getVaoKey(d),
            c = this.vaoCache[h];
          void 0 === c
            ? (this.vaoCache[h] = this._createVao(d))
            : n.setVertexState(c),
            n.useProgram(o),
            this._bindUniforms(r);
          let p = this._getTransformFeedback(l);
          a.bindTransformFeedback(a.TRANSFORM_FEEDBACK, p),
            a.beginTransformFeedback(a.POINTS),
            Array.isArray((s = null !== s ? s : t.count)) &&
              ((0, u.mcG)(
                "WebGLBackend.compute(): The count parameter must be a single number, not an array."
              ),
              (s = s[0])),
            d[0].isStorageInstancedBufferAttribute
              ? a.drawArraysInstanced(a.POINTS, 0, 1, s)
              : a.drawArrays(a.POINTS, 0, s),
            a.endTransformFeedback(),
            a.bindTransformFeedback(a.TRANSFORM_FEEDBACK, null);
          for (let e = 0; e < l.length; e++) {
            let t = l[e];
            t.pbo &&
              this.has(t.pbo) &&
              this.textureUtils.copyBufferToTexture(t.transformBuffer, t.pbo),
              t.switchBuffers();
          }
        }
        finishCompute(e) {
          let t = this.gl;
          (this.discard = !1),
            t.disable(t.RASTERIZER_DISCARD),
            this.prepareTimestampBuffer(e),
            this._currentContext && this._setFramebuffer(this._currentContext);
        }
        _isRenderCameraDepthArray(e) {
          return (
            e.depthTexture &&
            e.depthTexture.isArrayTexture &&
            e.camera.isArrayCamera
          );
        }
        draw(e) {
          let {
              object: t,
              pipeline: r,
              material: i,
              context: s,
              hardwareClippingPlanes: n,
            } = e,
            { programGPU: a } = this.get(r),
            { gl: o, state: l } = this,
            d = this.get(s),
            h = e.getDrawParameters();
          if (null === h) return;
          this._bindUniforms(e.getBindings());
          let c = t.isMesh && 0 > t.matrixWorld.determinant();
          l.setMaterial(i, c, n), l.useProgram(a);
          let p = e.getAttributes(),
            g = this.get(p),
            m = g.vaoGPU;
          if (void 0 === m) {
            let e = this._getVaoKey(p);
            void 0 === (m = this.vaoCache[e]) &&
              ((m = this._createVao(p)),
              (this.vaoCache[e] = m),
              (g.vaoGPU = m));
          }
          let f = e.getIndex(),
            y = null !== f ? this.get(f).bufferGPU : null;
          l.setVertexState(m, y);
          let b = d.lastOcclusionObject;
          if (b !== t && void 0 !== b) {
            if (
              (null !== b &&
                !0 === b.occlusionTest &&
                (o.endQuery(o.ANY_SAMPLES_PASSED), d.occlusionQueryIndex++),
              !0 === t.occlusionTest)
            ) {
              let e = o.createQuery();
              o.beginQuery(o.ANY_SAMPLES_PASSED, e),
                (d.occlusionQueries[d.occlusionQueryIndex] = e),
                (d.occlusionQueryObjects[d.occlusionQueryIndex] = t);
            }
            d.lastOcclusionObject = t;
          }
          let x = this.bufferRenderer;
          t.isPoints
            ? (x.mode = o.POINTS)
            : t.isLineSegments
            ? (x.mode = o.LINES)
            : t.isLine
            ? (x.mode = o.LINE_STRIP)
            : t.isLineLoop
            ? (x.mode = o.LINE_LOOP)
            : !0 === i.wireframe
            ? (l.setLineWidth(
                i.wireframeLinewidth * this.renderer.getPixelRatio()
              ),
              (x.mode = o.LINES))
            : (x.mode = o.TRIANGLES);
          let { vertexCount: T, instanceCount: _ } = h,
            { firstVertex: v } = h;
          if (((x.object = t), null !== f)) {
            v *= f.array.BYTES_PER_ELEMENT;
            let e = this.get(f);
            (x.index = f.count), (x.type = e.type);
          } else x.index = 0;
          let N = () => {
            t.isBatchedMesh
              ? null !== t._multiDrawInstances
                ? ((0, u.mcG)(
                    "THREE.WebGLBackend: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."
                  ),
                  x.renderMultiDrawInstances(
                    t._multiDrawStarts,
                    t._multiDrawCounts,
                    t._multiDrawCount,
                    t._multiDrawInstances
                  ))
                : this.hasFeature("WEBGL_multi_draw")
                ? x.renderMultiDraw(
                    t._multiDrawStarts,
                    t._multiDrawCounts,
                    t._multiDrawCount
                  )
                : (0, u.mcG)(
                    "THREE.WebGLRenderer: WEBGL_multi_draw not supported."
                  )
              : _ > 1
              ? x.renderInstances(v, T, _)
              : x.render(v, T);
          };
          if (
            !0 === e.camera.isArrayCamera &&
            e.camera.cameras.length > 0 &&
            !1 === e.camera.isMultiViewCamera
          ) {
            let r = this.get(e.camera),
              i = e.camera.cameras,
              s = e.getBindingGroup("cameraIndex").bindings[0];
            if (void 0 === r.indexesGPU || r.indexesGPU.length !== i.length) {
              let e = new Uint32Array([0, 0, 0, 0]),
                t = [];
              for (let r = 0, s = i.length; r < s; r++) {
                let i = o.createBuffer();
                (e[0] = r),
                  o.bindBuffer(o.UNIFORM_BUFFER, i),
                  o.bufferData(o.UNIFORM_BUFFER, e, o.STATIC_DRAW),
                  t.push(i);
              }
              r.indexesGPU = t;
            }
            let n = this.get(s),
              a = this.renderer.getPixelRatio(),
              u = this._currentContext.renderTarget,
              d = this._isRenderCameraDepthArray(this._currentContext),
              h = this._currentContext.activeCubeFace;
            if (d) {
              let e = this.get(u.depthTexture);
              if (
                e.clearedRenderId !== this.renderer._nodes.nodeFrame.renderId
              ) {
                e.clearedRenderId = this.renderer._nodes.nodeFrame.renderId;
                let { stencilBuffer: t } = u;
                for (let e = 0, r = i.length; e < r; e++)
                  (this.renderer._activeCubeFace = e),
                    (this._currentContext.activeCubeFace = e),
                    this._setFramebuffer(this._currentContext),
                    this.clear(!1, !0, t, this._currentContext, !1);
                (this.renderer._activeCubeFace = h),
                  (this._currentContext.activeCubeFace = h);
              }
            }
            for (let s = 0, u = i.length; s < u; s++) {
              let u = i[s];
              if (t.layers.test(u.layers)) {
                d &&
                  ((this.renderer._activeCubeFace = s),
                  (this._currentContext.activeCubeFace = s),
                  this._setFramebuffer(this._currentContext));
                let t = u.viewport;
                if (void 0 !== t) {
                  let r = t.x * a,
                    i = t.y * a,
                    s = t.width * a,
                    n = t.height * a;
                  l.viewport(
                    Math.floor(r),
                    Math.floor(e.context.height - n - i),
                    Math.floor(s),
                    Math.floor(n)
                  );
                }
                l.bindBufferBase(o.UNIFORM_BUFFER, n.index, r.indexesGPU[s]),
                  N();
              }
              (this._currentContext.activeCubeFace = h),
                (this.renderer._activeCubeFace = h);
            }
          } else N();
        }
        needsRenderUpdate() {
          return !1;
        }
        getRenderCacheKey() {
          return "";
        }
        createDefaultTexture(e) {
          this.textureUtils.createDefaultTexture(e);
        }
        createTexture(e, t) {
          this.textureUtils.createTexture(e, t);
        }
        updateTexture(e, t) {
          this.textureUtils.updateTexture(e, t);
        }
        generateMipmaps(e) {
          this.textureUtils.generateMipmaps(e);
        }
        destroyTexture(e) {
          this.textureUtils.destroyTexture(e);
        }
        async copyTextureToBuffer(e, t, r, i, s, n) {
          return this.textureUtils.copyTextureToBuffer(e, t, r, i, s, n);
        }
        createSampler() {}
        destroySampler() {}
        createNodeBuilder(e, t) {
          return new mq(e, t);
        }
        createProgram(e) {
          let t = this.gl,
            { stage: r, code: i } = e,
            s =
              "fragment" === r
                ? t.createShader(t.FRAGMENT_SHADER)
                : t.createShader(t.VERTEX_SHADER);
          t.shaderSource(s, i),
            t.compileShader(s),
            this.set(e, { shaderGPU: s });
        }
        destroyProgram(e) {
          this.delete(e);
        }
        createRenderPipeline(e, t) {
          let r = this.gl,
            i = e.pipeline,
            { fragmentProgram: s, vertexProgram: n } = i,
            a = r.createProgram(),
            o = this.get(s).shaderGPU,
            l = this.get(n).shaderGPU;
          if (
            (r.attachShader(a, o),
            r.attachShader(a, l),
            r.linkProgram(a),
            this.set(i, { programGPU: a, fragmentShader: o, vertexShader: l }),
            null !== t && this.parallel)
          ) {
            let s = new Promise((t) => {
              let s = this.parallel,
                n = () => {
                  r.getProgramParameter(a, s.COMPLETION_STATUS_KHR)
                    ? (this._completeCompile(e, i), t())
                    : requestAnimationFrame(n);
                };
              n();
            });
            t.push(s);
            return;
          }
          this._completeCompile(e, i);
        }
        _handleSource(e, t) {
          let r = e.split("\n"),
            i = [],
            s = Math.max(t - 6, 0),
            n = Math.min(t + 6, r.length);
          for (let e = s; e < n; e++) {
            let s = e + 1;
            i.push(`${s === t ? ">" : " "} ${s}: ${r[e]}`);
          }
          return i.join("\n");
        }
        _getShaderErrors(e, t, r) {
          let i = e.getShaderParameter(t, e.COMPILE_STATUS),
            s = (e.getShaderInfoLog(t) || "").trim();
          if (i && "" === s) return "";
          let n = /ERROR: 0:(\d+)/.exec(s);
          if (!n) return s;
          {
            let i = parseInt(n[1]);
            return (
              r.toUpperCase() +
              "\n\n" +
              s +
              "\n\n" +
              this._handleSource(e.getShaderSource(t), i)
            );
          }
        }
        _logProgramError(e, t, r) {
          if (this.renderer.debug.checkShaderErrors) {
            let i = this.gl,
              s = (i.getProgramInfoLog(e) || "").trim();
            if (!1 === i.getProgramParameter(e, i.LINK_STATUS))
              if ("function" == typeof this.renderer.debug.onShaderError)
                this.renderer.debug.onShaderError(i, e, r, t);
              else {
                let n = this._getShaderErrors(i, r, "vertex"),
                  a = this._getShaderErrors(i, t, "fragment");
                console.error(
                  "THREE.WebGLProgram: Shader Error " +
                    i.getError() +
                    " - VALIDATE_STATUS " +
                    i.getProgramParameter(e, i.VALIDATE_STATUS) +
                    "\n\nProgram Info Log: " +
                    s +
                    "\n" +
                    n +
                    "\n" +
                    a
                );
              }
            else
              "" !== s &&
                console.warn("THREE.WebGLProgram: Program Info Log:", s);
          }
        }
        _completeCompile(e, t) {
          let { state: r, gl: i } = this,
            { programGPU: s, fragmentShader: n, vertexShader: a } = this.get(t);
          !1 === i.getProgramParameter(s, i.LINK_STATUS) &&
            this._logProgramError(s, n, a),
            r.useProgram(s);
          let o = e.getBindings();
          this._setupBindings(o, s), this.set(t, { programGPU: s });
        }
        createComputePipeline(e, t) {
          let { state: r, gl: i } = this,
            s = {
              stage: "fragment",
              code: "#version 300 es\nprecision highp float;\nvoid main() {}",
            };
          this.createProgram(s);
          let { computeProgram: n } = e,
            a = i.createProgram(),
            o = this.get(s).shaderGPU,
            l = this.get(n).shaderGPU,
            u = n.transforms,
            d = [],
            h = [];
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            d.push(t.varyingName), h.push(t.attributeNode);
          }
          i.attachShader(a, o),
            i.attachShader(a, l),
            i.transformFeedbackVaryings(a, d, i.SEPARATE_ATTRIBS),
            i.linkProgram(a),
            !1 === i.getProgramParameter(a, i.LINK_STATUS) &&
              this._logProgramError(a, o, l),
            r.useProgram(a),
            this._setupBindings(t, a);
          let c = n.attributes,
            p = [],
            g = [];
          for (let e = 0; e < c.length; e++) {
            let t = c[e].node.attribute;
            p.push(t),
              this.has(t) ||
                this.attributeUtils.createAttribute(t, i.ARRAY_BUFFER);
          }
          for (let e = 0; e < h.length; e++) {
            let t = h[e].attribute;
            this.has(t) ||
              this.attributeUtils.createAttribute(t, i.ARRAY_BUFFER);
            let r = this.get(t);
            g.push(r);
          }
          this.set(e, { programGPU: a, transformBuffers: g, attributes: p });
        }
        createBindings(e, t) {
          if (!1 === this._knownBindings.has(t)) {
            this._knownBindings.add(t);
            let e = 0,
              r = 0;
            for (let i of t)
              for (let t of (this.set(i, { textures: r, uniformBuffers: e }),
              i.bindings))
                t.isUniformBuffer && e++, t.isSampledTexture && r++;
          }
          this.updateBindings(e, t);
        }
        updateBindings(e) {
          let { gl: t } = this,
            r = this.get(e),
            i = r.uniformBuffers,
            s = r.textures;
          for (let r of e.bindings)
            if (r.isUniformsGroup || r.isUniformBuffer) {
              let e = r.buffer,
                s = t.createBuffer();
              t.bindBuffer(t.UNIFORM_BUFFER, s),
                t.bufferData(t.UNIFORM_BUFFER, e, t.DYNAMIC_DRAW),
                this.set(r, { index: i++, bufferGPU: s });
            } else if (r.isSampledTexture) {
              let { textureGPU: e, glTextureType: t } = this.get(r.texture);
              this.set(r, { index: s++, textureGPU: e, glTextureType: t });
            }
        }
        updateBinding(e) {
          let t = this.gl;
          if (e.isUniformsGroup || e.isUniformBuffer) {
            let r = this.get(e).bufferGPU,
              i = e.buffer;
            t.bindBuffer(t.UNIFORM_BUFFER, r),
              t.bufferData(t.UNIFORM_BUFFER, i, t.DYNAMIC_DRAW);
          }
        }
        createIndexAttribute(e) {
          let t = this.gl;
          this.attributeUtils.createAttribute(e, t.ELEMENT_ARRAY_BUFFER);
        }
        createAttribute(e) {
          if (this.has(e)) return;
          let t = this.gl;
          this.attributeUtils.createAttribute(e, t.ARRAY_BUFFER);
        }
        createStorageAttribute(e) {
          if (this.has(e)) return;
          let t = this.gl;
          this.attributeUtils.createAttribute(e, t.ARRAY_BUFFER);
        }
        updateAttribute(e) {
          this.attributeUtils.updateAttribute(e);
        }
        destroyAttribute(e) {
          this.attributeUtils.destroyAttribute(e);
        }
        hasFeature(e) {
          let t = Object.keys(m7).filter((t) => m7[t] === e),
            r = this.extensions;
          for (let e = 0; e < t.length; e++) if (r.has(t[e])) return !0;
          return !1;
        }
        getMaxAnisotropy() {
          return this.capabilities.getMaxAnisotropy();
        }
        copyTextureToTexture(e, t, r = null, i = null, s = 0, n = 0) {
          this.textureUtils.copyTextureToTexture(e, t, r, i, s, n);
        }
        copyFramebufferToTexture(e, t, r) {
          this.textureUtils.copyFramebufferToTexture(e, t, r);
        }
        _setFramebuffer(e) {
          let { gl: t, state: r } = this,
            i = null;
          if (null !== e.textures) {
            let s,
              n = e.renderTarget,
              a = this.get(n),
              { samples: o, depthBuffer: l, stencilBuffer: u } = n,
              d = !0 === n.isWebGLCubeRenderTarget,
              h = !0 === n.isRenderTarget3D,
              c = n.depth > 1,
              p = !0 === n.isXRRenderTarget,
              g = !0 === p && !0 === n._hasExternalTextures,
              m = a.msaaFrameBuffer,
              f = a.depthRenderbuffer,
              y = this.extensions.get("WEBGL_multisampled_render_to_texture"),
              b = this.extensions.get("OVR_multiview2"),
              x = this._useMultisampledExtension(n),
              T = d_(e);
            if (
              (d
                ? (a.cubeFramebuffers || (a.cubeFramebuffers = {}),
                  (s = a.cubeFramebuffers[T]))
                : p && !1 === g
                ? (s = this._xrFramebuffer)
                : (a.framebuffers || (a.framebuffers = {}),
                  (s = a.framebuffers[T])),
              void 0 === s)
            ) {
              (s = t.createFramebuffer()), r.bindFramebuffer(t.FRAMEBUFFER, s);
              let i = e.textures,
                l = [];
              if (d) {
                a.cubeFramebuffers[T] = s;
                let { textureGPU: e } = this.get(i[0]),
                  r = this.renderer._activeCubeFace;
                t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0,
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                  e,
                  0
                );
              } else {
                a.framebuffers[T] = s;
                for (let r = 0; r < i.length; r++) {
                  let s = i[r],
                    a = this.get(s);
                  (a.renderTarget = e.renderTarget), (a.cacheKey = T);
                  let l = t.COLOR_ATTACHMENT0 + r;
                  if (n.multiview)
                    b.framebufferTextureMultisampleMultiviewOVR(
                      t.FRAMEBUFFER,
                      l,
                      a.textureGPU,
                      0,
                      o,
                      0,
                      2
                    );
                  else if (h || c) {
                    let e = this.renderer._activeCubeFace;
                    t.framebufferTextureLayer(
                      t.FRAMEBUFFER,
                      l,
                      a.textureGPU,
                      0,
                      e
                    );
                  } else
                    x
                      ? y.framebufferTexture2DMultisampleEXT(
                          t.FRAMEBUFFER,
                          l,
                          t.TEXTURE_2D,
                          a.textureGPU,
                          0,
                          o
                        )
                      : t.framebufferTexture2D(
                          t.FRAMEBUFFER,
                          l,
                          t.TEXTURE_2D,
                          a.textureGPU,
                          0
                        );
                }
              }
              let p = u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT;
              if (!0 === n._autoAllocateDepthBuffer) {
                let r = t.createRenderbuffer();
                this.textureUtils.setupRenderBufferStorage(r, e, 0, x),
                  (a.xrDepthRenderbuffer = r),
                  l.push(u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT),
                  t.bindRenderbuffer(t.RENDERBUFFER, r),
                  t.framebufferRenderbuffer(
                    t.FRAMEBUFFER,
                    p,
                    t.RENDERBUFFER,
                    r
                  );
              } else if (null !== e.depthTexture) {
                l.push(u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT);
                let r = this.get(e.depthTexture);
                if (
                  ((r.renderTarget = e.renderTarget),
                  (r.cacheKey = T),
                  n.multiview)
                )
                  b.framebufferTextureMultisampleMultiviewOVR(
                    t.FRAMEBUFFER,
                    p,
                    r.textureGPU,
                    0,
                    o,
                    0,
                    2
                  );
                else if (g && x)
                  y.framebufferTexture2DMultisampleEXT(
                    t.FRAMEBUFFER,
                    p,
                    t.TEXTURE_2D,
                    r.textureGPU,
                    0,
                    o
                  );
                else if (e.depthTexture.isArrayTexture) {
                  let e = this.renderer._activeCubeFace;
                  t.framebufferTextureLayer(
                    t.FRAMEBUFFER,
                    p,
                    r.textureGPU,
                    0,
                    e
                  );
                } else
                  t.framebufferTexture2D(
                    t.FRAMEBUFFER,
                    p,
                    t.TEXTURE_2D,
                    r.textureGPU,
                    0
                  );
              }
              a.depthInvalidationArray = l;
            } else {
              if (this._isRenderCameraDepthArray(e)) {
                r.bindFramebuffer(t.FRAMEBUFFER, s);
                let i = this.renderer._activeCubeFace,
                  n = this.get(e.depthTexture),
                  a = u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT;
                t.framebufferTextureLayer(t.FRAMEBUFFER, a, n.textureGPU, 0, i);
              }
              if ((p || x || n.multiview) && !0 !== n._isOpaqueFramebuffer) {
                r.bindFramebuffer(t.FRAMEBUFFER, s);
                let i = this.get(e.textures[0]);
                n.multiview
                  ? b.framebufferTextureMultisampleMultiviewOVR(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0,
                      i.textureGPU,
                      0,
                      o,
                      0,
                      2
                    )
                  : x
                  ? y.framebufferTexture2DMultisampleEXT(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0,
                      t.TEXTURE_2D,
                      i.textureGPU,
                      0,
                      o
                    )
                  : t.framebufferTexture2D(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0,
                      t.TEXTURE_2D,
                      i.textureGPU,
                      0
                    );
                let l = u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT;
                if (!0 === n._autoAllocateDepthBuffer) {
                  let e = a.xrDepthRenderbuffer;
                  t.bindRenderbuffer(t.RENDERBUFFER, e),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      l,
                      t.RENDERBUFFER,
                      e
                    );
                } else {
                  let r = this.get(e.depthTexture);
                  n.multiview
                    ? b.framebufferTextureMultisampleMultiviewOVR(
                        t.FRAMEBUFFER,
                        l,
                        r.textureGPU,
                        0,
                        o,
                        0,
                        2
                      )
                    : x
                    ? y.framebufferTexture2DMultisampleEXT(
                        t.FRAMEBUFFER,
                        l,
                        t.TEXTURE_2D,
                        r.textureGPU,
                        0,
                        o
                      )
                    : t.framebufferTexture2D(
                        t.FRAMEBUFFER,
                        l,
                        t.TEXTURE_2D,
                        r.textureGPU,
                        0
                      );
                }
              }
            }
            if (o > 0 && !1 === x && !n.multiview) {
              if (void 0 === m) {
                let i = [];
                (m = t.createFramebuffer()),
                  r.bindFramebuffer(t.FRAMEBUFFER, m);
                let s = [],
                  n = e.textures;
                for (let r = 0; r < n.length; r++) {
                  (s[r] = t.createRenderbuffer()),
                    t.bindRenderbuffer(t.RENDERBUFFER, s[r]),
                    i.push(t.COLOR_ATTACHMENT0 + r);
                  let n = e.textures[r],
                    a = this.get(n);
                  t.renderbufferStorageMultisample(
                    t.RENDERBUFFER,
                    o,
                    a.glInternalFormat,
                    e.width,
                    e.height
                  ),
                    t.framebufferRenderbuffer(
                      t.FRAMEBUFFER,
                      t.COLOR_ATTACHMENT0 + r,
                      t.RENDERBUFFER,
                      s[r]
                    );
                }
                if (
                  (t.bindRenderbuffer(t.RENDERBUFFER, null),
                  (a.msaaFrameBuffer = m),
                  (a.msaaRenderbuffers = s),
                  l && void 0 === f)
                ) {
                  (f = t.createRenderbuffer()),
                    this.textureUtils.setupRenderBufferStorage(f, e, o),
                    (a.depthRenderbuffer = f);
                  let r = u ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT;
                  i.push(r);
                }
                a.invalidationArray = i;
              }
              i = a.msaaFrameBuffer;
            } else i = s;
            r.drawBuffers(e, s);
          }
          r.bindFramebuffer(t.FRAMEBUFFER, i);
        }
        _getVaoKey(e) {
          let t = "";
          for (let r = 0; r < e.length; r++) t += ":" + this.get(e[r]).id;
          return t;
        }
        _createVao(e) {
          let { gl: t } = this,
            r = t.createVertexArray();
          t.bindVertexArray(r);
          for (let r = 0; r < e.length; r++) {
            let i,
              s,
              n = e[r],
              a = this.get(n);
            t.bindBuffer(t.ARRAY_BUFFER, a.bufferGPU),
              t.enableVertexAttribArray(r),
              !0 === n.isInterleavedBufferAttribute
                ? ((i = n.data.stride * a.bytesPerElement),
                  (s = n.offset * a.bytesPerElement))
                : ((i = 0), (s = 0)),
              a.isInteger
                ? t.vertexAttribIPointer(r, n.itemSize, a.type, i, s)
                : t.vertexAttribPointer(
                    r,
                    n.itemSize,
                    a.type,
                    n.normalized,
                    i,
                    s
                  ),
              n.isInstancedBufferAttribute && !n.isInterleavedBufferAttribute
                ? t.vertexAttribDivisor(r, n.meshPerAttribute)
                : n.isInterleavedBufferAttribute &&
                  n.data.isInstancedInterleavedBuffer &&
                  t.vertexAttribDivisor(r, n.data.meshPerAttribute);
          }
          return t.bindBuffer(t.ARRAY_BUFFER, null), r;
        }
        _getTransformFeedback(e) {
          let t = "";
          for (let r = 0; r < e.length; r++) t += ":" + e[r].id;
          let r = this.transformFeedbackCache[t];
          if (void 0 !== r) return r;
          let { gl: i } = this;
          (r = i.createTransformFeedback()),
            i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, r);
          for (let t = 0; t < e.length; t++) {
            let r = e[t];
            i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, t, r.transformBuffer);
          }
          return (
            i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, null),
            (this.transformFeedbackCache[t] = r),
            r
          );
        }
        _setupBindings(e, t) {
          let r = this.gl;
          for (let i of e)
            for (let e of i.bindings) {
              let i = this.get(e).index;
              if (e.isUniformsGroup || e.isUniformBuffer) {
                let s = r.getUniformBlockIndex(t, e.name);
                r.uniformBlockBinding(t, s, i);
              } else if (e.isSampledTexture) {
                let s = r.getUniformLocation(t, e.name);
                r.uniform1i(s, i);
              }
            }
        }
        _bindUniforms(e) {
          let { gl: t, state: r } = this;
          for (let i of e)
            for (let e of i.bindings) {
              let i = this.get(e),
                s = i.index;
              e.isUniformsGroup || e.isUniformBuffer
                ? r.bindBufferBase(t.UNIFORM_BUFFER, s, i.bufferGPU)
                : e.isSampledTexture &&
                  r.bindTexture(i.glTextureType, i.textureGPU, t.TEXTURE0 + s);
            }
        }
        _useMultisampledExtension(e) {
          return (
            !0 === e.multiview ||
            (e.samples > 0 &&
              !0 ===
                this.extensions.has("WEBGL_multisampled_render_to_texture") &&
              !1 !== e._autoAllocateDepthBuffer)
          );
        }
        dispose() {
          let e = this.extensions.get("WEBGL_lose_context");
          e && e.loseContext(),
            this.renderer.domElement.removeEventListener(
              "webglcontextlost",
              this._onContextLost
            );
        }
      }
      let fs = {
          PointList: "point-list",
          LineList: "line-list",
          LineStrip: "line-strip",
          TriangleList: "triangle-list",
          TriangleStrip: "triangle-strip",
        },
        fn = {
          Never: "never",
          Less: "less",
          Equal: "equal",
          LessEqual: "less-equal",
          Greater: "greater",
          NotEqual: "not-equal",
          GreaterEqual: "greater-equal",
          Always: "always",
        },
        fa = { Store: "store" },
        fo = { Load: "load", Clear: "clear" },
        fl = { CCW: "ccw" },
        fu = { None: "none", Front: "front", Back: "back" },
        fd = { Uint16: "uint16", Uint32: "uint32" },
        fh = {
          R8Unorm: "r8unorm",
          R8Snorm: "r8snorm",
          R8Uint: "r8uint",
          R8Sint: "r8sint",
          R16Uint: "r16uint",
          R16Sint: "r16sint",
          R16Float: "r16float",
          RG8Unorm: "rg8unorm",
          RG8Snorm: "rg8snorm",
          RG8Uint: "rg8uint",
          RG8Sint: "rg8sint",
          R32Uint: "r32uint",
          R32Sint: "r32sint",
          R32Float: "r32float",
          RG16Uint: "rg16uint",
          RG16Sint: "rg16sint",
          RG16Float: "rg16float",
          RGBA8Unorm: "rgba8unorm",
          RGBA8UnormSRGB: "rgba8unorm-srgb",
          RGBA8Snorm: "rgba8snorm",
          RGBA8Uint: "rgba8uint",
          RGBA8Sint: "rgba8sint",
          BGRA8Unorm: "bgra8unorm",
          BGRA8UnormSRGB: "bgra8unorm-srgb",
          RGB9E5UFloat: "rgb9e5ufloat",
          RGB10A2Unorm: "rgb10a2unorm",
          RG11B10UFloat: "rgb10a2unorm",
          RG32Uint: "rg32uint",
          RG32Sint: "rg32sint",
          RG32Float: "rg32float",
          RGBA16Uint: "rgba16uint",
          RGBA16Sint: "rgba16sint",
          RGBA16Float: "rgba16float",
          RGBA32Uint: "rgba32uint",
          RGBA32Sint: "rgba32sint",
          RGBA32Float: "rgba32float",
          Depth16Unorm: "depth16unorm",
          Depth24Plus: "depth24plus",
          Depth24PlusStencil8: "depth24plus-stencil8",
          Depth32Float: "depth32float",
          Depth32FloatStencil8: "depth32float-stencil8",
          BC1RGBAUnorm: "bc1-rgba-unorm",
          BC1RGBAUnormSRGB: "bc1-rgba-unorm-srgb",
          BC2RGBAUnorm: "bc2-rgba-unorm",
          BC2RGBAUnormSRGB: "bc2-rgba-unorm-srgb",
          BC3RGBAUnorm: "bc3-rgba-unorm",
          BC3RGBAUnormSRGB: "bc3-rgba-unorm-srgb",
          BC4RUnorm: "bc4-r-unorm",
          BC4RSnorm: "bc4-r-snorm",
          BC5RGUnorm: "bc5-rg-unorm",
          BC5RGSnorm: "bc5-rg-snorm",
          BC6HRGBUFloat: "bc6h-rgb-ufloat",
          BC6HRGBFloat: "bc6h-rgb-float",
          BC7RGBAUnorm: "bc7-rgba-unorm",
          BC7RGBAUnormSRGB: "bc7-rgba-srgb",
          ETC2RGB8Unorm: "etc2-rgb8unorm",
          ETC2RGB8UnormSRGB: "etc2-rgb8unorm-srgb",
          ETC2RGB8A1Unorm: "etc2-rgb8a1unorm",
          ETC2RGB8A1UnormSRGB: "etc2-rgb8a1unorm-srgb",
          ETC2RGBA8Unorm: "etc2-rgba8unorm",
          ETC2RGBA8UnormSRGB: "etc2-rgba8unorm-srgb",
          EACR11Unorm: "eac-r11unorm",
          EACR11Snorm: "eac-r11snorm",
          EACRG11Unorm: "eac-rg11unorm",
          EACRG11Snorm: "eac-rg11snorm",
          ASTC4x4Unorm: "astc-4x4-unorm",
          ASTC4x4UnormSRGB: "astc-4x4-unorm-srgb",
          ASTC5x4Unorm: "astc-5x4-unorm",
          ASTC5x4UnormSRGB: "astc-5x4-unorm-srgb",
          ASTC5x5Unorm: "astc-5x5-unorm",
          ASTC5x5UnormSRGB: "astc-5x5-unorm-srgb",
          ASTC6x5Unorm: "astc-6x5-unorm",
          ASTC6x5UnormSRGB: "astc-6x5-unorm-srgb",
          ASTC6x6Unorm: "astc-6x6-unorm",
          ASTC6x6UnormSRGB: "astc-6x6-unorm-srgb",
          ASTC8x5Unorm: "astc-8x5-unorm",
          ASTC8x5UnormSRGB: "astc-8x5-unorm-srgb",
          ASTC8x6Unorm: "astc-8x6-unorm",
          ASTC8x6UnormSRGB: "astc-8x6-unorm-srgb",
          ASTC8x8Unorm: "astc-8x8-unorm",
          ASTC8x8UnormSRGB: "astc-8x8-unorm-srgb",
          ASTC10x5Unorm: "astc-10x5-unorm",
          ASTC10x5UnormSRGB: "astc-10x5-unorm-srgb",
          ASTC10x6Unorm: "astc-10x6-unorm",
          ASTC10x6UnormSRGB: "astc-10x6-unorm-srgb",
          ASTC10x8Unorm: "astc-10x8-unorm",
          ASTC10x8UnormSRGB: "astc-10x8-unorm-srgb",
          ASTC10x10Unorm: "astc-10x10-unorm",
          ASTC10x10UnormSRGB: "astc-10x10-unorm-srgb",
          ASTC12x10Unorm: "astc-12x10-unorm",
          ASTC12x10UnormSRGB: "astc-12x10-unorm-srgb",
          ASTC12x12Unorm: "astc-12x12-unorm",
          ASTC12x12UnormSRGB: "astc-12x12-unorm-srgb",
        },
        fc = {
          ClampToEdge: "clamp-to-edge",
          Repeat: "repeat",
          MirrorRepeat: "mirror-repeat",
        },
        fp = { Linear: "linear", Nearest: "nearest" },
        fg = {
          Zero: "zero",
          One: "one",
          Src: "src",
          OneMinusSrc: "one-minus-src",
          SrcAlpha: "src-alpha",
          OneMinusSrcAlpha: "one-minus-src-alpha",
          Dst: "dst",
          OneMinusDst: "one-minus-dst",
          DstAlpha: "dst-alpha",
          OneMinusDstAlpha: "one-minus-dst-alpha",
          SrcAlphaSaturated: "src-alpha-saturated",
          Constant: "constant",
          OneMinusConstant: "one-minus-constant",
        },
        fm = {
          Add: "add",
          Subtract: "subtract",
          ReverseSubtract: "reverse-subtract",
          Min: "min",
          Max: "max",
        },
        ff = { None: 0, All: 15 },
        fy = {
          Keep: "keep",
          Zero: "zero",
          Replace: "replace",
          Invert: "invert",
          IncrementClamp: "increment-clamp",
          DecrementClamp: "decrement-clamp",
          IncrementWrap: "increment-wrap",
          DecrementWrap: "decrement-wrap",
        },
        fb = { Storage: "storage", ReadOnlyStorage: "read-only-storage" },
        fx = {
          WriteOnly: "write-only",
          ReadOnly: "read-only",
          ReadWrite: "read-write",
        },
        fT = { NonFiltering: "non-filtering", Comparison: "comparison" },
        f_ = {
          Float: "float",
          UnfilterableFloat: "unfilterable-float",
          Depth: "depth",
          SInt: "sint",
          UInt: "uint",
        },
        fv = { TwoD: "2d", ThreeD: "3d" },
        fN = { TwoD: "2d", TwoDArray: "2d-array", Cube: "cube", ThreeD: "3d" },
        fS = { All: "all" },
        fR = { Vertex: "vertex", Instance: "instance" },
        fA = {
          CoreFeaturesAndLimits: "core-features-and-limits",
          DepthClipControl: "depth-clip-control",
          Depth32FloatStencil8: "depth32float-stencil8",
          TextureCompressionBC: "texture-compression-bc",
          TextureCompressionBCSliced3D: "texture-compression-bc-sliced-3d",
          TextureCompressionETC2: "texture-compression-etc2",
          TextureCompressionASTC: "texture-compression-astc",
          TextureCompressionASTCSliced3D: "texture-compression-astc-sliced-3d",
          TimestampQuery: "timestamp-query",
          IndirectFirstInstance: "indirect-first-instance",
          ShaderF16: "shader-f16",
          RG11B10UFloat: "rg11b10ufloat-renderable",
          BGRA8UNormStorage: "bgra8unorm-storage",
          Float32Filterable: "float32-filterable",
          Float32Blendable: "float32-blendable",
          ClipDistances: "clip-distances",
          DualSourceBlending: "dual-source-blending",
          Subgroups: "subgroups",
          TextureFormatsTier1: "texture-formats-tier1",
          TextureFormatsTier2: "texture-formats-tier2",
        };
      class fE extends mP {
        constructor(e, t, r) {
          super(e, t ? t.value : null),
            (this.textureNode = t),
            (this.groupNode = r);
        }
        update() {
          this.texture = this.textureNode.value;
        }
      }
      class fw extends mE {
        constructor(e, t) {
          super(e, t ? t.array : null),
            (this.attribute = t),
            (this.isStorageBuffer = !0);
        }
      }
      let fC = 0;
      class fM extends fw {
        constructor(e, t) {
          super("StorageBuffer_" + fC++, e ? e.value : null),
            (this.nodeUniform = e),
            (this.access = e ? e.access : M.READ_WRITE),
            (this.groupNode = t);
        }
        get buffer() {
          return this.nodeUniform.value;
        }
      }
      class fB extends u9 {
        constructor(e) {
          super(), (this.device = e);
          let t = `
struct VarysStruct {
	@builtin( position ) Position: vec4<f32>,
	@location( 0 ) vTex : vec2<f32>
};

@vertex
fn main( @builtin( vertex_index ) vertexIndex : u32 ) -> VarysStruct {

	var Varys : VarysStruct;

	var pos = array< vec2<f32>, 4 >(
		vec2<f32>( -1.0,  1.0 ),
		vec2<f32>(  1.0,  1.0 ),
		vec2<f32>( -1.0, -1.0 ),
		vec2<f32>(  1.0, -1.0 )
	);

	var tex = array< vec2<f32>, 4 >(
		vec2<f32>( 0.0, 0.0 ),
		vec2<f32>( 1.0, 0.0 ),
		vec2<f32>( 0.0, 1.0 ),
		vec2<f32>( 1.0, 1.0 )
	);

	Varys.vTex = tex[ vertexIndex ];
	Varys.Position = vec4<f32>( pos[ vertexIndex ], 0.0, 1.0 );

	return Varys;

}
`,
            r = `
@group( 0 ) @binding( 0 )
var imgSampler : sampler;

@group( 0 ) @binding( 1 )
var img : texture_2d<f32>;

@fragment
fn main( @location( 0 ) vTex : vec2<f32> ) -> @location( 0 ) vec4<f32> {

	return textureSample( img, imgSampler, vTex );

}
`,
            i = `
@group( 0 ) @binding( 0 )
var imgSampler : sampler;

@group( 0 ) @binding( 1 )
var img : texture_2d<f32>;

@fragment
fn main( @location( 0 ) vTex : vec2<f32> ) -> @location( 0 ) vec4<f32> {

	return textureSample( img, imgSampler, vec2( vTex.x, 1.0 - vTex.y ) );

}
`;
          (this.mipmapSampler = e.createSampler({ minFilter: fp.Linear })),
            (this.flipYSampler = e.createSampler({ minFilter: fp.Nearest })),
            (this.transferPipelines = {}),
            (this.flipYPipelines = {}),
            (this.mipmapVertexShaderModule = e.createShaderModule({
              label: "mipmapVertex",
              code: t,
            })),
            (this.mipmapFragmentShaderModule = e.createShaderModule({
              label: "mipmapFragment",
              code: r,
            })),
            (this.flipYFragmentShaderModule = e.createShaderModule({
              label: "flipYFragment",
              code: i,
            }));
        }
        getTransferPipeline(e) {
          let t = this.transferPipelines[e];
          return (
            void 0 === t &&
              ((t = this.device.createRenderPipeline({
                label: `mipmap-${e}`,
                vertex: {
                  module: this.mipmapVertexShaderModule,
                  entryPoint: "main",
                },
                fragment: {
                  module: this.mipmapFragmentShaderModule,
                  entryPoint: "main",
                  targets: [{ format: e }],
                },
                primitive: {
                  topology: fs.TriangleStrip,
                  stripIndexFormat: fd.Uint32,
                },
                layout: "auto",
              })),
              (this.transferPipelines[e] = t)),
            t
          );
        }
        getFlipYPipeline(e) {
          let t = this.flipYPipelines[e];
          return (
            void 0 === t &&
              ((t = this.device.createRenderPipeline({
                label: `flipY-${e}`,
                vertex: {
                  module: this.mipmapVertexShaderModule,
                  entryPoint: "main",
                },
                fragment: {
                  module: this.flipYFragmentShaderModule,
                  entryPoint: "main",
                  targets: [{ format: e }],
                },
                primitive: {
                  topology: fs.TriangleStrip,
                  stripIndexFormat: fd.Uint32,
                },
                layout: "auto",
              })),
              (this.flipYPipelines[e] = t)),
            t
          );
        }
        flipY(e, t, r = 0) {
          let i = t.format,
            { width: s, height: n } = t.size,
            a = this.getTransferPipeline(i),
            o = this.getFlipYPipeline(i),
            l = this.device.createTexture({
              size: { width: s, height: n, depthOrArrayLayers: 1 },
              format: i,
              usage:
                GPUTextureUsage.RENDER_ATTACHMENT |
                GPUTextureUsage.TEXTURE_BINDING,
            }),
            u = e.createView({
              baseMipLevel: 0,
              mipLevelCount: 1,
              dimension: fN.TwoD,
              baseArrayLayer: r,
            }),
            d = l.createView({
              baseMipLevel: 0,
              mipLevelCount: 1,
              dimension: fN.TwoD,
              baseArrayLayer: 0,
            }),
            h = this.device.createCommandEncoder({}),
            c = (e, t, r) => {
              let i = e.getBindGroupLayout(0),
                s = this.device.createBindGroup({
                  layout: i,
                  entries: [
                    { binding: 0, resource: this.flipYSampler },
                    { binding: 1, resource: t },
                  ],
                }),
                n = h.beginRenderPass({
                  colorAttachments: [
                    {
                      view: r,
                      loadOp: fo.Clear,
                      storeOp: fa.Store,
                      clearValue: [0, 0, 0, 0],
                    },
                  ],
                });
              n.setPipeline(e),
                n.setBindGroup(0, s),
                n.draw(4, 1, 0, 0),
                n.end();
            };
          c(a, u, d),
            c(o, d, u),
            this.device.queue.submit([h.finish()]),
            l.destroy();
        }
        generateMipmaps(e, t, r = 0) {
          let i = this.get(e);
          void 0 === i.useCount && ((i.useCount = 0), (i.layers = []));
          let s = i.layers[r] || this._mipmapCreateBundles(e, t, r),
            n = this.device.createCommandEncoder({});
          this._mipmapRunBundles(n, s),
            this.device.queue.submit([n.finish()]),
            0 !== i.useCount && (i.layers[r] = s),
            i.useCount++;
        }
        _mipmapCreateBundles(e, t, r) {
          let i = this.getTransferPipeline(t.format),
            s = i.getBindGroupLayout(0),
            n = e.createView({
              baseMipLevel: 0,
              mipLevelCount: 1,
              dimension: fN.TwoD,
              baseArrayLayer: r,
            }),
            a = [];
          for (let o = 1; o < t.mipLevelCount; o++) {
            let l = this.device.createBindGroup({
                layout: s,
                entries: [
                  { binding: 0, resource: this.mipmapSampler },
                  { binding: 1, resource: n },
                ],
              }),
              u = e.createView({
                baseMipLevel: o,
                mipLevelCount: 1,
                dimension: fN.TwoD,
                baseArrayLayer: r,
              }),
              d = {
                colorAttachments: [
                  {
                    view: u,
                    loadOp: fo.Clear,
                    storeOp: fa.Store,
                    clearValue: [0, 0, 0, 0],
                  },
                ],
              },
              h = this.device.createRenderBundleEncoder({
                colorFormats: [t.format],
              });
            h.setPipeline(i),
              h.setBindGroup(0, l),
              h.draw(4, 1, 0, 0),
              a.push({ renderBundles: [h.finish()], passDescriptor: d }),
              (n = u);
          }
          return a;
        }
        _mipmapRunBundles(e, t) {
          let r = t.length;
          for (let i = 0; i < r; i++) {
            let r = t[i],
              s = e.beginRenderPass(r.passDescriptor);
            s.executeBundles(r.renderBundles), s.end();
          }
        }
      }
      let fL = {
          [u.amv]: "never",
          [u.vim]: "less",
          [u.kO0]: "equal",
          [u.TiK]: "less-equal",
          [u.eoi]: "greater",
          [u.gWB]: "greater-equal",
          [u.FFZ]: "always",
          [u.jzd]: "not-equal",
        },
        fF = [0, 1, 3, 2, 4, 5];
      class fP {
        constructor(e) {
          (this.backend = e),
            (this._passUtils = null),
            (this.defaultTexture = {}),
            (this.defaultCubeTexture = {}),
            (this.defaultVideoFrame = null),
            (this.colorBuffer = null),
            (this.depthTexture = new u.VCu()),
            (this.depthTexture.name = "depthBuffer");
        }
        createSampler(e) {
          let t = this.backend,
            r = t.device,
            i = t.get(e),
            s = {
              addressModeU: this._convertAddressMode(e.wrapS),
              addressModeV: this._convertAddressMode(e.wrapT),
              addressModeW: this._convertAddressMode(e.wrapR),
              magFilter: this._convertFilterMode(e.magFilter),
              minFilter: this._convertFilterMode(e.minFilter),
              mipmapFilter: this._convertFilterMode(e.minFilter),
              maxAnisotropy: 1,
            };
          s.magFilter === fp.Linear &&
            s.minFilter === fp.Linear &&
            s.mipmapFilter === fp.Linear &&
            (s.maxAnisotropy = e.anisotropy),
            e.isDepthTexture &&
              null !== e.compareFunction &&
              (s.compare = fL[e.compareFunction]),
            (i.sampler = r.createSampler(s));
        }
        createDefaultTexture(e) {
          let t,
            r = fI(e);
          (t = e.isCubeTexture
            ? this._getDefaultCubeTextureGPU(r)
            : this._getDefaultTextureGPU(r)),
            (this.backend.get(e).texture = t);
        }
        createTexture(e, t = {}) {
          let r = this.backend,
            i = r.get(e);
          if (i.initialized)
            throw Error("WebGPUTextureUtils: Texture already initialized.");
          void 0 === t.needsMipmaps && (t.needsMipmaps = !1),
            void 0 === t.levels && (t.levels = 1),
            void 0 === t.depth && (t.depth = 1);
          let { width: s, height: n, depth: a, levels: o } = t;
          e.isFramebufferTexture &&
            (t.renderTarget
              ? (t.format = this.backend.utils.getCurrentColorFormat(
                  t.renderTarget
                ))
              : (t.format = this.backend.utils.getPreferredCanvasFormat()));
          let l = this._getDimension(e),
            u = e.internalFormat || t.format || fI(e, r.device);
          i.format = u;
          let {
              samples: d,
              primarySamples: h,
              isMSAA: c,
            } = r.utils.getTextureSampleData(e),
            p =
              GPUTextureUsage.TEXTURE_BINDING |
              GPUTextureUsage.COPY_DST |
              GPUTextureUsage.COPY_SRC;
          !0 === e.isStorageTexture && (p |= GPUTextureUsage.STORAGE_BINDING),
            !0 !== e.isCompressedTexture &&
              !0 !== e.isCompressedArrayTexture &&
              (p |= GPUTextureUsage.RENDER_ATTACHMENT);
          let g = {
            label: e.name,
            size: { width: s, height: n, depthOrArrayLayers: a },
            mipLevelCount: o,
            sampleCount: h,
            dimension: l,
            format: u,
            usage: p,
          };
          if (void 0 === u) {
            console.warn("WebGPURenderer: Texture format not supported."),
              this.createDefaultTexture(e);
            return;
          }
          if (
            (e.isCubeTexture && (g.textureBindingViewDimension = fN.Cube),
            (i.texture = r.device.createTexture(g)),
            c)
          ) {
            let e = Object.assign({}, g);
            (e.label = e.label + "-msaa"),
              (e.sampleCount = d),
              (i.msaaTexture = r.device.createTexture(e));
          }
          (i.initialized = !0), (i.textureDescriptorGPU = g);
        }
        destroyTexture(e) {
          let t = this.backend,
            r = t.get(e);
          void 0 !== r.texture && r.texture.destroy(),
            void 0 !== r.msaaTexture && r.msaaTexture.destroy(),
            t.delete(e);
        }
        destroySampler(e) {
          let t = this.backend.get(e);
          delete t.sampler;
        }
        generateMipmaps(e) {
          let t = this.backend.get(e);
          if (e.isCubeTexture)
            for (let e = 0; e < 6; e++)
              this._generateMipmaps(t.texture, t.textureDescriptorGPU, e);
          else {
            let r = e.image.depth || 1;
            for (let e = 0; e < r; e++)
              this._generateMipmaps(t.texture, t.textureDescriptorGPU, e);
          }
        }
        getColorBuffer() {
          this.colorBuffer && this.colorBuffer.destroy();
          let e = this.backend,
            { width: t, height: r } = e.getDrawingBufferSize();
          return (
            (this.colorBuffer = e.device.createTexture({
              label: "colorBuffer",
              size: { width: t, height: r, depthOrArrayLayers: 1 },
              sampleCount: e.utils.getSampleCount(e.renderer.samples),
              format: e.utils.getPreferredCanvasFormat(),
              usage:
                GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
            })),
            this.colorBuffer
          );
        }
        getDepthBuffer(e = !0, t = !1) {
          let r,
            i,
            s = this.backend,
            { width: n, height: a } = s.getDrawingBufferSize(),
            o = this.depthTexture,
            l = s.get(o).texture;
          if (
            (t ? ((r = u.dcC), (i = u.V3x)) : e && ((r = u.zdS), (i = u.bkx)),
            void 0 !== l)
          ) {
            if (
              o.image.width === n &&
              o.image.height === a &&
              o.format === r &&
              o.type === i
            )
              return l;
            this.destroyTexture(o);
          }
          return (
            (o.name = "depthBuffer"),
            (o.format = r),
            (o.type = i),
            (o.image.width = n),
            (o.image.height = a),
            this.createTexture(o, { width: n, height: a }),
            s.get(o).texture
          );
        }
        updateTexture(e, t) {
          let r = this.backend.get(e),
            { textureDescriptorGPU: i } = r;
          if (!e.isRenderTargetTexture && void 0 !== i) {
            if (e.isDataTexture)
              this._copyBufferToTexture(t.image, r.texture, i, 0, e.flipY);
            else if (
              e.isArrayTexture ||
              e.isDataArrayTexture ||
              e.isData3DTexture
            )
              for (let s = 0; s < t.image.depth; s++)
                this._copyBufferToTexture(t.image, r.texture, i, s, e.flipY, s);
            else
              e.isCompressedTexture || e.isCompressedArrayTexture
                ? this._copyCompressedBufferToTexture(e.mipmaps, r.texture, i)
                : e.isCubeTexture
                ? this._copyCubeMapToTexture(
                    t.images,
                    r.texture,
                    i,
                    e.flipY,
                    e.premultiplyAlpha
                  )
                : this._copyImageToTexture(
                    t.image,
                    r.texture,
                    i,
                    0,
                    e.flipY,
                    e.premultiplyAlpha
                  );
            (r.version = e.version), e.onUpdate && e.onUpdate(e);
          }
        }
        async copyTextureToBuffer(e, t, r, i, s, n) {
          let a = this.backend.device,
            o = this.backend.get(e),
            l = o.texture,
            u = o.textureDescriptorGPU.format,
            d = this._getBytesPerTexel(u),
            h = i * d;
          h = 256 * Math.ceil(h / 256);
          let c = a.createBuffer({
              size: i * s * d,
              usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
            }),
            p = a.createCommandEncoder();
          p.copyTextureToBuffer(
            { texture: l, origin: { x: t, y: r, z: n } },
            { buffer: c, bytesPerRow: h },
            { width: i, height: s }
          );
          let g = this._getTypedArrayType(u);
          return (
            a.queue.submit([p.finish()]),
            await c.mapAsync(GPUMapMode.READ),
            new g(c.getMappedRange())
          );
        }
        _getDefaultTextureGPU(e) {
          let t = this.defaultTexture[e];
          if (void 0 === t) {
            let r = new u.gPd();
            (r.minFilter = u.hxR),
              (r.magFilter = u.hxR),
              this.createTexture(r, { width: 1, height: 1, format: e }),
              (this.defaultTexture[e] = t = r);
          }
          return this.backend.get(t).texture;
        }
        _getDefaultCubeTextureGPU(e) {
          let t = this.defaultTexture[e];
          if (void 0 === t) {
            let r = new u.b4q();
            (r.minFilter = u.hxR),
              (r.magFilter = u.hxR),
              this.createTexture(r, { width: 1, height: 1, depth: 6 }),
              (this.defaultCubeTexture[e] = t = r);
          }
          return this.backend.get(t).texture;
        }
        _copyCubeMapToTexture(e, t, r, i, s) {
          for (let n = 0; n < 6; n++) {
            let a = e[n],
              o = !0 === i ? fF[n] : n;
            a.isDataTexture
              ? this._copyBufferToTexture(a.image, t, r, o, i)
              : this._copyImageToTexture(a, t, r, o, i, s);
          }
        }
        _copyImageToTexture(e, t, r, i, s, n) {
          this.backend.device.queue.copyExternalImageToTexture(
            { source: e, flipY: s },
            {
              texture: t,
              mipLevel: 0,
              origin: { x: 0, y: 0, z: i },
              premultipliedAlpha: n,
            },
            {
              width: r.size.width,
              height: r.size.height,
              depthOrArrayLayers: 1,
            }
          );
        }
        _getPassUtils() {
          let e = this._passUtils;
          return (
            null === e && (this._passUtils = e = new fB(this.backend.device)), e
          );
        }
        _generateMipmaps(e, t, r = 0) {
          this._getPassUtils().generateMipmaps(e, t, r);
        }
        _flipY(e, t, r = 0) {
          this._getPassUtils().flipY(e, t, r);
        }
        _copyBufferToTexture(e, t, r, i, s, n = 0) {
          let a = this.backend.device,
            o = e.data,
            l = this._getBytesPerTexel(r.format),
            u = e.width * l;
          a.queue.writeTexture(
            { texture: t, mipLevel: 0, origin: { x: 0, y: 0, z: i } },
            o,
            { offset: e.width * e.height * l * n, bytesPerRow: u },
            { width: e.width, height: e.height, depthOrArrayLayers: 1 }
          ),
            !0 === s && this._flipY(t, r, i);
        }
        _copyCompressedBufferToTexture(e, t, r) {
          let i = this.backend.device,
            s = this._getBlockData(r.format),
            n = r.size.depthOrArrayLayers > 1;
          for (let a = 0; a < e.length; a++) {
            let o = e[a],
              l = o.width,
              u = o.height,
              d = n ? r.size.depthOrArrayLayers : 1,
              h = Math.ceil(l / s.width) * s.byteLength,
              c = h * Math.ceil(u / s.height);
            for (let e = 0; e < d; e++)
              i.queue.writeTexture(
                { texture: t, mipLevel: a, origin: { x: 0, y: 0, z: e } },
                o.data,
                {
                  offset: e * c,
                  bytesPerRow: h,
                  rowsPerImage: Math.ceil(u / s.height),
                },
                {
                  width: Math.ceil(l / s.width) * s.width,
                  height: Math.ceil(u / s.height) * s.height,
                  depthOrArrayLayers: 1,
                }
              );
          }
        }
        _getBlockData(e) {
          return e === fh.BC1RGBAUnorm || e === fh.BC1RGBAUnormSRGB
            ? { byteLength: 8, width: 4, height: 4 }
            : e === fh.BC2RGBAUnorm ||
              e === fh.BC2RGBAUnormSRGB ||
              e === fh.BC3RGBAUnorm ||
              e === fh.BC3RGBAUnormSRGB
            ? { byteLength: 16, width: 4, height: 4 }
            : e === fh.BC4RUnorm || e === fh.BC4RSnorm
            ? { byteLength: 8, width: 4, height: 4 }
            : e === fh.BC5RGUnorm ||
              e === fh.BC5RGSnorm ||
              e === fh.BC6HRGBUFloat ||
              e === fh.BC6HRGBFloat ||
              e === fh.BC7RGBAUnorm ||
              e === fh.BC7RGBAUnormSRGB
            ? { byteLength: 16, width: 4, height: 4 }
            : e === fh.ETC2RGB8Unorm ||
              e === fh.ETC2RGB8UnormSRGB ||
              e === fh.ETC2RGB8A1Unorm ||
              e === fh.ETC2RGB8A1UnormSRGB
            ? { byteLength: 8, width: 4, height: 4 }
            : e === fh.ETC2RGBA8Unorm || e === fh.ETC2RGBA8UnormSRGB
            ? { byteLength: 16, width: 4, height: 4 }
            : e === fh.EACR11Unorm || e === fh.EACR11Snorm
            ? { byteLength: 8, width: 4, height: 4 }
            : e === fh.EACRG11Unorm ||
              e === fh.EACRG11Snorm ||
              e === fh.ASTC4x4Unorm ||
              e === fh.ASTC4x4UnormSRGB
            ? { byteLength: 16, width: 4, height: 4 }
            : e === fh.ASTC5x4Unorm || e === fh.ASTC5x4UnormSRGB
            ? { byteLength: 16, width: 5, height: 4 }
            : e === fh.ASTC5x5Unorm || e === fh.ASTC5x5UnormSRGB
            ? { byteLength: 16, width: 5, height: 5 }
            : e === fh.ASTC6x5Unorm || e === fh.ASTC6x5UnormSRGB
            ? { byteLength: 16, width: 6, height: 5 }
            : e === fh.ASTC6x6Unorm || e === fh.ASTC6x6UnormSRGB
            ? { byteLength: 16, width: 6, height: 6 }
            : e === fh.ASTC8x5Unorm || e === fh.ASTC8x5UnormSRGB
            ? { byteLength: 16, width: 8, height: 5 }
            : e === fh.ASTC8x6Unorm || e === fh.ASTC8x6UnormSRGB
            ? { byteLength: 16, width: 8, height: 6 }
            : e === fh.ASTC8x8Unorm || e === fh.ASTC8x8UnormSRGB
            ? { byteLength: 16, width: 8, height: 8 }
            : e === fh.ASTC10x5Unorm || e === fh.ASTC10x5UnormSRGB
            ? { byteLength: 16, width: 10, height: 5 }
            : e === fh.ASTC10x6Unorm || e === fh.ASTC10x6UnormSRGB
            ? { byteLength: 16, width: 10, height: 6 }
            : e === fh.ASTC10x8Unorm || e === fh.ASTC10x8UnormSRGB
            ? { byteLength: 16, width: 10, height: 8 }
            : e === fh.ASTC10x10Unorm || e === fh.ASTC10x10UnormSRGB
            ? { byteLength: 16, width: 10, height: 10 }
            : e === fh.ASTC12x10Unorm || e === fh.ASTC12x10UnormSRGB
            ? { byteLength: 16, width: 12, height: 10 }
            : e === fh.ASTC12x12Unorm || e === fh.ASTC12x12UnormSRGB
            ? { byteLength: 16, width: 12, height: 12 }
            : void 0;
        }
        _convertAddressMode(e) {
          let t = fc.ClampToEdge;
          return (
            e === u.GJx
              ? (t = fc.Repeat)
              : e === u.kTW && (t = fc.MirrorRepeat),
            t
          );
        }
        _convertFilterMode(e) {
          let t = fp.Linear;
          return (
            (e === u.hxR || e === u.pHI || e === u.Cfg) && (t = fp.Nearest), t
          );
        }
        _getBytesPerTexel(e) {
          return e === fh.R8Unorm ||
            e === fh.R8Snorm ||
            e === fh.R8Uint ||
            e === fh.R8Sint
            ? 1
            : e === fh.R16Uint ||
              e === fh.R16Sint ||
              e === fh.R16Float ||
              e === fh.RG8Unorm ||
              e === fh.RG8Snorm ||
              e === fh.RG8Uint ||
              e === fh.RG8Sint
            ? 2
            : e === fh.R32Uint ||
              e === fh.R32Sint ||
              e === fh.R32Float ||
              e === fh.RG16Uint ||
              e === fh.RG16Sint ||
              e === fh.RG16Float ||
              e === fh.RGBA8Unorm ||
              e === fh.RGBA8UnormSRGB ||
              e === fh.RGBA8Snorm ||
              e === fh.RGBA8Uint ||
              e === fh.RGBA8Sint ||
              e === fh.BGRA8Unorm ||
              e === fh.BGRA8UnormSRGB ||
              e === fh.RGB9E5UFloat ||
              e === fh.RGB10A2Unorm ||
              e === fh.RG11B10UFloat ||
              e === fh.Depth32Float ||
              e === fh.Depth24Plus ||
              e === fh.Depth24PlusStencil8 ||
              e === fh.Depth32FloatStencil8
            ? 4
            : e === fh.RG32Uint ||
              e === fh.RG32Sint ||
              e === fh.RG32Float ||
              e === fh.RGBA16Uint ||
              e === fh.RGBA16Sint ||
              e === fh.RGBA16Float
            ? 8
            : e === fh.RGBA32Uint || e === fh.RGBA32Sint || e === fh.RGBA32Float
            ? 16
            : void 0;
        }
        _getTypedArrayType(e) {
          return e === fh.R8Uint
            ? Uint8Array
            : e === fh.R8Sint
            ? Int8Array
            : e === fh.R8Unorm
            ? Uint8Array
            : e === fh.R8Snorm
            ? Int8Array
            : e === fh.RG8Uint
            ? Uint8Array
            : e === fh.RG8Sint
            ? Int8Array
            : e === fh.RG8Unorm
            ? Uint8Array
            : e === fh.RG8Snorm
            ? Int8Array
            : e === fh.RGBA8Uint
            ? Uint8Array
            : e === fh.RGBA8Sint
            ? Int8Array
            : e === fh.RGBA8Unorm
            ? Uint8Array
            : e === fh.RGBA8Snorm
            ? Int8Array
            : e === fh.R16Uint
            ? Uint16Array
            : e === fh.R16Sint
            ? Int16Array
            : e === fh.RG16Uint
            ? Uint16Array
            : e === fh.RG16Sint
            ? Int16Array
            : e === fh.RGBA16Uint
            ? Uint16Array
            : e === fh.RGBA16Sint
            ? Int16Array
            : e === fh.R16Float || e === fh.RG16Float || e === fh.RGBA16Float
            ? Uint16Array
            : e === fh.R32Uint
            ? Uint32Array
            : e === fh.R32Sint
            ? Int32Array
            : e === fh.R32Float
            ? Float32Array
            : e === fh.RG32Uint
            ? Uint32Array
            : e === fh.RG32Sint
            ? Int32Array
            : e === fh.RG32Float
            ? Float32Array
            : e === fh.RGBA32Uint
            ? Uint32Array
            : e === fh.RGBA32Sint
            ? Int32Array
            : e === fh.RGBA32Float
            ? Float32Array
            : e === fh.BGRA8Unorm || e === fh.BGRA8UnormSRGB
            ? Uint8Array
            : e === fh.RGB10A2Unorm ||
              e === fh.RGB9E5UFloat ||
              e === fh.RG11B10UFloat
            ? Uint32Array
            : e === fh.Depth32Float
            ? Float32Array
            : e === fh.Depth24Plus || e === fh.Depth24PlusStencil8
            ? Uint32Array
            : e === fh.Depth32FloatStencil8
            ? Float32Array
            : void 0;
        }
        _getDimension(e) {
          return e.is3DTexture || e.isData3DTexture ? fv.ThreeD : fv.TwoD;
        }
      }
      function fI(e, t = null) {
        let r,
          i = e.format,
          s = e.type,
          n = e.colorSpace,
          a = u.ppV.getTransfer(n);
        if (!0 === e.isCompressedTexture || !0 === e.isCompressedArrayTexture)
          switch (i) {
            case u.Nz6:
              r = a === u.KLL ? fh.BC1RGBAUnormSRGB : fh.BC1RGBAUnorm;
              break;
            case u.jR7:
              r = a === u.KLL ? fh.BC2RGBAUnormSRGB : fh.BC2RGBAUnorm;
              break;
            case u.BXX:
              r = a === u.KLL ? fh.BC3RGBAUnormSRGB : fh.BC3RGBAUnorm;
              break;
            case u.Riy:
              r = a === u.KLL ? fh.ETC2RGB8UnormSRGB : fh.ETC2RGB8Unorm;
              break;
            case u.KDk:
              r = a === u.KLL ? fh.ETC2RGBA8UnormSRGB : fh.ETC2RGBA8Unorm;
              break;
            case u.qa3:
              r = a === u.KLL ? fh.ASTC4x4UnormSRGB : fh.ASTC4x4Unorm;
              break;
            case u.B_h:
              r = a === u.KLL ? fh.ASTC5x4UnormSRGB : fh.ASTC5x4Unorm;
              break;
            case u.czI:
              r = a === u.KLL ? fh.ASTC5x5UnormSRGB : fh.ASTC5x5Unorm;
              break;
            case u.rSH:
              r = a === u.KLL ? fh.ASTC6x5UnormSRGB : fh.ASTC6x5Unorm;
              break;
            case u.Qrf:
              r = a === u.KLL ? fh.ASTC6x6UnormSRGB : fh.ASTC6x6Unorm;
              break;
            case u.psI:
              r = a === u.KLL ? fh.ASTC8x5UnormSRGB : fh.ASTC8x5Unorm;
              break;
            case u.a5J:
              r = a === u.KLL ? fh.ASTC8x6UnormSRGB : fh.ASTC8x6Unorm;
              break;
            case u._QJ:
              r = a === u.KLL ? fh.ASTC8x8UnormSRGB : fh.ASTC8x8Unorm;
              break;
            case u.uB5:
              r = a === u.KLL ? fh.ASTC10x5UnormSRGB : fh.ASTC10x5Unorm;
              break;
            case u.lyL:
              r = a === u.KLL ? fh.ASTC10x6UnormSRGB : fh.ASTC10x6Unorm;
              break;
            case u.bC7:
              r = a === u.KLL ? fh.ASTC10x8UnormSRGB : fh.ASTC10x8Unorm;
              break;
            case u.y3Z:
              r = a === u.KLL ? fh.ASTC10x10UnormSRGB : fh.ASTC10x10Unorm;
              break;
            case u.ojs:
              r = a === u.KLL ? fh.ASTC12x10UnormSRGB : fh.ASTC12x10Unorm;
              break;
            case u.S$4:
              r = a === u.KLL ? fh.ASTC12x12UnormSRGB : fh.ASTC12x12Unorm;
              break;
            case u.GWd:
              r = a === u.KLL ? fh.RGBA8UnormSRGB : fh.RGBA8Unorm;
              break;
            default:
              console.error("WebGPURenderer: Unsupported texture format.", i);
          }
        else
          switch (i) {
            case u.GWd:
              switch (s) {
                case u.tJf:
                  r = fh.RGBA8Snorm;
                  break;
                case u.fBL:
                  r = fh.RGBA16Sint;
                  break;
                case u.cHt:
                  r = fh.RGBA16Uint;
                  break;
                case u.bkx:
                  r = fh.RGBA32Uint;
                  break;
                case u.Yuy:
                  r = fh.RGBA32Sint;
                  break;
                case u.OUM:
                  r = a === u.KLL ? fh.RGBA8UnormSRGB : fh.RGBA8Unorm;
                  break;
                case u.ix0:
                  r = fh.RGBA16Float;
                  break;
                case u.RQf:
                  r = fh.RGBA32Float;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RGBAFormat.",
                    s
                  );
              }
              break;
            case u.HIg:
              s === u.Dmk
                ? (r = fh.RGB9E5UFloat)
                : console.error(
                    "WebGPURenderer: Unsupported texture type with RGBFormat.",
                    s
                  );
              break;
            case u.VT0:
              switch (s) {
                case u.tJf:
                  r = fh.R8Snorm;
                  break;
                case u.fBL:
                  r = fh.R16Sint;
                  break;
                case u.cHt:
                  r = fh.R16Uint;
                  break;
                case u.bkx:
                  r = fh.R32Uint;
                  break;
                case u.Yuy:
                  r = fh.R32Sint;
                  break;
                case u.OUM:
                  r = fh.R8Unorm;
                  break;
                case u.ix0:
                  r = fh.R16Float;
                  break;
                case u.RQf:
                  r = fh.R32Float;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RedFormat.",
                    s
                  );
              }
              break;
            case u.paN:
              switch (s) {
                case u.tJf:
                  r = fh.RG8Snorm;
                  break;
                case u.fBL:
                  r = fh.RG16Sint;
                  break;
                case u.cHt:
                  r = fh.RG16Uint;
                  break;
                case u.bkx:
                  r = fh.RG32Uint;
                  break;
                case u.Yuy:
                  r = fh.RG32Sint;
                  break;
                case u.OUM:
                  r = fh.RG8Unorm;
                  break;
                case u.ix0:
                  r = fh.RG16Float;
                  break;
                case u.RQf:
                  r = fh.RG32Float;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RGFormat.",
                    s
                  );
              }
              break;
            case u.zdS:
              switch (s) {
                case u.cHt:
                  r = fh.Depth16Unorm;
                  break;
                case u.bkx:
                  r = fh.Depth24Plus;
                  break;
                case u.RQf:
                  r = fh.Depth32Float;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with DepthFormat.",
                    s
                  );
              }
              break;
            case u.dcC:
              switch (s) {
                case u.V3x:
                  r = fh.Depth24PlusStencil8;
                  break;
                case u.RQf:
                  t &&
                    !1 === t.features.has(fA.Depth32FloatStencil8) &&
                    console.error(
                      'WebGPURenderer: Depth textures with DepthStencilFormat + FloatType can only be used with the "depth32float-stencil8" GPU feature.'
                    ),
                    (r = fh.Depth32FloatStencil8);
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with DepthStencilFormat.",
                    s
                  );
              }
              break;
            case u.ZQM:
              switch (s) {
                case u.Yuy:
                  r = fh.R32Sint;
                  break;
                case u.bkx:
                  r = fh.R32Uint;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RedIntegerFormat.",
                    s
                  );
              }
              break;
            case u.TkQ:
              switch (s) {
                case u.Yuy:
                  r = fh.RG32Sint;
                  break;
                case u.bkx:
                  r = fh.RG32Uint;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RGIntegerFormat.",
                    s
                  );
              }
              break;
            case u.c90:
              switch (s) {
                case u.Yuy:
                  r = fh.RGBA32Sint;
                  break;
                case u.bkx:
                  r = fh.RGBA32Uint;
                  break;
                default:
                  console.error(
                    "WebGPURenderer: Unsupported texture type with RGBAIntegerFormat.",
                    s
                  );
              }
              break;
            default:
              console.error("WebGPURenderer: Unsupported texture format.", i);
          }
        return r;
      }
      let fU =
          /^[fn]*\s*([a-z_0-9]+)?\s*\(([\s\S]*?)\)\s*[\-\>]*\s*([a-z_0-9]+(?:<[\s\S]+?>)?)/i,
        fD = /([a-z_0-9]+)\s*:\s*([a-z_0-9]+(?:<[\s\S]+?>)?)/gi,
        fV = {
          f32: "float",
          i32: "int",
          u32: "uint",
          bool: "bool",
          "vec2<f32>": "vec2",
          "vec2<i32>": "ivec2",
          "vec2<u32>": "uvec2",
          "vec2<bool>": "bvec2",
          vec2f: "vec2",
          vec2i: "ivec2",
          vec2u: "uvec2",
          vec2b: "bvec2",
          "vec3<f32>": "vec3",
          "vec3<i32>": "ivec3",
          "vec3<u32>": "uvec3",
          "vec3<bool>": "bvec3",
          vec3f: "vec3",
          vec3i: "ivec3",
          vec3u: "uvec3",
          vec3b: "bvec3",
          "vec4<f32>": "vec4",
          "vec4<i32>": "ivec4",
          "vec4<u32>": "uvec4",
          "vec4<bool>": "bvec4",
          vec4f: "vec4",
          vec4i: "ivec4",
          vec4u: "uvec4",
          vec4b: "bvec4",
          "mat2x2<f32>": "mat2",
          mat2x2f: "mat2",
          "mat3x3<f32>": "mat3",
          mat3x3f: "mat3",
          "mat4x4<f32>": "mat4",
          mat4x4f: "mat4",
          sampler: "sampler",
          texture_1d: "texture",
          texture_2d: "texture",
          texture_2d_array: "texture",
          texture_multisampled_2d: "cubeTexture",
          texture_depth_2d: "depthTexture",
          texture_depth_2d_array: "depthTexture",
          texture_depth_multisampled_2d: "depthTexture",
          texture_depth_cube: "depthTexture",
          texture_depth_cube_array: "depthTexture",
          texture_3d: "texture3D",
          texture_cube: "cubeTexture",
          texture_cube_array: "cubeTexture",
          texture_storage_1d: "storageTexture",
          texture_storage_2d: "storageTexture",
          texture_storage_2d_array: "storageTexture",
          texture_storage_3d: "storageTexture",
        };
      class fO extends gJ {
        constructor(e) {
          let {
            type: t,
            inputs: r,
            name: i,
            inputsCode: s,
            blockCode: n,
            outputType: a,
          } = ((e) => {
            let t = (e = e.trim()).match(fU);
            if (null !== t && 4 === t.length) {
              let r = t[2],
                i = [],
                s = null;
              for (; null !== (s = fD.exec(r)); )
                i.push({ name: s[1], type: s[2] });
              let n = [];
              for (let e = 0; e < i.length; e++) {
                let { name: t, type: r } = i[e],
                  s = r;
                s.startsWith("ptr")
                  ? (s = "pointer")
                  : (s.startsWith("texture") && (s = r.split("<")[0]),
                    (s = fV[s])),
                  n.push(new gO(s, t));
              }
              let a = e.substring(t[0].length),
                o = t[3] || "void",
                l = void 0 !== t[1] ? t[1] : "";
              return {
                type: fV[o] || o,
                inputs: n,
                name: l,
                inputsCode: r,
                blockCode: a,
                outputType: o,
              };
            }
            throw Error("FunctionNode: Function is not a WGSL code.");
          })(e);
          super(t, r, i),
            (this.inputsCode = s),
            (this.blockCode = n),
            (this.outputType = a);
        }
        getCode(e = this.name) {
          let t = "void" !== this.outputType ? "-> " + this.outputType : "";
          return `fn ${e} ( ${this.inputsCode.trim()} ) ${t}` + this.blockCode;
        }
      }
      class fG extends gZ {
        parseFunction(e) {
          return new fO(e);
        }
      }
      let fk =
          "undefined" != typeof self
            ? self.GPUShaderStage
            : { VERTEX: 1, FRAGMENT: 2, COMPUTE: 4 },
        fz = {
          [M.READ_ONLY]: "read",
          [M.WRITE_ONLY]: "write",
          [M.READ_WRITE]: "read_write",
        },
        f$ = { [u.GJx]: "repeat", [u.ghU]: "clamp", [u.kTW]: "mirror" },
        fW = {
          vertex: fk ? fk.VERTEX : 1,
          fragment: fk ? fk.FRAGMENT : 2,
          compute: fk ? fk.COMPUTE : 4,
        },
        fH = { instance: !0, swizzleAssign: !1, storageBuffer: !0 },
        fq = { "^^": "tsl_xor" },
        fj = {
          float: "f32",
          int: "i32",
          uint: "u32",
          bool: "bool",
          color: "vec3<f32>",
          vec2: "vec2<f32>",
          ivec2: "vec2<i32>",
          uvec2: "vec2<u32>",
          bvec2: "vec2<bool>",
          vec3: "vec3<f32>",
          ivec3: "vec3<i32>",
          uvec3: "vec3<u32>",
          bvec3: "vec3<bool>",
          vec4: "vec4<f32>",
          ivec4: "vec4<i32>",
          uvec4: "vec4<u32>",
          bvec4: "vec4<bool>",
          mat2: "mat2x2<f32>",
          mat3: "mat3x3<f32>",
          mat4: "mat4x4<f32>",
        },
        fX = {},
        fK = {
          tsl_xor: new cr(
            "fn tsl_xor( a : bool, b : bool ) -> bool { return ( a || b ) && !( a && b ); }"
          ),
          mod_float: new cr(
            "fn tsl_mod_float( x : f32, y : f32 ) -> f32 { return x - y * floor( x / y ); }"
          ),
          mod_vec2: new cr(
            "fn tsl_mod_vec2( x : vec2f, y : vec2f ) -> vec2f { return x - y * floor( x / y ); }"
          ),
          mod_vec3: new cr(
            "fn tsl_mod_vec3( x : vec3f, y : vec3f ) -> vec3f { return x - y * floor( x / y ); }"
          ),
          mod_vec4: new cr(
            "fn tsl_mod_vec4( x : vec4f, y : vec4f ) -> vec4f { return x - y * floor( x / y ); }"
          ),
          equals_bool: new cr(
            "fn tsl_equals_bool( a : bool, b : bool ) -> bool { return a == b; }"
          ),
          equals_bvec2: new cr(
            "fn tsl_equals_bvec2( a : vec2f, b : vec2f ) -> vec2<bool> { return vec2<bool>( a.x == b.x, a.y == b.y ); }"
          ),
          equals_bvec3: new cr(
            "fn tsl_equals_bvec3( a : vec3f, b : vec3f ) -> vec3<bool> { return vec3<bool>( a.x == b.x, a.y == b.y, a.z == b.z ); }"
          ),
          equals_bvec4: new cr(
            "fn tsl_equals_bvec4( a : vec4f, b : vec4f ) -> vec4<bool> { return vec4<bool>( a.x == b.x, a.y == b.y, a.z == b.z, a.w == b.w ); }"
          ),
          repeatWrapping_float: new cr(
            "fn tsl_repeatWrapping_float( coord: f32 ) -> f32 { return fract( coord ); }"
          ),
          mirrorWrapping_float: new cr(
            "fn tsl_mirrorWrapping_float( coord: f32 ) -> f32 { let mirrored = fract( coord * 0.5 ) * 2.0; return 1.0 - abs( 1.0 - mirrored ); }"
          ),
          clampWrapping_float: new cr(
            "fn tsl_clampWrapping_float( coord: f32 ) -> f32 { return clamp( coord, 0.0, 1.0 ); }"
          ),
          biquadraticTexture: new cr(`
fn tsl_biquadraticTexture( map : texture_2d<f32>, coord : vec2f, iRes : vec2u, level : u32 ) -> vec4f {

	let res = vec2f( iRes );

	let uvScaled = coord * res;
	let uvWrapping = ( ( uvScaled % res ) + res ) % res;

	// https://www.shadertoy.com/view/WtyXRy

	let uv = uvWrapping - 0.5;
	let iuv = floor( uv );
	let f = fract( uv );

	let rg1 = textureLoad( map, vec2u( iuv + vec2( 0.5, 0.5 ) ) % iRes, level );
	let rg2 = textureLoad( map, vec2u( iuv + vec2( 1.5, 0.5 ) ) % iRes, level );
	let rg3 = textureLoad( map, vec2u( iuv + vec2( 0.5, 1.5 ) ) % iRes, level );
	let rg4 = textureLoad( map, vec2u( iuv + vec2( 1.5, 1.5 ) ) % iRes, level );

	return mix( mix( rg1, rg2, f.x ), mix( rg3, rg4, f.x ), f.y );

}
`),
        },
        fQ = {
          dFdx: "dpdx",
          dFdy: "- dpdy",
          mod_float: "tsl_mod_float",
          mod_vec2: "tsl_mod_vec2",
          mod_vec3: "tsl_mod_vec3",
          mod_vec4: "tsl_mod_vec4",
          equals_bool: "tsl_equals_bool",
          equals_bvec2: "tsl_equals_bvec2",
          equals_bvec3: "tsl_equals_bvec3",
          equals_bvec4: "tsl_equals_bvec4",
          inversesqrt: "inverseSqrt",
          bitcast: "bitcast<f32>",
        };
      "undefined" != typeof navigator &&
        /Windows/g.test(navigator.userAgent) &&
        ((fK.pow_float = new cr(
          "fn tsl_pow_float( a : f32, b : f32 ) -> f32 { return select( -pow( -a, b ), pow( a, b ), a > 0.0 ); }"
        )),
        (fK.pow_vec2 = new cr(
          "fn tsl_pow_vec2( a : vec2f, b : vec2f ) -> vec2f { return vec2f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ) ); }",
          [fK.pow_float]
        )),
        (fK.pow_vec3 = new cr(
          "fn tsl_pow_vec3( a : vec3f, b : vec3f ) -> vec3f { return vec3f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ) ); }",
          [fK.pow_float]
        )),
        (fK.pow_vec4 = new cr(
          "fn tsl_pow_vec4( a : vec4f, b : vec4f ) -> vec4f { return vec4f( tsl_pow_float( a.x, b.x ), tsl_pow_float( a.y, b.y ), tsl_pow_float( a.z, b.z ), tsl_pow_float( a.w, b.w ) ); }",
          [fK.pow_float]
        )),
        (fQ.pow_float = "tsl_pow_float"),
        (fQ.pow_vec2 = "tsl_pow_vec2"),
        (fQ.pow_vec3 = "tsl_pow_vec3"),
        (fQ.pow_vec4 = "tsl_pow_vec4"));
      let fY = "";
      !0 !==
        ("undefined" != typeof navigator &&
          /Firefox|Deno/g.test(navigator.userAgent)) &&
        (fY += "diagnostic( off, derivative_uniformity );\n");
      class fZ extends gD {
        constructor(e, t) {
          super(e, t, new fG()),
            (this.uniformGroups = {}),
            (this.builtins = {}),
            (this.directives = {}),
            (this.scopedArrays = new Map());
        }
        _generateTextureSample(e, t, r, i, s = this.shaderStage) {
          return "fragment" !== s
            ? this.generateTextureSampleLevel(e, t, r, "0", i)
            : i
            ? `textureSample( ${t}, ${t}_sampler, ${r}, ${i} )`
            : `textureSample( ${t}, ${t}_sampler, ${r} )`;
        }
        generateTextureSampleLevel(e, t, r, i, s) {
          return !1 === this.isUnfilterable(e)
            ? `textureSampleLevel( ${t}, ${t}_sampler, ${r}, ${i} )`
            : this.isFilteredTexture(e)
            ? this.generateFilteredTexture(e, t, r, i)
            : this.generateTextureLod(e, t, r, s, i);
        }
        generateWrapFunction(e) {
          let t = `tsl_coord_${f$[e.wrapS]}S_${f$[e.wrapT]}_${
              e.isData3DTexture ? "3d" : "2d"
            }T`,
            r = fX[t];
          if (void 0 === r) {
            let i = [],
              s = e.isData3DTexture ? "vec3f" : "vec2f",
              n = `fn ${t}( coord : ${s} ) -> ${s} {

	return ${s}(
`,
              a = (e, t) => {
                e === u.GJx
                  ? (i.push(fK.repeatWrapping_float),
                    (n += `		tsl_repeatWrapping_float( coord.${t} )`))
                  : e === u.ghU
                  ? (i.push(fK.clampWrapping_float),
                    (n += `		tsl_clampWrapping_float( coord.${t} )`))
                  : e === u.kTW
                  ? (i.push(fK.mirrorWrapping_float),
                    (n += `		tsl_mirrorWrapping_float( coord.${t} )`))
                  : ((n += `		coord.${t}`),
                    console.warn(
                      `WebGPURenderer: Unsupported texture wrap type "${e}" for vertex shader.`
                    ));
              };
            a(e.wrapS, "x"),
              (n += ",\n"),
              a(e.wrapT, "y"),
              e.isData3DTexture && ((n += ",\n"), a(e.wrapR, "z")),
              (n += "\n	);\n\n}\n"),
              (fX[t] = r = new cr(n, i));
          }
          return r.build(this), t;
        }
        generateArrayDeclaration(e, t) {
          return `array< ${this.getType(e)}, ${t} >`;
        }
        generateTextureDimension(e, t, r) {
          let i = this.getDataFromNode(e, this.shaderStage, this.globalCache);
          void 0 === i.dimensionsSnippet && (i.dimensionsSnippet = {});
          let s = i.dimensionsSnippet[r];
          if (void 0 === i.dimensionsSnippet[r]) {
            let n,
              a,
              { primarySamples: o } =
                this.renderer.backend.utils.getTextureSampleData(e);
            (a = e.isData3DTexture ? "vec3<u32>" : "vec2<u32>"),
              (n =
                o > 1 || e.isStorageTexture
                  ? t
                  : `${t}${r ? `, u32( ${r} )` : ""}`),
              (s = new ip(new iJ(`textureDimensions( ${n} )`, a))),
              (i.dimensionsSnippet[r] = s),
              (e.isArrayTexture || e.isDataArrayTexture || e.isData3DTexture) &&
                (i.arrayLayerCount = new ip(
                  new iJ(`textureNumLayers(${t})`, "u32")
                )),
              e.isTextureCube &&
                (i.cubeFaceCount = new ip(new iJ("6u", "u32")));
          }
          return s.build(this);
        }
        generateFilteredTexture(e, t, r, i = "0u") {
          this._include("biquadraticTexture");
          let s = this.generateWrapFunction(e),
            n = this.generateTextureDimension(e, t, i);
          return `tsl_biquadraticTexture( ${t}, ${s}( ${r} ), ${n}, u32( ${i} ) )`;
        }
        generateTextureLod(e, t, r, i, s = "0u") {
          let n = this.generateWrapFunction(e),
            a = this.generateTextureDimension(e, t, s),
            o = e.isData3DTexture ? "vec3" : "vec2",
            l = `${o}<u32>( ${n}( ${r} ) * ${o}<f32>( ${a} ) )`;
          return this.generateTextureLoad(e, t, l, i, s);
        }
        generateTextureLoad(e, t, r, i, s = "0u") {
          let n;
          return (
            i
              ? (n = `textureLoad( ${t}, ${r}, ${i}, u32( ${s} ) )`)
              : ((n = `textureLoad( ${t}, ${r}, u32( ${s} ) )`),
                this.renderer.backend.compatibilityMode &&
                  e.isDepthTexture &&
                  (n += ".x")),
            n
          );
        }
        generateTextureStore(e, t, r, i, s) {
          return i
            ? `textureStore( ${t}, ${r}, ${i}, ${s} )`
            : `textureStore( ${t}, ${r}, ${s} )`;
        }
        isSampleCompare(e) {
          return !0 === e.isDepthTexture && null !== e.compareFunction;
        }
        isUnfilterable(e) {
          return (
            "float" !== this.getComponentTypeFromTexture(e) ||
            (!this.isAvailable("float32Filterable") &&
              !0 === e.isDataTexture &&
              e.type === u.RQf) ||
            (!1 === this.isSampleCompare(e) &&
              e.minFilter === u.hxR &&
              e.magFilter === u.hxR) ||
            this.renderer.backend.utils.getTextureSampleData(e).primarySamples >
              1
          );
        }
        generateTexture(e, t, r, i, s = this.shaderStage) {
          return this.isUnfilterable(e)
            ? this.generateTextureLod(e, t, r, i, "0", s)
            : this._generateTextureSample(e, t, r, i, s);
        }
        generateTextureGrad(e, t, r, i, s, n = this.shaderStage) {
          if ("fragment" === n)
            return `textureSampleGrad( ${t}, ${t}_sampler, ${r},  ${i[0]}, ${i[1]} )`;
          console.error(
            `WebGPURenderer: THREE.TextureNode.gradient() does not support ${n} shader.`
          );
        }
        generateTextureCompare(e, t, r, i, s, n = this.shaderStage) {
          if ("fragment" === n)
            return !0 === e.isDepthTexture && !0 === e.isArrayTexture
              ? `textureSampleCompare( ${t}, ${t}_sampler, ${r}, ${s}, ${i} )`
              : `textureSampleCompare( ${t}, ${t}_sampler, ${r}, ${i} )`;
          console.error(
            `WebGPURenderer: THREE.DepthTexture.compareFunction() does not support ${n} shader.`
          );
        }
        generateTextureLevel(e, t, r, i, s) {
          return !1 === this.isUnfilterable(e)
            ? `textureSampleLevel( ${t}, ${t}_sampler, ${r}, ${i} )`
            : this.isFilteredTexture(e)
            ? this.generateFilteredTexture(e, t, r, i)
            : this.generateTextureLod(e, t, r, s, i);
        }
        generateTextureBias(e, t, r, i, s, n = this.shaderStage) {
          if ("fragment" === n)
            return `textureSampleBias( ${t}, ${t}_sampler, ${r}, ${i} )`;
          console.error(
            `WebGPURenderer: THREE.TextureNode.biasNode does not support ${n} shader.`
          );
        }
        getPropertyName(e, t = this.shaderStage) {
          if (!0 === e.isNodeVarying && !0 === e.needsInterpolation) {
            if ("vertex" === t) return `varyings.${e.name}`;
          } else if (!0 === e.isNodeUniform) {
            let t = e.name,
              r = e.type;
            return "texture" === r ||
              "cubeTexture" === r ||
              "storageTexture" === r ||
              "texture3D" === r
              ? t
              : "buffer" !== r &&
                "storageBuffer" !== r &&
                "indirectStorageBuffer" !== r
              ? e.groupNode.name + "." + t
              : this.isCustomStruct(e)
              ? t
              : t + ".value";
          }
          return super.getPropertyName(e);
        }
        getOutputStructName() {
          return "output";
        }
        getFunctionOperator(e) {
          let t = fq[e];
          return void 0 !== t ? (this._include(t), t) : null;
        }
        getNodeAccess(e, t) {
          return "compute" !== t
            ? !0 === e.isAtomic
              ? (console.warn(
                  "WebGPURenderer: Atomic operations are only supported in compute shaders."
                ),
                M.READ_WRITE)
              : M.READ_ONLY
            : e.access;
        }
        getStorageAccess(e, t) {
          return fz[this.getNodeAccess(e, t)];
        }
        getUniformFromNode(e, t, r, i = null) {
          let s = super.getUniformFromNode(e, t, r, i),
            n = this.getDataFromNode(e, r, this.globalCache);
          if (void 0 === n.uniformGPU) {
            let a,
              o = e.groupNode,
              l = o.name,
              u = this.getBindGroupArray(l, r);
            if (
              "texture" === t ||
              "cubeTexture" === t ||
              "storageTexture" === t ||
              "texture3D" === t
            ) {
              let i = null,
                n = this.getNodeAccess(e, r);
              if (
                ("texture" === t || "storageTexture" === t
                  ? (i =
                      !0 === e.value.is3DTexture
                        ? new mO(s.name, s.node, o, n)
                        : new mD(s.name, s.node, o, n))
                  : "cubeTexture" === t
                  ? (i = new mV(s.name, s.node, o, n))
                  : "texture3D" === t && (i = new mO(s.name, s.node, o, n)),
                (i.store = !0 === e.isStorageTextureNode),
                i.setVisibility(fW[r]),
                !1 === this.isUnfilterable(e.value) && !1 === i.store)
              ) {
                let e = new fE(`${s.name}_sampler`, s.node, o);
                e.setVisibility(fW[r]), u.push(e, i), (a = [e, i]);
              } else u.push(i), (a = [i]);
            } else if (
              "buffer" === t ||
              "storageBuffer" === t ||
              "indirectStorageBuffer" === t
            ) {
              let n = new ("buffer" === t ? mM : fM)(e, o);
              n.setVisibility(fW[r]),
                u.push(n),
                (a = n),
                (s.name = i || "NodeBuffer_" + s.id);
            } else {
              let e = this.uniformGroups[r] || (this.uniformGroups[r] = {}),
                i = e[l];
              void 0 === i &&
                ((i = new mF(l, o)).setVisibility(fW[r]),
                (e[l] = i),
                u.push(i)),
                (a = this.getNodeUniform(s, t)),
                i.addUniform(a);
            }
            n.uniformGPU = a;
          }
          return s;
        }
        getBuiltin(e, t, r, i = this.shaderStage) {
          let s = this.builtins[i] || (this.builtins[i] = new Map());
          return (
            !1 === s.has(e) && s.set(e, { name: e, property: t, type: r }), t
          );
        }
        hasBuiltin(e, t = this.shaderStage) {
          return void 0 !== this.builtins[t] && this.builtins[t].has(e);
        }
        getVertexIndex() {
          return "vertex" === this.shaderStage
            ? this.getBuiltin("vertex_index", "vertexIndex", "u32", "attribute")
            : "vertexIndex";
        }
        buildFunctionCode(e) {
          let t = e.layout,
            r = this.flowShaderNode(e),
            i = [];
          for (let e of t.inputs) i.push(e.name + " : " + this.getType(e.type));
          let s = `fn ${t.name}( ${i.join(", ")} ) -> ${this.getType(t.type)} {
${r.vars}
${r.code}
`;
          return (
            r.result &&
              (s += `	return ${r.result};
`),
            (s += "\n}\n")
          );
        }
        getInstanceIndex() {
          return "vertex" === this.shaderStage
            ? this.getBuiltin(
                "instance_index",
                "instanceIndex",
                "u32",
                "attribute"
              )
            : "instanceIndex";
        }
        getInvocationLocalIndex() {
          return this.getBuiltin(
            "local_invocation_index",
            "invocationLocalIndex",
            "u32",
            "attribute"
          );
        }
        getSubgroupSize() {
          return (
            this.enableSubGroups(),
            this.getBuiltin("subgroup_size", "subgroupSize", "u32", "attribute")
          );
        }
        getInvocationSubgroupIndex() {
          return (
            this.enableSubGroups(),
            this.getBuiltin(
              "subgroup_invocation_id",
              "invocationSubgroupIndex",
              "u32",
              "attribute"
            )
          );
        }
        getSubgroupIndex() {
          return (
            this.enableSubGroups(),
            this.getBuiltin("subgroup_id", "subgroupIndex", "u32", "attribute")
          );
        }
        getDrawIndex() {
          return null;
        }
        getFrontFacing() {
          return this.getBuiltin("front_facing", "isFront", "bool");
        }
        getFragCoord() {
          return this.getBuiltin("position", "fragCoord", "vec4<f32>") + ".xy";
        }
        getFragDepth() {
          return (
            "output." + this.getBuiltin("frag_depth", "depth", "f32", "output")
          );
        }
        getClipDistance() {
          return "varyings.hw_clip_distances";
        }
        isFlipY() {
          return !1;
        }
        enableDirective(e, t = this.shaderStage) {
          (this.directives[t] || (this.directives[t] = new Set())).add(e);
        }
        getDirectives(e) {
          let t = [],
            r = this.directives[e];
          if (void 0 !== r) for (let e of r) t.push(`enable ${e};`);
          return t.join("\n");
        }
        enableSubGroups() {
          this.enableDirective("subgroups");
        }
        enableSubgroupsF16() {
          this.enableDirective("subgroups-f16");
        }
        enableClipDistances() {
          this.enableDirective("clip_distances");
        }
        enableShaderF16() {
          this.enableDirective("f16");
        }
        enableDualSourceBlending() {
          this.enableDirective("dual_source_blending");
        }
        enableHardwareClipping(e) {
          this.enableClipDistances(),
            this.getBuiltin(
              "clip_distances",
              "hw_clip_distances",
              `array<f32, ${e} >`,
              "vertex"
            );
        }
        getBuiltins(e) {
          let t = [],
            r = this.builtins[e];
          if (void 0 !== r)
            for (let { name: e, property: i, type: s } of r.values())
              t.push(`@builtin( ${e} ) ${i} : ${s}`);
          return t.join(",\n	");
        }
        getScopedArray(e, t, r, i) {
          return (
            !1 === this.scopedArrays.has(e) &&
              this.scopedArrays.set(e, {
                name: e,
                scope: t,
                bufferType: r,
                bufferCount: i,
              }),
            e
          );
        }
        getScopedArrays(e) {
          if ("compute" !== e) return;
          let t = [];
          for (let {
            name: e,
            scope: r,
            bufferType: i,
            bufferCount: s,
          } of this.scopedArrays.values()) {
            let n = this.getType(i);
            t.push(`var<${r}> ${e}: array< ${n}, ${s} >;`);
          }
          return t.join("\n");
        }
        getAttributes(e) {
          let t = [];
          if (
            ("compute" === e &&
              (this.getBuiltin(
                "global_invocation_id",
                "globalId",
                "vec3<u32>",
                "attribute"
              ),
              this.getBuiltin(
                "workgroup_id",
                "workgroupId",
                "vec3<u32>",
                "attribute"
              ),
              this.getBuiltin(
                "local_invocation_id",
                "localId",
                "vec3<u32>",
                "attribute"
              ),
              this.getBuiltin(
                "num_workgroups",
                "numWorkgroups",
                "vec3<u32>",
                "attribute"
              ),
              this.renderer.hasFeature("subgroups") &&
                (this.enableDirective("subgroups", e),
                this.getBuiltin(
                  "subgroup_size",
                  "subgroupSize",
                  "u32",
                  "attribute"
                ))),
            "vertex" === e || "compute" === e)
          ) {
            let e = this.getBuiltins("attribute");
            e && t.push(e);
            let r = this.getAttributesArray();
            for (let e = 0, i = r.length; e < i; e++) {
              let i = r[e],
                s = i.name,
                n = this.getType(i.type);
              t.push(`@location( ${e} ) ${s} : ${n}`);
            }
          }
          return t.join(",\n	");
        }
        getStructMembers(e) {
          let t = [];
          for (let r of e.members) {
            let i = e.output ? "@location( " + r.index + " ) " : "",
              s = this.getType(r.type);
            r.atomic && (s = "atomic< " + s + " >"),
              t.push(`	${i + r.name} : ${s}`);
          }
          return (
            e.output && t.push(`	${this.getBuiltins("output")}`), t.join(",\n")
          );
        }
        getStructs(e) {
          let t = "",
            r = this.structs[e];
          if (r.length > 0) {
            let e = [];
            for (let t of r) {
              let r = `struct ${t.name} {
`;
              (r += this.getStructMembers(t)), (r += "\n};"), e.push(r);
            }
            t = "\n" + e.join("\n\n") + "\n";
          }
          return t;
        }
        getVar(e, t, r = null) {
          let i = `var ${t} : `;
          return (
            null !== r
              ? (i += this.generateArrayDeclaration(e, r))
              : (i += this.getType(e)),
            i
          );
        }
        getVars(e) {
          let t = [],
            r = this.vars[e];
          if (void 0 !== r)
            for (let e of r) t.push(`	${this.getVar(e.type, e.name, e.count)};`);
          return `
${t.join("\n")}
`;
        }
        getVaryings(e) {
          let t = [];
          if (
            ("vertex" === e &&
              this.getBuiltin("position", "Vertex", "vec4<f32>", "vertex"),
            "vertex" === e || "fragment" === e)
          ) {
            let r = this.varyings,
              i = this.vars[e];
            for (let s = 0; s < r.length; s++) {
              let n = r[s];
              if (n.needsInterpolation) {
                let e = `@location( ${s} )`;
                if (n.interpolationType) {
                  let t =
                    null !== n.interpolationSampling
                      ? `, ${n.interpolationSampling} )`
                      : " )";
                  e += ` @interpolate( ${n.interpolationType}${t}`;
                } else
                  /^(int|uint|ivec|uvec)/.test(n.type) &&
                    (e += ` @interpolate( ${
                      this.renderer.backend.compatibilityMode
                        ? "flat, either"
                        : "flat"
                    } )`);
                t.push(`${e} ${n.name} : ${this.getType(n.type)}`);
              } else "vertex" === e && !1 === i.includes(n) && i.push(n);
            }
          }
          let r = this.getBuiltins(e);
          r && t.push(r);
          let i = t.join(",\n	");
          return "vertex" === e
            ? this._getWGSLStruct("VaryingsStruct", "	" + i)
            : i;
        }
        isCustomStruct(e) {
          let t = e.value,
            r = e.node,
            i =
              (t.isBufferAttribute || t.isInstancedBufferAttribute) &&
              null !== r.structTypeNode,
            s =
              r.value &&
              r.value.array &&
              "number" == typeof r.value.itemSize &&
              r.value.array.length > r.value.itemSize;
          return i && !s;
        }
        getUniforms(e) {
          let t = this.uniforms[e],
            r = [],
            i = [],
            s = [],
            n = {};
          for (let s of t) {
            let t = s.groupNode.name,
              a = this.bindingsIndexes[t];
            if (
              "texture" === s.type ||
              "cubeTexture" === s.type ||
              "storageTexture" === s.type ||
              "texture3D" === s.type
            ) {
              let t,
                i = s.node.value;
              !1 === this.isUnfilterable(i) &&
                !0 !== s.node.isStorageTextureNode &&
                (this.isSampleCompare(i)
                  ? r.push(
                      `@binding( ${a.binding++} ) @group( ${a.group} ) var ${
                        s.name
                      }_sampler : sampler_comparison;`
                    )
                  : r.push(
                      `@binding( ${a.binding++} ) @group( ${a.group} ) var ${
                        s.name
                      }_sampler : sampler;`
                    ));
              let n = "",
                { primarySamples: o } =
                  this.renderer.backend.utils.getTextureSampleData(i);
              if ((o > 1 && (n = "_multisampled"), !0 === i.isCubeTexture))
                t = "texture_cube<f32>";
              else if (!0 === i.isDepthTexture)
                t =
                  this.renderer.backend.compatibilityMode &&
                  null === i.compareFunction
                    ? `texture${n}_2d<f32>`
                    : `texture_depth${n}_2d${
                        !0 === i.isArrayTexture ? "_array" : ""
                      }`;
              else if (!0 === s.node.isStorageTextureNode) {
                let r = fI(i),
                  n = this.getStorageAccess(s.node, e),
                  a = s.node.value.is3DTexture,
                  o = s.node.value.isArrayTexture,
                  l = a ? "3d" : `2d${o ? "_array" : ""}`;
                t = `texture_storage_${l}<${r}, ${n}>`;
              } else if (
                !0 === i.isArrayTexture ||
                !0 === i.isDataArrayTexture ||
                !0 === i.isCompressedArrayTexture
              )
                t = "texture_2d_array<f32>";
              else if (!0 === i.is3DTexture || !0 === i.isData3DTexture)
                t = "texture_3d<f32>";
              else {
                let e = this.getComponentTypeFromTexture(i).charAt(0);
                t = `texture${n}_2d<${e}32>`;
              }
              r.push(
                `@binding( ${a.binding++} ) @group( ${a.group} ) var ${
                  s.name
                } : ${t};`
              );
            } else if (
              "buffer" === s.type ||
              "storageBuffer" === s.type ||
              "indirectStorageBuffer" === s.type
            ) {
              let t = s.node,
                r = this.getType(t.getNodeType(this)),
                n = t.bufferCount,
                o = n > 0 && "buffer" === s.type ? ", " + n : "",
                l = t.isStorageBufferNode
                  ? `storage, ${this.getStorageAccess(t, e)}`
                  : "uniform";
              if (this.isCustomStruct(s))
                i.push(
                  `@binding( ${a.binding++} ) @group( ${a.group} ) var<${l}> ${
                    s.name
                  } : ${r};`
                );
              else {
                let e = t.isAtomic ? `atomic<${r}>` : `${r}`,
                  n = `	value : array< ${e}${o} >`;
                i.push(
                  this._getWGSLStructBinding(s.name, n, l, a.binding++, a.group)
                );
              }
            } else {
              let e = this.getType(this.getVectorType(s.type)),
                t = s.groupNode.name;
              (
                n[t] ||
                (n[t] = { index: a.binding++, id: a.group, snippets: [] })
              ).snippets.push(`	${s.name} : ${e}`);
            }
          }
          for (let e in n) {
            let t = n[e];
            s.push(
              this._getWGSLStructBinding(
                e,
                t.snippets.join(",\n"),
                "uniform",
                t.index,
                t.id
              )
            );
          }
          let a = r.join("\n");
          return (a += i.join("\n")), (a += s.join("\n"));
        }
        buildCode() {
          let e =
            null !== this.material
              ? { fragment: {}, vertex: {} }
              : { compute: {} };
          for (let t in (this.sortBindingGroups(), e)) {
            this.shaderStage = t;
            let r = e[t];
            (r.uniforms = this.getUniforms(t)),
              (r.attributes = this.getAttributes(t)),
              (r.varyings = this.getVaryings(t)),
              (r.structs = this.getStructs(t)),
              (r.vars = this.getVars(t)),
              (r.codes = this.getCodes(t)),
              (r.directives = this.getDirectives(t)),
              (r.scopedArrays = this.getScopedArrays(t));
            let i = "// code\n\n";
            i += this.flowCode[t];
            let s = this.flowNodes[t],
              n = s[s.length - 1],
              a = n.outputNode,
              o = void 0 !== a && !0 === a.isOutputStructNode;
            for (let e of s) {
              let s = this.getFlowData(e),
                l = e.name;
              if (
                (l &&
                  (i.length > 0 && (i += "\n"),
                  (i += `	// flow -> ${l}
`)),
                (i += `${s.code}
	`),
                e === n && "compute" !== t)
              ) {
                if (((i += "// result\n\n	"), "vertex" === t))
                  i += `varyings.Vertex = ${s.result};`;
                else if ("fragment" === t)
                  if (o)
                    (r.returnType = a.getNodeType(this)),
                      (r.structs +=
                        "var<private> output : " + r.returnType + ";"),
                      (i += `return ${s.result};`);
                  else {
                    let e = "	@location(0) color: vec4<f32>",
                      t = this.getBuiltins("output");
                    t && (e += ",\n	" + t),
                      (r.returnType = "OutputStruct"),
                      (r.structs += this._getWGSLStruct("OutputStruct", e)),
                      (r.structs += "\nvar<private> output : OutputStruct;"),
                      (i += `output.color = ${s.result};

	return output;`);
                  }
              }
            }
            r.flow = i;
          }
          if (((this.shaderStage = null), null !== this.material))
            (this.vertexShader = this._getWGSLVertexCode(e.vertex)),
              (this.fragmentShader = this._getWGSLFragmentCode(e.fragment));
          else {
            let t = this.object.workgroupSize;
            this.computeShader = this._getWGSLComputeCode(e.compute, t);
          }
        }
        getMethod(e, t = null) {
          let r;
          return (
            null !== t && (r = this._getWGSLMethod(e + "_" + t)),
            void 0 === r && (r = this._getWGSLMethod(e)),
            r || e
          );
        }
        getType(e) {
          return fj[e] || e;
        }
        isAvailable(e) {
          let t = fH[e];
          return (
            void 0 === t &&
              ("float32Filterable" === e
                ? (t = this.renderer.hasFeature("float32-filterable"))
                : "clipDistance" === e &&
                  (t = this.renderer.hasFeature("clip-distances")),
              (fH[e] = t)),
            t
          );
        }
        _getWGSLMethod(e) {
          return void 0 !== fK[e] && this._include(e), fQ[e];
        }
        _include(e) {
          let t = fK[e];
          return (
            t.build(this),
            null !== this.currentFunctionNode &&
              this.currentFunctionNode.includes.push(t),
            t
          );
        }
        _getWGSLVertexCode(e) {
          return `${this.getSignature()}
// directives
${e.directives}

// structs
${e.structs}

// uniforms
${e.uniforms}

// varyings
${e.varyings}
var<private> varyings : VaryingsStruct;

// codes
${e.codes}

@vertex
fn main( ${e.attributes} ) -> VaryingsStruct {

	// vars
	${e.vars}

	// flow
	${e.flow}

	return varyings;

}
`;
        }
        _getWGSLFragmentCode(e) {
          return `${this.getSignature()}
// global
${fY}

// structs
${e.structs}

// uniforms
${e.uniforms}

// codes
${e.codes}

@fragment
fn main( ${e.varyings} ) -> ${e.returnType} {

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`;
        }
        _getWGSLComputeCode(e, t) {
          let [r, i, s] = t;
          return `${this.getSignature()}
// directives
${e.directives}

// system
var<private> instanceIndex : u32;

// locals
${e.scopedArrays}

// structs
${e.structs}

// uniforms
${e.uniforms}

// codes
${e.codes}

@compute @workgroup_size( ${r}, ${i}, ${s} )
fn main( ${e.attributes} ) {

	// system
	instanceIndex = globalId.x
		+ globalId.y * ( ${r} * numWorkgroups.x )
		+ globalId.z * ( ${r} * numWorkgroups.x ) * ( ${i} * numWorkgroups.y );

	// vars
	${e.vars}

	// flow
	${e.flow}

}
`;
        }
        _getWGSLStruct(e, t) {
          return `
struct ${e} {
${t}
};`;
        }
        _getWGSLStructBinding(e, t, r, i = 0, s = 0) {
          let n = e + "Struct",
            a = this._getWGSLStruct(n, t);
          return `${a}
@binding( ${i} ) @group( ${s} )
var<${r}> ${e} : ${n};`;
        }
      }
      class fJ {
        constructor(e) {
          this.backend = e;
        }
        getCurrentDepthStencilFormat(e) {
          let t;
          return (
            null !== e.depthTexture
              ? (t = this.getTextureFormatGPU(e.depthTexture))
              : e.depth && e.stencil
              ? (t = fh.Depth24PlusStencil8)
              : e.depth && (t = fh.Depth24Plus),
            t
          );
        }
        getTextureFormatGPU(e) {
          return this.backend.get(e).format;
        }
        getTextureSampleData(e) {
          let t;
          if (e.isFramebufferTexture) t = 1;
          else if (e.isDepthTexture && !e.renderTarget) {
            let e = this.backend.renderer,
              r = e.getRenderTarget();
            t = r ? r.samples : e.samples;
          } else e.renderTarget && (t = e.renderTarget.samples);
          let r =
              (t = t || 1) > 1 &&
              null !== e.renderTarget &&
              !0 !== e.isDepthTexture &&
              !0 !== e.isFramebufferTexture,
            i = r ? 1 : t;
          return { samples: t, primarySamples: i, isMSAA: r };
        }
        getCurrentColorFormat(e) {
          return null !== e.textures
            ? this.getTextureFormatGPU(e.textures[0])
            : this.getPreferredCanvasFormat();
        }
        getCurrentColorSpace(e) {
          return null !== e.textures
            ? e.textures[0].colorSpace
            : this.backend.renderer.outputColorSpace;
        }
        getPrimitiveTopology(e, t) {
          return e.isPoints
            ? fs.PointList
            : e.isLineSegments || (e.isMesh && !0 === t.wireframe)
            ? fs.LineList
            : e.isLine
            ? fs.LineStrip
            : e.isMesh
            ? fs.TriangleList
            : void 0;
        }
        getSampleCount(e) {
          return e >= 4 ? 4 : 1;
        }
        getSampleCountRenderContext(e) {
          return null !== e.textures
            ? this.getSampleCount(e.sampleCount)
            : this.getSampleCount(this.backend.renderer.samples);
        }
        getPreferredCanvasFormat() {
          let e = this.backend.parameters.outputType;
          if (void 0 === e) return navigator.gpu.getPreferredCanvasFormat();
          if (e === u.OUM) return fh.BGRA8Unorm;
          if (e === u.ix0) return fh.RGBA16Float;
          throw Error("Unsupported outputType");
        }
      }
      let f0 = new Map([
        [Int8Array, ["sint8", "snorm8"]],
        [Uint8Array, ["uint8", "unorm8"]],
        [Int16Array, ["sint16", "snorm16"]],
        [Uint16Array, ["uint16", "unorm16"]],
        [Int32Array, ["sint32", "snorm32"]],
        [Uint32Array, ["uint32", "unorm32"]],
        [Float32Array, ["float32"]],
      ]);
      "undefined" != typeof Float16Array && f0.set(Float16Array, ["float16"]);
      let f1 = new Map([[u.Oax, ["float16"]]]),
        f2 = new Map([
          [Int32Array, "sint32"],
          [Int16Array, "sint32"],
          [Uint32Array, "uint32"],
          [Uint16Array, "uint32"],
          [Float32Array, "float32"],
        ]);
      class f3 {
        constructor(e) {
          this.backend = e;
        }
        createAttribute(e, t) {
          let r = this._getBufferAttribute(e),
            i = this.backend,
            s = i.get(r),
            n = s.buffer;
          if (void 0 === n) {
            let a = i.device,
              o = r.array;
            if (!1 === e.normalized) {
              if (o.constructor === Int16Array || o.constructor === Int8Array)
                o = new Int32Array(o);
              else if (
                (o.constructor === Uint16Array ||
                  o.constructor === Uint8Array) &&
                ((o = new Uint32Array(o)), t & GPUBufferUsage.INDEX)
              )
                for (let e = 0; e < o.length; e++)
                  65535 === o[e] && (o[e] = 0xffffffff);
            }
            if (
              ((r.array = o),
              (r.isStorageBufferAttribute ||
                r.isStorageInstancedBufferAttribute) &&
                3 === r.itemSize)
            ) {
              o = new o.constructor(4 * r.count);
              for (let e = 0; e < r.count; e++)
                o.set(r.array.subarray(3 * e, 3 * e + 3), 4 * e);
              (r.itemSize = 4),
                (r.array = o),
                (s._force3to4BytesAlignment = !0);
            }
            let l = o.byteLength;
            (n = a.createBuffer({
              label: r.name,
              size: l + ((4 - (l % 4)) % 4),
              usage: t,
              mappedAtCreation: !0,
            })),
              new o.constructor(n.getMappedRange()).set(o),
              n.unmap(),
              (s.buffer = n);
          }
        }
        updateAttribute(e) {
          let t = this._getBufferAttribute(e),
            r = this.backend,
            i = r.device,
            s = r.get(t),
            n = r.get(t).buffer,
            a = t.array;
          if (!0 === s._force3to4BytesAlignment) {
            a = new a.constructor(4 * t.count);
            for (let e = 0; e < t.count; e++)
              a.set(t.array.subarray(3 * e, 3 * e + 3), 4 * e);
            t.array = a;
          }
          let o = this._isTypedArray(a),
            l = t.updateRanges;
          if (0 === l.length) i.queue.writeBuffer(n, 0, a, 0);
          else {
            let e = o ? 1 : a.BYTES_PER_ELEMENT;
            for (let t = 0, r = l.length; t < r; t++) {
              let r,
                u,
                d = l[t];
              if (!0 === s._force3to4BytesAlignment) {
                let t = Math.floor(d.start / 3),
                  i = Math.ceil(d.count / 3);
                (r = 4 * t * e), (u = 4 * i * e);
              } else (r = d.start * e), (u = d.count * e);
              let h = r * (o ? a.BYTES_PER_ELEMENT : 1);
              i.queue.writeBuffer(n, h, a, r, u);
            }
            t.clearUpdateRanges();
          }
        }
        createShaderVertexBuffers(e) {
          let t = e.getAttributes(),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e],
              s = i.array.BYTES_PER_ELEMENT,
              n = this._getBufferAttribute(i),
              a = r.get(n);
            if (void 0 === a) {
              let e, t;
              !0 === i.isInterleavedBufferAttribute
                ? ((e = i.data.stride * s),
                  (t = i.data.isInstancedInterleavedBuffer
                    ? fR.Instance
                    : fR.Vertex))
                : ((e = i.itemSize * s),
                  (t = i.isInstancedBufferAttribute ? fR.Instance : fR.Vertex)),
                !1 === i.normalized &&
                  (i.array.constructor === Int16Array ||
                    i.array.constructor === Uint16Array) &&
                  (e = 4),
                (a = { arrayStride: e, attributes: [], stepMode: t }),
                r.set(n, a);
            }
            let o = this._getVertexFormat(i),
              l = !0 === i.isInterleavedBufferAttribute ? i.offset * s : 0;
            a.attributes.push({ shaderLocation: e, offset: l, format: o });
          }
          return Array.from(r.values());
        }
        destroyAttribute(e) {
          let t = this.backend;
          t.get(this._getBufferAttribute(e)).buffer.destroy(), t.delete(e);
        }
        async getArrayBufferAsync(e) {
          let t = this.backend,
            r = t.device,
            i = t.get(this._getBufferAttribute(e)).buffer,
            s = i.size,
            n = r.createBuffer({
              label: `${e.name}_readback`,
              size: s,
              usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
            }),
            a = r.createCommandEncoder({ label: `readback_encoder_${e.name}` });
          a.copyBufferToBuffer(i, 0, n, 0, s);
          let o = a.finish();
          r.queue.submit([o]), await n.mapAsync(GPUMapMode.READ);
          let l = n.getMappedRange(),
            u = new e.array.constructor(l.slice(0));
          return n.unmap(), u.buffer;
        }
        _getVertexFormat(e) {
          let t,
            { itemSize: r, normalized: i } = e,
            s = e.array.constructor,
            n = e.constructor;
          if (1 === r) t = f2.get(s);
          else {
            let e = (f1.get(n) || f0.get(s))[+!!i];
            if (e) {
              let i =
                (4 * Math.floor((s.BYTES_PER_ELEMENT * r + 3) / 4)) /
                s.BYTES_PER_ELEMENT;
              if (i % 1)
                throw Error(
                  "THREE.WebGPUAttributeUtils: Bad vertex format item size."
                );
              t = `${e}x${i}`;
            }
          }
          return (
            t ||
              console.error(
                "THREE.WebGPUAttributeUtils: Vertex format not supported yet."
              ),
            t
          );
        }
        _isTypedArray(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }
        _getBufferAttribute(e) {
          return e.isInterleavedBufferAttribute && (e = e.data), e;
        }
      }
      class f4 {
        constructor(e) {
          (this.backend = e), (this.bindGroupLayoutCache = new WeakMap());
        }
        createBindingsLayout(e) {
          let t = this.backend,
            r = t.device,
            i = [],
            s = 0;
          for (let r of e.bindings) {
            let e = { binding: s++, visibility: r.visibility };
            if (r.isUniformBuffer || r.isStorageBuffer) {
              let t = {};
              r.isStorageBuffer &&
                (4 & r.visibility &&
                (r.access === M.READ_WRITE || r.access === M.WRITE_ONLY)
                  ? (t.type = fb.Storage)
                  : (t.type = fb.ReadOnlyStorage)),
                (e.buffer = t);
            } else if (r.isSampledTexture && r.store) {
              let t = {};
              t.format = this.backend.get(r.texture).texture.format;
              let i = r.access;
              i === M.READ_WRITE
                ? (t.access = fx.ReadWrite)
                : i === M.WRITE_ONLY
                ? (t.access = fx.WriteOnly)
                : (t.access = fx.ReadOnly),
                r.texture.isArrayTexture
                  ? (t.viewDimension = fN.TwoDArray)
                  : r.texture.is3DTexture && (t.viewDimension = fN.ThreeD),
                (e.storageTexture = t);
            } else if (r.isSampledTexture) {
              let i = {},
                { primarySamples: s } = t.utils.getTextureSampleData(r.texture);
              if (
                (s > 1 &&
                  ((i.multisampled = !0),
                  r.texture.isDepthTexture ||
                    (i.sampleType = f_.UnfilterableFloat)),
                r.texture.isDepthTexture)
              )
                t.compatibilityMode && null === r.texture.compareFunction
                  ? (i.sampleType = f_.UnfilterableFloat)
                  : (i.sampleType = f_.Depth);
              else if (
                r.texture.isDataTexture ||
                r.texture.isDataArrayTexture ||
                r.texture.isData3DTexture
              ) {
                let e = r.texture.type;
                e === u.Yuy
                  ? (i.sampleType = f_.SInt)
                  : e === u.bkx
                  ? (i.sampleType = f_.UInt)
                  : e === u.RQf &&
                    (this.backend.hasFeature("float32-filterable")
                      ? (i.sampleType = f_.Float)
                      : (i.sampleType = f_.UnfilterableFloat));
              }
              r.isSampledCubeTexture
                ? (i.viewDimension = fN.Cube)
                : r.texture.isArrayTexture ||
                  r.texture.isDataArrayTexture ||
                  r.texture.isCompressedArrayTexture
                ? (i.viewDimension = fN.TwoDArray)
                : r.isSampledTexture3D && (i.viewDimension = fN.ThreeD),
                (e.texture = i);
            } else if (r.isSampler) {
              let i = {};
              r.texture.isDepthTexture &&
                (null !== r.texture.compareFunction
                  ? (i.type = fT.Comparison)
                  : t.compatibilityMode && (i.type = fT.NonFiltering)),
                (e.sampler = i);
            } else
              console.error(`WebGPUBindingUtils: Unsupported binding "${r}".`);
            i.push(e);
          }
          return r.createBindGroupLayout({ entries: i });
        }
        createBindings(e, t, r, i = 0) {
          let s,
            { backend: n, bindGroupLayoutCache: a } = this,
            o = n.get(e),
            l = a.get(e.bindingsReference);
          void 0 === l &&
            ((l = this.createBindingsLayout(e)), a.set(e.bindingsReference, l)),
            r > 0 &&
              (void 0 === o.groups && ((o.groups = []), (o.versions = [])),
              o.versions[r] === i && (s = o.groups[r])),
            void 0 === s &&
              ((s = this.createBindGroup(e, l)),
              r > 0 && ((o.groups[r] = s), (o.versions[r] = i))),
            (o.group = s),
            (o.layout = l);
        }
        updateBinding(e) {
          let t = this.backend,
            r = t.device,
            i = e.buffer,
            s = t.get(e).buffer;
          r.queue.writeBuffer(s, 0, i, 0);
        }
        createBindGroupIndex(e, t) {
          let r = this.backend.device,
            i = GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            s = e[0],
            n = r.createBuffer({
              label: "bindingCameraIndex_" + s,
              size: 16,
              usage: i,
            });
          r.queue.writeBuffer(n, 0, e, 0);
          let a = [{ binding: 0, resource: { buffer: n } }];
          return r.createBindGroup({
            label: "bindGroupCameraIndex_" + s,
            layout: t,
            entries: a,
          });
        }
        createBindGroup(e, t) {
          let r = this.backend,
            i = r.device,
            s = 0,
            n = [];
          for (let t of e.bindings) {
            if (t.isUniformBuffer) {
              let e = r.get(t);
              if (void 0 === e.buffer) {
                let r = t.byteLength,
                  s = GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST;
                e.buffer = i.createBuffer({
                  label: "bindingBuffer_" + t.name,
                  size: r,
                  usage: s,
                });
              }
              n.push({ binding: s, resource: { buffer: e.buffer } });
            } else if (t.isStorageBuffer) {
              let e = r.get(t);
              if (void 0 === e.buffer) {
                let i = t.attribute;
                e.buffer = r.get(i).buffer;
              }
              n.push({ binding: s, resource: { buffer: e.buffer } });
            } else if (t.isSampledTexture) {
              let e,
                a = r.get(t.texture);
              if (void 0 !== a.externalTexture)
                e = i.importExternalTexture({ source: a.externalTexture });
              else {
                let r = t.store ? 1 : a.texture.mipLevelCount,
                  i = `view-${a.texture.width}-${a.texture.height}`;
                if (
                  (a.texture.depthOrArrayLayers > 1 &&
                    (i += `-${a.texture.depthOrArrayLayers}`),
                  (i += `-${r}`),
                  void 0 === (e = a[i]))
                ) {
                  let s,
                    n = fS.All;
                  (s = t.isSampledCubeTexture
                    ? fN.Cube
                    : t.isSampledTexture3D
                    ? fN.ThreeD
                    : t.texture.isArrayTexture ||
                      t.texture.isDataArrayTexture ||
                      t.texture.isCompressedArrayTexture
                    ? fN.TwoDArray
                    : fN.TwoD),
                    (e = a[i] =
                      a.texture.createView({
                        aspect: n,
                        dimension: s,
                        mipLevelCount: r,
                      }));
                }
              }
              n.push({ binding: s, resource: e });
            } else if (t.isSampler) {
              let e = r.get(t.texture);
              n.push({ binding: s, resource: e.sampler });
            }
            s++;
          }
          return i.createBindGroup({
            label: "bindGroup_" + e.name,
            layout: t,
            entries: n,
          });
        }
      }
      class f6 {
        constructor(e) {
          (this.backend = e), (this._activePipelines = new WeakMap());
        }
        setPipeline(e, t) {
          this._activePipelines.get(e) !== t &&
            (e.setPipeline(t), this._activePipelines.set(e, t));
        }
        _getSampleCount(e) {
          return this.backend.utils.getSampleCountRenderContext(e);
        }
        createRenderPipeline(e, t) {
          let r,
            { object: i, material: s, geometry: n, pipeline: a } = e,
            { vertexProgram: o, fragmentProgram: l } = a,
            d = this.backend,
            h = d.device,
            c = d.utils,
            p = d.get(a),
            g = [];
          for (let t of e.getBindings()) {
            let e = d.get(t);
            g.push(e.layout);
          }
          let m = d.attributeUtils.createShaderVertexBuffers(e);
          s.blending !== u.XIg &&
            (s.blending !== u.NTi || !1 !== s.transparent) &&
            (r = this._getBlending(s));
          let f = {};
          !0 === s.stencilWrite &&
            (f = {
              compare: this._getStencilCompare(s),
              failOp: this._getStencilOperation(s.stencilFail),
              depthFailOp: this._getStencilOperation(s.stencilZFail),
              passOp: this._getStencilOperation(s.stencilZPass),
            });
          let y = this._getColorWriteMask(s),
            b = [];
          if (null !== e.context.textures) {
            let t = e.context.textures;
            for (let e = 0; e < t.length; e++) {
              let i = c.getTextureFormatGPU(t[e]);
              b.push({ format: i, blend: r, writeMask: y });
            }
          } else {
            let t = c.getCurrentColorFormat(e.context);
            b.push({ format: t, blend: r, writeMask: y });
          }
          let x = d.get(o).module,
            T = d.get(l).module,
            _ = this._getPrimitiveState(i, n, s),
            v = this._getDepthCompare(s),
            N = c.getCurrentDepthStencilFormat(e.context),
            S = this._getSampleCount(e.context),
            R = {
              label: `renderPipeline_${s.name || s.type}_${s.id}`,
              vertex: Object.assign({}, x, { buffers: m }),
              fragment: Object.assign({}, T, { targets: b }),
              primitive: _,
              multisample: {
                count: S,
                alphaToCoverageEnabled: s.alphaToCoverage && S > 1,
              },
              layout: h.createPipelineLayout({ bindGroupLayouts: g }),
            },
            A = {},
            E = e.context.depth,
            w = e.context.stencil;
          if (
            ((!0 === E || !0 === w) &&
              (!0 === E &&
                ((A.format = N),
                (A.depthWriteEnabled = s.depthWrite),
                (A.depthCompare = v)),
              !0 === w &&
                ((A.stencilFront = f),
                (A.stencilBack = {}),
                (A.stencilReadMask = s.stencilFuncMask),
                (A.stencilWriteMask = s.stencilWriteMask)),
              !0 === s.polygonOffset &&
                ((A.depthBias = s.polygonOffsetUnits),
                (A.depthBiasSlopeScale = s.polygonOffsetFactor),
                (A.depthBiasClamp = 0)),
              (R.depthStencil = A)),
            null === t)
          )
            p.pipeline = h.createRenderPipeline(R);
          else {
            let e = new Promise((e) => {
              h.createRenderPipelineAsync(R).then((t) => {
                (p.pipeline = t), e();
              });
            });
            t.push(e);
          }
        }
        createBundleEncoder(e, t = "renderBundleEncoder") {
          let { utils: r, device: i } = this.backend,
            s = r.getCurrentDepthStencilFormat(e),
            n = r.getCurrentColorFormat(e),
            a = this._getSampleCount(e);
          return i.createRenderBundleEncoder({
            label: t,
            colorFormats: [n],
            depthStencilFormat: s,
            sampleCount: a,
          });
        }
        createComputePipeline(e, t) {
          let r = this.backend,
            i = r.device,
            s = r.get(e.computeProgram).module,
            n = r.get(e),
            a = [];
          for (let e of t) {
            let t = r.get(e);
            a.push(t.layout);
          }
          n.pipeline = i.createComputePipeline({
            compute: s,
            layout: i.createPipelineLayout({ bindGroupLayouts: a }),
          });
        }
        _getBlending(e) {
          let t,
            r,
            i = e.blending,
            s = e.blendSrc,
            n = e.blendDst,
            a = e.blendEquation;
          if (i === u.bCz) {
            let i = null !== e.blendSrcAlpha ? e.blendSrcAlpha : s,
              o = null !== e.blendDstAlpha ? e.blendDstAlpha : n,
              l = null !== e.blendEquationAlpha ? e.blendEquationAlpha : a;
            (t = {
              srcFactor: this._getBlendFactor(s),
              dstFactor: this._getBlendFactor(n),
              operation: this._getBlendOperation(a),
            }),
              (r = {
                srcFactor: this._getBlendFactor(i),
                dstFactor: this._getBlendFactor(o),
                operation: this._getBlendOperation(l),
              });
          } else {
            let s = e.premultipliedAlpha,
              n = (e, i, s, n) => {
                (t = { srcFactor: e, dstFactor: i, operation: fm.Add }),
                  (r = { srcFactor: s, dstFactor: n, operation: fm.Add });
              };
            if (s)
              switch (i) {
                case u.NTi:
                  n(fg.One, fg.OneMinusSrcAlpha, fg.One, fg.OneMinusSrcAlpha);
                  break;
                case u.EZo:
                  n(fg.One, fg.One, fg.One, fg.One);
                  break;
                case u.Kwu:
                  n(fg.Zero, fg.OneMinusSrc, fg.Zero, fg.One);
                  break;
                case u.EdD:
                  n(fg.Dst, fg.OneMinusSrcAlpha, fg.Zero, fg.One);
              }
            else
              switch (i) {
                case u.NTi:
                  n(
                    fg.SrcAlpha,
                    fg.OneMinusSrcAlpha,
                    fg.One,
                    fg.OneMinusSrcAlpha
                  );
                  break;
                case u.EZo:
                  n(fg.SrcAlpha, fg.One, fg.One, fg.One);
                  break;
                case u.Kwu:
                  console.error(
                    "THREE.WebGPURenderer: SubtractiveBlending requires material.premultipliedAlpha = true"
                  );
                  break;
                case u.EdD:
                  console.error(
                    "THREE.WebGPURenderer: MultiplyBlending requires material.premultipliedAlpha = true"
                  );
              }
          }
          if (void 0 !== t && void 0 !== r) return { color: t, alpha: r };
          console.error("THREE.WebGPURenderer: Invalid blending: ", i);
        }
        _getBlendFactor(e) {
          let t;
          switch (e) {
            case u.ojh:
              t = fg.Zero;
              break;
            case u.qad:
              t = fg.One;
              break;
            case u.f4X:
              t = fg.Src;
              break;
            case u.LiQ:
              t = fg.OneMinusSrc;
              break;
            case u.ie2:
              t = fg.SrcAlpha;
              break;
            case u.OuU:
              t = fg.OneMinusSrcAlpha;
              break;
            case u.wn6:
              t = fg.Dst;
              break;
            case u.aEY:
              t = fg.OneMinusDst;
              break;
            case u.hdd:
              t = fg.DstAlpha;
              break;
            case u.Nt7:
              t = fg.OneMinusDstAlpha;
              break;
            case u.hgQ:
              t = fg.SrcAlphaSaturated;
              break;
            case 211:
              t = fg.Constant;
              break;
            case 212:
              t = fg.OneMinusConstant;
              break;
            default:
              console.error(
                "THREE.WebGPURenderer: Blend factor not supported.",
                e
              );
          }
          return t;
        }
        _getStencilCompare(e) {
          let t,
            r = e.stencilFunc;
          switch (r) {
            case u.HPb:
              t = fn.Never;
              break;
            case u.sKt:
              t = fn.Always;
              break;
            case u.kYr:
              t = fn.Less;
              break;
            case u.CR7:
              t = fn.LessEqual;
              break;
            case u.jsO:
              t = fn.Equal;
              break;
            case u.TMh:
              t = fn.GreaterEqual;
              break;
            case u.RcT:
              t = fn.Greater;
              break;
            case u.klZ:
              t = fn.NotEqual;
              break;
            default:
              console.error(
                "THREE.WebGPURenderer: Invalid stencil function.",
                r
              );
          }
          return t;
        }
        _getStencilOperation(e) {
          let t;
          switch (e) {
            case u.VVr:
              t = fy.Keep;
              break;
            case u.kqe:
              t = fy.Zero;
              break;
            case u.kG0:
              t = fy.Replace;
              break;
            case u.oVO:
              t = fy.Invert;
              break;
            case u.HLH:
              t = fy.IncrementClamp;
              break;
            case u.ROr:
              t = fy.DecrementClamp;
              break;
            case u.Ru$:
              t = fy.IncrementWrap;
              break;
            case u.fJr:
              t = fy.DecrementWrap;
              break;
            default:
              console.error(
                "THREE.WebGPURenderer: Invalid stencil operation.",
                t
              );
          }
          return t;
        }
        _getBlendOperation(e) {
          let t;
          switch (e) {
            case u.gO9:
              t = fm.Add;
              break;
            case u.FXf:
              t = fm.Subtract;
              break;
            case u.nST:
              t = fm.ReverseSubtract;
              break;
            case u.znC:
              t = fm.Min;
              break;
            case u.$ei:
              t = fm.Max;
              break;
            default:
              console.error(
                "THREE.WebGPUPipelineUtils: Blend equation not supported.",
                e
              );
          }
          return t;
        }
        _getPrimitiveState(e, t, r) {
          let i = {};
          switch (
            ((i.topology = this.backend.utils.getPrimitiveTopology(e, r)),
            null !== t.index &&
              !0 === e.isLine &&
              !0 !== e.isLineSegments &&
              (i.stripIndexFormat =
                t.index.array instanceof Uint16Array ? fd.Uint16 : fd.Uint32),
            r.side)
          ) {
            case u.hB5:
              (i.frontFace = fl.CCW), (i.cullMode = fu.Back);
              break;
            case u.hsX:
              (i.frontFace = fl.CCW), (i.cullMode = fu.Front);
              break;
            case u.$EB:
              (i.frontFace = fl.CCW), (i.cullMode = fu.None);
              break;
            default:
              console.error(
                "THREE.WebGPUPipelineUtils: Unknown material.side value.",
                r.side
              );
          }
          return i;
        }
        _getColorWriteMask(e) {
          return !0 === e.colorWrite ? ff.All : ff.None;
        }
        _getDepthCompare(e) {
          let t;
          if (!1 === e.depthTest) t = fn.Always;
          else {
            let r = e.depthFunc;
            switch (r) {
              case u.eHc:
                t = fn.Never;
                break;
              case u.lGu:
                t = fn.Always;
                break;
              case u.brA:
                t = fn.Less;
                break;
              case u.xSv:
                t = fn.LessEqual;
                break;
              case u.U3G:
                t = fn.Equal;
                break;
              case u.Gwm:
                t = fn.GreaterEqual;
                break;
              case u.K52:
                t = fn.Greater;
                break;
              case u.bw0:
                t = fn.NotEqual;
                break;
              default:
                console.error(
                  "THREE.WebGPUPipelineUtils: Invalid depth function.",
                  r
                );
            }
          }
          return t;
        }
      }
      class f8 extends ft {
        constructor(e, t, r = 2048) {
          super(r),
            (this.device = e),
            (this.type = t),
            (this.querySet = this.device.createQuerySet({
              type: "timestamp",
              count: this.maxQueries,
              label: `queryset_global_timestamp_${t}`,
            }));
          let i = 8 * this.maxQueries;
          (this.resolveBuffer = this.device.createBuffer({
            label: `buffer_timestamp_resolve_${t}`,
            size: i,
            usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
          })),
            (this.resultBuffer = this.device.createBuffer({
              label: `buffer_timestamp_result_${t}`,
              size: i,
              usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
            }));
        }
        allocateQueriesForContext(e) {
          if (!this.trackTimestamp || this.isDisposed) return null;
          if (this.currentQueryIndex + 2 > this.maxQueries)
            return (
              (0, u.mcG)(
                `WebGPUTimestampQueryPool [${
                  this.type
                }]: Maximum number of queries exceeded, when using trackTimestamp it is necessary to resolves the queries via renderer.resolveTimestampsAsync( THREE.TimestampQuery.${this.type.toUpperCase()} ).`
              ),
              null
            );
          let t = this.currentQueryIndex;
          return (
            (this.currentQueryIndex += 2), this.queryOffsets.set(e.id, t), t
          );
        }
        async resolveQueriesAsync() {
          if (
            !this.trackTimestamp ||
            0 === this.currentQueryIndex ||
            this.isDisposed
          )
            return this.lastValue;
          if (this.pendingResolve) return this.pendingResolve;
          this.pendingResolve = this._resolveQueries();
          try {
            return await this.pendingResolve;
          } finally {
            this.pendingResolve = null;
          }
        }
        async _resolveQueries() {
          if (this.isDisposed) return this.lastValue;
          try {
            if ("unmapped" !== this.resultBuffer.mapState)
              return this.lastValue;
            let e = new Map(this.queryOffsets),
              t = this.currentQueryIndex,
              r = 8 * t;
            (this.currentQueryIndex = 0), this.queryOffsets.clear();
            let i = this.device.createCommandEncoder();
            i.resolveQuerySet(this.querySet, 0, t, this.resolveBuffer, 0),
              i.copyBufferToBuffer(
                this.resolveBuffer,
                0,
                this.resultBuffer,
                0,
                r
              );
            let s = i.finish();
            if (
              (this.device.queue.submit([s]),
              "unmapped" !== this.resultBuffer.mapState)
            )
              return this.lastValue;
            if (
              (await this.resultBuffer.mapAsync(GPUMapMode.READ, 0, r),
              this.isDisposed)
            )
              return (
                "mapped" === this.resultBuffer.mapState &&
                  this.resultBuffer.unmap(),
                this.lastValue
              );
            let n = new BigUint64Array(this.resultBuffer.getMappedRange(0, r)),
              a = 0;
            for (let [, t] of e) {
              let e = n[t],
                r = n[t + 1],
                i = Number(r - e) / 1e6;
              a += i;
            }
            return this.resultBuffer.unmap(), (this.lastValue = a), a;
          } catch (e) {
            return (
              console.error("Error resolving queries:", e),
              "mapped" === this.resultBuffer.mapState &&
                this.resultBuffer.unmap(),
              this.lastValue
            );
          }
        }
        async dispose() {
          if (!this.isDisposed) {
            if (((this.isDisposed = !0), this.pendingResolve))
              try {
                await this.pendingResolve;
              } catch (e) {
                console.error("Error waiting for pending resolve:", e);
              }
            if (this.resultBuffer && "mapped" === this.resultBuffer.mapState)
              try {
                this.resultBuffer.unmap();
              } catch (e) {
                console.error("Error unmapping buffer:", e);
              }
            this.querySet && (this.querySet.destroy(), (this.querySet = null)),
              this.resolveBuffer &&
                (this.resolveBuffer.destroy(), (this.resolveBuffer = null)),
              this.resultBuffer &&
                (this.resultBuffer.destroy(), (this.resultBuffer = null)),
              this.queryOffsets.clear(),
              (this.pendingResolve = null);
          }
        }
      }
      class f5 extends mK {
        constructor(e = {}) {
          super(e),
            (this.isWebGPUBackend = !0),
            (this.parameters.alpha = void 0 === e.alpha || e.alpha),
            (this.parameters.compatibilityMode =
              void 0 !== e.compatibilityMode && e.compatibilityMode),
            (this.parameters.requiredLimits =
              void 0 === e.requiredLimits ? {} : e.requiredLimits),
            (this.compatibilityMode = this.parameters.compatibilityMode),
            (this.device = null),
            (this.context = null),
            (this.colorBuffer = null),
            (this.defaultRenderPassdescriptor = null),
            (this.utils = new fJ(this)),
            (this.attributeUtils = new f3(this)),
            (this.bindingUtils = new f4(this)),
            (this.pipelineUtils = new f6(this)),
            (this.textureUtils = new fP(this)),
            (this.occludedResolveCache = new Map());
        }
        async init(e) {
          let t;
          await super.init(e);
          let r = this.parameters;
          if (void 0 === r.device) {
            let e = {
                powerPreference: r.powerPreference,
                featureLevel: r.compatibilityMode ? "compatibility" : void 0,
              },
              i =
                "undefined" != typeof navigator
                  ? await navigator.gpu.requestAdapter(e)
                  : null;
            if (null === i)
              throw Error("WebGPUBackend: Unable to create WebGPU adapter.");
            let s = Object.values(fA),
              n = [];
            for (let e of s) i.features.has(e) && n.push(e);
            let a = { requiredFeatures: n, requiredLimits: r.requiredLimits };
            t = await i.requestDevice(a);
          } else t = r.device;
          t.lost.then((t) => {
            let r = {
              api: "WebGPU",
              message: t.message || "Unknown reason",
              reason: t.reason || null,
              originalEvent: t,
            };
            e.onDeviceLost(r);
          });
          let i =
            void 0 !== r.context
              ? r.context
              : e.domElement.getContext("webgpu");
          (this.device = t), (this.context = i);
          let s = r.alpha ? "premultiplied" : "opaque";
          (this.trackTimestamp =
            this.trackTimestamp && this.hasFeature(fA.TimestampQuery)),
            this.context.configure({
              device: this.device,
              format: this.utils.getPreferredCanvasFormat(),
              usage:
                GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
              alphaMode: s,
            }),
            this.updateSize();
        }
        get coordinateSystem() {
          return u.i7u;
        }
        async getArrayBufferAsync(e) {
          return await this.attributeUtils.getArrayBufferAsync(e);
        }
        getContext() {
          return this.context;
        }
        _getDefaultRenderPassDescriptor() {
          let e = this.defaultRenderPassdescriptor;
          if (null === e) {
            let t = this.renderer;
            (e = { colorAttachments: [{ view: null }] }),
              (!0 === this.renderer.depth || !0 === this.renderer.stencil) &&
                (e.depthStencilAttachment = {
                  view: this.textureUtils
                    .getDepthBuffer(t.depth, t.stencil)
                    .createView(),
                });
            let r = e.colorAttachments[0];
            this.renderer.samples > 0
              ? (r.view = this.colorBuffer.createView())
              : (r.resolveTarget = void 0),
              (this.defaultRenderPassdescriptor = e);
          }
          let t = e.colorAttachments[0];
          return (
            this.renderer.samples > 0
              ? (t.resolveTarget = this.context
                  .getCurrentTexture()
                  .createView())
              : (t.view = this.context.getCurrentTexture().createView()),
            e
          );
        }
        _isRenderCameraDepthArray(e) {
          return (
            e.depthTexture &&
            e.depthTexture.image.depth > 1 &&
            e.camera.isArrayCamera
          );
        }
        _getRenderPassDescriptor(e, t = {}) {
          let r = e.renderTarget,
            i = this.get(r),
            s = i.descriptors;
          if (
            void 0 === s ||
            i.width !== r.width ||
            i.height !== r.height ||
            i.dimensions !== r.dimensions ||
            i.activeMipmapLevel !== e.activeMipmapLevel ||
            i.activeCubeFace !== e.activeCubeFace ||
            i.samples !== r.samples
          ) {
            i.descriptors = s = {};
            let e = () => {
              r.removeEventListener("dispose", e), this.delete(r);
            };
            !1 === r.hasEventListener("dispose", e) &&
              r.addEventListener("dispose", e);
          }
          let n = e.getCacheKey(),
            a = s[n];
          if (void 0 === a) {
            let t,
              o = e.textures,
              l = [],
              u = this._isRenderCameraDepthArray(e);
            for (let i = 0; i < o.length; i++) {
              let s = this.get(o[i]),
                n = {
                  label: `colorAttachment_${i}`,
                  baseMipLevel: e.activeMipmapLevel,
                  mipLevelCount: 1,
                  baseArrayLayer: e.activeCubeFace,
                  arrayLayerCount: 1,
                  dimension: fN.TwoD,
                };
              if (r.isRenderTarget3D)
                (t = e.activeCubeFace),
                  (n.baseArrayLayer = 0),
                  (n.dimension = fN.ThreeD),
                  (n.depthOrArrayLayers = o[i].image.depth);
              else if (r.isRenderTarget && o[i].image.depth > 1)
                if (!0 === u) {
                  let t = e.camera.cameras;
                  for (let e = 0; e < t.length; e++) {
                    let t = {
                        ...n,
                        baseArrayLayer: e,
                        arrayLayerCount: 1,
                        dimension: fN.TwoD,
                      },
                      r = s.texture.createView(t);
                    l.push({
                      view: r,
                      resolveTarget: void 0,
                      depthSlice: void 0,
                    });
                  }
                } else
                  (n.dimension = fN.TwoDArray),
                    (n.depthOrArrayLayers = o[i].image.depth);
              if (!0 !== u) {
                let e,
                  r,
                  i = s.texture.createView(n);
                void 0 !== s.msaaTexture
                  ? ((e = s.msaaTexture.createView()), (r = i))
                  : ((e = i), (r = void 0)),
                  l.push({ view: e, resolveTarget: r, depthSlice: t });
              }
            }
            if (((a = { textureViews: l }), e.depth)) {
              let t = this.get(e.depthTexture),
                r = {};
              e.depthTexture.isArrayTexture &&
                ((r.dimension = fN.TwoD),
                (r.arrayLayerCount = 1),
                (r.baseArrayLayer = e.activeCubeFace)),
                (a.depthStencilView = t.texture.createView(r));
            }
            (s[n] = a),
              (i.width = r.width),
              (i.height = r.height),
              (i.samples = r.samples),
              (i.activeMipmapLevel = e.activeMipmapLevel),
              (i.activeCubeFace = e.activeCubeFace),
              (i.dimensions = r.dimensions);
          }
          let o = { colorAttachments: [] };
          for (let e = 0; e < a.textureViews.length; e++) {
            let r = a.textureViews[e],
              i = { r: 0, g: 0, b: 0, a: 1 };
            0 === e && t.clearValue && (i = t.clearValue),
              o.colorAttachments.push({
                view: r.view,
                depthSlice: r.depthSlice,
                resolveTarget: r.resolveTarget,
                loadOp: t.loadOp || fo.Load,
                storeOp: t.storeOp || fa.Store,
                clearValue: i,
              });
          }
          return (
            a.depthStencilView &&
              (o.depthStencilAttachment = { view: a.depthStencilView }),
            o
          );
        }
        beginRender(e) {
          let t,
            r,
            i = this.get(e),
            s = this.device,
            n = e.occlusionQueryCount;
          n > 0 &&
            (i.currentOcclusionQuerySet && i.currentOcclusionQuerySet.destroy(),
            i.currentOcclusionQueryBuffer &&
              i.currentOcclusionQueryBuffer.destroy(),
            (i.currentOcclusionQuerySet = i.occlusionQuerySet),
            (i.currentOcclusionQueryBuffer = i.occlusionQueryBuffer),
            (i.currentOcclusionQueryObjects = i.occlusionQueryObjects),
            (i.occlusionQuerySet = t =
              s.createQuerySet({
                type: "occlusion",
                count: n,
                label: `occlusionQuerySet_${e.id}`,
              })),
            (i.occlusionQueryIndex = 0),
            (i.occlusionQueryObjects = Array(n)),
            (i.lastOcclusionObject = null)),
            (r =
              null === e.textures
                ? this._getDefaultRenderPassDescriptor()
                : this._getRenderPassDescriptor(e, { loadOp: fo.Load })),
            this.initTimestampQuery(e, r),
            (r.occlusionQuerySet = t);
          let a = r.depthStencilAttachment;
          if (null !== e.textures) {
            let t = r.colorAttachments;
            for (let r = 0; r < t.length; r++) {
              let i = t[r];
              e.clearColor
                ? ((i.clearValue =
                    0 === r ? e.clearColorValue : { r: 0, g: 0, b: 0, a: 1 }),
                  (i.loadOp = fo.Clear))
                : (i.loadOp = fo.Load),
                (i.storeOp = fa.Store);
            }
          } else {
            let t = r.colorAttachments[0];
            e.clearColor
              ? ((t.clearValue = e.clearColorValue), (t.loadOp = fo.Clear))
              : (t.loadOp = fo.Load),
              (t.storeOp = fa.Store);
          }
          e.depth &&
            (e.clearDepth
              ? ((a.depthClearValue = e.clearDepthValue),
                (a.depthLoadOp = fo.Clear))
              : (a.depthLoadOp = fo.Load),
            (a.depthStoreOp = fa.Store)),
            e.stencil &&
              (e.clearStencil
                ? ((a.stencilClearValue = e.clearStencilValue),
                  (a.stencilLoadOp = fo.Clear))
                : (a.stencilLoadOp = fo.Load),
              (a.stencilStoreOp = fa.Store));
          let o = s.createCommandEncoder({ label: "renderContext_" + e.id });
          if (!0 === this._isRenderCameraDepthArray(e)) {
            let t = e.camera.cameras;
            i.layerDescriptors && i.layerDescriptors.length === t.length
              ? this._updateDepthLayerDescriptors(e, i, t)
              : this._createDepthLayerDescriptors(e, i, r, t),
              (i.bundleEncoders = []),
              (i.bundleSets = []);
            for (let r = 0; r < t.length; r++) {
              let t = this.pipelineUtils.createBundleEncoder(
                  e,
                  "renderBundleArrayCamera_" + r
                ),
                s = {
                  attributes: {},
                  bindingGroups: [],
                  pipeline: null,
                  index: null,
                };
              i.bundleEncoders.push(t), i.bundleSets.push(s);
            }
            i.currentPass = null;
          } else {
            let t = o.beginRenderPass(r);
            if (
              ((i.currentPass = t),
              e.viewport && this.updateViewport(e),
              e.scissor)
            ) {
              let { x: r, y: i, width: s, height: n } = e.scissorValue;
              t.setScissorRect(r, i, s, n);
            }
          }
          (i.descriptor = r),
            (i.encoder = o),
            (i.currentSets = {
              attributes: {},
              bindingGroups: [],
              pipeline: null,
              index: null,
            }),
            (i.renderBundles = []);
        }
        _createDepthLayerDescriptors(e, t, r, i) {
          let s = r.depthStencilAttachment;
          t.layerDescriptors = [];
          let n = this.get(e.depthTexture);
          n.viewCache || (n.viewCache = []);
          for (let a = 0; a < i.length; a++) {
            let i = {
              ...r,
              colorAttachments: [
                { ...r.colorAttachments[0], view: r.colorAttachments[a].view },
              ],
            };
            if (r.depthStencilAttachment) {
              let t = a;
              n.viewCache[t] ||
                (n.viewCache[t] = n.texture.createView({
                  dimension: fN.TwoD,
                  baseArrayLayer: a,
                  arrayLayerCount: 1,
                })),
                (i.depthStencilAttachment = {
                  view: n.viewCache[t],
                  depthLoadOp: s.depthLoadOp || fo.Clear,
                  depthStoreOp: s.depthStoreOp || fa.Store,
                  depthClearValue: s.depthClearValue || 1,
                }),
                e.stencil &&
                  ((i.depthStencilAttachment.stencilLoadOp = s.stencilLoadOp),
                  (i.depthStencilAttachment.stencilStoreOp = s.stencilStoreOp),
                  (i.depthStencilAttachment.stencilClearValue =
                    s.stencilClearValue));
            } else i.depthStencilAttachment = { ...s };
            t.layerDescriptors.push(i);
          }
        }
        _updateDepthLayerDescriptors(e, t, r) {
          for (let i = 0; i < r.length; i++) {
            let r = t.layerDescriptors[i];
            if (r.depthStencilAttachment) {
              let t = r.depthStencilAttachment;
              e.depth &&
                (e.clearDepth
                  ? ((t.depthClearValue = e.clearDepthValue),
                    (t.depthLoadOp = fo.Clear))
                  : (t.depthLoadOp = fo.Load)),
                e.stencil &&
                  (e.clearStencil
                    ? ((t.stencilClearValue = e.clearStencilValue),
                      (t.stencilLoadOp = fo.Clear))
                    : (t.stencilLoadOp = fo.Load));
            }
          }
        }
        finishRender(e) {
          let t = this.get(e),
            r = e.occlusionQueryCount;
          t.renderBundles.length > 0 &&
            t.currentPass.executeBundles(t.renderBundles),
            r > t.occlusionQueryIndex && t.currentPass.endOcclusionQuery();
          let i = t.encoder;
          if (!0 === this._isRenderCameraDepthArray(e)) {
            let r = [];
            for (let e = 0; e < t.bundleEncoders.length; e++) {
              let i = t.bundleEncoders[e];
              r.push(i.finish());
            }
            for (let s = 0; s < t.layerDescriptors.length; s++)
              if (s < r.length) {
                let n = t.layerDescriptors[s],
                  a = i.beginRenderPass(n);
                if (e.viewport) {
                  let {
                    x: t,
                    y: r,
                    width: i,
                    height: s,
                    minDepth: n,
                    maxDepth: o,
                  } = e.viewportValue;
                  a.setViewport(t, r, i, s, n, o);
                }
                if (e.scissor) {
                  let { x: t, y: r, width: i, height: s } = e.scissorValue;
                  a.setScissorRect(t, r, i, s);
                }
                a.executeBundles([r[s]]), a.end();
              }
          } else t.currentPass && t.currentPass.end();
          if (r > 0) {
            let i = 8 * r,
              s = this.occludedResolveCache.get(i);
            void 0 === s &&
              ((s = this.device.createBuffer({
                size: i,
                usage: GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_SRC,
              })),
              this.occludedResolveCache.set(i, s));
            let n = this.device.createBuffer({
              size: i,
              usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
            });
            t.encoder.resolveQuerySet(t.occlusionQuerySet, 0, r, s, 0),
              t.encoder.copyBufferToBuffer(s, 0, n, 0, i),
              (t.occlusionQueryBuffer = n),
              this.resolveOccludedAsync(e);
          }
          if (
            (this.device.queue.submit([t.encoder.finish()]),
            null !== e.textures)
          ) {
            let t = e.textures;
            for (let e = 0; e < t.length; e++) {
              let r = t[e];
              !0 === r.generateMipmaps && this.textureUtils.generateMipmaps(r);
            }
          }
        }
        isOccluded(e, t) {
          let r = this.get(e);
          return r.occluded && r.occluded.has(t);
        }
        async resolveOccludedAsync(e) {
          let t = this.get(e),
            {
              currentOcclusionQueryBuffer: r,
              currentOcclusionQueryObjects: i,
            } = t;
          if (r && i) {
            let e = new WeakSet();
            (t.currentOcclusionQueryObjects = null),
              (t.currentOcclusionQueryBuffer = null),
              await r.mapAsync(GPUMapMode.READ);
            let s = new BigUint64Array(r.getMappedRange());
            for (let t = 0; t < i.length; t++)
              s[t] === BigInt(0) && e.add(i[t]);
            r.destroy(), (t.occluded = e);
          }
        }
        updateViewport(e) {
          let { currentPass: t } = this.get(e),
            {
              x: r,
              y: i,
              width: s,
              height: n,
              minDepth: a,
              maxDepth: o,
            } = e.viewportValue;
          t.setViewport(r, i, s, n, a, o);
        }
        getClearColor() {
          let e = super.getClearColor();
          return (
            !0 === this.renderer.alpha &&
              ((e.r *= e.a), (e.g *= e.a), (e.b *= e.a)),
            e
          );
        }
        clear(e, t, r, i = null) {
          let s,
            n,
            a,
            o,
            l = this.device,
            u = this.renderer,
            d = [];
          if (e) {
            let e = this.getClearColor();
            n = { r: e.r, g: e.g, b: e.b, a: e.a };
          }
          if (null === i) {
            (a = u.depth), (o = u.stencil);
            let t = this._getDefaultRenderPassDescriptor();
            if (e) {
              let e = (d = t.colorAttachments)[0];
              (e.clearValue = n), (e.loadOp = fo.Clear), (e.storeOp = fa.Store);
            }
            (a || o) && (s = t.depthStencilAttachment);
          } else {
            (a = i.depth), (o = i.stencil);
            let l = {
              loadOp: e ? fo.Clear : fo.Load,
              clearValue: e ? n : void 0,
            };
            a &&
              ((l.depthLoadOp = t ? fo.Clear : fo.Load),
              (l.depthClearValue = t ? u.getClearDepth() : void 0),
              (l.depthStoreOp = fa.Store)),
              o &&
                ((l.stencilLoadOp = r ? fo.Clear : fo.Load),
                (l.stencilClearValue = r ? u.getClearStencil() : void 0),
                (l.stencilStoreOp = fa.Store));
            let h = this._getRenderPassDescriptor(i, l);
            (d = h.colorAttachments), (s = h.depthStencilAttachment);
          }
          a &&
            s &&
            (t
              ? ((s.depthLoadOp = fo.Clear),
                (s.depthClearValue = u.getClearDepth()))
              : (s.depthLoadOp = fo.Load),
            (s.depthStoreOp = fa.Store)),
            o &&
              s &&
              (r
                ? ((s.stencilLoadOp = fo.Clear),
                  (s.stencilClearValue = u.getClearStencil()))
                : (s.stencilLoadOp = fo.Load),
              (s.stencilStoreOp = fa.Store));
          let h = l.createCommandEncoder({ label: "clear" });
          h
            .beginRenderPass({ colorAttachments: d, depthStencilAttachment: s })
            .end(),
            l.queue.submit([h.finish()]);
        }
        beginCompute(e) {
          let t = this.get(e),
            r = { label: "computeGroup_" + e.id };
          this.initTimestampQuery(e, r),
            (t.cmdEncoderGPU = this.device.createCommandEncoder({
              label: "computeGroup_" + e.id,
            })),
            (t.passEncoderGPU = t.cmdEncoderGPU.beginComputePass(r));
        }
        compute(e, t, r, i, s = null) {
          let n,
            a = this.get(t),
            { passEncoderGPU: o } = this.get(e),
            l = this.get(i).pipeline;
          this.pipelineUtils.setPipeline(o, l);
          for (let e = 0, t = r.length; e < t; e++) {
            let t = r[e],
              i = this.get(t);
            o.setBindGroup(e, i.group);
          }
          if ((null === s && (s = t.count), "number" == typeof s)) {
            let e = s;
            if (void 0 === a.dispatchSize || a.count !== e) {
              (a.dispatchSize = [0, 1, 1]), (a.count = e);
              let r = t.workgroupSize,
                i = r[0];
              for (let e = 1; e < r.length; e++) i *= r[e];
              let s = Math.ceil(e / i),
                o = this.device.limits.maxComputeWorkgroupsPerDimension;
              (n = [s, 1, 1]),
                s > o && ((n[0] = Math.min(s, o)), (n[1] = Math.ceil(s / o))),
                (a.dispatchSize = n);
            }
            n = a.dispatchSize;
          } else n = s;
          o.dispatchWorkgroups(n[0], n[1] || 1, n[2] || 1);
        }
        finishCompute(e) {
          let t = this.get(e);
          t.passEncoderGPU.end(),
            this.device.queue.submit([t.cmdEncoderGPU.finish()]);
        }
        async waitForGPU() {
          await this.device.queue.onSubmittedWorkDone();
        }
        draw(e, t) {
          let { object: r, material: i, context: s, pipeline: n } = e,
            a = e.getBindings(),
            o = this.get(s),
            l = this.get(n).pipeline,
            d = e.getIndex(),
            h = null !== d,
            c = e.getDrawParameters();
          if (null === c) return;
          let p = (t, r) => {
              this.pipelineUtils.setPipeline(t, l), (r.pipeline = l);
              let n = r.bindingGroups;
              for (let e = 0, r = a.length; e < r; e++) {
                let r = a[e],
                  i = this.get(r);
                n[r.index] !== r.id &&
                  (t.setBindGroup(r.index, i.group), (n[r.index] = r.id));
              }
              if (!0 === h && r.index !== d) {
                let e = this.get(d).buffer,
                  i = d.array instanceof Uint16Array ? fd.Uint16 : fd.Uint32;
                t.setIndexBuffer(e, i), (r.index = d);
              }
              let u = e.getVertexBuffers();
              for (let e = 0, i = u.length; e < i; e++) {
                let i = u[e];
                if (r.attributes[e] !== i) {
                  let s = this.get(i).buffer;
                  t.setVertexBuffer(e, s), (r.attributes[e] = i);
                }
              }
              !0 === s.stencil &&
                !0 === i.stencilWrite &&
                o.currentStencilRef !== i.stencilRef &&
                (t.setStencilReference(i.stencilRef),
                (o.currentStencilRef = i.stencilRef));
            },
            g = (i, s) => {
              if ((p(i, s), !0 === r.isBatchedMesh)) {
                let e = r._multiDrawStarts,
                  s = r._multiDrawCounts,
                  n = r._multiDrawCount,
                  a = r._multiDrawInstances;
                null !== a &&
                  (0, u.mcG)(
                    "THREE.WebGPUBackend: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."
                  );
                for (let o = 0; o < n; o++) {
                  let n = a ? a[o] : 1,
                    l = n > 1 ? 0 : o;
                  !0 === h
                    ? i.drawIndexed(
                        s[o],
                        n,
                        e[o] / d.array.BYTES_PER_ELEMENT,
                        0,
                        l
                      )
                    : i.draw(s[o], n, e[o], l),
                    t.update(r, s[o], n);
                }
              } else if (!0 === h) {
                let { vertexCount: s, instanceCount: n, firstVertex: a } = c,
                  o = e.getIndirect();
                if (null !== o) {
                  let e = this.get(o).buffer;
                  i.drawIndexedIndirect(e, 0);
                } else i.drawIndexed(s, n, a, 0, 0);
                t.update(r, s, n);
              } else {
                let { vertexCount: s, instanceCount: n, firstVertex: a } = c,
                  o = e.getIndirect();
                if (null !== o) {
                  let e = this.get(o).buffer;
                  i.drawIndirect(e, 0);
                } else i.draw(s, n, a, 0);
                t.update(r, s, n);
              }
            };
          if (e.camera.isArrayCamera && e.camera.cameras.length > 0) {
            let t = this.get(e.camera),
              i = e.camera.cameras,
              n = e.getBindingGroup("cameraIndex");
            if (void 0 === t.indexesGPU || t.indexesGPU.length !== i.length) {
              let e = this.get(n),
                r = [],
                s = new Uint32Array([0, 0, 0, 0]);
              for (let t = 0, n = i.length; t < n; t++) {
                s[0] = t;
                let i = this.bindingUtils.createBindGroupIndex(s, e.layout);
                r.push(i);
              }
              t.indexesGPU = r;
            }
            let a = this.renderer.getPixelRatio();
            for (let e = 0, l = i.length; e < l; e++) {
              let l = i[e];
              if (r.layers.test(l.layers)) {
                let r = l.viewport,
                  i = o.currentPass,
                  u = o.currentSets;
                if (o.bundleEncoders) {
                  let t = o.bundleEncoders[e],
                    r = o.bundleSets[e];
                  (i = t), (u = r);
                }
                r &&
                  i.setViewport(
                    Math.floor(r.x * a),
                    Math.floor(r.y * a),
                    Math.floor(r.width * a),
                    Math.floor(r.height * a),
                    s.viewportValue.minDepth,
                    s.viewportValue.maxDepth
                  ),
                  n &&
                    t.indexesGPU &&
                    (i.setBindGroup(n.index, t.indexesGPU[e]),
                    (u.bindingGroups[n.index] = n.id)),
                  g(i, u);
              }
            }
          } else if (o.currentPass) {
            if (void 0 !== o.occlusionQuerySet) {
              let e = o.lastOcclusionObject;
              e !== r &&
                (null !== e &&
                  !0 === e.occlusionTest &&
                  (o.currentPass.endOcclusionQuery(), o.occlusionQueryIndex++),
                !0 === r.occlusionTest &&
                  (o.currentPass.beginOcclusionQuery(o.occlusionQueryIndex),
                  (o.occlusionQueryObjects[o.occlusionQueryIndex] = r)),
                (o.lastOcclusionObject = r));
            }
            g(o.currentPass, o.currentSets);
          }
        }
        needsRenderUpdate(e) {
          let t = this.get(e),
            { object: r, material: i } = e,
            s = this.utils,
            n = s.getSampleCountRenderContext(e.context),
            a = s.getCurrentColorSpace(e.context),
            o = s.getCurrentColorFormat(e.context),
            l = s.getCurrentDepthStencilFormat(e.context),
            u = s.getPrimitiveTopology(r, i),
            d = !1;
          return (
            (t.material !== i ||
              t.materialVersion !== i.version ||
              t.transparent !== i.transparent ||
              t.blending !== i.blending ||
              t.premultipliedAlpha !== i.premultipliedAlpha ||
              t.blendSrc !== i.blendSrc ||
              t.blendDst !== i.blendDst ||
              t.blendEquation !== i.blendEquation ||
              t.blendSrcAlpha !== i.blendSrcAlpha ||
              t.blendDstAlpha !== i.blendDstAlpha ||
              t.blendEquationAlpha !== i.blendEquationAlpha ||
              t.colorWrite !== i.colorWrite ||
              t.depthWrite !== i.depthWrite ||
              t.depthTest !== i.depthTest ||
              t.depthFunc !== i.depthFunc ||
              t.stencilWrite !== i.stencilWrite ||
              t.stencilFunc !== i.stencilFunc ||
              t.stencilFail !== i.stencilFail ||
              t.stencilZFail !== i.stencilZFail ||
              t.stencilZPass !== i.stencilZPass ||
              t.stencilFuncMask !== i.stencilFuncMask ||
              t.stencilWriteMask !== i.stencilWriteMask ||
              t.side !== i.side ||
              t.alphaToCoverage !== i.alphaToCoverage ||
              t.sampleCount !== n ||
              t.colorSpace !== a ||
              t.colorFormat !== o ||
              t.depthStencilFormat !== l ||
              t.primitiveTopology !== u ||
              t.clippingContextCacheKey !== e.clippingContextCacheKey) &&
              ((t.material = i),
              (t.materialVersion = i.version),
              (t.transparent = i.transparent),
              (t.blending = i.blending),
              (t.premultipliedAlpha = i.premultipliedAlpha),
              (t.blendSrc = i.blendSrc),
              (t.blendDst = i.blendDst),
              (t.blendEquation = i.blendEquation),
              (t.blendSrcAlpha = i.blendSrcAlpha),
              (t.blendDstAlpha = i.blendDstAlpha),
              (t.blendEquationAlpha = i.blendEquationAlpha),
              (t.colorWrite = i.colorWrite),
              (t.depthWrite = i.depthWrite),
              (t.depthTest = i.depthTest),
              (t.depthFunc = i.depthFunc),
              (t.stencilWrite = i.stencilWrite),
              (t.stencilFunc = i.stencilFunc),
              (t.stencilFail = i.stencilFail),
              (t.stencilZFail = i.stencilZFail),
              (t.stencilZPass = i.stencilZPass),
              (t.stencilFuncMask = i.stencilFuncMask),
              (t.stencilWriteMask = i.stencilWriteMask),
              (t.side = i.side),
              (t.alphaToCoverage = i.alphaToCoverage),
              (t.sampleCount = n),
              (t.colorSpace = a),
              (t.colorFormat = o),
              (t.depthStencilFormat = l),
              (t.primitiveTopology = u),
              (t.clippingContextCacheKey = e.clippingContextCacheKey),
              (d = !0)),
            d
          );
        }
        getRenderCacheKey(e) {
          let { object: t, material: r } = e,
            i = this.utils,
            s = e.context;
          return [
            r.transparent,
            r.blending,
            r.premultipliedAlpha,
            r.blendSrc,
            r.blendDst,
            r.blendEquation,
            r.blendSrcAlpha,
            r.blendDstAlpha,
            r.blendEquationAlpha,
            r.colorWrite,
            r.depthWrite,
            r.depthTest,
            r.depthFunc,
            r.stencilWrite,
            r.stencilFunc,
            r.stencilFail,
            r.stencilZFail,
            r.stencilZPass,
            r.stencilFuncMask,
            r.stencilWriteMask,
            r.side,
            i.getSampleCountRenderContext(s),
            i.getCurrentColorSpace(s),
            i.getCurrentColorFormat(s),
            i.getCurrentDepthStencilFormat(s),
            i.getPrimitiveTopology(t, r),
            e.getGeometryCacheKey(),
            e.clippingContextCacheKey,
          ].join();
        }
        createSampler(e) {
          this.textureUtils.createSampler(e);
        }
        destroySampler(e) {
          this.textureUtils.destroySampler(e);
        }
        createDefaultTexture(e) {
          this.textureUtils.createDefaultTexture(e);
        }
        createTexture(e, t) {
          this.textureUtils.createTexture(e, t);
        }
        updateTexture(e, t) {
          this.textureUtils.updateTexture(e, t);
        }
        generateMipmaps(e) {
          this.textureUtils.generateMipmaps(e);
        }
        destroyTexture(e) {
          this.textureUtils.destroyTexture(e);
        }
        async copyTextureToBuffer(e, t, r, i, s, n) {
          return this.textureUtils.copyTextureToBuffer(e, t, r, i, s, n);
        }
        initTimestampQuery(e, t) {
          if (!this.trackTimestamp) return;
          let r = e.isComputeNode ? "compute" : "render";
          this.timestampQueryPool[r] ||
            (this.timestampQueryPool[r] = new f8(this.device, r, 2048));
          let i = this.timestampQueryPool[r],
            s = i.allocateQueriesForContext(e);
          t.timestampWrites = {
            querySet: i.querySet,
            beginningOfPassWriteIndex: s,
            endOfPassWriteIndex: s + 1,
          };
        }
        createNodeBuilder(e, t) {
          return new fZ(e, t);
        }
        createProgram(e) {
          this.get(e).module = {
            module: this.device.createShaderModule({
              code: e.code,
              label: e.stage + ("" !== e.name ? `_${e.name}` : ""),
            }),
            entryPoint: "main",
          };
        }
        destroyProgram(e) {
          this.delete(e);
        }
        createRenderPipeline(e, t) {
          this.pipelineUtils.createRenderPipeline(e, t);
        }
        createComputePipeline(e, t) {
          this.pipelineUtils.createComputePipeline(e, t);
        }
        beginBundle(e) {
          let t = this.get(e);
          (t._currentPass = t.currentPass),
            (t._currentSets = t.currentSets),
            (t.currentSets = {
              attributes: {},
              bindingGroups: [],
              pipeline: null,
              index: null,
            }),
            (t.currentPass = this.pipelineUtils.createBundleEncoder(e));
        }
        finishBundle(e, t) {
          let r = this.get(e),
            i = r.currentPass.finish();
          (this.get(t).bundleGPU = i),
            (r.currentSets = r._currentSets),
            (r.currentPass = r._currentPass);
        }
        addBundle(e, t) {
          this.get(e).renderBundles.push(this.get(t).bundleGPU);
        }
        createBindings(e, t, r, i) {
          this.bindingUtils.createBindings(e, t, r, i);
        }
        updateBindings(e, t, r, i) {
          this.bindingUtils.createBindings(e, t, r, i);
        }
        updateBinding(e) {
          this.bindingUtils.updateBinding(e);
        }
        createIndexAttribute(e) {
          let t =
            GPUBufferUsage.INDEX |
            GPUBufferUsage.COPY_SRC |
            GPUBufferUsage.COPY_DST;
          (e.isStorageBufferAttribute || e.isStorageInstancedBufferAttribute) &&
            (t |= GPUBufferUsage.STORAGE),
            this.attributeUtils.createAttribute(e, t);
        }
        createAttribute(e) {
          this.attributeUtils.createAttribute(
            e,
            GPUBufferUsage.VERTEX |
              GPUBufferUsage.COPY_SRC |
              GPUBufferUsage.COPY_DST
          );
        }
        createStorageAttribute(e) {
          this.attributeUtils.createAttribute(
            e,
            GPUBufferUsage.STORAGE |
              GPUBufferUsage.VERTEX |
              GPUBufferUsage.COPY_SRC |
              GPUBufferUsage.COPY_DST
          );
        }
        createIndirectStorageAttribute(e) {
          this.attributeUtils.createAttribute(
            e,
            GPUBufferUsage.STORAGE |
              GPUBufferUsage.INDIRECT |
              GPUBufferUsage.COPY_SRC |
              GPUBufferUsage.COPY_DST
          );
        }
        updateAttribute(e) {
          this.attributeUtils.updateAttribute(e);
        }
        destroyAttribute(e) {
          this.attributeUtils.destroyAttribute(e);
        }
        updateSize() {
          (this.colorBuffer = this.textureUtils.getColorBuffer()),
            (this.defaultRenderPassdescriptor = null);
        }
        getMaxAnisotropy() {
          return 16;
        }
        hasFeature(e) {
          return this.device.features.has(e);
        }
        copyTextureToTexture(e, t, r = null, i = null, s = 0, n = 0) {
          let a = 0,
            o = 0,
            l = 0,
            u = 0,
            d = 0,
            h = 0,
            c = e.image.width,
            p = e.image.height,
            g = 1;
          null !== r &&
            (!0 === r.isBox3
              ? ((u = r.min.x),
                (d = r.min.y),
                (h = r.min.z),
                (c = r.max.x - r.min.x),
                (p = r.max.y - r.min.y),
                (g = r.max.z - r.min.z))
              : ((u = r.min.x),
                (d = r.min.y),
                (c = r.max.x - r.min.x),
                (p = r.max.y - r.min.y),
                (g = 1))),
            null !== i && ((a = i.x), (o = i.y), (l = i.z || 0));
          let m = this.device.createCommandEncoder({
              label: "copyTextureToTexture_" + e.id + "_" + t.id,
            }),
            f = this.get(e).texture,
            y = this.get(t).texture;
          m.copyTextureToTexture(
            { texture: f, mipLevel: s, origin: { x: u, y: d, z: h } },
            { texture: y, mipLevel: n, origin: { x: a, y: o, z: l } },
            [c, p, g]
          ),
            this.device.queue.submit([m.finish()]),
            0 === n &&
              t.generateMipmaps &&
              this.textureUtils.generateMipmaps(t);
        }
        copyFramebufferToTexture(e, t, r) {
          let i,
            s = this.get(t),
            n = null;
          n = t.renderTarget
            ? e.isDepthTexture
              ? this.get(t.depthTexture).texture
              : this.get(t.textures[0]).texture
            : e.isDepthTexture
            ? this.textureUtils.getDepthBuffer(t.depth, t.stencil)
            : this.context.getCurrentTexture();
          let a = this.get(e).texture;
          if (n.format !== a.format)
            return void console.error(
              "WebGPUBackend: copyFramebufferToTexture: Source and destination formats do not match.",
              n.format,
              a.format
            );
          if (
            (s.currentPass
              ? (s.currentPass.end(), (i = s.encoder))
              : (i = this.device.createCommandEncoder({
                  label: "copyFramebufferToTexture_" + e.id,
                })),
            i.copyTextureToTexture(
              { texture: n, origin: [r.x, r.y, 0] },
              { texture: a },
              [r.z, r.w]
            ),
            s.currentPass)
          ) {
            let { descriptor: e } = s;
            for (let t = 0; t < e.colorAttachments.length; t++)
              e.colorAttachments[t].loadOp = fo.Load;
            if (
              (t.depth && (e.depthStencilAttachment.depthLoadOp = fo.Load),
              t.stencil && (e.depthStencilAttachment.stencilLoadOp = fo.Load),
              (s.currentPass = i.beginRenderPass(e)),
              (s.currentSets = {
                attributes: {},
                bindingGroups: [],
                pipeline: null,
                index: null,
              }),
              t.viewport && this.updateViewport(t),
              t.scissor)
            ) {
              let { x: e, y: r, width: i, height: n } = t.scissorValue;
              s.currentPass.setScissorRect(e, r, i, n);
            }
          } else this.device.queue.submit([i.finish()]);
          e.generateMipmaps && this.textureUtils.generateMipmaps(e);
        }
      }
      class f9 extends u.nCl {
        constructor(e, t, r, i, s, n) {
          super(e, t, r, i, s, n), (this.iesMap = null);
        }
        copy(e, t) {
          return super.copy(e, t), (this.iesMap = e.iesMap), this;
        }
      }
      class f7 extends u.nCl {
        constructor(e, t, r, i, s, n) {
          super(e, t, r, i, s, n), (this.aspect = null);
        }
        copy(e, t) {
          return super.copy(e, t), (this.aspect = e.aspect), this;
        }
      }
      class ye extends ms {
        constructor() {
          super(),
            this.addMaterial(lo, "MeshPhongMaterial"),
            this.addMaterial(uD, "MeshStandardMaterial"),
            this.addMaterial(uO, "MeshPhysicalMaterial"),
            this.addMaterial(u$, "MeshToonMaterial"),
            this.addMaterial(o9, "MeshBasicMaterial"),
            this.addMaterial(ln, "MeshLambertMaterial"),
            this.addMaterial(oK, "MeshNormalMaterial"),
            this.addMaterial(uq, "MeshMatcapMaterial"),
            this.addMaterial(ok, "LineBasicMaterial"),
            this.addMaterial(o$, "LineDashedMaterial"),
            this.addMaterial(uZ, "PointsMaterial"),
            this.addMaterial(uQ, "SpriteMaterial"),
            this.addMaterial(u1, "ShadowMaterial"),
            this.addLight(pp, u.HiM),
            this.addLight(gG, u.ZyN),
            this.addLight(gW, u.ure),
            this.addLight(gH, u.nCl),
            this.addLight(gK, u.$p8),
            this.addLight(gQ, u.dth),
            this.addLight(gY, u.FZo),
            this.addLight(gq, f9),
            this.addLight(gX, f7),
            this.addToneMapping(h2, u.kyO),
            this.addToneMapping(h3, u.Mjd),
            this.addToneMapping(h4, u.nNL),
            this.addToneMapping(h8, u.FV),
            this.addToneMapping(ce, u.LAk),
            this.addToneMapping(ct, u.aJ8);
        }
      }
      class yt extends mR {
        constructor(e = {}) {
          let t;
          e.forceWebGL
            ? (t = fi)
            : ((t = f5),
              (e.getFallback = () => (
                console.warn(
                  "THREE.WebGPURenderer: WebGPU is not available, running under WebGL2 backend."
                ),
                new fi(e)
              ))),
            super(new t(e), e),
            (this.library = new ye()),
            (this.isWebGPURenderer = !0),
            "undefined" != typeof __THREE_DEVTOOLS__ &&
              __THREE_DEVTOOLS__.dispatchEvent(
                new CustomEvent("observe", { detail: this })
              );
        }
      }
      u.YJl, u.gPd, u.gPd, u.gPd, u.aHM, u.jut, u.XTe, u.YJl;
    },
  },
]);
