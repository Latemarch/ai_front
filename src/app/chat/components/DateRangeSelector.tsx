"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { usePeriodActions } from "@/stores/clientSessionStore"

interface DateRangeSelectorProps {
  className?: string
}

export function DateRangeSelector({ className }: DateRangeSelectorProps) {
  const { setPeriod, clearPeriod, getStartDate, getEndDate } = usePeriodActions()

  // Convert period timestamps to DateRange for the calendar
  const date: DateRange | undefined = React.useMemo(() => {
    const startDate = getStartDate()
    const endDate = getEndDate()
    
    if (startDate && endDate) {
      return { from: startDate, to: endDate }
    }
    if (startDate) {
      return { from: startDate, to: undefined }
    }
    return undefined
  }, [getStartDate, getEndDate])

  const handleDateChange = (newDate: DateRange | undefined) => {
    if (newDate?.from && newDate?.to) {
      const fromTimestamp = Math.floor(newDate.from.getTime() / 1000)
      const toTimestamp = Math.floor(newDate.to.getTime() / 1000)
      setPeriod([fromTimestamp, toTimestamp])
    } else {
      clearPeriod()
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}