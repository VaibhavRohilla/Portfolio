import { Point, TilingSprite, TilingSpriteRenderer } from "pixi.js";
import { Scene } from "./Scene";
import { Globals } from "./Globals";


export class MainScene extends Scene {

	
	constructor() {
		super();
		const x = new TilingSprite(Globals.resources.x.texture , 20,20)
		
		
	}

	resize(): void {
	super.resize();

	}
	update(dt: number): void { 
	
	}

	recievedMessage(msgType: string, msgParams: any): void {
		
	}
}
