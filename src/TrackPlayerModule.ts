import { TurboModuleRegistry, NativeModules } from 'react-native';
import type { Spec } from './specs/NativeTrackPlayerModule';

// Use TurboModuleRegistry on New Architecture; fall back to NativeModules on Old Architecture.
const TrackPlayerModule: Spec =
  TurboModuleRegistry.get<Spec>('TrackPlayerModule') ??
  (NativeModules.TrackPlayerModule as unknown as Spec);

export default TrackPlayerModule;
