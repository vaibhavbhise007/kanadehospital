import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef(function AccordionItem(
    { className, ...props },
    ref
) {
    return (
        <AccordionPrimitive.Item
            ref={ref}
            className={cn('border-b', className)}
            {...props}
        />
    );
});

export const AccordionTrigger = React.forwardRef(function AccordionTrigger(
    { className, children, ...props },
    ref
) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
});

export const AccordionContent = React.forwardRef(function AccordionContent(
    { className, children, ...props },
    ref
) {
    return (
        <AccordionPrimitive.Content
            ref={ref}
            className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            {...props}
        >
            <div className={cn('pb-4 pt-0', className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
});
