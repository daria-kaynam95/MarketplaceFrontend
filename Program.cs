var builder = WebApplication.CreateBuilder(args);

// Добавляем EmailService и другие зависимости
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy
            .WithOrigins("http://localhost:3000", "https://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

// Swagger только в режиме разработки
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Порядок вызова Middleware
app.UseCors("AllowReactApp");       
app.UseHttpsRedirection();           
app.UseAuthorization();              
app.MapControllers();                
app.Run();                           

