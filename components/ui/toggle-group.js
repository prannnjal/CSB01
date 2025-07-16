import React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

const ToggleGroup = React.forwardRef(function ToggleGroup(props, ref) {
  const { className, variant, size, children, ...rest } = props
  return (
    <ToggleGroupContext.Provider value={{ size, variant }}>
      <ToggleGroupPrimitive.Root
        ref={ref}
        className={className}
        {...rest}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext.Provider>
  )
})
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef(function ToggleGroupItem(props, ref) {
  const { className, children, variant, size, ...rest } = props
  const context = React.useContext(ToggleGroupContext)
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={toggleVariants({ variant: variant ?? context.variant, size: size ?? context.size, className })}
      {...rest}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem } 