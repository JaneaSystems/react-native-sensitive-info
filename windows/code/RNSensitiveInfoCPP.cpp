#include "pch.h"
#include "RNSensitiveInfoCPP.h"

namespace winrt::RNSensitiveInfoCPP {
  void RNSensitiveInfo::getItem(std::string key,
                                winrt::Microsoft::ReactNative::JSValueObject JSVALUEOBJECTPARAMETER options,
                                winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValueObject> const& promise) noexcept {
    promise.Reject("not implemented");
  }
    
  void RNSensitiveInfo::setItem(std::string key,
                                std::string value,
                                winrt::Microsoft::ReactNative::JSValueObject JSVALUEOBJECTPARAMETER options,
                                winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValueObject> const& promise) noexcept {
    promise.Reject("not implemented");
  }

  void RNSensitiveInfo::deleteItem(std::string key,
                                   winrt::Microsoft::ReactNative::JSValueObject JSVALUEOBJECTPARAMETER options,
                                   winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValueObject> const& promise) noexcept {
    promise.Reject("not implemented");
  }

  void RNSensitiveInfo::getAllItems(winrt::Microsoft::ReactNative::JSValueObject JSVALUEOBJECTPARAMETER options,
                                    winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValueObject> const& promise) noexcept {
    promise.Reject("not implemented");
  }
}
