module MediaQueryList exposing (Error, Model, matchMedia)

import Native.MediaQueryList


type alias Error =
    { stack : String
    , message : String
    }


type alias Model =
    { media : String
    , matches : Bool
    }


matchMedia : String -> Platform.Task Error Model
matchMedia mediaQuery =
    Native.MediaQueryList.matchMedia mediaQuery
