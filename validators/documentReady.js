let documentIsReady = false;

function documentReadyHandler(fn) {
    if (!documentIsReady) {
        documentIsReady = true;
        if (document.addEventListener) {
            document.removeEventListener("DOMContentLoaded", function () {
                documentReadyHandler(fn);
            }, false);
        } else if (document.attachEvent) {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", function () {
                    documentReadyHandler(fn);
                });
            }
        }
        fn();
    }
}

export default function documentReady(fn) {
    // Mozilla, Opera and webkit currently support this event
    if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", function () {
            documentReadyHandler(fn);
        }, false);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", function () {
            documentReadyHandler(fn);
        }, false);

        // If IE event model is used
    } else if (document.attachEvent) {
        // ensure firing before onload,
        // maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", function () {
            documentReadyHandler(fn);
        });

        // A fallback to window.onload, that will always work
        window.attachEvent("onload", function () {
            documentReadyHandler(fn);
        });

        // If IE and not a frame
        // continually check to see if the document is ready
        var toplevel = false;

        try {
            toplevel = window.frameElement == null;
        } catch (e) {
        }

        if (document.documentElement.doScroll && toplevel) {
            doScrollCheck(function () {
                documentReadyHandler(fn);
            });
        }
    }
}

function doScrollCheck(fn) {
    if (documentIsReady) {
        return;
    }
    try {
        // If IE is used, use the trick by Diego Perini
        // http://javascript.nwbox.com/IEContentLoaded/
        document.documentElement.doScroll("left");
    } catch (error) {
        window.setTimeout(function () {
            doScrollCheck(fn);
        }, 1);
        return;
    }

    fn();
}