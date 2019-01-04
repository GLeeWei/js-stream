## Usage

* write
  ```
  let JSStream = require('js-stream');

  let nLength = 4 + 2 + array.length; // int + short + array

  let pBosStream = new JSStream.Bostream(nLength);

  pBosStream.writeInt32(1);

  pBosStream.writeShort(100);

  pBosStream.writeArray(array);

  let buffer = pBosStream.buffer();
  ```

* read
  ```
  let JSStream = require('js-stream');

  let pBiostream = new JSStream.Biostream(buffer);

  let i = pBiostream.readInt32();

  let b = pBiostream.readByte();

  let array = pBiostream.readArray(array, arrayLen);
  ```


## Build

To build the library or its components yourself, clone it from GitHub and install the development dependencies:

```
$> git clone https://github.com/GLeeWei/js-stream.git
$> cd js-stream
$> npm install
$> gulp
```