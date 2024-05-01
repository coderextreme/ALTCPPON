#!/bin/bash
find ../data -name '*.gltf' -print0 | xargs -0 node gltf2api.js 2>&1
