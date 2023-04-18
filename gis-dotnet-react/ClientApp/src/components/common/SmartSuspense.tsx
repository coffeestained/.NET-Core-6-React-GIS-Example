import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Suspense } from "react";

const Fallback = ({ children, onRendered }) => {
    useLayoutEffect(() => {
      onRendered();
    }, [onRendered]);
    return <>{children}</>;
};

const PromiseThrower = () => {
    throw new Promise(() => {});
};

const DelayedFallback = ({ fallbackDelayMs = 0 }) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (fallbackDelayMs) {
        const timeoutId = setTimeout(() => {
            setReady(true);
        }, fallbackDelayMs);
        return () => {
            clearInterval(timeoutId);
        };
        }
    }, [fallbackDelayMs]);

    if  (fallbackDelayMs == 0 || ready)
        return <PromiseThrower />;
    else return null;
};

const SmartSuspenseContext = React.createContext({
    current: null
});

export const useSmartSuspendable = (maySuspend) => {
    const fallbackMinDurationPromiseRef = useContext(SmartSuspenseContext);
    try {
      const result = maySuspend();
      if (fallbackMinDurationPromiseRef.current) {
        throw fallbackMinDurationPromiseRef.current;
      }
      return result;
    } catch (mayBePromise) {
      if (mayBePromise instanceof Promise) {
        throw mayBePromise;
      } else {
        throw mayBePromise;
      }
    }
};

export const SmartSuspense = ({
    children,
    fallback,
    fallbackDelayMs = 0,
    fallbackMinDurationMs = 0
}) => {
    const fallbackMinDurationPromiseRef = useRef(null);
    console.log(children, fallback, fallbackDelayMs, fallbackMinDurationMs)
    return (
      <SmartSuspenseContext.Provider value={fallbackMinDurationPromiseRef}>
        <Suspense
          fallback={
            <Fallback
              onRendered={() => {
                fallbackMinDurationPromiseRef.current = new Promise<void>((resolve) => {
                  setTimeout(() => {
                    fallbackMinDurationPromiseRef.current = null;
                    console.log('resolved2')
                    resolve();
                    console.log('resolved')
                  }, fallbackMinDurationMs);
                });

              }}
            >
              {fallback}
            </Fallback>
          }
        >
          <Suspense
            fallback={<DelayedFallback fallbackDelayMs={fallbackDelayMs} />}
          >
            {children}
          </Suspense>
        </Suspense>
      </SmartSuspenseContext.Provider>
    );
};
