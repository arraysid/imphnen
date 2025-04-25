"use client";

import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  subMonths,
} from "date-fns";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Event } from "../types";

interface CustomCalendarProps {
  events: Event[];
}

export function EventCalendar({ events }: CustomCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  function prevMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function nextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  function getEventsForDate(date: Date): Event[] {
    return events.filter((event) => isSameDay(new Date(event.date), date));
  }

  return (
    <div className="border-2 border-black bg-white sm:border-4">
      {/* Calendar Header */}
      <div className="flex flex-col items-center justify-between gap-2 border-b-2 border-black p-2 sm:flex-row sm:border-b-4 sm:p-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="border border-black px-3 py-1 font-bold hover:bg-black hover:text-white sm:border-2"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextMonth}
            className="border border-black px-3 py-1 font-bold hover:bg-black hover:text-white sm:border-2"
          >
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Desktop Grid Calendar */}
      <div className="hidden p-2 sm:block sm:p-4">
        <div className="mb-2 grid grid-cols-7 gap-1 border-b-2 border-black pb-2 text-sm font-bold">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {daysInMonth.map((day, index) => {
            const dayEvents = getEventsForDate(day);
            const isCurrentMonth = isSameMonth(day, currentMonth);

            return (
              <div
                key={index}
                className={`aspect-square border-2 border-black p-1 sm:p-2 ${
                  !isCurrentMonth ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex h-full flex-col">
                  <span
                    className={`text-xs font-bold ${
                      isCurrentMonth ? "" : "text-gray-400"
                    }`}
                  >
                    {format(day, "d")}
                  </span>
                  <div className="flex-1 overflow-y-auto">
                    {dayEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="mt-1 truncate rounded bg-orange-100 p-1 text-xs"
                      >
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block truncate hover:underline"
                          >
                            {event.title}
                          </a>
                        ) : (
                          event.title
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile List Calendar */}
      <div className="block sm:hidden">
        <div className="space-y-2 p-2">
          {daysInMonth.map((day, index) => {
            const dayEvents = getEventsForDate(day);
            const isCurrentMonth = isSameMonth(day, currentMonth);

            return (
              <div
                key={index}
                className={`rounded border-2 border-black p-2 ${
                  !isCurrentMonth ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-bold ${
                      isCurrentMonth ? "" : "text-gray-400"
                    }`}
                  >
                    {format(day, "EEE, MMM d")}
                  </span>
                  {dayEvents.length > 0 && (
                    <span className="rounded-full bg-orange-200 px-2 py-1 text-xs">
                      {dayEvents.length} events
                    </span>
                  )}
                </div>
                {dayEvents.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {dayEvents.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="rounded bg-orange-100 p-2 text-sm"
                      >
                        {event.link ? (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline"
                          >
                            {event.title}
                          </a>
                        ) : (
                          event.title
                        )}
                        {event.date && (
                          <span className="ml-2 text-xs text-gray-600">
                            {event.date}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
