package expo.modules.nativearrkit

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.jni.JavaScriptFunction

class NativeArrKitModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeArrKit")

    Function("zip") { arr1: List<Any>, arr2: List<Any> -> 
      arr1.zip(arr2) 
    }

    Function("partition") { arr: List<Any>, predicate: JavaScriptFunction<Boolean> -> 
      arr.partition { predicate.invoke(it) } 
    }

    Function("dropFirst") { arr: List<Any>, n: Int -> 
      arr.drop(n) 
    }

    Function("dropLast") { arr: List<Any>, n: Int -> 
      arr.dropLast(n) 
    }

    Function("dropWhile") { arr: List<Any>, predicate: JavaScriptFunction<Boolean> -> 
      arr.dropWhile { predicate.invoke(it) }
    }

    Function("takeFirst") { arr: List<Any>, n: Int -> 
      arr.take(n) 
    }

    Function("takeLast") { arr: List<Any>, n: Int -> 
      arr.takeLast(n) 
    }

    Function("takeWhile") { arr: List<Any>, predicate: JavaScriptFunction<Boolean> -> 
      arr.takeWhile { predicate.invoke(it) }
    }

    Function("removeAt") { arr: List<Any>, index: Int -> 
      arr.toMutableList().apply { removeAt(index) }
    }

    Function("shuffle") { arr: List<Any> ->
      arr.shuffled() 
    }
  }
}

