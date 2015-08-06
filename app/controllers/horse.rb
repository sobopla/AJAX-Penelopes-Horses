get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new
  erb :"/horses/new"
end

post '/horses' do
  @horse = Horse.create(params[:horse])
  if @horse.valid?
    redirect '/horses'
  else
    erb :"/horses/new"
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  erb :"/horses/show"
end
