(function() {var implementors = {};
implementors["actix_files"] = [{"text":"impl UnwindSafe for Directory","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Files","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NamedFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HttpRange","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FilesService","synthetic":true,"types":[]}];
implementors["actix_http"] = [{"text":"impl UnwindSafe for BodySize","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for ResponseBody&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Body","synthetic":true,"types":[]},{"text":"impl&lt;S, E&gt; UnwindSafe for BodyStream&lt;S, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for SizedStream&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, S, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !UnwindSafe for HttpServiceBuilder&lt;T, S, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, U&gt; !UnwindSafe for Connector&lt;T, U&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ConnectError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidUrl","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SendRequestError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FreezeRequestError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Protocol","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Connect","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeepAlive","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for Decoder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for Encoder&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Extensions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AcceptCharset","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Accept","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AcceptLanguage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Allow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CacheControl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CacheDirective","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DispositionType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DispositionParam","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentDisposition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentLanguage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentRangeSpec","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Date","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ETag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expires","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IfMatch","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IfModifiedSince","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IfNoneMatch","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IfRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IfUnmodifiedSince","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LastModified","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HeaderMap","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentEncoding","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtendedValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectionType","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for RequestHead","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for RequestHeadType","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResponseHead","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Message&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !UnwindSafe for Payload&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !UnwindSafe for Request&lt;P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !UnwindSafe for Response&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResponseBuilder","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !UnwindSafe for HttpService&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ParseError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PayloadError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for DispatchError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentTypeError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for InternalError&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ClientCodec","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ClientPayloadCodec","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Codec","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !UnwindSafe for Dispatcher&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExpectHandler","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Payload","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X&nbsp;=&nbsp;ExpectHandler, U&nbsp;=&nbsp;UpgradeHandler&gt; !UnwindSafe for H1Service&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B, X, U&gt; !UnwindSafe for H1ServiceHandler&lt;T, S, B, X, U&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UpgradeHandler","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; !UnwindSafe for SendResponse&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Message&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MessageType","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B&gt; !UnwindSafe for Dispatcher&lt;T, S, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, S, B&gt; !UnwindSafe for H2Service&lt;T, S, B&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Payload","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestRequest","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestBuffer","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestSeqBuffer","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestSeqInner","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Frame","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Item","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Codec","synthetic":true,"types":[]},{"text":"impl&lt;S, T&gt; !UnwindSafe for Dispatcher&lt;S, T&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Parser","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OpCode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CloseCode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CloseReason","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ProtocolError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HandshakeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Protocol","synthetic":true,"types":[]}];
implementors["actix_http_test"] = [{"text":"impl !UnwindSafe for TestServer","synthetic":true,"types":[]}];
implementors["actix_multipart"] = [{"text":"impl !UnwindSafe for MultipartError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Multipart","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Field","synthetic":true,"types":[]}];
implementors["actix_web"] = [{"text":"impl&lt;T, B&gt; !UnwindSafe for App&lt;T, B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for AppService","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AppConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ServiceConfig","synthetic":true,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; UnwindSafe for Data&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UrlGenerationError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for UrlencodedError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QueryPayloadError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ReadlinesError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for AnyGuard","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for AllGuard","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConnectionInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Compress","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Condition&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DefaultHeaders","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for ErrorHandlerResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; !UnwindSafe for ErrorHandlers&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Logger","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TrailingSlash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NormalizePath","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for HttpRequest","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ReqData&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ResourceEndpoint&gt; !UnwindSafe for Resource&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResourceMap","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Route","synthetic":true,"types":[]},{"text":"impl&lt;T&nbsp;=&nbsp;ScopeEndpoint&gt; !UnwindSafe for Scope&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, I, S, B&gt; !UnwindSafe for HttpServer&lt;F, I, S, B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ServiceRequest","synthetic":true,"types":[]},{"text":"impl&lt;B&nbsp;=&nbsp;Body&gt; !UnwindSafe for ServiceResponse&lt;B&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WebService","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestRequest","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestServerConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestServer","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; UnwindSafe for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; !UnwindSafe for EitherExtractError&lt;A, B&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Form&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FormConfig","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !UnwindSafe for UrlEncoded&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Json&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for JsonConfig","synthetic":true,"types":[]},{"text":"impl&lt;U&gt; !UnwindSafe for JsonBody&lt;U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Path&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PathConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Payload","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PayloadConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Query&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for QueryConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !UnwindSafe for Readlines&lt;T&gt;","synthetic":true,"types":[]}];
implementors["actix_web_actors"] = [{"text":"impl&lt;A&gt; !UnwindSafe for HttpContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !UnwindSafe for WebsocketContext&lt;A&gt;","synthetic":true,"types":[]}];
implementors["awc"] = [{"text":"impl !UnwindSafe for ClientBuilder","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for BoxedSocket","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WsClientError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for JsonPayloadError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FrozenClientRequest","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FrozenSendBuilder","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ClientRequest","synthetic":true,"types":[]},{"text":"impl&lt;S&nbsp;=&nbsp;Pin&lt;Box&lt;dyn Stream&lt;Item = Result&lt;Bytes, PayloadError&gt;&gt; + 'static, Global&gt;&gt;&gt; !UnwindSafe for ClientResponse&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for MessageBody&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S, U&gt; !UnwindSafe for JsonBody&lt;S, U&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SendClientRequest","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TestResponse","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WebsocketsRequest","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Client","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()