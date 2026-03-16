/**
 * Codegen spec for react-native-track-player TurboModule.
 * This file is processed by React Native's codegen to generate type-safe
 * native bindings on both iOS and Android.
 *
 * Rules:
 *  - File must be named Native*.ts to be picked up by codegen.
 *  - UnsafeObject maps to NSDictionary (iOS) / ReadableMap (Android).
 *  - Object[] maps to NSArray (iOS) / ReadableArray (Android).
 *
 * @format
 */

import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';
import type {
  UnsafeObject,
  Double,
  Float,
  Int32,
} from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  // Required for RCTEventEmitter backward-compat in interop mode.
  addListener(eventName: string): void;
  removeListeners(count: Int32): void;

  // Lifecycle
  setupPlayer(options: UnsafeObject): Promise<void>;
  isServiceRunning(): Promise<boolean>;

  // Queue management
  add(tracks: Object[], insertBeforeIndex: Int32): Promise<Int32 | null>;
  load(track: UnsafeObject): Promise<Int32 | null>;
  move(fromIndex: Int32, toIndex: Int32): Promise<void>;
  remove(indices: Object[]): Promise<void>;
  removeUpcomingTracks(): Promise<void>;
  setQueue(tracks: Object[]): Promise<void>;

  // Playback control
  skip(index: Int32, initialTime: Float): Promise<void>;
  skipToNext(initialTime: Float): Promise<void>;
  skipToPrevious(initialTime: Float): Promise<void>;
  reset(): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  retry(): Promise<void>;
  setPlayWhenReady(playWhenReady: boolean): Promise<void>;
  getPlayWhenReady(): Promise<boolean>;

  // Seeking
  seekTo(seconds: Float): Promise<void>;
  seekBy(offset: Float): Promise<void>;

  // Volume & rate
  setVolume(volume: Float): Promise<void>;
  getVolume(): Promise<Float>;
  setRate(rate: Float): Promise<void>;
  getRate(): Promise<Float>;

  // Repeat mode
  setRepeatMode(mode: Int32): Promise<void>;
  getRepeatMode(): Promise<Int32>;

  // State & progress
  getPlaybackState(): Promise<UnsafeObject>;
  getProgress(): Promise<UnsafeObject>;
  getDuration(): Promise<Double>;
  getPosition(): Promise<Double>;
  getBufferedPosition(): Promise<Double>;

  // Queue inspection
  getQueue(): Promise<Object[]>;
  getTrack(index: Int32): Promise<UnsafeObject | null>;
  getActiveTrack(): Promise<UnsafeObject | null>;
  getActiveTrackIndex(): Promise<Int32 | null>;

  // Options & metadata
  updateOptions(options: UnsafeObject): Promise<void>;
  updateMetadataForTrack(index: Int32, metadata: UnsafeObject): Promise<void>;
  updateNowPlayingMetadata(metadata: UnsafeObject): Promise<void>;
  clearNowPlayingMetadata(): Promise<void>;

  // Sleep timer (iOS only — Android stubs will be no-ops)
  getSleepTimerProgress(): Promise<UnsafeObject>;
  setSleepTimer(time: Double): Promise<void>;
  sleepWhenActiveTrackReachesEnd(): Promise<void>;
  clearSleepTimer(): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TrackPlayerModule');
