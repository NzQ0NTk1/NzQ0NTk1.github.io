function addEvent(obj, eventType, fname, capture)
{
	if (obj.addEventListener)
	{
		obj.addEventListener(eventType, fname, capture);
		return true;
	}
	else if (obj.attachEvent)
	{
		var s = obj.attachEvent("on" + eventType, fname);
		return s;
	}
	else
	{
		alert("Handler could not be attached.");
	}
}
addEvent(document,"keypress",ShortKey,true);