// Copyright 2024 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

new class {
  constructor() {
    new class {
      [(() => {super[0x4141]})()] = super[0x4141];
    }
  }
};
