import React from 'react'
import { RefreshControl } from "react-native"

export default CustomRefreshControl = (props) => {
    return (
      <RefreshControl
        {...props}
        tintColor={"#1E5AA3"}
        colors = {["#1E5AA3"]}
        refreshing={props.refreshing}
        onRefresh={props.onRefresh}
      />
    )
  
  }