// Minimal ambient declaration for shaka-player types used in this package.
// The full shaka-player types are available via node_modules/shaka-player/dist/shaka-player.compiled.d.ts
// but cannot be reliably referenced when installed as a git dependency.
declare namespace shaka {
  class Player {
    static isBrowserSupported(): boolean;
    constructor(mediaElement?: HTMLMediaElement | null);
    attach(mediaElement: HTMLMediaElement, initializeMediaSource?: boolean): Promise<void>;
    load(assetUri: string, startTime?: number | null, mimeType?: string): Promise<void>;
    unload(): Promise<void>;
    retryStreaming(): boolean;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject): void;
  }
  namespace polyfill {
    function installAll(): void;
  }
}
