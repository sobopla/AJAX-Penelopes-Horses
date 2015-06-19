# my index route for showing all caballos
get '/caballos' do
  @caballos = Caballo.all
  erb :"/caballos/index"
end

get '/caballos/new' do
  @caballo = Caballo.new
  erb :"/caballos/new"
end

post '/caballos' do
  @caballo = Caballo.create(params[:caballo])
  if @caballo.valid?
    redirect '/caballos'
  else
    @errors = "All fields must be present. Try again."
    erb :"/caballos/new"
  end
end

get '/caballos/:id' do
  @caballo = Caballo.find(params[:id])
  erb :"/caballos/show"
end
