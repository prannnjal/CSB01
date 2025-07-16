import React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(function TabsList(props, ref) {
  const { className, ...rest } = props
  return (
    <TabsPrimitive.List ref={ref} className={className} {...rest} />
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(function TabsTrigger(props, ref) {
  const { className, ...rest } = props
  return (
    <TabsPrimitive.Trigger ref={ref} className={className} {...rest} />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(function TabsContent(props, ref) {
  const { className, ...rest } = props
  return (
    <TabsPrimitive.Content ref={ref} className={className} {...rest} />
  )
})
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent } 