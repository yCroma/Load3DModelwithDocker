/*
export function LoadModel(FileName, URL, Scene) {
	const FileIdentifier = Identify(FileName)
	console.log("識別子：", FileIdentifier)
	console.log("URL：", URL)
	if (FileIdentifier === "obj") {
		const loader = new OBJLoader();
		loader.load(
			URL,
			function (obj) {
				console.log("obj: ", obj)
				Scene.add(obj)
			}
		)
		return loader
	}
}
*/

export function Identify(FileName) {
	// ファイル名から識別子を返す
	// TODO: .test.obj のようなファイル名の時に処理が止まる
	// sliceでは、.obj のような先頭にピリオドを削除
	return FileName.match(/\..*/)[0].slice(1)
}
