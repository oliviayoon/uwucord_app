![](app/assets/images/pink_wogo.png)

# uwucord

uwucord is a pixel perfect clone of Discord. This single page app allows users communicate with others through servers. Users can create their own server or join an existing one with a unique invite token. Each server comes equipped with a general channel and users are able to freely create additional chat channels. Users are also able to communicate with each other with real-time messaging.

## Run Locally

1. Clone repo - `gh repo clone oliviayoon/uwucord_app`
2. Install node dependencies - `npm i`
3. Install gem files - `bundle install`
4. Create and seed DB - `rails db:migrate db:seed`
5. Start server - `rails s`
6. Go to live server on `localhost:3000`

## Technologies Used

* React/Redux - frontend
* Ruby on Rails - backend
* Postgresql - backend
* Heroku - hosting

## Prominent Features

### Live Messaging

One of the most challenging features of this app was introducing live messaging capability through Action Cable. Once a user sends a message, it will get broadcasted via Action Cable to other users that are subscribed to the server where the message came from.

```rb
def create
  @message = Message.new(body: params[:message][:body], channel_id: params[:message][:channelId], author_id: current_user.id)
  if @message.save
      ActionCable
          .server
          .broadcast("room-#{@message.server.id}:messages",
              message: {
                  id: @message.id,
                  authorId: @message.author_id,
                  createdAt: @message.created_at,
                  channelId: @message.channel_id,
                  body: @message.body
              }
          )
      render :create
  else
      render json: @messages.errors.full_messages, status: 422
  end
end
```

### Message Blocks

If the last message sent was from the current user, messages will be added to its own message block so that it renders within the same message container instead of creating a new one.

```js
const channelId = ownProps.location.pathname.split("/")[3]
  const messages =  Object.values(state.entities.messages).filter(message => message.channelId == channelId)
  let currentUser = null;
  let prevUser = null;
  const messageBlocks = [];
  let messageBlock = [];
  for (let i = 0; i < messages.length; i++ ) {
      currentUser = messages[i].authorId;
      if ( prevUser != currentUser ) {
          prevUser = currentUser
          if (messageBlock.length > 0)
              messageBlocks.push(messageBlock);
              messageBlock = [ messages[i] ];
          } else {
              messageBlock.push(messages[i]);
          }
  }
  messageBlocks.push(messageBlock);
```

![](app/assets/images/live-messages.gif)

## Future Features

* Direct messages
* Public servers list
