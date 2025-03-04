import ExpoModulesCore

public class NativeArrKitModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NativeArrKit")

    Function("zip") { (arr1: [Any], arr2: [Any]) -> [[Any]] in 
      zip(arr1, arr2).map { [$0.0, $0.1] }
    }

    Function("partition") { (arr: [Any], predicate: JavaScriptFunction<Bool>) -> [[Any]] in
      var mutableArr = arr
      let i = mutableArr.partition { (try? predicate.call($0)) ?? false }
      return [Array(mutableArr[i...]), Array(mutableArr[..<i])]
    }

    Function("dropFirst") { (arr: [Any], n: Int) -> [Any] in
      Array(arr.dropFirst(n))
    }

    Function("dropLast") { (arr: [Any], n: Int) -> [Any] in
      Array(arr.dropLast(n))
    }

    Function("dropWhile") { (arr: [Any], predicate: JavaScriptFunction<Bool>) -> [Any] in
      Array(arr.drop { (try? predicate.call($0)) ?? false })
    }

    Function("takeFirst") { (arr: [Any], n: Int) -> [Any] in
      Array(arr.prefix(n))
    }

    Function("takeLast") { (arr: [Any], n: Int) -> [Any] in
      Array(arr.suffix(n))
    }

    Function("takeWhile") { (arr: [Any], predicate: JavaScriptFunction<Bool>) -> [Any] in
      Array(arr.prefix { (try? predicate.call($0)) ?? false })
    }

    Function("removeAt") { (arr: [Any], index: Int) -> [Any] in
      var mutableArr = arr
      mutableArr.remove(at: index)
      return mutableArr
    }

    Function("shuffle") { (arr: [Any]) -> [Any] in
      var mutableArr = arr
      mutableArr.shuffle()
      return mutableArr
    }

  }
}
