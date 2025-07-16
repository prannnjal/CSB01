import React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(function ToastViewport(props, ref) {
  const { className, ...rest } = props
  return (
    <ToastPrimitives.Viewport ref={ref} className={className} {...rest} />
  )
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = React.forwardRef(function Toast(props, ref) {
  const { className, variant, ...rest } = props
  return (
    <ToastPrimitives.Root ref={ref} className={className} {...rest} />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(function ToastAction(props, ref) {
  const { className, ...rest } = props
  return (
    <ToastPrimitives.Action ref={ref} className={className} {...rest} />
  )
})
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(function ToastClose(props, ref) {
  const { className, ...rest } = props
  return (
    <ToastPrimitives.Close ref={ref} className={className} {...rest} />
  )
})
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(function ToastTitle(props, ref) {
  const { className, ...rest } = props
  return (
    <ToastPrimitives.Title ref={ref} className={className} {...rest} />
  )
})
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(function ToastDescription(props, ref) {
  const { className, ...rest } = props
  return (
    <ToastPrimitives.Description ref={ref} className={className} {...rest} />
  )
})
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} 