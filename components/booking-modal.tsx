"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useEffect, useState } from "react"

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    url?: string
}

export function BookingModal({
    isOpen,
    onClose,
    url = "https://calendly.com/contact-innovalize/30min"
}: BookingModalProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[900px] h-[80vh] p-0 overflow-hidden bg-background">
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Appointment"
                    className="w-full h-full"
                />
            </DialogContent>
        </Dialog>
    )
}
