require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = package["name"]
  s.version = package["version"]
  s.summary = package["description"]
  s.license = package["license"]

  s.author = "David Chavez"
  s.homepage = package["repository"]["url"]
  s.platform = :ios, "13.0"

  s.source = { :git => package["repository"]["url"], :tag => "v#{s.version}" }
  s.source_files = "ios/**/*.{h,m,swift}"

  s.swift_version = "5.0"

  s.dependency "SwiftAudioEx", "1.1.0"

  # Adds React-Core, TurboModule headers, and sets RCT_NEW_ARCH_ENABLED compiler
  # flags when the consuming app has New Architecture enabled.
  install_modules_dependencies(s)
end
