<!-- IF roomId -->
<div component="chat/messages" class="expanded-chat" data-roomid="{roomId}">
	<button type="button" class="close" data-action="pop-out"><span aria-hidden="true"><i class="fa fa-compress"></i></span><span class="sr-only">[[modules:chat.pop-out]]</span></button>
	<button class="close controlsToggle" component="expanded-chat/controlsToggle"><i class="fa fa-gear"></i></button>

	<div class="controls hide" component="expanded-chat/controls">
		<!-- IF showUserInput -->
		<div class="users-tag-container">
			<input class="users-tag-input" type="text" class="form-control" placeholder="[[modules:chat.add-users-to-room]]" tabindex="4"/>
		</div>
		<!-- ENDIF showUserInput -->

		<input class="form-control" component="chat/room/name" value="{roomName}" <!-- IF !isOwner -->disabled<!-- ENDIF !isOwner -->/>
		<hr />
	</div>

	<ul class="chat-content">
		<!-- BEGIN messages -->
<li component="chat/message" class="chat-message clear" data-index="{messages.index}" data-mid="{messages.messageId}" data-uid="{messages.fromuid}" data-self="{messages.self}" data-break="{messages.newSet}" data-timestamp="{messages.timestamp}">
	<div class="message-header">
		<a href="{config.relative_path}/user/{messages.fromUser.userslug}">
			<!-- IF messages.fromUser.picture -->
			<img class="chat-user-image not-responsive" src="{messages.fromUser.picture}">
			<!-- ELSE -->
			<div class="user-icon chat-user-image" style="background-color: {messages.fromUser.icon:bgColor};">{messages.fromUser.icon:text}</div>
			<!-- ENDIF messages.fromUser.picture -->
		</a>
		<strong><span class="chat-user">{messages.fromUser.username}</span></strong>
		<span class="chat-timestamp timeago" title="{messages.timestampISO}"></span>
	</div>
	<div component="chat/message/body" class="message-body">
		<!-- IF messages.edited -->
		<small class="text-muted pull-right" title="[[global:edited]] {messages.editedISO}"><i class="fa fa-edit"></i></span></small>
		<!-- ENDIF messages.edited -->
		<!-- IF !config.disableChatMessageEditing -->
		<!-- IF messages.self -->
		<div class="pull-right btn-group controls">
			<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>
			<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>
		</div>
		<!-- ENDIF messages.self -->
		<!-- ENDIF !config.disableChatMessageEditing -->
		{messages.content}
	</div>
</li>
<!-- END messages -->
	</ul>
	<div class="input-group">
		<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="1" <!-- IF !canReply -->readonly<!-- ENDIF !canReply -->></textarea>
		<span class="input-group-btn">
			<button class="btn btn-primary" type="button" data-action="send" <!-- IF !canReply -->disabled<!-- ENDIF !canReply -->>[[modules:chat.send]]</button>
		</span>
	</div>
	<span component="chat/message/length">0</span>/<span>{maximumChatMessageLength}</span>
</div>
<!-- ELSE -->
<div class="alert alert-info">
	[[modules:chat.no-messages]]
</div>
<!-- ENDIF roomId -->