package com.doublesymmetry.trackplayer

import com.doublesymmetry.trackplayer.module.MusicModule
import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

/**
 * TrackPlayer
 * https://github.com/react-native-kit/react-native-track-player
 * @author Milen Pivchev @mpivchev
 */
class TrackPlayer : BaseReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == MusicModule.NAME) MusicModule(reactContext) else null
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                MusicModule.NAME to ReactModuleInfo(
                    MusicModule.NAME,
                    MusicModule::class.java.name,
                    /* canOverrideExistingModule = */ false,
                    /* needsEagerInit = */ false,
                    /* isCxxModule = */ false,
                    /* isTurboModule = */ ReactModuleInfo.classIsTurboModule(MusicModule::class.java)
                )
            )
        }
    }
}
